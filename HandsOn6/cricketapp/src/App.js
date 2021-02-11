import { EvenPlayers } from './Component/EvenPlayers';
import  IndianPlayers  from './Component/IndianPlayers';
import {ListofPlayers} from './Component/ListofPlayers'
import OddPlayers from './Component/OddPlayers';
import { Scorebelow70 } from './Component/Scorebelow70';
import players from './Component/Players';
import IndianTeam from './Component/IndianTeam';
import ListOfIndianPlayers from './Component/ListOfIndianPlayers';

function App() {
  var flag=false;
    if(flag==true){
      return(
        <div>
          <h1>List Of Players</h1>
          <ListofPlayers players={players}></ListofPlayers>
          <hr/>
          <h1>List of Players having score less than 70</h1>
          <Scorebelow70 players={players}></Scorebelow70>
        </div>
      )
    }
    else{
      return(
        <div>
          <div>
            <h1>Indian Team</h1>
            <h1>Odd Players</h1>
            {OddPlayers(IndianTeam)}
            <hr/>
            <h1>Even Players</h1>
            {EvenPlayers(IndianTeam)}
          </div>
          <hr/>
          <div>
            <h1>List of Indian Players Merged:</h1>
            <ListOfIndianPlayers IndianPlayers={IndianPlayers}/>
          </div>
        </div>
      )
    }  
}

export default App;
