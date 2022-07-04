// 主題樣式

import { createTheme } from "@mui/material/styles";
import { cyan } from "@mui/material/colors"

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: cyan[200],
            light: cyan[300]
        },
    },
    typography: {
        fontFamily: {
            "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
            "fontSize": 12,
            "fontWeightLight": 300,
            "fontWeightRegular": 300,
            "fontWeightMedium": 500,
        },
        allVariants: {
            color: "#1C7EBA"
        }
    }
})
