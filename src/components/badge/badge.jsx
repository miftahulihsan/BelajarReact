import './badge.css'
import PropTypes from "prop-types";

export default function Badge({text="Status", color="red", icon=null}){
    return(
        <>
            <div className={`badge badge-${color}`}>
                {icon &&
                    <div className={`icon-mask icon-mdm icon-${color}`} style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }} />
                }
                {text}
            </div>
        </>
    );
}

Badge.propTypes = {
    text:PropTypes.string,
    color:PropTypes.oneOf(["red","blue","green","orange"]),
    icon:PropTypes.string
}

