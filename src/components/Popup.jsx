import React,{useEffect,useRef } from "react"
import "./styles/popup.css"

export default function Popup(){

    const popupRef = useRef(null);
    
    async function showAlertPopup() {
        let alertPopup = popupRef.current;

        alertPopup.classList.add("show");

        await new Promise((resolve) => {
            document.getElementById("closePopup").addEventListener("click", function() {
                // Hide the popup by removing the "show" class after the click
                alertPopup.classList.remove("show");

                // After the transition effect ends (0.5s), fully hide the popup
                setTimeout(() => {
                    alertPopup.style.display = "none";
                    resolve(); // Continue the async function
                }, 500); // Matches the CSS transition duration
            });
        });
    }

    useEffect(()=>{
        setTimeout(() => {
            popupRef.current.style.display = "block"; 
            showAlertPopup(); 
        }, 5000);
    },[]);
    


    return (
        <div ref={popupRef} className ="alert-popup">
            <p>Please accept the cookies to enhance your experience.</p>
            <button id="closePopup" className ="close-button">Accept</button>
        </div>
    )
}