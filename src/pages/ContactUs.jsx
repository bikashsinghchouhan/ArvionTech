import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaBuilding, FaPhone, FaArrowRight, FaArrowLeft, FaBriefcase, FaPaperPlane, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../csssection/ContactUs.css';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', jobTitle: '',
    services: [], studentRange: '', outsourcingTeamSize: '', registrationType: '', accountingVolume: '',
    date: '', timeSlot: '', finalPhone: '', privacyPolicy: false,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [isSending, setIsSending] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    setToday(`${year}-${month}-${day}`);
  }, []);

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.company || !formData.jobTitle) {
      setError('Please fill in all required fields before proceeding.');
      return false;
    }
    if (!isVerified) {
      setError('Please verify your email address to continue.');
      return false;
    }
    setError('');
    return true;
  };

  const handleNext = () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else {
      setStep((prev) => prev + 1);
    }
  };
  
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSendOtp = () => {
    if (!formData.email) {
      setError('Please enter your email address first.');
      return;
    }
    setIsSending(true);
    setError('');

    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);

    const templateParams = { to_email: formData.email, otp_code: newOtp };
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const USER_ID = 'YOUR_USER_ID';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => setOtpSent(true))
      .catch(() => setError('Could not send OTP. Please try again.'))
      .finally(() => setIsSending(false));
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === generatedOtp) {
      setIsVerified(true);
      setError('');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.finalPhone || !formData.date || !formData.timeSlot) {
      setError('Please fill in all required fields for this step.');
      return;
    }
    if (!formData.privacyPolicy) {
      setError('You must agree to the privacy policy to submit.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "submissions"), { ...formData, submittedAt: serverTimestamp() });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("There was an error submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const newServices = checked ? [...prev.services, value] : prev.services.filter((s) => s !== value);
      const updatedData = { ...prev, services: newServices };
      if (!checked) {
        if (value === 'School Management') updatedData.studentRange = '';
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
  const timeSlots = ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"];

  if (isSubmitted) {
    return (
      <div className="contact-page-v2">
        <motion.div className="success-message" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <FaCheckCircle className="success-icon" />
          <h2>Thank You!</h2>
          <p>Your request has been submitted successfully. Our team will get back to you shortly.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="contact-page-v2">
      <div className="contact-container-v2">
        <div className="contact-left-panel">
          <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="progress-bar">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`progress-step ${step >= num ? 'active' : ''}`}>{num}</div>
                  {num < 3 && <div className={`progress-line ${step > num ? 'active' : ''}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <h2>{stepContent[step - 1].title}</h2>
            <p>{stepContent[step - 1].description}</p>
            <div className="contact-info-block">
              <p>Or contact us directly:</p>
              <div className="contact-info-item">
                <FaEnvelope />
                <a href="mailto:cat@arvion.com">cat@arvion.com</a>
              </div>
              <div className="contact-info-item">
                <FaPhone />
                <a href="tel:+919535764655">+91 9535764655</a>
              </div>
              <div className="contact-info-item">
              <FaWhatsapp />
              <a href="https://wa.me/919535764655" target="_blank" rel="noopener noreferrer">+91 9535764655</a>
            </div>
            </div>
          </motion.div>
        </div>

        <div className="contact-right-panel">
          {/* This is the new mobile header */}
          <div className="mobile-form-header">
            <div className="progress-bar">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div className={`progress-step ${step >= num ? 'active' : ''}`}>{num}</div>
                  {num < 3 && <div className={`progress-line ${step > num ? 'active' : ''}`}></div>}
                </React.Fragment>
              ))}
            </div>
            <h2>{stepContent[step - 1].title}</h2>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="form-step">
                <h3>Your Contact Information</h3>
                <div className="input-group"><label>Full Name <span className="required-asterisk">*</span></label><FaUser /><input type="text" name="name" placeholder="e.g., John Doe" value={formData.name} onChange={handleChange} /></div>
                <div className="input-group"><label>Company Name <span className="required-asterisk">*</span></label><FaBuilding /><input type="text" name="company" placeholder="e.g., Arvion Technologies" value={formData.company} onChange={handleChange} /></div>
                <div className="input-group"><label>Job Title <span className="required-asterisk">*</span></label><FaBriefcase /><input type="text" name="jobTitle" placeholder="e.g., HR Manager" value={formData.jobTitle} onChange={handleChange} /></div>
                <div className="input-group"><label>Phone Number</label><FaPhone /><input type="tel" name="phone" placeholder="(Optional)" value={formData.phone} onChange={handleChange} /></div>
                <div className="input-group"><label>Work Email <span className="required-asterisk">*</span></label><FaEnvelope /><input type="email" name="email" placeholder="e.g., john.doe@company.com" value={formData.email} onChange={handleChange} disabled={otpSent} /></div>
                {error && <p className="error-message">{error}</p>}
                {!otpSent && (<button className="nav-btn verification-btn" onClick={handleSendOtp} disabled={isSending}><FaPaperPlane /> {isSending ? 'Sending...' : 'Send OTP'}</button>)}
                {otpSent && !isVerified && (<><p className="otp-info-message">An OTP has been sent to your email. Please enter it below.</p><div className="input-group otp-group"><input type="text" placeholder="Enter 4-digit OTP" value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} maxLength="4" /><button className="nav-btn verify-btn" onClick={handleVerifyOtp}>Verify</button></div></>)}
                {isVerified && (<div className="verification-success"><FaCheckCircle /> Your email has been verified successfully!</div>)}
                <button className="nav-btn next-btn" onClick={handleNext}>Next Step <FaArrowRight /></button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="form-step">
                <h3>Which services are you interested in?</h3>
                <div className="checkbox-group">
                  <label><input type="checkbox" value="School Management" onChange={handleCheckboxChange} checked={formData.services.includes('School Management')} /> School Management</label>
                  <AnimatePresence>{formData.services.includes('School Management') && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options"><h4>Number of Students</h4><select name="studentRange" value={formData.studentRange} onChange={handleChange} className="select-input"><option value="">Select a range</option><option value="1-200">1-200</option><option value="201-500">201-500</option><option value="501-1000">501-1000</option><option value="1000+">1000+</option></select></motion.div>)}</AnimatePresence>
                  <label><input type="checkbox" value="Outsourcing" onChange={handleCheckboxChange} checked={formData.services.includes('Outsourcing')} /> Outsourcing</label>
                  <AnimatePresence>{formData.services.includes('Outsourcing') && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options"><h4>Number of Roles to Fill</h4><select name="outsourcingTeamSize" value={formData.outsourcingTeamSize} onChange={handleChange} className="select-input"><option value="">Select a number</option><option value="1-5">1-5 Roles</option><option value="6-15">6-15 Roles</option><option value="15+">15+ Roles</option></select></motion.div>)}</AnimatePresence>
                  <label><input type="checkbox" value="Statutory Registrations" onChange={handleCheckboxChange} checked={formData.services.includes('Statutory Registrations')} /> Statutory Registrations</label>
                  <AnimatePresence>{formData.services.includes('Statutory Registrations') && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options"><h4>Type of Entity</h4><select name="registrationType" value={formData.registrationType} onChange={handleChange} className="select-input"><option value="">Select a type</option><option value="New Company">New Company</option><option value="Existing Company">Existing Company</option><option value="Sole Proprietorship">Sole Proprietorship</option></select></motion.div>)}</AnimatePresence>
                  <label><input type="checkbox" value="Accounting" onChange={handleCheckboxChange} checked={formData.services.includes('Accounting')} /> Accounting</label>
                  <AnimatePresence>{formData.services.includes('Accounting') && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sub-options"><h4>Monthly Transaction Volume</h4><select name="accountingVolume" value={formData.accountingVolume} onChange={handleChange} className="select-input"><option value="">Select a volume</option><option value="<100">Under 100</option><option value="101-500">101-500</option><option value="500+">Over 500</option></select></motion.div>)}</AnimatePresence>
                  <label className="disabled"><input type="checkbox" value="Payroll" disabled /> Payroll (Paybooks)<span className="coming-soon-flash">Coming Soon</span></label>
                </div>
                <div className="form-nav-buttons"><button className="nav-btn prev-btn" onClick={handlePrev}><FaArrowLeft /> Back</button><button className="nav-btn next-btn" onClick={handleNext}>Next Step <FaArrowRight /></button></div>
               </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="form-step">
                <h3>Book a Preferred Date & Time</h3>
                <p className="step-description">Select a date and a time slot that works best for you. We will confirm the final meeting details via email.</p>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="date-input" min={today} />
                <div className="timeslot-grid">
                  {timeSlots.map(slot => (<button key={slot} className={`timeslot-btn ${formData.timeSlot === slot ? 'active' : ''}`} onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}>{slot}</button>))}
                </div>
                <div className="input-group h3-margin-top"><label>Phone Number <span className="required-asterisk">*</span></label><FaPhone /><input type="tel" name="finalPhone" placeholder="e.g., 9876543210" value={formData.finalPhone} onChange={handleChange} /></div>
                <div className="privacy-policy-group"><input type="checkbox" id="privacyPolicy" name="privacyPolicy" checked={formData.privacyPolicy} onChange={handleChange} /><label htmlFor="privacyPolicy">I agree to receive email updates and promotional offers. I understand I can unsubscribe at any time. Please read our <Link to="/privacy-policy" target="_blank">Privacy Policy</Link>.</label></div>
                <div className="form-nav-buttons"><button className="nav-btn prev-btn" onClick={handlePrev}><FaArrowLeft /> Back</button><button className="nav-btn submit-final-btn" onClick={handleSubmit} disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Request'}</button></div>
               </motion.div>
            )}
          </AnimatePresence>

          {/* This is the new mobile footer */}
          <div className="mobile-form-footer">
            <p>Or contact us directly:</p>
            <div className="contact-info-item">
              <FaEnvelope />
              <a href="mailto:cat@arvion.com">cat@arvion.com</a>
            </div>
            <div className="contact-info-item">
              <FaPhone />
              <a href="tel:+919535764655">+91 9535764655</a>
            </div>
            <div className="contact-info-item">
              <FaWhatsapp />
              <a href="https://wa.me/919535764655" target="_blank" rel="noopener noreferrer">+91 9535764655</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
