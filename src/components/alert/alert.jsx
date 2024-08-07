import '/src/components/alert/alert.css'
import PropTypes from "prop-types";

export default function Alert({type="dark", color="purple",device="desktop",text="Alert",dismissable=true}){
    return(
        <>
            <div className={`alert alert-${type}-${color} ${dismissable && "alert-dismissible shadow-lg"} fade show ${device==="mobile" && "mobile"}`} role="alert">
                <p>{text}</p> 
                {dismissable &&
                    <button type="button" className={`btn-close ${type==="light" && "btn-close-light"}`} data-bs-dismiss="alert" aria-label="Close"></button>
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