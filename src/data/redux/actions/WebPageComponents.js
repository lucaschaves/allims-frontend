import gql from 'graphql-tag'
import {FETCH_WPC} from '../constants'

const fetchWebPageComponents = (id, name) => ({
    type: FETCH_WPC,
    request: {
      query: gql`
        query {
          allSysTypes(condition: { idType: 201 }) {
            nodes {
              sysPagesByIdType(condition: { name: "person" }) {
                nodes {
                  name
                  id
                  entity
                  title
                  query
                  sysComponentsByIdPage(condition: { deprecated: false }) {
                    nodes {
                      path
                      name
                      title
                      placeholder
                      complement
                      hint
                      default
                      required
                      readonly
                      disabled
                      hidden
                      expression
                      field
                      listKey
                      listName
                      listUrl
                      dataUrl
                      options
                      min
                      max
                      step
                      regex
                      sysTypeByIdType {
                        name
                        title
                        id
                      }
                      sysTypeByIdTypeOption {
                        name
                        title
                        id
                      }
                      sysPageByIdPage {
                        name
                        id
                        entity
                        title
                      }
                      id
                      width
                      widthMd
                      widthLg
                      widthSm
                      widthXs
                      queryApi
                      height
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { id },
    },
  });
  
  export default fetchWebPageComponents;