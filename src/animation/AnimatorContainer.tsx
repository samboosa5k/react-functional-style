import { PropsWithChildren, RefAttributes, useRef, useEffect, ComponentType } from 'react';
import { gsap } from "gsap";

interface Props<T> extends RefAttributes<T>, PropsWithChildren { }

const Component = ({ children, ref }: Props<HTMLDivElement>) => {
    return (
        <div ref={ref}>
            {children}
        </div>
    );
};

const ComponentTwo = ({ children, ref }: Props<HTMLUListElement>) => {
    return (
        <ul ref={ref}>
            {children}
        </ul>
    );
};

export const withAnimationContext = <T extends HTMLElement>(
    WrappedComponent: ComponentType<Props<T>>
) => {
    return (props: Omit<Props<T>, 'ref'>) => {
        const ref = useRef<T>(null);

        useEffect(() => {
            const ctx = gsap.context(() => {
                if (!ref.current) return;

                gsap.set(ref.current, { opacity: 0, y: -20 });

                gsap.to(ref.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    repeat: -1,
                    yoyo: true,
                });
            });

            return () => ctx.revert();
        }, []);

        return <WrappedComponent {...props satisfies Props<T>} ref={ref} />;
    };
};

export const AnimatedComponent = withAnimationContext<HTMLDivElement>(Component);
export const AnimatedComponentTwo = withAnimationContext<HTMLUListElement>(ComponentTwo);
