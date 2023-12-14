import React from 'react'

const Body = () => {
    return (
        <>
            <body>
                <div>
                    <div class="colom">
                        <div>
                            <h1 className="business">Let's Take your <span class="span">Business</span> to the Next Level</h1>
                        </div>
                        <div className="lorem">
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet culpa velit. Corrupti odit illo vitae dignissimos earum alias porro error rerum mollitia minus! Animi....</h4>
                        </div>
                        <div>
                            <button type='button' className="gstart">Get Start</button>
                            <button type='button' className="lmore">Learn More</button>
                        </div>
                    </div>
                    <div className="colom">
                        <img src="./images/rocket.png" alt="Image" width={550} height={550}></img>
                    </div>
                </div>


                <footer className="foot">
                    <div className="number">
                        {
                            [5209,2409,3678,2895].map(e=><div className='num' key={e}>{e}</div>)
                        }
                    </div>
                    <div className="info">
                        <p>Links Optimized</p>
                        <p>Happy Customers</p>
                        <p>Websites Improved</p>
                        <p>Active Accounts</p>
                    </div>
                </footer>
            </body>
        </>
    )
}

export default Body