import {gql} from '@apollo/client';

// QUERY
export const GET_POOL = gql`
query Query {
    poolOne {
      rank {
        name
        _id
      }
      _id
      users {
        name
        rank {
          name
          _id
        }
        points
        _id
      }
    }
  }
`;

export const UPDATE_POOL = gql`
mutation Mutation($id: MongoID!, $record: UpdateByIdPoolInput!, $user: String) {
    poolUpdateById(_id: $id, record: $record, user: $user) {
      record {
        rank {
          name
          _id
        }
        _id
        users {
          name
          rank {
            name
            _id
          }
          points
          _id
        }
      }
    }
  }
  
`
