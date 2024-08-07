import '/src/components/input-field/input-field.css'
import PropTypes from "prop-types";

export default function Input({label="Label", placeholder="Masukkan label", icon="", errorMassage="", disable=false, required=false, info=false }){
    return(
    <>
    <div className="form-group">
        <div className="labelForm col-form-label-sm">
            <label htmlFor="" className=" fw-bold">{label}</label>
            {info && 
                <img src="src/assets/Icons/info.svg" alt="" />
            }
        </div>
        <div className={`form-control-icon ${disable && "disabled"}`}>
             <img src={icon} alt="" />
        </div>
        <input 
            className={`form-control ${icon && "form-control-placeholder-icon"}`}
            disabled={disable}
            type="text"
            placeholder={placeholder}
            required={required}
        />
    </div> 
    {errorMassage && 
        <div className="error-massage">
            {errorMassage}
        </div>
    }
    
    </>
    );
}

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    icon: PropTypes.string,
    errorMassage: PropTypes.string,
    disable: PropTypes.bool,
    required: PropTypes.bool,
    info: PropTypes.bool
};

// Input.defaultProps = {
//     label: "Label",
//     placeholder: "Masukkan label",
//     icon: "src/assets/Icons/filled=false.svg",
//     errorMassage: null,
//     disable: false,
//     required: false,
//     info: false
// };