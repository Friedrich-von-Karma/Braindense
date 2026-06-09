'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Settings, Edit3, Eye, Heart, Users, MessageCircle, Star, Play, Calendar, MapPin, LinkIcon, Image as ImageIcon, Video, Smile, Send, Grid, Bookmark, UserPlus, Share2, MoreHorizontal } from 'lucide-react'

// Profile data
const profile = {
  username: 'AlexMorgan',
  handle: '@alexmorgan_official',
  bio: 'Independent creator & 3D animation artist. Crafting immersive adult experiences since 2019. Custom commissions open.',
  avatar: 'A',
  banner: '/thumbn/4.jpg',
  verified: true,
  location: 'Los Angeles, CA',
  joined: 'March 2019',
  website: 'alexmorgan.studio',
  stats: {
    followers: '128K',
    following: '342',
    posts: '1.2K',
    likes: '4.8M',
  },
}

const userContent = [
  { id: 4, title: 'Succubus Academy Ep.4', views: '28K', duration: '20:00', likes: '2.5K' },
  { id: 6, title: 'AI Girlfriend Simulator', views: '42K', duration: '19:45', likes: '4.1K' },
  { id: 8, title: 'Elf Princess Captured', views: '35K', duration: '17:20', likes: '3.5K' },
  { id: 101, title: 'Demon Queen Awakens', views: '156K', duration: '32:15', likes: '24K' },
  { id: 103, title: 'Virtual Waifu Experience', views: '234K', duration: '28:30', likes: '32K' },
  { id: 2, title: 'Office Lady After Hours', views: '18K', duration: '22:15', likes: '1.8K' },
]

const userPosts = [
  { id: 1, content: 'Just finished rendering my latest 3D animation! 4K with full voice acting. Dropping this Friday for all my supporters. The lighting on this one came out incredible.', likes: 1243, comments: 89, time: '3h ago' },
  { id: 2, content: 'Thank you all for 128K followers! This community means everything to me. Working on something special to celebrate - any requests?', likes: 3567, comments: 245, time: '1d ago' },
  { id: 3, content: 'Behind the scenes of Demon Queen Awakens. This took me 3 months to animate frame by frame. Worth every second.', likes: 2891, comments: 167, time: '3d ago' },
]

const joinedCommunities = [
  { id: 1, name: 'Anime & Hentai', members: '45K', role: 'Moderator' },
  { id: 2, name: '3D Renders', members: '28K', role: 'Member' },
  { id: 3, name: 'AI Generated', members: '12K', role: 'Member' },
]

const joinedGroups = [
  { id: 1, name: 'Hentai Fans', members: '12.4K', activity: 'Very Active' },
  { id: 2, name: '3D Animation', members: '8.2K', activity: 'Active' },
  { id: 3, name: 'Amateur Creators', members: '5.6K', activity: 'Active' },
]

const availableThumbnails = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 101, 102, 103]
const getThumbnail = (id: number) => {
  const index = (id - 1) % availableThumbnails.length
  return `/thumbn/${availableThumbnails[index]}.jpg`
}

