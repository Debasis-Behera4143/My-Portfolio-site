import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, User, GraduationCap, Code, Folder, Award, Camera, Cpu, Crown } from 'lucide-react';

const Resume = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-5xl p-8 mx-6 bg-gradient-to-br from-[#0f0f19] to-[#121220] rounded-3xl shadow-2xl overflow-y-auto max-h-screen border border-gray-700/40"
                        initial={{ scale: 0.8, y: 25 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/15"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="flex flex-col space-y-10">
                            {/* Header */}
                            <div className="text-center pb-8 border-b border-gray-700/40">
                                <h2 className="text-5xl font-bold gold-gradient flex items-center justify-center gap-4">
                                    <Crown className="w-12 h-12 text-[#b88f55]" />
                                    <span>Resume</span>
                                </h2>
                                <p className="mt-4 text-gray-400 text-xl">
                                    Computer Science & Engineering Student | CGPA: 9.25
                                </p>
                            </div>

                            {/* Personal Info */}
                            <div className="premium-card p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold gold-gradient mb-6 flex items-center gap-3">
                                    <User className="w-8 h-8" />
                                    Personal Information
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-[#b88f55] font-bold mb-3 text-xl">Name</h4>
                                        <p className="text-gray-200 text-lg">Debasis Behera</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#b88f55] font-bold mb-3 text-xl">Email</h4>
                                        <p className="text-gray-200 text-lg">debasisbehera1508@gmail.com</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#b88f55] font-bold mb-3 text-xl">Location</h4>
                                        <p className="text-gray-200 text-lg">Odisha, India</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#b88f55] font-bold mb-3 text-xl">LinkedIn</h4>
                                        <p className="text-gray-200 text-lg">linkedin.com/in/debasis-behera4143</p>
                                    </div>
                                </div>
                            </div>

                            {/* Career Objective */}
                            <div className="premium-card p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold gold-gradient mb-6">Career Objective</h3>
                                <p className="text-gray-200 leading-relaxed text-xl">
                                    Passionionate and motivated B.Tech Computer Science student at IGIT Sarang, eager to apply technical and creative skills to build exceptional solutions. Interested in Web Development, AI, and Graph Analytics, and continuously learning through hands-on projects and real-world applications.
                                </p>
                            </div>

                            {/* Education */}
                            <div className="premium-card p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold gold-gradient mb-6 flex items-center gap-3">
                                    <GraduationCap className="w-8 h-8" />
                                    Education
                                </h3>
                                <div className="space-y-8">
                                    <div className="border-l-3 border-[#b88f55]/40 pl-6 py-2">
                                        <h4 className="text-2xl text-[#b88f55] font-bold">B.Tech in Computer Science & Engineering</h4>
                                        <p className="text-gray-300 text-lg">Indira Gandhi Institute of Technology (IGIT), Sarang — 2023–Present</p>
                                        <p className="text-gray-400 mt-2 text-lg">CGPA: 9.25</p>
                                    </div>
                                    <div className="border-l-3 border-[#cd7f32]/40 pl-6 py-2">
                                        <h4 className="text-2xl text-[#cd7f32] font-bold">DAV Public School, Unit-8, Bhubaneswar</h4>
                                        <p className="text-gray-300 text-lg">11th & 12th — 2020–2022</p>
                                    </div>
                                    <div className="border-l-3 border-[#c0c0c0]/40 pl-6 py-2">
                                        <h4 className="text-2xl text-[#c0c0c0] font-bold">Happy Home School, Charampa, Bhadrak</h4>
                                        <p className="text-gray-300 text-lg">Nursery to 10th — 2007–2020</p>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Skills */}
                            <div className="premium-card p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold gold-gradient mb-6 flex items-center gap-3">
                                    <Code className="w-8 h-8" />
                                    Technical Skills
                                </h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-[#b88f55] font-bold mb-4 text-xl">Languages & Tools</h4>
                                        <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
                                            <li>C++, Java, Python</li>
                                            <li>HTML, CSS, JavaScript</li>
                                            <li>React.js, Node.js (Basics)</li>
                                            <li>Git & GitHub, VS Code, Postman</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-[#cd7f32] font-bold mb-4 text-xl">Core Concepts</h4>
                                        <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
                                            <li>DSA, OOP, DBMS, OS</li>
                                            <li>API Testing, UI Design</li>
                                            <li>Debugging, Problem Solving</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="premium-card p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold gold-gradient mb-6 flex items-center gap-3">
                                    <Folder className="w-8 h-8" />
                                    Projects
                                </h3>
                                <div className="space-y-8">
                                    <div className="border-l-3 border-[#b88f55]/40 pl-6 py-2">
                                        <h4 className="text-2xl text-[#b88f55] font-bold">Resume Builder Website</h4>
                                        <p className="text-gray-200 mt-3 text-lg">A platform that helps users create resumes and practice interview questions; includes premium features (₹9 & ₹19 versions).</p>
                                    </div>
                                    <div className="border-l-3 border-[#cd7f32]/40 pl-6 py-2">
                                        <h4 className="text-2xl text-[#cd7f32] font-bold">Salesforce Clone</h4>
                                        <p className="text-gray-200 mt-3 text-lg">A front-end clone of the Salesforce website using HTML & CSS for design practice.</p>
                                    </div>
                                    <div className="border-l-3 border-[#c0c0c0]/40 pl-6 py-2">
                                        <h4 className="text-2xl text-[#c0c0c0] font-bold">Shapes Game</h4>
                                        <p className="text-gray-200 mt-3 text-lg">A fun JavaScript-based mini-game demonstrating DOM manipulation and event handling.</p>
                                    </div>
                                    <div className="border-l-3 border-[#b88f55]/40 pl-6 py-2">
                                        <h4 className="text-2xl text-[#b88f55] font-bold">Java GUI Projects</h4>
                                        <p className="text-gray-200 mt-3 text-lg">Built multiple Swing/Applet-based applications (calculator, clock, animations, registration forms, etc.) using multithreading and event handling.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="premium-card p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold gold-gradient mb-6 flex items-center gap-3">
                                    <Award className="w-8 h-8" />
                                    Certifications
                                </h3>
                                <ul className="list-disc list-inside text-gray-200 space-y-3 text-lg">
                                    <li>Postman API Fundamentals Badge</li>
                                    <li>Web Development Certification</li>
                                    <li>Data Structures and Algorithms (C++)</li>
                                    <li>DBMS Fundamentals</li>
                                </ul>
                            </div>

                            {/* Activities & Interests */}
                            <div className="premium-card p-8 rounded-3xl">
                                <h3 className="text-3xl font-bold gold-gradient mb-6 flex items-center gap-3">
                                    <Cpu className="w-8 h-8" />
                                    Activities & Interests
                                </h3>
                                <div className="space-y-6 text-gray-200 text-lg">
                                    <div className="flex items-start gap-4">
                                        <Camera className="w-6 h-6 text-[#b88f55] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-[#b88f55] font-bold">GitHub Contributions</h4>
                                            <p>Contributed to open-source projects showcasing web apps and DSA implementations.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Code className="w-6 h-6 text-[#cd7f32] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-[#cd7f32] font-bold">Coding Challenges</h4>
                                            <p>Active on LeetCode, HackerRank, and Coursera; enjoys solving algorithmic puzzles and competitive problems.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Camera className="w-6 h-6 text-[#c0c0c0] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-[#c0c0c0] font-bold">Photography</h4>
                                            <p>Skilled in creative, event, and landscape photography.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Cpu className="w-6 h-6 text-[#b88f55] mt-1 flex-shrink-0" />
                                        <div>
                                            <h4 className="text-[#b88f55] font-bold">Design & UI/UX</h4>
                                            <p>Interested in front-end creativity, user-centric design, and polished presentation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="flex justify-center pt-6">
                                {(() => {
                                    const resumeUrl = new URL('/assets/Debasis_Resume.pdf', import.meta.url).href;
                                    return (
                                        <a
                                            href={resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="gold-button px-10 py-5 rounded-xl font-bold flex items-center gap-4 hover:scale-105 transition-transform text-xl"
                                        >
                                            <Download className="w-6 h-6" />
                                            Download Full Resume
                                        </a>
                                    );
                                })()}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Resume;