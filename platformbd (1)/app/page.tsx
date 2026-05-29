'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <main style={{minHeight: '100vh', background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden'}}>
      {/* Subtle purple glow in background */}
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(circle, rgba(143,63,212,0.1) 0%, transparent 70%)',pointerEvents:'none'}} />
      
      {/* Gold accent lines */}
      <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:'1px',height:'120px',background:'linear-gradient(to bottom, transparent, rgba(212,182,90,0.3), transparent)'}} />
      <div style={{position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:'1px',height:'120px',background:'linear-gradient(to top, transparent, rgba(212,182,90,0.3), transparent)'}} />

      {/* Main content */}
      <div style={{position:'relative',zIndex:10,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'24px'}}>
        {/* Logo on white background */}
        <div style={{marginBottom:'48px',position:'relative'}}>
          <div style={{
            background:'#FFFFFF',
            borderRadius:'16px',
            padding:'32px 48px',
            boxShadow:'0 0 60px rgba(255,255,255,0.15), 0 0 120px rgba(212,182,90,0.1)',
            border:'1px solid rgba(255,255,255,0.2)'
          }}>
            <Image 
              src="/images/logo.png" 
              alt="BlackDesire Logo" 
              width={320} 
              height={160}
              style={{objectFit:'contain'}}
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <p style={{color:'rgba(255,255,255,0.5)',fontSize:'clamp(0.85rem,2vw,1rem)',fontWeight:500,letterSpacing:'0.35em',textTransform:'uppercase',marginBottom:'56px',fontFamily:'Syne, sans-serif'}}>
          Immersive. Connected. Yours.
        </p>

        {/* Enter button */}
        <Link href="/main" style={{textDecoration:'none'}}>
          <button style={{background:'linear-gradient(135deg, #D4B65A, #A8862E)',color:'#000000',fontWeight:700,fontFamily:'Syne, sans-serif',letterSpacing:'0.15em',textTransform:'uppercase',padding:'18px 64px',borderRadius:'2px',border:'1px solid rgba(255,255,255,0.3)',cursor:'pointer',fontSize:'0.9rem',transition:'all 0.3s ease',boxShadow:'0 0 40px rgba(212,182,90,0.3)'}}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(212,182,90,0.6)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(212,182,90,0.3)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Enter Platform
          </button>
        </Link>

        {/* Age notice */}
        <p style={{color:'rgba(255,255,255,0.25)',fontSize:'0.7rem',marginTop:'48px',letterSpacing:'0.15em',textTransform:'uppercase'}}>
          18+ Adults Only
        </p>
      </div>
    </main>
  )
}
