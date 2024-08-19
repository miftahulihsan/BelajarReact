import { useState } from 'react'
import Button from './component/button/button.tsx'
import Input from './component/input/input.tsx'
import Alert from './component/alert/alert.tsx'
import Modal from './component/modal/modal.tsx'
import Accordion from './component/accordion/accordion.tsx'
import { AccordionPayment } from './component/accordion/accordion.tsx'

function App() {

  const [isModal_1Visible, setIsModal_1Visible] = useState(false);

  const [isModal_2Visible, setIsModal_2Visible] = useState(false);

    const handleModal_1 = () => {
        isModal_1Visible? setIsModal_1Visible(false): setIsModal_1Visible(true);
    };

    const handleModal_2 = () => {
      isModal_2Visible? setIsModal_2Visible(false): setIsModal_2Visible(true);
  };

  function openLink(){
    window.open("https://www.pegadaian.co.id/")
};

const accordionData = [
  { title: "What is React?", text: "React is a JavaScript library for building user interfaces." },
  { title: "Why use React?", text: "React allows developers to build web applications that can update and render efficiently in response to data changes." },
  { title: "How does React work?", text: "React creates a virtual DOM in memory, which represents the UI components. When the state of an object changes, React updates only the objects that changed in the real DOM." },
];

const arrayPayment = [
  {
    image:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-bni.png",
    title:"BNI Virtual Account"
  },
  {
    image:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-bri.png",
    title:"BRI Virtual Account"
  },
  {
    image:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-mandiri.png",
    title:"Mandiri Virtual Account"
  },
  {
    image:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-btn.png",
    title:"BTN Virtual Account"
  },
  {
    image:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-permata.png",
    title: "Permata Virtual Account"
  },
  {
    image:"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-bank-maybank.png",
    title:"Maybank Virtual Account"
  }
]
   

  return (
    <> 
    <div className="w-1/2 px-6 py-6 flex flex-col gap-4">
      <Button  title='Lihat Selengkapnya' size='lg' type='secondary' iconLeft="/src/icons/filled=true.svg" iconRight="/src/icons/filled=true.svg" disabled={false}></Button>
      <Alert type='dark' color='red' text='Ini adalah alert' dismissable={true}></Alert>
      <Input label='Nama' placeholder='Masukkan Nama' icon='/src/icons/filled=true.svg' info={true} errorMassage='Tidak boleh kosong'></Input>
      <Button title="Open Modal_1" onClick={handleModal_1} ></Button>
      <Button title="Open Modal_2" onClick={handleModal_2} ></Button>
      <Accordion items={accordionData}></Accordion>
      <AccordionPayment paymentMethodList={arrayPayment}></AccordionPayment>
    </div>
    {isModal_1Visible && <Modal onClose={handleModal_1} content={<img src="https://reactjs.org/logo-og.png" alt="React Logo" />} dismissButtonText='Mengerti' header='Header Modal' type='basic'/>}
    {isModal_2Visible && <Modal onClose={handleModal_2} dismissButtonText='Batalkan' redirectButtonText="Ubah" redirectButtonLink={openLink} header='Header Modal' type='open' content=
    {
      <> 
        <h2 className='font-extrabold'>Ini Modal</h2>
        <p>lorem ipsum loreim ipsumlorem ipsum loreim ipsumlorem ipsum loreim ipsum</p>
      </>
    }
    />}
    </>
  )
}

export default App
