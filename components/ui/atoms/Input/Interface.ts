export interface IInputProps {
  type?: string;
  name: string;
  style?: any;
  className?: string;
  onBlur?: (e: any) => void;
  haveLabel: boolean;
  label?: string;
  haveInfo: boolean;
  error?: any;
}
