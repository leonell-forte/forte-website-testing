export const heroSectionQuery = `
    ... on HeroSectionRecord {
        __typename

        mainText {
          en

          es
        }

        secondaryText {
          en

          es
        }

        buttonLabel {
          en

          es
        }

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

        header {
          en

          es
        }

        description {
          en

          es
        }

         cards {
            title {
          en

          es
        }
            
        description {
          en

          es
        }
            
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

            title {
              en

              es
            }

            features {
                title {
                  en

                  es
                }
                
                headline {
                  en

                  es
                }
                
                description {
                  en

                  es
                }
                
                image {
                    url
                }
                
                points {
                    description {
                      en

                      es
                    }
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

            title {
              en

              es
            }

            description {
              en

              es
            }

            smallCards {
              title {
                en

                es
              }
              
              description {
                en

                es
              }
              
              link
            }

            mobilePadding

            tabletPadding

            desktopPadding
          }
 `;

export const bigCardSectionQuery = `
   ... on BigCardSectionRecord {
            __typename

            title {
              en

              es
            }
            
            description {
              en

              es
            }
            
            bigCard {
              image {
                url
              }
                
              title {
                en

                es
              }
              
              description {
                en

                es
              }
            }

            mobilePadding

            tabletPadding

            desktopPadding
          }
 `;

export const partnersSectionQuery = `
     ... on PartnersSectionRecord {
            __typename

            title {
              en

              es
            }

            flex
            
            partner {
              image {
                url
              }
            }

            mobilePadding

            tabletPadding

            desktopPadding
          }
 `;

export const carouselSectionQuery = `
          ... on CarouselSectionRecord {
            __typename

            backgroundImage {
              url
            }

            carouselItems {
              mainText {
                en

                es
              }

              secondaryText

              image {
                url
              }
            }

            mobilePadding

            tabletPadding

            desktopPadding
          }
 `;

export const ctaSectionQuery = `
  ... on CtaSectionRecord {
      __typename
  
      title{
        en

        es
      }
      
      description{
        en

        es
      }
      
      buttonLink
      
      buttonLabel{
        en

        es
      }
      
      mobileBackground {
        url
      }
        
      desktopBackground {
        url
      }

      mobilePadding

      tabletPadding

      desktopPadding
    }
 `;

export const infiniteCarouselQuery = `
     ... on InfiniteCarouselRecord {
          __typename
          
          title {
            en

            es
          }
          
          partner {
            image {
              url
            }
          }  
      }   
 `;
