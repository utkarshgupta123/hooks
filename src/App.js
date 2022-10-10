import {useState} from 'react';
import StateTutorial from './StateTutorial';

function App() {
  // const [fname, handleUpdateFirstName] = useState('');
  // const [users, updateUsers] = useState([]);
  // const lname = useState('12234');
  // console.log('kw101', lname);
  // const lastName = lname[0];
  // const updateLastName = lname[1];

  // const handleOnClick = () => {
  //   const updatedArray = [...users, {fname,lastName}]
  //   updateUsers(updatedArray)

  // }

  return (
   <div>
    {/* <input type={'text'} onChange={(e) => handleUpdateFirstName(e.target.value)}/>
   <button onClick={handleOnClick}> add user</button>
   <p>hello {fname} {lname[0]} </p> */}
   <StateTutorial/>
   </div>

  );
}

export default App;
