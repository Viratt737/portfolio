// import { useState } from "react";
// import profileImg from "../assets/profile.jpeg";

// const links = [
//   {
//     id: 1, name: "LinkedIn", url: "https://www.linkedin.com/in/virat-trivedi-86b6592a8/",
//     icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
//   },
//   {
//     id: 2, name: "GitHub", url: "https://github.com/Viratt737",
//     icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
//   },
//   {
//     id: 3, name: "Twitter / X", url: "https://x.com/Viratt737",
//     icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
//   },
// ];

// const skillCategories = [
//   {
//     label: "Languages",
//     color: "bg-violet-100 text-violet-700 border-violet-200",
//     dot: "bg-violet-400",
//     skills: ["Python", "JavaScript", "C++"],
//   },
//   {
//     label: "Frontend",
//     color: "bg-blue-100 text-blue-700 border-blue-200",
//     dot: "bg-blue-400",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
//   },
//   {
//     label: "Backend",
//     color: "bg-emerald-100 text-emerald-700 border-emerald-200",
//     dot: "bg-emerald-400",
//     skills: ["Node.js", "Express.js", "RESTful API", "WebSocket", "WebRTC", "Nodemailer"],
//   },
//   {
//     label: "Database",
//     color: "bg-amber-100 text-amber-700 border-amber-200",
//     dot: "bg-amber-400",
//     skills: ["MongoDB", "MySQL"],
//   },
//   {
//     label: "DevOps",
//     color: "bg-rose-100 text-rose-700 border-rose-200",
//     dot: "bg-rose-400",
//     skills: ["Docker", "Kubernetes (k8s)"],
//   },
//   {
//     label: "Tools",
//     color: "bg-slate-100 text-slate-700 border-slate-200",
//     dot: "bg-slate-400",
//     skills: ["VS Code", "Cursor", "Postman", "GitHub", "MongoDB Compass", "Requestly"],
//   },
//   {
//     label: "Core CS",
//     color: "bg-orange-100 text-orange-700 border-orange-200",
//     dot: "bg-orange-400",
//     skills: ["DSA", "DBMS", "Operating Systems"],
//   },
// ];

// const navItems = ["Home", "About", "Skills", "Contact"];

// export default function ProfileCard() {
//   const [activeNav, setActiveNav] = useState("Home");
//   const [hovered, setHovered] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollTo = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
//     setMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#0f0f13] text-white font-sans">

//       {/* ─── NAVBAR ─── */}
//       <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f13]/80 backdrop-blur-md border-b border-white/5">
//         <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
//           <span className="font-mono text-indigo-400 font-bold tracking-wider text-sm">VT.dev</span>
//           {/* Desktop nav */}
//           <div className="hidden md:flex gap-8">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(item.toLowerCase())}
//                 className={`text-sm transition-colors font-medium ${
//                   activeNav === item ? "text-indigo-400" : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//           {/* Mobile hamburger */}
//           <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {menuOpen
//                 ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
//                 : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
//             </svg>
//           </button>
//         </div>
//         {/* Mobile menu */}
//         {menuOpen && (
//           <div className="md:hidden bg-[#0f0f13] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(item.toLowerCase())}
//                 className="text-sm text-gray-300 hover:text-indigo-400 text-left"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* ─── HERO / HOME ─── */}
//       <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-16 px-6 relative overflow-hidden">
//         {/* Background glow */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-600px h-600px bg-indigo-600/10 rounded-full blur-3xl" />
//           <div className="absolute bottom-1/4 right-1/4 w-300px h-300px bg-purple-600/10 rounded-full blur-3xl" />
//         </div>

//         <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
//           {/* Avatar */}
//           <div className="relative mb-8">
//             <div className="w-32 h-32 rounded-full p-3px  from-indigo-500 via-purple-500 to-pink-500">
//               <img
//                 src={profileImg}
//                 alt="Virat Trivedi"
//                 className="w-full h-full rounded-full object-cover object-top"
//               />
//             </div>
//             <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0f0f13] animate-pulse" />
//           </div>

//           <p className="text-indigo-400 font-mono text-sm tracking-[0.2em] mb-3 uppercase">Hello, I'm</p>
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
//             Virat Trivedi<br />
            
//           </h1>

//           <p className="text-gray-400 text-lg mb-2">Full Stack Developer</p>
//           <p className="text-gray-500 text-sm mb-10 max-w-md leading-relaxed">
//             Building scalable web applications with the MERN stack. Passionate about real-time systems, clean architecture &amp; developer tooling.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap gap-4 justify-center mb-10">
//             <button
//               onClick={() => scrollTo("skills")}
//               className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/25"
//             >
//               View Skills
//             </button>
//             <button
//               onClick={() => scrollTo("contact")}
//               className="px-6 py-3 border border-white/10 hover:border-indigo-400/50 text-gray-300 hover:text-white text-sm font-semibold rounded-xl transition-all"
//             >
//               Contact Me
//             </button>
//           </div>

