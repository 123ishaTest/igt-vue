export class DateHelper {
    static addMinutes(date: Date, minutes: number) {
        return new Date(date.getTime() + minutes * 60000);
    }
    static addSeconds(date: Date, seconds: number) {
        return new Date(date.getTime() + seconds * 1000);
    }

    static addWeeks(date: Date, weeks: number): Date {
        date.setDate(date.getDate() + weeks * 7);
        return date;
    }
}
