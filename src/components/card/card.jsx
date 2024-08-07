import Badge from "../badge/badge"
import PropTypes from "prop-types";

export default function Card({variant="default", product="default", content=null, icon="https://reactjs.org/logo-og.png"}){

    if(variant==="product"){
        return <CardProduct/>
    }else if(variant === "content"){
        return <CardContent/>
    }else if(variant === "default"){
        return <CardDefault/>
    }

    function CardContent(){
        return(
            <>
                <div className="card" style={{height: ""}}>
                    <div className="card-body p-4" style={{height: "fit-content", overflow:"auto" }}>
                            <img src={icon} className="card-img-circle icon-right-card position-relative top-0 start-0 p-0 mb-4" alt="..."/>
                            {content}
                    </div>
                </div>
            </>
        )
    }
    
    function CardProduct(){
        return(
            <>
                <div className="card">
                    <img src={icon} className="card-img-circle" alt="..."/>
                    <div className="card-body ">
                            <img src={icon} className="card-img-circle icon-right-card" alt="..."/>
                            {product==="syariah" && <img className="top" src="https://ifatich2.github.io/static/media/bgSyariah.43bcbb7817b5706071a613c1b3d3481a.svg" alt="Logo"></img>}                            
                            <div className="d-flex gap-2 mb-3">
                                {product==="konvensional" && <Badge text='Konvensional' color='green'></Badge>}
                                {product==="syariah" && <Badge text='Syariah' color='blue'></Badge>}
                            </div>
                            <div className="card-title fw-bolder">Kasir</div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </>
        )
    }

    function CardDefault(){
        return(
            <>
            <div className="card">
            <img className="card-img-top" src="https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/banner.png" alt="Logo"/>                         
                    <div className="card-body ">
                            {content}
                    </div>
                </div>
            </>
        )
    }
}

Card.propTypes = {
    variant:PropTypes.oneOf(["product","content","default"]),
    product:PropTypes.oneOf(["syariah","konvensional"]),
    content:PropTypes.node,
    icon:PropTypes.string
}