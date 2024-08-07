import { useState } from "react";

function Tab({menu}) {

    const c = menu.forEach(element => {
        <TabDefault namaTab={menu[element]}/>
        console.log(menu[element])
    })

    
    return(
        <div className="tabContainer" style={{display: "flex"}}>
            {c}     
        </div>
    )    
}

function TabDefault({namaTab}){
    return <button className="tabDefault"> {namaTab}</button>
}

function TabFocused({namaTab}){
    return <button className="tabFocused">{namaTab}</button>;
}

export default Tab
