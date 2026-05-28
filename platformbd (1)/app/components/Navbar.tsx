'use client'
import { useState } from 'react'
import { Search, Bell, Upload, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <nav className="nav-glass" style={{position:'fixed',top:0,left:0,right:0,zIndex:50}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px',height:'64px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'16px'}}>
        <a href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none',flexShrink:0}}>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'linear-gradient(135deg,#E8C96A,#9A7A2E)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 20px rgba(201,168,76,0.4)'}}>
            <span style={{fontFamily:'serif',fontWeight:900,fontSize:'0.75rem',color:'#050508'}}>BD</span>
          </div>
          <span className="text-gold-shimmer" style={{fontFamily:'Playfair Display,serif',fontSize:'1.1rem',fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',display:'none'}}>BlackDesire</span>
          <span className="text-gold-shimmer" style={{fontFamily:'Playfair Display,serif',fontSize:'1.1rem',fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase'}}>BlackDesire</span>
        </a>

        <div style={{flex:1,maxWidth:'480px',display:'flex',alignItems:'center',gap:'8px',padding:'8px 14px',borderRadius:'2px',border:'1px solid rgba(201,168,76,0.2)',background:'rgba(255,255,255,0.03)'}}>
          <Search size={13} style={{color:'rgba(201,168,76,0.5)',flexShrink:0}} />
          <input type="text" placeholder="Search content, creators, experiences..." style={{background:'transparent',border:'none',outline:'none',color:'rgba(245,240,255,0.6)',fontSize:'0.8rem',fontFamily:'Syne,sans-serif',width:'100%'}} />
        </div>

        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <button className="btn-gold" style={{padding:'8px 18px',fontSize:'0.7rem',borderRadius:'2px',display:'flex',alignItems:'center',gap:'6px'}}>
            <Upload size={11} />
            <span>Upload</span>
          </button>
          <button style={{padding:'8px',borderRadius:'2px',border:'1px solid rgba(201,168,76,0.2)',background:'transparent',cursor:'pointer',position:'relative'}}>
            <Bell size={15} style={{color:'rgba(201,168,76,0.7)'}} />
            <span style={{position:'absolute',top:'6px',right:'6px',width:'6px',height:'6px',borderRadius:'50%',background:'var(--gold)'}}></span>
          </button>
          <div style={{width:'32px',height:'32px',borderRadius:'50%',border:'1px solid rgba(201,168,76,0.4)',background:'linear-gradient(135deg,#2D0A4E,#7B2FBE)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
            <span style={{color:'var(--gold)',fontSize:'0.75rem',fontWeight:700}}>U</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
