import { useState, useEffect } from 'react'
import { 
  Layers, Cpu, Shield, Zap, Cloud, Database, 
  Terminal, Play, Plus, RefreshCw, BarChart3, CheckCircle2, 
  Settings, Server, Activity, ArrowRight, Sparkles, Code, Globe, Lock
} from 'lucide-react'

function App() {
  // State for interactive layer spawner
  const [layers, setLayers] = useState([
    { id: 1, name: 'Core Input Layer', type: 'Ingress Node', status: 'active', speed: 98.8, load: 45 },
    { id: 2, name: 'Neural Processing Cluster', type: 'Tensor Engine', status: 'active', speed: 99.4, load: 72 },
    { id: 3, name: 'Multi-Model Routing Layer', type: 'Switch Node', status: 'active', speed: 99.1, load: 28 },
  ])
  
  // Dashboard tab control
  const [activeTab, setActiveTab] = useState('compute') // compute | neural | network
  
  // Live network load simulation state
  const [networkLoad, setNetworkLoad] = useState(48)
  const [isSimulating, setIsSimulating] = useState(true)
  const [commandLogs, setCommandLogs] = useState([
    'Initializing InfiniteLayers runtime v4.0.12...',
    'System status: ALL LAYERS DEPLOYED & OPERATIONAL.',
    'Cluster latency: 4.8ms | Total TFLOPS: 42.6',
  ])

  // Spawn node handler
  const handleDeployLayer = () => {
    const layerNames = [
      'Edge Cache Node', 'Token Classifier Layer', 'Semantic Context Store', 
      'Vector Compression Grid', 'Feedback Reinforcement Ring', 'Multi-Tenant Sync Node'
    ]
    const types = ['Cache Engine', 'NLP Engine', 'Database', 'Vector DB', 'RLHF Processor', 'Gateway']
    
    const newId = layers.length + 1
    const randomName = layerNames[Math.floor(Math.random() * layerNames.length)] + ` #${newId}`
    const randomType = types[Math.floor(Math.random() * types.length)]
    
    const newLayer = {
      id: newId,
      name: randomName,
      type: randomType,
      status: 'active',
      speed: Number((97.5 + Math.random() * 2.3).toFixed(1)),
      load: Math.floor(20 + Math.random() * 70)
    }

    setLayers([...layers, newLayer])
    
    // Add command log
    const timestamp = new Date().toLocaleTimeString()
    setCommandLogs(prev => [
      `[${timestamp}] Deployed [${newLayer.type}] - "${newLayer.name}" at core index ${newId}`,
      ...prev.slice(0, 4)
    ])
  }

  // Clear or reset layers
  const handleResetLayers = () => {
    setLayers([
      { id: 1, name: 'Core Input Layer', type: 'Ingress Node', status: 'active', speed: 98.8, load: 45 },
      { id: 2, name: 'Neural Processing Cluster', type: 'Tensor Engine', status: 'active', speed: 99.4, load: 72 },
    ])
    setCommandLogs([
      'Recalibrating cluster configuration...',
      'Active compute layers reset to core matrix.',
    ])
  }

  // Network Load Simulation Hook
  useEffect(() => {
    let interval
    if (isSimulating) {
      interval = setInterval(() => {
        setNetworkLoad(prev => {
          const delta = Math.floor(Math.random() * 11) - 5
          const next = Math.max(10, Math.min(95, prev + delta))
          
          // Randomly log operations
          if (Math.random() > 0.7) {
            const timestamp = new Date().toLocaleTimeString()
            const ops = [
              `Optimizing Layer ${Math.floor(Math.random() * layers.length) + 1} memory utilization`,
              `Ingested 4.2k semantic vectors`,
              `Load balancing cluster routing matrix`,
              `Latency stabilized at ${(4 + Math.random() * 2).toFixed(1)}ms`
            ]
            setCommandLogs(l => [`[${timestamp}] ${ops[Math.floor(Math.random() * ops.length)]}`, ...l.slice(0, 4)])
          }
          return next
        })
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isSimulating, layers.length])

  // Calculated statistics
  const totalTFLOPS = (layers.reduce((sum, layer) => sum + (layer.speed * 0.15), 0) + (networkLoad * 0.05)).toFixed(1)
  const averageLoad = Math.floor(layers.reduce((sum, l) => sum + l.load, 0) / layers.length)
  const activeNodesCount = layers.length

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Background Neon Glowing Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none"></div>

      {/* Global Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/75 border-b border-slate-900 px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 opacity-75 blur-sm group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-2 bg-slate-900 rounded-lg border border-indigo-500/30 flex items-center justify-center">
                <Layers className="h-6 w-6 text-indigo-400 group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-300 font-outfit">
                InfiniteLayers
              </span>
              <div className="text-[10px] text-slate-400 font-mono tracking-widest leading-none">NEURAL INFRASTRUCTURE</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Architecture</a>
            <a href="#demo" className="hover:text-indigo-400 transition-colors">Compute Sandbox</a>
            <a href="#docs" className="hover:text-indigo-400 transition-colors">Documentation</a>
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
              Tailwind v4 <span className="text-[10px] bg-slate-800 text-indigo-300 px-1.5 py-0.5 rounded">Active</span>
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="#demo" 
              className="relative group inline-flex items-center gap-2 px-4.5 py-2 text-xs font-semibold text-white rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg group-hover:scale-105 transition-transform duration-300"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <span className="relative flex items-center gap-1.5 font-outfit">
                Deploy Core <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Futuristic Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-8 animate-pulse">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Vite + React + Tailwind CSS v4 Engine Live</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-outfit tracking-tight leading-tight max-w-5xl">
          Deploy Infinite Scale with{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Multi-Layer Compute
          </span>
        </h1>

        {/* Hero Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
          Create, balance, and orchestrate deep neural layers and computing stacks instantly. 
          A high-performance boilerplate designed to supercharge your web development speed.
        </p>

        {/* Hero CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#demo"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-900/30 flex items-center gap-2 group border border-indigo-500/40"
          >
            <span>Launch Sandbox Demo</span>
            <Play className="h-4 w-4 fill-current group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a 
            href="#architecture"
            className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 font-semibold text-sm text-slate-200 transition-all duration-200 border border-slate-800 hover:border-slate-700 flex items-center gap-2"
          >
            <Code className="h-4 w-4 text-slate-400" />
            <span>Explore Architecture</span>
          </a>
        </div>

        {/* Setup Verification / Command Box */}
        <div className="mt-12 w-full max-w-2xl bg-slate-900/40 backdrop-blur-md rounded-xl border border-slate-800 p-4.5 text-left shadow-2xl relative">
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-2">
            <Terminal className="h-3.5 w-3.5 text-indigo-400" />
            <span>developer-setup-instructions.sh</span>
          </div>
          <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-1.5 select-all selection:bg-indigo-500/30">
            <div className="text-slate-500"># Project is configured and ready in your workspace!</div>
            <div><span className="text-indigo-400">npm</span> install <span className="text-slate-500"># installed!</span></div>
            <div><span className="text-indigo-400">npm</span> run dev <span className="text-slate-500"># to spin up Vite HMR</span></div>
          </div>
        </div>
      </section>

      {/* Interactive Sandboxed Cluster Dashboard (CRITICAL DEMO REQUIREMENT) */}
      <section id="demo" className="py-16 px-6 max-w-7xl mx-auto w-full relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-outfit tracking-tight sm:text-4xl">
            Multi-Layer Computing Sandbox
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto">
            Interact with the visual state engine below. Deploy real-time simulated neural compute layers, configure load balancers, and witness Vite's reactive rendering engine instantly.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-lg shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 relative overflow-hidden">
          
          {/* Subtle decoration lines */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>

          {/* Left Column: Live Control Hub & Metrics (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-indigo-500/10 rounded-md text-indigo-400 border border-indigo-500/20">
                  <Activity className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-lg font-outfit text-white">Metrics Control</h3>
              </div>

              {/* Stat Cards Stack */}
              <div className="space-y-4">
                {/* Stat 1: Total Compute */}
                <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 text-slate-600 group-hover:text-indigo-400 transition-colors">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Neural Compute Capacity</div>
                  <div className="text-3xl font-extrabold text-white mt-1.5 font-outfit flex items-baseline gap-1.5">
                    {totalTFLOPS} <span className="text-xs font-semibold text-indigo-400 uppercase">TFLOPS</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 font-mono">Calculated from {activeNodesCount} layers</div>
                </div>

                {/* Stat 2: Active Layers */}
                <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 text-slate-600 group-hover:text-purple-400 transition-colors">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Layer Nodes</div>
                  <div className="text-3xl font-extrabold text-white mt-1.5 font-outfit flex items-baseline gap-1.5">
                    {activeNodesCount} <span className="text-xs font-semibold text-purple-400 uppercase">Deployed</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1 font-mono">Zero compile delay overhead</div>
                </div>

                {/* Stat 3: Average Latency */}
                <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-3 text-slate-600 group-hover:text-cyan-400 transition-colors">
                    <Server className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Average Node Load</div>
                  <div className="text-3xl font-extrabold text-white mt-1.5 font-outfit flex items-baseline gap-1.5">
                    {averageLoad}% <span className="text-xs font-semibold text-cyan-400 uppercase">Capacity</span>
                  </div>
                  {/* Small visual bar indicator */}
                  <div className="w-full bg-slate-900 rounded-full h-1.5 mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        averageLoad > 75 ? 'bg-rose-500' : averageLoad > 50 ? 'bg-amber-500' : 'bg-emerald-500'
                      }`}
                      style={{ width: `${averageLoad}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Sandbox Deployers */}
            <div className="space-y-3">
              <button
                id="btn-deploy-layer"
                onClick={handleDeployLayer}
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 active:scale-[0.98] transition-all rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 shadow-lg shadow-indigo-950/50 cursor-pointer border border-indigo-400/20"
              >
                <Plus className="h-4 w-4" />
                <span>Deploy Compute Layer</span>
              </button>

              <div className="flex gap-2.5">
                <button
                  id="btn-reset-layer"
                  onClick={handleResetLayers}
                  className="flex-1 py-2 px-3 bg-slate-950 hover:bg-slate-900 active:scale-[0.98] transition-all rounded-lg border border-slate-800 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Reset Sandbox configuration"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Reset Nodes</span>
                </button>

                <button
                  id="btn-toggle-sim"
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`py-2 px-3 active:scale-[0.98] transition-all rounded-lg border text-xs flex items-center justify-center gap-1.5 cursor-pointer ${
                    isSimulating 
                      ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-400' 
                      : 'bg-slate-950 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSimulating ? 'bg-emerald-400 animate-ping' : 'bg-slate-600'}`}></span>
                  <span>{isSimulating ? 'Live Sim ON' : 'Live Sim OFF'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Output Sandbox Visualizer (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col bg-slate-950/80 border border-slate-800/60 rounded-xl overflow-hidden min-h-[420px] shadow-inner">
            
            {/* Header Tabs */}
            <div className="flex items-center justify-between border-b border-slate-900 bg-slate-900/40 px-4 py-2">
              <div className="flex items-center gap-1">
                <button
                  id="tab-compute"
                  onClick={() => setActiveTab('compute')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold font-outfit transition-all cursor-pointer ${
                    activeTab === 'compute' 
                      ? 'bg-slate-800 text-white shadow-sm border border-slate-700/50' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Active Layers Matrix ({layers.length})
                </button>
                <button
                  id="tab-neural"
                  onClick={() => setActiveTab('neural')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold font-outfit transition-all cursor-pointer ${
                    activeTab === 'neural' 
                      ? 'bg-slate-800 text-white shadow-sm border border-slate-700/50' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Neural Latency Visualizer
                </button>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span>STATUS: OPERATIONAL</span>
              </div>
            </div>

            {/* Dynamic Panel Content */}
            <div className="p-5 flex-grow overflow-y-auto max-h-[350px]">
              
              {/* TAB 1: Compute Grid List */}
              {activeTab === 'compute' && (
                <div className="space-y-3.5">
                  <div className="text-xs font-mono text-slate-400 flex items-center justify-between border-b border-slate-900 pb-2">
                    <span>LAYER INDEX & IDENTITY</span>
                    <span className="text-right">LOAD & LATENCY SPECTRUM</span>
                  </div>

                  {layers.map((layer, idx) => (
                    <div 
                      key={layer.id} 
                      className="group bg-slate-900/40 hover:bg-slate-900/80 border border-slate-900 hover:border-slate-800 p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:-translate-y-0.5 duration-200"
                    >
                      {/* Left: Layer Name & Details */}
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs font-mono">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                            {layer.name}
                            <span className="text-[10px] px-1.5 py-0.5 bg-slate-950 border border-slate-800 text-indigo-400 rounded-full font-mono font-medium">
                              {layer.type}
                            </span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5">SPEED INDEX: {layer.speed} FLOPS</div>
                        </div>
                      </div>

                      {/* Right: Load Slider Indicator */}
                      <div className="flex items-center gap-4.5 justify-between sm:justify-end">
                        <div className="text-right">
                          <div className="text-xs font-mono text-slate-300 flex items-center gap-1">
                            <span className="text-slate-500">Latency:</span>
                            <span className="text-indigo-300 font-semibold">{((100 - layer.speed) * 0.8 + 2.5).toFixed(2)}ms</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono">CORE LOAD: {layer.load}%</div>
                        </div>
                        
                        <div className="w-24 bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-900">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              layer.load > 70 ? 'bg-pink-500' : layer.load > 40 ? 'bg-indigo-400' : 'bg-cyan-400'
                            }`}
                            style={{ width: `${layer.load}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Deploy Layer Tip Card */}
                  <div className="border border-dashed border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center text-center mt-4">
                    <p className="text-xs text-slate-500 max-w-sm">
                      Need more processing grids? Deploy an edge cache node or vector compression ring directly to test state changes.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: Neural Latency Visualizer */}
              {activeTab === 'neural' && (
                <div className="space-y-6 flex flex-col justify-center h-full">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Network Jitter</div>
                      <div className="text-lg font-bold text-indigo-400 font-mono mt-1">±0.24ms</div>
                    </div>
                    <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Packet Loss</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono mt-1">0.00%</div>
                    </div>
                    <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Vite HMR Latency</div>
                      <div className="text-lg font-bold text-pink-400 font-mono mt-1">&lt; 14ms</div>
                    </div>
                    <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-500 font-mono uppercase">Active Channels</div>
                      <div className="text-lg font-bold text-cyan-400 font-mono mt-1">16 / 16</div>
                    </div>
                  </div>

                  {/* Latency Visual Graph Bars */}
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-900/80">
                    <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
                      <span>LOAD & PROPAGATION CHART</span>
                      <span className="text-indigo-400">Avg Jitter Mode: active</span>
                    </div>

                    <div className="flex items-end justify-between gap-1.5 h-28 pt-2">
                      {layers.map((layer, index) => {
                        const height = Math.max(15, layer.load)
                        return (
                          <div key={layer.id} className="flex-1 flex flex-col items-center gap-1 group">
                            <div className="text-[9px] font-mono text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                              {layer.load}%
                            </div>
                            <div 
                              className={`w-full rounded-t transition-all duration-500 cursor-pointer ${
                                layer.load > 70 
                                  ? 'bg-gradient-to-t from-pink-600 to-pink-400 group-hover:from-pink-500 group-hover:to-pink-300' 
                                  : layer.load > 40 
                                  ? 'bg-gradient-to-t from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-indigo-300' 
                                  : 'bg-gradient-to-t from-cyan-600 to-cyan-400 group-hover:from-cyan-500 group-hover:to-cyan-300'
                              }`}
                              style={{ height: `${height}%` }}
                              title={`${layer.name}: ${layer.load}% Load`}
                            ></div>
                            <div className="text-[8px] font-mono text-slate-500 truncate w-full text-center mt-1">
                              L-{index + 1}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Live Console Log Feed */}
            <div className="border-t border-slate-900 bg-slate-950 px-4.5 py-3 font-mono text-xs flex flex-col gap-1.5 text-indigo-300/80">
              <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-900 pb-1.5 mb-1">
                <span className="flex items-center gap-1">
                  <Terminal className="h-3 w-3" /> LIVE NODE CONSOLE LOGS
                </span>
                <span>CTRL+C to terminate</span>
              </div>
              {commandLogs.map((log, index) => (
                <div key={index} className="truncate text-slate-400">
                  <span className="text-slate-600 select-none mr-2">&gt;</span>
                  {log}
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Grid of Key Features */}
      <section id="features" className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-900/20 hover:bg-slate-900/40 border border-slate-900 hover:border-slate-800 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-10 w-10 bg-indigo-500/10 rounded-lg border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold font-outfit text-white mb-2">High-Performance Compute</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ultra-light components and fast templates ensure that raw processing power and interactive animations respond instantly to user changes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/20 hover:bg-slate-900/40 border border-slate-900 hover:border-slate-800 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-10 w-10 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold font-outfit text-white mb-2">Isolated Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Build resilient, clean, and isolated React architectures following robust component hierarchies and single-responsibility utilities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/20 hover:bg-slate-900/40 border border-slate-900 hover:border-slate-800 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="h-10 w-10 bg-cyan-500/10 rounded-lg border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold font-outfit text-white mb-2">Zero Bundle Bloat</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Using the state-of-the-art Tailwind CSS v4 compiler, styles are processed on the fly to yield optimized, light-speed CSS production bundles.
            </p>
          </div>

        </div>
      </section>

      {/* Technology Integration Specs */}
      <section className="py-12 bg-slate-900/10 border-y border-slate-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-1 max-w-xl">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest font-mono">Boilerplate Tech Stack</span>
            <h3 className="text-2xl font-bold font-outfit text-white">Full Stack Orchestrated Locally</h3>
            <p className="text-slate-400 text-sm mt-1.5">
              InfiniteLayers sits at the center of React 19's fast runtime, Vite's blazing build pipelines, and Tailwind's brand-new declarative style ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="font-mono text-xs">Vite 8.0</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
              <span className="font-mono text-xs">React 19.2</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
              <span className="font-mono text-xs">Tailwind CSS v4</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 px-6 py-10 bg-slate-950 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2.5">
            <Layers className="h-5 w-5 text-indigo-400/80" />
            <span className="font-semibold text-slate-400 font-outfit">InfiniteLayers Boilerplate</span>
            <span className="text-slate-700">|</span>
            <span className="text-xs font-mono">v1.0.0</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Vite</a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">React</a>
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Tailwind v4</a>
          </div>

          <div className="text-xs font-mono text-indigo-400/60">
            Designed with absolute pairs &copy; 2026
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
