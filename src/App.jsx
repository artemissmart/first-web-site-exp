import Student from "./Student.jsx"
import Card from "./Card.jsx"
import ButtonSub from "./Button.jsx"

function App() {
    return (
    <>
    
    <p> bon on y va Hein !!!Plein le culllllll GITHUB LINK AHHHHH voilà la version pour push pull sur  gitHub</p>
    <ButtonSub/>
    <Student name="AliceInWondeland" location="London" age={18} job="laboratory" isStudent={true} />
    <ButtonSub/>
    <Student name="Otto" location="Berlin" age={29} job="Nurse" isStudent={false}/>
    <ButtonSub/>
    <Card/>
    <Card/>
    <p>voilà 2eme version, et je ne sais pas quoi dire :p</p>
    
    </>
    );
}
export default App


