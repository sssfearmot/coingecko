import React from 'react'
import Switcher from './Switcher'
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub, AiFillFacebook } from "react-icons/ai"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { AppBar } from '@material-ui/core';

function Footer() {
    return (
        <footer className='bg-footer-dark'>
            <div className='bg-3f3f3f text-center py-4 px-0'>
                <div className='w-140 max-w-full my-0 mx-auto py-0 px-4'>
                    <i className='text-e15241 mr-1'><FontAwesomeIcon icon={faTriangleExclamation} /></i>
                    <a href='javascript:void(0);' className='text-e15241 text-sm hover:text-a71d2a'>중요 면책조항:</a>&nbsp;
                    <span className='text-eee text-sm'>
                        당사의 웹사이트, 참조 사이트, 관련 응용 프로그램, 포럼, 블로그, 소셜 미디어 계정 및 기타 플랫폼("사이트")에 제공되는 정보는 타사 소스로부터 입수되었으며 귀하에게 일반적인 정보제공을 목적으로만 제공됩니다. 당사는 당사의 콘텐츠에 어떠한 것도 보증하지 않습니다(정확성 및 최신성을 포함하되 이에 국한되지 않음). 당사가 제공한 콘텐츠의 어떠한 부분도 귀하가 어떤 목적으로든 특정하게 의존할 수 있는 재무적 조언, 법적 조언 또는 기타 모든 형태의 조언을 구성하지 않습니다. 당사의 콘텐츠에 대한 모든 사용 또는 의존은 귀하 자신의 판단에 의한 것이며, 귀하는 당사의 콘텐츠에 의존하기 전에 스스로 조사, 검토, 분석, 검증을 수행해야 합니다. 거래는 큰 손실이 발생할 수 있는 위험한 활동입니다. 따라서 결정을 내리기 전에 본인의 재무 관리자와 상의하세요. 당사 사이트의 모든 콘텐츠는 권유 또는 제안을 위한 것이 아닙니다.
                    </span>
                </div>
            </div>

            <div className='rounded-div mt-8 w-ful text-white hidden lg:block'>
                <div className='my-5 grid gap-2 md:grid-cols-4 sm:grid-cols-3'>
                    <div>
                        <h1 className='text-2xl font-semibold'>CoinGecko</h1>
                        <p className='max-w-[160px] mt-2 text-sm'>고객 센터 | <a href="javascript:void(0);">버그 바운티 |</a><br /> 면책 조항 | <a href="javascript:void(0);">이용 약관 |</a > 개인정보취급방침 |</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>둘러보기</h2>
                        <ul className=' text-gray-400'>
                            <li>비트코인 가격</li>
                            <li>이더리움 가격</li>
                            <li>DeFi 코인</li>
                            <li>메타버스 코인</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>리소스</h2>
                        <ul className=' text-gray-400'>
                            <li>영구계약</li>
                            <li>암호화폐 뉴스</li>
                            <li>비트코인 보유고</li>
                            <li>암호화폐 히트맵</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-lg font-semibold'>암호화폐 최신 정보를 원하세요?</h2>
                        <div>
                            <input className='py-1 outline-none text-black text-sm rounded-lg indent-3 my-2 bg-slate-200' type="email" placeholder='이메일 입력' />
                        </div>
                        <div>
                            <button className='text-xs px-3 py-1 bg-slate-700 rounded-lg'>구독</button>
                        </div>
                    </div>
                    <div className='flex justify-between col-start-2 col-end-4 md:mt-4 sm:mt-9 mt-[68px]'>
                        <AiFillFacebook size={20} />
                        <AiOutlineGithub size={20} />
                        <AiOutlineInstagram size={20} />
                        <AiOutlineTwitter size={20} />
                    </div>
                </div>
                <div className='flex justify-center pb-2 text-xs'>
                    <small>© 2022 CoinGecko. All Rights Reserved.</small>
                </div>
            </div>

            <div className='py-2 1lg:hidden'>
                <div className='flex justify-center items-center'>
                    <a href='javascript:void(0);' className='text-white text-xs'>면책조항</a>
                    <span className='mx-1 text-4a4a4a'>•</span>
                    <a href='javascript:void(0);' className='text-white text-xs'>이용약관</a>
                    <span className='mx-1 text-4a4a4a'>•</span>
                    <a href='javascript:void(0);' className='text-white text-xs'>개인정보취급방침</a>
                </div>
                <div className='flex justify-center items-center mt-2 text-xs text-4a4a4a'>
                    © 2022 CoinGecko. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer