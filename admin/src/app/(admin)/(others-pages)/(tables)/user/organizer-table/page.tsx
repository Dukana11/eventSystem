"use client"
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import OrganizerTable from "@/components/tables/OrganizerTable";

export default function OrganizerTablePage() {
  const [refreshKey, setRefreshKey] = useState(0);

    return (
      <div>
        <PageBreadcrumb pageTitle="Organizer" />
        <div className="space-y-6">
          <ComponentCard title="Зохион байгуулагч">
            <OrganizerTable refreshTrigger={refreshKey}/>
          </ComponentCard>
        </div>
      </div>
    );
  }