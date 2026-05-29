'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Search, User, Bell, Mail, Library, Menu, X, Play, Gamepad2, Film, AppWindow, Music, BookOpen, Sparkles, Heart, Eye } from 'lucide-react'

const categories = [
  { name: 'Videos', icon: Play },
  { name: 'Interactive Games', icon: Gamepad2 },
  { name: 'Films', icon: Film },
  { name: 'Apps', icon: AppWindow },
  { name: 'Audio', icon: Music },
  { name: 'Stories', icon: BookOpen },
  { name: 'AI Experiences', icon: Sparkles },
]

const mockContent = [
  { id: 1, title: 'Midnight Desires', creator: 'Luna Eclipse', views: '24K', duration: '18:42', thumbnail: '' },
  { id: 2, title: 'Ocean Dreams', creator: 'Aqua Muse', views: '18K', duration: '22:15', thumbnail: '' },
  { id: 3, title: 'Electric Touch', creator: 'Neon Vixen', views: '32K', duration: '15:30', thumbnail: '' },
  { id: 4, title: 'Velvet Night', creator: 'Scarlet Rose', views: '28K', duration: '20:00', thumbnail: '' },
  { id: 5, title: 'Golden Hour', creator: 'Amber Sky', views: '15K', duration: '25:10', thumbnail: '' },
  { id: 6, title: 'Shadow Play', creator: 'Dark Angel', views: '42K', duration: '19:45', thumbnail: '' },
]

function ContentCard({ item }: { item: typeof mockContent[0] }) {
  return (
    <div style={{minWidth:'200px',borderRadius:'8px',overflow:'hidden',background:'#0A0A0A',border:'1px solid rgba(212,182,90,0.15)',cursor:'pointer',transition:'all 0.3s'}} className="card-glow">
      <div style={{position:'relative',aspectRatio:'16/9',background:'linear-gradient(135deg, #1a0828 0%, #0d0010 100%)'}}>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Play size={32} style={{color:'rgba(212,182,90,0.5)'}} />
        </div>
        <div style={{position:'absolute',bottom:'8px',right:'8px',background:'rgba(0,0,0,0.8)',padding:'2px 6px',borderRadius:'2px',fontSize:'0.7rem',color:'white'}}>{item.duration}</div>
      </div>
      <div style={{padding:'12px'}}>
        <h3 style={{color:'white',fontSize:'0.85rem',fontWeight:600,marginBottom:'4px',fontFamily:'Playfair Display, serif'}}>{item.title}</h3>
        <p style={{color:'rgba(212,182,90,0.8)',fontSize:'0.75rem',marginBottom:'6px'}}>{item.creator}</p>
        <div style={{display:'flex',alignItems:'center',gap:'8px',color:'rgba(255,255,255,0.4)',fontSize:'0.7rem'}}>
          <span style={{display:'flex',alignItems:'center',gap:'3px'}}><Eye size={10}/>{item.views}</span>
        </div>
      </div>
    </div>
  )
}

function ContentRow({ title, items }: { title: string, items: typeof mockContent }) {
  return (
    <div style={{marginBottom:'32px'}}>
      <h2 style={{color:'white',fontSize:'1.1rem',fontWeight:700,marginBottom:'16px',fontFamily:'Playfair Display, serif',display:'flex',alignItems:'center',gap:'8px'}}>
        <span style={{color:'var(--gold)'}}>//</span> {title}
      </h2>
      <div style={{display:'flex',gap:'16px',overflowX:'auto',paddingBottom:'8px',scrollbarWidth:'thin'}}>
        {items.map(item => <ContentCard key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export default function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main style={{minHeight:'100vh',background:'#000000',color:'white'}}>
      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',zIndex:40}} onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside style={{
        position:'fixed',
        top:0,
        left:0,
        height:'100vh',
        width:'280px',
        background:'#0A0A0A',
        borderRight:'1px solid rgba(212,182,90,0.2)',
        zIndex:50,
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition:'transform 0.3s ease'
      }}>
        <div style={{padding:'24px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'32px'}}>
            <h2 style={{color:'var(--gold)',fontSize:'1rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase'}}>Categories</h2>
            <button onClick={() => setSidebarOpen(false)} style={{background:'none',border:'none',color:'white',cursor:'pointer',padding:'4px'}}>
              <X size={20} />
            </button>
          </div>
          <nav style={{display:'flex',flexDirection:'column',gap:'4px'}}>
            {categories.map(cat => {
              const Icon = cat.icon
              return (
                <button key={cat.name} style={{display:'flex',alignItems:'center',gap:'12px',padding:'14px 16px',background:'transparent',border:'none',color:'white',cursor:'pointer',borderRadius:'4px',transition:'all 0.2s',textAlign:'left',fontSize:'0.9rem'}}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(212,182,90,0.1)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  <Icon size={18} style={{color:'var(--violet-bright)'}} />
                  {cat.name}
                </button>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Top Navigation */}
      <header style={{position:'sticky',top:0,zIndex:30,background:'rgba(0,0,0,0.95)',backdropFilter:'blur(20px)',borderBottom:'1px solid rgba(212,182,90,0.15)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',padding:'12px 24px'}}>
          {/* Menu button */}
          <button onClick={() => setSidebarOpen(true)} style={{background:'none',border:'none',color:'white',cursor:'pointer',padding:'8px',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center'}}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(212,182,90,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'none'}
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <Image src="/images/logo.png" alt="BlackDesire" width={40} height={40} style={{objectFit:'contain'}} />
            <span style={{color:'white',fontFamily:'Playfair Display, serif',fontWeight:700,fontSize:'1.1rem',letterSpacing:'0.05em'}}>BlackDesire</span>
          </div>

          {/* Search bar */}
          <div style={{flex:1,maxWidth:'500px',marginLeft:'24px'}}>
            <div style={{position:'relative'}}>
              <Search size={18} style={{position:'absolute',left:'14px',top:'50%',transform:'translateY(-50%)',color:'rgba(255,255,255,0.4)'}} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search experiences, creators, categories..."
                style={{width:'100%',background:'#0A0A0A',border:'1px solid rgba(212,182,90,0.2)',borderRadius:'4px',padding:'12px 14px 12px 44px',color:'white',fontSize:'0.9rem',outline:'none',transition:'border-color 0.2s'}}
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(212,182,90,0.5)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(212,182,90,0.2)'}
              />
            </div>
          </div>

          {/* Right side actions */}
          <div style={{display:'flex',alignItems:'center',gap:'8px',marginLeft:'auto'}}>
            {[
              { icon: Library, label: 'My Library' },
              { icon: Bell, label: 'Notifications' },
              { icon: Mail, label: 'Inbox' },
              { icon: User, label: 'Profile' },
            ].map(item => {
              const Icon = item.icon
              return (
                <button key={item.label} title={item.label} style={{background:'none',border:'none',color:'white',cursor:'pointer',padding:'10px',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s'}}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(212,182,90,0.1)'
                    e.currentTarget.style.color = 'var(--gold)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'none'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  <Icon size={20} />
                </button>
              )
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{padding:'32px 24px'}}>
        <ContentRow title="Watching Now" items={mockContent.slice(0, 4)} />
        <ContentRow title="Popular" items={[...mockContent].reverse()} />
        <ContentRow title="Recent" items={mockContent.slice(2)} />
        <ContentRow title="Newest" items={[...mockContent].sort(() => Math.random() - 0.5)} />
      </div>
    </main>
  )
}
