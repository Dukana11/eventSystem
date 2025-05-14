
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import * as React from "react";
import { Label } from "@/components/ui/label";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

type Type = {
    ID: number;
    Name: string;
  };

type City = {
    ID: number;
    Name: string;
};

type District = {
    ID: number;
    Name: string;
};

type Khoroo = {
    ID: number;
    Name: string;
};

export default function RegisterLocation() {
    const [type, setType] = useState<Type[]>([]);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [city, setCity] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [district, setDistrict] = useState<District[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
    const [khoroo, setKhoroo] = useState<Khoroo[]>([]);
    const [selectedKhoroo, setSelectedKhoroo] = useState<string | null>(null);


    useEffect(() => {
        fetch("http://localhost:3001/api/eventType")
            .then(res => res.json())
            .then((data: Type[]) => setType(data))
            .catch(err => console.error("Fetch error:", err));
        }, []);
    
    const handleTypeSelect = (typeName: string) => {
        setSelectedType(typeName) 
    }

    useEffect(() => {
        fetch("http://localhost:3001/api/city")
            .then(res => res.json())
            .then((data: City[]) => setCity(data))
            .catch(err => console.error("Fetch error:", err));
        }, []);
    
    const handleCity = (city: string) => {
        setSelectedCity(city) 
    }

    useEffect(() => {
        fetch("http://localhost:3001/api/district")
            .then(res => res.json())
            .then((data: District[]) => setDistrict(data))
            .catch(err => console.error("Fetch error:", err));
        }, []);
    
    const handleDistrict = (district: string) => {
        setSelectedDistrict(district) 
    }


    useEffect(() => {
        fetch("http://localhost:3001/api/khoroo")
            .then(res => res.json())
            .then((data: Khoroo[]) => setKhoroo(data))
            .catch(err => console.error("Fetch error:", err));
        }, []);
    
    const handleKhoroo = (khoroo: string) => {
        setSelectedDistrict(khoroo) 
    }


    return (
        <div className="p-10 flex flex-col gap-5 border-2 rounded-md">
            <Title name="Байршил" size="xxl" className="text-[#14183E]"/>
            <div className="flex items-center gap-3">
                <Label required>Эвентийн төрөл: </Label>
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-sm text-muted-foreground border rounded-md p-2 text-left">
                    {selectedType ? selectedType : "Төрөл сонгоно уу!"} 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                        {type.length > 0 ? (
                        type.map((type) => (
                            <DropdownMenuItem
                            key={type.ID}
                            onClick={() => handleTypeSelect(type.Name)} // Сонголтыг хадгалах
                            >
                            {type.Name}
                            </DropdownMenuItem>
                        ))
                        ) : (
                        <DropdownMenuItem disabled> Төрөл олдсонгүй</DropdownMenuItem> // Ангилалгүй тохиолдолд
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            
            <Input
                id="event-name"
                label="Зохион байгуулагдах газар"
                placeholder="Зохион байгуулагдах газрын нэр оруулна уу!"
                required
                className="w-[400px]"
            />

            <div className="flex gap-10">
                <div className="flex items-center gap-3">
                    <Label required>Аймаг/Хот: </Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm text-muted-foreground border rounded-md p-2 text-left">
                        {selectedCity ? selectedCity : "Сонгоно уу!"} 
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                            {city.length > 0 ? (
                            city.map((city) => (
                                <DropdownMenuItem
                                key={city.ID}
                                onClick={() => handleCity(city.Name)} 
                                >
                                {city.Name}
                                </DropdownMenuItem>
                            ))
                            ) : (
                            <DropdownMenuItem disabled> Олдсонгүй</DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex items-center gap-3">
                    <Label required>Сум/Дүүрэг: </Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm text-muted-foreground border rounded-md p-2 text-left">
                        {selectedDistrict ? selectedDistrict : "Сонгоно уу!"} 
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                            {district.length > 0 ? (
                            district.map((district) => (
                                <DropdownMenuItem
                                key={district.ID}
                                onClick={() => handleDistrict(district.Name)} 
                                >
                                {district.Name}
                                </DropdownMenuItem>
                            ))
                            ) : (
                            <DropdownMenuItem disabled> Олдсонгүй</DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex items-center gap-3"> 
                    <Label required>Баг/Хороо: </Label>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm text-muted-foreground border rounded-md p-2 text-left">
                        {selectedKhoroo ? selectedKhoroo : "Сонгоно уу!"} 
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                            {khoroo.length > 0 ? (
                            khoroo.map((khoroo) => (
                                <DropdownMenuItem
                                key={khoroo.ID}
                                onClick={() => handleKhoroo(khoroo.Name)} 
                                >
                                {khoroo.Name}
                                </DropdownMenuItem>
                            ))
                            ) : (
                            <DropdownMenuItem disabled> Олдсонгүй</DropdownMenuItem>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

        </div>
    );
}
