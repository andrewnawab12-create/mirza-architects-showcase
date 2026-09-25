import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import residence from "@/assets/architecture-residence.jpg";
import commercial from "@/assets/architecture-commercial.jpg";
import sustainable from "@/assets/architecture-sustainable.jpg";
import interior from "@/assets/architecture-interior.jpg";
import visualization from "@/assets/architecture-visualization.jpg";
import urban from "@/assets/architecture-urban.jpg";
import detail from "@/assets/architecture-detail.jpg";
import renovation from "@/assets/architecture-renovation.jpg";

export const images = { residence, commercial, sustainable, interior, visualization, urban, detail, renovation };

export const projects = [
  { name: "Margalla House", category: "Residential", location: "Islamabad", image: residence, description: "A hillside home shaped by long views, sheltering stone, and quiet courtyards." },
  { name: "Capital Forum", category: "Commercial", location: "Islamabad", image: commercial, description: "A precise civic workplace balancing monumental form with human scale." },
  { name: "Verdant Retreat", category: "Sustainable", location: "Khanpur", image: sustainable, description: "Passive design, planted roofs, and local materials settle the house into its landscape." },
  { name: "Courtyard Residence", category: "Interior", location: "Rawalpindi", image: interior, description: "Light, stone, and crafted timber create a calm sequence of domestic spaces." },
  { name: "National Arts Pavilion", category: "Conceptual", location: "Islamabad", image: visualization, description: "A fluid public landmark imagined as a meeting place for culture and landscape." },
  { name: "Capital Green District", category: "Modern Architecture", location: "Islamabad", image: urban, description: "A walkable mixed-use district organized around generous civic landscapes." },
];

const nav = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Projects", "/projects"], ["Contact", "/contact"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <Link to="/" className="wordmark" onClick={() => setOpen(false)}><span>ABDUL MOIEZ MIRZA</span><small>ARCHITECTS</small></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{nav.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "active" }}>{label}</Link>)}</nav>
    <button className="menu-button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <div className={`mobile-nav ${open ? "open" : ""}`}>{nav.map(([label, to], i) => <Link key={to} to={to} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</Link>)}</div>
  </header>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-mark"><span>AMM</span><p>Architecture shaped by place,<br />purpose, and possibility.</p></div><div><small>STUDIO</small><p>Islamabad, Pakistan<br />Architecture & Design</p></div><div><small>CONTACT</small><a href="mailto:studio@ammarchitects.pk">studio@ammarchitects.pk</a><Link to="/contact">Start a conversation</Link></div><div className="footer-bottom"><span>© 2026 Abdul Moiez Mirza Architects</span><span>Islamabad · Pakistan</span></div></footer>;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: .05, rootMargin: "0px 0px -5% 0px" });
    const scan = () => document.querySelectorAll(".reveal:not(.visible)").forEach(el => observer.observe(el));
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    const fallback = window.setInterval(() => document.querySelectorAll(".reveal:not(.visible)").forEach(el => { const r = el.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("visible"); }), 800);
    const move = (event: MouseEvent) => { document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`); document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`); };
    window.addEventListener("mousemove", move);
    return () => { window.clearInterval(fallback); mo.disconnect(); observer.disconnect(); window.removeEventListener("mousemove", move); };
  }, []);
  return <><div className="cursor-dot" /><Header />{children}<Footer /></>;
}

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: string; image: string; children?: ReactNode }) {
  return <section className="page-hero"><img src={image} alt="" width={1920} height={1080} /><div className="image-shade" /><div className="page-hero-content"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1>{children}</div></section>;
}

export function ImagePanel({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <div className={`image-panel ${className}`}><img src={src} alt={alt} loading="lazy" width={1920} height={1080} /></div>;
}

export function ArrowLink({ to, children }: { to: "/about" | "/services" | "/projects" | "/contact"; children: ReactNode }) {
  return <Link to={to} className="arrow-link">{children}<ArrowUpRight size={17} /></Link>;
}