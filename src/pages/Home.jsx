import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  React.useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <>
      <div className="App">
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#" className="text-white text-xl font-bold">NSS</a>
            <div className="space-x-4">
              <a href="#home" className="text-gray-300 hover:text-white">Home</a>
              <a href="/about" className="text-gray-300 hover:text-white">About</a>
              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </nav>
      <header 
  className="relative h-96 text-white flex items-center justify-center" 
  style={{ 
    backgroundImage: 'url(https://yas.tripura.gov.in/sites/default/files/inline-images/nss.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}>
  <div 
    className="absolute inset-0 bg-black opacity-50" 
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
  </div>
  <div className="relative text-center">
    <h1 
      className="text-5xl font-extrabold mb-4" 
      style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} 
      data-aos="fade-up">
      National Service Scheme (NSS)
    </h1>
    <p 
      className="text-lg font-bold" 
      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} 
      data-aos="fade-up" 
      data-aos-delay="200">
      Empowering youth through community service
    </p>
  </div>
</header>


<main className="container mx-auto py-16">
  {/* Objectives Section */}
  <section id="objectives" className="mb-16" data-aos="fade-right">
    <h2 className="text-3xl font-bold mb-4">Objectives</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="./assets/Objectives1.jpg" alt="Understand the Community" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Understand the community in which they work.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Understand the Community</h3>
        <p className="text-gray-700">Understand the community in which they work.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://copdei.extension.org/wp-content/uploads/2019/06/authenticitycommunityfeature.jpg" alt="Self and Community" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Understand themselves in relation to their community.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Self and Community</h3>
        <p className="text-gray-700">Understand themselves in relation to their community.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://static.jobscan.co/blog/uploads/Problem-Solving-Skills.jpg" alt="Problem-Solving" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Identify the needs and problems of the community and involve them in problem-solving.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Problem-Solving</h3>
        <p className="text-gray-700">Identify the needs and problems of the community and involve them in problem-solving.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://communityrecmag.com/wp-content/uploads/2023/01/shutterstock_2034360194-750x375.jpg" alt="Social Responsibility" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Develop among themselves a sense of social and civic responsibility.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Social Responsibility</h3>
        <p className="text-gray-700">Develop among themselves a sense of social and civic responsibility.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMQsyWfE9hBQRRY_JPEvmXM1Mvv7kLgKU6w&s" alt="Practical Solutions" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Utilize their knowledge in finding practical solutions to individual and community problems.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Practical Solutions</h3>
        <p className="text-gray-700">Utilize their knowledge in finding practical solutions to individual and community problems.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://emeritus.org/in/wp-content/uploads/sites/3/2022/06/what-is-leadership.jpg.optimal.jpg" alt="Leadership" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Acquire leadership qualities and democratic attitudes.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Leadership</h3>
        <p className="text-gray-700">Acquire leadership qualities and democratic attitudes.</p>
      </div>
    </div>
  </section>

  {/* Feats Section */}
  <section id="feats" className="mb-16" data-aos="fade-left">
    <h2 className="text-3xl font-bold mb-4">Feats</h2>
    <p className="text-gray-700 mb-4">NSS has achieved numerous feats over the years, including:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://southavenuemall.com/wp-content/uploads/2018/03/185063-bdonation.jpg" alt="Blood Donation Camp" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Organizing blood donation camps to save lives.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Blood Donation Camps</h3>
        <p className="text-gray-700">Organizing blood donation camps to save lives.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://www.green.earth/hubfs/Planting%20trees.jpg" alt="Tree Plantation Drives" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Conducting tree plantation drives to promote a green environment.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Tree Plantation Drives</h3>
        <p className="text-gray-700">Conducting tree plantation drives to promote a green environment.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://www.oakridge.in/wp-content/uploads/2022/04/Health-Camp-41.jpg" alt="Health Camps" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Setting up health camps for underprivileged communities.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Health Camps</h3>
        <p className="text-gray-700">Setting up health camps for underprivileged communities.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUX3Hgk5YNWGkHBqUDxcPV0ll2YxgOkxzTQ&s" alt="Literacy Programs" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Implementing literacy programs to educate the underprivileged.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Literacy Programs</h3>
        <p className="text-gray-700">Implementing literacy programs to educate the underprivileged.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://img.etimg.com/photo/msid-69702641,imgsize-261019/1.jpg" alt="Cleanliness Drives" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Organizing cleanliness drives to promote hygiene and sanitation.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Cleanliness Drives</h3>
        <p className="text-gray-700">Organizing cleanliness drives to promote hygiene and sanitation.</p>
      </div>
      <div className="relative group bg-white p-4 rounded-lg shadow-lg">
        <img src="https://www.habitatforhumanity.org.uk/wp-content/uploads/2017/10/natural-disaster-relief-charity-response-emergency.jpg" alt="Disaster Relief" className="w-full h-40 object-contain rounded-md mb-4" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center rounded-md transition-opacity duration-300">
          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">Providing relief and assistance during natural disasters.</p>
        </div>
        <h3 className="text-xl font-bold mb-2">Disaster Relief</h3>
        <p className="text-gray-700">Providing relief and assistance during natural disasters.</p>
      </div>
    </div>
  </section>



       {/* Statistics Section */}
  <section id="statistics" className="mb-16" data-aos="fade-right">
    <h2 className="text-3xl font-bold mb-4">Statistics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="p-4 bg-blue-100 rounded-full">
          <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold mb-2">3.8 million Volunteers</h3>
          <p className="text-gray-700">Over 3.8 million volunteers nationwide.</p>
        </div>
      </div>
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="p-4 bg-red-100 rounded-full">
          <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M13 7h-2v6h6v-2h-4z" /><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold mb-2">50,000 Blood Donation Camps</h3>
          <p className="text-gray-700">More than 50,000 blood donation camps organized.</p>
        </div>
      </div>
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="p-4 bg-green-100 rounded-full">
          <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold mb-2">2 million Trees Planted</h3>
          <p className="text-gray-700">Planted over 2 million trees.</p>
        </div>
      </div>
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="p-4 bg-yellow-100 rounded-full">
          <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold mb-2">1,000+ Health Camps</h3>
          <p className="text-gray-700">Conducted 1,000+ health awareness camps.</p>
        </div>
      </div>
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="p-4 bg-purple-100 rounded-full">
          <svg className="w-12 h-12 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold mb-2">500+ Disaster Relief Operations</h3>
          <p className="text-gray-700">Engaged in 500+ disaster relief operations.</p>
        </div>
      </div>
      <div className="flex items-center bg-white p-6 rounded-lg shadow-lg">
        <div className="p-4 bg-pink-100 rounded-full">
          <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold mb-2">Nationwide Impact</h3>
          <p className="text-gray-700">NSS has a significant impact nationwide, contributing to various community service activities.</p>
        </div>
      </div>
    </div>
  </section>
           
          {/* Testimonials Section */}
  <section id="testimonials" className="mb-16" data-aos="fade-up">
    <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
    <div className="space-y-8">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-blue-100 opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <svg className="w-8 h-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
          <p className="text-gray-700 italic mb-2">"NSS has given me an opportunity to serve the community and develop leadership skills."</p>
          <h3 className="text-xl font-bold">Raj Sharma</h3>
          <p className="text-gray-600">NSS Volunteer, 2021</p>
        </div>
      </div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-green-100 opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <svg className="w-8 h-8 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
          <p className="text-gray-700 italic mb-2">"The activities organized by NSS have been truly impactful and fulfilling."</p>
          <h3 className="text-xl font-bold">Riya Patel</h3>
          <p className="text-gray-600">NSS Volunteer, 2019</p>
        </div>
      </div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-100 opacity-0 transition-opacity duration-300 group-hover:opacity-50 rounded-lg"></div>
        <div className="relative z-10">
          <svg className="w-8 h-8 text-yellow-500 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
          <p className="text-gray-700 italic mb-2">"Being a part of NSS has been a life-changing experience for me."</p>
          <h3 className="text-xl font-bold">Naman Das</h3>
          <p className="text-gray-600">NSS Volunteer, 2018</p>
        </div>
      </div>
    </div>
  </section>
         </main>

         <footer className="bg-gray-800 p-4 mt-16 text-center text-gray-300">
           <p>&copy; 2024 NSS SPIT. All rights reserved.</p>
         </footer>
       </div>

      <style>
        {`
          .group:hover .group-hover\\:bg-opacity-75 {
            background-opacity: 0.75;
          }
          .group:hover .group-hover\\:opacity-100 {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
}

export default Home;


