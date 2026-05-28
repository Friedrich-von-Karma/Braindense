'use client'
import { Play, Cpu, Wifi, Eye } from 'lucide-react'

export default function HeroSection() {
  return (
    <section style={{position:'relative',minHeight:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',overflow:'hidden',paddingTop:'64px'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,18,117,0.55) 0%, rgba(13,0,16,0.9) 60%, #050508 100%)'}} />
      
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.08,pointerEvents:'none'}} viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A84C" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="200" x2="1440" y2="200" stroke="url(#lg1)" strokeWidth="0.5" />
        <line x1="0" y1="600" x2="1440" y2="600" stroke="url(#lg1)" strokeWidth="0.5" />
        <circle cx="720" cy="400" r="260" fill="none" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="10 18" />
        <circle cx="720" cy="400" r="370" fill="none" stroke="#7B2FBE" strokeWidth="0.3" strokeDasharray="6 22" />
        <line x1="0" y1="800" x2="1440" y2="0" stroke="#C9A84C" strokeWidth="0.3" opacity="0.4" />
        <line x1="200" y1="0" x2="200" y2="800" stroke="#C9A84C" strokeWidth="0.4" opacity="0.3" />
        <line x1="1240" y1="0" x2="1240" y2="800" stroke="#C9A84C" strokeWidth="0.4" opacity="0.3" />
      </svg>

      <div style={{position:'absolute',top:'30%',left:'20%',width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle, rgba(123,47,190,0.7) 0%, transparent 70%)',animation:'float 9s ease-in-out infinite',pointerEvents:'none'}} />
      <div style={{position:'absolute',bottom:'25%',right:'20%',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle, rgba(201,168,76,0.5) 0%, transparent 70%)',animation:'float 12s ease-in-out infinite reverse',pointerEvents:'none'}} />

      <div style={{position:'relative',zIndex:10,maxWidth:'1280px',margin:'0 auto',padding:'80px 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',alignItems:'center'}}>
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',marginBottom:'28px',padding:'6px 14px',borderRadius:'2px',border:'1px solid rgba(123,47,190,0.5)',background:'rgba(45,10,78,0.4)'}}>
            <Cpu size={10} style={{color:'var(--gold)'}} />
            <span style={{color:'var(--gold)',fontSize:'0.65rem',fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase'}}>AI-Powered Intimate Platform</span>
          </div>

          <h1 style={{fontFamily:'Playfair Display,serif',fontSize:'clamp(3rem,6vw,5.5rem)',fontWeight:900,lineHeight:1,marginBottom:'28px',color:'white'}}>
            Connect.<br />
            <span className="text-gold-shimmer">Immerse.</span><br />
            Desire.
          </h1>

          <p style={{color:'rgba(245,240,255,0.45)',fontSize:'0.9rem',lineHeight:1.8,marginBottom:'36px',maxWidth:'420px'}}>
            The platform where your BlackDesire devices sync with immersive content. Explore curated experiences, create your own, and connect with a community that understands pleasure without limits.
          </p>

          <div style={{display:'flex',gap:'14px',marginBottom:'48px',flexWrap:'wrap'}}>
            <button className="btn-gold" style={{padding:'12px 28px',borderRadius:'2px',fontSize:'0.75rem'}}>
              <Play size={13} style={{fill:'currentColor'}} />
              Explore Content
            </button>
            <button className="btn-outline-gold" style={{padding:'12px 28px',borderRadius:'2px',fontSize:'0.75rem'}}>
              Connect Device
            </button>
          </div>

          <div style={{display:'flex',gap:'40px'}}>
            {[{v:'24K+',l:'Creators'},{v:'180K+',l:'Experiences'},{v:'3',l:'Devices'}].map(s => (
              <div key={s.l}>
                <div style={{fontFamily:'Playfair Display,serif',fontSize:'1.8rem',fontWeight:700,color:'var(--gold)'}}>{s.v}</div>
                <div style={{color:'rgba(245,240,255,0.35)',fontSize:'0.65rem',textTransform:'uppercase',letterSpacing:'0.15em',marginTop:'2px'}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          <div style={{position:'relative',borderRadius:'2px',overflow:'hidden',border:'1px solid rgba(201,168,76,0.2)',aspectRatio:'16/9',background:'linear-gradient(135deg,rgba(45,10,78,0.6),rgba(5,0,8,0.9)'}}>
            <div className="thumb-overlay" style={{position:'absolute',inset:0}} />
            <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.12}} viewBox="0 0 640 360">
              <circle cx="320" cy="180" r="100" fill="none" stroke="#C9A84C" strokeWidth="0.8" />
              <circle cx="320" cy="180" r="60" fill="none" stroke="#7B2FBE" strokeWidth="0.8" />
              <line x1="0" y1="180" x2="640" y2="180" stroke="#C9A84C" strokeWidth="0.5" />
              <line x1="320" y1="0" x2="320" y2="360" stroke="#C9A84C" strokeWidth="0.5" />
            </svg>
            <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:'56px',height:'56px',borderRadius:'50%',border:'1px solid rgba(201,168,76,0.5)',background:'rgba(0,0,0,0.5)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',transition:'all 0.3s'}}>
                <Play size={22} style={{color:'var(--gold)',fill:'var(--gold)',marginLeft:'3px'}} />
              </div>
            </div>
            <div style={{position:'absolute',top:'12px',left:'12px',display:'flex',gap:'6px'}}>
              <span className="tag" style={{background:'rgba(201,168,76,0.2)',color:'var(--gold)',border:'1px solid rgba(201,168,76,0.4)'}}>VR</span>
              <span className="tag" style={{background:'rgba(123,47,190,0.25)',color:'var(--violet-glow)',border:'1px solid rgba(123,47,190,0.4)'}}>AI Sync</span>
            </div>
            <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'14px'}}>
              <div style={{fontFamily:'Playfair Display,serif',color:'white',fontWeight:700,fontSize:'0.9rem'}}>Featured Experience</div>
              <div style={{color:'rgba(255,255,255,0.45)',fontSize:'0.75rem',marginTop:'3px'}}>Device-synced · 24 min · 4K</div>
            </div>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px'}}>
            {[
              {icon:<Wifi size={16}/>,label:'Live Sync',desc:'Real-time device control'},
              {icon:<Eye size={16}/>,label:'VR Ready',desc:'Immersive 360° content'},
              {icon:<Cpu size={16}/>,label:'AI Companion',desc:'Learns your preferences'},
            ].map(f=>(
              <div key={f.label} className="card-glow" style={{padding:'14px',borderRadius:'2px',border:'1px solid rgba(201,168,76,0.12)',background:'rgba(255,255,255,0.02)'}}>
                <div style={{color:'var(--gold)',marginBottom:'10px'}}>{f.icon}</div>
                <div style={{color:'white',fontSize:'0.75rem',fontWeight:700,marginBottom:'4px'}}>{f.label}</div>
                <div style={{color:'rgba(245,240,255,0.35)',fontSize:'0.7rem'}}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'120px',background:'linear-gradient(to bottom,transparent,#050508)',pointerEvents:'none'}} />
    </section>
  )
}
