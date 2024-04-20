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
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                    personal digital assistans
                    </p>
                </div>
            </section>
            

            
        <div className='container'>
            <section className='section'>
                <div className='columns'>

                <div className='column is-4'>
                <ProfileCard  
                title="hijjj1" 
                handle="@hijjj1" 
                image={AlexaImg}
                description="description one " />

                </div>

                <div className='column is-4'>
                <ProfileCard  
                title="hijjj2" 
                handle="@hijjj2" 
                image={CortanaImg}
                description="description two" />

                    </div>

                    <div className='column is-4'>
                    <ProfileCard  
                    title="hijjj3" 
                    handle="@hijjj3" 
                    image={SiriImg}
                    description="description three" />

                    </div>

                </div>
             
            </section>
        </div>


          
        </div>

    );
}

export default App;