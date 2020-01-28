import gql from 'graphql-tag';

export const GET_CITYS = gql`
{
    allCmCities(first: 10) {
      nodes {
        city
        fkRegions
        fkState
        erpCode
        pkCity
      }
    }
  }
`;
