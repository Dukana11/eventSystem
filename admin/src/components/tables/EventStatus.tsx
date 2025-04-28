import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import axios from 'axios'
import Button from "../ui/button/Button";
import { useModal } from "@/hooks/useModal";
import { Modal } from "../ui/modal";

interface EventStatus {
  ID: number;
  Name: string;
}

interface EventStatusProps{
  refreshTrigger?: number;
}

export default function EventStatusTable({refreshTrigger}:EventStatusProps) {
  const [status, setStatus] = useState<EventStatus[]>([]);
  const {isOpen, openModal, closeModal } = useModal();
  const [selectedStatus, setSelectedStatus] = useState<EventStatus | null>(null);
  const [editedName, setEditedName] = useState(""); // input value-гийн хувьд


  useEffect(() => {
    getStatus();
  }, [refreshTrigger]);

//   useEffect(() => {
//     console.log("Updated Category:", category); // data irj bgag shalgah
// }, [category]);

  function getStatus() {
    axios.get("http://localhost:3001/api/eventStatus")
      .then((response) => {
        console.log("Before setting state:", status); // 👀 setCategory дуудсан өмнөх утга
        setStatus(response.data);
        console.log("After setting state:", response.data); // 👀 Шинэ өгөгдөл зөв ирж байгаа эсэх
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }

  function handleEditSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedStatus) return;
  
    axios
      .put(`http://localhost:3001/api/editEventStatus/${selectedStatus.ID}`, { name: editedName })
      .then((response) => {
        if (response.data.success) {
          alert("Төлөв шинэчлэгдлээ.");
          closeModal();
          getStatus(); // дахин унших
        } else {
          alert(response.data.message || "Алдаа гарлаа");
        }
      })
      .catch((error) => {
        console.error("Edit Error:", error);
        alert("Сервертэй холбогдох үед алдаа гарлаа.");
      });
  }

  function deleteCategory(id: number) {
    const confirmed = confirm("Та энэ төлвийг устгахдаа итгэлтэй байна уу?");
    if (!confirmed) return;
  
    axios
      .delete(`http://localhost:3001/api/deleteEventStatus/${id}`)
      .then((response) => {
        if (response.data.success) {
          getStatus(); // шинэчилнэ
        } else {
          alert(response.data.message || "Устгахад алдаа гарлаа");
        }
      })
      .catch((error) => {
        console.error("Delete Error:", error);
        alert("Сервертэй холбогдоход алдаа гарлаа.");
      });
  }
  

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[250px]">
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
                  Нэр
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-bold text-gray-600 text-start text-theme-sm dark:text-gray-400"
                >
                   Үйлдэл
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {status.map((eventstatus) => (
              <TableRow key={eventstatus.ID}>
                <TableCell
                    className="w-[50px] min-w-[50px] px-5 py-3 text-gray-600 text-start text-theme-sm dark:text-gray-400"
                  >
                    {eventstatus.ID}
                  </TableCell>
                  <TableCell className=" px-4 py-3 text-gray-600 text-theme-sm dark:text-gray-400">
                    {eventstatus.Name}
                  </TableCell>
                  <TableCell className="flex p-2 gap-4">
                    <Button
                      size="sm"
                      variant="editVariant"
                      onClick={() => {
                        setSelectedStatus(eventstatus);
                        setEditedName(eventstatus.Name); // input-д харуулах
                        openModal();
                      }}
                    >
                      Засах
                    </Button>
                    <Button
                      size="sm"
                      variant="deleteVariant"
                      onClick={() => deleteCategory(eventstatus.ID)}
                    >
                      Устгах
                    </Button>
                  </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>

          <form onSubmit={handleEditSubmit}>
                  <Modal
                    isOpen={isOpen}
                    onClose={closeModal}
                    className="max-w-[700px] p-6 lg:p-10"
                  >
                    <h5 className="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90 lg:text-2xl">
                      Төлөв засах
                    </h5>
                    <label className="mt-8 mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                      Төлөв нэр
                    </label>
                    <input
                      id="event-title"
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
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
                        Засах
                      </button>
                    </div>
                  </Modal>
          </form>
        </div>
      </div>
    </div>
  );
}
