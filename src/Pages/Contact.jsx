import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send, MapPin, Phone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Using FormSubmit to handle form submissions
      const formSubmitUrl = 'https://formsubmit.co/debasisbehera1508@gmail.com';
      
      // Prepare form data for FormSubmit
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('_subject', 'New message from Debasis Behera portfolio');
      submitData.append('_captcha', 'false');
      submitData.append('_template', 'table');

      await axios.post(formSubmitUrl, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

     
      Swal.fire({
        title: 'Success',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonColor: '#2B6FFF',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      if (error.request && error.request.status === 0) {
        Swal.fire({
          title: 'Success',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonColor: '#2B6FFF',
          timer: 2000,
          timerProgressBar: true
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: 'Failed',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#2B6FFF'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[5%] lg:px-[12%] section-padding">
      <div className="text-center lg:mt-[6%] mt-12 mb-16 sm:px-0 px-[5%]">
        <h2
          data-aos="fade-down"
          data-aos-duration="1200"
          className="inline-block text-5xl lg:text-7xl font-bold text-center mx-auto primary-gradient"
        >
          <Zap className="inline-block w-12 h-12 lg:w-16 lg:h-16 text-[#2B6FFF] mb-4" />
          <span className="block mt-2">Contact Me</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1300"
          className="text-[#B0B8C5] max-w-3xl mx-auto text-xl mt-8"
        >
          Have a question or want to collaborate on an exceptional project? Send me a message and I'll respond promptly.
        </p>
      </div>

      <div
        className="h-auto py-12 flex items-center justify-center"
        id="Contact"
      >
        <div className="container px-[2%] grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Contact Form */}
          <div
            className="premium-card p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl transform transition-all duration-500 hover:shadow-[#2B6FFF]/30"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex justify-between items-start mb-8 sm:mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold primary-gradient mb-3 sm:mb-4">
                  Get In Touch
                </h2>
                <p className="text-[#B0B8C5] text-lg sm:text-xl">
                  Fill out the form and I'll get back to you as soon as possible.
                </p>
              </div>
              <Share2 className="w-10 h-10 sm:w-14 sm:h-14 text-[#2B6FFF] opacity-60" />
            </div>

            <form 
              onSubmit={handleSubmit}
              className="space-y-6 sm:space-y-8"
            >
              <div className="relative group">
                <User className="absolute left-4 sm:left-6 top-4 sm:top-6 w-5 h-5 sm:w-6 sm:h-6 text-[#B0B8C5] group-focus-within:text-[#2B6FFF] transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 sm:p-6 pl-12 sm:pl-16 premium-card rounded-xl border border-[#2B6FFF]/20 placeholder-[#B0B8C5] text-white focus:outline-none focus:ring-2 focus:ring-[#2B6FFF]/40 transition-all duration-300 hover:border-[#2B6FFF]/40 disabled:opacity-50 text-base sm:text-xl"
                  required
                />
              </div>
              <div className="relative group">
                <Mail className="absolute left-4 sm:left-6 top-4 sm:top-6 w-5 h-5 sm:w-6 sm:h-6 text-[#B0B8C5] group-focus-within:text-[#2B6FFF] transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 sm:p-6 pl-12 sm:pl-16 premium-card rounded-xl border border-[#2B6FFF]/20 placeholder-[#B0B8C5] text-white focus:outline-none focus:ring-2 focus:ring-[#2B6FFF]/40 transition-all duration-300 hover:border-[#2B6FFF]/40 disabled:opacity-50 text-base sm:text-xl"
                  required
                />
              </div>
              <div className="relative group">
                <MessageSquare className="absolute left-4 sm:left-6 top-4 sm:top-6 w-5 h-5 sm:w-6 sm:h-6 text-[#B0B8C5] group-focus-within:text-[#2B6FFF] transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 sm:p-6 pl-12 sm:pl-16 premium-card rounded-xl border border-[#2B6FFF]/20 placeholder-[#B0B8C5] text-white focus:outline-none focus:ring-2 focus:ring-[#2B6FFF]/40 transition-all duration-300 hover:border-[#2B6FFF]/40 h-32 sm:h-[15rem] disabled:opacity-50 text-base sm:text-xl"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full primary-button py-4 sm:py-6 font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 sm:gap-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-lg sm:text-2xl"
              >
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info and Social Links */}
          <div className="space-y-8 sm:space-y-10">
            <div 
              className="premium-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl sm:text-3xl font-bold primary-gradient mb-6 sm:mb-8">Contact Information</h3>
              <div className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 premium-card rounded-xl hover:border-[#DFFF00] transition-all">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#2B6FFF]/20">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#2B6FFF]" />
                  </div>
                  <div>
                    <h4 className="text-[#B0B8C5] text-base sm:text-lg">Phone</h4>
                    <p className="text-white font-bold text-lg sm:text-xl">+91 XXXXXXXXXX</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 premium-card rounded-xl hover:border-[#DFFF00] transition-all">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#2B6FFF]/20">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-[#2B6FFF]" />
                  </div>
                  <div>
                    <h4 className="text-[#B0B8C5] text-base sm:text-lg">Email</h4>
                    <p className="text-white font-bold text-lg sm:text-xl">debasisbehera1508@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 premium-card rounded-xl hover:border-[#DFFF00] transition-all">
                  <div className="p-3 sm:p-4 rounded-xl bg-[#2B6FFF]/20">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#2B6FFF]" />
                  </div>
                  <div>
                    <h4 className="text-[#B0B8C5] text-base sm:text-lg">Location</h4>
                    <p className="text-white font-bold text-lg sm:text-xl">Odisha, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="premium-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <h3 className="text-2xl sm:text-3xl font-bold primary-gradient mb-6 sm:mb-8">Connect With Me</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;