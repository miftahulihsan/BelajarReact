import PropTypes, { func } from "prop-types";
import { useState } from "react";

export default function Input({label="Label", placeholder="Masukkan label", icon="", errorMassage="", disable=false, required=false, info=false }){

    const [enteredText, setEnteredText] = useState(''); 
    const [isError, setError] = useState(false);

    function clearInput(){
        setEnteredText('')
        setError(true)
        enteredText===''? console.error("Jangan kosong"):console.log(enteredText);
    }

    function checkEmpty(e:string){
        setEnteredText(e)
        if(e.length === 0){
            setError(true)
            console.log("kosong")
        }else setError(false)
       
    }

    return(
    <>
        <div className="flex flex-row gap-1 ">
            <label className="text-sm font-extrabold">{label}</label>
            {info && 
                <img src="src/icons/info.svg" alt="" />
            }
        </div>
        <div className="flex flex-row outline outline-neutral-20 has-[:focus]:outline has-[:focus]:outline-lime-50 gap-2 py-3 ps-3 pe-4 rounded-md ">
            <img src={icon} alt=""/>
            <input 
                className={`focus:outline-none flex flex-grow`}
                disabled={disable}
                type="text"
                placeholder={placeholder}
                required={required}
                value={enteredText}
                onChange={(e) => checkEmpty(e.target.value)}
            />
                <img className="opacity-50 hover:opacity-100" src="/src/icons/close_fill.svg" alt="" onClick={clearInput}  />
          
            
        </div>
        {isError && 
        <div className="text-xs text-red-50">
            {errorMassage}
        </div>
    }
    
    </>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    errorMassage: PropTypes.string,
    disable: PropTypes.bool,
    required: PropTypes.bool,
    info: PropTypes.bool
};

// Input.defaultProps = {
//     label: "Label",
//     placeholder: "Masukkan label",
//     icon: "src/assets/Icons/filled=false.svg",
//     errorMassage: null,
//     disable: false,
//     required: false,
//     info: false
// };