import {NumberStatistic} from "@/ig-template/features/statistics/NumberStatistic";
import {StatisticId} from "@/ig-template/features/statistics/StatisticId";
import {Statistics} from "@/ig-template/features/statistics/Statistics";


describe('Number Statistic', () => {
    const statistics = new Statistics();
    const id = 'example' as StatisticId;
    const stat = new NumberStatistic(id, 'get money', 0);
    statistics.registerStatistic(stat);

    beforeEach(() => {
        stat.value = 0;
    })

    test('happy path', () => {
        // Arrange
        statistics.incrementNumberStatistic(id, 10);
        statistics.incrementNumberStatistic(id);

        // Assert
        expect(statistics.getStatistic(id)?.value).toBe(11);
    });

    test('incorrect get', () => {
        // Assert
        expect(statistics.getStatistic('wrong-id' as StatisticId)).toBeNull();
    });

    test('save and load', () => {
        // Arrange
        statistics.incrementNumberStatistic(id, 20);
        const save = statistics.save();

        statistics.list[id].value = 0;

        statistics.load(save)
        // Assert
        expect(statistics.getStatistic(id)?.value).toBe(20);

    });

});
