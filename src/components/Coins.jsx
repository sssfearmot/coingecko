import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp, faStar } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import CoinItem from './CoinItem'
import Accordion from '../toggle/toggle';
import { useAppProvider } from '../AppContext';
import { Container } from 'postcss';
import { dark } from '@material-ui/core/styles/createPalette';


function Coins({ coins }) {

    const [searchText, setSearchText] = useState("")
    const [page, setPage] = useState(1);

    const useStyles = makeStyles({
        row: {
            backgroundColor: "#16171a",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#131111",
            },
            fontFamily: "Montserrat",
        },
        pagination: {
            "& .MuiPaginationItem-root": {
                // color: "#eee",
            },
        },
    });

    const classes = useStyles();

    const handleSearch = () => {
        return coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(searchText) ||
                coin.symbol.toLowerCase().includes(searchText)
        );
    };

    return (
        <div>
            <div className='rounded-div'>
                <div className='sm:hidden'>
                    <div className='border-b dark:border-opacity-12'>
                        <nav className='flex space-x-8'>
                            <a href='javascript:void(0);' className='rounded-a text-sm font-medium border-b-2 border-transparent py-3'>
                                <FontAwesomeIcon className='mr-1' icon={faStar} style={{ color: '#f3da35' }} />포트폴리오
                            </a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>코인</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>신규 코인</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>수익률 상/하위</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>카테고리</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>NFT</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>디파이</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>게임</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>BNB</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>Solana</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>Avalanche</a>
                        </nav>
                    </div>
                </div>

                <div className='home-section my-4'>
                    <h1 className='text-2xl font-bold pb-0 mb-2 mr-2 text-gray-900 dark:text-0.87'>시가총액별 암호화폐 시세</h1>
                    <p className='text-sm font-normal text-gray-500 dark:text-0.6'>현재 전 세계 암호화폐 시가총액은 $1.01조이며, 최근 24시간 내 변동폭은 <span className='text-green-500'>4.5% <FontAwesomeIcon icon={faTurnUp} /></span> 입니다. &nbsp;
                        <Accordion content="전일 총 암호화폐 거래량은 $91.8십억입니다. 비트코인 지배력은 37.7%, 이더리움 지배력은 16.3%입니다. CoinGecko는 현재 12,952종의 암호화폐 정보를 추적합니다. 업계 주요 트렌드는 현재 DeFi 및 Play to Earn입니다." /> </p>
                </div>

                <div className='flex justify-end my-3 border-t'>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none my-5' placeholder='Search' />
                </div>

                <div className='relative'>
                    <div className='overflow-x-auto'>
                        <table className='w-full border-collapse text-center'>
                            <thead className='dark:text-white h-11 dark:bg-181818 '>
                                <tr className='border-b border-t'>
                                    <th></th>
                                    <th className='text-sm dark:text-hsla-dark whitespace-nowrap'>#</th>
                                    <th className='text-left text-sm dark:text-hsla-dark whitespace-nowrap'>코인</th>
                                    <th></th>
                                    <th className='text-sm dark:text-hsla-dark whitespace-nowrap'>시세</th>
                                    <th className='text-sm dark:text-hsla-dark w-17 whitespace-nowrap'>24시간 %</th>
                                    <th className='text-sm dark:text-hsla-dark w-17 whitespace-nowrap'>24시간 거래량</th>
                                    <th className='text-sm dark:text-hsla-dark whitespace-nowrap'>시가총액</th>
                                    <th className='text-sm dark:text-hsla-dark w-17 whitespace-nowrap'>최근 일주일</th>
                                </tr>
                            </thead>
                            <tbody className='dark:text-white'>
                                {coins.filter((value) => {
                                    if (searchText === "") {
                                        return value
                                    } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
                                        return value
                                    }
                                })
                                    .slice((page - 1) * 20, (page - 1) * 20 + 20)
                                    .map((coin) => (
                                        <CoinItem key={coin.id} coin={coin} />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Pagination
                count={parseInt((handleSearch()?.length / 20).toFixed(0))}
                style={{
                    padding: 20,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
                classes={{ ul: classes.pagination }}
                onChange={(_, value) => {
                    setPage(value);
                    window.scroll(0, 450);
                }}
            />
        </div>

    );
}

export default Coins