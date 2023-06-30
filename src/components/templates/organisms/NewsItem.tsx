import { ReactNode } from 'react';

// import styled from 'styled-components';
//
// import Cat from '../../../assets/cat.jpg';
// import { Heading, Tag } from '../atoms';
import { ArticleItem } from '../molecules';

export interface StyledContainerProps {
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

// const Container = styled.div`
//    display: grid;
//    grid-gap: 0.5em;
//    grid-template-columns: repeat(6, minmax(0, 1fr));
//    width: auto;
//    //height: 8vh;
//    padding: 0.5em;
//    margin-bottom: 0.25em;
//
//    background: linear-gradient(
//        180deg,
//        rgba(255, 255, 255, 0) 0%,
//        rgba(255, 255, 255, 0.8) 50%,
//        rgba(255, 255, 255, 1) 100%
//    );
//    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
//    border: 1px solid rgba(0, 0, 0, 0.1);
//
//    .thumbnail-container {
//        display: flex;
//        position: relative;
//        object-fit: cover;
//        height: 100%;
//        overflow: hidden;
//
//        background: rgba(0, 0, 0, 0.1);
//        border-radius: 4px;
//        border: 1px solid #dddfe2;
//
//        & > img {
//            display: none;
//            height: 100%;
//            width: 100%;
//            object-fit: cover;
//        }
//    }
//
//    & > .content-container {
//        display: inline;
//        flex-grow: 1;
//        flex-direction: column;
//        grid-column: 2 / span stretch;
//        overflow: hidden;
//        text-overflow: ellipsis;
//    }
//
//    @media (min-width: 320px) {
//        line-height: initial;
//    }
//
//    @media (min-width: 480px) {
//        height: 6vh;
//    }
//
//    @media (min-width: 768px) {
//        height: 2em;
//        grid-template-columns: repeat(6, minmax(0, 1fr));
//    }
//
//    @media (min-width: 1280px) {
//        //
//    }
//`;

//  @ts-ignore
export const NewsItem = ({ config }: StyledNewsItemProps): JSX.Element => {
    return (
        <ArticleItem>
            <ArticleItem.SubItem col={1} row={1} as={'span'}>
                <ArticleItem.InlineItem color="white" background={'#52a2da'}>
                    {config?.category}
                </ArticleItem.InlineItem>
            </ArticleItem.SubItem>

            <ArticleItem.SubItem col={1} row={2} as="span">
                <ArticleItem.InlineItem color="white" background={'#da52a2'}>
                    {config?.category}
                </ArticleItem.InlineItem>
            </ArticleItem.SubItem>

            <ArticleItem.MainItem col={'2 / autofill'} row={'1 / autofill'}>
                <ArticleItem.InlineItem color="white" background={'#a2da52'}>
                    inlien
                </ArticleItem.InlineItem>
                <h3>
                    {config?.title} <span>"after"</span>
                </h3>
            </ArticleItem.MainItem>
        </ArticleItem>
        // <Container className="item-container">
        //     <div className={'thumbnail-container'}>
        //         {/*@ts-ignore */}
        //         <img src={Cat} />
        //     </div>
        //     <div className="content-container">
        //         {config?.category && (
        //             <Tag
        //                 text={config?.category || ''}
        //                 className={'item__tag'}
        //             />
        //         )}
        //         {config?.title && (
        //             <Heading as={'span'} className={'item__heading'}>
        //                 {config.title}
        //             </Heading>
        //         )}
        //     </div>
        // </Container>
    );
};
