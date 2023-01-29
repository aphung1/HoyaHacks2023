import React, { useState } from "react";
import "./Swipe.css";
import Header from './Header';
import Card from './Card';
import CancelIcon from '@mui/icons-material/Cancel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Swipe() {
    const people = [{
        url: 'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        name: 'Joseph Smith'
    },
{url: 'https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=',
name: 'Jessica Lee'}, {
    url: 'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=',
    name: 'Skyler Harps'
}, {
    url: 'https://us.123rf.com/450wm/fizkes/fizkes2010/fizkes201001384/fizkes201001384.jpg?ver=6',
    name: 'Sandra Dunn'
}]

    const [person, setPerson] = useState(0)

    const handleIncrement = () => {
        setPerson(person + 1);
    }
    return (
        <div className="App">
            <Header />
            {person >= people.length? <div className="EmptyCard">Uh oh! There are no longer any people 
                that fit your preferences. Stick around, as there will always be 
                new users, or you can adjust your preferences! </div> : 
            <Card person={people[person]} isEmpty={true} />}
            <div className="Footer">
                <CancelIcon onClick={handleIncrement}/>
                <FavoriteBorderIcon onClick={handleIncrement}/>
            </div>
        </div>
    )
}
  
export default Swipe;
