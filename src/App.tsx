import { useState } from 'react'
import Button from './component/button/button.tsx'
import Input from './component/input/input.tsx'
import Alert from './component/alert/alert.tsx'
import Modal from './component/modal/modal.tsx'
import Accordion from './component/accordion/accordion.tsx'
import { AccordionPayment } from './component/accordion/accordion.tsx'
import Dropdown from './component/dropdown/dropdown.tsx'

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

const departmenList = ["Costomer Experience Innovation", "Partnership Innovation", "Organization Innovation", "Exploratory Innovation"]
   
  function handleSubmit(){
      console.log("submitt")
     let x = document.getElementById("text")
  }
  return (
    <> 
    <div className="containers grid grid-cols-2 auto-rows-auto gap-5 p-5">
      <div className=" px-6 py-6 flex flex-col gap-4 text-24-zeta font-extrabold shadow-md rounded-lg border border-neutral-20">
        Button
        <Button title='Lihat Selengkapnya' size='lg' type='secondary' iconLeft="/src/icons/filled=true.svg" iconRight="/src/icons/filled=true.svg" disabled={false}></Button>
      </div>

      <div className=" px-6 py-6 flex flex-col gap-4 text-24-zeta font-extrabold shadow-md rounded-lg border border-neutral-20">
        Alert
        <Alert type='dark' color='red' text='Ini adalah alert' dismissable={true}></Alert>
      </div>

      <div className=" px-6 py-6 flex flex-col col-span-2 gap-4 text-24-zeta  font-extrabold shadow-md rounded-lg border border-neutral-20">
        Form Input
        <form action="" >

        </form>
        <div id="formm"className="grid grid-cols-2 gap-5">
          <Input id="text" type="text" label='Nama' placeholder='Masukkan nama' icon='/src/icons/user.svg' info={true} ></Input>
          <Input id="password" type="password" label='Password' placeholder='Masukkan password' info={true} ></Input>
          <Input id="email" type="email" label='Email' placeholder='Masukkan email' info={true} ></Input>
          <Input id="phone" type="phone" label='Telepon' placeholder='Masukkan nomor telepon' info={true} ></Input>
          <Dropdown id="dropdwon" label="Departemen" items={departmenList}></Dropdown>
          <div className="button-section col-span-2 flex flex-row gap-4">
            <Button type="submit" varian='secondary' title='Reset' onClick={handleSubmit}></Button>
            <Button type="submit" varian='primary' title='Submit' onClick={handleSubmit}></Button>
          </div>
          
        </div>
        
      </div>

      <div className=" px-6 py-6 flex flex-col gap-4 col-span-2 text-24-zeta  font-extrabold shadow-md rounded-lg border border-neutral-20">
        Accordion
        <Accordion items={accordionData}></Accordion>
        <AccordionPayment paymentMethodList={arrayPayment}></AccordionPayment>
      </div>

      <div className="px-6 py-6 flex flex-col gap-4 h-fit text-24-zeta  font-extrabold shadow-md rounded-lg border border-neutral-20">
        Modal
        <Button title="Open Modal_1" onClick={handleModal_1} ></Button>
        <Button title="Open Modal_2" onClick={handleModal_2} ></Button>

        {isModal_1Visible && <Modal onClose={handleModal_1} content={<img src="https://reactjs.org/logo-og.png" alt="React Logo" />} dismissButtonText='Mengerti' header='Header Modal' type='basic'/>}
        {isModal_2Visible && <Modal onClose={handleModal_2} dismissButtonText='Batalkan' redirectButtonText="Ubah" redirectButtonLink={openLink} header='Header Modal' type='open' content=
        {
          <> 
            <h2 className='font-extrabold'>Ini Modal</h2>
            <p>lorem ipsum loreim ipsumlorem ipsum loreim ipsumlorem ipsum loreim ipsum</p>
          </>
        }
        />}
      </div>
    </div>
   
    
    </>
  )
}

export default App
