import { useState, useRef } from 'react';
import { LinkButton, Button } from "../components/button"
import {Github, Linkedin, Mail} from "lucide-react"
import emailjs from '@emailjs/browser';
import { StickerPageDecoration } from '../components/stickerPageDeco';

export const Contact = () => {
    const emailForm = useRef();
    const [showEmailSuccess, setShowEmailSuccess] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm('service_nf9x5bb', 'template_e929lkm', emailForm.current, {
        publicKey: 'rrtIPPEiAeXdRKbLb',
        })
        .then(
            () => {
                setShowEmailSuccess(true);
                setShowForm(false);
            },
            (error) => {
                console.error('Email sending error:', error);
                setShowEmailError(true);
            },
        );
    };

    return (
        <div className="flex-col justify-center p-4">
            <StickerPageDecoration 
                stickerCount={10}
                sizeVariety='medium'
            />
            <h1 className="text-h1 font-title md:text-title text-wetsoil mb-1 sm:mb-2">Contact Me</h1>
            <h2 className="font-body text-body text-wetsoil text-center">
                If you're interested in collaborating or just want to say hi, feel free to reach out!
            </h2>
            <div className="my-8 flex flex-col lg:flex-row justify-center gap-8">
                <div className="flex flex-col items-center gap-2">
                    <Github className="text-wetsoil w-18 h-18"/>
                    <LinkButton size="default" className="" href="https://github.com/jordynniara">
                        Github
                    </LinkButton>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Linkedin className="text-wetsoil w-18 h-18"/>
                    <LinkButton size="default" className="" href="https://www.linkedin.com/in/jordynniara/">
                        Linkedin
                    </LinkButton>
                </div>
            </div>
            <h2 className="flex items-center text-center text-3xl font-accent text-wetsoil/80 gap-2 sm:gap-4 w-full
                before:content-[''] before:flex-1 before:border-b before:border-solid before:border-wetsoil/80
                after:content-[''] after:flex-1 after:border-b after:border-solid after:border-wetsoil/80">
                Send me an email
            </h2>
            {showForm && <form ref={emailForm} onSubmit={sendEmail} className="flex flex-col justify-center text-left gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-h4 font-body">Your Name</label>
                    <input 
                        id="name"
                        name="name"
                        type="text" 
                        className="notebook h-10 py-2 px-4 text-accent" 
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-h4 font-body">Your Email</label>
                    <input 
                        id="email"
                        name="email"
                        type="email" 
                        className="notebook h-10 py-2 px-4text-accent" 
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="subject" className="text-h4 font-body">Subject</label>
                    <input 
                        id="subject"
                        name="subject"
                        type="text" 
                        className="notebook h-10 py-2 px-4 text-accent" 
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="text-h4 font-body">Your Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        className="notebook h-32 py-2 px-4 text-accent" 
                        required
                    />
                </div>
                <div className={`flex ${showEmailError ? 'justify-between' : 'justify-end'}`}>
                    {showEmailError && 
                    <p className="flex mt-4 mr-4 px-2 font-accent text-strawberry bg-wetsoil items-center">
                        Oops, something went wrong. Please try again later.
                    </p>}
                    <Button size="default" variant="inchworm" className="mt-4" type="submit">
                        Send
                    </Button>
                </div>
            </form>}
            {showEmailSuccess && 
            <div className='flex flex-col justify-center items-center'>
                <p className="mt-4 font-body text-wetsoil">
                    Thank you for your email! I'll respond at my earliest convenience.
                </p>
                <Button size="default" variant='sky' className="mt-4" onClick={() => {setShowEmailSuccess(false); setShowForm(true);}}>
                    Send another email
                </Button>
            </div>
            }
        </div>
    )
}
