import React from "react";
import emailjs from '@emailjs/browser'

const ContactSection: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Your EmailJS service ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Your EmailJS template ID
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    // Optional: Add user feedback (e.g., success message)
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.error("Email sending failed:", error.text);
                    // Optional: Add error handling
                    alert("Failed to send message. Please try again.");
                }
            );

        form.reset();
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 pt-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_#fa8537,_transparent)] rounded-full h-96 w-96 z-0 blur-xl absolute top-3/4 -left-20 transform -translate-x-1/2 translate-y-1/8"></div>
            <div className="z-10">
                <h5 className="text-5xl font-bold text-white my-6">
                    Let&apos;s Connect
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
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