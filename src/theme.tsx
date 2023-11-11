import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    colors: {
        red: {
            solid: "#6F0000",
            gradient: "linear-gradient(174deg, rgba(111,0,0,1) 0%, rgba(15,12,41,1) 100%)",
        }, 
        light: {
            solid: "#FFEFBA",
            gradient: "linear-gradient(174deg, rgba(255,255,255,1) 0%, rgba(255,239,186,1) 100%)",
        },
        gold: {
            solid: "#F8B500",
            gradient: "linear-gradient(174deg, rgba(225,239,186,1) 0%, rgba(248,181,0,1) 100%)",
        },
        dark: "#0F0C29",
        white: "#FFFFFF",
    },
    fonts: {
        heading: `Libre Baskerville`,
        body: `Lato.400`,

    },

    styles: {
        global: {
            h1: {
                fontFamily: 'Libre Baskerville',
                color: 'dark',
                fontSize: '4rem',
                fontWeight: 'bold',
            },
            h2: {
                fontFamily: 'Libre Baskerville',
                color: 'red.solid',
                fontSize: '2.1rem',
                fontWeight: 'light',
            },
            h3: {
                fontFamily: 'Libre Baskerville',
                color: 'dark',
                fontSize: '1.3rem',
                fontWeight: 'light',
            },
            h4: {
                fontFamily: 'Lato',
                color: 'dark',
                fontSize: '1.1rem',
                fontWeight: 'bold',
            },
            p: {
                color: 'dark',
            }

        }
    },

    components: {

        Button: {
            baseStyle: {
                borderRadius: '2px',
                m: '5px',
                _hover: {
                    shadow: 'xl',
                    transform: `scale(1.02)`,
                    color: 'red.solid',
                },
            },
            variants: {
                primary: {
                    color: 'dark',
                    background: 'gold.gradient',
                    shadow: 'md',
                    _hover: {
                        shadow: 'xl',
                        transform: `scale(1.02)`,
                        color: 'red.solid',
                    },
                },
                secondary: {
                    color: 'dark',
                    background: 'white',
                    borderColor: 'black',
                    borderType: 'solid',
                    borderWidth: '1px'
                },
                confirm: {
                    color: 'white',
                    background: 'red.gradient',
                    shadow: 'md',
                    _hover: {
                        shadow: 'xl',
                        transform: `scale(1.02)`,
                        color: 'white',
                    },
                },

                selected: {
                    color: 'dark',
                    background: 'gold.gradient',
                    shadow: 'md',
                    h: '1.5rem',
                    fontSize: '0.8rem',
                    borderRadius: '20px',
                    _hover: {
                        shadow: 'xl',
                        transform: `scale(1.02)`
                    },
                },
                select: {
                    color: 'gold.solid',
                    background: 'light.solid',
                    shadow: 'md',
                    h: '1.5rem',
                    fontSize: '0.8rem',
                    borderRadius: '20px',
                    _hover: {
                        shadow: 'xl',
                        transform: `scale(1.02)`
                    },
                },
            },
        },
    }
})

export default Theme;
