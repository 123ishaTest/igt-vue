export class DateHelper {
    public static readonly MILLI_SECONDS_PER_DAY = 24 * 60 * 60 * 1000;
    public static readonly MILLI_SECONDS_PER_HOUR = 60 * 60 * 1000;
    public static readonly MILLI_SECONDS_PER_MINUTE = 60 * 1000;

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

    static toTimeLeftString(milliseconds: number) {
        if (milliseconds > this.MILLI_SECONDS_PER_DAY) {
            const days = milliseconds / this.MILLI_SECONDS_PER_DAY;
            return `${Math.ceil(days)} days`;
        }

        if (milliseconds > this.MILLI_SECONDS_PER_HOUR) {
            const hours = milliseconds / this.MILLI_SECONDS_PER_HOUR;
            return `${Math.ceil(hours)} hours`;
        }
        if (milliseconds > this.MILLI_SECONDS_PER_MINUTE) {
            const minutes = milliseconds / this.MILLI_SECONDS_PER_MINUTE;
            return `${Math.ceil(minutes)} minutes`;
        }


        return `${Math.ceil(milliseconds / 1000)} seconds`;
    }
}
