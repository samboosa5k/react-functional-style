import { ReactNode } from 'react';
import LoremIpsum from 'react-lorem-ipsum';

import styled, { FlattenSimpleInterpolation } from 'styled-components';

import { Block, StyledBlockProps } from '../atoms';
import { Container } from './NewsItem.style';

export interface StyledContainerProps {
    templateAreas: FlattenSimpleInterpolation;
    className?: string;
    children?: ReactNode;
}

interface StyledNewsItemProps extends Omit<StyledContainerProps, 'children'> {
    children?: ReactNode;
}

export const NewsItem = ({
    templateAreas,
    className,
    children,
}: StyledNewsItemProps | any): JSX.Element => {
    return (
        <NewsItem.Container templateAreas={templateAreas} className={className}>
            <>
                <NewsItem.Tag1 className="item__tag">Tag1</NewsItem.Tag1>
                <NewsItem.Tag2 className="item__tag">Tag2</NewsItem.Tag2>
                <NewsItem.Content className="item__content">
                    <LoremIpsum p={1} />

                    <NewsItem.Info className="item__info">INFO</NewsItem.Info>
                </NewsItem.Content>
            </>
            {children}
        </NewsItem.Container>
    );
};

export const MediaItem = ({
    templateAreas,
    className,
}: StyledNewsItemProps) => (
    <NewsItem {...{ templateAreas, className }}>
        <NewsItem.Thumbnail className="item__thumbnail">
            <img
                src="https://via.placeholder.com/300x200"
                alt="thumbnail"
                width="100%"
                height="100%"
            />
        </NewsItem.Thumbnail>
    </NewsItem>
);

NewsItem.Container = ({
    templateAreas,
    className,
    children,
}: StyledContainerProps) => (
    <Container {...{ templateAreas, className }}>{children}</Container>
);

NewsItem.Tag1 = (props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'tag1',
            ...props,
        }}
    />
);
NewsItem.Tag2 = (props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'tag2',
            ...props,
        }}
    />
);
NewsItem.Info = (props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'info',
            ...props,
        }}
    />
);
NewsItem.Content = styled((props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'content',
            stretch: true,
            ...props,
        }}
    />
))`
    p {
        display: inherit;
    }
`;
NewsItem.Thumbnail = styled((props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'thumbnail',
            ...props,
        }}
    />
))`
    position: relative;
    display: flex;
    height: auto;
    object-fit: scale-down;
    overflow: hidden;

    img {
        top: 50%;
        width: 100%;
        height: auto;
        margin: auto;
    }
`;
export default NewsItem;
