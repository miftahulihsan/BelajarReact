import { useRef, useState } from 'react'
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

  const textRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLSelectElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const unblockRef = useRef<(() => void) | null>(null);

  const [isTextError, setTextError] = useState(false)
  const [isPasswordError, setPasswordError] = useState(false)
  const [isEmailError, setEmailError] = useState(false)
  const [isDropdownError, setDropdownError] = useState(false)
  const [isPhoneError, setPhoneError] = useState(false)

  const handleSubmitt = () => {
      (textRef.current?.value === "")? setTextError(true): setTextError(false);
      (emailRef.current?.value === "")? setEmailError(true): setEmailError(false);
      (passwordRef.current?.value === "")? setPasswordError(true): setPasswordError(false);
      (dropdownRef.current?.value === "0")? setDropdownError(true): setDropdownError(false);
      (phoneRef.current?.value === "")? setPhoneError(true): setPhoneError(false);
        console.log(dropdownRef.current?.value)
  };

  const handleReset = () => {
    if (textRef.current) textRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (dropdownRef.current) dropdownRef.current.value = "0";
    if (phoneRef.current) phoneRef.current.value = "";
  
    setTextError(false);
    setPasswordError(false);
    setEmailError(false);
    setDropdownError(false);
    setPhoneError(false);
  };

  return (
    <> 
    <div className="containers grid grid-cols-2 auto-rows-auto gap-5 p-5">
      <div className=" px-6 py-6 flex flex-col gap-4 text-24-zeta font-extrabold shadow-md rounded-lg border border-neutral-20">
        Button
        <Button title='Lihat Selengkapnya' size='lg' type='secondary' iconLeft="/src/icons/filled=true.svg" iconRight="/src/icons/filled=true.svg" disabled={false}></Button>
      </div>

      <div className=" px-6 py-6 flex flex-col gap-4 text-24-zeta font-extrabold shadow-md rounded-lg border border-neutral-20">
        Alert
        <Alert type='light' color='red' text='Ini adalah alert' dismissable={true}></Alert>
      </div>

      <div className=" px-6 py-6 flex flex-col col-span-2 gap-4 text-24-zeta  font-extrabold shadow-md rounded-lg border border-neutral-20">
        Form Input
        <form action="" >
          
        </form>
        <div id="form"className="grid grid-cols-2 gap-5" >
      
            <Input state={isTextError? false:true} ref={textRef} type="text" label='Nama' placeholder='Masukkan nama' icon='/src/icons/user.svg' info={true} ></Input>
            <Input  state={isPasswordError? false:true} ref={passwordRef} type="password" label='Password' placeholder='Masukkan password' info={true} ></Input>
            <Input   state={isEmailError ? false:true} ref={emailRef} type="email" label='Email' placeholder='Masukkan email' info={true} ></Input>
            <Input   state={isPhoneError ? false:true} ref={phoneRef} type="phone" label='Telepon' placeholder='Masukkan nomor telepon' info={true} ></Input>
            <Dropdown   state={isDropdownError ? false:true} ref={dropdownRef} label="Departemen" items={departmenList}></Dropdown>
            <div className="button-section col-span-2 flex flex-row gap-4">
              <Button type="submit" varian='secondary' title='Reset' onClick={handleReset} ></Button>
              <Button varian='primary' title='Submit' onClick={handleSubmitt}></Button>
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
