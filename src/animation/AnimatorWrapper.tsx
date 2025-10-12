import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';

import { gsap } from 'gsap';

type AnimationVars = gsap.TweenVars;

interface AnimationProps {
    animationIN?: AnimationVars;
    animationOUT?: AnimationVars;
    data?: { [key: string]: any };
}

interface AnimatorWrapper extends AnimationProps {
    children: (
        props: AnimatorWrapperChildren & AnimationProps['data']
    ) => ReactNode | null;
}

interface AnimatorWrapperChildren {
    parentRef?: HTMLDivElement | null;
    childRefs?: HTMLDivElement[] | [] | null;
    addToChildRefs?: (elem: HTMLDivElement, i: number) => void;
    getChildRefs?: () => HTMLDivElement[] | [] | undefined;
}

export const AnimatorWrapper: FC<AnimatorWrapper> = ({
    animationIN,
    animationOUT,
    data,
    children,
}) => {
    const parentRef = useRef<AnimatorWrapperChildren['parentRef']>(undefined);
    const childRefs = useRef<AnimatorWrapperChildren['childRefs']>([]);

    const addToChildRefs = (elem: HTMLDivElement, i: number) =>
        elem && childRefs?.current
            ? (childRefs.current[i] = elem)
            : (childRefs.current = [elem]);

    const getChildRefs = useCallback(
        () => childRefs?.current || [],
        [childRefs]
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({});
            if (childRefs?.current && childRefs.current.length) {
                tl.from(childRefs.current, {
                    duration: 0.5,
                    ...(animationIN || {}),
                }).to(childRefs.current, {
                    duration: 0.5,
                    ...(animationOUT || {}),
                });
            }
        });

        return () => {
            ctx.revert();
        };
    }, [data, animationIN, animationOUT]);

    return (
        <>
            {children({
                data,
                parentRef: parentRef?.current,
                childRefs: childRefs?.current,
                addToChildRefs,
                getChildRefs,
            })}
        </>
    );
};
