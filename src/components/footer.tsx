import React from "react";
import SocialMediaBanner from "./socialmediabanner.tsx";

export default class Footer extends React.Component
{
    render()
    {
        return (
          <footer>
            {/* <hr/> */}
              <div>
                <SocialMediaBanner/>
                <p>Copyright &copy; <span id="fullyear"></span> Sameer Rizvi</p>
              </div>
          </footer>
        );
    }

    componentDidMount() //executed after component has been added to the DOM
    {
      let yearElement = document.getElementById("fullyear") as HTMLSpanElement;
      yearElement.innerHTML = new Date().getFullYear().toString();
    }
}