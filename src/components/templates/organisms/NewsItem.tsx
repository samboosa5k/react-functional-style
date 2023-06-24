import { ReactNode } from 'react';
import LoremIpsum from 'react-lorem-ipsum';

import { FlattenSimpleInterpolation } from 'styled-components';

import { Container, Content, Info, Tag, Thumbnail } from '../molecules';

export interface StyledContainerProps {
    templateAreas: FlattenSimpleInterpolation;
    className?: string;

    children?: ReactNode;
}

interface StyledNewsItemProps extends Omit<StyledContainerProps, 'children'> {
    children?: ReactNode;
    config: {
        content: string;
        tag1?: string;
        tag2?: string;
        thumbnail?: string;
        category?: string;
    };
}

export const NewsItem = ({
    templateAreas,
    className,
    config,
}: StyledNewsItemProps | any): JSX.Element => {
    return (
        <NewsItem.Container templateAreas={templateAreas} className={className}>
            <>
                <NewsItem.Tag1 gridArea="tag1" className="item__tag">
                    Tag1
                </NewsItem.Tag1>
                <NewsItem.Tag2 gridArea="tag2" className="item__tag">
                    Tag2
                </NewsItem.Tag2>
                <NewsItem.Content className="item__content">
                    {config.content ? config.content : <LoremIpsum p={1} />}

                    <NewsItem.Info className="item__info">INFO</NewsItem.Info>
                </NewsItem.Content>
            </>
            {config?.thumbnail && (
                <NewsItem.Thumbnail className="item__thumbnail">
                    <img
                        src="https://via.placeholder.com/300x200"
                        alt="thumbnail"
                        width="100%"
                        height="100%"
                    />
                </NewsItem.Thumbnail>
            )}
        </NewsItem.Container>
    );
};

NewsItem.Container = Container;
NewsItem.Tag1 = Tag;
NewsItem.Tag2 = Tag;
NewsItem.Info = Info;
NewsItem.Content = Content;
NewsItem.Thumbnail = Thumbnail;
