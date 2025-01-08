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

                    bullet

                    subtext {
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

export const aboutHeroSectionQuery = `
     ... on AboutHeroRecord {
          __typename
          
          title {
            en

            es
          }

          desktopImage {

            url

          }

          mobileImage {

            url
            
          }

          heading {

            en

            es

          }

          subheading {
          
            en

            es
            
          }

          mobilePadding

          tabletPadding

          desktopPadding
          
      }   
 `;

export const teamSectionQuery = `
     ... on TeamSectionRecord {
          __typename
          
          id
            
          title {
          
            en

            es

          }
              
          members {
          
            name 

            positionName {

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

export const privacyPolicyQuery = `
     ... on PrivacyPolicyRecord {
          __typename
          
          title {
            en

            es
          }

          content {
            en {
              value            
            }

            es {
              value            
            }

          }

      }
 `;

export const communitiesQuery = `
 ... on CommunitySectionRecord {
          __typename
          sections {
            partners {
              title {
                en
                es
              }
              partner {
                image {
                  url
                }
              }
              mobilePadding
              tabletPadding
              desktopPadding
            }
            testimonial {
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
              backgroundImage {
                url
              }
              mobilePadding
              tabletPadding
              desktopPadding
            }
            trustedBy {
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
            cta {
              mobileBackground {
                url
              }
              desktopBackground {
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
              buttonLabel {
                en
                es
              }
              buttonLink
              mobilePadding
              tabletPadding
              desktopPadding
            }
          }
        }
`;
