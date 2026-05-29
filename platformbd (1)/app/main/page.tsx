'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Search, User, Bell, Mail, Library, Menu, X, Play, Gamepad2, Film, AppWindow, Music, BookOpen, Sparkles, Heart, Eye, Users, MessageCircle, Clock, TrendingUp, Star, Zap } from 'lucide-react'

const categories = [
  { name: 'Videos', icon: Play },
  { name: 'Interactive Games', icon: Gamepad2 },
  { name: 'Films', icon: Film },
  { name: 'Apps', icon: AppWindow },
  { name: 'Audio', icon: Music },
  { name: 'Stories', icon: BookOpen },
  { name: 'AI Experiences', icon: Sparkles },
  { name: 'Communities', icon: Users },
  { name: 'Groups', icon: MessageCircle },
]

const mockContent = [
  { id: 1, title: 'Midnight Desires', creator: 'Luna Eclipse', views: '24K', duration: '18:42', likes: '2.1K' },
  { id: 2, title: 'Ocean Dreams', creator: 'Aqua Muse', views: '18K', duration: '22:15', likes: '1.8K' },
  { id: 3, title: 'Electric Touch', creator: 'Neon Vixen', views: '32K', duration: '15:30', likes: '3.2K' },
  { id: 4, title: 'Velvet Night', creator: 'Scarlet Rose', views: '28K', duration: '20:00', likes: '2.5K' },
  { id: 5, title: 'Golden Hour', creator: 'Amber Sky', views: '15K', duration: '25:10', likes: '1.2K' },
  { id: 6, title: 'Shadow Play', creator: 'Dark Angel', views: '42K', duration: '19:45', likes: '4.1K' },
  { id: 7, title: 'Silk & Satin', creator: 'Velvet Dreams', views: '19K', duration: '21:30', likes: '1.9K' },
  { id: 8, title: 'Neon Nights', creator: 'Cyber Venus', views: '35K', duration: '17:20', likes: '3.5K' },
]

const communityPosts = [
  { id: 1, user: 'Luna Eclipse', avatar: 'L', content: 'Just uploaded a new experience! Check it out and let me know what you think.', likes: 234, comments: 45, time: '2h ago' },
  { id: 2, user: 'Neon Vixen', avatar: 'N', content: 'Working on something special for the weekend. Stay tuned for the preview!', likes: 567, comments: 89, time: '4h ago' },
  { id: 3, user: 'Dark Angel', avatar: 'D', content: 'Thanks everyone for 10K followers! New content dropping tomorrow.', likes: 1200, comments: 156, time: '6h ago' },
]

const groups = [
  { id: 1, name: 'VR Enthusiasts', members: '12.4K', posts: 234 },
  { id: 2, name: 'Device Sync Tips', members: '8.2K', posts: 189 },
  { id: 3, name: 'Creator Collab', members: '5.6K', posts: 98 },
  { id: 4, name: 'Premium Lounge', members: '3.1K', posts: 67 },
]

const communities = [
  { id: 1, name: 'Midnight Creators', members: '45K', description: 'Top creators sharing tips' },
  { id: 2, name: 'Tech & Toys', members: '28K', description: 'Device discussions & reviews' },
  { id: 3, name: 'New Explorers', members: '67K', description: 'Beginners welcome here' },
]

