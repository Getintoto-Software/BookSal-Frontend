import React,{useState} from 'react';
import "../App.css"
import Card from '../components/Card';
import Header from '../components/Header';

const Home = ({sidebarToggle,setSideBarToggle}) => {
    const [futsals, setFutsals] = useState([
        {
          id: 1,
          image: "Futsal Image 1",
          name: "Prime",
          location: "Gyaneshwor",
          price: "1200 NPR",
          sides: "5-A-Side",
          phone: "123-456-7890",
        },
        {
          id: 2,
          image: "Futsal Image 2",
          name: "Dhanyentari",
          location: "Chahabil",
          price: "1200 NPR",
          sides: "5-A-Side",
          phone: "987-654-3210",
        },
        {
          id: 3,
          image: "Futsal Image 3",
          name: "Madhyapur",
          location: "Lokanthali",
          price: "2500 NPR",
          sides: "6-A-Side",
          phone: "456-789-1230",
        },
      ]);
    
      // Create an array to hold the Card components
      const cards = [];
      
      // Use a for loop to push Card components into the array
      for (let i = 0; i < futsals.length; i++) {
        cards.push(<Card key={futsals[i].id} futsal={futsals[i]} />);
      }
      
    return(
        
        <div className={` flex flex-col justify-center ${sidebarToggle ? "mb-64" : ""} container mx-auto mt-4`}> 
                {/* Render the array of Card components */}
                <div className="grid grid-rows-1 gap-6 md:grid-rows-2 lg:grid-rows-3">
                    {cards}
                </div>
        </div>
    )
}

export default Home;