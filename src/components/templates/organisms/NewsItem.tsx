import { ReactNode } from 'react';

import { FlattenSimpleInterpolation } from 'styled-components';

import { Area, Grid } from '../atoms';
import { Content, Info, Tag, Thumbnail } from '../molecules';

export interface StyledContainerProps {
    template: FlattenSimpleInterpolation;
    className?: string;

    children?: ReactNode;
}

interface StyledNewsItemProps extends Omit<StyledContainerProps, 'children'> {
    children?: ReactNode;
    config: {
        title: string;
        content: string;
        tag1?: string;
        tag2?: string;
        thumbnail?: string;
        category?: string;
    };
}

export const NewsItem = ({
    className,
    config,
}: StyledNewsItemProps | any): JSX.Element => {
    return (
        <Grid rows={2} columns={12} className={className}>
            <Area display="flex" gridColumn="1 / span 2" gridRow="1 / span 2" className="item__thumbnail">
                {config?.thumbnail && (
                    <NewsItem.Thumbnail
                        className="item__thumbnail"
                        src="https://via.placeholder.com/300x200"
                        alt="thumbnail" />
                )}
            </Area>
            <Area gridArea="tags" gridColumn="3 / span 1" gridRow="1 / span 2" className="item__tag">
                <NewsItem.Tag1 className="item__tag tag-1">
                    Tag1
                </NewsItem.Tag1>
                <NewsItem.Tag2 className="item__tag tag-2">
                    Tag2
                </NewsItem.Tag2>
            </Area>
            <Area display="block" gridColumn="4 / span stretch" gridRow="1" className="item__content">
                <h3>{config.title}</h3>
            </Area>
            <Area display="inline-flex" gridColumn="4 / span stretch" gridRow="2" className="item__content">
                <NewsItem.Content className="item__content">
                    {config.category}
                    <NewsItem.Info className="item__info">INFO</NewsItem.Info>
                </NewsItem.Content>
            </Area>

        </Grid>
    );
};

NewsItem.Container = Grid;
NewsItem.Area = Area;
NewsItem.Tag1 = Tag;
NewsItem.Tag2 = Tag;
NewsItem.Info = Info;
NewsItem.Content = Content;
NewsItem.Thumbnail = Thumbnail;
