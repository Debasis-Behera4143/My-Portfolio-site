import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Resume = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-4xl p-6 mx-4 bg-[#030014] rounded-2xl shadow-2xl overflow-y-auto max-h-screen"
                        initial={{ scale: 0.8, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col space-y-6">
                            {/* Header */}
                            <div className="text-center">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
                                    Resume
                                </h2>
                                <p className="mt-2 text-gray-400">
                                    Computer Science & Engineering Student | CGPA: 9.25
                                </p>
                            </div>

                            {/* Career Objective */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Career Objective</h3>
                                <p className="text-gray-400">
                                    Passionate and motivated B.Tech Computer Science student at IGIT Sarang, eager to apply technical and creative skills to build impactful solutions. Interested in Web Development, AI, and Graph Analytics, and continuously learning through hands-on projects and real-world applications.
                                </p>
                            </div>

                            {/* Education */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">B.Tech in Computer Science & Engineering</h4>
                                        <p className="text-gray-400">Indira Gandhi Institute of Technology (IGIT), Sarang — 2023–Present</p>
                                        <p className="text-gray-500">CGPA: 9.25</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">DAV Public School, Unit-8, Bhubaneswar</h4>
                                        <p className="text-gray-400">11th & 12th — 2020–2022</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Happy Home School, Charampa, Bhadrak</h4>
                                        <p className="text-gray-400">Nursery to 10th — 2007–2020</p>
                                    </div>
                                </div>
                            </div>

                            {/* Technical Skills */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Technical Skills</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-[#6366f1] font-medium mb-2">Languages & Tools</h4>
                                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                                            <li>C++, Java, Python</li>
                                            <li>HTML, CSS, JavaScript</li>
                                            <li>React.js, Node.js (Basics)</li>
                                            <li>Git & GitHub, VS Code, Postman</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-[#6366f1] font-medium mb-2">Core Concepts</h4>
                                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                                            <li>DSA, OOP, DBMS, OS</li>
                                            <li>API Testing, UI Design</li>
                                            <li>Debugging, Problem Solving</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Projects */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Projects</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Resume Builder Website</h4>
                                        <p className="text-gray-400">A platform that helps users create resumes and practice interview questions; includes premium features (₹9 & ₹19 versions).</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Salesforce Clone</h4>
                                        <p className="text-gray-400">A front-end clone of the Salesforce website using HTML & CSS for design practice.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Shapes Game</h4>
                                        <p className="text-gray-400">A fun JavaScript-based mini-game demonstrating DOM manipulation and event handling.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Java GUI Projects</h4>
                                        <p className="text-gray-400">Built multiple Swing/Applet-based applications (calculator, clock, animations, registration forms, etc.) using multithreading and event handling.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Certifications</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-1">
                                    <li>Postman API Fundamentals Badge</li>
                                    <li>Web Development Certification</li>
                                    <li>Data Structures and Algorithms (C++)</li>
                                    <li>DBMS Fundamentals</li>
                                </ul>
                            </div>

                            {/* Activities & Interests */}
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Activities & Interests</h3>
                                <div className="space-y-4 text-gray-400">
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">GitHub Contributions</h4>
                                        <p>Contributed to open-source projects showcasing web apps and DSA implementations.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Coding Challenges</h4>
                                        <p>Active on LeetCode, HackerRank, and Coursera; enjoys solving algorithmic puzzles and competitive problems.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Photography</h4>
                                        <p>Skilled in creative, event, and landscape photography.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Design & UI/UX</h4>
                                        <p>Interested in front-end creativity, user-centric design, and polished presentation.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#a855f7] font-medium">Tech Exploration</h4>
                                        <p>Always curious about new technologies, automation, and ethical AI deployment.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="flex justify-center pt-4">
                                {(() => {
                                    const resumeUrl = new URL('/assets/Debasis_Resume.pdf', import.meta.url).href;
                                    return (
                                        <a
                                            href={resumeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                                        >
                                            View Full Resume
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
