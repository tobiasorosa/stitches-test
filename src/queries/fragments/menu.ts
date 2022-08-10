export const MenuFragment = `
fragment MenuFragment on MenuItem {
  id
  label
  url
  path
}
`;

export const MegaMenuFragment = `
menus(first: 1000) {
  edges {
    node {
      id
      name
      menuItems(first: 1000) {
        edges {
          node {
            id
            url
            label
            parentId
          }
        }
      }
      locations
    }
  }
}
`;
