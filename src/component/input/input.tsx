import PropTypes, { func } from "prop-types";
import { useState } from "react";

export default function Input({type="text",label="Label", placeholder="Masukkan label", icon="", disable=false, required=false, info=false, ...props}){

    const [enteredText, setEnteredText] = useState(''); 
    const [isError, setError] = useState(false);
    const [errorMassage, setErrorMassage] = useState<string | null>(null);
    const [isShow, setShow] = useState(true)

    function clearInput(){
        setEnteredText('')
        setError(true)
        enteredText===''? console.error("Jangan kosong"):console.log(enteredText);
    }
    
    function handleShowPassword(){
        setShow(!isShow)
        if(isShow){
            return "/src/icons/eye=true.svg"
        }else{
            return "/src/icons/eye=false.svg"
        }
    }

    function checkEmpty(e:string){
        setEnteredText(e)
        if(e.length === 0){
            setError(true)
            setErrorMassage(label +" harus diisi")
            console.log("kosong")
        }else {
            setError(false)
            setErrorMassage(null)
        }
    }

    function checkValid(value : string){
        setEnteredText(value)
        var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (value.match(validRegex)) {
            setError(false)
            setErrorMassage(null)
        
        } else{
            setError(true)
            setErrorMassage(label +" tidak valid")
        } if(value.length===0){
            checkEmpty(value)
        }
    }

    function checkNumber(value: string) {
        value = value.replace(/[^0-9]/g, ''); //no alphabet or symbol
        
        value = value.replace(/\s+/g, ''); //erase space

        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value; //dividing string

        console.log(formattedValue)

        setEnteredText(formattedValue);

        if (value.length < 10) {
            setError(true);
            setErrorMassage("Nomor telepon minimal 10 digit");
        } else {
            setError(false);
            setErrorMassage(null);
        }

        if (!(/^[+-]?\d+(\.\d+)?$/.test(value))) {
            setError(true);
            setErrorMassage("Nomor telepon tidak valid");
        }
        if(value.length===0){
            checkEmpty(value)
        }
    }


    const chooseInputType = (type : string) => {
        if(type ==="email"){
            return <>  
            <input 
                className={`focus:outline-none flex flex-grow w-full`}
                disabled={disable}
                type="email"
                placeholder={placeholder}
                required={required}
                value={enteredText}
                onChange={(e) => checkValid(e.target.value)}
                {...props}
            />
            {isError && <img className="w-5 h-5" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"/>}      
        </>
            
        }if(type ==="text"){
            return <>  
            <input 
                className={`focus:outline-none flex flex-grow w-full`}
                disabled={disable}
                type="text"
                placeholder={placeholder}
                required={required}
                value={enteredText}
                onChange={(e) => checkEmpty(e.target.value)}
                {...props}
            />
            {isError && <img className="w-5 h-5" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"/>}      
            <img className="opacity-50 hover:opacity-100" src="/src/icons/close_fill.svg" alt="" onClick={clearInput}  />
        </>     
        }else if(type ==="password"){
            return <>  
            <input 
                className={`focus:outline-none flex flex-grow w-full`}
                disabled={disable}
                type={isShow? "password" : "text"}
                placeholder={placeholder}
                required={required}
                value={enteredText}
                onChange={(e) => checkEmpty(e.target.value)}
                {...props}
            />
            {isError && <img className="w-5 h-5" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"/>}      
            <img onClick={handleShowPassword} alt="" src={
                isShow? "/src/icons/eye=true.svg" : "/src/icons/eye=false.svg"
            } />
        </>

        }else if(type ==="dropdown"){
            return <>  
            <input 
                className={`focus:outline-none flex flex-grow w-full`}
                disabled={disable}
                type="text"
                placeholder={placeholder}
                required={required}
                value={enteredText}
                onChange={(e) => checkEmpty(e.target.value)}
                {...props}
            />
        </>
        }if(type ==="phone"){
            return <>  
            <input 
                className={`focus:outline-none flex flex-grow w-full`}
                disabled={disable}
                type="tel"
                placeholder={placeholder}
                required={required}
                value={enteredText}
                onChange={(e) => checkNumber(e.target.value)}
                maxLength={17}
                {...props}
            />
            {isError && <img className="w-5 h-5" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"/>}      
            {/* <img className="opacity-50 hover:opacity-100" src="/src/icons/close_fill.svg" alt="" onClick={clearInput}  /> */}
        </>     
        }
    }

    return(
    <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 ">
            <label className="text-16-omicron font-extrabold">{label}</label>
            {info && 
                <img src="src/icons/info.svg" alt="" />
            }
        </div>
        <div className={`flex flex-row border border-neutral-20 has-[:focus]:border has-[:focus]:border-lime-50 gap-2 p-3 items-center rounded-md text-16-omicron ${isError && "has-[:focus]:border-red-50 border-red-50 "}`}>
            <img src={icon} alt=""/>
            {
                chooseInputType(type)
            }
        </div>

        {isError && 
        <div className="text-12-omega text-red-50 pt-2">
           {errorMassage}
        </div>
        }
    
    </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    disable: PropTypes.bool,
    required: PropTypes.bool,
    info: PropTypes.bool,
    type: PropTypes.oneOf(["text", "password","email","dropdown", "phone"]).isRequired
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