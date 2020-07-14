import React from 'react';

// Function to create login form
function Form() {
   
       // Label holds checkbox
    return(
        <div className="form-holder">
            <form>
                <input className="form-email" type="text" placeholder="Email Adress" ></input>
                <br />  

                 <label className="form-label">
                     <input type="checkbox" className="remember-me"></input> 

                     <span className="checkBox">
                     </span>
                     Remember this device
                </label>
                <br />
                
                <input type="submit" value="Sign In" className="form-submit"></input>
            </form>

        </div>

    );
}

export default Form;