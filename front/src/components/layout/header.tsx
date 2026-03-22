"use client"
import Image from "next/image";
import logo from "../../../public/assets/ui/logo-black.png";
import Link from "next/link";
import user from "../../../public/assets/ui/user-line.png";
import cart from "../../../public/assets/ui/shopping-bag-4-line.png";
import menu from "../../../public/assets/ui/menu-line.png";
import menuWhite from "../../../public/assets/ui/menu-line-white.png";
import seta from "../../../public/assets/ui/arrow-up-right.png";
import { HeaderIcon } from "./header-icon";
import { useState } from "react";

type menuItem = {
    label: string;
    href: string;
}

export function Header() {
    const [menuOpened, setMenuOpened] = useState(false);
    const menuItems: menuItem[] = [
        { label: "Camisetas", href: "/camisetas" },
        { label: "Acessórios", href: "/acessorios" },
        { label: "Kits B7Web", href: "/kits" },
        { label: "Eletrônicos", href: "/eletronicos" },
    ];

    return (
        <header className="bg-white border-b border-gray-200" >
            <div className="bg-black text-white text-[16px] p-4 text-center">
                <strong>FRETE GRÁTIS</strong> para todo o Sul nas compras acima de R$ 199,00.<strong> APROVEITA!</strong>
            </div>
            <div className="p-6 w-full max-w-6xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="">
                        <Link href="/">
                            <Image src={logo} alt="Logo da empresa" width={120} height={40} />
                        </Link>
                    </div>
                    <div className="flex gap-4">

                        <Link href={'/my-orders'}>
                            <HeaderIcon src={user} alt="Ícone de usuário" />
                        </Link>

                        <Link href="/cart">
                            <HeaderIcon src={cart} alt="Ícone de carrinho" />
                        </Link>

                        <div className={`pointer md:hidden`} onClick={() => setMenuOpened(!menuOpened)}>
                            <HeaderIcon src={menu} alt="Ícone de menu" selected={menuOpened} srcSelected={menuWhite} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${menuOpened ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className={`md:hidden transition-all duration-200 ease-out ${menuOpened ? 'translate-y-0' : '-translate-y-2'}`}>
                    {menuItems.map((item) => (
                        <Link key={item.label} href={item.href} >
                            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                                <div className="font-medium text-lg text-gray-500">
                                    {item.label}
                                </div>
                                <div>
                                    <Image src={seta} alt="ir à categoria" width={24} height={24} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="p-6 md:hidden">
                busca
            </div>
        </header>
    );
}