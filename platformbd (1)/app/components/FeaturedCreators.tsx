'use client'
import { Star, Users, Play, Award } from 'lucide-react'

const creators = [
  {name:'NightVibe',specialty:'VR Experiences',followers:'34.2K',content:48,rating:4.9,verified:true,g:'linear-gradient(135deg,#2D0A4E,#7B2FBE)'},
  {name:'DesireAI',specialty:'AI Companion',followers:'89.1K',content:124,rating:5.0,verified:true,g:'linear-gradient(135deg,#9A7A2E,#C9A84C)'},
  {name:'LuxeVisions',specialty:'4K Productions',followers:'21.5K',content:32,rating:4.8,verified:true,g:'linear-gradient(135deg,#1e1b4b,#4A1275)'},
  {name:'SoundDesire',specialty:'Audio Experiences',followers:'45.7K',content:87,rating:4.7,verified:false,g:'linear-gradient(135deg,#C9A84C,#9A7A2E)'},
]

export default function FeaturedCreators() {
  return (
    <section style={{padding:'64px 0',background:'linear-gradient(180deg,#050508 0%,#0A000F 50%,#050508 100%)'}}>
      <div className="divider-gold" style={{marginBottom:'64px'}} />
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'32px'}}>
          <div>
            <div style={{color:'var(--gold)',fontSize:'0.65rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'8px'}}>Community</div>
            <h2 style={{fontFamily:'Playfair Display,serif',color:'white',fontSize:'1.6rem',fontWeight:700}}>Top Creators</h2>
          </div>
          <button className="btn-outline-gold" style={{padding:'8px 16px',borderRadius:'2px',fontSize:'0.7rem'}}>All Creators</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'16px'}}>
          {creators.map(c=>(
            <div key={c.name} className="card-glow" style={{padding:'20px',borderRadius:'2px',border:'1px solid rgba(201,168,76,0.1)',background:'rgba(255,255,255,0.02)',cursor:'pointer'}}>
              <div style={{position:'relative',width:'52px',height:'52px',marginBottom:'16px'}}>
                <div style={{width:'52px',height:'52px',borderRadius:'50%',background:c.g,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Playfair Display,serif',fontSize:'1.3rem',fontWeight:900,color:'rgba(245,240,255,0.9)'}}>
                  {c.name[0]}
                </div>
                {c.verified&&(
                  <div style={{position:'absolute',bottom:'-3px',right:'-3px',width:'18px',height:'18px',borderRadius:'50%',background:'var(--gold)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <Award size={9} style={{color:'#050508'}} />
                  </div>
                )}
              </div>
              <h3 style={{fontFamily:'Playfair Display,serif',color:'white',fontWeight:700,fontSize:'0.9rem',marginBottom:'3px'}}>{c.name}</h3>
              <p style={{color:'rgba(250,250,250,0.55)',fontSize:'0.75rem',marginBottom:'14px'}}>{c.specialty}</p>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'16px',fontSize:'0.72rem'}}>
                <span style={{display:'flex',alignItems:'center',gap:'4px',color:'rgba(250,250,250,0.6)'}}><Users size={10}/>{c.followers}</span>
                <span style={{display:'flex',alignItems:'center',gap:'4px',color:'var(--gold)'}}><Star size={10} style={{fill:'var(--gold)'}}/>{c.rating}</span>
                <span style={{display:'flex',alignItems:'center',gap:'4px',color:'rgba(250,250,250,0.6)'}}><Play size={10}/>{c.content}</span>
              </div>
              <button style={{width:'100%',textAlign:'center',fontSize:'0.65rem',fontWeight:700,color:'rgba(212,182,90,0.75)',textTransform:'uppercase',letterSpacing:'0.12em',border:'1px solid rgba(212,182,90,0.3)',padding:'7px',borderRadius:'2px',background:'transparent',cursor:'pointer',transition:'all 0.2s'}}>
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="divider-gold" style={{marginTop:'64px'}} />
    </section>
  )
}
