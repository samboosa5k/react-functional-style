import { Block, StyledBlockProps } from '../atoms';

export const Tag = (props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'tag',
            ...props,
        }}
    />
);
