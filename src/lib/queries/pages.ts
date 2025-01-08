import {
  aboutHeroSectionQuery,
  bigCardSectionQuery,
  cardSectionQuery,
  carouselSectionQuery,
  communitiesQuery,
  ctaSectionQuery,
  featureSectionQuery,
  heroSectionQuery,
  infiniteCarouselQuery,
  partnersSectionQuery,
  privacyPolicyQuery,
  smallCardSectionQuery,
  teamSectionQuery,
} from "./component";
import { topicListQuery } from "./lists";

export const pageQuery = `
    query {
        allPages {
            id
            
            title {
                en

                es
            }
            
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

            title {
                en

                es
            }

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

                    ${aboutHeroSectionQuery}

                    ${teamSectionQuery}

                    ${privacyPolicyQuery}

                    ${communitiesQuery}

                }

           }
        }
    }
`;
};
