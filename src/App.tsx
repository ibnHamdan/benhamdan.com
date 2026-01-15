
// import './App.css'
import Gallery from './components/Gallery'
import Header from './components/Header'
import HeroRight from './components/HeroRight'
import SidebarLeft from './components/SidebarLeft'
import { PROJECTS, SERVICES } from './constants'

function App() {

  return (
    <>
      <div className="h-screen w-screen overflow-hidden flex flex-col">
        <Header />

        <main className="flex-1 grid grid-cols-1 md:grid-cols-12 h-full overflow-hidden">
          {/* RTL Column Order: 1 (Hero), 2 (Gallery), 3 (Services) */}

          {/* Right (Visual) - Hero/Intro (Col 1 in Grid but rendered first in RTL flow) */}
          <HeroRight />

          {/* Center (Visual) - Projects */}
          <Gallery projects={PROJECTS} />

          {/* Left (Visual) - Services/Contact */}
          <SidebarLeft services={SERVICES} />

          {/* Mobile View Placeholder for Sidebar elements which are hidden on md */}
          <div className="md:hidden flex flex-col overflow-y-auto bg-white p-6 space-y-12">
            <div>
              <p className="text-xs font-mono text-primary font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                متاح للعمل الحر
              </p>
              <h1 className="text-5xl font-bold leading-tight tracking-tighter text-black">
                بناء تجارب رقمية<span className="text-primary">.</span>
              </h1>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary">المشاريع</h4>
              <div className="grid grid-cols-1 gap-4">
                {PROJECTS.map(p => (
                  <div key={p.id} className="relative aspect-[4/3] rounded overflow-hidden shadow-lg">
                    <img src={p.image} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold">{p.title}</h3>
                      <p className="text-white/70 text-xs">{p.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-grid-line">
              <h4 className="font-bold text-sm uppercase tracking-widest text-primary">تواصل معي</h4>
              <a className="text-2xl font-black block" href="mailto:hello@johndoe.com">benHamdan@outlook.com</a>
              <div className="flex gap-4">
                <div className="w-10 h-10 border flex items-center justify-center rounded"><span className="material-symbols-outlined">code</span></div>
                <div className="w-10 h-10 border flex items-center justify-center rounded"><span className="material-symbols-outlined">link</span></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