//           {/* Social Icons */}
//           <div className="flex gap-4">
//             {links.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onMouseEnter={() => setHovered(item.id)}
//                 onMouseLeave={() => setHovered(null)}
//                 title={item.name}
//                 className={`p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-indigo-400/50 transition-all duration-200 ${hovered === item.id ? "scale-110 bg-white/5" : ""}`}
//               >
//                 {item.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600">
//           <span className="text-[10px] font-mono tracking-widest uppercase">scroll</span>
//           <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
//           </svg>
//         </div>
//       </section>

//       {/* ─── ABOUT ─── */}
//       <section id="about" className="min-h-screen flex items-center py-24 px-6">
//         <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
//           {/* Text */}
//           <div>
//             <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">About Me</p>
//             <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
//               Turning ideas into<br />
//               <span className="text-gray-400">real-world products</span>
//             </h2>
//             <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
//               <p>
//                 Hey! I'm Virat, a Computer Science student from Kanpur who's obsessed with building things on the web. I love working across the full stack — from designing clean UIs to architecting backend systems.
//               </p>
//               <p>
//                 Currently building a <span className="text-indigo-400 font-medium">Smart Emergency Healthcare System</span> — a full-stack MERN app with prescription OCR, real-time chat, WebRTC video calls, and live hospital mapping.
//               </p>
//               <p>
//                 When I'm not coding, I'm exploring DevOps tooling with Docker &amp; Kubernetes to make deployments smoother and more scalable.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-3 mt-8">
//               {[
//                 { label: "Location", value: "Kanpur, UP" },
//                 { label: "Status", value: "Open to work", green: true },
//                 { label: "Focus", value: "MERN Stack" },
//               ].map(({ label, value, green }) => (
//                 <div key={label} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs">
//                   <span className="text-gray-500">{label}: </span>
//                   <span className={green ? "text-green-400 font-medium" : "text-white font-medium"}>{value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { num: "7+", label: "Technologies", icon: "⚡" },
//               { num: "3+", label: "Projects Built", icon: "🚀" },
//               { num: "2+", label: "Years Coding", icon: "💻" },
//               { num: "∞", label: "Curiosity", icon: "🔭" },
//             ].map(({ num, label, icon }) => (
//               <div
//                 key={label}
//                 className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/30 hover:bg-indigo-500/5 transition-all text-center"
//               >
//                 <div className="text-2xl mb-2">{icon}</div>
//                 <div className="text-3xl font-bold text-white mb-1">{num}</div>
//                 <div className="text-xs text-gray-500">{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── SKILLS ─── */}
//       <section id="skills" className="py-24 px-6 bg-white/0.02">
//         <div className="max-w-5xl mx-auto">
//           <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3 text-center">What I Know</p>
//           <h2 className="text-4xl font-bold text-white mb-3 text-center">Tech Stack</h2>
//           <p className="text-gray-500 text-sm text-center mb-14 max-w-md mx-auto">
//             Technologies and tools I work with across the full development lifecycle.
//           </p>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {skillCategories.map(({ label, color, dot, skills }) => (
//               <div
//                 key={label}
//                 className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
//               >
//                 <div className="flex items-center gap-2 mb-4">
//                   <span className={`w-2 h-2 rounded-full ${dot}`} />
//                   <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">{label}</span>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${color}`}
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── CONTACT ─── */}
//       <section id="contact" className="min-h-screen flex items-center py-24 px-6">
//         <div className="max-w-2xl mx-auto w-full text-center">
//           <p className="text-indigo-400 font-mono text-xs tracking-[0.2em] uppercase mb-3">Get In Touch</p>
//           <h2 className="text-4xl font-bold text-white mb-4">Let's Build Together</h2>
//           <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-md mx-auto">
//             Whether you want to collaborate on a project, talk tech, or just say hi — my inbox is always open.
//           </p>

//           <a
//             href="mailto:virat@example.com"
//             className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-indigo-500/30 mb-12 text-sm"
//           >
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//             </svg>
//             Say Hello
//           </a>

//           <div className="flex justify-center gap-4 mb-16">
//             {links.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={item.name}
//                 className="p-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-indigo-400/50 transition-all"
//               >
//                 {item.icon}
//               </a>
//             ))}
//           </div>

//           <div className="border-t border-white/5 pt-8">
//             <p className="text-xs text-gray-600 font-mono">
//               built by Virat Trivedi · React + Vite + Tailwind · {new Date().getFullYear()}
//             </p>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
import { useState } from "react";
import profileImg from "../assets/profile.jpeg";

