export const portfolioData = {
  personal: {
    name: 'Ahmed Muqarrib',
    title: 'Machine Learning & Data Engineer',
    email: 'muqarrib720ahmed@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ahmed-muqarrib-b59a90289/',
    github: 'https://github.com/Ahmed-Muqarrib',
    description:
      'Passionate about Machine Learning, Full Stack Development, and delivering data-rich insights that inform impactful AI solutions.',
  },
  education: [
    {
      degree: 'Information Systems Engineering',
      school: 'Sheridan College',
      year: '2025',
      details: 'GPA: 3.96/4.0',
    },
  ],
  experience: [
    {
      role: 'Machine Learning Research Assistant',
      company: "Sheridan's Centre for Applied AI",
      period: 'Sep 2025 – Present',
      location: 'Oakville, Ontario',
      achievements: [
        'Optimized a HistGradientBoostingClassifier using scikit-learn by tuning hyperparameters and balancing class weights, improving accuracy from ~85% to ~93% on senescent cell classification',
        'Performed feature-importance analysis and misclassification diagnostics to identify key biological drivers of error, then visualized and presented findings to the Bough Biosciences team',
        'Preprocessed and cleaned biological datasets (ETO, H2O2, SLO), ran stratified hold-out splits, and produced performance reports (F1, AUC, confusion matrix) to validate model robustness',
      ],
    },
    {
      role: 'AI Web/Mobile Application Developer',
      company: "Sheridan's Centre for Applied AI",
      period: 'May 2025 – Aug 2025',
      location: 'Oakville, Ontario',
      achievements: [
        'Developed a responsive web app using React and prompt-tuned Google Gemini API to generate personalized, actionable tasks for burnout prevention',
        'Launched the tool (Bloomzy) — live demo: <a href="https://tool.bloomzy.ca/" target="_blank" rel="noreferrer" class="text-cyan-300 underline decoration-dotted hover:text-white transition-colors">tool.bloomzy.ca</a> — empowering students and entrepreneurs to reduce decision fatigue via prioritized, AI-generated tasks',
        'Designed adaptive chat workflows (text, sliders, multiple-choice) that tailor task recommendations to users’ mood and goals, enabling personalized wellness interventions',
        'Researched entrepreneurial burnout and wellness-tracking tools, producing reports and presentations on competitor apps and AI cost-performance to inform product direction',
      ],
    },
    {
      role: 'Research Data Scientist',
      company: "Sheridan's Centre for Applied AI",
      period: 'Jan 2024 – Feb 2025',
      location: 'Oakville, Ontario',
      achievements: [
        'Designed and ran large-scale analyses on ~800,000 mental-health patient records, identifying patterns in Emergency Department usage and isolating ~5,270 high-relevance visits for further research',
        'Mapped and merged patient postal codes with ON-Marg socio-economic indicators using PCCF+, SAS, and Python, enabling multi-dimensional marginalization insights across four socio-economic dimensions',
        'Built dashboards in Tableau and Power BI to visualize geo-socio-economic trends by marginalization quintile, informing hospital leadership’s targeted outreach strategy',
      ],
    },
  ],
  projects: [
    {
      name: 'Bloomzy',
      description: 'AI-powered burnout prevention assistant that prioritizes actionable, context-aware tasks for students and entrepreneurs.',
      tech: ['React', 'Google Gemini API', 'Vercel'],
      link: 'https://tool.bloomzy.ca/',
      github: null,
      image: 'projects/Project2.png',
      details: [
        'Empowers users to reduce decision fatigue via prioritized, AI-generated tasks',
        'Used React and prompt-tuned Google Gemini API workflows customized to mood inputs, multi-step forms, and role-specific goals',
      ],
    },
    {
      name: 'Accessible Events Portal',
      description:
        'Agency-facing portal for listing adaptive, recognition-focused events plus a family dashboard to discover, save, and book inclusive experiences.',
      tech: ['Angular', 'C# / ASP.NET Core', 'Docker', 'Azure'],
      link: null,
      github: 'https://github.com/Not-So-Swedish-Chef/Courage-Showcase',
      image: 'projects/Project1.png',
      details: [
        'Agencies can publish highlight-worthy events for differently abled communities, showcase impact, and share organization profiles',
        'Families browse curated listings, bookmark sessions, add events to Google Calendar, or contact agencies directly from the portal',
        'Implemented Docker-based deployment (frontend, backend, database) with Azure hosting and led usability testing with a 4-person team',
      ],
    },
  ],
  skills: {
    languages: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'C#', 'Kotlin', 'HTML', 'CSS', 'PHP'],
    frameworks: ['React', 'Spring Boot', 'Angular', 'ASP.NET', 'Node.js', 'Junit', 'xUnit'],
    devops: ['Docker', 'Git', 'Jenkins', 'Selenium'],
    cloud: ['AWS', 'Firebase', 'Azure'],
    projectManagement: ['JIRA', 'Trello', 'Agile/Scrum', 'SDLC', 'ITIL Foundations'],
    analytics: ['Tableau', 'Power BI', 'SAS'],
    libraries: ['Pandas', 'NumPy', 'Matplotlib', 'TensorFlow'],
    databases: ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'HiveSQL'],
    bigData: ['Hadoop', 'Spark', 'Kafka', 'Flume'],
  },
};
