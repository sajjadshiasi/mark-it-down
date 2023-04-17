import { ICloseProps } from './Interface';

const Close = (props: ICloseProps) => {
  const { className } = props;
  return <span className={className}>&times;</span>;
};

export default Close;
