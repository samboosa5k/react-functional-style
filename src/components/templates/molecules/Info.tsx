import { Block, StyledBlockProps } from '../atoms';

export const Info = (props: Partial<StyledBlockProps>) => (
    <Block
        {...{
            gridArea: 'info',
            ...props,
        }}
    />
);
