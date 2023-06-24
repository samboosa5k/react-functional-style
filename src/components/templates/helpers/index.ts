import * as data from './data.json';

export interface NewsDataItem {
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
export type NewsDateGroup = {
    group: string | DateGroup;
    data: NewsDataItem[] | [];
};

const getDateGroup = (item: NewsDataItem) => {
    // const date = new Date();
    const dateFromInput = new Date(item.newsDate);
    // const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    // const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    // const utc2 = Date.UTC(
    //     dateFromInput.getFullYear(),
    //     dateFromInput.getMonth(),
    //     dateFromInput.getDate()
    // );
    //
    // const diff = Math.abs(Math.floor((utc2 - utc1) / _MS_PER_DAY));
    //
    // console.log('diff', diff);
    //
    // return diff === 0
    //     ? 'TODAY'
    //     : diff > 0 && diff <= 7
    //     ? 'LAST_WEEK'
    //     : diff > 7
    //     ? 'LONG_TIME'
    //     : 'UNKNOWN';
    //
    // return hours
    return `Hours:_${dateFromInput.getHours().toLocaleString()}`;
};

const findIndex = (
    groups: { group: string; data: NewsDataItem[] }[] | [],
    group: string
) => groups.findIndex((item) => item.group === group);

const findOtherGroup = (groups: NewsDateGroup[] | [], index: number) =>
    groups.filter((_, i) => i !== index);

const groupReducer = (
    acc: NewsDateGroup[] | [],
    item: NewsDataItem,
    _: number
) => {
    const groupKey = getDateGroup(item);
    const groupFound = acc?.length && acc?.find((g) => g?.group === groupKey);

    if (groupFound) {
        const index = findIndex(acc, groupKey);
        const otherGroups = findOtherGroup(acc, index);
        return [
            ...otherGroups,
            {
                ...groupFound,
                data: [...groupFound.data, item],
            },
        ];
    }
    return [
        ...acc,
        {
            group: groupKey,
            data: [item],
        },
    ];
};

export const groupNewsByDate = (newsArray: NewsDataItem[]) =>
    newsArray.reduce(
        (acc: NewsDateGroup[] | [], item: NewsDataItem, i: number) =>
            groupReducer(acc, item, i),
        []
    );
