import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCalendarAlt, FaCheckCircle, FaChartBar, FaGlobe, FaPuzzlePiece, FaClock, 
  FaStamp, FaFileSignature, FaBuilding, FaCalculator, FaChartLine, FaBook, 
  FaShieldAlt, FaFileContract, FaChevronLeft, FaChevronRight, FaInfoCircle 
} from 'react-icons/fa';
import '../csssection/HorizontalScroll.css';

// Import service images
import schoolImg from '../assets/service-school.png';
import outsourcingImg from '../assets/service-outsourcing.png';
import registrationsImg from '../assets/service-registrations.png';
import accountingImg from '../assets/service-accounting.png';
// import payrollImg from '../assets/service-payroll.png';

const services = [
  { title: 'School Management', image: schoolImg, path: '/services/school-management', stats: [ { icon: <FaCalendarAlt />, text: 'Effortless Scheduling' }, { icon: <FaCheckCircle />, text: 'Automated Attendance' }, { icon: <FaChartBar />, text: 'Real-time Reporting' } ] },
  { title: 'Payroll Outsourcing', image: outsourcingImg, path: '/services/outsourcing', stats: [ { icon: <FaGlobe />, text: 'Global Talent Pool' }, { icon: <FaPuzzlePiece />, text: 'Seamless Integration' }, { icon: <FaClock />, text: 'End-to-End Payroll Processing' } ] },
  { title: 'Statutory Registrations',  image: registrationsImg, path: '/services/registrations', stats: [ { icon: <FaStamp />, text: 'Business Name Approval' }, { icon: <FaFileSignature />, text: 'GST & Tax ID Application' }, { icon: <FaBuilding />, text: 'Company Incorporation' } ] },
  { title: 'Accounting',  image: accountingImg, path: '/services/accounting', stats: [ { icon: <FaBook />, text: 'Bookkeeping Services' }, { icon: <FaChartLine />, text: 'Financial Reporting' }, { icon: <FaCalculator />, text: 'Expense Tracking' } ] },
  // { title: 'Payroll',  image: payrollImg, path: '/services/payroll', stats: [ { icon: <FaShieldAlt />, text: 'Secure Transactions' }, { icon: <FaCalculator />, text: 'Accurate Calculations' }, { icon: <FaFileContract />, text: 'Compliance Ready' } ] },
];

const HorizontalScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const autoScrollInterval = useRef(null);
  const navigate = useNavigate();

  // Clone first & last for infinite scroll
  const extendedServices = [services[services.length - 1], ...services, services[0]];

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleCardClick = (index, path) => {
    if (window.innerWidth < 768) {
      // On mobile → first tap highlights, second tap navigates
      if (activeCardIndex === index) {
        navigate(path);
      } else {
        setActiveCardIndex(index);
      }
    } else {
      // On desktop → click navigates directly
      navigate(path);
    }
  };

  // ✅ Auto-scroll always runs (except when hovering on desktop)
  useEffect(() => {
    if (!isHovering) {
      autoScrollInterval.current = setInterval(handleNext, 4000);
    }
    return () => clearInterval(autoScrollInterval.current);
  }, [isHovering, isTransitioning]);

  // Infinite loop reset
  useEffect(() => {
    if (currentIndex === 0 || currentIndex === extendedServices.length - 1) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex === 0 ? services.length : 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, services.length, extendedServices.length]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
  }, [isTransitioning]);

  return (
    <section className="interactive-services-v2">
      <div className="section-header">
        <h2 className="section-title-v2"></h2>
      </div>
      <div 
        className="carousel-wrapper-v2"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          className="cards-container-v2" 
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extendedServices.map((service, index) => (
            <div className="card-wrapper-v2" key={index}>
              <div 
                className={`service-card-v2 ${activeCardIndex === index ? 'active' : ''}`}
                onClick={() => handleCardClick(index, service.path)}
              >
                <div className="card-background-v2" style={{ backgroundImage: `url(${service.image})` }} />
                <div className="card-overlay-v2">
                  
                  {/* 🔹 Desktop hover hint (always on overlay) */}
                  {window.innerWidth >= 768 && (
                    <div className="click-info-hint top-label">
                      <FaInfoCircle />
                      <span>Click to see features</span>
                    </div>
                  )}

                  {/* 🔹 Mobile hint (changes with tap) */}
                  {window.innerWidth < 768 && activeCardIndex !== index && (
                    <div className="click-info-hint">
                      <FaInfoCircle />
                      <span>Click to see features</span>
                    </div>
                  )}
                  {window.innerWidth < 768 && activeCardIndex === index && (
                    <div className="click-info-hint">
                      <FaInfoCircle />
                      <span>Click again for details</span>
                    </div>
                  )}

                  {/* Stats / Title */}
                  <div className="card-content-v2">
                    <h3 className="card-title-v2">{service.title}</h3>
                    <div className="card-details-v2">
                      <div className="stats-container-v2">
                        {service.stats.map((stat, statIndex) => (
                          <div className="stat-item-v2" key={statIndex}>
                            <span className="stat-icon-v2">{stat.icon}</span>
                            <span className="stat-text-v2">{stat.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-arrow-v2 prev-v2" onClick={handlePrev}><FaChevronLeft /></button>
        <button className="nav-arrow-v2 next-v2" onClick={handleNext}><FaChevronRight /></button>
      </div>
    </section>
  );
};

export default HorizontalScroll;