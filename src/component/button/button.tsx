// import'./button.css';
import PropTypes from "prop-types";



function Button({
    title="Button" ,
    size="lg",
    type="primary",
    disabled=false,
    iconRight="",
    iconLeft="",
    dataToggle=null,
    dataTarget=null,
    dataDismiss=null,
    ...props
})
 {

    
    const base = "flex flex-row w-full justify-center gap-1 items-center justify-items-center"

    // size
    const sm="sm py-1 px-2.5 rounded text-xs"
    const md="md py-1.5 px-3 rounded-md text-sm"
    const lg="lg py-2 px-4 rounded-md text-base"
    const xl="xl py-3 px-4 rounded-md text-base"

    //variant  
    const primary= "primary bg-lime-50 text-white hover:bg-lime-60 active:bg-lime-80 disabled:bg-neutral-40"
    const secondary="secondary bg-white text-lime-50 outline outline-lime-50 hover:outline-lime-60 hover:text-lime-60 active:outline-lime-80 active:text-lime-80 active:bg-lime-10 disabled:bg-neutral-10 disabled:text-neutral-50 disabled:outline-neutral-40 "
    const tertiary="tertiary bg-white text-lime-50 hover:text-lime-60 active:text-lime-80 active:bg-lime-10 disabled:text-neutral-50"
    const neutral= "neutral bg-white text-neutral-60 outline outline-neutral-40 hover:text-lime-60 active:bg-lime-10 active:text-lime-80 disabled:bg-neutral-10 disabled:text-neutral-50 disabled:outline-neutral-40"

    function getType(){
        if(type==="primary"){
            return primary
        }else if(type === "secondary"){
            return secondary
        }else if(type === "tertiary"){
            return tertiary
        }else if(type === "neutral"){
            return neutral
        }
    }

    function getSize(){
        if(size==="sm"){
            return sm
        }else if(size === "md"){
            return md
        }else if(size === "lg"){
            return lg
        }else if(size === "xl"){
            return xl
        }
    }

    return(
        <>
        <button className={`group ${base} ${getType()} ${getSize()}`} disabled={disabled} {...props}>
            {iconLeft && 
                <div className={`
                    
                    group-[.primary]:bg-white 

                    group-[.secondary]:bg-lime-50 
                    group-[.secondary:hover]:bg-lime-60
                    group-[.secondary:active]:bg-lime-80

                    group-[.tertiary]:bg-lime-50
                    group-[.tertiary:hover]:bg-lime-60
                    group-[.tertiary:active]:bg-lime-80

                    group-[.neutral]:bg-neutral-60 
                    group-[.neutral:hover]:bg-lime-50
                    group-[.neutral:active]:bg-lime-80 
                    
                    group-[.sm]:w-4 group-[.sm]:h-4
                    group-[.md]:w-5 group-[.md]:h-5
                    group-[.xl]:w-6 group-[.xl]:h-6
                    group-[.lg]:w-6 group-[.lg]:h-6
                    
                    `} style={{ maskImage: `url(${iconLeft})`, WebkitMaskImage: `url(${iconLeft})`, maskPosition: `center`, maskSize:`100%`}} />
            }
            {title}
            {iconRight &&
                <div className={` bg-white }`} style={{ maskImage: `url(${iconRight})`, WebkitMaskImage: `url(${iconRight})`, maskPosition: `center`, maskSize:`100%`}} />
            }
        </button>
        </>
    );
}

Button.propTypes={
    title: PropTypes.string.isRequired,

    size: PropTypes.oneOf([
        "sm",
        "md",
        "lg",
        "xl"
    ]),

    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "tertiary",
        "neutral"
    ]),

    disabled: PropTypes.bool,
    iconLeft: PropTypes.string,
    iconRight: PropTypes.string
}

// Button.defaultProps = {
//     title: "Button",
//     type: "primary",
//     size: "mdm",
// }

export default Button;