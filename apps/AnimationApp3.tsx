import { useEffect, useRef } from 'react';

import { staggerAnimation } from '@/animation/animations';
import {
    AnimatedComponent,
    AnimatedComponentTwo,
} from '@/animation/AnimatorContainer';

import { HeaderContentFooter } from '@/templates/HeaderContentFooter';

import cat from '@/assets/cat.jpg';
import tommy from '@/assets/tommy_portret.png';

import { Img, ListItem, Wrapper } from '@apps/AnimationApp3.style';

const AnimationApp3 = () => {
    // Add refs for list items (to animate as in App2)
    const listRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        // Only when all refs are set
        if (listRefs.current.filter(Boolean).length === 5) {
            const tl = staggerAnimation(
                listRefs.current.filter(Boolean) as HTMLLIElement[]
            );
            return () => {
                tl?.kill?.();
            };
        }
    }, []);

    return (
        <HeaderContentFooter
            header={<strong>Animation App 3</strong>}
            footer={
                <small>
                    Using HOC-based AnimatedComponent wrappers + stagger
                    animation
                </small>
            }>
            <Wrapper>
                <AnimatedComponent>
                    <div>
                        <h2>Animated Section</h2>
                        <p>
                            This section fades in from above using the
                            withAnimationContext HOC.
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                gap: '1rem',
                                flexWrap: 'wrap',
                            }}>
                            <Img src={cat} alt="cat" />
                        </div>
                    </div>
                </AnimatedComponent>
                <AnimatedComponentTwo>
                    <h2>Animated Section</h2>
                    <p>
                        This section fades in from above using the
                        withAnimationContext HOC.
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                        }}>
                        <Img src={tommy} alt="tommy" />
                    </div>
                </AnimatedComponentTwo>
                <ul>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <ListItem
                            key={i}
                            ref={(el) => (listRefs.current[i] = el)}>
                            Animated list item {i + 1}
                        </ListItem>
                    ))}
                </ul>
            </Wrapper>
        </HeaderContentFooter>
    );
};

export default AnimationApp3;
