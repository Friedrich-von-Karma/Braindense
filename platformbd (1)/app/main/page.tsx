'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Search, User, Bell, Mail, Library, Menu, X, Play, Gamepad2, Film, AppWindow, Music, BookOpen, Sparkles, Heart, Eye, Users, MessageCircle, Clock, TrendingUp, Star, ChevronRight, Upload, Settings, History, Bookmark, Flame, Zap, ChevronLeft } from 'lucide-react'

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
  { id: 1, title: 'Midnight Desires', creator: 'Luna Eclipse', views: '24K', duration: '18:42', likes: '2.1K', premium: true },
  { id: 2, title: 'Ocean Dreams', creator: 'Aqua Muse', views: '18K', duration: '22:15', likes: '1.8K', premium: false },
  { id: 3, title: 'Electric Touch', creator: 'Neon Vixen', views: '32K', duration: '15:30', likes: '3.2K', premium: true },
  { id: 4, title: 'Velvet Night', creator: 'Scarlet Rose', views: '28K', duration: '20:00', likes: '2.5K', premium: false },
  { id: 5, title: 'Golden Hour', creator: 'Amber Sky', views: '15K', duration: '25:10', likes: '1.2K', premium: true },
  { id: 6, title: 'Shadow Play', creator: 'Dark Angel', views: '42K', duration: '19:45', likes: '4.1K', premium: false },
  { id: 7, title: 'Silk & Satin', creator: 'Velvet Dreams', views: '19K', duration: '21:30', likes: '1.9K', premium: true },
  { id: 8, title: 'Neon Nights', creator: 'Cyber Venus', views: '35K', duration: '17:20', likes: '3.5K', premium: false },
]

const communityPosts = [
  { id: 1, user: 'Luna Eclipse', avatar: 'L', content: 'Just uploaded a new experience! Check it out and let me know what you think.', likes: 234, comments: 45, time: '2h ago', verified: true },
  { id: 2, user: 'Neon Vixen', avatar: 'N', content: 'Working on something special for the weekend. Stay tuned for the preview!', likes: 567, comments: 89, time: '4h ago', verified: true },
  { id: 3, user: 'Dark Angel', avatar: 'D', content: 'Thanks everyone for 10K followers! New content dropping tomorrow.', likes: 1200, comments: 156, time: '6h ago', verified: false },
]

const groups = [
  { id: 1, name: 'VR Enthusiasts', members: '12.4K', activity: 'Very Active' },
  { id: 2, name: 'Device Sync Tips', members: '8.2K', activity: 'Active' },
  { id: 3, name: 'Creator Collab', members: '5.6K', activity: 'Active' },
  { id: 4, name: 'Premium Lounge', members: '3.1K', activity: 'Exclusive' },
]

const communities = [
  { id: 1, name: 'Midnight Creators', members: '45K', description: 'Top creators sharing tips', online: 234 },
  { id: 2, name: 'Tech & Toys', members: '28K', description: 'Device discussions & reviews', online: 156 },
  { id: 3, name: 'New Explorers', members: '67K', description: 'Beginners welcome here', online: 892 },
]

const featuredContent = [
  { id: 101, title: 'Midnight Symphony', creator: 'Luna Eclipse', views: '156K', duration: '32:15', likes: '24K', description: 'An immersive journey through the senses' },
  { id: 102, title: 'Velvet Dreams Collection', creator: 'Scarlet Rose', views: '98K', duration: '45:00', likes: '18K', description: 'Premium exclusive series' },
  { id: 103, title: 'Electric Paradise', creator: 'Neon Vixen', views: '234K', duration: '28:30', likes: '32K', description: 'Award-winning experience' },
  { id: 104, title: 'Golden Hour Special', creator: 'Amber Sky', views: '87K', duration: '38:45', likes: '15K', description: 'Limited time feature' },
  { id: 105, title: 'Silk Whispers', creator: 'Velvet Dreams', views: '112K', duration: '26:20', likes: '19K', description: 'Most anticipated release' },
]

