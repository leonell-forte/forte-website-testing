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
