const { useEffect, useRef, useState } = React;

function Navbar(){
  return (
    <nav className="navbar" role="navigation" aria-label="Main">
      <div className="container navbar-inner">
        <a href="#home" className="brand" aria-label="WinBuzzVIP Home">
          <img src="assets/Images/logo.png" alt="WinBuzzVIP" />
        </a>
        <div className="nav-links">
          <a className="cta" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="Get Your ID on WhatsApp">
            <svg className="wa" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .2 5.29.2 11.86c0 2.09.55 4.09 1.6 5.87L0 24l6.46-1.69a11.8 11.8 0 0 0 5.6 1.43h.01c6.56 0 11.86-5.29 11.86-11.86 0-3.18-1.24-6.17-3.41-8.4ZM12.07 21.3h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.83 1 1.02-3.73-.22-.38a9.44 9.44 0 0 1-1.45-5.11c0-5.23 4.26-9.48 9.49-9.48 2.54 0 4.93.99 6.72 2.78a9.43 9.43 0 0 1 2.78 6.71c0 5.23-4.26 9.49-9.49 9.49Zm5.5-7.1c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.31-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.31.3-.52.1-.2.05-.38-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.31-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.57-.35Z"/></svg>
            <span>Get Your ID Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function useCountUp(target, durationMs){
  const [value, setValue] = useState(0);
  useEffect(()=>{
    let raf; const start = performance.now();
    const tick = (now)=>{
      const p = Math.min(1, (now - start)/durationMs);
      setValue(Math.floor(p * target));
      if(p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return ()=> cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

function Hero(){
  return (
    <header id="home" className="hero" role="banner">
      <div className="container hero-inner">
        <div className="content">
          <h1>India’s First ID – Play on 9+ Sites with Single ID</h1>
          <p>No need to maintain multiple accounts. Play everywhere with one ID.</p>
          <div className="hero-ctas">
            <a className="cta" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" aria-label="WhatsApp - Get Your ID Now">
              <svg className="wa" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .2 5.29.2 11.86c0 2.09.55 4.09 1.6 5.87L0 24l6.46-1.69a11.8 11.8 0 0 0 5.6 1.43h.01c6.56 0 11.86-5.29 11.86-11.86 0-3.18-1.24-6.17-3.41-8.4ZM12.07 21.3h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.83 1 1.02-3.73-.22-.38a9.44 9.44 0 0 1-1.45-5.11c0-5.23 4.26-9.48 9.49-9.48 2.54 0 4.93.99 6.72 2.78a9.43 9.43 0 0 1 2.78 6.71c0 5.23-4.26 9.49-9.49 9.49Zm5.5-7.1c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.31-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.31.3-.52.1-.2.05-.38-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.31-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.57-.35Z"/></svg>
              <span>Get Your ID Now</span>
            </a>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          <img src="assets/Images/hero.png" alt="Play on 9+ sites with one ID" />
        </div>
      </div>
    </header>
  );
}

function Bonuses(){
  const percent = useCountUp(3, 1800);
  return (
    <section id="bonus" className="bonuses" aria-labelledby="bonus-title">
      <div className="container bonuses-inner">
        <div>
          <div className="badge" role="status" aria-live="polite">10% Welcome Bonus</div>
          <p className="muted" style={{marginTop:12}}>Exclusive for new users on first deposit</p>
        </div>
        <div>
          <div className="counter" aria-label="Every Deposit Bonus">
            <span style={{color:'var(--gold-500)'}}>{percent}%</span> Every Deposit Bonus
          </div>
          <p className="muted">Automatically applied on each successful top-up</p>
        </div>
      </div>
    </section>
  );
}

function SitesSupported(){
  const base = 'assets/Images/partner/';
  const logos = [
    'BetBhai9.jpg','Cricbet99.jpg','Deal2026.jpg','fairplay.jpg','laser247.jpg','lotus365.jpg','MyTiger247.jpg','Target666.jpg','WinBuzz.jpg'
  ];
  return (
    <section id="features" className="sites" aria-labelledby="sites-title">
      <div className="container">
        <h2 id="sites-title">9+ Sites Supported</h2>
        <p className="muted">Use a single gaming ID seamlessly across all supported platforms.</p>
        <div className="sites-grid" role="list">
          {logos.map((name, idx) => (
            <div className="site-card" role="listitem" key={idx}>
              <img src={`${base}${name}`} alt={name.replace(/\..+$/, '')} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why(){
  const base = 'assets/Images/whywinbuzz/';
  const items = [
    {icon:'secureLogov2.webp', title:'100% Secure', sub:'Protection'},
    {icon:'languageLogov2.webp', title:'9+ Sites', sub:'Play Everywhere'},
    {icon:'customerSupportLogov2.webp', title:'24x7', sub:'Support'},
    {icon:'userCountLogoV2_updated.webp', title:'Trusted by Players', sub:'Growing Community'},
  ];
  return (
    <section className="why" aria-labelledby="why-title">
      <div className="container">
        <h2 id="why-title">WHY WINBUZZVIP?</h2>
        <div className="why-grid" role="list">
          {items.map((it, i) => (
            <div className="why-card" role="listitem" key={i}>
              <img src={`${base}${it.icon}`} alt="" />
              <div className="why-title">{it.title}</div>
              <div className="why-sub">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer id="contact" role="contentinfo">
      <div className="container row">
        <div className="brand">
          <img src="assets/Images/title.png" alt="WinBuzzVIP" />
          <span className="sr-only">WinBuzzVIP</span>
        </div>
        <div className="copy" aria-label="Copyright">© 2025 WinBuzzVIP. All rights reserved.</div>
      </div>
    </footer>
  );
}

function App(){
  React.useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    return ()=> observer.disconnect();
  },[]);
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="callout">
        <div className="container">
          <div className="text">Get Your ID Now</div>
          <a className="cta" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" aria-label="WhatsApp - Get Your ID Now">
            <svg className="wa" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .2 5.29.2 11.86c0 2.09.55 4.09 1.6 5.87L0 24l6.46-1.69a11.8 11.8 0 0 0 5.6 1.43h.01c6.56 0 11.86-5.29 11.86-11.86 0-3.18-1.24-6.17-3.41-8.4ZM12.07 21.3h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.83 1 1.02-3.73-.22-.38a9.44 9.44 0 0 1-1.45-5.11c0-5.23 4.26-9.48 9.49-9.48 2.54 0 4.93.99 6.72 2.78a9.43 9.43 0 0 1 2.78 6.71c0 5.23-4.26 9.49-9.49 9.49Zm5.5-7.1c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.31-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.31.3-.52.1-.2.05-.38-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.31-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.57-.35Z"/></svg>
            <span>Get Your ID Now</span>
          </a>
        </div>
      </div>
      <div className="reveal"><Why/></div>
      <div className="reveal"><Bonuses/></div>
      <div className="reveal"><SitesSupported/></div>
      <Footer/>
      <div className="fab" aria-label="Social quick actions">
        <a className="wa" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .2 5.29.2 11.86c0 2.09.55 4.09 1.6 5.87L0 24l6.46-1.69a11.8 11.8 0 0 0 5.6 1.43h.01c6.56 0 11.86-5.29 11.86-11.86 0-3.18-1.24-6.17-3.41-8.4ZM12.07 21.3h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.2-3.83 1 1.02-3.73-.22-.38a9.44 9.44 0 0 1-1.45-5.11c0-5.23 4.26-9.48 9.49-9.48 2.54 0 4.93.99 6.72 2.78a9.43 9.43 0 0 1 2.78 6.71c0 5.23-4.26 9.49-9.49 9.49Zm5.5-7.1c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.31-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.73-1.64-2.03-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.31.3-.52.1-.2.05-.38-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.31-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.57-.35Z"/></svg>
        </a>
        <a className="ig" href="#" target="_blank" rel="noopener" aria-label="Instagram">
          <svg viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/></svg>
        </a>
        <a className="tg" href="#" target="_blank" rel="noopener" aria-label="Telegram">
          <svg viewBox="0 0 24 24"><path d="M9.04 15.21l-.4 5.65c.57 0 .81-.24 1.1-.53l2.64-2.52 5.47 4.02c1 .55 1.73.26 2-.93l3.63-17.02h0c.32-1.52-.55-2.11-1.52-1.74L1.2 9.54c-1.47.57-1.45 1.4-.25 1.77l5.92 1.85L19.2 6.2c.62-.41 1.18-.19.72.22L9.04 15.21z"/></svg>
        </a>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// Dynamic overlay generator from filenames in assets/Images
// This runs after render to replace the hero ::before background with a dense scatter of names
;(function generateHeroOverlay(){
  const labels = [
    'BETBHAI9','CRICKET99','FAIRPLAY','LASER247','LOTUS365','MYTIGER247','WINBUZZ','TARGET666','DEAL2026'
  ];
  const tile = 600; // denser repetition
  let svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${tile}' height='${tile}'>`+
            `<defs>
               <filter id='blur'><feGaussianBlur stdDeviation='0.8'/></filter>
               <linearGradient id='fade' x1='0' x2='1' y1='0' y2='0'>
                 <stop offset='0' stop-color='white' stop-opacity='1'/>
                 <stop offset='0.7' stop-color='white' stop-opacity='0.7'/>
                 <stop offset='1' stop-color='white' stop-opacity='0.4'/>
               </linearGradient>
             </defs>`+
            `<style>text{font-family:Saira,Arial,sans-serif;font-weight:900;fill:url(%23fade);filter:url(%23blur)}</style>`;
  // arrange labels in grid with slight jitter; left-biased like reference; avoid overlap inside cells
  const cols = 3, rows = 4; const cellW = Math.floor(tile/cols); const cellH = Math.floor(tile/rows);
  const shuffled = labels.slice().sort(()=>Math.random()-0.5);
  let k = 0;
  for(let r=0; r<rows; r++){
    for(let c=0; c<cols; c++){
      const label = shuffled[k++];
      const centerX = c*cellW + cellW*0.42; // push left slightly
      const centerY = r*cellH + cellH/2;
      const jitterX = Math.floor((Math.random()-0.45)*cellW*0.35); // mild left bias
      const jitterY = Math.floor((Math.random()-0.5)*cellH*0.3);
      const x = centerX + jitterX;
      const y = centerY + jitterY;
      const rotate = (Math.random()*16-8).toFixed(1);
      const size = Math.floor(34+Math.random()*18); // 34-52px larger for visibility
      svg += `<g transform="translate(${x},${y}) rotate(${rotate})"><text text-anchor="middle" dominant-baseline="middle" style="font-size:${size}px">${label}</text></g>`;
    }
  }
  svg += `</svg>`;
  const dataUrl = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`;
  const style = document.createElement('style');
  style.innerHTML = `.hero::before{background-image:${dataUrl}; background-size:${tile}px ${tile}px; background-repeat:repeat; mix-blend-mode: screen;}`;
  document.head.appendChild(style);
})();


