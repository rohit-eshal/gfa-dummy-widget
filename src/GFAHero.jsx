import React, { useState } from 'react';

const GFAHero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="w-full bg-white text-gray-800">
            {/* Navigation */}
            <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="text-left">
                                <div className="text-xs font-bold text-gray-700 leading-tight">GFA GROUP</div>
                                <div className="text-xs font-semibold text-orange-500 leading-tight">Your purpose</div>
                                <div className="text-xs text-orange-500 leading-tight">Our expertise</div>
                            </div>
                            <div className="flex-shrink-0">
                                <svg viewBox="0 0 100 100" className="w-12 h-12">
                                    <rect x="25" y="10" width="50" height="70" fill="#003DA5" />
                                    <polygon points="60,10 85,50 60,50" fill="#FFA500" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-xl font-bold text-blue-700 leading-tight">GFA</div>
                                <div className="text-xs font-bold text-blue-700 leading-tight">CONSULTING GROUP</div>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition flex items-center gap-2">
                                <span>📌</span> ABOUT US
                            </a>
                            <a href="#projects" className="text-sm font-medium hover:text-blue-600 transition flex items-center gap-2">
                                <span>🌍</span> PROJECTS
                            </a>
                            <a href="#gfa" className="text-sm font-medium hover:text-blue-600 transition flex items-center gap-2">
                                📊 GFA CONSULTING GROUP
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2"
                            onClick={toggleMenu}
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden pb-4 space-y-2 border-t">
                            <a href="#about" className="block py-2 text-sm hover:text-blue-600">📌 ABOUT US</a>
                            <a href="#projects" className="block py-2 text-sm hover:text-blue-600">🌍 PROJECTS</a>
                            <a href="#gfa" className="block py-2 text-sm hover:text-blue-600">📊 GFA CONSULTING GROUP</a>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Banner */}
            <section className=" w-full h-auto md:h-96 relative overflow-hidden mt-20">
                <img
                    src="https://www.gfa-group.de/header/images/6/3/0/8/9/3/22f35ba549b08f57.jpg"
                    alt="Digital Learning Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 to-orange-600/15"></div>
            </section>

            {/* Intro Section */}
            <section className="bg-blue-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">We offer future-ready learning solutions</h2>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                        <p>
                            At <strong>Digital Learning for Impact (DLI)</strong>, learning should be localized, relevant, engaging and accessible, no matter where a person lives. That is how digital learning creates real impact.
                        </p>

                        <p>
                            We have proven expertise in delivering state of the art learning experiences to thousands of learners in publicly funded international projects. Our learning solutions put the learning needs and realities of our learners at heart and make intuitive use of digital learning technologies.
                        </p>

                        <p>
                            Our expertise lies in adult learning. Regardless of the topic we design learning experiences that upgrade learner's competencies. From concept and design to implementation and delivery, we bring professional expertise and creativity to every stage of the process.
                        </p>

                        <p>
                            Whether you're looking for an online course to equip your learners with soft/hard skills or you want to build an AI solution to fill a learning gap – we provide the tools and expertise to make your vision a reality.
                        </p>

                        <p className="font-semibold">
                            Our seasoned team of experts sit in Germany, but we operate globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-900 w-fit">
                            DIGITAL LEARNING FOR IMPACT
                        </h2>

                        {/* Video Section */}
                        <div className="mb-12">
                            <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://player.vimeo.com/video/950678424?h=7c18deafaf&title=0&byline=0"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="Digital Learning for Impact"
                                ></iframe>
                            </div>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            At <strong>Digital Learning for Impact (DLI)</strong>, we are dedicated to improving the way we build skills and knowledge through digital learning. We use digital learning technologies such as learning management systems, <strong>XR, chatbots</strong> and social learning to develop innovative products such as the <strong>Green TVET course for JET</strong> and the <strong>Renewable Energy AI tutor</strong>.
                        </p>

                        <p className="text-gray-700 mb-8 leading-relaxed">
                            We also advise our internal departments on digital learning and its implementation for their publicly funded international projects. We aim to make learning accessible, engaging and effective by keeping pace with emerging digital innovations and trends.
                        </p>

                        {/* Video Section 2 */}
                        <div className="mb-12">
                            <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://player.vimeo.com/video/1033551909?badge=0&autopause=0&player_id=0&app_id=58479"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                    allowFullScreen
                                    title="DLI's take on digital learning"
                                ></iframe>
                            </div>
                        </div>

                        {/* Why Us Section */}
                        <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-900 w-fit mt-16">
                            Why us?
                        </h2>

                        <div className="grid grid-cols-1 gap-8 mb-12">
                            {/* GFA-Expertise */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-40 h-40 bg-white border-2 border-blue-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition">
                                        <svg className="w-20 h-20 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1 pt-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">GFA-Expertise</h3>
                                    <p className="text-gray-700 leading-relaxed text-base">
                                        DLI brings pedagogical expertise and experience in the development of digital learning products. We're closely connected to our internal <a href="#" className="text-blue-600 font-semibold hover:underline">Digital Innovation Unit</a>, which provides technical expertise to support product development. Our domain-specific departments bring industry-specific expertise to support us with high-quality learning content.
                                    </p>
                                </div>
                            </div>

                            {/* Co-creation */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-40 h-40 bg-white border-2 border-blue-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition">
                                        <svg className="w-20 h-20 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1 pt-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Co-creation</h3>
                                    <p className="text-gray-700 leading-relaxed text-base">
                                        We co-design and collaborate with our partners from the very first step of requirements analysis, which helps us design and customize the product to work best for the end user.
                                    </p>
                                </div>
                            </div>

                            {/* Insights and Support */}
                            <div className="flex gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-40 h-40 bg-white border-2 border-blue-300 rounded-2xl flex items-center justify-center hover:shadow-lg transition">
                                        <svg className="w-20 h-20 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                            <circle cx="12" cy="12" r="1" />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1 pt-4">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Insights and Support</h3>
                                    <p className="text-gray-700 leading-relaxed text-base">
                                        We provide mechanisms for tracking usage and learning analytics of our products, providing insight into end-user needs and helping you to optimize your offerings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Our Products Section */}
                        <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-900 w-fit mt-16">
                            Our products
                        </h2>

                        <h4 className="text-xl font-bold mb-6">DLI´s AI Tutor Ecosystem:</h4>
                        <div className="mb-8">
                            <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://player.vimeo.com/video/1030791877?badge=0&autopause=0&player_id=0&app_id=58479"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                    allowFullScreen
                                    title="DLI's AI Tutor Ecosystem"
                                ></iframe>
                            </div>
                        </div>

                        <h4 className="text-xl font-bold mb-6 mt-8">The Renewable Energy AI:</h4>
                        <div className="mb-8">
                            <div className="relative w-full pb-[56.25%] bg-black rounded-lg overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://player.vimeo.com/video/948613007?h=911406b50d&title=0&byline=0"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    title="The Renewable Energy AI"
                                ></iframe>
                            </div>
                        </div>

                        {/* Meet the Team Section */}
                        <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-900 w-fit mt-16">
                            Meet the team
                        </h2>

                        <div className="space-y-12 mb-12">
                            {[
                                { name: 'Inke Hase', role: 'Digital Innovation Strategist', email: 'inke.hase@gfa-group.de', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop' },
                                { name: 'Belen Gissila', role: 'Design Thinker', email: 'belen.gissila@gfa-group.de', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
                                { name: 'Joanne Schuiteman', role: 'Educational Scientist', email: 'joanne.schuiteman@gfa-group.de', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop' },
                                { name: 'Satya Kalepu', role: 'EdTech Specialist', email: 'satya.kalepu@gfa-group.de', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop' },
                                { name: 'Franziska Pfeifer', role: 'Digital Learning Strategist', email: 'franziska.pfeifer@gfa-group.de', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop' }
                            ].map((member, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-32 h-40 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                                        <p className="text-gray-700 mb-2">{member.role}</p>
                                        <p className="text-blue-600 hover:underline">
                                            <a href={`mailto:${member.email}`}>E-mail: {member.email}</a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Career Guide AI Tutor Section */}
                        <h2 className="text-3xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-900 w-fit mt-16">
                            Career Guide AI Tutor
                        </h2>

                        <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-lg mb-12">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Students, parents, and educators in Egypt face challenges in accessing timely and personalised career guidance. Many young people are unaware of the diversity of technical and vocational career pathways, particularly those linked to high-growth sectors such as the green economy, and misconceptions about TVET persist.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                To address this, the <strong>Career Guide AI Tutor</strong> will leverage conversational AI to provide personalised, contextualised guidance aligned with labour market needs. Building on GFA's Digital Learning for Impact (DLI) approach, the tool will support students in making informed education-to-work transitions and strengthen the reputation of TVET.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <h2 className="text-3xl font-bold text-blue-900 mb-6 pb-4 border-b-4 border-blue-900 w-fit mt-16">
                            CONTACT
                        </h2>

                        <div className="bg-gray-50 p-8 rounded-lg">
                            <p className="text-gray-900 font-semibold mb-4">GFA Consulting Group GmbH</p>
                            <p className="text-gray-700 mb-2"><strong>Digital Learning for Impact - DLI</strong></p>
                            <p className="text-gray-700 mb-2">Eulenkrugstraße 82</p>
                            <p className="text-gray-700 mb-2">22359 Hamburg</p>
                            <p className="text-gray-700 mb-4">Germany</p>
                            <p className="text-gray-700 mb-2">Phone: <a href="tel:+4940603061001" className="text-blue-600 hover:underline">+49 40 603 06 100</a></p>
                            <p className="text-gray-700">
                                E-mail: <a href="mailto:digital-learning@gfa-group.de" className="text-blue-600 hover:underline">digital-learning@gfa-group.de</a>
                            </p>
                        </div>
                    </div>

                    {/* Right Sidebar - Projects */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold text-blue-900 mb-8 pb-4 border-b-4 border-blue-900">
                            PROJECTS
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Online learning environment for Senegalese youth',
                                    location: 'Senegal',
                                    date: 'GIZ, 2019 - 2025'
                                },
                                {
                                    title: 'Interactive tutored e-learning course on the management of cardiovascular diseases',
                                    location: 'Ghana',
                                    date: 'GIZ, 2023 - 2024'
                                },
                                {
                                    title: 'Broad-based artificial intelligence capacity building',
                                    location: 'Kenya',
                                    date: 'GIZ, 2022 - 2024'
                                },
                                {
                                    title: 'Employment promotion through virtual reality',
                                    location: 'Honduras, Guatemala, El Salvador',
                                    date: 'GIZ, 2020 - 2023'
                                }
                            ].map((project, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{project.title}</h3>
                                    <p className="text-xs text-blue-600 font-semibold mb-1">{project.location}</p>
                                    <p className="text-xs text-gray-600 mb-3">{project.date}</p>
                                    <a href="#" className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition inline-block">
                                        READ MORE
                                    </a>
                                </div>
                            ))}

                            <a href="#" className="block w-full text-center border-2 border-gray-900 text-gray-900 font-bold py-2 px-4 rounded hover:bg-gray-100 transition mt-6">
                                see all projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 border-t border-gray-300 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <p className="text-sm text-gray-600">© 2024 Digital Learning for Impact. All rights reserved.</p>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-blue-600 hover:underline">Legal Notice</a>
                            <a href="#" className="text-blue-600 hover:underline">Data Privacy EN</a>
                            <a href="#" className="text-blue-600 hover:underline">GER</a>
                            <a href="#" className="text-blue-600 hover:underline">Your Cookie Settings</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GFAHero;