'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import Title from "@/components/ui/title";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Datetime from "@/components/layout/eventDetails-component/datetime";
import RegisterLocation from "@/components/layout/eventDetails-component/registerLocation";
import SeatSelection from "@/components/layout/eventDetails-component/theater";

type Category = {
    ID: number;
    Name: string;
  };

export default function EventRegisterPage(){
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    
    useEffect(() => {
        fetch("http://localhost:3001/api/category")
          .then(res => res.json())
          .then((data: Category[]) => setCategories(data))
          .catch(err => console.error("Fetch error:", err));
      }, []);
    
    const handleCategorySelect = (categoryName: string) => {
        setSelectedCategory(categoryName) 
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result as string); // <== энэ хэсэг чухал
          };
          reader.readAsDataURL(file);
        }
      };

    return(
        <div className="flex flex-col p-10 pl-40 pr-40 gap-5">
            <div className="p-10 flex flex-col gap-10 border-2 rounded-md">
                <div className="flex flex-col gap-3">
                    <Title name="Эвентийн тухай" size="xxl" className="text-[#14183E] mb-5"/>

                    <Input
                        id="event-name"
                        label="Эвентийн нэр"
                        placeholder="Эвентийн нэр оруулна уу"
                        required
                    />
                    
                    <div className="flex flex-col gap-1">
                        <Label required>Ангилал</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-sm text-muted-foreground border rounded-md p-2 text-left">
                            {selectedCategory ? selectedCategory : "Ангилал сонгоно уу!"} 
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full">
                                {categories.length > 0 ? (
                                categories.map((category) => (
                                    <DropdownMenuItem
                                    key={category.ID}
                                    onClick={() => handleCategorySelect(category.Name)} // Сонголтыг хадгалах
                                    >
                                    {category.Name}
                                    </DropdownMenuItem>
                                ))
                                ) : (
                                <DropdownMenuItem disabled>Ангилал олдсонгүй</DropdownMenuItem> // Ангилалгүй тохиолдолд
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    
                    <div className="flex flex-col gap-1">
                        <Label required> Дэлгэрэнгүй </Label>
                        <Textarea placeholder="Эвентийн дэлгэрэнгүй мэдээлэл оруулна уу! Зорилго .... гэх мэт" />
                    </div>   

                    <div className="flex gap-5">
                        <Label required> Ковер зураг: </Label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="text-sm file:mx-auto file:rounded-md file:border file:border-gray-300 file:px-2 file:py-1"
                        />
                    </div>        
                </div>

                <Datetime/>
            </div>
            <RegisterLocation/>
            <SeatSelection/>
        </div>
    )
}