// Content Card Component
function ContentCard({ item }: { item: typeof mockContent[0] }) {
  return (
    <div className="content-card" style={{
      minWidth: '240px',
      maxWidth: '240px',
      cursor: 'pointer',
    }}>
      {/* Thumbnail */}
      <div className="thumbnail" style={{
        position: 'relative',
        aspectRatio: '16/9',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
        marginBottom: '14px',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <Image 
          src={`/thumbn/${item.id}.jpg`}
          alt={item.title}
          fill
          style={{ objectFit: 'cover' }}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        
        {/* Play overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.2)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }} className="card-overlay">
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(201,169,98,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(201,169,98,0.4)'
          }}>
            <Play size={22} style={{ color: '#000', marginLeft: '2px' }} fill="#000" />
          </div>
        </div>

        {/* Duration badge */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.85)',
          padding: '4px 10px',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'white',
          fontFamily: 'Inter, sans-serif'
        }}>
          {item.duration}
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="line-clamp-1" style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: 'white',
          fontSize: '1.1rem',
          fontWeight: 600,
          marginBottom: '6px',
          lineHeight: 1.3
        }}>
          {item.title}
        </h3>
        
        <p style={{
          color: '#C9A962',
          fontSize: '0.85rem',
          fontWeight: 500,
          marginBottom: '10px',
          fontFamily: 'Inter, sans-serif'
        }}>
          {item.creator}
        </p>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '0.8rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Eye size={13} />{item.views}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Heart size={13} />{item.likes}
          </span>
        </div>
      </div>
    </div>
  )
}

// Section Row Component
function ContentRow({ title, items, icon: Icon }: { title: string, items: typeof mockContent, icon?: any }) {
  return (
    <section className="section-box" style={{ marginBottom: '28px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '28px'
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '14px'
        }}>
          {Icon && <Icon size={20} style={{ color: '#C9A962' }} strokeWidth={1.5} />}
          {title}
        </h2>
        
        <button className="btn-ghost" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          View All <ChevronRight size={16} />
        </button>
      </div>
      
      <div className="hide-scrollbar" style={{
        display: 'flex',
        gap: '20px',
        overflowX: 'auto',
        paddingBottom: '8px'
      }}>
        {items.map(item => <ContentCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}

// Community Post Component
function CommunityPost({ post }: { post: typeof communityPosts[0] }) {
  return (
    <article className="card" style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '16px'
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #9B6DFF 0%, #C9A962 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          color: 'white',
          fontSize: '1rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          {post.avatar}
        </div>
        
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p style={{
              color: 'white',
              fontWeight: 600,
              fontSize: '0.95rem',
              fontFamily: 'Inter, sans-serif'
            }}>
              {post.user}
            </p>
            {post.verified && (
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#C9A962',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Star size={10} fill="#000" color="#000" />
              </div>
            )}
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.8rem',
            fontFamily: 'Inter, sans-serif'
          }}>
            {post.time}
          </p>
        </div>
      </div>
      
      <p style={{
        color: 'rgba(255,255,255,0.8)',
        fontSize: '0.95rem',
        lineHeight: 1.7,
        marginBottom: '18px',
        fontFamily: 'Inter, sans-serif'
      }}>
        {post.content}
      </p>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        paddingTop: '14px',
        borderTop: '1px solid rgba(255,255,255,0.06)'
      }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.85rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          transition: 'color 0.2s'
        }}
          onMouseOver={(e) => e.currentTarget.style.color = '#C9A962'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          <Heart size={16} />{post.likes}
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.85rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif',
          transition: 'color 0.2s'
        }}
          onMouseOver={(e) => e.currentTarget.style.color = '#9B6DFF'}
          onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          <MessageCircle size={16} />{post.comments}
        </button>
      </div>
    </article>
  )
}

// Group Card Component
function GroupCard({ group }: { group: typeof groups[0] }) {
  return (
    <div className="card" style={{
      padding: '20px',
      minWidth: '200px',
      cursor: 'pointer'
    }}>
      <h4 style={{
        fontFamily: 'Cormorant Garamond, serif',
        color: 'white',
        fontWeight: 600,
        fontSize: '1.05rem',
        marginBottom: '8px'
      }}>
        {group.name}
      </h4>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        <span style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.8rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          <Users size={13} />{group.members}
        </span>
      </div>
      
      <span style={{
        fontSize: '0.7rem',
        fontWeight: 600,
        color: group.activity === 'Exclusive' ? '#C9A962' : '#9B6DFF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontFamily: 'Inter, sans-serif'
      }}>
        {group.activity}
      </span>
    </div>
  )
}

