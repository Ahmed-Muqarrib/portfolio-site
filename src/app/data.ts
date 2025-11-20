export const portfolioData = {
  personal: {
    name: 'Ahmed Muqarrib',
    title: 'Machine Learning Research Assistant | Full Stack Developer',
    email: 'muqarrib720ahmed@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ahmed-muqarrib-b59a90289/',
    github: 'https://github.com/Ahmed-Muqarrib',
    description: 'Passionate about Machine Learning, Full Stack Development, and building impactful AI solutions.',
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
      role: 'AI Web/Mobile Application Developer (Co-op)',
      company: "Sheridan's Centre for Applied AI",
      period: 'May 2025 – Aug 2025',
      location: 'Oakville, Ontario',
      achievements: [
        'Developed a responsive web app using React and prompt-tuned Google Gemini API to generate personalized, actionable tasks for burnout prevention',
        'Launched the tool (Bloomzy) — live demo: bloomzy-dynamic.vercel.app — empowering students and entrepreneurs to reduce decision fatigue via prioritized, AI-generated tasks',
        'Designed adaptive chat workflows (text, sliders, multiple-choice) that tailor task recommendations to users’ mood and goals, enabling personalized wellness interventions',
        'Researched entrepreneurial burnout and wellness-tracking tools, producing reports and presentations on competitor apps and AI cost-performance to inform product direction',
      ],
    },
    {
      role: 'Research Data Scientist (Co-op & Part-time)',
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
      name: 'Accessible Events Portal',
      description: 'Designed and developed an inclusive web portal enabling agencies to post accessible events and families to browse & book them.',
      tech: ['Angular', 'C# / ASP.NET Core', 'Docker', 'Azure'],
      link: 'https://github.com/Not-So-Swedish-Chef/Courage-Showcase',
      github: 'https://github.com/Not-So-Swedish-Chef/Courage-Showcase',
      image: 'projects/Project1.png',
      details: [
        'Implemented Docker-based deployment (frontend, backend, database) with Azure hosting',
        'Led storyboarding, usability testing, and code review sessions with a 4-person team',
      ],
    },
    {
      name: 'Bloomzy',
      description: 'AI-powered burnout prevention tool.',
      tech: ['React', 'Google Gemini API', 'Vercel'],
      link: 'https://bloomzy-dynamic.vercel.app/',
      github: null,
      image: 'projects/Project2.png',
      details: [
        'Empowering students and entrepreneurs to reduce decision fatigue via prioritized, AI-generated tasks',
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
