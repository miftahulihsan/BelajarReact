import '/src/components/button/button.css'
import Button from '../button/button'

export default function Modal({id="default  Modal", title="Ini Modal", content=". . .", textPrimButton="Button", textSecButton="Close"}){
    return(
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title h4" id="staticBackdropLabel">{title}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <img src="/src/assets/Icons/close_black.svg" alt="" />
                    </button>
                </div>
                <div className="modal-body">
                    {content}
                </div>
                <div className="modal-footer">
                    <Button title='Batalkan' type='secondary' size='lg' dataDismiss="modal"></Button>
                    <Button title='Unduh' type='primary' size='lg'></Button>
                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{textSecButton}</button>
                    <button type="button" className="btn btn-primary">{textPrimButton}</button> */}
                </div>
                </div>
            </div>
            </div>
        </>
    )
}