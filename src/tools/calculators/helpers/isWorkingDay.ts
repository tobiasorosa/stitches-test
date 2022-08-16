import {isSaturday, isSunday} from 'date-fns'

import isHoliday from './isHoliday'

const isWorkingDay = (date: Date) => {
  return !isSaturday(date) && !isSunday(date) && !isHoliday(date)
}

export default isWorkingDay
