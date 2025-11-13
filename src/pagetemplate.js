export function Intro(props)
{
    return (
        <div id={props.header_id} className="intro jumbotron">{props.content}</div>
    );
}

export default function PageTemplate(props)
{
    return (     
        <div className="allButFooter">
            <Intro header_id={props.intro_id} content={props.intro_content}/>
            <main id={props.main_id} className="contents">{props.main_content}</main>
        </div>
    );
}