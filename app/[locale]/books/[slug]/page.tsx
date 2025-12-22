import React from 'react'

const page = () => {
  return (
    <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-8 md:py-12 mt-[80px]">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                alt="The Silent Sea Chronicles Book Cover" 
                className="relative object-cover transform transition duration-500 hover:scale-[1.01]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB28jDN3mCdYcxtMgRbY68M47mV4Qiy8axYTHEk3OYcnWliLxbFtZAJXhDb4iz7BF8-lyO5NHWRSWe6Qyjkn2UXg3w7qAnWis3kQR9BoEE0QGMTC1h_WGmA_fSXQ0XNKb_M0EC_hW3XH_thtifQ5A9oJ_sBZDivl5C4IP8X3-8rsh1JqVI6k9r_UnfjDPbOMJnUs-3OjfWY9hJi8xOKBngmeFjqpPlz9m41_GRFpIpwxj77L6G3MpaS6zjjLtg7qEC8UKdRlm2xLjaN" // غير اللينك ده بصورة الكتاب الفعلية
                style={{ 
                  width: '380px', 
                  height: '550px', 
                  borderRadius: '5px', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
                  objectFit: 'cover' 
                }} 
              />
              <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-white/20 to-transparent pointer-events-none rounded-l-sm"></div>
            </div>
          </div>
          
          <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-center pt-4 md:pt-10 space-y-10">
            <div>
              <h1 className="text-3xl md:text-5xl uppercase leading-tight mb-2 tracking-tight text-[#4A72B2] font-black">
                The Silent Sea<br />Chronicles
              </h1>
              <div className="text-gray-600 space-y-1">
                <p className="text-lg"><span className="font-normal text-gray-500">Author:</span> <span className="text-gray-900">Elara Vance</span></p>
                <p className="text-sm"><span className="font-semibold text-gray-500">Category:</span> Science Fiction, Adventure</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-xl"><span className="font-bold text-gray-900">Status:</span> <span className="font-bold text-[#4CAF50]">Available</span></p>
              <p className="text-gray-500 text-sm">Price: $0.00 (Display Only)</p>
            </div>
            
            <div className="max-w-md w-full">
              <button className="w-full hover:bg-brand-blue-hover text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group bg-[#567BC0]">
                <svg className="h-6 w-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Sample
              </button>
            </div>
            
            <div className="prose prose-sm md:prose-base text-gray-700 max-w-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Full Description</h3>
              <p className="leading-relaxed">
                A gripping tale of exploration and mystery, The Silent Sea Chronicles follows a team of deep-sea researchers who uncover an ancient, submerged civilization. As they delve deeper, they realize they are not alone in the dark depths, and the secrets they find could change the world forever. A must-read for sci-fi enthusiasts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-1 text-sm text-gray-800 font-medium">
              <p><span className="font-bold">Pages Count:</span> 450</p>
              <p><span className="font-bold">Publish Year:</span> 2023</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page