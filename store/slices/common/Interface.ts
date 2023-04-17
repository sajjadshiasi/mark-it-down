export interface ICommonSlice {
  // state initializing
  isLoading: boolean;
  isOpenMobileMenu: boolean;
  isOpenProfileCard: boolean;
  // state update handlers
  setIsLoading: (isLoading: boolean) => void;
  setIsOpenMobileMenu: (isOpenMobileMenu: boolean) => void;
  setIsOpenProfileCard: (isOpenProfileCard: boolean) => void;
}
