'use client'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main style={{minHeight: '100vh', background: '#050508', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden'}}>
      {/* Background gradient */}
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(74,18,117,0.45) 0%, rgba(13,0,16,0.85) 50%, #050508 100%)'}} />
      
      {/* Geometric background */}
      <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.1,pointerEvents:'none'}} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A84C" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="720" cy="450" r="200" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="10 18" />
        <circle cx="720" cy="450" r="320" fill="none" stroke="#7B2FBE" strokeWidth="0.4" strokeDasharray="6 22" />
        <circle cx="720" cy="450" r="440" fill="none" stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="8 24" />
        <line x1="0" y1="450" x2="1440" y2="450" stroke="url(#lg1)" strokeWidth="0.5" />
        <line x1="720" y1="0" x2="720" y2="900" stroke="url(#lg1)" strokeWidth="0.5" />
      </svg>

      {/* Floating orbs */}
      <div style={{position:'absolute',top:'25%',left:'15%',width:'280px',height:'280px',borderRadius:'50%',background:'radial-gradient(circle, rgba(123,47,190,0.5) 0%, transparent 70%)',animation:'float 10s ease-in-out infinite',pointerEvents:'none'}} />
      <div style={{position:'absolute',bottom:'20%',right:'15%',width:'220px',height:'220px',borderRadius:'50%',background:'radial-gradient(circle, rgba(201,168,76,0.4) 0%, transparent 70%)',animation:'float 14s ease-in-out infinite reverse',pointerEvents:'none'}} />

      {/* Main content */}
      <div style={{position:'relative',zIndex:10,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'24px'}}>
        {/* Logo */}
        <div style={{width:'100px',height:'100px',borderRadius:'50%',background:'linear-gradient(135deg,#E8C96A,#9A7A2E)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 60px rgba(201,168,76,0.5), 0 0 120px rgba(201,168,76,0.25)',marginBottom:'32px',animation:'pulse-glow 3s ease-in-out infinite'}}>
          <span style={{fontFamily:'Playfair Display, serif',fontWeight:900,fontSize:'2.5rem',color:'#050508'}}>BD</span>
        </div>

        {/* Brand name */}
        <h1 style={{fontFamily:'Playfair Display, serif',fontSize:'clamp(3rem,8vw,5rem)',fontWeight:900,letterSpacing:'0.15em',textTransform:'uppercase',marginBottom:'16px',background:'linear-gradient(90deg, #C9A84C, #E8C96A, #C9A84C, #9A7A2E, #C9A84C)',backgroundSize:'200% auto',WebkitBackgroundClip:'text',backgroundClip:'text',WebkitTextFillColor:'transparent',animation:'shimmer 3s linear infinite'}}>
          BlackDesire
        </h1>

        {/* Tagline */}
        <p style={{color:'rgba(245,240,255,0.7)',fontSize:'clamp(1rem,2vw,1.25rem)',fontWeight:500,letterSpacing:'0.25em',textTransform:'uppercase',marginBottom:'56px',fontFamily:'Syne, sans-serif'}}>
          Immersive. Connected. Yours.
        </p>

        {/* Enter button */}
        <Link href="/main" style={{textDecoration:'none'}}>
          <button style={{background:'linear-gradient(135deg, #C9A84C, #9A7A2E)',color:'#050508',fontWeight:700,fontFamily:'Syne, sans-serif',letterSpacing:'0.15em',textTransform:'uppercase',padding:'18px 56px',borderRadius:'2px',border:'none',cursor:'pointer',fontSize:'0.9rem',transition:'all 0.3s ease',boxShadow:'0 0 40px rgba(201,168,76,0.4)'}}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(201,168,76,0.7)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(201,168,76,0.4)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Enter Platform
          </button>
        </Link>

        {/* Age notice */}
        <p style={{color:'rgba(245,240,255,0.35)',fontSize:'0.75rem',marginTop:'48px',letterSpacing:'0.1em'}}>
          18+ Adults Only
        </p>
      </div>
    </main>
  )
}
