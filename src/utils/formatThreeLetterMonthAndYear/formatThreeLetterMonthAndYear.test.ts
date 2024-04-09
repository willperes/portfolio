import { formatThreeLetterMonthAndYear } from "."

const months: Date[] = [
    new Date(2024, 0, 1),
    new Date(2025, 1, 1),
    new Date(2026, 2, 1),
    new Date(2027, 3, 1),
    new Date(2028, 4, 1),
    new Date(2029, 5, 1),
    new Date(2030, 6, 1),
    new Date(2031, 7, 1),
    new Date(2032, 8, 1),
    new Date(2033, 9, 1),
    new Date(2034, 10, 1),
    new Date(2035, 11, 1)
]

const expectedFormattedMonths: string[] = [
    "Jan 2024",
    "Feb 2025",
    "Mar 2026",
    "Apr 2027",
    "May 2028",
    "Jun 2029",
    "Jul 2030",
    "Aug 2031",
    "Sep 2032",
    "Oct 2033",
    "Nov 2034",
    "Dec 2035"
]

describe("@/utils/formatDate/formatThreeLetterMonthAndYear", () => {
    it("should format the list of dates", () => {
        const formattedDates = months.map(formatThreeLetterMonthAndYear)

        expect(formattedDates).toEqual(expectedFormattedMonths)
    })
})