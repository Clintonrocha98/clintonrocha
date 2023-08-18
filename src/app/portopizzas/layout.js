import "../../styles/reset.scss";

import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { LocalStorageProvider } from "@/app/portopizzas/hooks/useContext";
import ContainerApp from "./components/ContainerApp";
import "animate.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
});

export const metadata = {
    title: "Porto Pizzas",
    description: "Porto Pizzas!, faça seu pedido!",
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
