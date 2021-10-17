import {gql} from '@apollo/client';

// QUERY
export const GET_USER = gql`
  query Query($userId: String) {
    user(id: $userId) {
      id
      name
      rank {
        id
        name
        createAt
        updateAt
      }
      points
      createdAt
      updatedAt
    }
  }
`;

export const GET_ALL_USERS = gql`
  query Query {
    users {
      id
      name
      rank {
        id
        name
        createAt
        updateAt
      }
      points
      createdAt
      updatedAt
    }
  }
`;

// MUTATION
export const CREATE_USER = gql`
  mutation Mutation($name: String) {
    createUser(name: $name) {
      id
      name
      rank {
        id
        name
        createAt
        updateAt
      }
      points
      createdAt
      updatedAt
    }
  }
`;

// export const GET_ALL_USERS = gql`
//   query Query {
//     users {
//       id
//       name
//     }
//   }
// `;
