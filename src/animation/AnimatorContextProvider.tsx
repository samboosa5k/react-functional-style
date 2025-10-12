// import gsap from 'gsap';
import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useContext,
    useRef,
} from 'react';

// import { X as AnimateWrapper } from '@/utils/namedJSX';

export interface AnimatorContextType {
    parentRef?: HTMLDivElement | null;
    childRefs?: HTMLDivElement[] | [] | null;
    addToChildRefs?: (elem: HTMLDivElement) => void;
    getChildRefs?: () => HTMLDivElement[] | [] | undefined;
}

const AnimatorContext = createContext<AnimatorContextType>({});

export const useAnimatorContext = () => useContext(AnimatorContext);

export const AnimatorContextProvider: FC<{ children: ReactNode }> = ({
    // animationCallback,
    children,
}) => {
    const parentRef = useRef<AnimatorContextType['parentRef']>(undefined);
    const childRefs = useRef<AnimatorContextType['childRefs']>([]);

    const addToChildRefs = useCallback(
        (elem: HTMLDivElement) =>
            elem && childRefs?.current
                ? (childRefs.current = [...(childRefs?.current || []), elem])
                : [elem],
        []
    );

    const getChildRefs = useCallback(() => childRefs?.current || [], []);

    return (
        <AnimatorContext.Provider
            value={{
                parentRef: parentRef?.current,
                childRefs: childRefs?.current,
                addToChildRefs,
                getChildRefs,
            }}>
            {children}
        </AnimatorContext.Provider>
    );
};
