"use client";
import { useState, useCallback } from "react";

export const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isOpenPayment, setIsOpenPayment] = useState(initialState);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);


  const openModalPayment = useCallback(() => setIsOpenPayment(true), []);
  const closeModalPayment = useCallback(() => setIsOpenPayment(false), []);
  const toggleModalPayment = useCallback(() => setIsOpenPayment((prev) => !prev), []);

  return { isOpen, openModal, closeModal, toggleModal, isOpenPayment, openModalPayment, closeModalPayment, toggleModalPayment };
};
