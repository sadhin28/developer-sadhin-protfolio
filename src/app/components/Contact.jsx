import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReactiveButton from "reactive-button";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "react-toastify";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(""); // for success or error feedback

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = "service_tz3y1xz"; // ✅ Replace with your actual ID
        const templateID = "template_ab2fx8u"; // ✅ Replace with your template ID
        const userID = "55nir0XRjUEFpKhy3"; // ✅ Replace with your public key

        emailjs.send(serviceID, templateID, formData, userID).then(
            (response) => {
                response && toast.success("Message sent successfully!")
                setStatus("Message sent successfully!");
                setFormData({
                    from_name: "",
                    from_email: "",
                    subject: "",
                    message: "",
                });
            },
            (error) => {
                error && toast.error('Failed to send message, please try again.')
                setStatus("Failed to send message, please try again.");
            }
        );
    }

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6" />,
            title: "Email",
            value: "taosifbinsadhincse@gmail.com",
            href: "mailto:hello@developer.com"
        },
        {
            icon: <Phone className="h-6 w-6" />,
            title: "Phone",
            value: "01707986054",
            href: "tel:+8801707986054"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Location",
            value: "City University,Khagan",
            href: "https://maps.app.goo.gl/Ro6DrNdwAF8BuVTf8"
        }
    ];
    const socialLinks = [
        {
            icon: <BsGithub className="h-5 w-5" />,
            href: "https://github.com/sadhin28",
            label: "GitHub"
        },
        {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/taosif-bin-sadhin-527899368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            label: "LinkedIn"
        },
        {
            icon: <BsTwitter className="h-5 w-5" />,
            href: "https://x.com/sadhincse",
            label: "Twitter"
        }
    ];
    return (
        <div id="contact" >

            <div className="md:flex items-center justify-between py-0">

                <div className="space-y-1.5 text-gray-400 md:w-1/2 ">
                    <h2  className="text-xl md:text-2xl  md:text-start text-center md:py-2  font-bold text-white py-4">
                        Get In <span className="text-blue-500">Touch</span>
                    </h2>
                    <p className="text-justify">I'm always excited to collaborate on new projects and discuss innovative solutions. Whether you need a full-stack web application, consultation on MERN stack development, or just want to say hello, I'd love to hear from you.</p>
                    {/* Contact Details */}
                    <div className="space-y-4 py-5">
                        {contactInfo.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="flex items-center space-x-4 p-4 overflow-x-auto bg-card rounded-lg border border-border hover:border-blue-600/50 shadow-2xl hover:shadow-blue-500 transition-all duration-300 hover:scale-[1.02] group"
                            >
                                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-medium">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Follow Me</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-card rounded-lg border border-border hover:border-blue-600/50 transition-all duration-300 hover:scale-110 group"
                                    aria-label={link.label}
                                >
                                    <div className="text-muted-foreground group-hover:text-blue-500 transition-colors duration-300">
                                        {link.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <section className="w-full   py-12  text-white">
                        <div className="bg-gray-900/20 p-8 rounded-lg shadow-md border hover:shadow-lg ">

                            <form onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="from_name"
                                            value={formData.from_name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                            className="w-full bg-[#0d1117] rounded-md p-3 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="from_email"
                                            value={formData.from_email}
                                            onChange={handleChange}
                                            placeholder="your@email.com"
                                            required
                                            className="w-full bg-[#0d1117] rounded-md p-3 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-1">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project discussion"
                                        required
                                        className="w-full bg-[#0d1117] rounded-md p-3 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-1">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        required
                                        rows="5"
                                        className="w-full bg-[#0d1117] rounded-md p-3 text-white border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>

                                {status && (
                                    <p
                                        className={`text-sm ${status.includes("success") ? "text-blue-500" : "text-red-500"
                                            }`}
                                    >
                                        {status}
                                    </p>
                                )}

                                <div className="text-center">
                                    <ReactiveButton outline
                                       className="rounded"
                                       type="submit"
                                        color="blue"
                                        idleText='Send Message'
                                        size="lerge"
                                    />

                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;
