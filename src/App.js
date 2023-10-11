import './App.css';
import layout_img from './img/layout -1.svg'
import countryFlag from './img/kuwait flag 1.svg'
import Background from './img/Background 1.svg'
import side from './img/Picture2 1.svg'
import btn from './img/Rectangle 2.svg'

function App() {
  var gradient = 'linear-gradient(91deg, #4D1E4C -0.89%, #902B78 68.07%, #A4276C 102.55%)';
  var color = '#FF365D';
  
  return (
    <div style={{padding: '2rem', background: 'rgb(232 232 232)'}}>

      <table style={{width: '200px', height: '520px', boxSizing: 'border-box', padding: '36px 16px', overflow: 'hidden', background: 'white'}}>
        <tbody style={{display: 'block'}}>
          <tr style={{display: 'block'}}>
            <td style={{display: 'block'}}><img style={{width: '90%', margin: '10px auto 1.5px'}} src={layout_img} /></td>
          </tr>
          <tr style={{display: 'block'}}>
            <td style={{display: 'block'}}><button style={{color: 'white', background: gradient, fontSize: '12px', fontWeight: '600', width: '90%',display: 'block', margin: 'auto', borderRadius: '100px', padding: '3px'}}>Service Name</button></td>
          </tr>
          <tr style={{display: 'block'}}>
            <td style={{display: 'block'}}><div style={{fontSize: '7px', fontWeight: '400', border: '1px solid black', borderRadius: '100px', padding: '0 5px', width: '40%', margin: '5px auto', textAlign: 'center'}}>Fills 750 for 1 week</div></td>
          </tr>
          <tr style={{display: 'block'}}>
            <td style={{display: 'block'}}><p style={{fontSize: '7px', fontWeight: '500', textAlign: 'center', marginTop: '9px'}}>Please enter your stc Mobile Number :</p></td>
          </tr>
          <tr style={{display: 'block'}}>
            <td style={{display: 'block', width: '70%',height: '100%', margin: '5px auto', border: '1px solid black', borderRadius: '100px', padding: '0px 8px 4px'}}>
              <div>
                <img style={{display: 'inline', width: '13px'}} src={countryFlag} />
                <span style={{display: 'inline-block', fontSize: '10px', fontWeight: '600', padding: '0 4px 0 2px', borderRight: '1px solid black'}}>+965</span>
                <input style={{display: 'inline', width: '70px', fontSize: '10px', fontWeight: '600', paddingLeft: '7px'}} type="text" value="300-555-0399" />
              </div>
            </td>
          </tr>
          <tr style={{display: 'block'}}>
            <td style={{display: 'block'}}><button style={{background: gradient, color: 'white', fontSize: '14px', fontWeight: '600', display: 'block', width: '90%', margin: '10px auto', borderRadius: '100px', padding: '4px 0'}}>SUBSCRIBE</button></td>
          </tr>
          <tr style={{display: 'block', margin: '8px 12px 7px'}}>
            <td style={{display: 'block'}}><h4 style={{fontSize: '11px', fontWeight: '700', textAlign: 'center'}}>Terms & Conditions</h4></td>
            <td style={{display: 'block'}}><p style={{fontSize: '7px', fontWeight: '500', textAlign: 'center'}}>You will be subscribed to “Service Name”. Your account would be debited with Fills 750 for 1 week(s). Subscription would be automatically renewed until you unsubscribe from the service. To continue, click on the Subscribe button above. Please make sure that your browser is not using any 3rd party blocking technologies and you have a healthy internet connection for swift access to content.</p></td>
          </tr>
          <tr style={{display: 'block', width: '97%', margin: 'auto', boxSizing: 'border-box'}}>
            <td style={{display: 'inline-block', width: '25%'}}><button style={{display: 'block', width: '38px', fontSize: '6px', fontWeight: '500', color: 'white', padding: '2px 0', borderRadius: '100px', margin: 'auto', border: '1px solid black', background: gradient}}>Home</button></td>
            <td style={{display: 'inline-block', width: '25%'}}><button style={{display: 'block', width: '38px', fontSize: '6px', fontWeight: '500', color: 'black', padding: '2px 0', borderRadius: '100px', margin: 'auto', border: '1px solid black'}}>Terms</button></td>
            <td style={{display: 'inline-block', width: '25%'}}><button style={{display: 'block', width: '38px', fontSize: '6px', fontWeight: '500', color: 'black', padding: '2px 0', borderRadius: '100px', margin: 'auto', border: '1px solid black'}}>Manage</button></td>
            <td style={{display: 'inline-block', width: '25%'}}><button style={{display: 'block', width: '38px', fontSize: '6px', fontWeight: '500', color: 'black', padding: '2px 0', borderRadius: '100px', margin: 'auto', border: '1px solid black'}}>Contact</button></td>
          </tr>
          <tr style={{display: 'block'}}>
            <td style={{display: 'block'}}><footer style={{fontSize: '6px', textAlign: 'center', margin: '4px 0'}}>© All rights reserved 2023</footer></td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
