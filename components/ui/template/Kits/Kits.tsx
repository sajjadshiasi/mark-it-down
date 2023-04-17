import { KitCardsWrapper } from '../../organisims';
import { IKitsProps } from './Interface';

const Kits = (props: IKitsProps) => (
  <KitCardsWrapper
    data={props.kitblocks.data}
    title="Kitblocks"
    isWrap={false}
    type="kits"
  />
);

export default Kits;
