
import React, { useState ,useEffect} from 'react';
import './App.css'

function App(){


  const [selectedMonth, setSelectedMonth] = useState('march');
  const [product,updateProduct] = useState([]);


  const handleChange = (event) => {
    setSelectedMonth(event.target.value);
  }; 

   useEffect(
    ()=> {
      getProduct()
    },[]
   )

   async function getProduct() {
      let res = await fetch(" https://s3.amazonaws.com/roxiler.com/product_transaction.json")
      let productList =await res.json()
      updateProduct(productList)
    
   }
  


  return(

    <>
    <div>
          {/* table */}
           <div className='btn-flex'>
            <button className="btn1">Search transaction</button>
           
           <div>

          
            <button className='span'> Select Month: </button>
            <label htmlFor="months" ></label>
      <select id="months" name="months" value={selectedMonth} onChange={handleChange}>
        <option value="january" className="options">January</option>
        <option value="february" className="options">February</option>
        <option value="march" className="options">March</option>
        <option value="april" className="options">April</option>
        <option value="may" className="options">May</option>
        <option value="june" className="options">June</option>
        <option value="july" className="options">July</option>
        <option value="august" className="options">August</option>
        <option value="september" className="options">September</option>
        <option value="october" className="options">October</option>
        <option value="november" className="options">November</option>
        <option value="december" className="options">December</option>
      </select>

      </div>

           </div>

{/* table */}
    
     <div>

      {/* <ChartsOverviewDemo/> */}
     </div>


    </div>
    
    </>
  )
}


export default App