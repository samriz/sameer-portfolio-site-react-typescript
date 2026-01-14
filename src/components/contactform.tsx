import React from 'react';
import jQueryConfirm from "./modal.js";
import {FormInput} from "./forminput.tsx";
import {EmailRegex} from "../constants/regex.ts";

interface ContactFormState 
{
    name: string;
    email: string;
    message: string;
}

export default class ContactForm extends React.Component<{}, ContactFormState>
{  
    state: ContactFormState = {
        name: "", 
        email: "", 
        message: ""
    };

    render()
    {
        return (
        <form id={"contactForm"} name={"contact"} onSubmit={this.formSubmit}>
            <table id={"contactTable"}>                
            <tbody>
                <tr>
                    <td>
                        <FormInput type="text" id="contactName" name="name" placeholder="Name" className="form-control" minLength={2} maxLength={100}/>
                    </td>                                       
                </tr>
                <tr>
                    <td>
                        <FormInput type="email" id="contactEmail" name="email" placeholder="Email" className="form-control" minLength={2} maxLength={50}/>
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
            </tbody>                             
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

        let nameElement = document.getElementById("contactName") as HTMLInputElement;
        let emailElement = document.getElementById("contactEmail") as HTMLInputElement;
        let messageElement = document.getElementById("contactMessage") as HTMLInputElement;

        //this.setState({nameInput: name, emailInput: email, messageInput: message});
        //await this.setStateAndSubmitForm(name, email, message);

        //use callback in setState() to wait for state to update before proceeding
        this.setState({name: nameElement.value, email: emailElement.value, message: messageElement.value}, async () => {
            await this.sendForm(nameElement, emailElement, messageElement);
        });     
    }

    sendForm = async (nameElement: HTMLInputElement, emailElement: HTMLInputElement, messageElement: HTMLInputElement) => {
        
        /* console.log("State name: " + this.state.name);
        console.log("State email: " + this.state.email);
        console.log("State message: " + this.state.message); */

        let contactPhone = document.getElementById("contactPhone") as HTMLInputElement;
        if(contactPhone.value.length === 0)
        {
            if(this.isValid(this.state.name, 100) && this.isValidEmail(this.state.email) && this.isValid(this.state.message, 1000))
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

                let confirmObj = new jQueryConfirm();
                if(response.ok) 
                {
                    nameElement.value = "";
                    emailElement.value = "";
                    messageElement.value = "";

                    confirmObj.setModalContent("Message sent!");
                }
                else confirmObj.setModalContent("Message could not be sent.");
                
                confirmObj.createModal();
                confirmObj.getModal().open();
            }
        }
        /* console.log("State name: " + this.state.name);
        console.log("State email: " + this.state.email);
        console.log("State message: " + this.state.message); */
    }

    isValid = (elem: string, maxLength: number) : boolean =>
    {
        let validName = false;

        if(elem.length > 2 || elem.length < maxLength) validName = true;        

        return validName;
    }

    isValidEmail = (email: string): boolean =>
    {            
        let validEmail = false;
        
        if(email.length > 0)
        {
            validEmail = EmailRegex.test(email);
            console.log("Valid email: " + validEmail);
        }

        let span = document.getElementById("spanInvalidEmail") as HTMLSpanElement;      
        span.hidden = validEmail;

        return validEmail;
    }
}