import PropTypes from "prop-types";
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
        <div className={`flex flex-row outline outline-neutral-20 has-[:focus]:outline has-[:focus]:outline-lime-50 gap-2 py-3 ps-3 pe-4 rounded-md ${isError && "has-[:focus]:outline-red-50 outline-red-50"}`}>
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
                {isError && <img className="w-6 h-6" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"/>}
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