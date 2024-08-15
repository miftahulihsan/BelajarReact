import PropTypes from "prop-types";
import { useState } from "react";
import './alert.css'

export default function Alert({type="dark", color="green",device="desktop",text="Alert",dismissable=true}){

    const base="flex flex-row rounded-md p-3 bg-no-repeat bg-right-top"
    // light alert
    const light_green="light bg-lime-10 bg-[url('/src/assets/graphic/alert/aksen_green.svg')] "
    const light_blue="light bg-blue-10 bg-[url('/src/assets/graphic/alert/aksen_blue.svg')]"
    const light_orange="light bg-orange-10 bg-[url('/src/assets/graphic/alert/aksen_orange.svg')]"
    const light_red="light bg-red-10 bg-[url('/src/assets/graphic/alert/aksen_red.svg')]"

    // dark alert
    const dark_green="dark bg-lime-50"
    const dark_blue="dark bg-blue-50"
    const dark_orange="dark bg-orange-50"
    const dark_red="dark bg-red-50"

    function getVariant(){
        if(type === "dark"){
            if(color === "green"){
                return dark_green
            }else if(color === "blue"){
                return dark_blue
            }else if(color === "orange"){
                return dark_orange
            }else if(color === "red"){
                return dark_red
            }
        }else if(type === "light"){
            if(color === "green"){
                return light_green
            }else if(color === "blue"){
                return light_blue
            }else if(color === "orange"){
                return light_orange
            }else if(color === "red"){
                return light_red
            }
        }
    }

    const [visible, setVisibile] = useState(true)
    function handleClose(){
        setVisibile(false)
    }

    return(
        <>
            <div className={`group ${base} ${getVariant()} ${visible? "opacity-100":"transition-close"} transition-opacity duration-200 ease-in-out opacity-100 `} role="alert">
                <p className="group-[.dark]:text-white group-[.light]:text-neutral-80 text-xs text-neutral-80 flex-grow ">{text}</p> 
                {dismissable &&
                    <div onClick={handleClose} className={`close-btn group-[.dark]:bg-white group-[.light]:bg-neutral-80 w-4 h-4 opacity-50 hover:opacity-100 focus:bg-transparent`} style={{ maskImage: `url(/src/icons/close.svg)`, WebkitMaskImage: `url(/src/icons/close.svg)`, maskPosition: `center`, maskSize:`100%`}} />
                }
            </div>      
        </>
    );
}

Alert.propTypes = {
    type: PropTypes.oneOf(["light","dark"]),
    color: PropTypes.oneOf(["red","blue","green","orange"]),
    device: PropTypes.oneOf(["desktop","mobile"]),
    text: PropTypes.string,
    dismissable: PropTypes.bool
}