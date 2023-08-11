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
    title: "Pizzaria Porto",
    description:
        "Bem-vindo à Pizzaria Porto! Somos um lugar acolhedor onde você pode saborear deliciosas pizzas artesanais preparadas com ingredientes frescos e autênticos. Nossa atmosfera convida você a desfrutar de momentos saborosos com amigos e familiares. Venha se deliciar com nossas variedades de sabores únicos, unindo tradição e sabor de maneira especial.",
    icons: { icon: "/favicon/logo.png" },
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
