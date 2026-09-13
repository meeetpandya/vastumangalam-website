'use client'

import { FormEvent, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Compass,
  Gem,
  Leaf,
  Menu,
  MoveRight,
  Sparkles,
  X,
} from 'lucide-react'

const navItems = ['Our Approach', 'Services', 'The Vastu Way', 'Insights']

const services = [
  {
    number: '01',
    title: 'Residential Vastu',
    text: 'Create homes that restore, support and uplift the people within them.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85',
  },
  {
    number: '02',
    title: 'Commercial Spaces',
    text: 'Bring clarity, productivity and purpose to workplaces that move business forward.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1100&q=85',
  },
  {
    number: '03',
    title: 'Land & Plot Analysis',
    text: 'Understand the potential of your land before the first line is drawn.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85',
  },
]

const process = [
  ['01', 'Listen', 'We begin with your story, aspirations and the energy of your space.'],
  ['02', 'Read', 'We study directions, elements, proportions and the subtle flow of your environment.'],
  ['03', 'Align', 'Practical recommendations make ancient principles feel clear and achievable.'],
  ['04', 'Evolve', 'Your space becomes a steady, living support for what comes next.'],
]

const elements = [
  ['Space', 'Akasha', 'The pause that lets everything else find its place.'],
  ['Air', 'Vayu', 'Movement, exchange and the freedom to breathe.'],
  ['Fire', 'Agni', 'Warmth, transformation and purposeful action.'],
  ['Water', 'Jal', 'Flow, reflection and emotional ease.'],
  ['Earth', 'Prithvi', 'Grounding, stability and a sense of belonging.'],
]

