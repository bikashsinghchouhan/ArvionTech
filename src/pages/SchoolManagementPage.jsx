// import React from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import '../csssection/ServicePage.css';

// // MODIFIED: Updated image imports to match your new filenames
// import heroImg from '../assets/service-school.png'; // Assuming the main hero image stays the same
// import featureProfilesImg from '../assets/School Management Page- image-1.png';
// import featureSchedulingImg from '../assets/School Management page-image2.jpeg';
// import featureGradesImg from '../assets/School Management page-image-3.png';
// import featureCommunicationImg from '../assets/School Management-page-image-4.png';
// import benefitSummaryImg from '../assets/School Management-page-benefits-image.png';

// const SchoolManagementPage = () => {
//   const detailedFeatures = [
//     { title: 'Comprehensive Student Profiles', description: 'Maintain a complete 360-degree view of every student, from initial admission and enrollment to academic progress, attendance records, and extracurricular activities. Our system provides a centralized, secure database, making it easy for administrators and teachers to access the information they need, when they need it.', image: featureProfilesImg },
//     { title: 'Automated Timetable & Scheduling', description: 'Effortlessly create, manage, and distribute complex academic schedules. Our intelligent timetabling tool helps you avoid conflicts, manage teacher allocations, and publish schedules directly to student and parent portals, saving countless hours of administrative work.', image: featureSchedulingImg },
//     { title: 'Integrated Grade & Exam Management', description: 'Streamline the entire examination process, from creating exam schedules to entering grades and generating detailed report cards. Our platform provides powerful analytics to track student performance over time, helping educators identify trends and provide targeted support.', image: featureGradesImg },
//     { title: 'Seamless Parent-Teacher Communication', description: 'Foster a strong school-home partnership with dedicated communication portals for parents, teachers, and students to share updates and feedback.', image: featureCommunicationImg },
//   ];
  
//   const benefits = [ 'Increase Administrative Efficiency', 'Enhance Parent-Teacher Collaboration', 'Improve Student Performance Tracking', 'Ensure Data Security and Compliance', 'Reduce Paperwork and Manual Errors' ];

//   return (
//     <div className="service-page">
//       <section className="service-hero" style={{ backgroundImage: `url(${heroImg})` }}>
//         <div className="hero-overlay">
//           <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>School Management System</motion.h1>
//           <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>A unified platform to streamline your institution's success.</motion.p>
//         </div>
//       </section>

//       <section className="service-intro">
//         <div className="service-container">
//           <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
//             <h2>Transforming Education Through Technology</h2>
//             <p>Our School Management ERP is a comprehensive solution designed to streamline every facet of your institution. From student admissions and attendance tracking to grade management and parent communication, our platform provides a centralized hub for all your data, empowering educators to focus on what matters most: teaching.</p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="detailed-features-section">
//         <div className="service-container">
//           <h2 className="section-title">A Closer Look at Our Features</h2>
//           {detailedFeatures.map((feature, index) => (
//             <div className="detailed-feature-row" key={index}>
//               <motion.div className="detailed-feature-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
//                 <h3>{feature.title}</h3>
//                 <p>{feature.description}</p>
//               </motion.div>
//               <motion.div className="detailed-feature-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
//                 <img src={feature.image} alt={feature.title} />
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="service-benefits-section">
//         <div className="service-container benefits-container">
//           <motion.div className="benefits-text" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
//             <h2>Unlock Key Benefits</h2>
//             <p>Implementing our solution provides tangible benefits that enhance every aspect of your institution's operations and community engagement.</p>
//             <ul>{benefits.map((benefit, index) => (<li key={index}>{benefit}</li>))}</ul>
//           </motion.div>
//           <motion.div className="benefits-image" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
//             <img src={benefitSummaryImg} alt="School Management Benefits" />
//           </motion.div>
//         </div>
//       </section>

//       <section className="service-cta">
//         <div className="service-container cta-container">
//           <h2>Ready to Streamline Your School's Operations?</h2>
//           <p>Let's discuss how Arvion Technologies can tailor a solution for your institution.</p>
//           <Link to="/contact" className="cta-button">Request a Demo <FaArrowRight /></Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SchoolManagementPage;
