'use client'
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/title";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { RiOrderPlayFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { MdEvent } from "react-icons/md";

export default function Profile() {
    const [user, setUser] = useState<any>(null); 
    const [role, setRole] = useState<string>("");
    const [myEvents, setMyEvents] = useState<any[]>([]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedRole = localStorage.getItem("role");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        if (storedRole) setRole(storedRole);
        }
    }, []);

    const fetchMyEvents = async () => {
        try {
            const response = await fetch(`/api/myEvents/${user?.ID}`);
            const data = await response.json();
            setMyEvents(data);
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    };

    return (
        <div className="flex gap-10">
            {/* Sidebar */}
            <div className="w-[280px] shadow-lg p-6 flex flex-col gap-6 bg-gradient-to-r from-purple-100 to-blue-100">
                <h2 className="text-xl font-semibold border-b pb-2">Цэс</h2>
                <button className="text-left text-gray-700 hover:text-blue-600 transition flex items-center gap-5"> 
                <FaRegUser /> Хувийн мэдээлэл</button>
                <button className="text-left text-gray-700 hover:text-blue-600 transition flex items-center gap-5">
                <RiOrderPlayFill /> Захиалгын түүх</button>
                <button className="text-left text-gray-700 hover:text-blue-600 transition flex items-center gap-5"
                onClick={fetchMyEvents}>
                <MdEvent /> Миний эвентүүд </button>
                <button className="text-left text-gray-700 hover:text-red-500 transition flex items-center gap-5">
                <IoIosLogOut /> Гарах</button>
            </div>

            {/* Main profile info */}
            <div className="flex-1 flex flex-col gap-8 p-15">
                <Title name="Хувийн мэдээлэл" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {role === "customer" && (
                    <>
                    <Input id="lastname" label="Овог" value={user?.LastName || ""} readOnly />
                    <Input id="firstname" label="Нэр" value={user?.FirstName || ""} readOnly required/>
                    <Input id="email" label="Имэйл хаяг" value={user?.Email || ""} readOnly required/>
                    <Input id="address" label="Гэрийн хаяг" value={user?.Address || ""} readOnly />
                    <Input id="phoneNumber" label="Утасны дугаар" value={user?.PhoneNumber || ""} readOnly required/>
                    <Input id="registrationNumber" label="Регистрийн дугаар" value={user?.RegistrationNumber || ""} readOnly />
                    </>
                )}

                {role === "organizer" && (
                    <>
                    <Input id="name" label="Байгууллагын нэр" value={user?.Name || ""} readOnly required/>
                    <Input id="email" label="Имэйл хаяг" value={user?.Email || ""} readOnly required/>
                    <Input id="address" label="Гэрийн хаяг" value={user?.Address || ""} readOnly />
                    <Input id="phoneNumber" label="Утасны дугаар" value={user?.PhoneNumber || ""} readOnly />
                    <Input id="registrationNumber" label="Регистрийн дугаар" value={user?.RegistrationNumber || ""} readOnly required/>
                    </>
                )}

                {myEvents.length > 0 && (
                    <div className="mt-10">
                        <Title name="Миний бүртгүүлсэн эвентүүд" />
                        <ul className="list-disc list-inside space-y-2">
                            {myEvents.map((event) => (
                                <li key={event.ID}>
                                    <strong>{event.Title}</strong> - {event.Description}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                </div>
            </div>
            </div>

    );
}
