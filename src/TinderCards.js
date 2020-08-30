import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';
import database from './firebase';


function TinderCards() {
    const [people, setPeople] = useState([]);
    // {
    //     name: "steve jobs",
    //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHROKbvIh12lArvlzqY39FiytD4YssFi9xXQ&usqp=CAU"
    // },
    // {
    //     name: "mark zuckerberg",
    //     url: "https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2"
    // }


    // Piece of code which runs based on a condition
    useEffect(() => {
        // This is where the code runs

       const unsubscribe =  database
            .collection('people')
            .onSnapshot(snapshot =>
                setPeople(snapshot.docs.map(doc => doc.data()))
            );

            return () => {
                //this is cleanup...
                unsubscribe();
            }
        // this code will run ONCE when component loads, 
        // and never again if you add [] at the end instead of [people].
    }, []);



    //BAD (create array, and push people to it)
    //const people = [];
    //people.push('sonny', 'qazi');

    //GOOD (push to an array in REACT)
    //setPeople([...people, 'sonny','qazi']);

    return (
        <div>
            <div className="tinderCards__cardContainer"> {
                people.map(person => (
                    <TinderCard className="swipe"
                        // always assign keys to allow react efficiently re-render image
                        key={person.name}
                        preventSwipe={
                            ['up', 'down']
                        } >
                        <div style={
                            { backgroundImage: `url(${person.url})` }
                        }
                            className="card" >
                            <h3> {person.name} </h3>
                        </div>
                    </TinderCard>
                ))
            }
            </div>
        </div>
    );
}

export default TinderCards