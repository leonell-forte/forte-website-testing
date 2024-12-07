import { cardSectionQuery, heroSectionQuery } from "./component";

export const pageQuery = `
    query {
        allPages {
            id
            
            title
            
            slug

            __typename
        }
    }
`;

export const individualPageQuery = (id: string) => {
  return `
    query {
        page (filter: {

            id: {eq: "${id}"}

                }) {

            components {

                ${heroSectionQuery}

                ${cardSectionQuery}
                
            }
        }
    }
`;
};
