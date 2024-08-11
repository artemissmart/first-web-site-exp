import CardImage from "./assets/camera.jpg"


function Card() {
    return (<div className="card" >
        <img className="cardImage" src={CardImage} alt="image"></img>
        <h1 className="cardText">This is a camera picture</h1>

    </div>



    );


}

export default Card