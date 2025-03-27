import React from "react";
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'
import { GlobeComponent } from "./GlobeComponent";


const ContactSection: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
            )
            .then(
                (result) => {
                    toast.success("Message Sent Successfully!", {
                        description: "Thank you for your message. I will get back to you ASAP!",
                    });
                    form.reset();
                },
                (error) => {
                    toast.error("Oopsie, Something went Wrong!", {
                        description: "Please try again or check your connection.",
                    });
                }
            );
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-6 pt-24 gap-4 relative"
        >
            <div className="z-10 ">
                <GlobeComponent />
            </div>
            <div>
                <form className="flex flex-col my-20" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your Name
                        </label>
                        <input
                            name="from_name"
                            type="text"
                            id="name"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="text-white block mb-2 text-sm font-medium"
                        >
                            Your Email
                        </label>
                        <input
                            name="from_email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="example@email.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="subject"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying hi"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="text-white block text-sm mb-2 font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 px-5 py-2 rounded-full w-full sm:w-[200px] mr-4 transition ease-in-out bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 mt-3 text-white hover:-translate-y-1">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;