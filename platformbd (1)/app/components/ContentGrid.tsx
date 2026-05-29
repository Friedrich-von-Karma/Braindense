'use client'
import { Play, Heart, Eye, Clock, Lock, Zap } from 'lucide-react'

const contents = [
  {id:1,title:'Deep Sync Experience Vol.1',creator:'NightVibe',views:'84K',duration:'18:42',tags:['VR','AI Sync'],premium:false,hot:true,c1:'#2D0A4E',c2:'#1A0030'},
  {id:2,title:'AI Companion: First Encounter',creator:'DesireAI',views:'210K',duration:'24:00',tags:['AI','Interactive'],premium:false,hot:true,c1:'#3B0764',c2:'#050508'},
  {id:3,title:'Immersive VR Garden',creator:'LuxeVisions',views:'44K',duration:'32:15',tags:['VR','4K'],premium:true,hot:false,c1:'#1e1b4b',c2:'#0D0010'},
  {id:4,title:'Sync Sessions: Partners',creator:'ConnectedX',views:'67K',duration:'15:30',tags:['Live Sync','Couples'],premium:false,hot:false,c1:'#4A1275',c2:'#050508'},
  {id:5,title:'Solo Pleasure Protocol',creator:'BlackKit',views:'120K',duration:'22:00',tags:['Audio','AI Sync'],premium:false,hot:true,c1:'#3B0764',c2:'#2D0A4E'},
  {id:6,title:'The Companion Chronicles',creator:'AIDesire',views:'55K',duration:'40:12',tags:['AI','Story'],premium:true,hot:false,c1:'#0D0010',c2:'#1e1b4b'},
  {id:7,title:'Haptic Harmony Series',creator:'TechPleasure',views:'33K',duration:'19:05',tags:['Device','Interactive'],premium:false,hot:false,c1:'#050508',c2:'#4A1275'},
  {id:8,title:'Midnight Frequencies',creator:'SoundDesire',views:'78K',duration:'28:33',tags:['Audio','ASMR'],premium:false,hot:false,c1:'#1A0030',c2:'#3B0764'},
]

export default function ContentGrid({category}:{category:string}) {
  const kw = category.toLowerCase().split(' ')[0]
  const display = category==='All' ? contents : contents.filter(c=>c.tags.some(t=>t.toLowerCase().includes(kw)))
  const items = display.length > 0 ? display : contents

  return (
    <section style={{maxWidth:'1280px',margin:'0 auto',padding:'48px 24px'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'28px'}}>
        <div>
          <h2 style={{fontFamily:'Playfair Display,serif',color:'white',fontSize:'1.4rem',fontWeight:700}}>
            {category==='All'?'Featured Experiences':category}
          </h2>
          <p style={{color:'rgba(250,250,250,0.5)',fontSize:'0.7rem',marginTop:'4px',textTransform:'uppercase',letterSpacing:'0.1em'}}>{items.length} experiences available</p>
        </div>
        <button className="btn-outline-gold" style={{padding:'8px 16px',borderRadius:'2px',fontSize:'0.7rem'}}>View All</button>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'16px'}}>
        {items.map(item=><Card key={item.id} item={item} />)}
      </div>
    </section>
  )
}

function Card({item}:{item:typeof contents[0]}) {
  return (
    <div className="card-glow" style={{borderRadius:'2px',overflow:'hidden',border:'1px solid rgba(201,168,76,0.1)',cursor:'pointer'}}>
      <div style={{position:'relative',aspectRatio:'16/9',background:`linear-gradient(135deg,${item.c1},${item.c2})`}}>
        <div className="thumb-overlay" style={{position:'absolute',inset:0}} />
        <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.1}} viewBox="0 0 320 180">
          <circle cx="160" cy="90" r="55" fill="none" stroke="#C9A84C" strokeWidth="0.7" />
          <circle cx="160" cy="90" r="35" fill="none" stroke="#7B2FBE" strokeWidth="0.7" />
          <line x1="0" y1="90" x2="320" y2="90" stroke="#C9A84C" strokeWidth="0.4" />
          <line x1="160" y1="0" x2="160" y2="180" stroke="#C9A84C" strokeWidth="0.4" />
        </svg>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',opacity:0,transition:'opacity 0.3s'}} className="hover-play">
          <div style={{width:'40px',height:'40px',borderRadius:'50%',border:'1px solid rgba(201,168,76,0.5)',background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Play size={14} style={{color:'var(--gold)',fill:'var(--gold)',marginLeft:'2px'}} />
          </div>
        </div>
        <div style={{position:'absolute',bottom:'8px',right:'8px',background:'rgba(0,0,0,0.75)',padding:'2px 6px',borderRadius:'2px',color:'white',fontSize:'0.7rem',display:'flex',alignItems:'center',gap:'4px'}}>
          <Clock size={9} />{item.duration}
        </div>
        <div style={{position:'absolute',top:'8px',left:'8px',display:'flex',gap:'4px'}}>
          {item.hot&&<span className="tag" style={{background:'rgba(201,168,76,0.2)',color:'var(--gold)',border:'1px solid rgba(201,168,76,0.4)',display:'flex',alignItems:'center',gap:'3px'}}><Zap size={8} style={{fill:'currentColor'}}/>HOT</span>}
          {item.premium&&<span className="tag" style={{background:'rgba(123,47,190,0.3)',color:'var(--violet-glow)',border:'1px solid rgba(123,47,190,0.5)',display:'flex',alignItems:'center',gap:'3px'}}><Lock size={8}/>PRO</span>}
        </div>
        {(item.tags.includes('AI Sync')||item.tags.includes('Live Sync'))&&(
          <div style={{position:'absolute',top:'8px',right:'8px',width:'18px',height:'18px',borderRadius:'50%',background:'rgba(201,168,76,0.15)',border:'1px solid rgba(201,168,76,0.4)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--gold)',display:'block',animation:'pulse 2s infinite'}} />
          </div>
        )}
      </div>
      <div style={{padding:'12px',background:'rgba(15,5,24,0.98)'}}>
        <div style={{display:'flex',gap:'6px',marginBottom:'6px',flexWrap:'wrap'}}>
          {item.tags.map(t=><span key={t} style={{color:'rgba(176,106,245,0.9)',fontSize:'0.6rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em'}}>{t}</span>)}
        </div>
        <h3 style={{fontFamily:'Playfair Display,serif',color:'white',fontSize:'0.85rem',fontWeight:700,lineHeight:1.3,marginBottom:'8px'}} className="line-clamp-2">{item.title}</h3>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span style={{color:'rgba(212,182,90,0.85)',fontSize:'0.75rem',fontWeight:600}}>{item.creator}</span>
          <div style={{display:'flex',alignItems:'center',gap:'10px',color:'rgba(250,250,250,0.5)',fontSize:'0.72rem'}}>
            <span style={{display:'flex',alignItems:'center',gap:'3px'}}><Eye size={10}/>{item.views}</span>
            <button style={{background:'none',border:'none',cursor:'pointer',color:'rgba(250,250,250,0.5)',padding:0,display:'flex'}}><Heart size={12}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}
