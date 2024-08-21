import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";

interface InputProps {
  type: "text" | "password" | "email" | "dropdown" | "phone";
  label: string;
  placeholder: string;
  icon?: string;
  disable?: boolean;
  required?: boolean;
  info?: boolean;
  state: boolean;
  
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      label = "Label",
      placeholder = "Masukkan label",
      icon = "",
      disable = false,
      required = false,
      info = false,
      state=true,
      ...props
    },
    ref,
    
  ) => {
    const [enteredText, setEnteredText] = useState("");
    const [isValid, setValid] = useState(true)
    const [isEmpty, setEmpty] = useState(false)
    const [isDigitValid, setDigitValid] = useState(true)
    const [errorMassage, setErrorMassage] = useState<string | null>(null);
    const [isShow, setShow] = useState(true);

    function clearInput() {
      setEnteredText("");
      setErrorMassage(label + " harus diisi");
      enteredText === "" ? console.error("Jangan kosong") : console.log(enteredText);
    }

    function handleShowPassword() {
      setShow(!isShow);
      return isShow ? "/src/icons/eye=true.svg" : "/src/icons/eye=false.svg";
    }
   

    function setInputState(value:string){
     
        if(value.length != 0 && errorMassage){
            state=false
        }else if(value.length != 0 && !errorMassage){
            state=true
        }else if(value.length == 0 && !errorMassage){
            state=false
        }else if(value.length == 0 && errorMassage){
            state=false
        }
        console.log(state)
        if(type === "phone"){
            let formattedValue = setNumber(value)
            checkNumber(formattedValue)
            value = formattedValue
        }else if(type === "email"){
            checkValid(value)
        }
        checkEmpty(value)
        setEnteredText(value);
        
    }

    function checkEmpty(value: string) {
      if (value.length == 0 ) {
        setErrorMassage(label+" harus diisi")
       
      } else if(type === "text") {
        // console.log(state)
        setErrorMassage(null)
      }
      
    }

    function checkValid(value: string) {
      var validRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (value.match(validRegex)) {
        setErrorMassage(null)
      } else {
        setErrorMassage(label+" tidak valid")
      }
    }

    function setNumber(value :string){
        value = value.replace(/[^0-9]/g, ""); //no alphabet or symbol

        value = value.replace(/\s+/g, ""); //erase space

        let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value; //dividing string
        return formattedValue
    }

    function checkNumber(value: string) {
      if (value.length < 12) {
        setErrorMassage("Nomor telepon minimal 10 digit")    
      } else {
        setErrorMassage(null)    
      }

      if (value.length === 0) {
        checkEmpty(value);
      }
    }

    // function setState(value : string){
    //     if(value.length === 0){
    //         return true
    //     }else{
    //         return false
    //     }
    // }

    const chooseInputType = (type: string) => {
      if (type === "email") {
        return (
          <>
            <input
              className={`focus:outline-none flex flex-grow w-full`}
              disabled={disable}
              type="email"
              placeholder={placeholder}
              required={required}
              value={enteredText}
              onChange={(e) => setInputState(e.target.value)}
              ref={ref}
    
              {...props}
            />
            {errorMassage && (
              <img
                className="w-5 h-5"
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"
              />
            )}
          </>
        );
      } else if (type === "text") {
        return (
          <>
            <input
              className={`focus:outline-none flex flex-grow w-full`}
              disabled={disable}
              type="text"
              placeholder={placeholder}
              required={required}
              value={enteredText}
              onChange={(e) => setInputState(e.target.value)}
              ref={ref}
              {...props}
            />
            {errorMassage && (
              <img
                className="w-5 h-5"
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"
              />
            )}
            <img
              className="opacity-50 hover:opacity-100"
              src="/src/icons/close_fill.svg"
              alt=""
              onClick={clearInput}
            />
          </>
        );
      } else if (type === "password") {
        return (
          <>
            <input
              className={`focus:outline-none flex flex-grow w-full`}
              disabled={disable}
              type={isShow ? "password" : "text"}
              placeholder={placeholder}
              required={required}
              value={enteredText}
              onChange={(e) => setInputState(e.target.value)}
              ref={ref}
              {...props}
            />
            {errorMassage && (
              <img
                className="w-5 h-5"
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"
              />
            )}
            <img
              onClick={handleShowPassword}
              alt=""
              src={isShow ? "/src/icons/eye=true.svg" : "/src/icons/eye=false.svg"}
            />
          </>
        );
      } else if (type === "dropdown") {
        return (
          <>
            <input
              className={`focus:outline-none flex flex-grow w-full`}
              disabled={disable}
              type="text"
              placeholder={placeholder}
              required={required}
              value={enteredText}
              onChange={(e) => setInputState(e.target.value)}
              ref={ref}
              {...props}
            />
          </>
        );
      } else if (type === "phone") {
        return (
          <>
            <input
              className={`focus:outline-none flex flex-grow w-full`}
              disabled={disable}
              type="tel"
              placeholder={placeholder}
              required={required}
              value={enteredText}
              onChange={(e) => setInputState(e.target.value)}
              maxLength={17}
              ref={ref}
              {...props}
            />
            {errorMassage && (
              <img
                className="w-5 h-5"
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ae1e22'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ae1e22' stroke='none'/%3E%3C/svg%3E"
              />
            )}
          </>
        );
      }
    };

    return (
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 ">
          <label className="text-16-omicron font-extrabold">{label}</label>
          {info && <img src="src/icons/info.svg" alt="" />}
        </div>
        <div
          className={`flex flex-row border border-neutral-20 has-[:focus]:border has-[:focus]:border-lime-50 gap-2 p-3 items-center rounded-md text-16-omicron ${
            (errorMassage) && "has-[:focus]:border-red-50 border-red-50 "
          }`}
        >
          <img src={icon} alt="" />
          {chooseInputType(type)}
        </div>

        {
            (!state && !errorMassage) &&
            <div className={`text-12-omega text-red-50 pt-2 ${enteredText.length !== 0 && "hidden"}`}>{label+" harus diisi"}</div>
        }
        {
            (!state && errorMassage) &&
            <div className="text-12-omega text-red-50 pt-2">{errorMassage}</div>
        }
        {
            (state && errorMassage) &&
            <div className="text-12-omega text-red-50 pt-2">{errorMassage}</div>
        }
        
      </div>
    );
  }
);

// Input.propTypes = {
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   icon: PropTypes.string,
//   disable: PropTypes.bool,
//   required: PropTypes.bool,
//   info: PropTypes.bool,
//   type: PropTypes.oneOf(["text", "password", "email", "dropdown", "phone"])
//     .isRequired,
// };

export default Input;
