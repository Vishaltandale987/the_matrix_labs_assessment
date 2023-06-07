import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./home.css";
import { useSelector } from 'react-redux';
function Pair_inventry() {
  const [tokendata, settokendata] = useState();
  const { data } = useSelector((store) => store.SearchMangerdata);


    let soert=data.sort((a,b) =>  parseFloat(b.priceUsd) - parseFloat(a.priceUsd)  )

    // console.log("soert",soert)
  const handle_getdata = async () => {
    try {
      let res = await axios("https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae");

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

<h1 className='heading'> <b>Pairs </b> </h1>


      {
        tokendata?.slice(0,2).map((el,index) =>{
          return <div key={index} className='card'>
              <div className='child-card'>
              <h1 className='title' > <b>  Basic Info </b> </h1>

                <p> <b>Pair created at</b> {el.baseToken.name}</p>
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
<h1 className='heading'> <b>Pair Search Results </b> </h1>

{
  soert?.slice(0,11).map((el,index) =>{
    return <div key={index} className='card'>
        <div className='child-card'>
        <h1 className='title' > <b>  Basic Info </b> </h1>

          <p> <b>Pair created at</b> {el.baseToken.name}</p>
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




</div>

}
    </div>

  )
}

export default Pair_inventry
