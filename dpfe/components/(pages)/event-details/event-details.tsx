'use client'

import TicketCard from "@/components/layout/main-content-component/ticket-card";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import Title from "@/components/ui/title";
import { useModal } from "@/hooks/useModal";
import CalendarIcon from "@/public/icons/calendar";
import LocationIcon from "@/public/icons/location";
import TicketIcon from "@/public/icons/ticket";
import router from "next/router";
import { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import SeatSelection from "@/components/layout/eventDetails-component/theater";


interface Ticket {
  name: string;
  price: number;
  quantity: number;
}

type Timetable = {
  Date: string;
  StartTime: string;
  EndTime: string;
};

interface EventData {
  eventId: number;
  Image: string;
  Title: string;
  Price: string;
  Description: string;
  locationName: string;
  organizerName: string;
  Date: string;
  Address: string;
  khorooName: string;
  districtName: string;
  cityName: string;
  Timetables: Timetable[];
  Tickets: Ticket[];
}

export default function EventDetailsPage() {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const { isOpenPayment, openModalPayment, closeModalPayment} = useModal();
  const [event, setEvent] = useState<any>(null);
  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTimetable, setSelectedTimetable] = useState<Timetable | null>(null);


  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('token');

  
  useEffect(() => {
    setIsClient(true);  
  }, []);

  const handleButtonClick = () => {
    alert('Төлбөр төлөгдсөн.');
    if (isClient) {
        closeModalPayment();
        closeModal();
    }
  };

  const updateQuantity = (index: number, quantity: number) => {
    const updated = [...tickets];
    updated[index].quantity = quantity;
    setTickets(updated);
  };
  
  const total = tickets.reduce((sum, ticket) => sum + (ticket.price * ticket.quantity), 0);
  const selectedTickets = tickets.filter(ticket => ticket.quantity > 0);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/event/${eventId}`);
        const data = await res.json();
        setEvent(data);
  
        if (data?.Tickets && Array.isArray(data.Tickets)) {
          const initialTickets = data.Tickets.map((ticket: any) => ({
            name: ticket.Type,
            price: ticket.Price,
            quantity: 0, // эхэндээ хэрэглэгч тасалбар сонгоогүй
          }));
          setTickets(initialTickets);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
  
    if (eventId) fetchEvent();
  }, [eventId]);
  
  return (
    <div>
      {/* Event poster */}
      <div className="w-full h-100 rounded-md overflow-hidden bg-[#ebe9e8]">
        {event ? (
            <img 
              key={event.eventId}
              src={`/uploads/${event.Image}`} 
              alt="Event Image"
              className="w-full h-full object-contain object-center"
            />
          ) : (
            <p>No event available</p>
          )}
      </div>

      {/* Event details */}
      <div className="flex p-5 pl-10 pr-10 gap-20">
      {event && (
        <>
        <div className="w-2/3">
          <Title 
            name={event.Title} 
            size="xxxl" 
            weight="bold" 
            className="text-[#1E0A3C] mt-5" 
          />
          
          <div className="w-full h-18 rounded-md bg-gradient-to-r from-purple-100 to-blue-100 flex items-center gap-5 p-10 mt-10 mb-10">
            Зохион байгуулагч: 
            <Title name={event.organizerName}  size="base" weight="medium"/>
          </div>

          <Title name="ОГНОО" size="lg" weight="medium"/>
          <div className="flex gap-5">
            {event.Timetables?.map((timetable: Timetable, index: number) => (
              <div 
                key={index}
                onClick={() => setSelectedTimetable(timetable)}
                className={`flex flex-col cursor-pointer mt-3 mb-8 pt-3 pb-3 gap-2 w-[180px] items-center justify-center text-center shadow rounded-lg
                  ${selectedTimetable === timetable 
                    ? "bg-[#EFEFEF] "
                    : "bg-white text-black"
                  }`}
              >

                <CalendarIcon />
                <div className="flex flex-col gap-1 text-sm font-light">
                  <p className="text-base font-normal">{timetable.Date}</p>
                  <p>Эхлэх цаг: {timetable.StartTime}</p>
                  <p>Дуусах цаг: {timetable.EndTime}</p>
                </div>
              </div>
            ))}
          </div>


          <Title name="ХААНА" size="lg" weight="medium"/>
          <div className="flex gap-5 pt-3">
            <LocationIcon color="#000000"/>
            <div className="flex flex-col gap-1 text-sm font-light">
              <p className="text-base font-normal"> {event.locationName} </p>
              <p>Хот / Аймаг: {event.cityName}</p>
              <p>Сум / Дүүрэг: {event.districtName}</p>
              <p>Баг / Хороо: {event.khorooName} </p>
            </div>
          </div>

          <div className="flex flex-col mt-8 gap-3">
            <Title name="ДЭЛГЭРЭНГҮЙ" size="lg"/>
            <p className="text-base">
              {event.Description}
            </p>
          </div>
        </div>

        {/* Ticket sidebar */}
        <div className="flex flex-col gap-3 w-1/3 h-32 border rounded-md p-5 m-10">
          <Title name="Тасалбар худалдан авах" weight="medium" size="base" className="text-center"/>
          <div className="flex gap-1 ">
            {/* <TicketIcon/> {event ? event.Tickets.Price : '0'}₮  */}
          </div>
          {selectedTimetable && (
            <Button variant="loginButton" onClick={openModal}>Тасалбар сонгох</Button>
          )}
          
        </div>
        </>
        )}
      </div>

      
      

      {/* Ticket Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[1000px] h-[600px]">
        <div className="flex gap-5">
            <div className="flex flex-col w-2/3 p-10 h-[600px]">
                <Title name="Тасалбар захиалах" size="xl" className="text-[#1E0A3C]"/>
                <div className="flex-1 overflow-y-auto flex flex-col gap-5 mt-5">
                {tickets.map((ticket, index) => (
                  <TicketCard
                    key={index}
                    name={ticket.name}
                    price={ticket.price}
                    quantity={ticket.quantity}
                    onChange={(quantity) => updateQuantity(index, quantity)}
                  />
                ))}

                </div>

                <div className="flex pt-10 justify-end">
                {selectedTimetable && (
                  <Button 
                    variant="greyButton" 
                    onClick={() => {
                      if (!isLoggedIn) {
                        alert("Хэрэглэгч нэвтрэх шаардлагатай.");
                        router.push("/login"); // эсвэл хүссэн зам руу
                        return;
                      }
                      openModalPayment();
                    }}
                  >
                    Захиалга хийх
                  </Button>
                )}

                </div>
            </div>
            {/* <SeatSelection/> */}


          {/* Order summary */}
          <div className="h-[600px] w-1/3 border bg-[#F8F7FA] flex flex-col gap-5">
          {event && (
            <>
              <img 
                src={`/uploads/${event.Image}`} 
                alt="Poster"
                className="w-full h-[180px] object-center"
              />
            </>
          )}

            <div className="p-5">
                <Title name="Захиалгын мэдээлэл" size="base" className="font-medium text-gray-700 "/>
                {selectedTickets.length === 0 ? (
                <p className="mt-5">Тасалбар сонгоогүй байна.</p>
                ) : (
                <div className="flex flex-col gap-2 mt-5">
                    {selectedTickets.map((ticket, index) => (
                    <div key={index} className="flex justify-between">
                        <span>{ticket.name} x {ticket.quantity}</span>
                        <span>{(ticket.price * ticket.quantity).toLocaleString()}₮</span>
                    </div>
                    ))}
                </div>
                )}

                <div className="border-t pt-3 mt-3 font-bold text-lg flex justify-between">
                <span>Нийт:</span>
                <span>{total.toLocaleString()}₮</span>
                </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Payment model */}
      <Modal isOpen={isOpenPayment} onClose={closeModalPayment} className="max-w-[500px] h-[500px]">
        <div className="flex flex-col gap-5 p-20 justify-center items-center">
          {/* Төлбөр хэлбэр сонгох хэсэг нэмэх */}
            <img
                src="/images/QR_code.png" 
                alt="QPay"
                className="w-[170px] h-[170px] object-contain"
            />
            <p className="text-lg font-medium">Нийт төлөх дүн: {total.toLocaleString()}₮</p>
            <Button variant="greyButton" className="w-[200px]" onClick={handleButtonClick}>Төлбөр шалгах</Button>
        </div>
      </Modal>
    </div>
  );
}
