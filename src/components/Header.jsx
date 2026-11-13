import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home, ChevronDown, Menu, X, Phone, Mail, CalendarCheck, Laptop,
  Users, FileBadge, Calculator, Settings2, UserCog, GraduationCap,
  School, UsersRound, Newspaper, Download, HelpCircle, ClipboardList,
} from 'lucide-react';
import logo from '../assets/logo-mark.webp';
import ComingSoonModal from './ComingSoonModal';
import { scrollToId } from '../utils/scrollToId';

const ERP = '/services/school-management';

const CONTACT = {
  phone: '+91 9535764655',
  email: 'sales@arviontechnologies.com',
};

// Business verticals shown in the top bar
const verticals = [
  { name: 'Education', path: ERP },
  { name: 'People', path: '/services/outsourcing' },
  { name: 'Compliance', path: '/services/statutory-registrations' },
  { name: 'Finance', path: '/services/accounting' },
];

// Main navigation. Items with `children` open a dropdown.
// `comingSoon: true` opens the Coming Soon modal instead of navigating.
const navItems = [
  { key: 'home', label: 'Home', path: '/', icon: Home },
  { key: 'about', label: 'About Us', path: '/about' },
  {
    key: 'products',
    label: 'Products',
    match: (p) => p.startsWith(ERP),
    children: [
      { name: 'School ERP', desc: 'Complete School Management Software', path: ERP, icon: Laptop },
    ],
  },
  {
    key: 'services',
    label: 'Services',
    match: (p) => p.startsWith('/services') && !p.startsWith(ERP),
    children: [
      { name: 'Payroll Outsourcing', path: '/services/outsourcing', icon: Users },
      { name: 'Statutory Registrations', path: '/services/statutory-registrations', icon: FileBadge },
      { name: 'Accounting Services', path: '/services/accounting', icon: Calculator },
    ],
  },
  {
    key: 'features',
    label: 'Features',
    children: [
      { name: 'School ERP Features', path: `${ERP}#features`, icon: Settings2 },
    ],
  },
  {
    key: 'portals',
    label: 'User Portals',
    children: [
      { name: 'Administrator Portal', path: `${ERP}#portals`, icon: UserCog },
      { name: 'Teacher Portal', path: `${ERP}#portals`, icon: School },
      { name: 'Student Portal', path: `${ERP}#portals`, icon: GraduationCap },
      { name: 'Parent Portal', path: `${ERP}#portals`, icon: UsersRound },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    children: [
      { name: 'Blog & Articles', comingSoon: true, icon: Newspaper },
      { name: 'Downloads', comingSoon: true, icon: Download },
      { name: 'FAQs', path: `${ERP}#faq`, icon: HelpCircle },
      { name: 'Case Studies', comingSoon: true, icon: ClipboardList },
    ],
  },
  { key: 'pricing', label: 'Pricing', path: `${ERP}#plans` },
  { key: 'contact', label: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { pathname, hash } = location;

  // Shadow on scroll; past the top bar's height, the top bar slides away (desktop)
  // and only the blue nav stays pinned at the top
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setIsCollapsed(window.scrollY > 64);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname, hash]);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Navigate to a path; if it is the current path + hash already, just scroll again
  const go = (e, path) => {
    e.preventDefault();
    setOpenDropdown(null);
    setIsMenuOpen(false);
    const [p, h] = path.split('#');
    if (p === pathname && (h || '') === hash.replace('#', '')) {
      if (h) scrollToId(h);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(path);
  };

  const openComingSoon = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const isActive = (item) => {
    if (item.key === 'home') return pathname === '/';
    if (item.key === 'pricing') return pathname === ERP && hash === '#plans';
    if (item.key === 'features') return pathname === ERP && hash === '#features';
    if (item.key === 'portals') return pathname === ERP && hash === '#portals';
    if (item.key === 'resources') return pathname === ERP && hash === '#faq';
    if (item.key === 'products') return pathname === ERP && !['#plans', '#features', '#portals', '#faq'].includes(hash);
    if (item.match) return item.match(pathname);
    return pathname.startsWith(item.path);
  };

  const navLinkClass = (active) =>
    `relative flex items-center gap-1.5 h-[38px] px-2.5 xl:px-3.5 text-[13px] xl:text-[14px] font-semibold whitespace-nowrap transition-colors cursor-pointer select-none
     after:absolute after:left-2 after:right-2 after:bottom-0 after:h-[3px] after:rounded-t after:bg-[#ffc727] after:transition-transform after:duration-300 after:origin-center
     ${active ? 'text-[#ffc727] after:scale-x-100' : 'text-white hover:text-[#ffc727] after:scale-x-0 hover:after:scale-x-100'}`;

  const renderChild = (child, onDone) => {
    const Icon = child.icon;
    const inner = (
      <>
        <span className="flex-shrink-0 w-8 h-8 rounded-md bg-blue-50 text-[#1747a6] flex items-center justify-center transition-colors group-hover/item:bg-[#1747a6] group-hover/item:text-white">
          <Icon size={16} strokeWidth={2} />
        </span>
        <span className="flex flex-col text-left">
          <span className="text-[13px] font-semibold text-slate-800 leading-snug group-hover/item:text-[#1747a6]">{child.name}</span>
          {child.desc && <span className="text-[11px] text-slate-500 leading-snug">{child.desc}</span>}
        </span>
      </>
    );
    const cls = 'group/item flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-blue-50/70 transition-colors no-underline';
    if (child.comingSoon) {
      return (
        <button key={child.name} type="button" className={`${cls} cursor-pointer`} onClick={() => { onDone?.(); openComingSoon(); }}>
          {inner}
        </button>
      );
    }
    return (
      <a key={child.name} href={child.path} className={cls} onClick={(e) => { onDone?.(); go(e, child.path); }}>
        {inner}
      </a>
    );
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-[transform,box-shadow] duration-300 ease-out ${isScrolled ? 'shadow-lg' : 'shadow-sm'} ${isCollapsed ? 'lg:-translate-y-16' : ''}`}
      >
        {/* ---------- Top bar: logo, verticals, contact, Request Demo ---------- */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a href="/" onClick={(e) => go(e, '/')} className="flex items-center gap-2.5 flex-shrink-0 group no-underline">
            <img
              src={logo}
              alt="Arvion Technologies Logo"
              width="169"
              height="160"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[22px] sm:text-[26px] font-extrabold text-[#0f2a6b] tracking-tight leading-none">
                Arvion<sup className="text-[10px] font-bold align-super ml-0.5">®</sup>
              </span>
              <span className="text-[10.5px] sm:text-[12.5px] font-semibold text-[#0f2a6b] whitespace-nowrap mt-0.5">
                Technologies Private Limited
              </span>
            </span>
          </a>

          {/* Verticals */}
          <nav aria-label="Business verticals" className="hidden xl:flex items-center">
            {verticals.map((v) => (
              <a
                key={v.name}
                href={v.path}
                onClick={(e) => go(e, v.path)}
                className={`px-5 text-[15px] font-semibold border-l border-slate-300 transition-colors no-underline ${pathname.startsWith(v.path) ? 'text-[#1747a6]' : 'text-[#0f2a6b] hover:text-[#f7941d]'}`}
              >
                {v.name}
              </a>
            ))}
          </nav>

          {/* Contact + CTA */}
          <div className="flex items-center gap-3 lg:gap-5">
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hidden lg:flex items-center gap-2 text-[14px] font-semibold text-[#0f2a6b] hover:text-[#f7941d] whitespace-nowrap no-underline">
              <Phone size={16} className="fill-[#0f2a6b]/10" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hidden 2xl:flex items-center gap-2 text-[14px] font-semibold text-[#0f2a6b] hover:text-[#f7941d] whitespace-nowrap no-underline">
              <Mail size={16} /> {CONTACT.email}
            </a>
            <a
              href="/contact"
              onClick={(e) => go(e, '/contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-md bg-gradient-to-b from-[#ffa53a] to-[#f47b14] text-white text-[14px] font-bold shadow-md hover:shadow-lg hover:brightness-105 transition-all whitespace-nowrap no-underline"
            >
              <CalendarCheck size={17} /> Request Demo
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="lg:hidden p-2 rounded-md text-[#0f2a6b] hover:bg-slate-100 cursor-pointer"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ---------- Blue navigation bar ---------- */}
        <div id="site-subnav" className="hidden lg:block bg-gradient-to-r from-[#0e3c96] via-[#1747a6] to-[#0e3c96]">
          <nav ref={navRef} aria-label="Main" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center justify-between list-none m-0 p-0">
              {navItems.map((item) => {
                const active = isActive(item);
                const Icon = item.icon;

                if (!item.children) {
                  return (
                    <li key={item.key}>
                      <a href={item.path} onClick={(e) => go(e, item.path)} className={`${navLinkClass(active)} no-underline`}>
                        {Icon && <Icon size={16} className={active ? 'fill-[#ffc727]' : ''} />}
                        {item.label}
                      </a>
                    </li>
                  );
                }

                const open = openDropdown === item.key;
                return (
                  <li
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.key)}
                    onMouseLeave={() => setOpenDropdown((k) => (k === item.key ? null : k))}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={open}
                      onClick={() => setOpenDropdown(open ? null : item.key)}
                      className={`${navLinkClass(active || open)} bg-transparent border-0`}
                    >
                      {item.label}
                      <ChevronDown size={15} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                        >
                          <div className="min-w-[230px] bg-white rounded-xl shadow-2xl border border-slate-100 p-2 flex flex-col gap-0.5">
                            {item.children.map((child) => renderChild(child))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer: the fixed header is taller than before by the blue nav bar (h-[38px]) on desktop */}
      <div aria-hidden="true" className="hidden lg:block h-[38px] flex-shrink-0" />

      {/* ---------- Mobile drawer ---------- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#0d1b2a]/60 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'circOut' }}
              className="fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl z-[70] flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between px-5 h-16 bg-gradient-to-r from-[#0e3c96] to-[#1747a6] text-white flex-shrink-0">
                <span className="text-[15px] font-extrabold tracking-wide">Arvion Technologies</span>
                <button type="button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2 rounded-full hover:bg-white/15 cursor-pointer">
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-0.5">
                {navItems.map((item) => {
                  const active = isActive(item);
                  if (!item.children) {
                    return (
                      <a
                        key={item.key}
                        href={item.path}
                        onClick={(e) => go(e, item.path)}
                        className={`px-3 py-2.5 rounded-lg text-[14px] font-semibold no-underline ${active ? 'bg-blue-50 text-[#1747a6]' : 'text-slate-700 hover:bg-slate-50'}`}
                      >
                        {item.label}
                      </a>
                    );
                  }
                  const open = openMobileGroup === item.key;
                  return (
                    <div key={item.key}>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenMobileGroup(open ? null : item.key)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] font-semibold cursor-pointer ${active ? 'text-[#1747a6]' : 'text-slate-700'} hover:bg-slate-50`}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-3 pl-2 border-l-2 border-blue-100"
                          >
                            <div className="py-1 flex flex-col gap-0.5">
                              {item.children.map((child) => renderChild(child))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-1">
                  <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">Our Verticals</span>
                  <div className="grid grid-cols-2 gap-1">
                    {verticals.map((v) => (
                      <a key={v.name} href={v.path} onClick={(e) => go(e, v.path)} className="px-3 py-2 rounded-lg text-[13px] font-semibold text-slate-700 hover:bg-slate-50 no-underline">
                        {v.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="flex-shrink-0 border-t border-slate-100 p-4 flex flex-col gap-2.5">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[13px] font-semibold text-[#0f2a6b] no-underline">
                  <Phone size={15} /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-[13px] font-semibold text-[#0f2a6b] no-underline break-all">
                  <Mail size={15} /> {CONTACT.email}
                </a>
                <a
                  href="/contact"
                  onClick={(e) => go(e, '/contact')}
                  className="mt-1 flex items-center justify-center gap-2 py-2.5 rounded-md bg-gradient-to-b from-[#ffa53a] to-[#f47b14] text-white text-[14px] font-bold shadow-md no-underline"
                >
                  <CalendarCheck size={17} /> Request Demo
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
