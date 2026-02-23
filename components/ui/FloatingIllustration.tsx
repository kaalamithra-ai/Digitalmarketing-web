"use client";

import FloatingBadge from "@/components/ui/FloatingBadge";

type FloatingIllustrationProps = {
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
};

export default function FloatingIllustration({
  videoSrc = "/services/video.mp4",
  posterSrc = "/images/abbu.png",
  className = "",
}: FloatingIllustrationProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-200/60 via-white to-indigo-200/50 blur-2xl" />
      <div className="animate-float-slow relative rounded-[1.8rem] border border-sky-100 bg-white/95 p-4 shadow-[0_40px_80px_-45px_rgba(15,23,42,0.55)] md:p-6">
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
          <video
            className="h-auto w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <FloatingBadge text="+128% ROAS" className="animate-float-fast -left-6 top-12" />
      <FloatingBadge text="AI Optimized Ads" className="animate-float-slow -right-8 top-1/3" />
      <FloatingBadge text="Data Driven Growth" className="animate-float-fast bottom-1 -left-2" />

      <span className="pointer-events-none animate-float-slow absolute right-12 top-8 h-2 w-2 rounded-full bg-cyan-300/80" />
      <span className="pointer-events-none animate-float-fast absolute bottom-9 right-8 h-2.5 w-2.5 rounded-full bg-indigo-300/80" />
      <span className="pointer-events-none animate-float-med absolute left-1/2 top-4 h-1.5 w-1.5 rounded-full bg-blue-300/80" />
    </div>
  );
}
