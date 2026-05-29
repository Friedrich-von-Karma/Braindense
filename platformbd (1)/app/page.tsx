'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(155,109,255,0.04) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      
      {/* Subtle gold ambient */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,98,0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '48px',
        maxWidth: '600px'
      }}>
        {/* Logo container - Heart shape */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            position: 'relative',
            width: '240px',
            height: '220px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Heart shape using CSS */}
            <svg 
              viewBox="0 0 32 29.6" 
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.15))',
              }}
            >
              <path 
                fill="#FFFFFF" 
                d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
              />
            </svg>
            {/* Logo on top */}
            <div style={{
              position: 'relative',
              zIndex: 10,
              marginTop: '-10px',
            }}>
              <Image 
                src="/images/logo.png" 
                alt="BlackDesire" 
                width={140} 
                height={70}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.85rem',
          fontWeight: 500,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          marginBottom: '72px'
        }}>
          Immersive. Connected. Yours.
        </p>

        {/* Enter button */}
        <Link href="/main" style={{ textDecoration: 'none' }}>
          <button 
            className="animate-glow"
            style={{
              background: 'linear-gradient(135deg, #C9A962 0%, #A88A4A 100%)',
              color: '#000000',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '0.8rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '20px 72px',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(201,169,98,0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Enter Platform
          </button>
        </Link>

        {/* Age notice */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          color: 'rgba(255,255,255,0.2)',
          fontSize: '0.7rem',
          fontWeight: 400,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginTop: '80px'
        }}>
          Adults 18+ Only
        </p>
      </div>
    </main>
  )
}