function StatBlock({ label, value }: { label: string, value: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        color: 'white',
        fontSize: '1.6rem',
        fontWeight: 600,
        lineHeight: 1.1
      }}>
        {value}
      </p>
      <p style={{
        color: 'rgba(255,255,255,0.45)',
        fontSize: '0.8rem',
        fontFamily: 'Inter, sans-serif',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginTop: '4px'
      }}>
        {label}
      </p>
    </div>
  )
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'content' | 'posts' | 'saved'>('content')
  const [postText, setPostText] = useState('')

  const tabs = [
    { id: 'content' as const, label: 'Content', icon: Grid },
    { id: 'posts' as const, label: 'Posts', icon: MessageCircle },
    { id: 'saved' as const, label: 'Saved', icon: Bookmark },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#000000', color: 'white' }}>
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
          <Link
            href="/main"
            title="Back"
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
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </Link>

          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Image src="/images/logo.png" alt="BlackDesire" width={90} height={36} style={{ objectFit: 'contain' }} />
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: 'white',
            fontSize: '1.3rem',
            fontWeight: 500,
            marginLeft: '12px'
          }}>
            Profile
          </h1>

          <button
            title="Settings"
            style={{
              marginLeft: 'auto',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Settings size={18} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Profile content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 36px 60px' }}>
        {/* Banner */}
        <div style={{
          position: 'relative',
          height: '280px',
          borderRadius: '0 0 16px 16px',
          overflow: 'hidden',
          marginBottom: '0'
        }}>
          <Image src={profile.banner} alt="Profile banner" fill style={{ objectFit: 'cover' }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%)'
          }} />
        </div>

        {/* Profile header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '28px',
          marginTop: '-70px',
          marginBottom: '32px',
          position: 'relative',
          zIndex: 2,
          flexWrap: 'wrap'
        }}>
          {/* Avatar */}
          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #9B6DFF 0%, #C9A962 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 600,
            color: 'white',
            fontSize: '3.5rem',
            border: '4px solid #000',
            boxShadow: '0 8px 40px rgba(155,109,255,0.4)'
          }}>
            {profile.avatar}
          </div>

          {/* Name + actions */}
          <div style={{ flex: 1, minWidth: '280px', paddingBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 600,
                lineHeight: 1.1
              }}>
                {profile.username}
              </h2>
              {profile.verified && (
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#C9A962',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Star size={13} fill="#000" color="#000" />
                </div>
              )}
            </div>
            <p style={{
              color: '#C9A962',
              fontSize: '0.95rem',
              fontWeight: 500,
              fontFamily: 'Inter, sans-serif'
            }}>
              {profile.handle}
            </p>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', gap: '10px', paddingBottom: '8px' }}>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #9B6DFF 0%, #C9A962 100%)',
              border: 'none',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.85rem',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 16px rgba(155,109,255,0.3)'
            }}>
              <Edit3 size={16} /> Edit Profile
            </button>
            <button title="Share" style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex'
            }}>
              <Share2 size={18} strokeWidth={1.5} />
            </button>
            <button title="More" style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex'
            }}>
              <MoreHorizontal size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: '28px',
          alignItems: 'start'
        }} className="profile-grid">
          {/* Left sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* About card */}
            <section className="section-box">
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                color: 'white',
                fontSize: '1.3rem',
                fontWeight: 500,
                marginBottom: '16px'
              }}>
                About
              </h3>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                marginBottom: '20px',
                fontFamily: 'Inter, sans-serif'
              }}>
                {profile.bio}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
                  <MapPin size={15} style={{ color: '#9B6DFF' }} /> {profile.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
                  <Calendar size={15} style={{ color: '#9B6DFF' }} /> Joined {profile.joined}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#C9A962', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
                  <LinkIcon size={15} /> {profile.website}
                </div>
              </div>

              {/* Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.06)'
              }}>
                <StatBlock label="Followers" value={profile.stats.followers} />
                <StatBlock label="Following" value={profile.stats.following} />
                <StatBlock label="Posts" value={profile.stats.posts} />
              </div>
            </section>

            {/* Communities */}
            <section className="section-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Users size={18} style={{ color: '#9B6DFF' }} strokeWidth={1.5} /> Communities
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {joinedCommunities.map(c => (
                  <div key={c.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.03)',
                    cursor: 'pointer'
                  }}>
                    <div>
                      <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{c.name}</p>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontFamily: 'Inter, sans-serif' }}>{c.members} members</p>
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: c.role === 'Moderator' ? '#C9A962' : '#9B6DFF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      {c.role}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Groups */}
            <section className="section-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <MessageCircle size={18} style={{ color: '#9B6DFF' }} strokeWidth={1.5} /> Groups
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {joinedGroups.map(g => (
                  <div key={g.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.03)',
                    cursor: 'pointer'
                  }}>
                    <div>
                      <p style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500, fontFamily: 'Inter, sans-serif' }}>{g.name}</p>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontFamily: 'Inter, sans-serif' }}>{g.members} members</p>
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: '#4ADE80',
                      fontFamily: 'Inter, sans-serif',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80' }} />
                      {g.activity}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right content area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Write a post */}
            <section className="section-box">
              <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #9B6DFF 0%, #C9A962 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  color: 'white',
                  fontSize: '1.1rem',
                  fontFamily: 'Cormorant Garamond, serif',
                  flexShrink: 0
                }}>
                  {profile.avatar}
                </div>
                <textarea
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="Share something with your followers..."
                  rows={3}
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    color: 'white',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.6
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,98,0.4)' }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                />
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255,255,255,0.06)'
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[ImageIcon, Video, Smile].map((Icon, i) => (
                    <button key={i} style={{
                      background: 'none',
                      border: 'none',
                      color: '#9B6DFF',
                      cursor: 'pointer',
                      padding: '8px',
                      borderRadius: '6px',
                      display: 'flex'
                    }}>
                      <Icon size={20} strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: postText.trim() ? 'linear-gradient(135deg, #9B6DFF 0%, #C9A962 100%)' : 'rgba(255,255,255,0.06)',
                  border: 'none',
                  color: postText.trim() ? 'white' : 'rgba(255,255,255,0.35)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  padding: '11px 26px',
                  borderRadius: '8px',
                  cursor: postText.trim() ? 'pointer' : 'default',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.2s'
                }}>
                  <Send size={15} /> Post
                </button>
              </div>
            </section>

            {/* Tabs */}
            <div style={{
              display: 'flex',
              gap: '4px',
              background: 'var(--surface-1, #080808)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '6px'
            }}>
              {tabs.map(tab => {
                const Icon = tab.icon
                const active = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      background: active ? 'rgba(201,169,98,0.12)' : 'transparent',
                      color: active ? '#C9A962' : 'rgba(255,255,255,0.55)',
                      fontWeight: active ? 600 : 400,
                      fontSize: '0.9rem',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.2s'
                    }}
                  >
                    <Icon size={17} strokeWidth={1.5} /> {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Tab content */}
            {activeTab === 'content' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '20px'
              }}>
                {userContent.map(item => (
                  <div key={item.id} className="content-card" style={{ cursor: 'pointer' }}>
                    <div className="thumbnail" style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      background: '#1a1a1a',
                      marginBottom: '12px',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                      <Image src={getThumbnail(item.id)} alt={item.title} fill style={{ objectFit: 'cover' }} />
                      <div className="card-overlay" style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.2)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: 'rgba(201,169,98,0.95)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Play size={20} style={{ color: '#000', marginLeft: '2px' }} fill="#000" />
                        </div>
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '8px',
                        right: '8px',
                        background: 'rgba(0,0,0,0.85)',
                        padding: '3px 9px',
                        borderRadius: '4px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'white',
                        fontFamily: 'Inter, sans-serif'
                      }}>
                        {item.duration}
                      </div>
                    </div>
                    <h3 className="line-clamp-1" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: 'white',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: '0.78rem',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Eye size={13} />{item.views}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Heart size={13} />{item.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'posts' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {userPosts.map(post => (
                  <article key={post.id} className="card" style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
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
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.1rem'
                      }}>
                        {profile.avatar}
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <p style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', fontFamily: 'Inter, sans-serif' }}>{profile.username}</p>
                          {profile.verified && (
                            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#C9A962', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <Star size={9} fill="#000" color="#000" />
                            </div>
                          )}
                        </div>
                        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif' }}>{post.time}</p>
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
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
                        <Heart size={16} />{post.likes}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
                        <MessageCircle size={16} />{post.comments}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'saved' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '20px'
              }}>
                {[...userContent].reverse().map(item => (
                  <div key={item.id} className="content-card" style={{ cursor: 'pointer' }}>
                    <div className="thumbnail" style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      background: '#1a1a1a',
                      marginBottom: '12px',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}>
                      <Image src={getThumbnail(item.id)} alt={item.title} fill style={{ objectFit: 'cover' }} />
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        background: 'rgba(0,0,0,0.7)',
                        padding: '6px',
                        borderRadius: '50%',
                        display: 'flex'
                      }}>
                        <Bookmark size={14} fill="#C9A962" color="#C9A962" />
                      </div>
                    </div>
                    <h3 className="line-clamp-1" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      color: 'white',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      marginBottom: '8px'
                    }}>
                      {item.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      color: 'rgba(255,255,255,0.45)',
                      fontSize: '0.78rem',
                      fontFamily: 'Inter, sans-serif'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Eye size={13} />{item.views}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Heart size={13} />{item.likes}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .profile-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
