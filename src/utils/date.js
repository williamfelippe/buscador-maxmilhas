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

export const formatTime = (date) => {
    return moment(date).format('hh:mm')
}

export const formatDate = (date, format = 'DD/MM/YYYY', parseFormat = null) => {
    return (parseFormat) 
        ? moment(date, parseFormat).format(format) 
        : moment(date).format(format)
}

export const monthToString = (month) => {
    const months = moment.months()
    return months[month - 1]
}