import { gsap } from 'gsap';

export const slideInOutAnimation = (targetClassName: string) => {
    console.log('targetClassname', targetClassName);
    gsap.from(targetClassName, {
        duration: 0.5,
        x: '20%',
        opacity: 0,
        stagger: 0.1,
        delay: 0.2,
        repeat: -1,
        yoyo: true,
    });
};

export const upDownAnimation = (targetClassName: string) => {
    console.log('targetClassname', targetClassName);
    gsap.from(targetClassName, {
        duration: 0.25,
        y: '100%',
        opacity: 0,
        stagger: 0.1,
        delay: 0.05,
        repeat: -1,
        yoyo: true,
    });
};

export const staggerAnimation = (
    targetClassNames: HTMLLIElement[] | string
) => {
    const tl = gsap.timeline();
    return tl.to(targetClassNames, {
        duration: 2,
        x: '100%',
        stagger: {
            each: 0.1,
            from: 0,
            repeat: -1,
            yoyo: true,
        },
    });
};
