import { StateCreator } from 'zustand';
import { IModalSlice } from './Interface';

export const createModalSlice: StateCreator<IModalSlice> = (set, get) => ({
  // state initializing
  isOpenModal: { auth: false },

  // state update handlers

  setIsOpenModal: (modalType: string, isOpen: boolean) =>
    set({
      isOpenModal: { ...get().isOpenModal, [modalType]: isOpen },
    }),
});
