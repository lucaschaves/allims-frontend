import gql from 'graphql-tag';

export const GET_CUSTOM = ret => gql`
    {
      ${ret.dados}
    }
`;