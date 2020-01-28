import gql from 'graphql-tag';

export const GET_WEB_PAGE_COMPONENTS = gql`
    
    {
      allSysTypes(condition: { idType: 201 }) {
        nodes {
          sysPagesByIdType(condition: { name: "person" }) {
          # sysPagesByIdType(condition: { name: $name }) {
            nodes {
              name
              id
              entity
              title
              query
              sysComponentsByIdPage(condition: { deprecated: false }, orderBy: ORDER_ASC) {
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
  `
