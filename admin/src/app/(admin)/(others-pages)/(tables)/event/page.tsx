"use client"
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import EventTable from "@/components/tables/Event";

export default function EventTablePage() {
  const [refreshKey, setRefreshKey] = useState(0);

    return (
      <div>
        <PageBreadcrumb pageTitle="Event" />
        <div className="space-y-6">
          <ComponentCard title="Үйл ажиллагаа">
            <EventTable refreshTrigger={refreshKey}/>
          </ComponentCard>
        </div>
      </div>
    );
  }