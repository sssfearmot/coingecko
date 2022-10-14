import React, { useEffect, useState } from 'react'
import axios from "axios"
import TrendingItem from './TrendingItem'

function Trending() {

    const [data, setData] = useState([])
    const url = "https://api.coingecko.com/api/v3/search/trending"

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data.coins)
            })
    }, [url])

    return (
        <div className='rounded-div py-5 mb-10'>
            <h1 className='text-3xl font-semibold my-5'>Trending</h1>
            <div className='grid gap-3 md:grid-cols-2 1xl:grid-cols-3 1sm:grid-cols-1 sm:flex-col  sm:flex mb-16'>
                {data.map((coin) => (
                    <TrendingItem key={coin.item.id} coin={coin} />
                ))}
            </div>

            <div>
                <h2 className='text-gray-900 dark:text-0.87 md:text-2xl text-xl font-bold'>암호화폐 시가총액이 무엇인가요?</h2>

                <p className='text-gray-500 dark:text-0.6 mb-8 mt-2 text-sm font-normal'>
                    암호화폐의 시가총액이란 특정 암호화폐에서 채굴되거나 유통 중인 모든 코인이 지닌 총 가치를 말합니다. 시가총액은 암호화폐 순위를 결정할 때 사용합니다. 특정 암호화폐 코인이 시가총액이 크면 순위가 높아지고, 시장에서 차지하는 지분도 커집니다. 암호화폐 시가총액은 유통 중인 총 코인 수에 현재 가격을 곱해서 계산합니다. 예를 들어 이더리움의 시가총액을 계산하려면, 유통 중인 이더리움의 총 개수에 1 이더리움의 현재가를 곱하면 시가총액을 알아낼 수 있습니다.
                </p>

                <h3 className='text-gray-900 dark:text-0.87 text-lg font-bold md:text-xl mb-2'>
                    암호화폐 시가총액은 어떻게 비교하나요?
                </h3>

                <p className='text-gray-500 dark:text-0.6 mt-2 text-sm font-normal mb-4'>
                    암호화폐 시가총액은 세 가지 카테고리로 나눌 수 있습니다.
                </p>

                <div className='text-gray-500 dark:text-0.6 mb-8 text-sm'>
                    <ul className='mb-4'>
                        <li className='list-disc list-inside'>라지캡 암호화폐(>$100억)</li>
                        <li className='list-disc list-inside'>미드캡 암호화폐 ($10억 - $100억)</li>
                        <li className='list-disc list-inside'>스몰캡 암호화폐($10억 미만)입니다.</li>
                    </ul>
                    금융지표로서, 시가총액을 이용하면 한 암호화폐의 유통 중인 총액을 다른 암호화폐와 비교할 수 있습니다. 비트코인, 이더리움을 비롯한 라지캡 암호화폐는 시가총액이 $100억을 넘습니다. 일반적으로 라지캡 암호화폐는 탁월한 실적을 보인 프로토콜, 활발하게 활동하며 프로토콜을 유지하고 개선하는 개발자 커뮤니티, 새롭게 제작되는 신규 프로젝트 등으로 구성됩니다.
                    시가총액은 간단하고 직관적인 비교용 측정치가 되어주지만, 완벽한 비교점은 아닙니다. 일부 암호화폐 프로젝트는 가격 변동과 공급량 토크노믹스에 따라 시가총액이 부풀려진 상태일 수 있습니다. 따라서, 시가총액 수치는 리서치 과정에서 참고자료로만 사용하시고 거래량, 유동성, 완전 희석 가치, 펀더멘털 등의 수치를 함께 활용하시기를 권장합니다.
                </div>

                <h2 className='md:text-2xl text-gray-900 dark:text-0.87 font-bold mb-2'>
                    CoinGecko에서는 암호화폐 가격을 어떻게 계산하나요?
                </h2>

                <p className='text-gray-500 dark:text-0.6 mb-8 mt-2 text-sm font-normal'>
                    가격은 특정 암호화폐 자산의 다양한 거래소에서 이용 가능한 거래쌍을 바탕으로, 전 세계 거래량 가중평균 가격 공식을 이용하여 계산합니다. 암호화폐 가격 및 기타 수치의 추적 방법의 예시나 더 자세한 정보가 궁금하신 경우,
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'> methodology page here</a> 페이지를 참조하시기 바랍니다.
                </p>

                <h3 className='text-gray-900 dark:text-0.87 text-lg font-bold md:text-xl mb-2'>
                    왜 거래소와 암호화폐 가격이 다른가요?
                </h3>

                <p className='text-gray-500 dark:text-0.6 mb-8 mt-2 text-sm font-normal'>
                    다양한 거래소에서 암호화폐 가격이 서로 다르게 표시된다는 사실을 알아보셨군요. 그 이유는 상당히 복잡합니다만, 간단히 말씀드려서 서로 다른 거래소에서 암호화폐는 다양한 경제적 상황, 유동성, 거래쌍, 금융상품(예: 파생상품/레버리지)을 이용해 서로 다른 시장에서 거래되며, 이 모든 요인이 거래가격에 영향을 미친다고 설명할 수 있습니다.
                </p>

                <h2 className='md:text-2xl text-gray-900 dark:text-0.87 font-bold mb-2'>
                    어디에서 암호화폐 가격을 확인해야 하나요?
                </h2>

                <p className='text-gray-500 dark:text-0.6 mb-8 mt-2 text-sm font-normal'>
                    CoinGecko에서 10,000가지 이상의 암호화폐 가격을 50종 이상의 통화로 추적할 수 있습니다. 인기 암호화폐 거래쌍으로는
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'> BTC/USD</a>,&nbsp;
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'>ETH/USD</a>,&nbsp;
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'>SLP/PHP </a>
                    등이 있습니다. 또한 24시간 거래량, 시가총액, 가격 차트, 과거 실적 차트, 유통량 등의 데이터를 추적할 수도 있습니다. CoinGecko의 암호화폐 포트폴리오에 가입하고 포트폴리오 실적을 추적하세요. (현재 베타 버전인) 종합 멀티체인 온체인 차트 작성 도구,
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'> GeckoTerminal</a>
                    에서는 라이브 차트, 현재 거래, 시장 심리 등을 실시간으로 확인할 수도 있습니다! CoinGecko는 모바일 앱도 갖추어
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'> Android </a>
                    및
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'> iOS</a>
                    에서 암호화폐를 추적 가능합니다.
                </p>
                <h3 className='text-gray-900 dark:text-0.87 text-lg font-bold md:text-xl mb-2'>위의 표에서 24시간 거래량이 무엇인가요?</h3>
                <p className='text-gray-500 dark:text-0.6 mb-8 mt-2 text-sm font-normal'>
                    24시간 거래량은 현가시장에서 최근 24시간 동안 모든 거래소를 통해 매수/매도된 암호화폐 금액을 말합니다(
                    <a href='javascript:void(0);' className='text-8dc647 hover:text-7ab52b'>파생상품 거래량은 여기를 참조하세요</a>). 예를 들어 이더리움 24시간 거래량이 $150억이라고 한다면, $150억에 해당하는 이더가 최근 24시간 동안 모든 거래소를 통해 매매되었다는 뜻입니다.
                </p>
            </div>
        </div>
    )
}

export default Trending