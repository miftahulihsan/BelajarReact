import React, { forwardRef, useState } from 'react';

interface DropdownProps {
    items: string[];
    label: string;
    state: boolean;
    [key: string]: any;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
    ({ items, label, state, ...props }, ref) => {
        const [isError, setError] = useState(false);
        // state=true
     
        // console.log(state)
        // console.log(isError)
        
      
        function handleError(value: string) {
            if(value == "0" && !state){
                setError(false)
                state=false
                console.log("masuk 1")
            }else if(value == "0"){
                setError(false)
                state=false
                console.log("masuk 2")
            }
            
            else{
                setError(true)
                state=true
            }
            console.log(state)
            console.log(isError)
            console.log(value)
        }

        return (
            <div className="dropdown flex flex-col gap-1">
                <label className="text-16-omicron font-extrabold">{label}</label>
                <div className={`flex flex-row items-center border border-neutral-20 p-3 rounded-md has-[:focus]:border has-[:focus]:border-lime-50 ${
            !(isError || state) && "has-[:focus]:border-red-50 border-red-50 "
          }`}>
                    <select 
                        ref={ref} 
                        className="flex-grow text-16-omicron outline-none appearance-none" 
                        onChange={e => handleError(e.target.value)} 
                        {...props}
                    >
                        <option {...props} value={0}>Pilih {label}</option>
                        {items.map((item, key) => (
                            <option {...props} key={key+1} value={key+1}>{item}</option>
                        ))}
                    </select>
                    <img className={`h-6 w-6`} src="/src/icons/direction=down.svg" alt="Toggle Icon" />
                </div>
                <div className={`text-12-omega text-neutral-60 pt-2 ${!(isError || state) ?  "text-red-50":"" }`}>
                    {!(isError || state) ? "Pilihan harus diisi":  "Option helper" }
                </div>
            </div>
        );
    }
);

export default Dropdown;
