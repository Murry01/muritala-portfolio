export default function App() {
  const profile = {
    name: "Muritala Adebayo Isah, Ph.D., PMP",
    title: "Smart Construction Researcher | Civil Engineer | AI for Construction & Infrastructure",
    location: "South Korea",
    email: "muritalaisah@gmail.com",
    phone: "+82-10-6539-7455",
    linkedin: "https://www.linkedin.com/in/muritalaai/",
    scholar: "https://scholar.google.com/citations?user=qinOzG0AAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Muritala-Isah-2?ev=prf_overview",
    github: "https://github.com/Murry01",
    summary:
      "Civil engineer, researcher, and PMP-certified project professional focused on smart construction, AI-driven risk management, knowledge graphs, BIM-enabled workflows, digital project delivery, and infrastructure innovation."
  };

  const highlights = [
    "Ph.D. in Civil Engineering (Construction Management)",
    "PMP-certified project professional",
    "10+ years of engineering, construction, and project management experience",
    "Research focus: AI, GenAI, Knowledge Graphs, RAG, IoT, BIM, and smart monitoring",
  ];

  const experience = [
    {
      role: "Smart Construction Researcher",
      org: "EBM Engineering Co. Ltd.",
      period: "Dec 2024 – Present",
      bullets: [
        "Coordinating integrated smart construction monitoring dashboard development for tunnel projects.",
        "Supporting IoT-based groundwater and safety management systems for tunnel infrastructure.",
        "Leading development and deployment of real-time smart safety solutions for construction sites.",
      ],
    },
    {
      role: "Postdoctoral Researcher",
      org: "Kyungpook National University Disaster Prevention Research Institute",
      period: "Jan 2024 – Sep 2024",
      bullets: [
        "Led research on AI-based construction risk response systems.",
        "Developed risk management workflows, datasets, and decision-support models.",
      ],
    },
    {
      role: "Graduate Researcher",
      org: "Kyungpook National University",
      period: "2018 – 2024",
      bullets: [
        "Developed a GPT- and knowledge graph-based question-answering system for tunnel project risk identification.",
        "Worked on schedule risk analysis, resource scheduling, Neo4j databases, and project reporting.",
      ],
    },
    {
      role: "Civil Engineer / Project Manager",
      org: "Previous Roles in Nigeria",
      period: "2009 – 2018",
      bullets: [
        "Managed QA/QC, project planning, scheduling, contractor coordination, BOQ reviews, and reporting.",
        "Supported delivery of road and housing projects through field engineering and management roles.",
      ],
    },
  ];

  const projects = [
    {
      name: "QASTRisk",
      description: "Question-answering system powered by a knowledge graph and GPT to support risk identification in tunnel projects.",
      stack: ["Python", "Streamlit", "Neo4j", "OpenAI", "Knowledge Graph"],
      link: "https://github.com/Murry01/QASTRisk",
    },
    {
      name: "ConRisk Dashboard",
      description: "Web-based application for construction project risk management and dashboard-driven decision support.",
      stack: ["Python", "Streamlit", "Neo4j"],
      link: "https://github.com/Murry01/ConRisk_Dashboard",
    },
    {
      name: "RisKG",
      description: "Risk knowledge graph development for construction project risk management workflows.",
      stack: ["Neo4j", "Cypher", "Knowledge Graph"],
      link: "https://github.com/Murry01/RisKG",
    },
    {
      name: "Semantic RBS",
      description: "Semantic risk breakdown structure and database for risk identification in bridge projects.",
      stack: ["Python", "Cypher", "Risk Modeling"],
      link: "https://github.com/Murry01/Semantic-RBS",
    },
  ];

  const publications = [
    "Question Answering System Powered by Knowledge Graph and GPT to Support Risk Identification in Tunnel Projects",
    "Development of Knowledge Graph Based on Risk Register to Support Risk Management of Construction Projects",
    "Assessment of Risk Impact on Road Project Using Deep Neural Network",
    "Integrating Schedule Risk Analysis with Multi-Skilled Resource Scheduling",
  ];

  const skills = [
    "AI / GenAI / LLM Applications", "Knowledge Graphs", "RAG", "Python", "C#", "SQL",
    "Neo4j / Cypher", "Streamlit", "Primavera P6", "Microsoft Project", "BIM", "IoT Systems",
    "Project Management", "Research Leadership"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-center">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                Open to smart construction, AI, BIM, digital twin, and infrastructure innovation roles
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{profile.name}</h1>
              <p className="mt-4 text-xl text-slate-300 md:text-2xl">{profile.title}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 md:text-lg">{profile.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={profile.linkedin} className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">LinkedIn</a>
                <a href={profile.github} className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">GitHub</a>
                <a href={profile.scholar} className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">Google Scholar</a>
                <a href={`mailto:${profile.email}`} className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">Contact</a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
              <div className="mb-5 flex justify-center">
                <img src="./profile.jpg" alt="Muritala Adebayo Isah" className="h-44 w-44 rounded-3xl object-cover ring-1 ring-slate-700" />
              </div>
              <h2 className="text-lg font-semibold text-cyan-200">Professional Snapshot</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <p><span className="text-slate-500">Location:</span> {profile.location}</p>
                <p><span className="text-slate-500">Email:</span> {profile.email}</p>
                <p><span className="text-slate-500">Phone:</span> {profile.phone}</p>
              </div>
              <div className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-4 max-w-4xl leading-7 text-slate-300">
          I work at the intersection of civil engineering, project management, artificial intelligence, and smart construction systems. My work spans academic research, field engineering, and applied product development for infrastructure projects, especially tunnels and complex construction environments.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Selected Projects</h2>
          <a href={profile.github} className="text-sm text-cyan-300 hover:underline">View more on GitHub</a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a key={project.name} href={project.link} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-slate-950 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-800">{item}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-8 space-y-6">
          {experience.map((item) => (
            <div key={item.role + item.org} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-slate-300">{item.org}</p>
                </div>
                <div className="text-sm text-slate-400">{item.period}</div>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" /> <span>{bullet}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Publications</h2>
            <div className="mt-8 space-y-4">
              {publications.map((pub) => (
                <div key={pub} className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-slate-300">{pub}</div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Skills</h2>
            <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-slate-950 px-3 py-2 text-sm text-slate-300 ring-1 ring-slate-800">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-sky-400/10 p-8">
          <h2 className="text-2xl font-bold">Let’s Connect</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            I am interested in opportunities in smart construction, AI for infrastructure, construction digital transformation, BIM-enabled delivery, research collaboration, and technical product development.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Email</a>
            <a href={profile.linkedin} className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">LinkedIn</a>
            <a href={profile.researchgate} className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">ResearchGate</a>
            <a href={profile.scholar} className="rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100">Google Scholar</a>
          </div>
        </div>
      </section>
    </div>
  )
}
