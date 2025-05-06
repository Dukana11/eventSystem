"use client";
import React, { useEffect, useState } from "react";
import Label from "../Label";
import Select from "../Select";
import { ChevronDownIcon } from "@/icons";

interface OptionType {
  value: string;
  label: string;
}



export default function LocationSelector() {
  const [provinces, setProvinces] = useState<OptionType[]>([]);
  const [districts, setDistricts] = useState<OptionType[]>([]);
  const [subDistricts, setSubDistricts] = useState<OptionType[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  // 1. Аймаг/Хот ачааллах
  useEffect(() => {
    fetch("http://localhost:3001/api/city")
      .then((res) => res.json())
      .then((data) => {
        const options = data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setProvinces(options);
      })
      .catch((err) => console.error("Failed to fetch provinces:", err));
  }, []);

  // 2. Сум/Дүүрэг - сонгогдсон аймгийн ID-гаар
  useEffect(() => {
    if (!selectedProvince) return;

    fetch(`http://localhost:3001/api/district?cityId=${selectedProvince}`)
      .then((res) => res.json())
      .then((data) => {
        const options = data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setDistricts(options);
        setSelectedDistrict(""); // reset sub-district when province changes
        setSubDistricts([]); // clear previous sub-districts
      })
      .catch((err) => console.error("Failed to fetch districts:", err));
  }, [selectedProvince]);

  // 3. Баг/Хороо - сонгогдсон дүүргийн ID-гаар
  useEffect(() => {
    if (!selectedDistrict) return;

    fetch(`http://localhost:3001/api/khoroo?districtId=${selectedDistrict}`)
      .then((res) => res.json())
      .then((data) => {
        const options = data.map((item: any) => ({
          value: item.id,
          label: item.name,
        }));
        setSubDistricts(options);
      })
      .catch((err) => console.error("Failed to fetch sub-districts:", err));
  }, [selectedDistrict]);

  return (
    <div className="space-y-6 mt-5 flex gap-15">
      {/* Аймаг/Хот */}
      <div>
        <Label>Аймаг/Хот</Label>
        <div className="relative">
          <Select
            options={provinces}
            placeholder="Сонгоно уу!"
            onChange={(value: string) => setSelectedProvince(value)}
            className="dark:bg-dark-900 text-black"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
            <ChevronDownIcon />
          </span>
        </div>
      </div>

      {/* Сум/Дүүрэг */}
      <div>
        <Label>Сум/Дүүрэг</Label>
        <div className="relative">
          <Select
            options={districts}
            placeholder="Сонгоно уу!"
            onChange={(value: string) => setSelectedDistrict(value)}
            className="dark:bg-dark-900"
            disabled={!selectedProvince}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
            <ChevronDownIcon />
          </span>
        </div>
      </div>

      {/* Баг/Хороо */}
      <div>
        <Label>Баг/Хороо</Label>
        <div className="relative">
          <Select
            options={subDistricts}
            placeholder="Сонгоно уу!"
            onChange={(value: string) => console.log("Selected sub-district:", value)}
            className="dark:bg-dark-900"
            disabled={!selectedDistrict}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
            <ChevronDownIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
