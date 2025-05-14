import Image from "next/image";

export default function SearchInput(){
    return (
        <div className="flex items-center border border-[#CDCDCD] rounded-md px-3 w-64 h-10">
            <input
                type="text"
                placeholder="Хайх"
                className="flex-1 outline-none font-light italic text-sm"
            />
            <Image src="/icons/search.svg" alt="search" width={18} height={18} className="mr-2" />
        </div>
    )
}