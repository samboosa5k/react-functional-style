import { PropsWithChildren, RefAttributes, useRef, useEffect, ComponentType } from 'react';
import { gsap } from "gsap";

// Use the existing Props interface you already have
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

// Generic HOC with proper typing using RefAttributes
export const withAnimationContext = <T extends HTMLElement>(
    WrappedComponent: ComponentType<Props<T>>
) => {
    return (props: Omit<Props<T>, 'ref'>) => {
        const ref = useRef<T>(null);

        useEffect(() => {
            if (!ref.current) return;

            const ctx = gsap.context(() => {
                const tl = gsap.timeline();
                tl.from(ref.current, { opacity: 0, y: -20, duration: 0.5 })
                  .to(ref.current, { opacity: 1, y: 0, duration: 0.5 });
            });

            return () => ctx.revert();
        }, []);

        // Cast props with ref added
        return <WrappedComponent {...props satisfies Props<T>} ref={ref} />;
    };
};

// Wrapped components with explicit type arguments
export const AnimatedComponent = withAnimationContext<HTMLDivElement>(Component);
export const AnimatedComponentTwo = withAnimationContext<HTMLUListElement>(ComponentTwo);
