import React, { ReactNode } from 'react'
import Card from '../Card';
import NavLink from '../NavLink';
import {BiNews, BiGame} from 'react-icons/bi'


type Props = {
    children: ReactNode;
}

export default function NavBar(props: Props) {
    return (
        <Card styles='bg-slate-500 bg-opacity-30 rounded-lg w-full p-1 flex justify-between items-center drop-shadow-lg '>
            <span>logo</span>

            <div className='flex gap-2'>
                <NavLink styles='py-1 px-2 mx-1 rounded-lg hover:bg-emerald-500 hover:text-emerald-100 flex items-center gap-2' href='/Feed'>
                    <BiNews size={18}/>
                    <span>Feed</span>
                </NavLink>
                <NavLink styles='py-1 px-2 rounded-lg mx-1 hover:bg-emerald-500 hover:text-emerald-100 flex items-center gap-2' href='/Features'>
                    <BiGame size={18}/>
                    <span>Features</span>
                    </NavLink>
                <NavLink styles='py-1 px-2 rounded-lg mx-1 border-solid border-2 border-slate-50 hover:bg-emerald-500 hover:border-emerald-500 hover:text-emerald-100' href='/About'>About</NavLink>
            </div>
        </Card>
    )
}