"use client"
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import LocationTable from "@/components/tables/LocationTable";
import { useModal } from "@/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import SelectInputs from "@/components/form/form-elements/SelectInputs";
import Dropdown from "@/components/form/form-elements/Dropdown";

export default function EventTablePage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { isOpen, openModal, closeModal } = useModal();

    return (
      <div>
        <PageBreadcrumb pageTitle="Location" />
        <div className="space-y-6">
          <ComponentCard title="Байршил">
            <button
              onClick={openModal}
              type="button"
              className="btn btn-success btn-update-event rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
            >
              Нэмэх +
            </button>
            <LocationTable refreshTrigger={refreshKey}/>
          </ComponentCard>
        </div>

        <form>
                <Modal
                  isOpen={isOpen}
                  onClose={closeModal}
                  className="max-w-[700px] p-6 lg:p-10"
                >
                  <h5 className="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90 lg:text-2xl">
                    Газар бүртгэх
                  </h5>
                  <label className="mt-5 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Газрын нэр
                  </label>
                  <input
                    type="text"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    required
                  />
                  <div className="flex justify-between">
                    <Dropdown/>
                  </div>
                  <label className="mt-5 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Дэлгэрэнгүй хаяг
                  </label>
                  <input
                    type="text"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    required
                  />
                  <label className="mt-5 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Танхимын зураг
                  </label>
                  <input
                    type="file"
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                    required
                  />
                  <div className="flex items-center gap-3 mt-6 sm:justify-end">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
                    >
                      Хаах
                    </button>
                    <button
                      type="submit"
                      className="btn btn-success btn-update-event flex w-full justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-600 sm:w-auto"
                    >
                      Нэмэх
                    </button>
                  </div>
                </Modal>
              </form>
      </div>
    );
  }