const insights = [
  ['The quiet power of an intentional entrance', 'Spaces', '6 min read'],
  ['Five signs your home is asking for balance', 'Wellbeing', '4 min read'],
  ['Designing a workplace where people can do their best work', 'Business', '8 min read'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main>
      <div className="announcement">Thoughtful spaces. Meaningful lives. <a href="#consultation">Begin a conversation <ArrowUpRight size={13} /></a></div>
      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu} aria-label="Vastu Mangalam home">
          <span className="wordmark-mark"><Compass size={20} strokeWidth={1.25} /></span>
          <span><strong>Vastu Mangalam</strong><small>Vastu Shastra Consultancy</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item} onClick={closeMenu}>{item}</a>)}
          <a href="#consultation" className="nav-cta" onClick={closeMenu}>Book a consultation <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Ancient wisdom, thoughtfully applied</p>
          <h1>Make room for a <em>better</em> way of living.</h1>
          <p className="hero-intro">Vastu Mangalam helps you create spaces that feel as good as they function — rooted in timeless Vastu principles, interpreted for modern life.</p>
          <div className="hero-actions"><a className="button button-dark" href="#consultation">Start a conversation <MoveRight size={17} /></a><a className="text-link" href="#our-approach">Discover our approach <ArrowUpRight size={15} /></a></div>
          <div className="hero-note"><span className="note-dot" /> Working with homes, businesses and land across India</div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90" alt="Sunlit calm living room with natural textures" /></div>
          <div className="hero-stamp"><Compass size={28} strokeWidth={1} /><span>In harmony<br />with nature</span></div>
          <div className="hero-caption">01 <span /> The spaces we inhabit shape the lives we lead.</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Vastu Mangalam highlights">
        <div><strong>15+</strong><span>Years of practice</span></div><div><strong>500+</strong><span>Spaces considered</span></div><div><strong>Pan India</strong><span>Consultations</span></div><div><strong>1:1</strong><span>Thoughtful guidance</span></div>
      </section>

      <section className="intro section" id="our-approach">
        <div className="section-label">01 <span /> Our approach</div>
        <div className="intro-grid"><h2>Balance is not a destination.<br /><em>It is a way of moving through life.</em></h2><div className="intro-body"><p>We believe the spaces around us quietly influence how we feel, connect and grow. Our work brings the intelligence of Vastu Shastra into conversation with architecture, design and the realities of your everyday life.</p><p>There is no one-size-fits-all formula. There is only a considered process of looking closely, listening well and making thoughtful changes that feel right for you.</p><a href="#the-vastu-way" className="text-link">Our philosophy <ArrowUpRight size={15} /></a></div></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><div><div className="section-label">02 <span /> How we help</div><h2>Spaces with a sense<br /><em>of possibility.</em></h2></div><p>From a first home to a growing enterprise, we offer clear, personal guidance for the places that matter most.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image"><img src={service.image} alt={service.title} /><span className="service-number">{service.number}</span></div><div className="service-info"><h3>{service.title}</h3><p>{service.text}</p><a href="#consultation" aria-label={`Explore ${service.title}`}>Explore service <ArrowUpRight size={15} /></a></div></article>)}</div>
      </section>

      <section className="process section"><div className="section-heading process-heading"><div><div className="section-label">03 <span /> The process</div><h2>A little more <em>clarity.</em><br />A lot more ease.</h2></div><p>Vastu need not feel mysterious or overwhelming. We make it practical, transparent and deeply human.</p></div><div className="process-list">{process.map(([number, title, text]) => <div className="process-item" key={number}><span className="process-number">{number}</span><h3>{title}</h3><p>{text}</p><Check size={17} /></div>)}</div></section>

      <section className="elements" id="the-vastu-way"><div className="elements-inner"><div className="section-label light">04 <span /> The Vastu way</div><div className="elements-heading"><h2>The five elements<br /><em>within every space.</em></h2><p>When the elements are in conversation, a space feels naturally more supportive. This is the lens we bring to every consultation.</p></div><div className="element-list">{elements.map(([name, sanskrit, text], index) => <div className="element" key={name}><span className="element-index">0{index + 1}</span><div className="element-symbol">{index === 0 ? <Sparkles /> : index === 1 ? <MoveRight /> : index === 2 ? <Gem /> : index === 3 ? <Leaf /> : <Compass />}</div><div><h3>{name} <small>{sanskrit}</small></h3><p>{text}</p></div></div>)}</div></div></section>

      <section className="quote-section section"><div className="quote-mark">“</div><blockquote>When a space is in balance,<br /><em>life finds its rhythm.</em></blockquote><div className="quote-credit"><span /> Vastu Mangalam <span /></div></section>

      <section className="insights section" id="insights"><div className="section-heading"><div><div className="section-label">05 <span /> From the journal</div><h2>Small shifts.<br /><em>Lasting impact.</em></h2></div><a href="#consultation" className="text-link">View all insights <ArrowUpRight size={15} /></a></div><div className="insight-list">{insights.map(([title, category, time], index) => <a className="insight" href="#consultation" key={title}><span className="insight-number">0{index + 1}</span><div><span className="insight-meta">{category} <i /> {time}</span><h3>{title}</h3></div><ArrowUpRight className="insight-arrow" size={20} /></a>)}</div></section>

      <section className="consultation" id="consultation"><div className="consultation-copy"><div className="section-label light">06 <span /> Begin here</div><h2>Your space has<br /><em>a story to tell.</em></h2><p>Tell us a little about the space you are creating, changing or calling home. We will be in touch to understand how we can help.</p><div className="consultation-details"><span><Leaf size={17} /> Residential & commercial</span><span><Compass size={17} /> Consultations across India</span></div></div><div className="form-card">{submitted ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Thank you for reaching out.</h3><p>Your note is with us. We will be in touch soon to begin the conversation.</p><button className="button button-dark" onClick={() => setSubmitted(false)}>Send another note</button></div> : <form onSubmit={handleSubmit}><h3>Start a conversation</h3><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>What can we help with?<select name="interest" defaultValue=""><option value="" disabled>Select an option</option><option>My home</option><option>My business</option><option>Land or plot</option><option>Something else</option></select></label><label>Tell us a little more<textarea name="message" rows={3} placeholder="A few words about your space..." /></label><button className="button button-dark" type="submit">Send enquiry <ArrowUpRight size={16} /></button><small>We respect your privacy and will only use these details to respond to your enquiry.</small></form>}</div></section>

      <footer className="site-footer"><div className="footer-top"><a href="#top" className="wordmark footer-mark"><span className="wordmark-mark"><Compass size={20} strokeWidth={1.25} /></span><span><strong>Vastu Mangalam</strong><small>Vastu Shastra Consultancy</small></span></a><p>Harmonising spaces.<br />Enhancing lives.</p><div className="footer-links"><a href="#our-approach">Approach</a><a href="#services">Services</a><a href="#insights">Journal</a><a href="#consultation">Contact</a></div></div><div className="footer-bottom"><span>© 2025 Vastu Mangalam. All rights reserved.</span><span>Made with intention <Leaf size={13} /></span></div></footer>
    </main>
  )
}

