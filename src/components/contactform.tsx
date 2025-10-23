import React from 'react';
import jQueryConfirm from "./modal";
import {FormInput} from "./forminputs";
import {EmailRegex} from "../constants/regex";

interface ContactFormState {
    nameInput: any;
    emailInput: any;
    messageInput: any;
}

export default class ContactForm extends React.Component<ContactFormState>
{  
    state: ContactFormState = {
        nameInput: null, 
        emailInput:  null, 
        messageInput:  null
    };

    render()
    {
        return (
        <form id={"contactForm"} name={"contact"} onSubmit={this.formSubmit}>
            <table id={"contactTable"}>                
                <tr>
                    <td>
                        <FormInput type="text" id="contactName" name="name" placeholder="Name" minLength={2} maxLength={100}/>
                    </td>                                       
                </tr>
                <tr>
                    <td>
                        <FormInput type="email" id="contactEmail" name="email" placeholder="Email" minLength={2} maxLength={50}/>
                    </td> 
                </tr>
                <tr id={"trPhone"}>
                    <td>
                        <input type="tel" id="contactPhone" name="phone" placeholder="Phone" className="form-control"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormInput type="textarea" id="contactMessage" name="message" placeholder="Message" className="form-control" rows={5} cols={50} minLength={2} maxLength={1000}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="submit" className="btn btn-outline-secondary">Send</button>
                    </td>
                </tr>                             
            </table>       
            <input type="hidden" name="form-name" value="contact"/>
        </form>);
    }

    componentDidMount()
    {
        const contactName = document.getElementById("contactName") as HTMLInputElement;
        contactName.required = true;

        const contactEmail = document.getElementById("contactEmail") as HTMLInputElement;
        contactEmail.required = true;

        const contactMessage = document.getElementById("contactMessage") as HTMLInputElement;
        contactMessage.required = true;
        
        document.getElementById("trPhone")!.hidden = true;
    }

    formSubmit = async (e: React.FormEvent) => 
    {
        e.preventDefault();
        let name = document.getElementById("contactName") as HTMLInputElement;
        let email = document.getElementById("contactEmail") as HTMLInputElement;
        let message = document.getElementById("contactMessage") as HTMLInputElement;

        //this.setState({nameInput: name, emailInput: email, messageInput: message});
        //await this.setStateAndSubmitForm(name, email, message);

        //use callback in setState() to wait for state to update before proceeding
        this.setState({nameInput: name, emailInput: email, messageInput: message}, async () => {
            await this.setStateAndSubmitForm(name, email, message);
        });     
    }

    setStateAndSubmitForm = async (name: HTMLInputElement, email: HTMLInputElement, message: HTMLInputElement) => {
        /* console.log("State name: " + this.state.nameInput.value);
        console.log("State email: " + this.state.emailInput.value);
        console.log("State message: " + this.state.messageInput.value); */

        let contactPhone = document.getElementById("contactPhone") as HTMLInputElement;
        if(contactPhone.value.length === 0)
        {
            if(this.isValid(this.state.nameInput, 100) && this.isValidEmail(this.state.emailInput.value) && this.isValid(this.state.messageInput, 1000))
            {
                let form = document.getElementById("contactForm") as HTMLFormElement;
                let formData = new FormData(form);

                /* for (const value of formData.values()) 
                {
                    console.log(value);
                } */
                    
                let response = await fetch("/", {
                    method: "POST",
                    body: formData
                });

                let modal = new jQueryConfirm();
                if(response.ok) 
                {
                    name.value = "";
                    email.value = "";
                    message.value = "";
                    this.setState({nameInput: "", emailInput: "", messageInput: ""});

                    modal.setModalContent("Message sent!");
                }
                else modal.setModalContent("Message could not be sent.");
                
                modal.createModal();
                modal.getModal().open();
            }
        }
    }

    isValid = (elem: HTMLInputElement, maxLength: number) : boolean =>
    {
        let validName = false;
        if(elem.value.length > 2 || elem.value.length < maxLength) validName = true;

        return validName;
    }

    isValidEmail = (email: string): boolean =>
    {            
        let validEmail = false;
        
        if(typeof email === "string" && email.length > 0)
        {
            validEmail = EmailRegex.test(email);
            console.log("Valid email: " + validEmail);
        }

        let span = document.getElementById("spanInvalidEmail");      
        span!.hidden = validEmail;

        return validEmail;
    }
}