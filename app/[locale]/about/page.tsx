"use client"
import React, { useState } from 'react';

const AboutPageMain = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'vision', label: 'Vision & Values' },
    { id: 'history', label: 'History' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-fadeIn space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">About Aether Digital Library</h1>
              <p className="text-gray-600 text-lg">Preserving knowledge for future generations.</p>
            </div>
            
            <article className="bg-white border border-transparent shadow-md rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Aether</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aether Digital Library is a non-profit digital archive dedicated to the preservation and accessibility of human knowledge. Unlike traditional commercial platforms, we do not sell books. Our sole purpose is to provide a comprehensive, organized, and accessible repository.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe that information is a fundamental right. Through our platform, users can browse thousands of categorized titles, manage their personal reading lists, and discover new intellectual horizons without barriers.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-[#CFDDF2] rounded-lg flex items-center justify-center text-[#1F2937] opacity-80">
                 <span className="text-6xl text-white">📖</span>
              </div>
            </article>
          </div>
        );

      case 'mission':
        return (
          <div className="animate-fadeIn space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Mission</h1>
            <article className="bg-white border border-transparent shadow-md rounded-xl p-10 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-[#CFDDF2] rounded-full flex items-center justify-center mb-6 text-[#5c7cfa]">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-900 text-2xl mb-4">Democratizing Access</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To democratize access to information by building a robust, user-friendly digital library that transcends geographical and economic boundaries. We strive to put a book in every hand and knowledge in every mind.
              </p>
            </article>
          </div>
        );

      case 'vision':
        return (
          <div className="animate-fadeIn space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Vision & Core Values</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="bg-white border border-transparent shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#CFDDF2] rounded-full flex items-center justify-center mb-4 text-[#5c7cfa]">
                  <span className="text-xl">👁️</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A world where every individual has free, instant access to the collective wisdom of humanity, fostering education and innovation globally.
                </p>
              </article>
              <article className="bg-white border border-transparent shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="w-12 h-12 bg-[#CFDDF2] rounded-full flex items-center justify-center mb-4 text-[#5c7cfa]">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">Core Values</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We prioritize open access, data privacy, community collaboration, and the meticulous preservation of digital artifacts.
                </p>
              </article>
            </div>
          </div>
        );

      case 'history':
        return (
          <div className="animate-fadeIn space-y-8">
             <h1 className="text-3xl font-bold text-gray-900">Our Journey</h1>
            <article className="bg-[#EFF6FF] border border-blue-100 shadow-md rounded-xl p-8">
              <div className="space-y-8 relative border-l-2 border-[#b5c7df] ml-3 pl-8">
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-[#5c7cfa]"></span>
                  <h4 className="text-lg font-bold text-gray-800">2020 - The Beginning</h4>
                  <p className="text-gray-600 mt-1">Aether started as a small university project to digitize local historical records.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-[#aebcd6]"></span>
                  <h4 className="text-lg font-bold text-gray-800">2022 - Expansion</h4>
                  <p className="text-gray-600 mt-1">We expanded our catalog to include public domain classic literature.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-[#aebcd6]"></span>
                  <h4 className="text-lg font-bold text-gray-800">2024 - Global Reach</h4>
                  <p className="text-gray-600 mt-1">Today, Aether serves millions of users worldwide, offering a modern interface.</p>
                </div>
              </div>
            </article>
          </div>
        );

      case 'team':
        return (
          <div className="animate-fadeIn space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Meet the Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100">
                        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                        <h3 className="font-bold text-gray-900">Team Member {item}</h3>
                        <p className="text-sm text-gray-500">Librarian / Developer</p>
                    </div>
                ))}
            </div>
          </div>
        );

      case 'contact':
        return (
           <div className="animate-fadeIn space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <div className="bg-white p-8 rounded-xl shadow-md ">
                <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                        <span className="text-gray-700">Full name</span>
                        <input type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 p-3" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Email address</span>
                        <input type="email" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 p-3" />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Message</span>
                        <textarea className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 p-3" rows={3}></textarea>
                    </label>
                    <button className="bg-[#5c7cfa] text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors">
                        Send Message
                    </button>
                </div>
            </div>
           </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row flex-1 overflow-hidden h-[calc(100vh-80px)] gap-6">
      
      <aside className="md:w-64 md:flex-shrink-0  py-8 pr-4   lg:block border-r border-gray-200/50">
        <nav className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left block px-4 py-3 text-lg transition-all duration-200 rounded-[20px] ${
                activeTab === item.id
                  ? 'font-medium shadow-sm bg-[#b5c7df] text-black translate-x-1'
                  : 'text-gray-800 hover:bg-white hover:bg-opacity-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-12 px-4">
          <div className="p-4 bg-[#e8e1d5] rounded-xl">
            <h4 className="font-bold text-gray-800 mb-2">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-3">
              Contact our support team for any inquiries regarding the library.
            </p>
            <button 
                onClick={() => setActiveTab('contact')}
                className="text-sm font-medium text-blue-700 hover:underline"
            >
                Contact Support
            </button>
          </div>
        </div>
      </aside>


      <main className="flex-1 ">
        <div className="py-8">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AboutPageMain;