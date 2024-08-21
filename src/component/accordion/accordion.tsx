import { useState } from "react";

interface AccordionProps {
    items: { title: string, text: string }[];
}

export default function Accordion({ items }: AccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    function handleOpen(index: number) {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <>
            {items.map((item, index) => (
                <div key={`accordion-${index}`} className="accordion font-bold border border-neutral-40 transition-transform duration-800 pt-4 px-5 rounded-md">
                    <div 
                        onClick={() => handleOpen(index)} 
                        className={`accordion-header flex flex-row items-center h-auto pb-4 cursor-pointer`}
                    >
                        <div className={`flex flex-grow font-extrabold text-16-omicron ${activeIndex === index ? "text-lime-50" : "text-neutral-60"}`}>
                            {item.title}
                        </div>
                        <img 
                            className={`h-6 w-6 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`} 
                            src="/src/icons/direction=down.svg" 
                            alt="Toggle Icon" 
                        />
                    </div>
                    <div className={`accordion-body overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-96 pb-4" : "max-h-0"}`}>
                        <p className="text-neutral-60 text-16-omicron">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}


export function AccordionPayment({ paymentMethodList }: { paymentMethodList: { title: string; image: string }[] }){
    const [isPaymentOpen, setPaymentOpen] = useState(false)
    const [isPaymentClick, setPaymentClick] = useState<number | null>(null)

    function handlePaymentClick(key:number){
        if(key === isPaymentClick) return setPaymentClick(null)
        setPaymentClick(key)
    }

    function handleOpenPaymentAccordion(){
        setPaymentOpen(!isPaymentOpen)
    }
    return(
        <>
            <div key={`accordion-payment`} className="accordion font-bold border border-neutral-40 transition-transform duration-800 pt-4 rounded-md">
                    <div 
                        onClick={handleOpenPaymentAccordion} 
                        className={`accordion-header flex flex-row items-center h-auto pb-4 px-5 cursor-pointer`}
                    >
                        <div className={`flex flex-grow font-extrabold text-16-omicron ${isPaymentOpen ? "text-lime-50" : "text-neutral-60"}`}>
                            Pilih Varian Pembayaran
                        </div>
                        <img 
                            className={`h-6 w-6 transition-transform duration-300 ${isPaymentOpen ? "rotate-180" : ""}`} 
                            src="/src/icons/direction=down.svg" 
                            alt="Toggle Icon" 
                        />
                    </div>
                    {
                        !isPaymentOpen &&
                            <div className="spoiler">
                                <div key={`payment-img`} className="payment-method border-t border-neutral-20 gap-4 text-neutral-80 px-5 flex flex-row overflow-y-auto py-4">
                                    {
                                        paymentMethodList.map((item,key) => (
                                            <img key={`payment-img-${key}`} className="w-[50px]" src={item.image} alt="" />
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    
                    <div className={`accordion-body overflow-hidden transition-all duration-300 ease-in-out ${isPaymentOpen ? "max-h-96" : "max-h-0"}`}>
                        <div className="payment-list">
                            {
                                paymentMethodList.map((item,key) => (
                                    <div onClick={() => handlePaymentClick(key)} key={`payment-${key}`} className={`payment-method py-4 border-t border-neutral-20 flex flex row items-center gap-4 text-neutral-80 text-16-omicron px-5 ${isPaymentClick === key && "bg-lime-10"}`}>
                                        <img className="w-[50px]" src={item.image} alt="" />
                                        {item.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}
