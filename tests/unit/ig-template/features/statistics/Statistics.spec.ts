import {NumberStatistic} from "@/ig-template/features/statistics/NumberStatistic";
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";
import {Statistics} from "@/ig-template/features/statistics/Statistics";
import {ArrayStatistic} from "@/ig-template/features/statistics/ArrayStatistic";
import Decimal from "@/lib/break_eternity.min";


describe('Number Statistic', () => {
    const statistics = new Statistics();
    const id = 'example' as StatisticId;
    const arrayId = 'array' as StatisticId;
    const stat = new NumberStatistic(id, 'get money', 0);
    const array = new ArrayStatistic(arrayId, 'array stat', [new Decimal(0), new Decimal(0), new Decimal(0)]);
    statistics.registerStatistic(stat);
    const arrayStat = statistics.registerStatistic(array);

    beforeEach(() => {
        stat.value = new Decimal(0);
    })

    test('happy path', () => {
        // Arrange
        statistics.incrementNumberStatistic(id, 10);
        statistics.incrementNumberStatistic(id);

        // Assert
        expect(statistics.getStatistic(id)?.value).toEqual(new Decimal(11));
    });

    test('incorrect get', () => {
        // Assert
        expect(statistics.getStatistic('wrong-id' as StatisticId)).toBeNull();
    });

    test('array statistic', () => {
        // Assert
        statistics.incrementArrayStatistic(arrayStat.id, 1, 3)
        expect(arrayStat.value[1]).toEqual(new Decimal(3));

    });

    test('save and load', () => {
        // Arrange
        statistics.incrementNumberStatistic(id, 20);
        const save = statistics.save();

        statistics.list[id].value = 0;

        statistics.load(save)
        // Assert
        expect(statistics.getStatistic(id)?.value).toEqual(new Decimal(20));

    });

});
