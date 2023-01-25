import React, {useContext, createContext} from 'react';
import { useLocation } from "react-router-dom";
import PZInput from "../components/input";
import PZButton from "../components/button";
import { MerchantStorage } from './merchant_services';
import '../styles/add_vendor.scss';

export const VendorDetails = createContext();

export default function AddNewVendor() {
    const [details, setDetails] = React.useState({});
    const navigate = useLocation();
    const index = navigate.state.index;

    React.useEffect(() => {
        fetch(`http://localhost:3000/merchants/getMerchantById/${index}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        }).then(async (res) => {
            let json = await res.json();
            console.log("detail", json);
            setDetails(json.data ? json.data : {});
        }).catch(error => console.log(error));
    }, [])

    return(
        <VendorDetails.Provider value={details}>
            <div className="pz-add-details-container">
                <div className="header">
                    <h5>Add New Merchant</h5>
                </div>
                <div className='body'>
                    <AddVendor />
                    <AddVendorBankDetails />
                </div>
            </div>
        </VendorDetails.Provider>
    )
}

function AddVendor() {
    //const [vendor, setVendor] = React.useState({});
    const vendor = useContext(VendorDetails);
    const navigate = useLocation();
    let disabled = true;
    console.log("vendor", navigate);
    if (navigate.state.edit) {
        disabled = false;
    } else if (navigate.state.create) {
       disabled = false;
    }


    return(
        <div className="pz-add-vendor">
            <div className="container">
                <div className="body">
                    <span>Merchant Details</span>
                    <PZInput 
                        label="Vendor ID" 
                        placeholder="vendor id"
                        onChanged={(e) => vendor.id = e.target.value}
                        disabled={disabled}
                        value={vendor.id ? vendor.id : ''}  
                    />
                    <PZInput 
                        label="Phone Number" 
                        placeholder="phone number"
                        onChanged={(e) => vendor.phoneNumber = e.target.value}
                        disabled={disabled} 
                        value={vendor.phoneNumber ? vendor.phoneNumber : ''}  
                        />   
                    <PZInput 
                        label="Email ID" 
                        placeholder="email id"
                        onChanged={(e) => vendor.email = e.target.value}
                        disabled={disabled}   
                        value={vendor.email ? vendor.email : ''}
                        />
                </div>
            </div>
        </div>
    )
}

function AddVendorBankDetails(props) {
    const vendor = useContext(VendorDetails);
    const merchant = useContext(MerchantStorage);
    const navigate = useLocation();
    let disabled = true;
   
    if (navigate.state.edit) {
        disabled = false;
    } else if (navigate.state.create) {
       disabled = false;
    }
    console.log("disabled", disabled);

    return(
        <div className="pz-add-bank">
            <div className="container">
                <div className="body">
                    <span>Bank Details</span>
                        <PZInput 
                            label="Accont Holder Name" 
                            placeholder="account holder name"
                            onChanged={(e) => vendor["name"] = e.target.value}
                            disabled={false}  
                            />
                    <div className="bank-details">
                        <PZInput 
                            label="Account Number" 
                            placeholder="account number"
                            onChanged={(e) => vendor["accountNumber"] = e.target.value}
                            disabled={disabled}    
                            />
                        <PZInput label="IFSC" placeholder="account number" disabled={disabled} />
                    </div>
                    <span>Or</span>
                    <PZInput label="UIP ID" placeholder="upi id" disabled={disabled} />
                    <div className="verify">
                        <input type={'checkbox'} />
                        <span>Verify Account Details</span>
                    </div>
                    <span className="charges" >Verificatin charges will be applicable</span>
                    <span>Settlements Details</span>
                    <PZInput label="Settlements Cycle" placeholder="settlements" disabled={disabled} />
                    <div className="submit">
                        <PZButton value="Cancel" type="primary" />
                        <PZButton value="Save" type="button" onClick={() => console.log(vendor)} />
                    </div>
                </div>
            </div>
        </div>
    )
}







