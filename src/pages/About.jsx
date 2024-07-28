import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  React.useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-xl font-bold">NSS</a>
          <div className="space-x-4">
            <a href="/home" className="text-gray-300 hover:text-white">Home</a>
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
      About Us
    </h1>
    <p 
      className="text-lg font-bold" 
      style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }} 
      data-aos="fade-up" 
      data-aos-delay="200">
      Learn more about our mission and values
    </p>
  </div>
</header>

      <main className="container mx-auto py-16">
        {/* About NSS Section */}
        <section id="about-nss" className="mb-16" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">About NSS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Ministry of Youth Affairs and Sports of the Government of India. Popularly known as NSS, the scheme was launched in Gandhiji's Centenary year, 1969.
              </p>
              <p className="text-gray-700">
                The NSS is a voluntary association of young people in Colleges, Universities, and at +2 level working for a campus-community linkage.
              </p>
            </div>
            <div>
              <img src="https://nss.gov.in/sites/all/themes/youthaffair/images/nss-latest-banner.jpg" alt="NSS" className="w-full h-60 object-cover rounded-md mb-4" />
            </div>
          </div>
        </section>

        {/* Our Institution Section */}
        <section id="college-details" className="mb-16" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Our Institution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="https://mca.spit.ac.in/wp-content/uploads/2022/12/20221212_120147-scaled-e1670904222265-1024x463.jpg" alt="Institution" className="w-full h-100 object-cover rounded-md mb-4" />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Our institution is dedicated to fostering a community of service-oriented individuals. Through various programs and activities, we aim to cultivate a spirit of volunteerism and community engagement among our students.
              </p>
              <p className="text-gray-700 mb-4">
                We offer a variety of courses and extracurricular activities designed to promote personal and professional growth. Our faculty and staff are committed to providing a supportive and inclusive environment for all students.
              </p>
              <p className="text-gray-700">
                Join us in making a difference in the community and beyond through the National Service Scheme.
              </p>
            </div>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section id="vision-mission" className="mb-16" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
                </div>
                <h3 className="text-xl font-bold ml-4">Vision</h3>
              </div>
              <p className="text-gray-700">To build a network of educated, conscientious, and motivated youth who are committed to serving their community and nation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v6c0 5.25 3.14 9.74 7.92 11.45a11.19 11.19 0 009.15 0C18.86 22.74 22 18.25 22 13V7l-10-5zm4 15h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" /></svg>
                </div>
                <h3 className="text-xl font-bold ml-4">Mission</h3>
              </div>
              <p className="text-gray-700">To enable young people to develop their capacity to engage in constructive social work and community development through the National Service Scheme.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 p-4 mt-16 text-center text-gray-300">
        <p>&copy; 2024 NSS. All rights reserved.</p>
      </footer>
    </>
  );
}

export default About;
