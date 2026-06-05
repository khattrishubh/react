/*import Button  from './Button.jsx';

function App() 
{
  return (<Button />);
}

export default App;



import Student from './Student.jsx';

function App() 
{
  return (
  <>
    <Student name="Shubh" age={20} grade="A" isStudent={true} />
  </>);

}

export default App;
*/

function App()
{
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <> Welcome back!</> : <p>Please log in.</p>}
    </div>
  );
}