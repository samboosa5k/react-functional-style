// NewsListItem:
//  - NewsListItem.Image
//  - NewsListItem.Title
//  - NewsListItem.MetaCount
import { ComponentType, FC, useMemo, useState } from 'react';

export type HighlightedCategory = 'watched' | 'commented' | 'read';

type ItemData = {
    title: string;
    content: string;
};
type WidgetData = {
    [keyof in HighlightedCategory]: Array<ItemData>;
};

interface NewsListProps {
    widgetTitle: string;
    highlightedCategories: Array<HighlightedCategory>;
    widgetData: WidgetData;
}

const switchHighlightedCategory = (category: HighlightedCategory) => {
    switch (category) {
        case 'watched':
            return 'Most Viewed';
        case 'commented':
            return 'Most Commented';
        case 'read':
            return 'Most Read';
        default:
            return '';
    }
};
const switchHighlightedMeta = (category: string | HighlightedCategory) => {
    switch (category) {
        case 'watched':
            return 'views';
        case 'commented':
            return 'times commented';
        case 'read':
            return 'times read';
        default:
            return '';
    }
};

interface NewsListItemProps extends ItemData {
    highlightedCategory: string | HighlightedCategory;
}

export const NewsListItem = ({
    highlightedCategory,
    ...itemData
}: Partial<NewsListItemProps>) => {
    return (
        <p>
            {switchHighlightedMeta(highlightedCategory as HighlightedCategory)}
            {JSON.stringify(itemData)}
            <br />
            <span>meta:{highlightedCategory}</span>
        </p>
    );
};

interface ListProps<T> {
    Comp: ComponentType<T>;
    props: Array<T>;
}

// List component to accept component and component data
const List = <T extends {}>({ Comp, props }: ListProps<T>) => (
    <>
        {props.map((prop) => (
            <Comp {...prop} />
        ))}
    </>
);

export const NewsList: FC<NewsListProps> = ({
    widgetTitle,
    highlightedCategories,
    widgetData,
}) => {
    const [highlightedCategory, setHighlightedCategory] =
        useState<HighlightedCategory>('watched');

    const data = useMemo(
        () => widgetData[`${highlightedCategory}`],
        [highlightedCategory]
    );

    const highlightedMeta = useMemo(
        () => switchHighlightedMeta(highlightedCategory),
        [highlightedCategory]
    );

    return (
        <div>
            <h3>{widgetTitle}</h3>
            {/*    Highlighted category buttons */}
            {highlightedCategories.map((category) => (
                <button onClick={() => setHighlightedCategory(category)}>
                    {switchHighlightedCategory(category)}
                </button>
            ))}
            {/*    Highlighted category items*/}
            <List
                props={data}
                Comp={(props) => (
                    <NewsListItem
                        highlightedCategory={highlightedMeta}
                        {...props}
                    />
                )}
            />
        </div>
    );
};

export default NewsList;
