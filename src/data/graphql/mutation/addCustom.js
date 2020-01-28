import gql from 'graphql-tag';

export const ADD_CUSTOM = gql`
    mutation MyCustom
        (
            $nation: String, 
            $erpCode: String, 
            $clearNation: String, 
            $abbrev: String
        ) 
        {
        createCmNation(
            input: {
                cmNation: {
                    nation: $nation
                    erpCode: $erpCode
                    clearNation: $clearNation
                    abbrev: $abbrev
                }
            }
        ) {
            clientMutationId
        }
    }
`;