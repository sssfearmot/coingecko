import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { useAppProvider } from '../AppContext';
import Accordion from '../toggle/toggle';

const Header = () => {
    const { currency, setCurrency, symbol } = useAppProvider();
    const [displayCurrency, setDisplayCurrency] = useState("");

    const displayedCurrency = () => {
        if (displayCurrency === "") {
            setDisplayCurrency("active");
        } else {
            setDisplayCurrency("");
        }
    }

    const changeCurrencyToUsd = () => {
        setCurrency('usd');
        setDisplayCurrency("");
    }

    const changeCurrencyToEur = () => {
        setCurrency('eur');
        setDisplayCurrency("");
    }

    return (
        <div className='currency relative'>

            <div onClick={displayedCurrency} className='cursor-pointer uppercase font-bold items-center flex '>
                {currency}
                <span className='text-base ml-1'> <AiFillCaretDown /> </span>
            </div>

                <ul className={displayCurrency} className='absolute top-10 z-10 hidden'>
                    <li
                        className={currency === 'usd' && 'active'}
                        onClick={changeCurrencyToUsd}
                        className='border border-solid border-inherit pt-2 cursor-pointer font-bold hover:bg-slate-300 active:bg-slate-300'
                    >
                        USD
                    </li>

                    <li
                        className={currency === 'eur' && 'active'}
                        onClick={changeCurrencyToEur}
                        className='border border-solid border-inherit pt-2 cursor-pointer font-bold hover:bg-slate-300 active:bg-slate-300'
                    >
                        EUR
                    </li>
                </ul>
        </div>
    );
};

export default Header;