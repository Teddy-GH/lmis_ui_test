
import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SignIn($password: String!, $phoneNumber: String!) {
    signIn(password: $password, phoneNumber: $phoneNumber) {
      data {
        email
        phoneNumber
        id
      }
      tokens {
        access_token
        refresh_token
      }
    }
  }
`;
