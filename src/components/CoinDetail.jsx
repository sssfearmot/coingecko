import React from 'react';
// import './coinDetail.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import { AiFillCaretUp } from 'react-icons/ai';
import { reduceString, separator } from '../Utils/utils';
import { useAppProvider } from '../AppContext';

// import Loader from '../Loader/Loader';


const CoinDetail = ({ response }) => {
    const { currency, symbol } = useAppProvider();

    return (
        // !response ? (
        //     <Loader height="150px" />
        // )
        //     :
        (
            <div className='coinDetail-section'>
                <div className='detail-item-1'>
                    <div className='item_1'>
                        <div>
                            <img src={response.image.large} alt="coinLogo" width="50px" />
                            <div>{response.name}</div>
                        </div>
                        <span style={{ textTransform: "uppercase" }}>{response.symbol}</span>
                    </div>

                    <div className='item_2'>Rank #{response.market_cap_rank}</div>

                    <div className='item_3'>
                        <div id='price'>{symbol}{response.market_data.current_price[currency]}</div>
                        <div className={response.market_data.price_change_percentage_24h_in_currency[currency] < 0 ? 'change down' : 'change'}>
                            <span> {response.market_data.price_change_percentage_24h_in_currency[currency] < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />} </span>
                            {reduceString(response.market_data.price_change_percentage_24h_in_currency[currency])}%
                        </div>
                        <span>24h</span>
                    </div>

                    <div className='item_4'>
                        <div><span>역대 최저가 : </span>{symbol}{response.market_data.low_24h[currency]}</div>
                        <div><span>역대 최고가 : </span>{symbol}{response.market_data.high_24h[currency]}</div>
                    </div>
                </div>

                <div className='detail-item-2'>
                    <div>
                        <div>24시간 거래대금</div>
                        <div>{symbol}{separator(response.market_data.total_volume[currency])}</div>
                    </div>
                    <div>
                        <div>시가총액</div>
                        <div>{symbol}{separator(response.market_data.market_cap[currency])}</div>
                    </div>
                    <div>
                        <div>유통량</div>
                        <div>{separator(response.market_data.total_supply)} <span style={{ textTransform: "uppercase" }}>{response.symbol}</span>	</div>
                    </div>
                </div>
            </div>
        )

    );
};

export default React.memo(CoinDetail);