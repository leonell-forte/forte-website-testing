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

        mobilePadding

        tabletPadding

        desktopPadding
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

        mobilePadding

        tabletPadding

        desktopPadding
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

            mobilePadding

            tabletPadding

            desktopPadding
        }
 `;

export const smallCardSectionQuery = `
  ... on SmallCardSectionRecord {
            __typename

            title

            description

            smallCards {
              title
              
              description
              
              link
            }
          }
 `;

export const bigCardSectionQuery = `
   ... on BigCardSectionRecord {
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
 `;

export const partnersSectionQuery = `
     ... on PartnersSectionRecord {
            __typename

            title

            flex
            
            partner {
              image {
                url
              }
            }
          }
 `;

export const carouselSectionQuery = `
          ... on CarouselSectionRecord {
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
 `;

export const ctaSectionQuery = `
  ... on CtaSectionRecord {
      __typename
  
      title
      
      description
      
      buttonLink
      
      buttonLabel
      
      mobileBackground {
        url
      }
        
      desktopBackground {
        url
      }
    }
 `;
