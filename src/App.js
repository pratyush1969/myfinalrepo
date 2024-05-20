import './App.css';
import Certificate from './component/certification/Certificate';
import Course from './component/courses/Course';
import Feature from './component/features/Feature';
import Header from './component/header/Header';
import Hiring from './component/hiring/Hiring';
import Internship from './component/internship/Internship';
import Mainbody from './component/mainbody/Mainbody';
import Navbar from './component/navbar/navbar';
import Working from './component/working/Working';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Mainbody/>
      <Feature/>
      <Course/>
      <Working/>
      <Hiring/>
      <Certificate/>
      <Internship/>
    </div>
  );
}

export default App;
