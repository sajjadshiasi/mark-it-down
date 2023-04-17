import { StateCreator } from 'zustand';
import { ICommonSlice } from './Interface';

export const createCommonSlice: StateCreator<ICommonSlice> = (set) => ({
  // state initializing
  isLoading: false,
  isOpenMobileMenu: false,
  isOpenProfileCard: false,
  // state update handlers
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsOpenMobileMenu: (isOpenMobileMenu: boolean) => set({ isOpenMobileMenu }),
  setIsOpenProfileCard: (isOpenProfileCard: boolean) =>
    set({ isOpenProfileCard }),
});
