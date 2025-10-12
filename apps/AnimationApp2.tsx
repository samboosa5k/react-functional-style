import { useEffect } from 'react';

import { staggerAnimation } from '@/animation/animations';

import MediaCard from '@/molecules/MediaCard';

import { Gallery } from '@/organisms/Gallery';

import { HeaderContentFooter } from '@/templates/HeaderContentFooter';
import { TwoColumn } from '@/templates/TwoColumn';

import tommy from '@/assets/tommy_portret.png';

import { ItemWrap, Page } from '@apps/AnimationApp2.style';

const items = new Array(8).fill(0).map((_, i) => ({ key: i }));

const AnimationApp2 = () => {
    useEffect(() => {
        const tl = staggerAnimation('.stagger-item');
        return () => {
            tl?.kill?.();
        };
    }, []);

    return (
        <HeaderContentFooter
            header={<strong>Animation App 2</strong>}
            footer={
                <small>
                    Using staggerAnimation() helper • tommy_portret.png
                </small>
            }>
            <Page>
                <TwoColumn
                    left={
                        <p>
                            This page demonstrates the reusable
                            atoms/molecules/templates and uses the
                            staggerAnimation() utility to move items
                            horizontally in a loop.
                        </p>
                    }
                    right={
                        <Gallery>
                            {items.map((it, i) => (
                                <ItemWrap className="stagger-item" key={it.key}>
                                    <MediaCard
                                        src={tommy}
                                        title={`Tommy ${i + 1}`}
                                        text="Portrait vibes."
                                    />
                                </ItemWrap>
                            ))}
                        </Gallery>
                    }
                />
            </Page>
        </HeaderContentFooter>
    );
};

export default AnimationApp2;
