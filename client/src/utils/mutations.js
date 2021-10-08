import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const ADD_PHOTO = gql`
  mutation addPhoto($input: addPhoto) {
    addPhoto(input: $input) {
      Photo {
        _id: ID
        createdAt: String
        username: String
      }
    }
  }
`;

export const VOTE_PHOTO = gql`
  mutation votePhoto($photoId: String!) {
    votePhoto(photoId: $photoId) {
      voteValue: Boolean
    }
  }
`;

export const COUNT_PHOTO = gql`
  mutation countVote($photoId: String!) {
    countVote(photoId: $photoId) {
      _id
      Photo {
        createdAt: String
        username: String
      }
    }
  }
`;
