import './App.css';
import layout_img from './img/layout -1.svg'
import countryFlag from './img/kuwait flag 1.svg'

function App() {
  var gradient = 'linear-gradient(91deg, #4D1E4C -0.89%, #902B78 68.07%, #A4276C 102.55%)';

  return (
    <div style={{padding: '2rem', background: 'rgb(248 242 242)'}}>
      <div className="bg-white p-3 m-auto" style={{width: '430px'}}>
        <img src={layout_img} className='m-auto pt-4'/>
        <button className='text-white text-2xl font-semibold w-11/12 py-1.5 px-4 mt-1 block m-auto rounded-full' style={{background: gradient}}>Service Name</button>
        <div className='text-xs font-semibold border border-solid border-black rounded-xl px-4 block w-fit m-auto my-4'>Fills 750 for 1 week</div>
        <p className='text-sm font-semibold text-center mt-8 mb-3'>Please enter your stc Mobile Number :</p>
        <div className="flex justify-center justify-items-center px-5 py-2.5 border border-solid border-black rounded-full m-auto w-fit">
          <div className="flex justify-center justify-items-center">
            <img src={countryFlag} />
            <span className='text-xl font-bold pl-1 pr-2 border-r border-solid border-black'>+965</span>
          </div>
          <input className='w-36 pl-3 text-xl font-bold center' type="text" value="300-555-0399" />
        </div>
        <button className='text-white text-2xl font-bold w-11/12 py-3 px-4 my-9 block m-auto rounded-full' style={{background: gradient}}>SUBSCRIBE</button>
        <div>
          <h4 className='text-xl py-2 font-bold text-center'>Terms & Conditions</h4>
          <p className='text-sm px-6 font-semibold text-center '>You will be subscribed to “Service Name”. Your account would be debited with Fills 750 for 1 week(s). Subscription would be automatically renewed until you unsubscribe from the service. To continue, click on the Subscribe button above. Please make sure that your browser is not using any 3rd party blocking technologies and you have a healthy internet connection for swift access to content.</p>
        </div>
        <div className='flex flex-wrap gap-3 justify-around mt-7 mb-2'>
          <button className='px-5 py-1.5 border border-solid border-black rounded-full text-sm font-bold text-white' style={{background: gradient}}>Home</button>
          <button className='px-5 py-1.5 border border-solid border-black rounded-full text-sm font-bold'>Terms</button>
          <button className='px-5 py-1.5 border border-solid border-black rounded-full text-sm font-bold'>Manage</button>
          <button className='px-5 py-1.5 border border-solid border-black rounded-full text-sm font-bold'>Contact</button>
        </div>
        <footer className='text-sm font-semibold text-center'>© All rights reserved 2023</footer>
      </div>
    </div>
  );
}

export default App;
