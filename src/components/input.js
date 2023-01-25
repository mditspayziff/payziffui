import '../styles/input.scss';


export default function PZInput(props) {
    return(
        <div className="pz-input-container">
            <div className="input">
                <input type="text" 
                    placeholder={props.placeholder} 
                    value={props.value} 
                    onChange={props.onChanged} 
                    disabled={props.disabled} />
            </div>
        </div>
    )
}