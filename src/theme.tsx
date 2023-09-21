import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
    colors: {
        color: {
            // S = Solid, G = Gradient
            redS: "#6F0000",
            redG: "linear-gradient(174deg, rgba(15,12,41,1) 0%, rgba(111,0,0,1) 100%)",
            dark: "#0F0C29",
            white: "#FFFFFF",
            lightS: "#FFEFBA",
            lightG: "linear-gradient(174deg, rgba(255,255,255,1) 0%, rgba(255,239,186,1) 100%)",
            goldS: "#F8B500",
            goldG: "linear-gradient(174deg, rgba(225,239,186,1) 0%, rgba(248,181,0,1) 100%)",
        },
    },
})

export default Theme;
