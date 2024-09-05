import { gql } from '@apollo/client';

export const GET_OSSC = gql`
  query GetOssc {
    base_ossc {
      draft
      has_internet_access
      description
      name
      created_at
      updated_at
      admin_id
      city_id
      country_id
      district_id
      id
      region_id
      subcity_id
      woreda_id
    }
  }
`;
