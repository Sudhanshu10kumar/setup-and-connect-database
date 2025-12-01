
import { useState } from "react"
import "./Buttons.css"
import Status from "./status"
import ProfileCard from "./profileCard";

const Buttons = () => {
    const [content, setContent] = useState(null);

  const showStatus = () => {
    setContent(<Status />);
  };

  const showProfile = () => {
    setContent(<ProfileCard/>);
  };

  return (
    <div>
      <button onClick={showStatus} className='button'>Cleack me For Status</button>
      <button onClick={showProfile}  className='button'>Click me for Profile</button>
      <div >
        {content}
      </div>
    </div>
    
  )
}

export default Buttons;
