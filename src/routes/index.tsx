import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ArrowLink, ImagePanel, images, projects } from "../components/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Abdul Moiez Mirza Architects — Islamabad" },
    { name: "description", content: "Architecture, interiors and sustainable design shaped with precision in Islamabad." },
    { property: "og:title", content: "Abdul Moiez Mirza Architects — Islamabad" },
    { property: "og:description", content: "Architecture, interiors and sustainable design shaped with precision in Islamabad." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const heroImages = [images.residence, images.commercial, images.sustainable];
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive(v => (v + 1) % 3), 6500); return () => window.clearInterval(timer); }, []);
  return <main>
    <section className="home-hero">{heroImages.map((src, i) => <img key={src} className={`hero-slide ${i === active ? "active" : ""}`} src={src} alt={["Modern luxury residence", "Contemporary commercial architecture", "Sustainable landscape-integrated architecture"][i]} width={1920} height={1080} />)}<div className="image-shade" /><div className="hero-grid" /><div className="hero-content"><p>ARCHITECTURE <i>•</i> DESIGN <i>•</i> INNOVATION</p><h1>ABDUL MOIEZ MIRZA<br /><span>ARCHITECTS</span></h1><div className="hero-actions"><Link to="/projects">EXPLORE OUR PROJECTS <ArrowUpRight /></Link><Link to="/contact">START A PROJECT</Link></div></div><div className="hero-count">0{active + 1}<span>/ 03</span></div><a className="scroll-cue" href="#introduction">SCROLL <ArrowDown /></a></section>

    <section id="introduction" className="intro section-grid"><div className="reveal"><p className="eyebrow">01 / STUDIO</p><h2>We design enduring places for <em>how people live.</em></h2><ArrowLink to="/about">Discover our studio</ArrowLink></div><ImagePanel src={images.detail} alt="Precision stone facade detail" className="reveal portrait" /><div className="intro-copy reveal"><p>Abdul Moiez Mirza Architects is an Islamabad-based studio creating architecture grounded in climate, context, and the rituals of everyday life.</p><p>Our work moves from intimate residences to civic and commercial environments—united by clarity, material honesty, and exacting execution.</p></div></section>

    <section className="parallax-band philosophy" style={{ backgroundImage: `url(${images.sustainable})` }}><div className="image-shade" /><div className="reveal"><p className="eyebrow light">OUR PHILOSOPHY</p><h2>Form follows <em>purpose.</em><br />Purpose follows <em>people.</em></h2><div className="philosophy-list"><span>Innovation</span><span>Functionality</span><span>Sustainability</span><span>Human-centred design</span></div></div></section>

    <section className="disciplines"><p className="eyebrow reveal">02 / DISCIPLINES</p><article className="feature-row reveal"><div><span>01</span><h2>Architectural<br />Design</h2><p>Distinctive architecture resolved from concept through construction.</p></div><ImagePanel src={images.commercial} alt="Contemporary architectural design" /></article><article className="feature-row reverse reveal"><div><span>02</span><h2>Sustainable<br />Architecture</h2><p>Passive, resource-conscious places that belong to their climate.</p></div><ImagePanel src={images.sustainable} alt="Sustainable architecture with green roof" /></article><article className="feature-row reveal"><div><span>03</span><h2>Residential<br />Architecture</h2><p>Personal homes composed around light, landscape, and daily life.</p></div><ImagePanel src={images.residence} alt="Luxury modern residence" /></article><article className="feature-row reverse reveal"><div><span>04</span><h2>Commercial<br />Architecture</h2><p>High-performance workplaces and destinations with a lasting identity.</p></div><ImagePanel src={images.commercial} alt="Contemporary commercial building" /></article><article className="feature-row reveal"><div><span>05</span><h2>Interior<br />Design</h2><p>Tactile interiors where material, light, and detail create atmosphere.</p></div><ImagePanel src={images.interior} alt="Premium stone and timber interior" /></article></section>

    <section className="project-feature"><div className="section-heading reveal"><p className="eyebrow">03 / SELECTED WORK</p><h2>Featured<br /><em>Projects</em></h2><ArrowLink to="/projects">View all projects</ArrowLink></div><div className="project-stack">{projects.slice(0, 3).map((p, i) => <Link to="/projects" key={p.name} className="project-tile reveal"><img src={p.image} alt={p.name} loading="lazy" width={1920} height={1080} /><div><span>0{i + 1} / {p.category}</span><h3>{p.name}</h3><p>{p.location}</p></div></Link>)}</div></section>

    <section className="editorial-gallery"><ImagePanel src={images.urban} alt="Urban masterplan" className="wide reveal" /><ImagePanel src={images.interior} alt="Modern minimalist interior" className="tall reveal" /><ImagePanel src={images.detail} alt="Architectural facade detail" className="reveal" /><ImagePanel src={images.visualization} alt="Architectural visualization" className="reveal" /></section>

    <section className="parallax-band future" style={{ backgroundImage: `url(${images.visualization})` }}><div className="image-shade" /><h2 className="reveal">DESIGNING SPACES<br /><em>FOR THE FUTURE</em></h2></section>

    <section className="principles"><div className="section-heading reveal"><p className="eyebrow">04 / WHY AMM</p><h2>Rigour in every<br /><em>decision.</em></h2></div><div className="principle-list">{["Innovation", "Sustainable Design", "Technical Precision", "Creative Thinking", "Client Collaboration", "Professional Execution"].map((x, i) => <div className="reveal" key={x}><span>0{i + 1}</span><h3>{x}</h3><p>{["Ideas that move beyond convention.", "Responsibility embedded from the first sketch.", "Careful resolution at every scale.", "Fresh responses to real constraints.", "A transparent, listening-led process.", "Design intent carried through delivery."][i]}</p></div>)}</div></section>

    <Testimonials />
    <section className="final-cta" style={{ backgroundImage: `url(${images.residence})` }}><div className="image-shade" /><div className="reveal"><p className="eyebrow light">BEGIN A CONVERSATION</p><h2>LET'S BUILD SOMETHING<br /><em>EXTRAORDINARY.</em></h2><div><Link to="/contact">START A PROJECT <ArrowUpRight /></Link><Link to="/contact">CONTACT US</Link></div></div></section>
    <section className="contact-strip"><p>Have a site, an idea, or a question?</p><Link to="/contact">studio@ammarchitects.pk <ArrowUpRight /></Link></section>
  </main>;
}

const testimonials = [
  ["Saqib Qureshi", "Abdul Moiez Mirza is a professional architect in Islamabad. I appreciate their sustainable architectural design.", "CLIENT REVIEW"],
  ["Saadullah Shah", "Best firm in Islamabad for architecture design projects.", "CLIENT REVIEW"],
  ["Rizwan Sahil", "Fantastic service and good staff attitude.", "CLIENT REVIEW"],
  ["Ahmed Raza", "The studio understood how we wanted to live and translated it into a home with light, privacy, and character.", "WEBSITE TESTIMONIAL — SAMPLE"],
  ["Hamza Khan", "Clear communication, thoughtful design, and real attention to every construction detail.", "WEBSITE TESTIMONIAL — SAMPLE"],
] as const;
function Testimonials() { const doubled = [...testimonials, ...testimonials]; return <section className="testimonials"><div className="section-heading"><p className="eyebrow">05 / CLIENT VOICES</p><h2>Built on <em>trust.</em></h2></div><div className="marquee"><div className="marquee-track">{doubled.map((t, i) => <blockquote key={i}><span>“</span><p>{t[1]}</p><footer><strong>{t[0]}</strong><small>{t[2]}</small></footer></blockquote>)}</div></div></section> }
