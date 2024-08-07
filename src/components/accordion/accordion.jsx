import PropTypes from "prop-types";
import './accordion.css'
import { useState } from "react";

export default function Accordion({type="default", item=[], itemPayment=[]}){

    if(type=== "payment"){
       return <PaymentAccordion/>
    }else{
        return <DefaultAccordion/>
    }

    function DefaultAccordion(){
        return(
        <>
            <div className="accordion " id="accordionFlushExample">
                {item.length > 0 &&
                    item.map((item,id)=> (
                        <div className="accordion-item" key={id}>
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${id}`} aria-expanded="false" aria-controls={`flush-collapse-${id}`}>
                                {item.title}
                                </button>
                            </h2>
                            <div id={`flush-collapse-${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
                                <div className="accordion-body">{item.content}</div>
                            </div>
                        </div>
                    )) 
                }
            </div>
        </>
        )
    }

    function PaymentAccordion(){
        const [isImgVisible, setImgVisible] = useState(true)
        function handleClick(){
            isImgVisible? setImgVisible(false): setImgVisible(true)
            return isImgVisible
        }
        return(
        <>
            <div className="accordion " id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button onClick={handleClick} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse`} aria-expanded="false" aria-controls={`flush-collapse`}>
                                Pilih Varian Pembayaran
                                </button>
                            </h2>
                            <div className={`accordion-collapse ${isImgVisible? "d-inline": "d-none"}`}>
                                    <div className="py-3 px-3 border-top overflow-auto " style={{whiteSpace:"nowrap"}}>
                                        {
                                            itemPayment &&
                                                itemPayment.map((item,id) => (
                                                    <img key={id} className="payment-img" src={item.img} alt="" />
                                                ))
                                        }
                                    </div>

                
                    
                            </div>
                            <div id={`flush-collapse`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
                                <div className="accordion-body px-0 py-0">
                                    {
                                        itemPayment &&
                                            itemPayment.map((item,id) => (
                                                <div key={id} className="payment d-flex align-items-center gap-3 border-top px-3 py-3">
                                                    <img className="payment-img" src={item.img} alt="" />
                                                    <span>{item.title}</span>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
            </div>
        </>
        )
    }

    
}

Accordion.propTypes = {
    type:PropTypes.oneOf(["payment","default"]),
    item:PropTypes.arrayOf(
        PropTypes.shape({
            title:PropTypes.string,
            content:PropTypes.string
        })  
    ),
    itemPayment:PropTypes.arrayOf(
        PropTypes.shape({
            title:PropTypes.string,
            img:PropTypes.string
        })
    )
}
