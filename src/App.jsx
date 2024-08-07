import { useState } from 'react'
import Button from './components/button/button.jsx'
import Input from '/src/components/input-field/input-field.jsx';
import Alert from '/src/components/alert/alert.jsx';
import Badge from './components/badge/badge.jsx';
import Modal from './components/modal/modal.jsx';
import Card from './components/card/card.jsx';
import Accordion from './components/accordion/accordion.jsx';
import './index.css'

function App() {

  const [likes, setLike] = useState(0);
  const menuTab = ["Harga Beli", "Harga Jual"]

  function handleClick(){
    setLike(likes + 1);
  }

  const login= true;

  const accordionArray = [
    {
      title:"First Frist Accordion",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title:"Second Accordion",
      content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title:"Third Accordion",
      content:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]

  const arrayPayment = [
    {
      img:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-bni.png",
      title:"BNI Virtual Account"
    },
    {
      img:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-bri.png",
      title:"BRI Virtual Account"
    },
    {
      img:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-mandiri.png",
      title:"Mandiri Virtual Account"
    },
    {
      img:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-btn.png",
      title:"BTN Virtual Account"
    },
    {
      img:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-permata.png",
      title: "Permata Virtual Account"
    },
    {
      img:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-maybank.png",
      title:"Maybank Virtual Account"
    }
  ]

  return(
    <div className='row gap-2 m-3'>
      <Button
        title="Buka Modal"
        size="mdm"
        type="primary"
        disabled={true}
        iconLeft="/src/assets/Icons/filled=true.svg"
        dataToggle="modal"
        dataTarget="#staticBackdrop"
      />

      <Input label="Nama" placeholder="Masukkan Nama" icon="/src/assets/Icons/filled=true.svg" errorMassage="Kolom nama masih kosong" info={true} required={true} disable={false}></Input>

      <Alert type="light" device="desktop" color="orange" text="Ini adalah Alerts Ini  adalah dalah Alerts Ini adalah dalah Alerts Ini adalah dalah Alerts Ini adalah " dismissable={true}/>

      <Badge text="Status" color="blue" dismissable={true} icon="/src/assets/Icons/filled=true.svg"/>


      <Modal 
        id="modal1"
        title="Modal Open"
        content={
          <div className='gap-1 row-2'>
              <img width="100%" src="https://reactjs.org/logo-og.png" alt="React logo" className="mb-4"/>
              <h3>Modal Title Test</h3>
              Woohoo, you're reading this text in a modal!
          </div>
        }
        textPrimButton="Unduh"
        textSecButton="Tutup">    
      </Modal>
      
      <Modal 
        id="modal2"
        title="Modal Basic"
        content={
          <div className='gap-1 row-2'>
              <h3>Modal Title Test</h3>
              Woohoo, you're reading this text in a modal!
          </div>
        }
        textPrimButton="Unduh"
        textSecButton="Tutup">    
      </Modal>

      <Modal 
        id="modal3"
        title="Modal Form"
        content={
          <form className='gap-3 row'>
              <Input label="Nama" placeholder="Masukkan nama"></Input>
              <Input label="Nama" placeholder="Masukkan nama"></Input>
          </form>
        }
        textPrimButton="Unduh"
        textSecButton="Tutup">    
      </Modal>

      <Button
        title="Buka Modal 1"
        size="mdm"
        type="primary"
        disabled={true}
        iconLeft="/src/assets/Icons/filled=true.svg"
        dataToggle="modal"
        dataTarget="#modal1"
      />

      <Button
        title="Buka Modal 2"
        size="mdm"
        type="primary"
        disabled={true}
        iconLeft="/src/assets/Icons/filled=true.svg"
        dataToggle="modal"
        dataTarget="#modal2"
      />

      <Button
        title="Buka Modal 3"
        size="sm"
        type="primary"
        disabled={true}
        iconLeft="/src/assets/Icons/filled=true.svg"
        dataToggle="modal"
        dataTarget="#modal3"
      />

      <Card 
        variant="product"  
        product='konvensional' 
        icon="/src/assets/Icons/ue93d-sub-menu=pembiayaan, type=cicil-kendaraan, theme=pds--sub-menu=pembiayaan,-type=cicil-kendaraan,-theme=pds.svg"  
      ></Card>
      <Card
        variant='content'
        content={
          <>
            <div className="card-title fw-bolder fs-5">Kasir</div>
            <p className="card-text fs-6">
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </>
        }
        icon='/src/assets/Icons/ue937-sub-menu=pembiayaan, type=haji, theme=pds--sub-menu=pembiayaan,-type=haji,-theme=pds.svg'
      />
      <Card variant="product"  product='syariah' icon="src/assets/Icons/ue937-sub-menu=pembiayaan, type=haji, theme=pds--sub-menu=pembiayaan,-type=haji,-theme=pds.svg"></Card>
      <Card variant="product"  product='konvensional' icon="/src/assets/Icons/ue93d-sub-menu=pembiayaan, type=cicil-kendaraan, theme=pds--sub-menu=pembiayaan,-type=cicil-kendaraan,-theme=pds.svg"></Card>
      <Card variant="product"  product='syariah' icon="src/assets/Icons/ue937-sub-menu=pembiayaan, type=haji, theme=pds--sub-menu=pembiayaan,-type=haji,-theme=pds.svg"></Card>
      

      <div className="card">
        <div className="card-header">
          Card 
        </div>
        <div className="card-body">
        <Card 
            variant="default"
            product="syariah"
            content={
              <>
                <div className="d-flex gap-2 mb-3">
                  <div className="badge badge-orange">Pengumuman Seleksi</div>
                </div>
                <h5 className='card-title fw-bolder'>Management Development Program (MDP) Batch 4</h5>
                <span className='d-flex align-items-center mb-3' >
                  <img src="https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/time_regular.svg" className="me-2" alt="" />
                  <h6 style={{color:"#939597"}}>20 Agustus 2024</h6>
                </span>
                {/* <div className="card-title fw-bolder">Kasir</div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              </>
            } 
        ></Card>
        </div>
      </div>
        
      <Accordion type="payment" itemPayment={arrayPayment}/>
     

    </div>

    


  )
  
}

export default App
