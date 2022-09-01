import React from 'react';
import ReactDOM from 'react-dom';
import stylecode from"./index.css";
import compass from "./compass.png";
import patentpdf1 from "./Patent Certificate.pdf";
class App extends React.Component {
render(){
  return (
    <div>    <img src={compass} className="algn"/>
    <center><h1><b><i> Inventor's Life </i></b></h1></center>

   <div class="middle">
   <h2>List of Patented Inventions.</h2>
   <ol>
    <li><b><a href={patentpdf1} target="_blank" className="colorset"> ARTIFICIAL INTELLIGENCE ENABLED AUTOMATED SYSTEM FOR TARGETED CONTENT ON DISPLAY DEVICES</a>, Application Number: 202041003260</b>
    <p align="justify">The present invention discloses an artificial intelligence powered automated system (8) which broadcasts content based on relevance to a real time targeted audience using scene-understanding, image-descriptive techniques, object detection, and classification techniques. It includes an image grabbing framework (1) which captures live feed and pushes captured data into a control box (3). The control box (3) processes the data received from servers (4) and image grabbing framework (1), selects the most relevant content and sends to display device (2). The blockchain module (5) records information of the displayed content. The visual representation module (6) is used to provide a visually understandable form of data stored in blockchain module (5). The client dashboard (7) displays data as created by visual representation module (6) using data obtained from the blockchain module (5).Ref: Figure 1(a)</p>
    </li>

    <li><b><a href="https://mr-ravin.github.io/inventor" target="_blank" className="colorset"> A PORTABLE DATA STORAGE DEVICE FOR SECURED DATA SYNCHRONIZATION AND ITS METHOD THEREOF</a>, Application Number: 202111056179, Status: Pending</b>
    <p align="justify">The present invention relates to a device and method that facilitates secured data synchronization among plurality of device. The device of the present invention relates to a portable data storage device enabling automatic data synchronization with other external devices. The portable storage device comprises a data storage unit (101) to store data; a data synchronization unit (102) to store and synchronize data among plurality of devices; a port (103) to provide interface between the portable device and the other peripheral/external devices; a connectivity unit (104) to provide networking of devices; a processing unit (105) analyze, process and control the data synchronization; an indicator (106) to display the various processing states of the portable storage device (100); a power unit (107) to supply power to the portable storage device; and an enabler unit (108) to establish secure connection between the portable device (100) and the plurality of external devices.</p>
    </li>



    </ol>
   <br/>
   <h2>List of Copyrighted Inventions.</h2>
   <ol>
    <li><b><i><a href="http://copyright.gov.in/SearchRoc.aspx" target="_blank" className="colorset"> Embrace Language</a>, Diary number: 6/2018-CO/SW</i></b>
    <p align="justify">Embrace is a computer language designed and developed with the aim of making an artificial intelligence system. Embrace Language is independent of both Natural Language and its vocabulary.</p>
    </li>
    <li><b><i><a href="http://copyright.gov.in/SearchRoc.aspx" target="_blank" className="colorset"> Advis 1.0</a>, Diary number: 8747/2019-CO/SW</i></b>
    <p align="justify">Advis 1.0 is an artificial intelligence on edge-devices using live camera feed to analyse the audience along with other details such as weather etc. to then display advertisement on a DOOH Screen or any digital screen from the available pool of advertisements. Other details such as financials associated with the advertisements etc. are also used utilized to show the advertisement in realtime which is more likely to get audience attention and have a better audience to consumer conversion rate. </p>
    </li>
    </ol>
    </div>
    </div>
  );
}
}

export default App;
