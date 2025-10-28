import { DesktopMenuItem } from "./menuitem.tsx";

export default function Menu()
{
    return (
      <nav className="menu">
        <div id="divMenuItems">
          <DesktopMenuItem
            href="/#home"
            text="sameer"
          />
          <span style={{color: "white"}}>|</span>
          <DesktopMenuItem
            href="/#about"
            text="about"
          />
          <span style={{color: "white"}}>|</span>
          <DesktopMenuItem
            href="/#contact"
            text="contact"
          />
        </div>
      </nav>
    ); 
}