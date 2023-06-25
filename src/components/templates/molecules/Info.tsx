import { Area, StyledBlockProps } from '../atoms';

export const Info = (props: Partial<StyledBlockProps>) => (
    <Area
        {...{
            gridArea: 'info',
            ...props,
        }}
    />
);
