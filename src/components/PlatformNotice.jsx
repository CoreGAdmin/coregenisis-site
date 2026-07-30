export default function PlatformNotice() {
  return (
    <aside className="border border-gold/35 bg-[#FFF9EA] rounded-lg p-6" aria-labelledby="platform-enhancement-title">
      <div className="font-mono text-xs tracking-[0.1em] text-gold uppercase mb-2">Platform Enhancement Notice</div>
      <h2 id="platform-enhancement-title" className="font-display text-2xl font-medium text-navy mb-3">
        Planned platform enhancements are underway.
      </h2>
      <p className="text-[15px] text-slate leading-[1.75]">
        The CoreG platform is currently undergoing planned enhancements as part of our commitment to continuous improvement and institutional excellence. During this period, participant onboarding is temporarily unavailable as we complete these enhancements.
      </p>
    </aside>
  );
}
