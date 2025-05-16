import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        {
            name: 'Home',
            url: '/',
            active: true
        },
        {
            name: 'Login',
            url: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            url: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            url: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add Posts',
            url: '/add-posts',
            active: authStatus
        }
    ]

    return (
        <header className='py-3 shadow bg-gray-500'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                        <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button 
                                    className='inline-block px-6 py-2 duration-200 hover:bg-violet-500 rounded-full'
                                    onClick={() => { console.log("Navigating to", item.url) 
                                        navigate(item.url)}}
                                    >{item.name}</button>
                                </li>
                            ) : null)}

                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )
                        }
                    </ul>
                </nav>
                </Container>
        </header>
    )
}

export default Header
