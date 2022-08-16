import {nextSunday} from 'date-fns'

const getEaster = (year: number) => {
  const goldenNumberTable = {
    1: [3, 14],
    2: [3, 3],
    3: [2, 23],
    4: [3, 11],
    5: [2, 31],
    6: [3, 18],
    7: [3, 8],
    8: [2, 28],
    9: [3, 16],
    10: [3, 5],
    11: [2, 25],
    12: [3, 13],
    13: [3, 2],
    14: [2, 22],
    15: [3, 10],
    16: [2, 30],
    17: [3, 17],
    18: [3, 7],
    19: [2, 27],
  }

  type goldenRange =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19

  const goldenNumber = ((year % 19) + 1) as goldenRange

  const [month, day] = goldenNumberTable[goldenNumber]

  const easter = nextSunday(new Date(year, month, day))

  return easter
}

export default getEaster
