import profilePic from "./assets/image.jpeg";
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile Image"></img>
            <h2 className="card-title">Card Title</h2>
            <p className="card-text">This is a card component.</p>
        </div>
    );
}

export default Card