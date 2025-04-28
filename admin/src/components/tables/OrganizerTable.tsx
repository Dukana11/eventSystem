'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Organizer {
  ID: number;
  Name: string; 
  Email: string;
  Address: string;
  PhoneNumber: string; 
  RegistrationNumber: string; 
  Password: string ;
  Bank_Account_id: number;
  Khoroo_id: number;
}

interface OrganizerProps{
  refreshTrigger?: number;
}

export default function OrganizerTable({refreshTrigger}:OrganizerProps) {
  const [organizer, setOrganizer] = useState<Organizer[]>([]);

  useEffect(() => {
      getOrganizer();
    }, [refreshTrigger]);
  
  function getOrganizer() {
      axios.get("http://localhost:3001/api/organizer")
        .then((response) => {
          console.log("Before setting state:", organizer); // 👀 setCategory дуудсан өмнөх утга
          setOrganizer(response.data);
          console.log("After setting state:", response.data); // 👀 Шинэ өгөгдөл зөв ирж байгаа эсэх
        })
        .catch((error) => {
          console.error("API Error:", error);
        });
    }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[1102px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  ID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Байгууллагын нэр
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Имэйл
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Гэрийн хаяг
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Утасны дугаар
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Байгууллагын регистр
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Нууц үг
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Bank_Account_id
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Khoroo_id
                </TableCell>
              </TableRow>
            </TableHeader>

            
            <TableBody>
              {organizer.map((organizer) => (
              <TableRow key={organizer.ID}>
                  <TableCell
                    className="w-[50px] min-w-[50px] px-5 py-3 text-gray-600 text-start text-theme-sm dark:text-gray-400"
                  >
                    {organizer.ID}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.Name}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.Email}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.Address}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.PhoneNumber}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.RegistrationNumber}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.Password}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.Bank_Account_id}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {organizer.Khoroo_id}
                  </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
