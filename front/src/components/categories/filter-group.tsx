import Image from "next/image";
import { FilterItem } from "./filter-item";
import { useState } from "react";

export const FilterGroup = () => {
    const [opened, setOpened] = useState(true);
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
                <div className="flex-1 font-bold text-xl">Nome do grupo</div>
                <div className="size-8 flex justfy-center-items-center cursor-pointer" onClick={() => setOpened(!opened)}>
                    <Image
                        className={`${opened ? 'rotate-0' : 'rotate-180'} transition-transform duration-300`}
                        src={'/assets/ui/arrow-left-s-line.png'}
                        alt="arrow-left"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
            <div className={`flex flex-col overflow-y-hidden ${opened ? 'max-h-96' : 'max-h-0'} transition-all duration-300`}>
                <FilterItem id={1} label={'item1'} />
                <FilterItem id={2} label={'item2'} />
                <FilterItem id={3} label={'item3'} />
            </div>
        </div>
    );
}