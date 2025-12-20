import {React, useState} from "react";
import Swal from 'sweetalert2';

function Contact(){
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "230a83f8-0a0a-4f86-a5b8-ff57840e3d73");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
        Swal.fire({
            title: "Message Sent!",
            text: "Can't Wait to Hear From You!",
            color: "#FFFFFF",
            icon: "success",
            background:"#171717",
            confirmButtonColor:"#7c25e0"
        });
        event.target.reset();
    };
    return(
        <section id="contact" className="py-5 lg:py-10 max-w-7xl mx-auto">
            <h1 className="font-bold text-5xl">Contact Me</h1>
            <div className="grid lg:grid-cols-2 gap-10 mt-10">
                <div >
                    <h2 className="font-bold text-3xl">Get in Touch</h2>
                    <hr className="my-5"/>
                    <p className="text-2xl">I'd love to hear from you!</p>
                    
                    <p className="mt-10">jacob.eaton775@gmail.com</p>
                    
                    <div className="flex gap-7 mt-10 justify-center">
                        <a href="https://github.com/JacobEato" target="_blank" className="bg-white rounded-xl flex items-center btn-1 py-2 px-5">
                        <p className="text-xl">Github</p>
                        </a>
                        <a href="https://www.linkedin.com/in/jacobreaton/" target="_blank" className="bg-white rounded-xl flex btn-1 py-2 px-5">
                        <p className="text-xl">Linkedin</p>
                        </a>
                    </div>
                </div>
                <div>
                    <form onSubmit={onSubmit} action="" className="bg-main flex flex-col gap-5 p-10 rounded-lg shadow-lg">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" required/>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required/>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="10" required></textarea>
                        <button type="submit" className="btn-1 px-4 py-2 max-w-100 mx-auto">Send Message</button>
                    </form>
                </div>
                
            </div>
            
        </section>
    );
}

export default Contact;