import Image, { StaticImageData } from "next/image";

type Props = {
    src: StaticImageData;
    alt: string;
    selected?: boolean;
    srcSelected?: StaticImageData;
}

export const HeaderIcon = ({ src, alt, selected, srcSelected }: Props) => {
    return (
        <div className={` transition-colors duration-200 size-12 border border-gray-200 ${selected ? 'bg-blue-700 hover:bg-blue-700/70' : ' hover:bg-gray-100'} rounded-sm flex items-center justify-center`}>
            <Image src={selected && srcSelected ? srcSelected : src} alt={alt} width={24} height={24} />
        </div>
    );
}