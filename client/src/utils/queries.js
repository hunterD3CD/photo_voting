import gql from "graphql-tag";

// export const GET_ME = gql`
//   {
//     me {
//       _id
//       username
//       email
//       Photo {
//         _id: ID
//         createdAt: String
//         username: String
//         voteCount: Int
//         votes: [Vote]
//       }
//     }
//   }
// `;

export const QUERY_PHOTOS = gql`
query photos {
  photos {
    _id
    likes
    username
    voteCount
    dislikes
    votes {
      username
      voteValue
    }
  }
}
`;
