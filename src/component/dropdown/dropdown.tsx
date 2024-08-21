
import Proptypes from 'prop-types'
import { useEffect, useState } from "react";

interface DropdownProp{
    items: string[];
    label: string;
    [key: string]: any;
    
}

export default function Dropdown({items,label,...props} : DropdownProp){
    const [isError,setError] = useState(false)

    function handleError(e:string){
        (e === "0")? setError(true) : setError(false)
    }

    return(
        <>
        <div className="dropdown flex flex-col gap-1">
            <label className="text-16-omicron font-extrabold">Departemen</label>
            <div className="flex flex-row items-center border border-neutral-20 p-3 rounded-md has-[:focus]:border has-[:focus]:border-lime-50">
                <select className="flex-grow text-16-omicron outline-none appearance-none" onChange={e => handleError(e.target.value)} {...props}>
                    <option {...props} value={0} >Pilih {label}</option>
                    {
                        items.map((item,key) => (
                            <option {...props} key={key+1} value={key+1}>{item}</option>
                        ))
                    }
                </select>
                <img className={`h-6 w-6`} src="/src/icons/direction=down.svg" alt="Toggle Icon" />
            </div>
            <div className={`text-12-omega text-neutral-60 pt-2 ${isError && "text-red-50"}`}>{isError? "Pilihan harus diisi": "Option helper"}</div>
            
        </div>
            
        </>
    )
}
