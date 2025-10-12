import React, { useMemo } from 'react';

import { AnimatorWrapper } from '@/animation/AnimatorWrapper';

import MediaCard from '@/molecules/MediaCard';

import { Gallery } from '@/organisms/Gallery';
import { Hero } from '@/organisms/Hero';

import { HeaderContentFooter } from '@/templates/HeaderContentFooter';

import cat from '@/assets/cat.jpg';

import { Page } from '@apps/AnimationApp1.style';

const cards = new Array(6).fill(0).map((_, i) => ({ key: i }));

const AnimationApp1: React.FC = () => {
    const animationIN = useMemo(
        () => ({ opacity: 0, y: 40, stagger: 0.1, ease: 'power2.out' }),
        []
    );
    const animationOUT = useMemo(
        () => ({ opacity: 1, y: 0, stagger: 0.1, ease: 'power2.out' }),
        []
    );

    return (
        <HeaderContentFooter
            header={<strong>Animation App 1</strong>}
            footer={
                <small>
                    Using AnimatorWrapper + styled-components • cat.jpg
                </small>
            }>
            <Hero
                title="Welcome to Animation App 1"
                subtitle="Cards slide up into view using AnimatorWrapper"
                ctaText="Nice!"
            />

            <Page>
                <AnimatorWrapper
                    animationIN={animationIN}
                    animationOUT={animationOUT}>
                    {({ addToChildRefs }) => (
                        <Gallery>
                            {cards.map((c, i) => (
                                <div
                                    key={c.key}
                                    ref={(el) =>
                                        addToChildRefs
                                            ? el && addToChildRefs(el, i)
                                            : null
                                    }>
                                    <MediaCard
                                        src={cat}
                                        title={`Cat ${i + 1}`}
                                        text="Such wow. Much paws."
                                    />
                                </div>
                            ))}
                        </Gallery>
                    )}
                </AnimatorWrapper>
            </Page>
        </HeaderContentFooter>
    );
};

export default AnimationApp1;
