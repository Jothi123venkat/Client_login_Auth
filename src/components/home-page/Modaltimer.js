
import React, { useEffect, useState } from "react";

function Modaltimer() {
  // State variables to manage OTP input, minutes, and seconds
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const[animation,setAnimation]=useState(true)

  useEffect(() => {
    // Function to handle the countdown logic
    
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      // When seconds reach 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are 0
          clearInterval(interval);
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000); // Run this effect every 1000ms (1 second)

    return () => {
      // Cleanup: stop the interval when the component unmounts
      clearInterval(interval);
    };
  }, [seconds]); // Re-run this effect whenever 'seconds' changes

  // Function to resend OTP
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(10);
    setAnimation()
  };

  return (
   <div className="mt-4">
{seconds ===0 ?""
  :    <div className="loader">
  <span></span> </div> }


    <div className="container ">
      <div className="card" style={{border:"none"}}>


        <div className="countdown-text">
          {/* Display countdown timer if seconds or minutes are greater than 0 */}
          
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining:{" "}
              <span style={{ fontWeight: 600 }}>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </p>
          ) : (
            // Display if countdown timer reaches 0
            <p style={{color:"red"}}>Didn't receive OTP?</p>
          )}

          {/* Button to resend OTP */}
         
      <div className="d-flex justify-content-center ">
      {seconds ===0 ?  <button
            // disabled={seconds > 0 || minutes > 0}
            className="starbucks-button"
            
            onClick={resendOTP}
          >
          <span>  Resend OTP</span>
          </button>:"" }
      </div>
        </div>

        {/* Button to submit OTP */}
        {/* <button className="submit-btn">SUBMIT</button> */}
      </div>
    </div>
    
   </div>
  );
}

export default Modaltimer;