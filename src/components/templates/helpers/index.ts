import * as data from './data.json';

interface NewsDataItem {
    newsID: string;
    newsTitle: string;
    newsDate: string;
    category: {
        newsCatID: string;
        newsCatName: string;
    };
    imageUrl: string;
}

export const newsData = JSON.parse(JSON.stringify(data));

type DateGroup = 'TODAY' | 'LAST_WEEK' | 'LONG_TIME' | 'UNKNOWN';
type NewsDateGroup = {
    [keys in DateGroup]: Array<NewsDataItem>;
};

const getDateGroup = ({ newsDate }: NewsDataItem): DateGroup => {
    const date = new Date();
    const dateFromInput = new Date(newsDate);
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const utc2 = Date.UTC(
        dateFromInput.getFullYear(),
        dateFromInput.getMonth(),
        dateFromInput.getDate()
    );

    const diff = Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY));

    console.log('diff', diff);

    return diff === 0
        ? 'TODAY'
        : diff > 0 && diff <= 7
        ? 'LAST_WEEK'
        : diff > 7
        ? 'LONG_TIME'
        : 'UNKNOWN';
};

export const groupNewsByDate = (newsArray: NewsDataItem[]) =>
    newsArray.reduce((acc: NewsDateGroup, item) => {
        const group = getDateGroup(item);
        const accHasGroup = Object.keys(acc).length > 0;
        return accHasGroup && `${group}` in acc
            ? {
                  ...acc,
                  [group]: [...acc[group], item],
              }
            : {
                  ...acc,
                  [group]: [item],
              };
    }, {} as NewsDateGroup);
