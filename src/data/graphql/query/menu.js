import gql from 'graphql-tag';

export const GET_MENU = gql`
{
  allGeralMenus {
    nodes {
      icon
      id
      link
      title
      geralMenuDropsByDrop {
        nodes {
          subtitle
          link
        }
      }
    }
  }
}

`;
