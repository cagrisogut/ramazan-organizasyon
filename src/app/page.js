import DashboardTabs from "@/components/Dashboard/DashboardTabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black text-white relative overflow-x-hidden selection:bg-ramadan-gold/30">

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-[0.03] bg-repeat bg-[length:150px_150px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-10 pb-20">

        {/* Top Bar with Logo and Welcome Message */}
        <div className="w-full max-w-7xl mx-auto px-4 mb-8">
          <div className="flex items-center justify-between">
            {/* Logo - Top Left */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-amber-500 rounded-full blur-xl opacity-25 group-hover:opacity-45 transition-opacity rounded-full" />
              <img
                src="/images/logo.svg"
                alt="GNŞ Logo"
                className="relative w-20 h-20 md:w-24 md:h-24 drop-shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:scale-105 transition-transform rounded-full"
              />
            </div>

            {/* Welcome Message - Top Center with Stars */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-4">
                <span className="text-3xl text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-pulse">✦</span>
                <h2 className="text-lg md:text-xl font-cinzel font-light bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 bg-clip-text text-transparent tracking-widest drop-shadow-[0_2px_8px_rgba(251,191,36,0.4)]">
                  Hoşgeldin Ey Şehr-i Ramazan
                </h2>
                <span className="text-3xl text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)] animate-pulse delay-150">✦</span>
              </div>
            </div>

            {/* Spacer for balance */}
            <div className="w-16 h-16 md:w-20 md:h-20" />
          </div>
        </div>

        {/* Main Branding - Center (No Box) */}
        <div className="text-center mb-12 px-4">
          <div className="space-y-3">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-cinzel font-bold bg-gradient-to-r from-ramadan-gold via-amber-300 to-ramadan-gold bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
              GNŞ ORGANİZASYON
            </h1>

            {/* Tagline Sentence */}
            <p className="text-base md:text-lg text-amber-200/80 font-light tracking-wide max-w-2xl mx-auto">
              GNŞ Organizasyon Farkıyla, Ramazan'ın Bereketini ve Huzurunu Sizlerle Paylaşıyor
            </p>

            {/* Decorative Line */}
            <div className="h-px w-56 mx-auto bg-gradient-to-r from-transparent via-ramadan-gold/40 to-transparent mt-4" />
          </div>
        </div>

        {/* Dashboard Content */}
        <DashboardTabs />

      </div>
    </main>
  );
}
