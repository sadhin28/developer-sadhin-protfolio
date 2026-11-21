
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { BsGithub, BsTwitter } from "react-icons/bs";
import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
} from "lucide-react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const serviceID = "service_u8kuuah";
    const templateID = "template_59fumxr";
    const publicKey = "Z9Gg6qas50w0qX1wY";

    try {
      await emailjs.send(
        serviceID,
        templateID,
        formData,
        publicKey
      );

      toast.success("Message sent successfully!");

      setFormData({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Email",
      value: "sadhincse113@gmail.com",
      href: "mailto:sadhincse113@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Phone",
      value: "01707986054",
      href: "tel:+8801707986054",
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Location",
      value: "City University, Khagan",
      href: "https://maps.app.goo.gl/Ro6DrNdwAF8BuVTf8",
    },
  ];

  const socialLinks = [
    {
      icon: <BsGithub className="h-5 w-5" />,
      href: "https://github.com/sadhin28",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/taosif-bin-sadhin-527899368/",
      label: "LinkedIn",
    },
    {
      icon: <BsTwitter className="h-5 w-5" />,
      href: "https://x.com/sadhincse",
      label: "Twitter",
    },
  ];

  const inputClass =
    "w-full min-w-0 rounded-lg border border-gray-700 bg-[#0d1117] px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  return (
    <section
      id="contact"
      className="w-full scroll-mt-24 py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Contact Me
          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Get In <span className="text-blue-500">Touch</span>
          </h2>

          <div className="mt-3 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        {/* Main Contact Layout */}
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          {/* Contact Information */}
          <div className="min-w-0 space-y-5 sm:space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl">
                Let's Work Together
              </h3>

              <p className="text-justify text-sm leading-7 text-gray-400 sm:text-base">
                I am always excited to collaborate on new projects and
                discuss innovative solutions. Whether you need a
                full-stack web application, consultation on MERN stack
                development, or just want to say hello, I'd love to
                hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={
                    item.title === "Location" ? "_blank" : undefined
                  }
                  rel={
                    item.title === "Location"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-center gap-3 rounded-xl border border-gray-700 bg-gray-800/80 p-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/10 sm:gap-4 sm:p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white sm:h-12 sm:w-12">
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-white sm:text-base">
                      {item.title}
                    </h4>

                    <p className="mt-1 break-all text-xs leading-5 text-gray-400 sm:break-words sm:text-sm">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="mb-4 text-base font-semibold text-white sm:text-lg">
                Follow Me
              </h4>

              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-gray-800 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="min-w-0 w-full">
            <div className="h-full rounded-2xl border border-gray-700 bg-gray-900/50 p-4 shadow-xl transition-all duration-300 hover:border-gray-600 sm:p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Send Me a Message
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Have a project or question? Fill out the form below.
                </p>
              </div>

              <form onSubmit={sendEmail} className="space-y-5">
                {/* Name and Email */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="min-w-0">
                    <label
                      htmlFor="from_name"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Name
                    </label>

                    <input
                      id="from_name"
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      maxLength={100}
                      autoComplete="name"
                      className={inputClass}
                    />
                  </div>

                  <div className="min-w-0">
                    <label
                      htmlFor="from_email"
                      className="mb-2 block text-sm font-medium text-gray-200"
                    >
                      Email
                    </label>

                    <input
                      id="from_email"
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      maxLength={254}
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project discussion"
                    required
                    maxLength={150}
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-200"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    maxLength={5000}
                    rows={6}
                    className={`${inputClass} min-h-[150px] resize-y`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[180px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
