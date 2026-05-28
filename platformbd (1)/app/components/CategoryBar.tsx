'use client'

const cats = ['All','VR Experiences','AI Companion','Live','Community','Games','Audio','Guides']

export default function CategoryBar({active,onSelect}:{active:string;onSelect:(c:string)=>void}) {
  return (
    <div className="nav-glass" style={{position:'sticky',top:'64px',zIndex:40}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'0 24px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'8px',overflowX:'auto',padding:'12px 0',scrollbarWidth:'none'}}>
          {cats.map(c=>(
            <button key={c} className={`pill${active===c?' active':''}`} onClick={()=>onSelect(c)}>{c}</button>
          ))}
          <div style={{width:'1px',height:'16px',background:'rgba(201,168,76,0.2)',flexShrink:0,margin:'0 4px'}} />
          <button className={`pill${active==='Trending'?' active':''}`} onClick={()=>onSelect('Trending')} style={{background:'rgba(123,47,190,0.1)',borderColor:'rgba(123,47,190,0.4)',color:'var(--violet-glow)'}}>🔥 Trending</button>
        </div>
        <div className="divider-gold" />
      </div>
    </div>
  )
}
