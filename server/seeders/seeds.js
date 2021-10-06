const faker = require("faker");

const db = require("../config/connection");
const { Photo, User } = require("../models");

db.once("open", async () => {
  await Photo.deleteMany({});
  await User.deleteMany({});

  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(
        Math.random() * createdUsers.ops.length
      );
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  let createdPhotos = [];
  for (let i = 0; i < 100; i += 1) {
    //const photoText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdPhoto = await Photo.create({
      username,
      votes: [{ voteValue: true, username: "user123" }],
    });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { photos: createdPhoto._id } }
    );

    createdPhotos.push(createdPhoto);
  }
  //vote
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomPhotoIndex = Math.floor(Math.random() * createdPhotos.length);
    const { _id: photoId } = createdPhotos[randomPhotoIndex];

    await Photo.updateOne(
      { _id: photoId },
      {
        $push: {
          votes: {
            username,
            voteValue: Math.random() > 0.5 ? true : false,
          },
        },
      },
      { runValidators: true }
    );
  }

  process.exit(0);
});
