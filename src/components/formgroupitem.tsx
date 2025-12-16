import type { ReactNode } from 'react';

interface FormGroupItemProps {
    element: ReactNode;
}

export default function FormGroupItem({element}: FormGroupItemProps)
{
    return (
        <div className={"form-group ad-textbox"}>
            {element}
        </div>
    );
}