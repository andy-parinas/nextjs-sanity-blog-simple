"use client"

import {ThemeProvider} from "next-themes";
import {ReactNode} from "react";

function ThemeProviders({children}: {children: ReactNode}) {

    return <ThemeProvider defaultTheme="dark" enableSystem>
        {children}
    </ThemeProvider>
}

export default ThemeProviders