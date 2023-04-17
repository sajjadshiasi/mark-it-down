import { StateCreator } from 'zustand';
import { IUserSlice } from './Interface';

export const createUserSlice: StateCreator<IUserSlice> = (set, get) => ({
  // state initializing
  user: {},

  // state update handlers

  setUser: (data: any) =>
    set({
      user: { ...data },
    }),
});
