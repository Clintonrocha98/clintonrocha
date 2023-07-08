import "../styles/reset.scss";
import { Roboto } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "Clinton Rocha",
    description: "Portfólio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
