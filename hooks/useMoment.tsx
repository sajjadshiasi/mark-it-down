import moment from 'moment';

const useMoment = () => {
  const timestampToDate = (timestamp: number) =>
    moment.unix(timestamp).format('MM/DD/YYYY');
  return { timestampToDate };
};

export default useMoment;
