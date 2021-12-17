import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
 
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])
  
  useEffect(() => {
    
  }

  )

  fetch(
    'https://react-crash-course-tutorial-default-rtdb.firebaseio.com/meetups.json'
  )
  .then(response => {
    return response.json();
  })
  .then(data => {
    setIsLoading(false);
    setLoadedMeetups(data);
    
  });

  if (isLoading) {
    return (
      <section>
        <p>
          Loading...
        </p>
      </section>
    )
  }
  

  return (
    <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
  
  export default AllMeetupsPage;