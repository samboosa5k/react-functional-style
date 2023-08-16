import { FC } from 'react';

const getDisplayName = <T, C extends FC<Partial<T>>>(
    WrappedComponent: C | FC<T>
) => {
    const displayName =
        WrappedComponent.displayName || WrappedComponent.name || 'Component';
    WrappedComponent.displayName = displayName;
    return WrappedComponent;
};

const autoMap =
    <T, C extends FC<Partial<T>>>(Mappable: C | FC<T>) =>
    (props: T) =>
        getDisplayName(Mappable)({ ...props });
const Mapper =
    <T, C extends FC<Partial<T>>>(MappedComponent: C | FC<T>) =>
    <P extends Array<T>>(props: P) =>
        autoMap(MappedComponent)(props as P & T);

// EXAMPLE

const item = ({ name }: { name: string }) => <h5>{name}</h5>;
const items = [{ name: 'a' }, { name: 'b' }, { name: 'c' }];

const MappedItem = Mapper(item)(items);
export default MappedItem;
