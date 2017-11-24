import moment from 'moment'
import 'moment/locale/pt-br'

moment.locale('pt-br')

export const getDuration = (mins) => {
    if (mins >= 24 * 60 || mins < 0) {
        throw new RangeError("Valid input should be greater than or equal to 0 and less than 1440.")
    }

    const h = mins / 60 | 0,
        m = mins % 60 | 0

    return moment.utc().hours(h).minutes(m).format("h[H]mm")
}

export const formatDate = (date) => {
    return moment(date).format('hh:mm')
}