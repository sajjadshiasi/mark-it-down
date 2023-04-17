export interface IModalSlice {
  // state initializing
  isOpenModal: { auth: boolean };

  // state update handlers
  setIsOpenModal: (modalType: TModalTypes, isOpen: boolean) => void;
}

export type TModalTypes = 'auth';
