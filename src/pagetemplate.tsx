import type { ReactNode } from "react";

interface IntroProps
{
    header_id: string;
    content: ReactNode;
}

export function Intro(props: IntroProps)
{
    return (
        <div id={props.header_id} className="intro jumbotron">{props.content}</div>
    );
}

interface PageTemplateProps
{
    intro_id: string;
    intro_content: ReactNode;
    main_id: string;
    main_content: ReactNode;
}

export default function PageTemplate(props: PageTemplateProps)
{
    return (     
        <div className="allButFooter">
            <Intro header_id={props.intro_id} content={props.intro_content}/>
            <main id={props.main_id} className="contents">{props.main_content}</main>
        </div>
    );
}