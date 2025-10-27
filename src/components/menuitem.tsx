import { HashLink } from 'react-router-hash-link';

interface MenuItemProps
{
    className: string;
    href: string;
    text: string;    
}

function MenuItem({className, href, text}: MenuItemProps)
{
    return (
        <HashLink className={className} smooth to={href}>{text}</HashLink>
    );
}

export function DesktopMenuItem({className="menuItem", href, text}: MenuItemProps)
{
    return (
        <MenuItem 
            className={className} 
            href={href} 
            text={text}
        />
    );
}

export function MobileMenuItem({className="mobileMenuItem", href, text}: MenuItemProps)
{
    return (
        <MenuItem 
            className={className} 
            href={href} 
            text={text}
        />
    );
}