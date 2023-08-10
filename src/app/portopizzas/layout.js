import "../../styles/reset.scss";
import { Roboto } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import ContainerApp from "./components/ContainerApp";
import { Toaster } from "react-hot-toast";
import { LocalStorageProvider } from "@/hooks/useContext";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "Porto Pizzas",
    description: "Porto Pizzas",
};

export default function PortoPizzasLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={roboto.className}>
                <Toaster />
                <LocalStorageProvider>
                    <ContainerApp>{children}</ContainerApp>
                </LocalStorageProvider>
                <Analytics />
            </body>
        </html>
    );
}
