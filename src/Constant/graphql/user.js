import {gql} from '@apollo/client';

// QUERY
export const GET_USER_BY_ID = gql`
query Query($id: MongoID!) {
  userById(_id: $id) {
    name
    rank
    points
    _id
  }
}
`;

export const GET_ALL_USERS = gql`
  query Query {
    userMany {
      name
      rank
      points
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
