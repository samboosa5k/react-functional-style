import { FC } from 'react'
import { Wrapper as ListContainer } from '../components/utility'
import { Mapper } from '../components/utility/Mapper'

const model = { keyString: 'no key value provided' }

const data = [
    {
        keyString: 'keyString_1',
    },
    {
        keyString: 'keyString_2',
    },
    {
        keyString: 'keyString_3',
    },
    {
        keyString: 'keyString_4',
    },
]

const ListItem = (props: { keyString: string }) => <li>{JSON.stringify(props)}</li>

export const DummyList: FC = () => (
    <ListContainer as="ul">
        <Mapper Comp={ListItem} model={model} data={data} />
    </ListContainer>
)
