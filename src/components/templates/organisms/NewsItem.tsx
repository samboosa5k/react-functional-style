import { ReactNode } from 'react';

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Block, StyledBlockProps } from '../atoms';
import { Container } from './NewsItem.style';

export interface StyledContainerProps {
    templateAreas: FlattenSimpleInterpolation;
    className?: string;
    children?: ReactNode;
}

export const NewsItem = ({ templateAreas }: StyledBlockProps | any): JSX.Element => {
    return (
        <NewsItem.Container templateAreas={templateAreas}>
            <NewsItem.Tag1>Tag1</NewsItem.Tag1>
            <NewsItem.Tag2>Tag2</NewsItem.Tag2>
            <NewsItem.Content>
                {'Here is some content, and some random text which I need to fill this area.'.repeat(
                    10,
                )}
                <NewsItem.Info>INFO</NewsItem.Info>
            </NewsItem.Content>
        </NewsItem.Container>
    );
};

NewsItem.Container = ({ templateAreas, children }: StyledContainerProps) => (
    <Container templateAreas={templateAreas}>{children}</Container>
);

NewsItem.Thumbnail = styled(Block)<StyledBlockProps>(
    (props) => css`
      background: ${props?.stretch ? 'red' : 'blue'};
    `,
);
NewsItem.Tag1 = (props: Partial<StyledContainerProps>) => (
    <Block
        {...{
            gridArea: 'tag1',
            className: props?.className || 'item__tag item__tag--1',
            ...props,
        }}
    />
);
NewsItem.Tag2 = (props: Partial<StyledContainerProps>) => (
    <Block
        {...{
            gridArea: 'tag2',
            className: 'item__tag item__tag--2',
            ...props,
        }}
    />
);
NewsItem.Info = (props: Partial<StyledContainerProps>) => (
    <Block
        {...{
            gridArea: 'info',
            className: 'item__info item__info',
            ...props,
        }}
    />
);
NewsItem.Content = styled((props: Partial<StyledContainerProps>) => (
    <Block
        {...{
            gridArea: 'content',
            className: 'item__content item__content',
            stretch: true,
            ...props,
        }}
    />
))`
  border: 1px solid red;
`;
export default NewsItem;
