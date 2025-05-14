
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import LocationIcon from "@/public/icons/location";
import TicketIcon from "@/public/icons/ticket";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageUploader from "./ImageUploader";


// Props интерфейс үүсгэж, тип тодорхойлох
interface EventProps {
    id: number;
    posterSrc: string;
    title: string;
    organizer: string;
    price: string;
    location: string;
    date: string;
  }

export default function Event({ id, posterSrc, title, price, location, date, organizer }: EventProps){
    const router = useRouter();


    return (
        <div className="w-[270px] h-[450px] rounded-md border-1 border-solid bg-white flex flex-col gap-2 event-card">
            <img 
                src={`/uploads/${posterSrc}`} 
                alt="event image"
                className="w-full h-[180px] rounded-md"
            />
            <div className="pl-6 pr-6">
                <div className="flex items-center gap-3 pt-1 pb-3">
                    <Title name={organizer} size="sm" className="text-[#656060]"/>
                </div>
                <div className="h-20">
                    <Title name={title} size="lg" className="border-t-1 border-solid w-full pt-3 pb-3"/>
                </div>
                <div className="flex items-center gap-2">
                    <TicketIcon/>
                    <p className="text-xs font-semibold text-[#656060]"> {price}₮ </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-light text-[#656060] pt-3 pb-4 justify-between">
                    <div className="flex items-center gap-1">
                        <LocationIcon/>
                        <p> {location} </p>
                    </div>
                    
                    <div>
                        <p> {date} </p>
                    </div>
                </div>
                
                <Button 
                    variant="greyButton" 
                    size="greyButton" 
                    onClick={() => router.push(`/event-details?id=${id}`)}
                    >
                    Тасалбар захиалах
                </Button>
            </div>
        </div>
    );
}
