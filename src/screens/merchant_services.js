import React, {createContext} from 'react';
import { useNavigate } from "react-router-dom";
import PaginatedItems from '../components/table_view';
import {MerchantActions} from '../components/actions';
import TransactionCard from '../components/transaction_card';


import '../styles/merchant_services.scss';

export const MerchantStorage = createContext();

export default function MerchantServices() {
    const [data, setData] = React.useState([["Venkat", "4563245668998", "HDFC12456", <MerchantActions />]]);
    const [cardData, setCardData] = React.useState([]);
    const columns = ["ID", "Merchant Name", "Email", "Phone", "Created At", "Updated At", "Actions"];
    const navigate = useNavigate();
  
    const buttonHandler = (index) => {
        navigate("/addNewVendor", {state:{create: true}})
    }

    React.useEffect(() => {
      fetch("http://localhost:3000/merchants/getAllMerchants", {
          method: "GET",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
      }).then(async (res) => {
          let json = await res.json();
          let responseData = [];
          console.log("json.data", json.data);
          setCardData(json.data);
          json.data.forEach(item => {
            let arr = Object.values(item);
            console.log("arr", arr)
            arr.push(<MerchantActions index={arr[0]} />)
            responseData.push(arr);
          });
          console.log("response data", responseData);
          setData(responseData);
      }).catch(error => console.log(error));
  }, [])


    return (
      <MerchantStorage.Provider value={data}>
        <div>
        <div className='pz-merchant'>
       <PaginatedItems 
            itemsPerPage={3}
            items={data}
            columns={columns}
            buttonName="Add Merchant"
            header="Merchants List"
            buttonDisplay={true}
            onClick={buttonHandler}
        />
        </div>
        <div className='cards'>
          {console.log("card", cardData)}
                {cardData.map((item, i) => {
                    const val = Object.entries(item);
                    return <TransactionCard key={i} data={val} />
                })}
          </div>
      </div>
      </MerchantStorage.Provider>
    )

}