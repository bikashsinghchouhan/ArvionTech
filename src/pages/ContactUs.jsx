import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaArrowRight, FaArrowLeft, FaBriefcase, FaPaperPlane, FaCheckCircle, FaWhatsapp, FaHome, FaCalendarAlt } from 'react-icons/fa';
import '../csssection/ContactUs.css';
import { FaSquarePhone, FaSquarePhoneFlip } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import { pageConfig } from '../configurations/SchoolManagementConfig';

const ContactUs = ({ isSinglePage }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '',
    services: [], studentRange: '', schoolPlan: '', outsourcingTeamSize: '', registrationType: '', accountingVolume: '',
    date: '', timeSlot: '', privacyPolicy: false,
  });

  // State for validation
  const [fieldErrors, setFieldErrors] = useState({});

  const [error, setError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [today, setToday] = useState('');
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    setToday(`${year}-${month}-${day}`);
  }, []);

  // --- Validation Logic ---

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

    // Clear error for this field immediately when user types
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  // Handle Field Blur (When user leaves a field)
  const handleBlur = (e) => {
    const { name, value, required } = e.target;
    // If field is empty and required, mark as error
    if (!value && (name === 'name' || name === 'email' || name === 'phone')) {
      setFieldErrors(prev => ({ ...prev, [name]: true }));
    }
    if (name === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFieldErrors(prev => ({ ...prev, email: true }));
    }
    if (name === 'phone' && value && !/^[0-9]{10}$/.test(value)) {
      setFieldErrors(prev => ({ ...prev, phone: true }));
    }
    if (name === 'company' && selectedService && !value) {
      setFieldErrors(prev => ({ ...prev, [name]: true }));
    }
  };

  // Check if Step 1 is completely valid to enable button
  const isStep1Valid = () => {
    const basicFields = formData.name &&
      formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.phone && /^[0-9]{10}$/.test(formData.phone) &&
      selectedService;
    const companyValid = selectedService ? formData.company : true; // Company required if service selected
    return basicFields && companyValid;
  };

  // Check if Step 3 is completely valid to enable button
  const isStep3Valid = () => {
    return formData.date && formData.timeSlot && formData.privacyPolicy;
  };

  const handleNext = () => {
    // Double check validation before moving
    if (step === 1 && !isStep1Valid()) {
      setError("Please fill all fields.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isStep3Valid()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      // 1. Parameters for Admin Lead Notification
      const templateParams = {
        Lead_Summary: `Hello! ${formData.name} from ${formData.company || 'a company'} has just submitted the form. They want to know more about your ${selectedService} services and have requested a meeting on ${formData.date} at ${formData.timeSlot}.`,
        Name: formData.name,
        Email: formData.email,
        to_name: formData.name,
        to_email: formData.email,
        reply_to: formData.email,
        Phone: formData.phone || "Not provided",
        Company: formData.company || "N/A",
        Main_Service: selectedService,
        Interested_Plan: formData.schoolPlan || "N/A",
        Additional_Services: formData.services.join(", ") || "None",
        Student_Range: formData.studentRange || "N/A",
        Outsourcing_Team_Size: formData.outsourcingTeamSize || "N/A",
        Registration_Type: formData.registrationType || "N/A",
        Accounting_Volume: formData.accountingVolume || "N/A",
        Meeting_Date: formData.date,
        Meeting_Time: formData.timeSlot
      };

      // Send lead notification to Arvion Team - email.js
      const response = await emailjs.send(
        'service_mkucjek',  // Service ID
        'template_u3wagyg', // Admin Notification Template ID
        templateParams,
        'vkUKK6w4C-sc4pRUo' // Public Key
      );

      // 2. Send Professional Thank You / Confirmation Email to the user who filled the form
      const autoReplyParams = {
        to_email: formData.email,
        email: formData.email,
        Email: formData.email,
        reply_to: formData.email,
        to: formData.email,
        user_email: formData.email,
        to_name: formData.name,
        name: formData.name,
        Name: formData.name,
        Main_Service: selectedService,
        Meeting_Date: formData.date,
        Meeting_Time: formData.timeSlot,
        Company: formData.company || "your organization",
        Subject: "Thank You for Reaching Out to Arvion Technologies - We'll Be in Touch Shortly!",
        Message: `Dear ${formData.name},\n\nThank you for contacting Arvion Technologies! We have received your inquiry regarding our ${selectedService} solutions.\n\nOur team has noted your requested consultation for ${formData.date} at ${formData.timeSlot}. One of our domain specialists will review your requirements and get in touch with you shortly to confirm your session.\n\nIf you have any urgent questions or need immediate assistance, please feel free to reply directly to this email or call us at +91 9535764655.\n\nWarm regards,\nClient Success Team\nArvion Technologies Pvt Ltd\nwww.arviontechnologies.com`
      };

      try {
        // Sends the confirmation email to the user using your Auto-Reply template
        const autoReplyResponse = await emailjs.send(
          'service_mkucjek',
          'template_oazqn2n',
          autoReplyParams,
          'vkUKK6w4C-sc4pRUo'
        );
        console.log("Auto-reply sent successfully:", autoReplyResponse);
      } catch (autoReplyErr) {
        console.error("Auto-reply error details from EmailJS:", autoReplyErr);
      }

      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send submission");
      }
    } catch (err) {
      console.error("Error submitting form: ", err);
      alert("There was an error submitting your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newServices = checked ? [...prev.services, value] : prev.services.filter((s) => s !== value);
      const updatedData = { ...prev, services: newServices };
      if (!checked) {
        if (value === 'School Management') {
          updatedData.studentRange = '';
          updatedData.schoolPlan = '';
        }
        if (value === 'Outsourcing') updatedData.outsourcingTeamSize = '';
        if (value === 'Statutory Registrations') updatedData.registrationType = '';
        if (value === 'Accounting') updatedData.accountingVolume = '';
      }
      return updatedData;
    });
  };

  const stepContent = [
    { title: "Let's Get Acquainted", description: "Start by telling us a bit about yourself and your company." },
    { title: "Define Your Needs", description: "Select the services you're interested in to help us understand your requirements." },
    { title: "Schedule a Consultation", description: "Choose a preferred date and time for us to connect and discuss your goals." },
  ];

  // ---------------- RENDER SUCCESS VIEW ----------------
  if (isSubmitted) {
    return (
      <div className={isSinglePage ? "py-16 bg-[#f8f9fa] w-full flex items-center justify-center box-border px-4" : "contact-page-v2"}>
        <motion.div className="success-message" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <FaCheckCircle className="success-icon" />
          <h2>Thank You!</h2>
          <p>Your request has been submitted successfully. Our team will get back to you shortly.</p>

          {/* Requirement 3: Go to Home Button */}
          <Link to="/" className="home-btn">
            <FaHome /> Go to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={isSinglePage ? "relative overflow-hidden pt-10 pb-12 sm:pt-14 sm:pb-20 bg-gradient-to-b from-[#f3f7fd] to-white w-full flex flex-col items-center justify-center box-border px-4" : "tw-contact-page min-h-screen bg-[#f0f2f5] p-6 pt-[100px] sm:p-10 sm:pt-[120px] flex flex-col items-center justify-center box-border"}>

      {!isSinglePage && (
        <h1 className="sr-only">Contact Arvion Technologies – Book a Free Consultation</h1>
      )}

      {isSinglePage && (
        <div className="text-center mb-8 md:mb-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <span aria-hidden="true" className="w-8 sm:w-12 h-[2px] rounded-full bg-[#f7941d]/80" />
              <span className="px-4 sm:px-5 py-1.5 rounded-full bg-[#ffe9d6] text-[#e8730c] text-[12px] sm:text-[14px] font-extrabold uppercase tracking-[0.1em]">
                Contact Us
              </span>
              <span aria-hidden="true" className="w-8 sm:w-12 h-[2px] rounded-full bg-[#f7941d]/80" />
            </div>
            <h2 className="mt-4 text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-tight leading-tight text-[#0b1f4d]">
              Get in{' '}
              <span className="relative inline-block text-[#f2700f]">
                Touch
                <svg aria-hidden="true" viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute left-[6%] -bottom-2 sm:-bottom-3 w-[94%] h-2.5 sm:h-3.5 text-[#f2700f]">
                  <path d="M2 11 C 60 3, 140 2, 198 7" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-slate-600 leading-relaxed text-[15px] sm:text-[18px]"
          >
            Ready to transform your operations? Reach out to us for a tailored consultation and discover how Arvion Technologies can drive your growth.
          </motion.p>
        </div>
      )}

      <div className={`tw-contact-container grid grid-cols-1 min-[992px]:grid-cols-[1fr_1.1fr] max-w-[1240px] w-full bg-white rounded-3xl border border-slate-200/70 shadow-[0_30px_60px_-30px_rgba(11,42,107,.35)] overflow-hidden animate-fadeIn ${isSinglePage ? 'min-h-[500px]' : ''}`}>

        {/* Left Panel */}
        <div className="tw-contact-left-panel relative overflow-hidden hidden min-[992px]:flex min-[992px]:flex-col min-[992px]:justify-center bg-gradient-to-br from-[#0e3a8c] via-[#0b2f78] to-[#082262] text-white p-10 lg:p-12">
          {/* orange corner shapes */}
          <svg aria-hidden="true" className="pointer-events-none absolute top-0 right-0 w-24 h-28" viewBox="0 0 100 120" preserveAspectRatio="none">
            <path d="M40 0 H100 V120 C100 70 80 30 40 0 Z" fill="#f7861c" />
          </svg>
          <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 w-[58%] h-20" viewBox="0 0 300 80" preserveAspectRatio="none">
            <path d="M0 0 C40 40 120 60 300 80 H0 Z" fill="#f7861c" />
          </svg>
          {/* building outline */}
          <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-[62%] h-auto opacity-[0.18]" viewBox="0 0 320 200" fill="none" stroke="#ffffff" strokeWidth="2">
            <path d="M0 196 C80 172 200 168 320 178" />
            <rect x="150" y="40" width="80" height="140" />
            <rect x="230" y="70" width="60" height="110" />
            <path d="M150 40 L190 20 L230 40" />
            {[60, 85, 110, 135].map((y) => [160, 178, 196, 214].map((x) => <rect key={x + '-' + y} x={x} y={y} width="10" height="14" />))}
            {[90, 115, 140].map((y) => [242, 262].map((x) => <rect key={x + '-' + y} x={x} y={y} width="12" height="14" />))}
            <circle cx="110" cy="160" r="18" /><path d="M110 178 V196" />
            <circle cx="300" cy="158" r="14" /><path d="M300 172 V190" />
          </svg>

          <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative">
            <div className="tw-progress-bar flex items-center mb-8 max-w-sm">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`tw-progress-step w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-base transition-all duration-300 ${step >= num ? 'bg-gradient-to-b from-[#ffa94d] to-[#f2700f] text-white shadow-lg shadow-orange-900/30' : 'bg-white/20 text-white'}`}>{num}</div>
                  {num < 3 && <div className={`tw-progress-line flex-grow h-[3px] rounded-full transition-all duration-300 ${step > num ? 'bg-[#f7941d]' : 'bg-white/25'}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-[30px] lg:text-[34px] font-extrabold mb-3 leading-tight text-white">{stepContent[step - 1].title}</h2>
            <p className="text-[16px] leading-[1.6] text-white/85">{stepContent[step - 1].description}</p>
            <div className="tw-contact-info-block mt-8 pt-7 border-t border-white/20 text-white">
              <p className="font-extrabold text-[13px] mb-5 uppercase tracking-[0.14em] text-white">Or contact us directly:</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:sales@arviontechnologies.com" className="group text-white hover:text-[#ffc08a] transition-colors flex items-center gap-4 text-[16px]" title="Email Us">
                  <span className="w-11 h-11 rounded-lg bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors"><FaEnvelope className="text-lg" /></span>
                  <span>sales@arviontechnologies.com</span>
                </a>
                <a href="tel:+919535764655" className="group text-white hover:text-[#ffc08a] transition-colors flex items-center gap-4 text-[16px]" title="Call Us">
                  <span className="w-11 h-11 rounded-lg bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors"><FaSquarePhoneFlip className="text-lg" /></span>
                  <span>+91 9535764655</span>
                </a>
                <a href="https://wa.me/919535764655" target="_blank" rel="noopener noreferrer" className="group text-white hover:text-[#ffc08a] transition-colors flex items-center gap-4 text-[16px]" title="WhatsApp Us">
                  <span className="w-11 h-11 rounded-lg bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors"><FaWhatsapp className="text-lg text-[#4ade80]" /></span>
                  <span>+91 9535764655</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className={`tw-contact-right-panel p-0 min-[992px]:p-10 lg:p-12 w-full ${isSinglePage ? 'h-full flex flex-col justify-center' : ''}`}>
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="tw-mobile-form-header block p-6 bg-gradient-to-br from-[#0e3a8c] to-[#082262] min-[992px]:hidden text-white">
            <div className="tw-progress-bar flex items-center mb-4 max-w-xs mx-auto">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`tw-progress-step w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${step >= num ? 'bg-[#f2700f] text-white' : 'bg-white/25 text-white'}`}>{num}</div>
                  {num < 3 && <div className={`tw-progress-line flex-grow h-[2px] transition-all duration-300 ${step > num ? 'bg-[#f7941d]' : 'bg-white/25'}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-lg font-extrabold m-0 text-center uppercase tracking-wider text-white">{stepContent[step - 1].title}</h2>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="tw-form-step p-6 min-[992px]:p-0 flex flex-col">
                <div className="flex items-center gap-4 mb-7">
                  <span className="w-14 h-14 rounded-2xl bg-[#fff1e3] text-[#f2700f] flex items-center justify-center flex-shrink-0"><FaUser className="text-xl" /></span>
                  <div>
                    <h3 className="text-[20px] sm:text-[26px] font-extrabold text-[#0b1f4d] leading-tight">Your Contact Information</h3>
                    <span aria-hidden="true" className="mt-2 block w-16 h-[3px] rounded-full bg-[#f2700f]" />
                  </div>
                </div>

                {/* Name Input with Error Styling */}
                <div className="tw-input-group relative mb-5">
                  <label className="block text-[12px] font-extrabold uppercase tracking-wider text-[#0b1f4d] mb-2">Full Name <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm z-[1]">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      className={`w-full pl-11 pr-3 py-3 border rounded-xl text-[15px] bg-white transition-all duration-300 focus:outline-none focus:border-[#ff7f32] focus:ring-4 focus:ring-orange-100 ${fieldErrors.name ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#d5dbe5]'}`}
                      placeholder="e.g., John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                {/* Service Select with Error Styling */}
                <div className="tw-input-group relative mb-5">
                  <label className="block text-[12px] font-extrabold uppercase tracking-wider text-[#0b1f4d] mb-2">Service <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm z-[1]">
                      <FaBriefcase />
                    </div>
                    <select
                      className={`tw-select-input w-full pl-11 pr-3 py-3 border rounded-xl text-[15px] bg-white transition-all duration-300 focus:outline-none focus:border-[#ff7f32] focus:ring-4 focus:ring-orange-100 ${fieldErrors.selectedService ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#d5dbe5]'}`}
                      value={selectedService}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSelectedService(value);
                        setFieldErrors(prev => ({ ...prev, selectedService: false })); // Clear error
                        setFormData((prev) => ({ ...prev, company: "" }));
                      }}
                    >
                      <option value="">-- Choose a Service --</option>
                      <option value="School Management Service">School Management Service</option>
                      <option value="Payroll Outsourcing">Payroll Outsourcing</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Statuary Registration">Statuary Registration</option>
                    </select>
                  </div>
                </div>

                {/* Company Name (Conditional) with Error Styling */}
                {selectedService && (
                  <div className="tw-input-group relative mb-5">
                    <label className="block text-[12px] font-extrabold uppercase tracking-wider text-[#0b1f4d] mb-2">
                      {selectedService === "School Management Service" ? "School Name" : "Company Name"}{" "}
                      <span className="text-[#e53e3e] ml-[1px]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm z-[1]">
                        <FaBuilding />
                      </div>
                      <input
                        type="text"
                        name="company"
                        className={`w-full pl-11 pr-3 py-3 border rounded-xl text-[15px] bg-white transition-all duration-300 focus:outline-none focus:border-[#ff7f32] focus:ring-4 focus:ring-orange-100 ${fieldErrors.company ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#d5dbe5]'}`}
                        placeholder={selectedService === "School Management Service" ? "e.g., Bright Future School" : "e.g., Arvion Technologies"}
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                )}



                <div className="tw-input-group relative mb-5">
                  <label className="block text-[12px] font-extrabold uppercase tracking-wider text-[#0b1f4d] mb-2">Phone Number <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm z-[1]">
                      {/* <FaPhone /> */}
                      <FaSquarePhone size={18} />
                    </div>
                    <div className="absolute left-[40px] top-1/2 -translate-y-1/2 text-slate-700 text-[15px] font-bold z-[1] select-none border-r border-[#d5dbe5] pr-2.5">
                      +91
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="9876543210"
                      maxLength="10"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full pl-[84px] pr-3 py-3 border rounded-xl text-[15px] bg-white transition-all duration-300 focus:outline-none focus:border-[#ff7f32] focus:ring-4 focus:ring-orange-100 ${fieldErrors.phone ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#d5dbe5]'}`}
                    />
                  </div>
                  {fieldErrors.phone && formData.phone && <p className="text-[10px] text-[#ff4d4d] mt-1 font-semibold">Please enter a valid 10-digit number</p>}
                </div>

                <div className="tw-input-group relative mb-5">
                  <label className="block text-[12px] font-extrabold uppercase tracking-wider text-[#0b1f4d] mb-2">Work Email <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm z-[1]">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className={`w-full pl-11 pr-3 py-3 border rounded-xl text-[15px] bg-white transition-all duration-300 focus:outline-none focus:border-[#ff7f32] focus:ring-4 focus:ring-orange-100 ${fieldErrors.email ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#d5dbe5]'}`}
                      placeholder="e.g., john.doe@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {fieldErrors.email && formData.email && <p className="text-[10px] text-[#ff4d4d] mt-1 font-semibold">Please enter a valid email address</p>}
                </div>

                {error && <p className="error-message text-[#ff4d4d] text-xs mt-[-5px] mb-4 font-semibold">{error}</p>}

                {/* Next Button */}
                <button
                  className="tw-nav-btn px-7 py-3.5 rounded-xl font-bold text-[16px] transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-b from-[#ff8a3d] to-[#f2700f] text-white self-end hover:brightness-105 shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,127,50,0.2)] disabled:bg-[#e0e0e0] disabled:text-[#888] disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none disabled:shadow-none cursor-pointer"
                  onClick={handleNext}
                  disabled={!isStep1Valid()}
                >
                  Next Step <FaArrowRight />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="tw-form-step p-6 min-[992px]:p-0 flex flex-col">
                <div className="flex items-center gap-4 mb-7">
                  <span className="w-14 h-14 rounded-2xl bg-[#fff1e3] text-[#f2700f] flex items-center justify-center flex-shrink-0"><FaBriefcase className="text-xl" /></span>
                  <div>
                    <h3 className="text-[20px] sm:text-[26px] font-extrabold text-[#0b1f4d] leading-tight">Which services are you interested in?</h3>
                    <span aria-hidden="true" className="mt-2 block w-16 h-[3px] rounded-full bg-[#f2700f]" />
                  </div>
                </div>
                <div className="tw-checkbox-group flex flex-col gap-3">
                  <label className="flex items-center gap-2 text-sm cursor-pointer text-[#333] font-semibold"><input type="checkbox" value="School Management" onChange={handleCheckboxChange} checked={formData.services.includes('School Management')} className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-[#ddd] rounded cursor-pointer" /> School Management</label>
                  <AnimatePresence>
                    {formData.services.includes('School Management') && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="tw-sub-options pl-[20px] mt-1.5 border-l-2 border-[#ffede0] overflow-hidden flex flex-col gap-3 pb-2">
                        <div>
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Interested Plan</h4>
                          <select name="schoolPlan" value={formData.schoolPlan} onChange={handleChange} className="tw-select-input w-full p-2 border border-[#ddd] rounded-lg text-xs focus:outline-none focus:border-[#ff7f32]">
                            <option value="">Select a plan</option>
                            {pageConfig.plans.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
                          </select>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Number of Students</h4>
                          <select name="studentRange" value={formData.studentRange} onChange={handleChange} className="tw-select-input w-full p-2 border border-[#ddd] rounded-lg text-xs focus:outline-none focus:border-[#ff7f32]">
                            <option value="">Select a range</option>
                            <option value="1-200">1-200</option>
                            <option value="201-500">201-500</option>
                            <option value="501-1000">501-1000</option>
                            <option value="1000+">1000+</option>
                          </select>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <label className="flex items-center gap-2 text-sm cursor-pointer text-[#333] font-semibold"><input type="checkbox" value="Outsourcing" onChange={handleCheckboxChange} checked={formData.services.includes('Outsourcing')} className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-[#ddd] rounded cursor-pointer" /> Payroll Outsourcing</label>
                  <AnimatePresence>{formData.services.includes('Outsourcing') && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="tw-sub-options pl-[20px] mt-1.5 border-l-2 border-[#ffede0] overflow-hidden"><h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Number of Roles to Fill</h4><select name="outsourcingTeamSize" value={formData.outsourcingTeamSize} onChange={handleChange} className="tw-select-input w-full p-2 border border-[#ddd] rounded-lg text-xs focus:outline-none focus:border-[#ff7f32]"><option value="">Select a number</option><option value="1-5">1-5 Roles</option><option value="6-15">6-15 Roles</option><option value="15+">15+ Roles</option></select></motion.div>)}</AnimatePresence>

                  <label className="flex items-center gap-2 text-sm cursor-pointer text-[#333] font-semibold"><input type="checkbox" value="Statutory Registrations" onChange={handleCheckboxChange} checked={formData.services.includes('Statutory Registrations')} className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-[#ddd] rounded cursor-pointer" /> Statutory Registrations</label>
                  <AnimatePresence>{formData.services.includes('Statutory Registrations') && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="tw-sub-options pl-[20px] mt-1.5 border-l-2 border-[#ffede0] overflow-hidden"><h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Type of Entity</h4><select name="registrationType" value={formData.registrationType} onChange={handleChange} className="tw-select-input w-full p-2 border border-[#ddd] rounded-lg text-xs focus:outline-none focus:border-[#ff7f32]"><option value="">Select a type</option><option value="New Company">New Company</option><option value="Existing Company">Existing Company</option><option value="Sole Proprietorship">Sole Proprietorship</option></select></motion.div>)}</AnimatePresence>

                  <label className="flex items-center gap-2 text-sm cursor-pointer text-[#333] font-semibold"><input type="checkbox" value="Accounting" onChange={handleCheckboxChange} checked={formData.services.includes('Accounting')} className="w-4 h-4 text-orange-600 focus:ring-orange-500 border-[#ddd] rounded cursor-pointer" /> Accounting Services</label>
                  <AnimatePresence>{formData.services.includes('Accounting') && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="tw-sub-options pl-[20px] mt-1.5 border-l-2 border-[#ffede0] overflow-hidden"><h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Monthly Transaction Volume</h4><select name="accountingVolume" value={formData.accountingVolume} onChange={handleChange} className="tw-select-input w-full p-2 border border-[#ddd] rounded-lg text-xs focus:outline-none focus:border-[#ff7f32]"><option value="">Select a volume</option><option value="<100 font-semibold">Under 100</option><option value="101-500">101-500</option><option value="500+">Over 500</option></select></motion.div>)}</AnimatePresence>
                </div>

                <div className="form-nav-buttons flex justify-between mt-8">
                  <button className="tw-nav-btn bg-white border border-[#d5dbe5] text-[#0b1f4d] px-6 py-3.5 rounded-xl font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#dee2e6] cursor-pointer" onClick={handlePrev}><FaArrowLeft /> Back</button>
                  <button className="tw-nav-btn bg-gradient-to-b from-[#ff8a3d] to-[#f2700f] text-white px-7 py-3.5 rounded-xl font-bold text-[16px] shadow-lg shadow-orange-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#e96e25] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,127,50,0.2)] cursor-pointer" onClick={handleNext}>Next Step <FaArrowRight /></button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="tw-form-step p-6 min-[992px]:p-0 flex flex-col">
                <div className="flex items-center gap-4 mb-7">
                  <span className="w-14 h-14 rounded-2xl bg-[#fff1e3] text-[#f2700f] flex items-center justify-center flex-shrink-0"><FaCalendarAlt className="text-xl" /></span>
                  <div>
                    <h3 className="text-[20px] sm:text-[26px] font-extrabold text-[#0b1f4d] leading-tight">Book a Preferred Date &amp; Time</h3>
                    <span aria-hidden="true" className="mt-2 block w-16 h-[3px] rounded-full bg-[#f2700f]" />
                  </div>
                </div>
                <p className="step-description text-xs text-[#555] mb-4 leading-relaxed font-semibold">Select a date and a time slot that works best for you. We will confirm the final meeting details via email.</p>

                <div className="mb-4">
                  <label className="block text-[12px] font-extrabold uppercase tracking-wider text-[#0b1f4d] mb-2">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`date-input w-full px-3 py-3 border rounded-xl text-[15px] bg-white font-sans transition-all duration-300 focus:outline-none focus:border-[#ff7f32] ${!formData.date && fieldErrors.date ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#d5dbe5]'}`}
                    min={today}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-[12px] font-extrabold uppercase tracking-wider text-[#0b1f4d] mb-2">Preferred Time to Call</label>
                  <input
                    type="text"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    placeholder="e.g., 10:00 AM - 11:00 AM"
                    className="w-full px-3 py-3 border border-[#d5dbe5] rounded-xl text-[15px] bg-white font-sans transition-all duration-300 focus:outline-none focus:border-[#ff7f32]"
                  />
                </div>

                <div className="privacy-policy-group flex items-start gap-2 mt-4 mb-4">
                  <input type="checkbox" id="privacyPolicy" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} className="mt-0.5 w-4 h-4 text-orange-600 focus:ring-orange-500 border-[#ddd] rounded cursor-pointer" />
                  <label htmlFor="privacyPolicy" className="text-[11px] text-slate-500 leading-relaxed font-semibold">I agree to receive email updates and promotional offers. I understand I can unsubscribe at any time. Please read our <Link to="/privacy-policy" target="_blank" className="text-[#ff7f32] font-bold no-underline hover:underline">Privacy Policy</Link>.</label>
                </div>

                <div className="form-nav-buttons flex justify-between mt-8">
                  <button className="tw-nav-btn bg-white border border-[#d5dbe5] text-[#0b1f4d] px-6 py-3.5 rounded-xl font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#dee2e6] cursor-pointer" onClick={handlePrev}><FaArrowLeft /> Back</button>

                  <button
                    className="tw-nav-btn bg-gradient-to-b from-[#ff8a3d] to-[#f2700f] text-white px-7 py-3.5 rounded-xl font-bold text-[16px] shadow-lg shadow-orange-500/25 transition-all duration-300 hover:bg-[#e96e25] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,127,50,0.2)] disabled:bg-[#e0e0e0] disabled:text-[#888] disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none disabled:shadow-none cursor-pointer"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isStep3Valid()}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Footer (Hidden on Desktop) */}
          <div className="tw-mobile-form-footer block p-6 bg-gradient-to-br from-[#0e3a8c] to-[#082262] text-center min-[992px]:hidden">
            <p className="font-extrabold text-sm mb-4 uppercase tracking-widest text-white">Or contact us directly:</p>
            <div className="flex flex-col items-center gap-4">
              <a href="mailto:sales@arviontechnologies.com" className="text-white hover:text-orange-200 transition-colors flex items-center gap-3 text-base" title="Email Us">
                <FaEnvelope className="text-xl flex-shrink-0" />
                <span>sales@arviontechnologies.com</span>
              </a>
              <a href="tel:+919535764655" className="text-white hover:text-orange-200 transition-colors flex items-center gap-3 text-base" title="Call Us">
                <FaSquarePhoneFlip className="text-xl flex-shrink-0" />
                <span>+91 9535764655</span>
              </a>
              <a href="https://wa.me/919535764655" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-200 transition-colors flex items-center gap-3 text-base" title="WhatsApp Us">
                <FaWhatsapp className="text-xl flex-shrink-0" />
                <span>+91 9535764655</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;