// Community Card Component
function CommunityCard({ community }: { community: typeof communities[0] }) {
  return (
    <div className="card" style={{
      padding: '24px',
      minWidth: '220px',
      cursor: 'pointer'
    }}>
      <h4 style={{
        fontFamily: 'Cormorant Garamond, serif',
        color: 'white',
        fontWeight: 600,
        fontSize: '1.1rem',
        marginBottom: '6px'
      }}>
        {community.name}
      </h4>
      
      <p style={{
        color: 'rgba(255,255,255,0.5)',
        fontSize: '0.85rem',
        marginBottom: '16px',
        fontFamily: 'Inter, sans-serif'
      }}>
        {community.description}
      </p>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#9B6DFF',
          fontSize: '0.8rem',
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif'
        }}>
          <Users size={14} />{community.members}
        </span>
        
        <span style={{
          fontSize: '0.75rem',
          color: '#4ADE80',
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#4ADE80'
          }} />
          {community.online} online
        </span>
      </div>
    </div>
  )
}

// Featured Carousel Component
function FeaturedCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <section className="section-box" style={{ marginBottom: '28px', position: 'relative' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '28px'
      }}>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          color: 'white',
          fontSize: '1.5rem',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '14px'
        }}>
          <Star size={20} style={{ color: '#C9A962' }} strokeWidth={1.5} fill="#C9A962" />
          Recommended For You
        </h2>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={() => scroll('left')}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(201,169,98,0.15)'
              e.currentTarget.style.borderColor = 'rgba(201,169,98,0.4)'
              e.currentTarget.style.color = '#C9A962'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button 
            onClick={() => scroll('right')}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(201,169,98,0.15)'
              e.currentTarget.style.borderColor = 'rgba(201,169,98,0.4)'
              e.currentTarget.style.color = '#C9A962'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="hide-scrollbar" 
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '8px',
          scrollSnapType: 'x mandatory'
        }}
      >
        {featuredContent.map(item => (
          <div 
            key={item.id}
            className="content-card"
            style={{
              minWidth: '400px',
              maxWidth: '400px',
              cursor: 'pointer',
              scrollSnapAlign: 'start'
            }}
          >
            {/* Large Thumbnail */}
            <div className="thumbnail" style={{
              position: 'relative',
              aspectRatio: '16/9',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
              marginBottom: '18px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <Image 
                src={`/thumbn/${item.id}.jpg`}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              
              {/* Play overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.25)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }} className="card-overlay">
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'rgba(201,169,98,0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 40px rgba(201,169,98,0.5)'
                }}>
                  <Play size={32} style={{ color: '#000', marginLeft: '3px' }} fill="#000" />
                </div>
              </div>

              {/* Duration badge */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.85)',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'white',
                fontFamily: 'Inter, sans-serif'
              }}>
                {item.duration}
              </div>
              
              {/* Featured badge */}
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: 'linear-gradient(135deg, #C9A962, #9B6DFF)',
                padding: '5px 14px',
                borderRadius: '4px',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: 'Inter, sans-serif'
              }}>
                Featured
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: 'white',
                fontSize: '1.35rem',
                fontWeight: 600,
                marginBottom: '8px',
                lineHeight: 1.3
              }}>
                {item.title}
              </h3>
              
              <p style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.9rem',
                marginBottom: '12px',
                fontFamily: 'Inter, sans-serif'
              }}>
                {item.description}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <p style={{
                  color: '#C9A962',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {item.creator}
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: '0.85rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Eye size={14} />{item.views}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Heart size={14} />{item.likes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main style={{
      minHeight: '100vh',
      background: '#000000',
      color: 'white'
    }}>
      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 40,
            backdropFilter: 'blur(4px)'
          }} 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '320px',
        background: '#0A0A0A',
        zIndex: 50,
        transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        overflowY: 'auto',
        borderRight: '1px solid rgba(255,255,255,0.04)'
      }}>
        <div style={{ padding: '32px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: 'white',
              fontSize: '1.3rem',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              Categories
            </h2>
            <button 
              onClick={() => setSidebarOpen(false)} 
              style={{
                background: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,169,98,0.3)'
                e.currentTarget.style.color = '#C9A962'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
              }}
            >
              <X size={18} />
            </button>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {categories.map(cat => {
              const Icon = cat.icon
              return (
                <button 
                  key={cat.name} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '14px 18px',
                    background: 'transparent',
                    border: 'none',
                    color: 'rgba(255,255,255,0.7)',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: 400,
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(201,169,98,0.08)'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                  }}
                >
                  <Icon size={18} style={{ color: '#9B6DFF' }} strokeWidth={1.5} />
                  {cat.name}
                </button>
              )
            })}
          </nav>
          
          <div style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.06)'
          }}>
            <h3 style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Quick Access
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['Trending Now', 'Top Rated', 'New Releases', 'Following'].map(link => (
                <button 
                  key={link} 
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.9rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    padding: '10px 0',
                    transition: 'color 0.2s',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#C9A962'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Top Navigation */}
      <header className="glass" style={{
        position: 'sticky',
        top: 0,
        zIndex: 30,
        borderBottom: '1px solid rgba(255,255,255,0.04)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '16px 36px',
          maxWidth: '1800px',
          margin: '0 auto'
        }}>
          {/* Menu button */}
          <button 
            onClick={() => setSidebarOpen(true)} 
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              padding: '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(201,169,98,0.1)'
              e.currentTarget.style.borderColor = 'rgba(201,169,98,0.25)'
              e.currentTarget.style.color = '#C9A962'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'none'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
            }}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Image 
              src="/images/logo.png" 
              alt="BlackDesire" 
              width={90} 
              height={36} 
              style={{ objectFit: 'contain' }} 
            />
          </div>

          {/* Search bar */}
          <div style={{ flex: 1, maxWidth: '600px', marginLeft: '32px' }}>
            <div style={{ position: 'relative' }}>
              <Search 
                size={18} 
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(255,255,255,0.35)'
                }} 
                strokeWidth={1.5}
              />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search experiences, creators..."
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '8px',
                  padding: '14px 20px 14px 52px',
                  color: 'white',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontFamily: 'Inter, sans-serif'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,169,98,0.4)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                }}
              />
            </div>
          </div>

          {/* Right side actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginLeft: 'auto'
          }}>
            {[
              { icon: Flame, label: 'Trending' },
              { icon: History, label: 'History' },
              { icon: Bookmark, label: 'Saved' },
              { icon: Upload, label: 'Upload' },
              { icon: Library, label: 'My Library' },
              { icon: Bell, label: 'Notifications' },
              { icon: Mail, label: 'Inbox' },
              { icon: Settings, label: 'Settings' },
            ].map(item => {
              const Icon = item.icon
              return (
                <button 
                  key={item.label} 
                  title={item.label} 
                  style={{
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)',
                    cursor: 'pointer',
                    padding: '10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(155,109,255,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(155,109,255,0.25)'
                    e.currentTarget.style.color = '#9B6DFF'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'none'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </button>
              )
            })}
            
            <button 
              title="Profile" 
              style={{
                background: 'linear-gradient(135deg, #9B6DFF 0%, #C9A962 100%)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '8px',
                boxShadow: '0 4px 16px rgba(155,109,255,0.3)'
              }}
            >
              <User size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{
        padding: '40px 36px',
        maxWidth: '1800px',
        margin: '0 auto'
      }}>
        {/* Featured Carousel - First thing below header */}
        <FeaturedCarousel />
        
        {/* Content Rows */}
        <ContentRow title="Watching Now" items={mockContent.slice(0, 6)} icon={Clock} />
        <ContentRow title="Popular" items={[...mockContent].reverse()} icon={TrendingUp} />
        <ContentRow title="Recent" items={mockContent.slice(1, 7)} icon={Zap} />
        <ContentRow title="Newest" items={[...mockContent].sort(() => Math.random() - 0.5)} icon={Star} />

        {/* Communities & Groups Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '28px',
          marginBottom: '28px'
        }}>
          {/* Communities */}
          <section className="section-box">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px'
            }}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <Users size={20} style={{ color: '#9B6DFF' }} strokeWidth={1.5} />
                Communities
              </h2>
              <button className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="hide-scrollbar" style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto'
            }}>
              {communities.map(c => <CommunityCard key={c.id} community={c} />)}
            </div>
          </section>

          {/* Groups */}
          <section className="section-box">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px'
            }}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <MessageCircle size={20} style={{ color: '#9B6DFF' }} strokeWidth={1.5} />
                Groups
              </h2>
              <button className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                View All <ChevronRight size={16} />
              </button>
            </div>
            <div className="hide-scrollbar" style={{
              display: 'flex',
              gap: '16px',
              overflowX: 'auto'
            }}>
              {groups.map(g => <GroupCard key={g.id} group={g} />)}
            </div>
          </section>
        </div>

        {/* Community Feed */}
        <section className="section-box" style={{ marginBottom: '28px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px'
          }}>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '14px'
            }}>
              <Sparkles size={20} style={{ color: '#C9A962' }} strokeWidth={1.5} />
              Community Feed
            </h2>
            <button className="btn-ghost" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '20px'
          }}>
            {communityPosts.map(post => <CommunityPost key={post.id} post={post} />)}
          </div>
        </section>

        {/* More Content */}
        <ContentRow title="Recommended For You" items={mockContent.slice(2, 8)} icon={Sparkles} />
      </div>
    </main>
  )
}
