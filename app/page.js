'use client'
import { useState, useMemo } from 'react'
import { Search, Wallet, Rocket, Users, Clock, Shield, ArrowRight, Zap, Globe, Award, ChevronLeft, ChevronRight, Quote, Heart, TrendingUp, Sparkles, Eye, Menu, Star, Timer, Coins, Image } from 'lucide-react'
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { clusterApiUrl } from '@solana/web3.js'
import '@solana/wallet-adapter-react-ui/styles.css'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeTab, setActiveTab] = useState('all')

  // just used dummy data for most of the parts
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "NFT Creator",
      avatar: "MC",
      content: "Launched my NFT collection on Solaunch and sold out in under 2 hours. The platform made it incredibly easy to reach serious collectors."
    },
    {
      name: "Sarah Johnson",
      role: "Token Founder",
      avatar: "SJ",
      content: "Our SOL token launch exceeded all expectations. Solaunch's community and fair launch mechanics helped us build real value from day one."
    },
    {
      name: "Alex Rivera",
      role: "Collector & Investor",
      avatar: "AR",
      content: "I've discovered amazing NFT projects and early-stage tokens here. The curation quality is unmatched in the Solana ecosystem."
    }
  ]

  const featuredLaunches = [
    { 
      name: "Cyber Apes", 
      type: "NFT", 
      price: "0.5 SOL", 
      progress: 85, 
      remaining: "15%", 
      logo: "🦍",
      status: "live"
    },
    { 
      name: "MOON Token", 
      type: "Token", 
      price: "Fair Launch", 
      progress: 60, 
      remaining: "2.4M SOL", 
      logo: "🌙",
      status: "presale"
    },
    { 
      name: "Pixel Warriors", 
      type: "NFT", 
      price: "0.8 SOL", 
      progress: 100, 
      remaining: "SOLD OUT", 
      logo: "⚔️",
      status: "sold"
    },
    { 
      name: "DEGEN Coin", 
      type: "Token", 
      price: "0.001 SOL", 
      progress: 45, 
      remaining: "55%", 
      logo: "💎",
      status: "live"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const network = clusterApiUrl('devnet')
  const endpoint = useMemo(() => network, [network])
  const wallets = useMemo(() => [], [])

  const getStatusColor = (status) => {
    switch(status) {
      case 'live': return 'text-green-500'
      case 'presale': return 'text-yellow-500'
      case 'sold': return 'text-gray-500'
      default: return 'text-blue-500'
    }
  }

  const getStatusBg = (status) => {
    switch(status) {
      case 'live': return 'bg-green-100 text-green-800'
      case 'presale': return 'bg-yellow-100 text-yellow-800'
      case 'sold': return 'bg-gray-100 text-gray-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  const filteredLaunches = featuredLaunches.filter(launch => 
    activeTab === 'all' || launch.type.toLowerCase() === activeTab
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
            {/* Header */}
            <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 px-4 py-4 border-b border-purple-100">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h1 className="text-blue-600 text-2xl font-black tracking-tight">SOLAUNCH</h1>
                    <p className="text-gray-500 text-xs font-medium">NFT & Token Launchpad</p>
                  </div>
                </div>
                
                <nav className="hidden lg:flex space-x-8">
                  <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-all font-medium">Launches</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-all font-medium">NFTs</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-all font-medium">Tokens</a>
                  <a href="#" className="text-gray-700 hover:text-blue-600 hover:underline decoration-blue-500 decoration-2 underline-offset-4 transition-all font-medium">Create</a>
                </nav>
                
                <div className="flex items-center space-x-4">
                  <WalletMultiButton className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !hover:from-blue-700 !hover:to-purple-700 !text-white !px-4 !py-2 !rounded-xl !font-semibold !transition-all !shadow-lg !hover:shadow-xl" />
                  <button className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors">
                    <Menu className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-transparent to-blue-100/30"></div>
              <div className="max-w-7xl mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 text-blue-700 px-5 py-3 rounded-full text-sm font-semibold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      <span>SOLANA'S PREMIER LAUNCHPAD</span>
                    </div>
                    
                    <div className="space-y-6">
                      <h1 className="text-6xl lg:text-8xl font-black text-gray-900 leading-tight">
                        LAUNCH
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">NFTs & TOKENS</span>
                        <span className="block text-4xl lg:text-5xl text-gray-600">ON SOLANA</span>
                      </h1>
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        <ArrowRight className="w-8 h-8 text-blue-600 animate-pulse" />
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                      The fastest way to launch and discover NFT collections and tokens on Solana. Fair launches, instant liquidity, zero hassle.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                      <WalletMultiButton className="!bg-gradient-to-r !from-blue-600 !to-purple-600 !hover:from-blue-700 !hover:to-purple-700 !text-white !px-8 !py-4 !rounded-xl !font-bold !transition-all !flex !items-center !justify-center !space-x-2 !shadow-xl !hover:shadow-2xl !transform !hover:-translate-y-1" />
                      <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border border-gray-200">
                        <Eye className="w-5 h-5" />
                        <span>Browse Launches</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">500+</div>
                        <div className="text-sm text-gray-600">Launches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">50K+</div>
                        <div className="text-sm text-gray-600">NFTs Sold</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900">2M+</div>
                        <div className="text-sm text-gray-600">SOL Volume</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-br from-purple-400 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                    
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Live Launch Stats</h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-medium text-gray-700">Active NFT Drops</span>
                          </div>
                          <span className="font-bold text-green-600">8</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="font-medium text-gray-700">Token Presales</span>
                          </div>
                          <span className="font-bold text-blue-600">12</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                            <span className="font-medium text-gray-700">24h Volume</span>
                          </div>
                          <span className="font-bold text-purple-600">1.2K SOL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Launch Categories */}
            <section className="py-16 px-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">Choose Your Launch Type</h2>
                  <p className="text-xl text-gray-300">Whether you're creating NFTs or launching tokens, we've got you covered</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-2">
                    <Image className="w-16 h-16 text-white mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-3xl font-bold text-white mb-4">NFT Collections</h3>
                    <p className="text-purple-100 mb-6 text-lg">Launch your NFT collection with customizable minting mechanics, fair distribution, and instant marketplace integration.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Candy Machine</span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Allowlists</span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Royalties</span>
                    </div>
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      Launch NFTs →
                    </button>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-2">
                    <Coins className="w-16 h-16 text-white mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-3xl font-bold text-white mb-4">Token Launches</h3>
                    <p className="text-blue-100 mb-6 text-lg">Create and launch SPL tokens with fair distribution, liquidity pools, and community-driven mechanics.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Fair Launch</span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Liquidity Lock</span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Vesting</span>
                    </div>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      Launch Tokens →
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Launches */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Launches</h2>
                  <p className="text-xl text-gray-600 mb-8">Discover trending NFTs and tokens launching now</p>
                  
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => setActiveTab('all')}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                        activeTab === 'all' 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All Launches
                    </button>
                    <button
                      onClick={() => setActiveTab('nft')}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                        activeTab === 'nft' 
                          ? 'bg-purple-600 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      NFTs
                    </button>
                    <button
                      onClick={() => setActiveTab('token')}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                        activeTab === 'token' 
                          ? 'bg-cyan-600 text-white shadow-lg' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Tokens
                    </button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {filteredLaunches.map((launch, index) => (
                    <div key={index} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{launch.logo}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBg(launch.status)}`}>
                          {launch.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{launch.name}</h3>
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                          launch.type === 'NFT' ? 'bg-purple-100 text-purple-700' : 'bg-cyan-100 text-cyan-700'
                        }`}>
                          {launch.type}
                        </span>
                        <span className="text-sm font-bold text-gray-900">{launch.price}</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold">{launch.remaining}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              launch.type === 'NFT' ? 'bg-gradient-to-r from-purple-500 to-purple-600' : 'bg-gradient-to-r from-cyan-500 to-cyan-600'
                            }`}
                            style={{ width: `${launch.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                        launch.status === 'sold' 
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                          : launch.type === 'NFT'
                            ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                            : 'bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white'
                      }`}>
                        {launch.status === 'sold' ? 'Sold Out' : launch.status === 'presale' ? 'Join Presale' : 'Mint Now'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Solaunch */}
            <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Solaunch?</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    The most trusted launchpad on Solana with proven results and community-first approach
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Audited</h3>
                    <p className="text-gray-600 leading-relaxed">
                      All smart contracts are audited by leading security firms. Your funds and NFTs are protected by battle-tested infrastructure.
                    </p>
                  </div>

                  <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Built on Solana for instant transactions and minimal fees. Launch your project and reach global audiences in seconds.
                    </p>
                  </div>

                  <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Vibrant Community</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Join 50K+ creators and collectors. Get featured, receive feedback, and connect with serious investors and enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
                  <p className="text-xl text-gray-300">Hear from creators who launched successfully on Solaunch</p>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
                    <Quote className="w-12 h-12 text-purple-400 mb-6 mx-auto" />
                    <div className="text-center">
                      <p className="text-xl text-white leading-relaxed mb-8">
                        {testimonials[currentTestimonial].content}
                      </p>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonials[currentTestimonial].avatar}
                        </div>
                        <div className="text-left">
                          <p className="text-white font-semibold">{testimonials[currentTestimonial].name}</p>
                          <p className="text-gray-300 text-sm">{testimonials[currentTestimonial].role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
                
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial ? 'bg-purple-500' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-bold text-white mb-6">Ready to Launch on Solana?</h2>
                <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                  Join the most successful creators and builders on Solana. Launch your NFT collection or token today.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <WalletMultiButton className="!bg-white !hover:bg-gray-100 !text-purple-600 !px-8 !py-4 !rounded-xl !font-bold !transition-all !flex !items-center !justify-center !space-x-2 !shadow-xl !hover:shadow-2xl !transform !hover:-translate-y-1" />
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 border border-white/30">
                    <Rocket className="w-5 h-5" />
                    <span>Start Your Launch</span>
                  </button>
                </div>
                
                <div className="flex items-center justify-center space-x-8 text-purple-100 text-sm">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Free to Start</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure Transactions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Instant Launch</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-purple-400 text-xl font-bold">SOLAUNCH</h3>
                        <p className="text-gray-400 text-xs">NFT & Token Launchpad</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Your gateway to launching and discovering NFT collections and tokens on Solana.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Explore</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-purple-400 transition-colors">New Launches</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Top Projects</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">NFT Collections</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Token Sales</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">FAQs</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Wallet Setup</a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Community</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Discord</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Twitter</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
                      <li><a href="#" className="hover:text-purple-400 transition-colors">Events</a></li>
                    </ul>
                  </div>
                </div>
                
                <div className="border-t border-gray-800 mt-8 pt-8">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-gray-400 text-sm">
                      © 2025 Solaunch. All rights reserved. Built on Solana with ❤️.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">Global Access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
