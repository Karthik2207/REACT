import sr from '../img.jfif';
import './style.css';
function React(){
    const element="Office Space";
    const jsxatt=<img src={sr} width="25%" height="25%" alt="Office Space"/>;
    const itemName={Name:"DBMS",Rent:50000, Address:"Chennai"};  
    let colors=[];
    if(itemName.Rent<=60000)
    {
        colors.push("textRed");
    }
    else {
        colors.push("textGreen");
    }    
    return(
        <div className="center">
            <h1>{element}, at Affordable Range</h1>
            {jsxatt}
            <h1>Name: {itemName.Name}</h1>
            <h3 className={colors[0]}>Rent: Rs.{itemName.Rent}</h3>
            <h3>Address:{itemName.Address}</h3>
        </div>);
}
export default React;