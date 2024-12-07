export const heroSectionQuery = `
    ... on HeroSectionRecord {
        __typename

        mainText

        secondaryText

        buttonLabel

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
