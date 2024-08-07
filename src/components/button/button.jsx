import'./button.css'
import PropTypes from "prop-types";

function Button({title="Button", size="mdm", type="primary", disabled=false,iconRight=null, iconLeft=null, dataToggle=null, dataTarget=null, dataDismiss=null}){
    return(
        <>
        <button className={`btn_ ${size} ${type}`} data-bs-toggle={dataToggle} data-bs-target={dataTarget} data-bs-dismiss={dataDismiss }>
            {iconLeft && 
                <div className={`icon-mask icon-white icon-${size}`} style={{ maskImage: `url(${iconLeft})`, WebkitMaskImage: `url(${iconLeft})` }} />
            }
            {title}
            {iconRight &&
                <div className={`icon-mask icon-white icon-${size}`} style={{ maskImage: `url(${iconRight})`, WebkitMaskImage: `url(${iconRight})` }} />
            }
        </button>
        </>
    );
}

Button.propTypes={
    title: PropTypes.string.isRequired,

    size: PropTypes.oneOf([
        "sm",
        "mdm",
        "lg",
    ]).isRequired,

    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "tertiary",
    ]).isRequired,

    disabled: PropTypes.bool,
    iconLeft: PropTypes.string

    
}

// Button.defaultProps = {
//     title: "Button",
//     type: "primary",
//     size: "mdm",
// }

export default Button;