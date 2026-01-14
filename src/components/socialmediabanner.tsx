import { GitHubIcon, LinkedInIcon } from './icons.tsx';

export default function SocialMediaBanner()
{
    return (
        <div id="socialMediaBannerDiv">
            <a href="https://www.linkedin.com/in/sameer-r-bb788375/" target="_blank" rel="noopener noreferrer" title="My LinkedIn Page">
            <LinkedInIcon/>
            </a>
            &nbsp;
            <a href="https://github.com/samriz" target="_blank" rel="noopener noreferrer" title="My GitHub Page">
            <GitHubIcon/>
            </a>
        </div>
    );
}