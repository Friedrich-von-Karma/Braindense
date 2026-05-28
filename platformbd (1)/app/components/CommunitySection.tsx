'use client'
import { Upload, MessageCircle, Users, Sparkles } from 'lucide-react'

export default function CommunitySection() {
  return (
    <section style={{padding:'80px 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(74,18,117,0.2) 0%, transparent 70%)',pointerEvents:'none'}} />
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px',position:'relative',zIndex:1}}>
        <div style={{borderRadius:'2px',padding:'64px 48px',marginBottom:'40px',textAlign:'center',position:'relative',overflow:'hidden',background:'linear-gradient(135deg,rgba(45,10,78,0.55),rgba(26,0,48,0.75))',border:'1px solid rgba(201,168,76,0.2)'}}>
          <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.06,pointerEvents:'none'}} viewBox="0 0 800 300">
            <circle cx="400" cy="150" r="110" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="12 24"/>
            <circle cx="400" cy="150" r="175" fill="none" stroke="#7B2FBE" strokeWidth="0.6" strokeDasharray="8 20"/>
            <line x1="0" y1="150" x2="800" y2="150" stroke="#C9A84C" strokeWidth="0.5"/>
          </svg>
          <div style={{position:'relative',zIndex:1}}>
            <div className="animate-pulse-glow" style={{width:'60px',height:'60px',borderRadius:'50%',background:'linear-gradient(135deg,#C9A84C,#9A7A2E)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px'}}>
              <Upload size={22} style={{color:'#050508'}} />
            </div>
            <h2 style={{fontFamily:'Playfair Display,serif',color:'white',fontSize:'clamp(1.8rem,4vw,2.8rem)',fontWeight:900,marginBottom:'16px'}}>
              Share Your <span className="text-gold-shimmer">Desire</span>
            </h2>
            <p style={{color:'rgba(245,240,255,0.45)',maxWidth:'520px',margin:'0 auto 32px',fontSize:'0.9rem',lineHeight:1.75}}>
              Upload your content, create immersive experiences, and build your audience on the only platform that truly syncs with your devices. Your creativity. Your community.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'14px'}}>
              <button className="btn-gold" style={{padding:'13px 32px',borderRadius:'2px',fontSize:'0.8rem'}}>Start Creating</button>
              <button className="btn-outline-gold" style={{padding:'13px 32px',borderRadius:'2px',fontSize:'0.8rem'}}>Learn More</button>
            </div>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'16px'}}>
          {[
            {icon:<MessageCircle size={20}/>,title:'Groups & Chats',desc:'Join themed communities, create private groups, and connect with like-minded people who share your desires.'},
            {icon:<Sparkles size={20}/>,title:'AI Playlists',desc:'Our AI curates personalized playlists based on your preferences and syncs them perfectly with your devices.'},
            {icon:<Users size={20}/>,title:'Live Sessions',desc:'Go live with device synchronization. Your audience experiences exactly what you experience — in real time.'},
          ].map(f=>(
            <div key={f.title} className="card-glow" style={{padding:'24px',borderRadius:'2px',border:'1px solid rgba(201,168,76,0.1)',background:'rgba(255,255,255,0.02)'}}>
              <div style={{color:'var(--gold)',marginBottom:'16px',width:'38px',height:'38px',borderRadius:'2px',display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(201,168,76,0.08)',border:'1px solid rgba(201,168,76,0.18)'}}>
                {f.icon}
              </div>
              <h3 style={{fontFamily:'Playfair Display,serif',color:'white',fontWeight:700,marginBottom:'10px'}}>{f.title}</h3>
              <p style={{color:'rgba(245,240,255,0.4)',fontSize:'0.85rem',lineHeight:1.7}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
