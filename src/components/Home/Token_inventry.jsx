import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./home.css";
import { useSelector } from 'react-redux';
function Token_inventry() {
  const [tokendata, settokendata] = useState();
  const { data } = useSelector((store) => store.SearchMangerdata);


    let soert=data.sort((a,b) =>  parseFloat(b.priceUsd) - parseFloat(a.priceUsd)  )

    // console.log("soert",soert)
  const handle_getdata = async () => {
    try {
      let res = await axios("https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c");

      settokendata(res.data.pairs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handle_getdata();
  }, [data,tokendata]);

  return (
    <div>

      { data.length === 0 ? 
      
    
   

    <div id='parent_box'>

<h1 className='heading'> <b>Token </b> </h1>


      {
        tokendata?.slice(0,3).map((el,index) =>{
          return <div key={index} className='card'>
              <div className='child-card'>
              <h1 className='title' > <b>  Basic Info </b> </h1>

                <p> <b>Pair created at</b> <span > {el.baseToken.name} </span>  </p>
                <p> <b>Symbol</b> {el.baseToken.symbol}</p>
                <p> <b>DEX ID</b> {el.dexId}</p>
                <p> <b>Address</b> {el.pairAddress}</p>
              </div>

              <div className='child-card'>
                <h1 className='title' > <b>  Basic Token </b> </h1>
                <p> <b>Name</b> {el.baseToken.name}</p>
                <p> <b>Symbol</b> {el.baseToken.symbol}</p>
                <p> <b>Address</b> {el.baseToken.address}</p>

              </div>

              <div className='child-card'>
                <h1 className='title' > <b>  Quote Token </b> </h1>
                <p> <b>Name</b> {el.quoteToken.name}</p>
                <p> <b>Symbol</b> {el.quoteToken.symbol}</p>
                <p> <b>Address</b> {el.quoteToken.address}</p>

              </div>

              <div className='child-card'>
              <h1 className='title' > <b>Price</b> </h1>
              <p> <b>Price Native</b> {el.priceNative}</p>
              <p> <b>Price USD</b> {el.priceUsd}</p>

              </div>

     
          </div>
        })
      }



  
    </div> :



    <div id='parent_box'>
<h1 className='heading'> <b>Token Search Results </b> </h1>

{
  soert?.slice(0,8).map((el,index) =>{
    return <div key={index} className='card'>
        <div className='child-card'>
        <h1 className='title' > <b>  Basic Info </b> </h1>

          <p> <b>Pair created at</b> {el.baseToken.name}</p>
          <p> <b>Symbol</b> {el.baseToken.symbol}</p>
          <p> <b>DEX ID</b> #{el.dexId}</p>
          <p> <b>Address</b> #{el.pairAddress}</p>
        </div>

        <div className='child-card'>
          <h1 className='title' > <b>  Basic Token </b> </h1>
          <p> <b>Name</b> {el.baseToken.name}</p>
          <p> <b>Symbol</b> {el.baseToken.symbol}</p>
          <p> <b>Address</b> #{el.baseToken.address}</p>

        </div>

        <div className='child-card'>
          <h1 className='title' > <b>  Quote Token </b> </h1>
          <p> <b>Name</b> {el.quoteToken.name}</p>
          <p> <b>Symbol</b> {el.quoteToken.symbol}</p>
          <p> <b>Address</b> #{el.quoteToken.address}</p>

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

}
    </div>

  )
}

export default Token_inventry
