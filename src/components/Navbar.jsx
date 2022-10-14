import React, { useEffect } from 'react'
import logo from '../Asset/logo01.png';
import logoDark from '../Asset/logo01.png';
import { CgProfile } from "react-icons/cg"
import { Link, useNavigate } from "react-router-dom"
import Switcher from './Switcher'
import MobileMenu from './MobileMenu'
import { UserAuth } from "../context/AuthContext"
import useAxios from '../hooks/useAxios';
import { separator } from '../Utils/utils';
import { useAppProvider } from '../AppContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import Accordion from '../toggle/toggle';
import Currency from '../components/Currency';

function Navbar() {
    const { currency, setCurrency, symbol, isDark, toggleDark } = useAppProvider();
    const { user, logout } = UserAuth()
    const navigate = useNavigate()

    const { response } = useAxios('global')

    const handleSignOut = async () => {
        try {
            await logout()
            navigate("/signin")
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <header>
            <div className='header-menu relative py-1.5 px-0 border-b'>
                <div className='w-140 max-w-full my-0 mx-auto px-6 flex h-10 items-center text-xs sm:hidden'>
                    <div className='mr-12 text-hsla-gray dark:text-0.6'>코인: <span className='text-hsla-blue'>{response && response.data.active_cryptocurrencies}</span> </div>
                    <div className='mr-12 text-hsla-gray dark:text-0.6'>거래소: <span className='text-hsla-blue'>{response && response.data.markets}</span></div>
                    <div className='mr-12 text-hsla-gray dark:text-0.6'>시가총액: <span className='text-hsla-blue'>{symbol}{response && separator(response.data.total_market_cap[currency])}</span></div>
                    <div className='mr-12 text-hsla-gray dark:text-0.6'>14시간 거래량: <span className='text-hsla-blue'>{symbol}{response && separator(response.data.total_volume[currency])}</span></div>
                    <div className='mr-12 text-hsla-gray dark:text-0.6'>점유율: <span className='text-hsla-blue'>{response && response.data.market_cap_percentage.btc.toFixed(2)}%</span></div>
                </div>
            </div>

            <div className='border-b'>
                <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
                    <div className='flex items-center'>
                        <Link to="/" className='flex items-center'>
                            <img src={logo} width="40px" className='mr-2' /><h1 className='text-xl'>CoinGecko</h1>
                        </Link>
                        <div className='nav-menu ml-6 sm:hidden'>
                            <ul className='flex'>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover '>암호화폐</a>
                                </li>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover'>거래소</a>
                                </li>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover'>NFT</a>
                                </li>
                                <li className='pr-6 text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover'>암호화폐 알아보기</a>
                                </li>
                                <li className='text-4a4a4a dark:text-eee'>
                                    <a href='javascript:void(0);' className='text-sm font-medium hover:text-green-hover'>상품</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='mr-6'>
                            <Currency />
                        </div>

                        <div className='md:block hidden mr-6'>
                            <Switcher />
                        </div>

                        <div className='md:block hidden'>
                            {user?.email ? (
                                <div className='flex'>
                                    <Link to="/account">
                                        <CgProfile className='cursor-pointer mr-2' size={26} />
                                    </Link>
                                    <button onClick={handleSignOut}>Log Out</button>
                                </div>

                            ) : (
                                <Link to="/signin">
                                    Sign In
                                </Link>)}
                        </div>
                        <div className='md:hidden block'>
                            <MobileMenu signOut={handleSignOut} user={user} />
                        </div>
                    </div>
                </div>


            </div>
        </header>
    )
}

export default Navbar