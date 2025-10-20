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