import React from "react";
import './alumnipics.css';

export default function Alumnipics (){
    return(
        <div className="picscontainer">
            <div id="cf" className="cfFadeInOut">
               <img className="top" src="https://images.shiksha.com/mediadata/images/1488192881phpR8rY1q.jpeg" />
               <img className="pic2" src="https://media.istockphoto.com/photos/graduation-day-picture-id1066324992?k=6&m=1066324992&s=612x612&w=0&h=PUdDocvWkqMoIonaWHahqNP6wL0or9IjAZuZimthJTA="/>
               <img className="pic3" src="https://questionpapershub.com/wp-content/uploads/2021/02/IIT-Indore-fellowship-2021-600x400.jpg "/>
               <img className="pic4" src="https://media.gettyimages.com/photos/pursuing-a-bright-future-picture-id1277607737?k=6&m=1277607737&s=612x612&w=0&h=dO2G8p1pGtXTwfREE7Wy_QHigoLONtHK-F0D_S61V94="/>
            </div>
        </div>
    );
}