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

interface Customer {
  ID: number;
  Lastname: string;
  FirstName: string; 
  Email: string;
  Address: string;
  PhoneNumber: string; 
  RegistrationNumber: string; 
  Password: string ;
}

interface CustomerProps{
  refreshTrigger?: number;
}

export default function CustomerTable({refreshTrigger}:CustomerProps) {
  const [customer, setCustomer] = useState<Customer[]>([]);

  useEffect(() => {
      getCustomer();
    }, [refreshTrigger]);
  
  function getCustomer() {
      axios.get("http://localhost:3001/api/customer")
        .then((response) => {
          console.log("Before setting state:", customer); // 👀 setCategory дуудсан өмнөх утга
          setCustomer(response.data);
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
                  Овог
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Нэр
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
                  Регистрийн дугаар
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Нууц үг
                </TableCell>
              </TableRow>
            </TableHeader>

            
            <TableBody>
              {customer.map((customer) => (
              <TableRow key={customer.ID}>
                  <TableCell
                    className="w-[50px] min-w-[50px] px-5 py-3 text-gray-600 text-start text-theme-sm dark:text-gray-400"
                  >
                    {customer.ID}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {customer.Lastname}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {customer.FirstName}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {customer.Email}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {customer.Address}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {customer.PhoneNumber}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {customer.RegistrationNumber}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {customer.Password}
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
