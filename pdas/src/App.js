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

            
           
           




            <ProfileCard  title="hijjj1" handle="@hijjj1" />

            <img src={AlexaImg} />


            <ProfileCard  title="hijjj2" handle="@hijjj2" />

            <img src={SiriImg} />


            <ProfileCard  title="hijjj3" handle="@hijjj3" />

            <img src={CortanaImg} />
        </div>

    );
}

export default App;