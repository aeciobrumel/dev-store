'use client';

import { Banner } from "@/types/banner";
import { clear } from "console";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { set } from "zod";

type Props = {
    list: Banner[];
}

let bannerTimer: NodeJS.Timeout;
let bannerTime = 6000;

export const Banners = ({ list }: Props) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage(currentImage => {
            if (currentImage + 1 >= list.length) {
                return 0;
            } else {
                return currentImage + 1;
            }
        });
    }

    const handleBannerClick = (index: number) => {
        setCurrentImage(index);
        clearInterval(bannerTimer);
        bannerTimer = setInterval(nextImage, bannerTime);

    };
    useEffect(() => {
        bannerTimer = setInterval(nextImage, bannerTime);
        return () => clearInterval(bannerTimer);
    }, []);

    return (
        <div>
            <div className="relative aspect-[3/1] ">
                {list.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className="absolute inset-0 transition-all "
                        style={{ opacity: currentImage === index ? 1 : 0 }}
                    >
                        <Image
                            src={item.img}
                            alt=""
                            width={1200}
                            height={400}
                            className="rounded-sm"
                        />
                    </Link>
                ))}
            </div>
            <div className="mt-4 flex justify-center gap-4 cursor-pointer">
                {
                    list.map((item, index) => (
                        <div
                            key={index}
                            className="size-4 bg-blue-600 rounded-full"
                            style={{ opacity: currentImage === index ? 1 : 0.4 }}
                            onClick={() => handleBannerClick(index)}
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    );
}