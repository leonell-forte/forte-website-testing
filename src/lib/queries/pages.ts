import {
  bigCardSectionQuery,
  cardSectionQuery,
  carouselSectionQuery,
  ctaSectionQuery,
  featureSectionQuery,
  heroSectionQuery,
  infiniteCarouselQuery,
  partnersSectionQuery,
  smallCardSectionQuery,
} from "./component";
import { topicListQuery } from "./lists";

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

            title

           containers {

                mobileBackgroundImage {
                    url
                }

                desktopBackgroundImage {
                    url
                }
           
                components {

                    ${heroSectionQuery}

                    ${cardSectionQuery}

                    ${featureSectionQuery}

                    ${ctaSectionQuery}

                    ${smallCardSectionQuery}

                    ${bigCardSectionQuery}

                    ${partnersSectionQuery}

                    ${carouselSectionQuery}

                    ${topicListQuery}

                    ${infiniteCarouselQuery}

                }

           }
        }
    }
`;
};
