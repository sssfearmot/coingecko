import React, { useState, useEffect } from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from "react-router-dom"
import { db } from "../firebase"
import { UserAuth } from "../context/AuthContext"
import { arrayUnion, doc, updateDoc, onSnapshot } from "firebase/firestore"
import { Chart } from 'react-chartjs-2';


function CoinItem({ coin }) {

  const [savedCoin, setSavedCoin] = useState(false)
  const { user } = UserAuth()

  const handleSavedCoin = () => {
    setSavedCoin(prevCoin => !prevCoin)
  }

  const coinPath = doc(db, "user", `${user?.email}`)
  const saveCoin = async () => {
    if (user?.email) {
      handleSavedCoin()
      await updateDoc(coinPath, {
        favorites: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
          price: coin.current_price,
        })
      })
    } else {
      alert("로그인해 좋아하는 코인을 쉽게 추적하세요 🚀")
    }
  }

  return (
    <tr className='h-[75px] border-b overflow-hidden'>
      <td className='w-5' onClick={saveCoin}>
        {savedCoin ? <AiOutlineHeart color='red' /> : <AiOutlineHeart />}
      </td>
      <td className='lg:w-14'>{coin.market_cap_rank}</td>
      {/* <td>
        <img className='w-6' src={coin.image} alt={coin.id} />
      </td> */}
      <td>
        <div className='flex items-center'>
          <img className='w-6 mr-2' src={coin.image} alt={coin.id} />
          <div className='w-auto font-bold'><Link to={`/coin/${coin.id}`}>{coin.name}</Link></div>
          <div className='text-xs ml-2 text-hsla-gray dark:text-0.6'><Link to={`/coin/${coin.id}`}>{coin.symbol.toUpperCase()}</Link></div>
        </div>
      </td>
      <td className='w-40'>
        {/* <div><Link to={`/coin/${coin.id}`}>{coin.symbol.toUpperCase()}</Link></div> */}
      </td>
      <td className='w-40 text-sm py-1 px-2'>${coin.current_price.toLocaleString()}</td>
      <td className={coin.price_change_percentage_24h > 0 ? "text-green-500 w-40 text-sm" : "text-red-600 w-40 text-sm"}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
      <td className='w-40 md:table-cell text-sm py-1 px-2'><span>${coin.total_volume.toLocaleString()}</span></td>
      <td className='w-40 md:table-cell text-sm py-1 px-2'><span>${coin.market_cap.toLocaleString()}</span></td>
      <td>
        <Sparklines svgWidth={140} data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="lightblue" />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CoinItem