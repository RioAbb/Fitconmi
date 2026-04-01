 "use client";

import { useEffect, useMemo, useRef, useState } from "react";

function BrandLogo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[#a3e635]"
        aria-hidden="true"
      >
        <path
          d="M13.5 2 6 13h5l-1 9 8-12h-5l.5-8Z"
          fill="currentColor"
        />
      </svg>
      <span
        className="text-[26px] leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span className="text-white">Fit</span>
        <span className="text-[#a3e635]">Con</span>
        <span className="text-white">Mi</span>
      </span>
    </a>
  );
}

export default function Home() {
  const heroImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1920&q=80",
    ],
    []
  );
  const [currentHero, setCurrentHero] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const programs = [
    {
      title: "Beginner",
      level: "0-6 months",
      icon: "🌱",
      duration: "12 weeks",
      workouts: "3x per week",
      goal: "Build foundation & habits",
      key: "Progressive overload basics, form mastery, recovery",
      cta: "Start Beginner Program",
    },
    {
      title: "Intermediate",
      level: "6m-2 years",
      icon: "⚡",
      duration: "16 weeks",
      workouts: "4x per week",
      goal: "Strength & body composition",
      key: "Periodization, nutrition timing, strength benchmarks",
      cta: "Start Intermediate Program",
    },
    {
      title: "Advanced",
      level: "2+ years",
      icon: "🔥",
      duration: "20 weeks",
      workouts: "5x per week",
      goal: "Peak performance",
      key: "Advanced periodization, competition prep, elite nutrition",
      cta: "Start Advanced Program",
    },
  ];

  const stats = [
    { icon: "🏆", value: 10000, suffix: "+", label: "Members" },
    { icon: "💪", value: 50, suffix: "+", label: "Programs" },
    { icon: "📊", value: 95, suffix: "%", label: "Success Rate" },
    { icon: "🔬", value: 100, suffix: "%", label: "Science-Based" },
  ];

  const methodSteps = [
    {
      icon: "🧬",
      title: "Assess",
      text: "We analyze your fitness level, goals, and lifestyle",
    },
    {
      icon: "📋",
      title: "Program",
      text: "Get your personalized science-based training plan",
    },
    {
      icon: "📈",
      title: "Progress",
      text: "Track results with our evidence-based metrics",
    },
  ];

  const scienceCards = [
    {
      title: "Progressive Overload",
      text: "The #1 principle for muscle growth: gradually increase training stimulus so your body keeps adapting.",
    },
    {
      title: "Periodization",
      text: "Planned variation in intensity and volume helps you avoid plateaus and sustain long-term progress.",
    },
    {
      title: "Recovery Science",
      text: "Rest is 50% of your results. Sleep, recovery days, and stress control are non-negotiable for performance.",
    },
  ];

  const testimonials = [
    {
      name: "Youssef M.",
      result: "Lost 12kg in 16 weeks",
      quote:
        "I stopped guessing and followed the program exactly. The structure and progress tracking changed everything for me.",
    },
    {
      name: "Fatima K.",
      result: "Built strength and toned up in 14 weeks",
      quote:
        "The workouts are clear, the nutrition plan is realistic, and I finally feel consistent without burnout.",
    },
    {
      name: "Karim B.",
      result: "Added 18kg to squat in 12 weeks",
      quote:
        "FitConmi made training simple and data-driven. I can see measurable improvement every single month.",
    },
  ];

  const navLinks = ["Home", "Programs", "Nutrition", "About"];
  const communityImages = [
    {
      url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80",
      alt: "Athlete training with battle rope in gym",
    },
    {
      url: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600&q=80",
      alt: "Woman lifting dumbbells during workout session",
    },
    {
      url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
      alt: "Man strength training with dumbbells",
    },
    {
      url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80",
      alt: "Woman focused on gym training program",
    },
    {
      url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&q=80",
      alt: "Man performing weight training exercise",
    },
    {
      url: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80",
      alt: "Group fitness workout with mixed athletes",
    },
  ];
  const statsRef = useRef<HTMLElement | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;
    const duration = 1200;
    const steps = 40;
    const tick = duration / steps;
    let step = 0;
    const timer = window.setInterval(() => {
      step += 1;
      const progress = Math.min(step / steps, 1);
      setCounts(stats.map((s) => Math.floor(s.value * progress)));
      if (progress >= 1) window.clearInterval(timer);
    }, tick);
    return () => window.clearInterval(timer);
  }, [stats, statsVisible]);

  const socialIcons = [
    {
      name: "Instagram",
      href: "#",
      path: "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm11 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12Zm-6 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5Zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5Zm6-3a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 18 6.5Z",
    },
    {
      name: "TikTok",
      href: "#",
      path: "M14 3c.26 2.04 1.4 3.35 3.5 3.46v2.35a6.35 6.35 0 0 1-3.45-1.07v6.43A5.18 5.18 0 1 1 8.87 9h.01v2.43a2.75 2.75 0 1 0 2.74 2.74V2.5H14V3Z",
    },
    {
      name: "YouTube",
      href: "#",
      path: "M23 12s0-3.34-.43-4.95a2.58 2.58 0 0 0-1.82-1.82C19.14 4.8 12 4.8 12 4.8s-7.14 0-8.75.43A2.58 2.58 0 0 0 1.43 7.05C1 8.66 1 12 1 12s0 3.34.43 4.95a2.58 2.58 0 0 0 1.82 1.82c1.61.43 8.75.43 8.75.43s7.14 0 8.75-.43a2.58 2.58 0 0 0 1.82-1.82C23 15.34 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header
        className="sticky top-0 z-50 border-b border-white/10"
        style={{ backgroundColor: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)" }}
      >
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <BrandLogo />
          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-8 text-base text-white">
              {navLinks.map((link) => (
                <li key={link}>
                  <a className="transition-colors duration-300 hover:text-[#a3e635]" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="rounded-full bg-[#a3e635] px-4 py-2 text-xs font-bold text-[#0a0a0a] transition-all duration-300 hover:shadow-[0_0_18px_rgba(163,230,53,0.45)]"
            >
              Start Free
            </a>
          </div>
          <button
            className="rounded-md border border-white/20 p-2 text-white md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#0a0a0a]/95 px-4 py-4 md:hidden">
            <ul className="space-y-3 text-white">
              {navLinks.map((link) => (
                <li key={link}>
                  <a className="transition-colors duration-300 hover:text-[#a3e635]" href="#">
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="mt-2 inline-flex rounded-full bg-[#a3e635] px-4 py-2 text-xs font-bold text-[#0a0a0a]"
                >
                  Start Free
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section className="relative flex min-h-[100vh] items-center overflow-hidden px-4 sm:px-6 lg:px-8">
          {heroImages.map((image, idx) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentHero ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt="Fitness athlete training in gym environment"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/30" />
            </div>
          ))}
          <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#a3e635]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-0 h-72 w-72 rounded-full bg-[#a3e635]/10 blur-3xl" />

          <div className="relative mx-auto w-full max-w-7xl">
            <p className="inline-flex rounded-full border border-[#a3e635]/40 bg-black/30 px-4 py-2 text-sm text-white">
              🔬 Evidence-Based Training
            </p>
            <h1 className="mt-5 max-w-4xl leading-[0.9] sm:text-[90px] text-[52px]">
              <span className="block text-white">TRAIN SMARTER.</span>
              <span className="block text-[#a3e635]">NOT HARDER.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-[#9ca3af] sm:text-2xl">
              Science-backed programs trusted by 10,000+ athletes worldwide
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="rounded-full bg-[#a3e635] px-8 py-3 text-base font-bold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(163,230,53,0.45)]"
              >
                START FREE PROGRAM
              </a>
              <a
                href="#method"
                className="rounded-full border border-white/40 bg-black/25 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:border-[#a3e635] hover:text-[#a3e635]"
              >
                ▶ WATCH HOW IT WORKS
              </a>
            </div>
          </div>

          <a
            href="#stats"
            aria-label="Scroll to next section"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-white/80 transition-colors duration-300 hover:text-[#a3e635]"
          >
            ↓
          </a>
          <div className="absolute bottom-8 right-6 z-10 flex gap-2 sm:right-10">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentHero(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentHero ? "w-8 bg-[#a3e635]" : "w-2.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </section>

        <section
          id="stats"
          ref={statsRef}
          className="border-y border-white/10 bg-[#111111] px-4 py-8 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <article
                key={stat.label}
                className="rounded-xl border border-white/10 bg-[#1a1a1a] p-5 transition-all duration-300 hover:border-[#a3e635] hover:shadow-[0_0_20px_rgba(163,230,53,0.2)]"
              >
                <p className="text-2xl">{stat.icon}</p>
                <p className="mt-2 text-3xl font-bold text-[#a3e635]">
                  {counts[idx].toLocaleString()}
                  {stat.suffix}
                </p>
                <p className="text-sm text-[#9ca3af]">{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative h-[400px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1920&q=80"
            alt="Athlete in gym beginning transformation journey"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <h2 className="text-5xl text-white sm:text-7xl">
              YOUR JOURNEY STARTS TODAY
            </h2>
          </div>
        </section>

        <section
          id="programs"
          className="relative mx-auto w-full max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/70" />
          <div className="relative">
          <h2 className="text-center text-5xl text-white sm:text-6xl">
            Choose Your Path
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="group rounded-2xl border border-white/10 bg-[#1a1a1a] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(163,230,53,0.22)]"
                style={{
                  backgroundImage:
                    "linear-gradient(#1a1a1a,#1a1a1a), linear-gradient(120deg, rgba(163,230,53,0.9), rgba(163,230,53,0.05))",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <p className="text-4xl">{program.icon}</p>
                <h3 className="mt-4 text-4xl text-white">{program.title}</h3>
                <p className="text-sm uppercase tracking-wider text-[#a3e635]">
                  {program.level}
                </p>
                <span className="mt-3 inline-flex rounded-full border border-[#a3e635]/40 bg-[#a3e635]/10 px-3 py-1 text-xs font-semibold text-[#a3e635]">
                  {program.duration}
                </span>
                <div className="mt-5 space-y-2 text-[#9ca3af]">
                  <p>
                    <span className="text-white">Duration:</span> {program.duration}
                  </p>
                  <p>
                    <span className="text-white">Workouts:</span> {program.workouts}
                  </p>
                  <p>
                    <span className="text-white">Goal:</span> {program.goal}
                  </p>
                  <p>
                    <span className="text-white">Key:</span> {program.key}
                  </p>
                </div>
                <a
                  href="#"
                  className="mt-7 inline-flex rounded-full bg-[#a3e635] px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(163,230,53,0.4)]"
                >
                  {program.cta}
                </a>
              </article>
            ))}
          </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
              alt="Woman training with focused strength workout"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <article className="flex flex-col justify-center rounded-2xl bg-[#111111] p-8">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#a3e635]">
              FOR WOMEN
            </p>
            <h2 className="mt-3 text-5xl text-white sm:text-6xl">
              STRONG IS THE NEW BEAUTIFUL
            </h2>
            <p className="mt-4 text-[#9ca3af]">
              Specially designed programs for women focused on strength,
              confidence, and sustainable results. No extreme diets. No
              impossible standards.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex w-fit rounded-full bg-[#a3e635] px-6 py-3 font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(163,230,53,0.4)]"
            >
              Explore Women's Programs
            </a>
          </article>
        </section>

        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="flex flex-col justify-center rounded-2xl bg-[#111111] p-8 lg:order-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#a3e635]">
              FOR MEN
            </p>
            <h2 className="mt-3 text-5xl text-white sm:text-6xl">
              BUILD YOUR BEST PHYSIQUE
            </h2>
            <p className="mt-4 text-[#9ca3af]">
              Evidence-based hypertrophy and strength programs for men at every
              level. From first gym session to competition stage.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex w-fit rounded-full bg-[#a3e635] px-6 py-3 font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(163,230,53,0.4)]"
            >
              Explore Men's Programs
            </a>
          </article>
          <div className="overflow-hidden rounded-2xl lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
              alt="Man training intensely for muscle and strength"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-5xl text-white sm:text-6xl">
            THE FITCONMI COMMUNITY
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityImages.map((image) => (
              <article
                key={image.url}
                className="group relative overflow-hidden rounded-lg border border-white/10 transition-all duration-300 hover:border-[#a3e635]"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
              </article>
            ))}
          </div>
        </section>

        <section id="method" className="bg-[#111111] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="text-center text-5xl text-white sm:text-6xl">
              The FitConmi Method
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {methodSteps.map((step, idx) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-8 transition-all duration-300 hover:border-[#a3e635]"
                >
                  <p className="text-4xl">{step.icon}</p>
                  <p className="mt-4 text-sm uppercase tracking-widest text-[#a3e635]">
                    Step {idx + 1}
                  </p>
                  <h3 className="mt-1 text-4xl text-white">{step.title}</h3>
                  <p className="mt-3 text-[#9ca3af]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-5xl text-white sm:text-6xl">
            Why Science-Based Training Works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {scienceCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-8 transition-all duration-300 hover:border-[#a3e635]"
              >
                <h3 className="text-4xl text-white">{card.title}</h3>
                <p className="mt-4 text-[#9ca3af]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#111111] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="text-center text-5xl text-white sm:text-6xl">
              Real Results, Real People
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-2xl border border-white/10 bg-[#1a1a1a] p-8 transition-all duration-300 hover:border-[#a3e635] hover:shadow-[0_0_24px_rgba(163,230,53,0.15)]"
                >
                  <p className="text-lg text-[#a3e635]">⭐⭐⭐⭐⭐</p>
                  <h3 className="mt-3 text-3xl text-white">{testimonial.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#a3e635]">
                    {testimonial.result}
                  </p>
                  <p className="mt-4 text-[#9ca3af]">"{testimonial.quote}"</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-[#0f0f0f] px-4 py-20 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#a3e635]/10 blur-3xl" />
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <h2 className="text-5xl text-white sm:text-6xl">
              Ready to Transform Your Body?
            </h2>
            <p className="mt-4 text-lg text-[#9ca3af]">
              Join 10,000+ athletes. Start your free program today.
            </p>
            <a
              href="#"
              className="mt-8 rounded-full bg-[#a3e635] px-10 py-4 text-lg font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(163,230,53,0.45)]"
            >
              Get Started Free
            </a>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
            <BrandLogo />
            <ul className="flex flex-wrap items-center gap-4 text-[#9ca3af] sm:gap-6">
              <li>
                <a className="transition-colors hover:text-[#a3e635]" href="#">
                  Programs
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-[#a3e635]" href="#">
                  Nutrition
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-[#a3e635]" href="#">
                  Calculator
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-[#a3e635]" href="#">
                  About
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="rounded-full border border-white/15 p-2 text-[#9ca3af] transition-all duration-300 hover:border-[#a3e635] hover:text-[#a3e635]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-2 text-sm text-[#9ca3af]">
            <p>© 2026 FitConmi. All rights reserved.</p>
            <p>
              Always consult a physician before starting any fitness program.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
