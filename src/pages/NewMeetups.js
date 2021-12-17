import { useHistory } from 'react-router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const history = useHistory();
    function onAddMeetupHandler(meetupData) {
        fetch('https://react-crash-course-tutorial-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            
                }
            }
        ).then(() => {
            history.replace('/');
        }); 
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;