import PropTypes from "prop-types";

export default function Accordion({item=[]}){
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

Accordion.propTypes = {
    item:PropTypes.arrayOf(
        PropTypes.shape({
            title:PropTypes.string,
            content:PropTypes.string
        })
    )
}
