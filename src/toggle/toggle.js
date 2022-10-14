import React, { useState } from 'react';

function Accordion({ title, content }) {
    const [isCheck, setCheck] = useState(false);

    return (
        <span>
            <a className='cursor-pointer'
                onClick={() => {
                    setCheck((e) => !e);
                }}
            >
                {isCheck ? "숨기기" : "더보기"}
            </a>

            {
                isCheck && (
                    <p
                        style={{
                            marginTop: "1rem"

                        }}
                    >
                        {content}
                    </p>
                )
            }
        </span>
    );
}

export default Accordion;