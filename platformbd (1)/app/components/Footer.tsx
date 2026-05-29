export default function Footer() {
  const cols = [
    {title:'Platform',links:['Explore','VR Experiences','AI Companion','Live','Community']},
    {title:'Creators',links:['Upload Content','Creator Hub','Analytics','Monetization','Guidelines']},
    {title:'Company',links:['About BlackDesire','Blog','Careers','Press','Contact']},
  ]
  return (
    <footer style={{background:'#050508',borderTop:'1px solid rgba(201,168,76,0.1)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',padding:'56px 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr',gap:'40px',marginBottom:'48px'}}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'16px'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'linear-gradient(135deg,#E8C96A,#9A7A2E)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontFamily:'serif',fontWeight:900,fontSize:'0.75rem',color:'#050508'}}>BD</span>
              </div>
              <span style={{fontFamily:'Playfair Display,serif',color:'var(--gold)',fontWeight:700,fontSize:'1rem',letterSpacing:'0.2em',textTransform:'uppercase'}}>BlackDesire</span>
            </div>
            <p style={{color:'rgba(250,250,250,0.45)',fontSize:'0.8rem',lineHeight:1.75}}>
              The immersive intimate wellness platform. AI-powered. Device-synced. Community-driven.
            </p>
          </div>
          {cols.map(col=>(
            <div key={col.title}>
              <h4 style={{color:'var(--gold)',fontSize:'0.65rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.15em',marginBottom:'18px'}}>{col.title}</h4>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px'}}>
                {col.links.map(l=>(
                  <li key={l}><a href="#" style={{color:'rgba(250,250,250,0.45)',fontSize:'0.8rem',textDecoration:'none',transition:'color 0.2s'}}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divider-gold" style={{marginBottom:'24px'}} />
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px'}}>
          <p style={{color:'rgba(250,250,250,0.4)',fontSize:'0.75rem'}}>© 2026 BlackDesire. All rights reserved. Platform for adults 18+ only.</p>
          <div style={{display:'flex',gap:'20px'}}>
            {['Privacy','Terms','Cookies'].map(l=>(
              <a key={l} href="#" style={{color:'rgba(250,250,250,0.4)',fontSize:'0.75rem',textDecoration:'none'}}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
