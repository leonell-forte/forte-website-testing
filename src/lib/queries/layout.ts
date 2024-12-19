export const layoutQuery = `
    query {
        header {
            logo {
              url
            }

            menu {
                label {
                    en

                    es
                }
                link
            }  

            buttonLabel {
                en

                es
            }
            
            buttonLink 
        }
        footer {
            logo {
                url
            }
                
            description {
                en

                es
            }
            links {
                label {
                    en

                    es
                }
                
                link
            }
                
            socials {
                label {
                    en

                    es
                }
                
                link
            }
                
            credits {
                en

                es
            }
        }
    }
`;
