import Moment from 'moment';

export const formatDate = (date: string) => {
    return Moment(date).format('DD/MM/YYYY HH:mm');
}