function ContentCard({ item }: { item: typeof mockContent[0] }) {
  return (
    <div style={{minWidth:'220px',maxWidth:'220px',borderRadius:'6px',overflow:'hidden',background:'#111111',cursor:'pointer',transition:'all 0.3s'}} className="card-glow">
      <div style={{position:'relative',aspectRatio:'16/9',background:'linear-gradient(135deg, #1a0828 0%, #0d0010 100%)',border:'2px solid rgba(255,255,255,0.25)',borderRadius:'6px 6px 0 0',overflow:'hidden'}}>
        <Image 
          src={`/thumbn/${item.id}.jpg`}
          alt={item.title}
          fill
          style={{objectFit:'cover'}}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.3)'}}>
          <div style={{width:'48px',height:'48px',borderRadius:'50%',background:'rgba(0,0,0,0.6)',border:'2px solid rgba(212,182,90,0.5)',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Play size={20} style={{color:'#D4B65A',marginLeft:'2px'}} fill="rgba(212,182,90,0.3)" />
          </div>
        </div>
        <div style={{position:'absolute',bottom:'8px',right:'8px',background:'rgba(0,0,0,0.9)',padding:'3px 8px',borderRadius:'2px',fontSize:'0.7rem',color:'white',fontWeight:600}}>{item.duration}</div>
        <div style={{position:'absolute',top:'8px',left:'8px',background:'rgba(143,63,212,0.9)',padding:'2px 8px',borderRadius:'2px',fontSize:'0.6rem',color:'white',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.05em'}}>HD</div>
      </div>
      <div style={{padding:'14px'}}>
        <h3 style={{color:'white',fontSize:'0.9rem',fontWeight:700,marginBottom:'6px',fontFamily:'Playfair Display, serif',lineHeight:1.3}}>{item.title}</h3>
        <p style={{color:'#D4B65A',fontSize:'0.8rem',marginBottom:'10px',fontWeight:600}}>{item.creator}</p>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',color:'rgba(255,255,255,0.5)',fontSize:'0.75rem'}}>
          <span style={{display:'flex',alignItems:'center',gap:'4px'}}><Eye size={12}/>{item.views}</span>
          <span style={{display:'flex',alignItems:'center',gap:'4px'}}><Heart size={12}/>{item.likes}</span>
        </div>
      </div>
    </div>
  )
}

function ContentRow({ title, items, icon: Icon }: { title: string, items: typeof mockContent, icon?: any }) {
  return (
    <div style={{marginBottom:'24px',background:'#0A0A0A',borderRadius:'12px',padding:'24px'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
        <h2 style={{color:'white',fontSize:'1.15rem',fontWeight:700,fontFamily:'Playfair Display, serif',display:'flex',alignItems:'center',gap:'10px'}}>
          {Icon && <Icon size={18} style={{color:'#D4B65A'}} />}
          <span style={{color:'#D4B65A'}}>//</span> {title}
        </h2>
        <button style={{color:'rgba(255,255,255,0.5)',fontSize:'0.8rem',background:'none',border:'none',padding:'6px 14px',borderRadius:'4px',cursor:'pointer',transition:'all 0.2s'}}
          onMouseOver={(e) => { e.currentTarget.style.color = '#D4B65A' }}
          onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
        >View All</button>
      </div>
      <div style={{display:'flex',gap:'16px',overflowX:'auto',paddingBottom:'12px',scrollbarWidth:'thin'}}>
        {items.map(item => <ContentCard key={item.id} item={item} />)}
      </div>
    </div>
  )
}

function CommunityPost({ post }: { post: typeof communityPosts[0] }) {
  return (
    <div style={{background:'#111111',borderRadius:'8px',padding:'16px',marginBottom:'12px'}}>
      <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
        <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'linear-gradient(135deg, #8F3FD4, #D4B65A)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,color:'white',fontSize:'1rem'}}>{post.avatar}</div>
        <div>
          <p style={{color:'white',fontWeight:700,fontSize:'0.9rem'}}>{post.user}</p>
          <p style={{color:'rgba(255,255,255,0.4)',fontSize:'0.75rem'}}>{post.time}</p>
        </div>
      </div>
      <p style={{color:'rgba(255,255,255,0.85)',fontSize:'0.9rem',lineHeight:1.6,marginBottom:'14px'}}>{post.content}</p>
      <div style={{display:'flex',alignItems:'center',gap:'20px',color:'rgba(255,255,255,0.5)',fontSize:'0.8rem'}}>
        <span style={{display:'flex',alignItems:'center',gap:'6px',cursor:'pointer'}}><Heart size={14}/>{post.likes}</span>
        <span style={{display:'flex',alignItems:'center',gap:'6px',cursor:'pointer'}}><MessageCircle size={14}/>{post.comments}</span>
      </div>
    </div>
  )
}

function GroupCard({ group }: { group: typeof groups[0] }) {
  return (
    <div style={{background:'#111111',borderRadius:'6px',padding:'14px',minWidth:'180px',cursor:'pointer',transition:'all 0.2s'}}
      onMouseOver={(e) => e.currentTarget.style.background = '#181818'}
      onMouseOut={(e) => e.currentTarget.style.background = '#111111'}
    >
      <h4 style={{color:'white',fontWeight:700,fontSize:'0.9rem',marginBottom:'8px'}}>{group.name}</h4>
      <div style={{display:'flex',alignItems:'center',gap:'12px',color:'rgba(255,255,255,0.5)',fontSize:'0.75rem'}}>
        <span style={{display:'flex',alignItems:'center',gap:'4px'}}><Users size={12}/>{group.members}</span>
        <span style={{display:'flex',alignItems:'center',gap:'4px'}}><MessageCircle size={12}/>{group.posts} posts</span>
      </div>
    </div>
  )
}

function CommunityCard({ community }: { community: typeof communities[0] }) {
  return (
    <div style={{background:'#111111',borderRadius:'8px',padding:'18px',minWidth:'200px',cursor:'pointer',transition:'all 0.2s'}}
      onMouseOver={(e) => e.currentTarget.style.background = '#181818'}
      onMouseOut={(e) => e.currentTarget.style.background = '#111111'}
    >
      <h4 style={{color:'white',fontWeight:700,fontSize:'0.95rem',marginBottom:'6px'}}>{community.name}</h4>
      <p style={{color:'rgba(255,255,255,0.5)',fontSize:'0.8rem',marginBottom:'10px'}}>{community.description}</p>
      <div style={{display:'flex',alignItems:'center',gap:'6px',color:'#8F3FD4',fontSize:'0.8rem',fontWeight:600}}>
        <Users size={14}/>{community.members} members
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
        <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.8)',zIndex:40}} onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside style={{
        position:'fixed',
        top:0,
        left:0,
        height:'100vh',
        width:'300px',
        background:'#0A0A0A',
        zIndex:50,
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition:'transform 0.3s ease',
        overflowY:'auto'
      }}>
        <div style={{padding:'24px'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'28px'}}>
            <h2 style={{color:'#D4B65A',fontSize:'1rem',fontWeight:700,letterSpacing:'0.12em',textTransform:'uppercase'}}>Categories</h2>
            <button onClick={() => setSidebarOpen(false)} style={{background:'none',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'4px',color:'white',cursor:'pointer',padding:'6px',display:'flex'}}>
              <X size={18} />
            </button>
          </div>
          <nav style={{display:'flex',flexDirection:'column',gap:'2px'}}>
            {categories.map(cat => {
              const Icon = cat.icon
              return (
                <button key={cat.name} style={{display:'flex',alignItems:'center',gap:'14px',padding:'14px 16px',background:'transparent',border:'1px solid transparent',color:'white',cursor:'pointer',borderRadius:'4px',transition:'all 0.2s',textAlign:'left',fontSize:'0.9rem',fontWeight:500}}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(212,182,90,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(212,182,90,0.2)'
                    e.currentTarget.style.color = '#D4B65A'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'transparent'
                    e.currentTarget.style.color = 'white'
                  }}
                >
                  <Icon size={18} style={{color:'#8F3FD4'}} />
                  {cat.name}
                </button>
              )
            })}
          </nav>
          
          <div style={{marginTop:'32px',paddingTop:'24px'}}>
            <h3 style={{color:'rgba(255,255,255,0.5)',fontSize:'0.75rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Quick Links</h3>
            <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
              {['Trending Now', 'Top Rated', 'New Releases', 'Following'].map(link => (
                <button key={link} style={{color:'rgba(255,255,255,0.7)',fontSize:'0.85rem',background:'none',border:'none',textAlign:'left',cursor:'pointer',padding:'8px 0',transition:'color 0.2s'}}
                  onMouseOver={(e) => e.currentTarget.style.color = '#D4B65A'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                >{link}</button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Top Navigation */}
      <header style={{position:'sticky',top:0,zIndex:30,background:'#080808',backdropFilter:'blur(24px)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',padding:'14px 28px'}}>
          {/* Menu button */}
          <button onClick={() => setSidebarOpen(true)} style={{background:'none',border:'1px solid rgba(255,255,255,0.15)',color:'white',cursor:'pointer',padding:'10px',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s'}}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(212,182,90,0.1)'; e.currentTarget.style.borderColor = 'rgba(212,182,90,0.3)' }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <div style={{background:'white',borderRadius:'6px',padding:'4px 8px',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Image src="/images/logo.png" alt="BlackDesire" width={80} height={32} style={{objectFit:'contain'}} />
            </div>
          </div>

          {/* Search bar */}
          <div style={{flex:1,maxWidth:'560px',marginLeft:'24px'}}>
            <div style={{position:'relative'}}>
              <Search size={18} style={{position:'absolute',left:'16px',top:'50%',transform:'translateY(-50%)',color:'rgba(255,255,255,0.4)'}} />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search experiences, creators, categories..."
                style={{width:'100%',background:'#0A0A0A',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'6px',padding:'14px 16px 14px 48px',color:'white',fontSize:'0.9rem',outline:'none',transition:'all 0.2s'}}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(212,182,90,0.5)'; e.currentTarget.style.background = '#0D0D0D' }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = '#0A0A0A' }}
              />
            </div>
          </div>

          {/* Right side actions */}
          <div style={{display:'flex',alignItems:'center',gap:'6px',marginLeft:'auto'}}>
            {[
              { icon: Library, label: 'My Library' },
              { icon: Bell, label: 'Notifications' },
              { icon: Mail, label: 'Inbox' },
            ].map(item => {
              const Icon = item.icon
              return (
                <button key={item.label} title={item.label} style={{background:'none',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.7)',cursor:'pointer',padding:'10px',borderRadius:'6px',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s'}}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(212,182,90,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(212,182,90,0.3)'
                    e.currentTarget.style.color = '#D4B65A'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'none'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  }}
                >
                  <Icon size={18} />
                </button>
              )
            })}
            <button title="Profile" style={{background:'linear-gradient(135deg, #8F3FD4, #D4B65A)',border:'2px solid rgba(255,255,255,0.2)',color:'white',cursor:'pointer',padding:'8px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'8px'}}>
              <User size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{padding:'36px 28px'}}>
        {/* Content Rows */}
        <ContentRow title="Watching Now" items={mockContent.slice(0, 6)} icon={Clock} />
        <ContentRow title="Popular" items={[...mockContent].reverse()} icon={TrendingUp} />
        <ContentRow title="Recent" items={mockContent.slice(1, 7)} icon={Zap} />
        <ContentRow title="Newest" items={[...mockContent].sort(() => Math.random() - 0.5)} icon={Star} />

        {/* Communities & Groups Section */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'24px'}}>
          {/* Communities */}
          <div style={{background:'#0A0A0A',borderRadius:'12px',padding:'24px'}}>
            <h2 style={{color:'white',fontSize:'1.15rem',fontWeight:700,fontFamily:'Playfair Display, serif',display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px'}}>
              <Users size={18} style={{color:'#8F3FD4'}} />
              <span style={{color:'#D4B65A'}}>//</span> Communities
            </h2>
            <div style={{display:'flex',gap:'14px',overflowX:'auto',paddingBottom:'8px'}}>
              {communities.map(c => <CommunityCard key={c.id} community={c} />)}
            </div>
          </div>

          {/* Groups */}
          <div style={{background:'#0A0A0A',borderRadius:'12px',padding:'24px'}}>
            <h2 style={{color:'white',fontSize:'1.15rem',fontWeight:700,fontFamily:'Playfair Display, serif',display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px'}}>
              <MessageCircle size={18} style={{color:'#8F3FD4'}} />
              <span style={{color:'#D4B65A'}}>//</span> Groups
            </h2>
            <div style={{display:'flex',gap:'14px',overflowX:'auto',paddingBottom:'8px'}}>
              {groups.map(g => <GroupCard key={g.id} group={g} />)}
            </div>
          </div>
        </div>

        {/* Community Posts */}
        <div style={{marginBottom:'24px',background:'#0A0A0A',borderRadius:'12px',padding:'24px'}}>
          <h2 style={{color:'white',fontSize:'1.15rem',fontWeight:700,fontFamily:'Playfair Display, serif',display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px'}}>
            <MessageCircle size={18} style={{color:'#D4B65A'}} />
            <span style={{color:'#D4B65A'}}>//</span> Community Feed
          </h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(360px, 1fr))',gap:'16px'}}>
            {communityPosts.map(post => <CommunityPost key={post.id} post={post} />)}
          </div>
        </div>

        {/* More Content */}
        <ContentRow title="Recommended For You" items={mockContent.slice(2, 8)} icon={Sparkles} />
      </div>
    </main>
  )
}
