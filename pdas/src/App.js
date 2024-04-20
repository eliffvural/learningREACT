import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImg from './images/alexa.png';
import CortanaImg from './images/cortana.png';
import SiriImg from './images/siri.png';


console.log(AlexaImg);
console.log(SiriImg);
console.log(CortanaImg);


function App(){
    return(
        <div>
            <div>personal digital assistans</div>

            
        <div className='container'>
            <section className='section'>
                <div className='columns'>

                <div className='column is-4'>
                <ProfileCard  title="hijjj1" handle="@hijjj1" image={AlexaImg} />

                </div>

                <div className='column is-4'>
                <ProfileCard  title="hijjj2" handle="@hijjj2" image={CortanaImg} />

                    </div>

                    <div className='column is-4'>
                    <ProfileCard  title="hijjj3" handle="@hijjj3" image={SiriImg} />

                    </div>

                </div>
             
            </section>
        </div>


          
        </div>

    );
}

export default App;