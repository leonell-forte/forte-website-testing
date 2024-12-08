export const heroSectionQuery = `
    ... on HeroSectionRecord {
        __typename

        mainText

        secondaryText

        buttonLabel

        buttonLink

        mobileImage {
            url
        }

        desktopImage {
            url
        }
    }
`;

export const cardSectionQuery = `
    ... on CardSectionRecord{
        __typename

        header

        description

         cards {
            title
            
            description
            
            image {
                url
            }
        }
    }
 `;

export const featureSectionQuery = `
     ... on FeatureSectionRecord {
            __typename

            title

            features {
                title
                
                headline
                
                description
                
                image {
                    url
                }
                
                points {
                    description
                }
            }
        }
 `;

export const contentSectionQuery = `
   ... on ContentSectionRecord {
        __typename

        backgroundImage {
          url
        }

        content {
          ... on SmallCardContentRecord {
            __typename

            title

            description

            smallCards {
              title
              
              description
              
              link
            }
          }
            
          ... on BigCardContentRecord {
            __typename

            title
            
            description
            
            bigCard {
              image {
                url
              }
                
              title
              
              description
            }
          }
          
          ... on PartnersContentRecord {
            __typename

            title

            flex
            
            partner {
              image {
                url
              }
            }
          }

           ... on CarouselContentRecord {
            __typename

            backgroundImage {
              url
            }

            carouselItems {
              mainText

              secondaryText

              image {
                url
              }
            }
          }
        }
      }
 `;
