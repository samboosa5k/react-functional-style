export const isNumber = (arg0: any): arg0 is number =>
    !isNaN(arg0) && typeof arg0 === 'number';
export const isDefined = (
    arg0: any
): arg0 is NonNullable<typeof arg0 | undefined> => typeof arg0 !== 'undefined';

export const prependString = (
    stringTarget: string,
    stringToPrepend: string
) => {
    const isAlreadyPrepended = new RegExp(`/^${stringToPrepend}.+/`).test(
        stringTarget
    );
    return !isAlreadyPrepended
        ? `${stringToPrepend}${stringTarget}`
        : stringTarget;
};