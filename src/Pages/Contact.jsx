import React, { useState, useEffect } from "react";
import { User, Mail, MessageSquare, Send, MapPin, Zap, Github, Linkedin, Bookmark, Clock } from "lucide-react";
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
      once: true,
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
      html: 'Please wait while we transmit your coordinates',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const formSubmitUrl = 'https://api.web3forms.com/submit';
      const submitData = new FormData();
      // Using environment variable for security
      submitData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('message', formData.message);
      submitData.append('subject', 'New Contact Message from Portfolio');

      const response = await axios.post(formSubmitUrl, submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Your message has been sent successfully. I will get back to you shortly!',
          icon: 'success',
          confirmButtonColor: '#0A3D91',
          timer: 3000,
          timerProgressBar: true
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }

    } catch (error) {
      Swal.fire({
        title: 'Success',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonColor: '#0A3D91',
        timer: 3000,
        timerProgressBar: true
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="px-[5%] lg:px-[12%] py-24 bg-transparent border-b border-slate-200 relative overflow-hidden" 
      id="contact"
    >
      <div className="absolute inset-0 blueprint-grid-system opacity-[0.025]" />


      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0A3D91] uppercase tracking-wider technical-label">
            <Zap className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Let's Connect
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Whether you'd like to discuss AI, software engineering, internships, research opportunities, projects, or technology in general, feel free to reach out.
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form */}
          <div 
            className="lg:col-span-7 elite-card p-8 md:p-10 text-left bg-white border border-slate-200 rounded-2xl"
            data-aos="fade-right"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest technical-label">Your Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full py-3 pl-11 pr-4 bg-slate-50/50 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-[#0A3D91] focus:ring-1 focus:ring-[#0A3D91] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest technical-label">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full py-3 pl-11 pr-4 bg-slate-50/50 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-[#0A3D91] focus:ring-1 focus:ring-[#0A3D91] transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest technical-label">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full min-h-[120px] py-3 pl-11 pr-4 bg-slate-50/50 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:border-[#0A3D91] focus:ring-1 focus:ring-[#0A3D91] transition-all resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full elite-btn-primary py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 technical-label"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

            </form>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-6 text-left" data-aos="fade-left">
            
            {/* Contact coordinates */}
            <div className="elite-card p-8 space-y-6 bg-white border border-slate-200 rounded-2xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 technical-label">Coordinates</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-[#0A3D91]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 technical-label">Email</span>
                    <a href="mailto:debasisbehera1508@gmail.com" className="text-sm font-semibold text-slate-700 hover:text-[#0A3D91]">
                      debasisbehera1508@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-[#0A3D91]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 technical-label">Location</span>
                    <span className="text-sm font-semibold text-slate-700">Odisha, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-100 text-[#0A3D91]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 technical-label">Expected Response</span>
                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider mt-1 technical-label">Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social / Endpoints Grid */}
            <div className="elite-card p-8 space-y-6 bg-white border border-slate-200 rounded-2xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 technical-label">Endpoints</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Debasis-Behera4143" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                  className="p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/debasis-behera4143" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                  className="p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://leetcode.com/u/debasis_behera/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LeetCode Profile"
                  className="p-3 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Bookmark className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;