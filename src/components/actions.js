import { useNavigate, Link } from "react-router-dom";
import '../styles/actions.scss';

function MerchantActions(props) {
    const navigate = useNavigate();


    const editHandler = () => {
        navigate("/addNewVendor", {state: {edit: true, index: props.index}})
    }

    const viewHandler = () => {
        navigate("/addNewVendor", {state: {edit: false, index: props.index}})
    }

    return(
        <div className="pz-actions">
            <a href="#" onClick={viewHandler}>View</a>
            <a href="#" onClick={editHandler}>Edit</a>
        </div>
    );

}

function TransActions(props) {
    return(
        <div className="pz-actions">
            <a href="#" onClick={props.onViewClick}>View</a>
        </div>
    )
}

export {
    MerchantActions,
    TransActions
}