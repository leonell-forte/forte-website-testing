export const pageQuery = `
    query {
        allPages {
            id
            
            title
            
            slug
        }
    }
`;

export const individualPageQuery = (id: string) => {
  return `
    query {
        page (filter: {
            id: { eq: ${id} }
        }) {
            components {
                id

                mainText

                secondaryText

                buttonLabel

                mobileImage{
                url
                }

                desktopImage {
                        url
                }

                __typename
            }
        }
    }
`;
};
