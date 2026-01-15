//import React from 'react';

interface DownloadButtonProps {
    file: any;
    buttonText: string;
}

export function DownloadButton({file, buttonText}: DownloadButtonProps)
{
    return (
        <button className={"leftPad roundedCorners"}><a href={file} download>{buttonText}</a></button>
    );
}

/* export default class DownloadButton extends React.Component<DownloadButtonProps>
{
    render()
    {
        return (
            <button type="button" onClick={async () => await this.getResource(this.props.file)}>{this.props.buttonText}</button>
        );
    }
    
    getResource = async (resource: any) => {
        const response = await fetch(resource);
        await response.json();
    }
} */