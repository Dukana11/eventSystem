import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import axios from 'axios'

interface EventCategory {
  ID: number;
  Name: string;
  District_id: number;
}

interface EventCategoryTableProps{
  refreshTrigger?: number;
}

export default function KhorooTable({refreshTrigger}:EventCategoryTableProps) {
  const [category, setCategory] = useState<EventCategory[]>([]);

  useEffect(() => {
    getCategory();
  }, [refreshTrigger]);

  function getCategory() {
    axios.get("http://localhost:3001/api/khoroo")
      .then((response) => {
        console.log("Before setting state:", category); // 👀 setCategory дуудсан өмнөх утга
        setCategory(response.data);
        console.log("After setting state:", response.data); // 👀 Шинэ өгөгдөл зөв ирж байгаа эсэх
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }

  return (
    <div className="w-[330px] border rounded-lg">
        <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                <TableRow>
                <TableCell
                    isHeader
                    className="w-[50px] min-w-[50px] px-5 py-3 font-bold text-gray-600 text-start text-theme-sm dark:text-gray-400"
                >
                    ID
                </TableCell>
                <TableCell
                    isHeader
                    className="px-5 py-3 font-bold text-gray-600 text-start text-theme-sm dark:text-gray-400"
                >
                    Баг/Хороо
                </TableCell>
                <TableCell
                    isHeader
                    className="px-5 py-3 font-bold text-gray-600 text-start text-theme-sm dark:text-gray-400"
                >
                    Сум/Дүүрэг_ID
                </TableCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {category.map((eventcategory) => (
                <TableRow key={eventcategory.ID}>
                <TableCell
                    className="w-[50px] min-w-[50px] px-5 py-3 text-gray-600 text-start text-theme-sm dark:text-gray-400"
                    >
                    {eventcategory.ID}
                    </TableCell>
                    <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {eventcategory.Name}
                    </TableCell>
                    <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {eventcategory.District_id}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}
