import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaArrowRight, FaArrowLeft, FaBriefcase, FaPaperPlane, FaCheckCircle, FaWhatsapp, FaHome } from 'react-icons/fa';
import '../csssection/ContactUs.css';
import { FaSquarePhone, FaSquarePhoneFlip } from "react-icons/fa6";
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
      // Note: After the first submission, FormSubmit will send an activation email. 
      // You can replace this email with the secure hash they provide to prevent spam.
      const response = await fetch("https://formsubmit.co/ajax/sales@arviontechnologies.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Lead: ${formData.name} from ${formData.company || 'Unknown Company'}`,
          _template: "table",
          Lead_Summary: `Hello! ${formData.name} from ${formData.company || 'a company'} has just submitted the form. They want to know more about your ${selectedService} services and have requested a meeting on ${formData.date} at ${formData.timeSlot}.`,
          Name: formData.name,
          Email: formData.email,
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
        })
      });

      if (response.ok) {
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
    <div className={isSinglePage ? "pt-8 pb-8 sm:pt-10 sm:pb-20 bg-[#f8f9fa] w-full flex flex-col items-center justify-center box-border px-4" : "tw-contact-page min-h-screen bg-[#f0f2f5] p-6 pt-[100px] sm:p-10 sm:pt-[120px] flex flex-col items-center justify-center box-border"}>

      {isSinglePage && (
        <div className="text-center mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mb-4 uppercase"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-semibold leading-relaxed text-sm sm:text-base"
          >
            Ready to transform your operations? Reach out to us for a tailored consultation and discover how Arvion Technologies can drive your growth.
          </motion.p>
        </div>
      )}

      <div className={`tw-contact-container grid grid-cols-1 min-[992px]:grid-cols-[1fr_1.2fr] max-w-[1200px] w-full bg-white rounded-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden animate-fadeIn ${isSinglePage ? 'min-h-[500px]' : ''}`}>

        {/* Left Panel */}
        <div className="tw-contact-left-panel hidden min-[992px]:flex min-[992px]:flex-col min-[992px]:justify-center bg-gradient-to-br from-[#ff8c42] to-[#ff7f32] text-white p-10 lg:p-12">
          <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tw-progress-bar flex items-center mb-[25px]">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`tw-progress-step w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${step >= num ? 'bg-white text-[#ff7f32]' : 'bg-white/30 text-white'}`}>{num}</div>
                  {num < 3 && <div className={`tw-progress-line flex-grow h-[2px] transition-all duration-300 ${step > num ? 'bg-white' : 'bg-white/30'}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-[28px] font-black mb-3 leading-tight text-white">{stepContent[step - 1].title}</h2>
            <p className="text-[16px] leading-[1.5] opacity-90 text-white">{stepContent[step - 1].description}</p>
            <div className="tw-contact-info-block mt-8 pt-6 border-t border-white/20 text-white">
              <p className="font-bold text-sm mb-4 uppercase tracking-widest text-orange-100">Or contact us directly:</p>
              <div className="flex flex-col gap-4">
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
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className={`tw-contact-right-panel p-0 min-[992px]:p-10 w-full ${isSinglePage ? 'h-full flex flex-col justify-center' : ''}`}>
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="tw-mobile-form-header block p-6 bg-[#ff7f32] border-b border-[#e9ecef] min-[992px]:hidden text-white">
            <div className="tw-progress-bar flex items-center mb-4 max-w-xs mx-auto">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`tw-progress-step w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${step >= num ? 'bg-white text-[#ff7f32]' : 'bg-white/30 text-white'}`}>{num}</div>
                  {num < 3 && <div className={`tw-progress-line flex-grow h-[2px] transition-all duration-300 ${step > num ? 'bg-white' : 'bg-white/30'}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <h2 className="text-lg font-extrabold m-0 text-center uppercase tracking-wider text-white">{stepContent[step - 1].title}</h2>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="tw-form-step p-6 min-[992px]:p-0 flex flex-col">
                <h3 className="text-sm sm:text-lg font-extrabold text-[#0d1b2a] mb-5 uppercase tracking-wider">Your Contact Information</h3>

                {/* Name Input with Error Styling */}
                <div className="tw-input-group relative mb-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Full Name <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-slate-400 text-xs z-[1]">
                      <FaUser />
                    </div>
                    <input
                      type="text"
                      name="name"
                      className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-[#ff7f32] ${fieldErrors.name ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#ddd]'}`}
                      placeholder="e.g., John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                {/* Service Select with Error Styling */}
                <div className="tw-input-group relative mb-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Service <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-slate-400 text-xs z-[1]">
                      <FaBriefcase />
                    </div>
                    <select
                      className={`tw-select-input w-full pl-10 pr-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-[#ff7f32] ${fieldErrors.selectedService ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#ddd]'}`}
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
                  <div className="tw-input-group relative mb-4">
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                      {selectedService === "School Management Service" ? "School Name" : "Company Name"}{" "}
                      <span className="text-[#e53e3e] ml-[1px]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-slate-400 text-xs z-[1]">
                        <FaBuilding />
                      </div>
                      <input
                        type="text"
                        name="company"
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-[#ff7f32] ${fieldErrors.company ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#ddd]'}`}
                        placeholder={selectedService === "School Management Service" ? "e.g., Bright Future School" : "e.g., Arvion Technologies"}
                        value={formData.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                )}



                <div className="tw-input-group relative mb-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Phone Number <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-slate-400 text-xs z-[1]">
                      {/* <FaPhone /> */}
                      <FaSquarePhone size={18} />
                    </div>
                    <div className="absolute left-[34px] top-1/2 -translate-y-1/2 text-slate-700 text-sm font-bold z-[1] select-none border-r border-[#ddd] pr-2">
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
                      className={`w-full pl-[74px] pr-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-[#ff7f32] ${fieldErrors.phone ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#ddd]'}`}
                    />
                  </div>
                  {fieldErrors.phone && formData.phone && <p className="text-[10px] text-[#ff4d4d] mt-1 font-semibold">Please enter a valid 10-digit number</p>}
                </div>

                <div className="tw-input-group relative mb-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Work Email <span className="text-[#e53e3e] ml-[1px]">*</span></label>
                  <div className="relative">
                    <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-slate-400 text-xs z-[1]">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm transition-all duration-300 focus:outline-none focus:border-[#ff7f32] ${fieldErrors.email ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#ddd]'}`}
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
                  className="tw-nav-btn px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 bg-[#ff7f32] text-white self-end hover:bg-[#e96e25] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,127,50,0.2)] disabled:bg-[#e0e0e0] disabled:text-[#888] disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none disabled:shadow-none cursor-pointer"
                  onClick={handleNext}
                  disabled={!isStep1Valid()}
                >
                  Next Step <FaArrowRight />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="tw-form-step p-6 min-[992px]:p-0 flex flex-col">
                <h3 className="text-lg font-extrabold text-[#0d1b2a] mb-5 uppercase tracking-wider">Which services are you interested in?</h3>
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
                  <button className="tw-nav-btn bg-[#e9ecef] text-[#333] px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#dee2e6] cursor-pointer" onClick={handlePrev}><FaArrowLeft /> Back</button>
                  <button className="tw-nav-btn bg-[#ff7f32] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#e96e25] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,127,50,0.2)] cursor-pointer" onClick={handleNext}>Next Step <FaArrowRight /></button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="tw-form-step p-6 min-[992px]:p-0 flex flex-col">
                <h3 className="text-lg font-extrabold text-[#0d1b2a] mb-5 uppercase tracking-wider">Book a Preferred Date & Time</h3>
                <p className="step-description text-xs text-[#555] mb-4 leading-relaxed font-semibold">Select a date and a time slot that works best for you. We will confirm the final meeting details via email.</p>

                <div className="mb-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={`date-input w-full p-2 border rounded-lg text-sm font-sans transition-all duration-300 focus:outline-none focus:border-[#ff7f32] ${!formData.date && fieldErrors.date ? 'border-[#ff4d4d] bg-[#fff5f5] focus:border-[#ff4d4d]' : 'border-[#ddd]'}`}
                    min={today}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">Preferred Time to Call</label>
                  <input
                    type="text"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    placeholder="e.g., 10:00 AM - 11:00 AM"
                    className="w-full p-2 border border-[#ddd] rounded-lg text-sm font-sans transition-all duration-300 focus:outline-none focus:border-[#ff7f32]"
                  />
                </div>

                <div className="privacy-policy-group flex items-start gap-2 mt-4 mb-4">
                  <input type="checkbox" id="privacyPolicy" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} className="mt-0.5 w-4 h-4 text-orange-600 focus:ring-orange-500 border-[#ddd] rounded cursor-pointer" />
                  <label htmlFor="privacyPolicy" className="text-[11px] text-slate-500 leading-relaxed font-semibold">I agree to receive email updates and promotional offers. I understand I can unsubscribe at any time. Please read our <Link to="/privacy-policy" target="_blank" className="text-[#ff7f32] font-bold no-underline hover:underline">Privacy Policy</Link>.</label>
                </div>

                <div className="form-nav-buttons flex justify-between mt-8">
                  <button className="tw-nav-btn bg-[#e9ecef] text-[#333] px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#dee2e6] cursor-pointer" onClick={handlePrev}><FaArrowLeft /> Back</button>

                  <button
                    className="tw-nav-btn bg-[#ff7f32] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-[#e96e25] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,127,50,0.2)] disabled:bg-[#e0e0e0] disabled:text-[#888] disabled:cursor-not-allowed disabled:opacity-70 disabled:transform-none disabled:shadow-none cursor-pointer"
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
          <div className="tw-mobile-form-footer block p-6 bg-[#ff7f32] border-t border-[#e9ecef] text-center lg:hidden">
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