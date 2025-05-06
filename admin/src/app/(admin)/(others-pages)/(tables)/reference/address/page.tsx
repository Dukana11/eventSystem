"use client"
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import EventCategoryTable from "@/components/tables/EventCategory";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import axios from "axios";
import CityTable from "@/components/tables/CityTable";
import DistrictTable from "@/components/tables/DistrictTable";
import KhorooTable from "@/components/tables/KhorooTable";

export default function Address() {
  const { isOpen, openModal, closeModal } = useModal();
  const [name, setName] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:3001/api/city", { name });
      console.log("Response:", response.data);
  
      if (response.data.success) {
        alert("Амжилттай");
        setName(""); 
        closeModal(); 
        setRefreshKey(prev => prev + 1);
      } else {
        alert(response.data.message || "Амжилтгүй");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Сервертэй холбогдох үед алдаа гарлаа.");
    }
  };

  return (  
    <div>
      <PageBreadcrumb pageTitle="Address" />
      <ComponentCard title="Байршлын лавлахууд">
        <div className="flex gap-10">
            <CityTable refreshTrigger={refreshKey} />
            <DistrictTable refreshTrigger={refreshKey} />
            <KhorooTable refreshTrigger={refreshKey} />
        </div>

      </ComponentCard>
    </div>
  );
}
