export const layoutQuery = `
    query {
        header {
            logo {
              url
            }

            menu {
                label
                link
            }  

            buttonLabel
            
            buttonLink 
        }
        footer {
            logo {
                url
            }
                
            description
            links {
                label
                
                link
            }
                
            socials {
                label
                
                link
            }
                
            credits
        }
    }
`;
