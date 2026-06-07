type Props = {
    id: number;
    label: string;
};

export const FilterItem = ({ id, label }: Props) => {
    return (
        <div className="flex gap-4 items-center text-gray-500 mt-4 ">
            <input type="checkbox" className="size-6" id={`ck-${id}`} />
            <label htmlFor={`ck-${id}`} className="ml-2" >{label}</label>
        </div>
    );
}