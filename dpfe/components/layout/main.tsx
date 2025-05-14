"use client";
import RightArrowIcon from "@/public/icons/right-arrow";
import Title from "../ui/title";
import Category from "./main-content-component/category";
import Event from "./main-content-component/event";
import ImageSlide from "./main-content-component/image-slide";
import { useEffect, useState } from "react";

interface EventData {
  eventId: number;
  Image: string;
  Title: string;
  Price: string;
  locationName: string;
  organizerName: string;
  Date: string;
}

export default function Main() {
  const [events, setEvents] = useState<EventData[]>([]);
  const firstEvent = events[0];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/events");
        const data = await res.json();

        const sortedData = data.sort(
          (a: EventData, b: EventData) =>
            new Date(a.Date).getTime() - new Date(b.Date).getTime()
        );
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

    return (
        <div>
          <ImageSlide/>

        {/* Category */}
        <Category/>

        {/* Төлбөртэй эвент */}
        <div className="flex flex-col p-10 gap-5">
          <div className="border-b pb-5 flex items-center justify-between">
            <Title name="Тасалбартай эвент"/>
            <div className="flex items-center">
              <p className=" text-sm font-light text-[#656060]"> Бүгдийг үзэх </p>
              <RightArrowIcon/>
            </div>
          </div>
          
          <div className="flex gap-10 pt-5">
            {events.slice(0, 4).map((event) => (
              <Event
                id={event.eventId}
                posterSrc={event.Image}
                title={event.Title}
                organizer={event.organizerName}
                price={event.Price}
                location={event.locationName}
                date={new Date(event.Date).toISOString().split("T")[0]}
              />
            ))}
          </div>
        </div>
        

        {/* Үнэгүй эвент */}
        <div className="flex flex-col p-10 gap-5">
          <div className="border-b pb-5 flex items-center justify-between">
            <Title name="Үнэгүй эвентүүд"/>
            <div className="flex items-center">
              <p className=" text-sm font-light text-[#656060]"> Бүгдийг үзэх </p>
              <RightArrowIcon/>
            </div>
          </div>
          
          <div className="flex gap-10 pt-5">
            {/* {events.slice(0, 4).map((event) => (
              // <Event
              //   key={event.eventId}
              //   posterSrc={event.Image}
              //   title={event.Title}
              //   organizer={event.organizerName}
              //   price={event.Price}
              //   location={event.locationName}
              //   date={new Date(event.Date).toISOString().split("T")[0]}
              // />
            ))} */}
          </div>
        </div>


         {/* Бүх эвент */}
         <div className="flex flex-col p-10 gap-5">
          <div className="border-b pb-5 flex items-center justify-between">
            <Title name="Бүх эвентүүд"/>
            <div className="flex items-center">
              <p className=" text-sm font-light text-[#656060]"> Бүгдийг үзэх </p>
              <RightArrowIcon/>
            </div>
          </div>
          
          <div className="flex gap-10 pt-5">
          </div>
        </div>

      
        </div>
    );
  }