const links = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/virat-trivedi-86b6592a8/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/Viratt737",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Twitter / X",
    url: "https://x.com/Viratt737",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const skillCategories = [
  {
    label: "Languages",
    pillStyle: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    dot: "bg-violet-400",
    skills: ["Python", "JavaScript", "C++"],
  },
  {
    label: "Frontend",
    pillStyle: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-400",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    pillStyle: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    dot: "bg-emerald-400",
    skills: ["Node.js", "Express.js", "RESTful API", "WebSocket"],
  },
  {
    label: "Database",
    pillStyle: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    dot: "bg-amber-400",
    skills: ["MongoDB", "MySQL"],
  },
  {
    label: "DevOps",
    pillStyle: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    dot: "bg-rose-400",
    skills: ["Docker", "Kubernetes (k8s)"],
  },
  {
    label: "Tools",
    pillStyle: "bg-slate-500/10 text-slate-300 border-slate-500/20",
    dot: "bg-slate-400",
    skills: ["VS Code", "Cursor", "Postman", "GitHub", "MongoDB Compass", "Requestly"],
  },
  {
    label: "Core CS",
    pillStyle: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    dot: "bg-orange-400",
    skills: ["DSA", "DBMS", "Operating Systems"],
  },
];

const navItems = ["Home", "About", "Skills", "Contact"];

export default function ProfileCard() {
  const [activeNav, setActiveNav] = useState("Home");
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveNav(id.charAt(0).toUpperCase() + id.slice(1));
    setMenuOpen(false);
  };

  return (
    <div className="w-full bg-[#0f0f13] text-white font-sans">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#0f0f13]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-indigo-400 font-bold tracking-wider text-sm">VT.dev</span>

          {/* Desktop */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  activeNav === item ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0f0f13] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm text-gray-400 hover:text-white text-left transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      >
        {/* Subtle background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-500px h-500px bg-indigo-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-300px h-[300px bg-purple-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-xl w-full">
          {/* Avatar */}
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full p-2px from-indigo-500 via-purple-500 to-pink-500">
              <img
                src={profileImg}
                alt="Virat Trivedi"
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0f0f13] animate-pulse" />
          </div>

          <p className="font-mono text-xs tracking-[0.25em] text-indigo-400 uppercase mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-4">
            Virat Trivedi
            <br />
          </h1>

          <p className="text-gray-400 text-base mb-2 font-medium">Full Stack Developer</p>
          <p className="text-gray-600 text-sm mb-10 max-w-md leading-relaxed">
            Building scalable web applications with the MERN stack. Passionate about
            real-time systems, clean architecture and developer tooling.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <button
              onClick={() => scrollTo("skills")}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl transition-all"
            >
              View Skills
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-2.5 border border-white/10 hover:border-indigo-400/40 text-gray-400 hover:text-white text-sm font-semibold rounded-xl transition-all"
            >
              Contact Me
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {links.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                className={`p-3 rounded-xl border border-white/10 text-gray-500 transition-all duration-200 hover:text-white hover:border-indigo-400/40 ${
                  hovered === item.id ? "scale-110 bg-white/5" : ""
                }`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* ABOUT */}
   <section id="about" className="min-h-screen flex items-center py-2 px-6">
        <div className="max-w-5xl mx-auto w-full">
          <p className="font-mono text-xs tracking-[0.25em] text-indigo-400 uppercase mb-2 text-center">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-white text-center mb-14 leading-tight">
            Turning ideas into real-world products
          </h2>
 
          {/* ✅ ONLY CHANGE: single centered column, no grid */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
              <p>
                Hey! I'm Virat, a Computer Science student from Kanpur who's obsessed with
                building things on the web. I love working across the full stack — from
                designing clean UIs to architecting backend systems.
              </p>
              <p>
                When I'm not coding, I'm exploring DevOps tooling with Docker and Kubernetes
                to make deployments smoother and more scalable.
              </p>
            </div>
 
            <div className="flex flex-wrap gap-2 mt-8 justify-center">
              {[
                { label: "Location", value: "Kanpur, UP" },
                { label: "Status", value: "Open to work", green: true },
                { label: "Focus", value: "MERN Stack" },
              ].map(({ label, value, green }) => (
                <div
                  key={label}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs"
                >
                  <span className="text-gray-600">{label}: </span>
                  <span className={green ? "text-green-400 font-medium" : "text-white font-medium"}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-2 px-6 bg-white/0.02">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.25em] text-indigo-400 uppercase mb-2 text-center">
            What I know
          </p>
          <h2 className="text-4xl font-bold text-white text-center mb-3">Tech Stack</h2>
          <p className="text-gray-600 text-sm text-center max-w-sm mx-auto mb-14">
            Technologies and tools I work with across the full development lifecycle.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map(({ label, pillStyle, dot, skills }) => (
              <div
                key={label}
                className="p-5 rounded-2xl bg-white/0.03 border border-white/8 hover:border-white/15 transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${pillStyle}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex items-center py-24 px-6">
        <div className="max-w-xl mx-auto w-full text-center">
          <p className="font-mono text-xs tracking-[0.25em] text-indigo-400 uppercase mb-2">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Let's build together</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-10">
            Whether you want to collaborate on a project, talk tech, or just say hi — my
            inbox is always open.
          </p>

          <a
            href="mailto:viratt737@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-sm mb-10"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Say Hello
          </a>

          <div className="flex justify-center gap-3 mb-16">
            {links.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="p-3 rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-indigo-400/40 transition-all"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8">
            <p className="font-mono text-xs text-white">
              Built by @ Virat Trivedi. {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}