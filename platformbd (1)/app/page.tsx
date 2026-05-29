'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <main style={{minHeight: '100vh', background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden'}}>
      {/* Subtle purple glow in background */}
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(circle, rgba(143,63,212,0.15) 0%, transparent 70%)',pointerEvents:'none'}} />
      
      {/* Gold accent lines */}
      <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:'1px',height:'120px',background:'linear-gradient(to bottom, transparent, rgba(212,182,90,0.3), transparent)'}} />
      <div style={{position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',width:'1px',height:'120px',background:'linear-gradient(to top, transparent, rgba(212,182,90,0.3), transparent)'}} />

      {/* Main content */}
      <div style={{position:'relative',zIndex:10,display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'24px'}}>
        {/* Logo image */}
        <div style={{marginBottom:'40px',position:'relative'}}>
          <Image 
            src="/images/logo.png" 
            alt="BlackDesire Logo" 
            width={280} 
            height={140}
            style={{objectFit:'contain'}}
            priority
          />
          {/* Subtle glow behind logo */}
          <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle, rgba(212,182,90,0.2) 0%, transparent 70%)',zIndex:-1,pointerEvents:'none'}} />
        </div>

        {/* Brand name */}
        <h1 style={{fontFamily:'Playfair Display, serif',fontSize:'clamp(2.5rem,7vw,4.5rem)',fontWeight:900,letterSpacing:'0.12em',textTransform:'uppercase',marginBottom:'16px',color:'#FFFFFF'}}>
          BlackDesire
        </h1>

        {/* Tagline */}
        <p style={{color:'rgba(255,255,255,0.6)',fontSize:'clamp(0.9rem,2vw,1.1rem)',fontWeight:500,letterSpacing:'0.3em',textTransform:'uppercase',marginBottom:'56px',fontFamily:'Syne, sans-serif'}}>
          Immersive. Connected. Yours.
        </p>

        {/* Enter button */}
        <Link href="/main" style={{textDecoration:'none'}}>
          <button style={{background:'linear-gradient(135deg, #D4B65A, #A8862E)',color:'#000000',fontWeight:700,fontFamily:'Syne, sans-serif',letterSpacing:'0.15em',textTransform:'uppercase',padding:'18px 56px',borderRadius:'2px',border:'none',cursor:'pointer',fontSize:'0.9rem',transition:'all 0.3s ease',boxShadow:'0 0 40px rgba(212,182,90,0.3)'}}
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
        <p style={{color:'rgba(255,255,255,0.3)',fontSize:'0.75rem',marginTop:'48px',letterSpacing:'0.1em'}}>
          18+ Adults Only
        </p>
      </div>
    </main>
  )
}
