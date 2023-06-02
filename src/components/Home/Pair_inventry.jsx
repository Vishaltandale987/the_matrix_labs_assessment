import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./home.css";
function Pair_inventry() {
  const [data, setdata] = useState();

  const handle_getdata = async () => {
    try {
      let res = await axios("https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");

      setdata(res.data.pairs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handle_getdata();
  }, []);

  return (
    <div id='parent_box'>

      {
        data?.slice(0,2).map((el,index) =>{
          return <div key={index} className='card'>
              <div className='child-card'>
              <h1 className='title' > <b>  Basic Info </b> </h1>

                <p> <b>Pair created at</b> {el.baseToken.name}</p>
                <p> <b>Symbol</b> {el.baseToken.symbol}</p>
                <p> <b>DEX ID</b> #{el.dexId}</p>
                <p> <b>Address</b> #{el.pairAddress.substring(0,4)}</p>
              </div>

              <div className='child-card'>
                <h1 className='title' > <b>  Basic Token </b> </h1>
                <p> <b>Name</b> {el.baseToken.name}</p>
                <p> <b>Symbol</b> {el.baseToken.symbol}</p>
                <p> <b>Address</b> #{el.baseToken.address.substring(0,4)}</p>

              </div>

              <div className='child-card'>
                <h1 className='title' > <b>  Quote Token </b> </h1>
                <p> <b>Name</b> {el.quoteToken.name}</p>
                <p> <b>Symbol</b> {el.quoteToken.symbol}</p>
                <p> <b>Address</b> #{el.quoteToken.address.substring(0,4)}</p>

              </div>

              <div className='child-card'>
              <h1 className='title' > <b>Price</b> </h1>
              <p> <b>Price Native</b> {el.priceNative}</p>
              <p> <b>Price USD</b> {el.priceUsd}</p>

              </div>

     
          </div>
        })
      }



  
    </div>
  )
}

export default Pair_inventry
