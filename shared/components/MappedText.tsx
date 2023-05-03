import {ReactNode} from 'react';

type Attributes<K extends string, T> = {
    [key in K]: T;
};

type ClickVoidFn = (data: any) => void;

type ClickableAttrs = Attributes<'onClick', ClickVoidFn>;
type MappedKey = `${string}-${number}`;

// Define the react element
export const MappedText =
    (children: ReactNode, _key: MappedKey) => (attrs?: ClickableAttrs) =>
        (
            <span key={_key} {...attrs}>
                {children}
            </span>
        );

const TextMapper =
    (data: string[] | number[]) =>
    (onClick: ClickVoidFn): JSX.Element[] =>
        data.map((text, index) =>
            MappedText(
                text,
                `${text}-${index}`
            )({
                onClick: () => onClick(text),
            })
        );

interface TextMapProps {
    data: string[] | number[];
}

export const TextMap = ({ data, onClick }: TextMapProps & ClickableAttrs) => (
    <>{TextMapper(data)(onClick)}</>
);
