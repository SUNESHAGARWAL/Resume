export const portfolioConfig = {
  // Personal Information
  name: "Sunesh Agarwal",
  title: "Senior Data Scientist",
  subtitle: "Lead AI Engineer specializing in GenAI, ML & NLP",
  location: "Bangalore, India",

  // Contact Information
  contact: {
    email: "suneshagarwal995@gmail.com",
    phone: "+91 - 7259601849",
    github: "https://github.com/SUNESHAGARWAL",
    linkedin: "https://linkedin.com/in/sunesh-agarwal",
  },

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    name: "Sunesh Agarwal",
    titles: [
      "Senior Data Scientist",
      "Lead AI Engineer",
      "Machine Learning Expert",
      "GenAI Specialist",
    ],
    description: "Transforming data into intelligent solutions. Specialized in GenAI, NLP, and Machine Learning with 8+ years of experience at Mercedes-Benz R&D.",
    cta: {
      primary: "View My Work",
      secondary: "Get In Touch",
    },
    // Add your profile image here
    profileImage: "/images/about_compressed.jpg", // Add your photo to public/images/
  },

  // About Section
  about: {
    title: "About Me",
    description: [
      "I'm a Senior Data Scientist and Lead AI Engineer at Mercedes-Benz R&D India with a passion for building intelligent systems that solve real-world problems.",
      "With expertise spanning Machine Learning, Deep Learning, NLP, and GenAI, I've delivered solutions that have saved millions in costs while significantly improving operational efficiency.",
      "My work focuses on developing cutting-edge AI solutions, from RAG-based conversational AI systems to predictive models that transform business workflows.",
    ],
    image: "/images/about_compressed.jpg", // Compressed version for better performance
    stats: [
      { value: "8+", label: "Years Experience" },
      { value: "€500K+", label: "Cost Savings Y-o-Y" },
      { value: "60%", label: "Time Reduction in Processes" },
      { value: "35+", label: "Deployed E2E Solutions" },
    ],
  },

  // Skills Section
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Languages & Tools",
        icon: "FaCode",
        skills: [
          "Python",
          "TensorFlow",
          "PyTorch",
          "Keras",
          "MLFlow",
          "Git",
          "Azure ML",
          "Databricks",
          "Genie",
          "Docker",
        ],
      },
      {
        name: "Machine Learning",
        icon: "FaBrain",
        skills: [
          "Statistical Modeling",
          "Supervised & Unsupervised Learning",
          "Time-Series Forecasting",
          "Anomaly Detection",
          "Deep Learning",
          "NLP",
          "Ensemble Methods",
        ],
      },
      {
        name: "GenAI",
        icon: "FaRobot",
        skills: [
          "Transformer Models",
          "RAG (Retrieval-Augmented Generation)",
          "Prompt Engineering",
          "LLM Evaluation",
          "Langchain",
          "Langgraph",
          "Huggingface",
          "Agentic AI Workflows",
          "AG2",
        ],
      },
    ],
  },

  // Experience Section
  experience: {
    title: "Professional Experience",
    positions: [
      {
        title: "Senior Data Scientist & Lead AI Engineer",
        company: "Mercedes-Benz R&D India",
        location: "Bangalore, India",
        period: "Feb 2021 - Present",
        description: "Leading AI initiatives and developing cutting-edge ML solutions for automotive excellence.",
        achievements: [
          {
            title: "Customer Experience and Next-Level Program (NLP)",
            points: [
              "Built text-analysis models to study customer feedback and identify key experience issues",
              "Developed a RAG-based chat system integrating Claude Opus 3.5 for reasoning and using Databricks Genie to dynamically select the correct databases and knowledge bases",
              "Ensured the system delivered precise, context-aware answers by incorporating analytical reasoning and conversation history",
              "Integrated data from 35+ internal and external sources to create a complete customer-journey view",
              "Delivered a cost-effective, in-house solution that replaced expensive third-party tools, reducing both costs and response time",
              "Built a smart caching system that reused previous query results for exact matches, and used LLaMA models to adapt SQL queries for partial matches",
            ],
          },
          {
            title: "Enterprise Asset Management & Financial Operations",
            points: [
              "Enhanced forecast accuracy by 27%, increasing financial metric accuracy using LSTM and Prophet models",
              "Engineered feature extraction pipeline using lag variables and rolling statistics to capture patterns",
              "Created automated data preprocessing framework with robust outlier handling and missing value imputation",
              "Implemented gradient boosting algorithms (XGBoost, LightGBM) in ensemble with neural networks",
              "Designed stacked autoencoder architecture for unsupervised anomaly detection",
            ],
          },
          {
            title: "Predictive ML for Engineering Workflows",
            points: [
              "Developed multi-layer neural networks with custom activation functions for vehicle subsystem prediction",
              "Implemented feature transformations based on engineering principles and dimensional analysis",
              "Created synthetic data generation framework using parametric bootstrapping",
              "Integrated predictive models with simulation framework, reducing analysis time from 20 hours to 2 hours",
            ],
          },
        ],
      },
      {
        title: "Data Scientist",
        company: "Mercedes-Benz R&D India",
        location: "Bangalore, India",
        period: "Jan 2017 - Feb 2021",
        description: "Developed statistical models and ML solutions for automotive engineering.",
        achievements: [
          {
            title: "Method and Process Development",
            points: [
              "Developed statistical models for window lifter mechatronics using supervised learning and time-series analysis",
              "Implemented signal processing algorithms with FFT and wavelet transformations for 20kHz multi-physics data",
              "Created automated validation framework with statistical hypothesis testing for safety-critical homologation procedures",
              "Designed feature extraction pipeline for sensor data combining domain knowledge with dimensionality reduction",
              "Developed interactive visualization dashboards enabling engineers to explore complex mechatronic performance data",
            ],
          },
        ],
      },
    ],
  },

  // Key Achievements
  achievements: {
    title: "Key Achievements",
    items: [
      {
        icon: "FaTrophy",
        title: "Process Innovation",
        description: "Transformed a hardware-dependent process into a machine learning-based digital homologation system by using neural networks and 10+ years of historical car line data.",
        impact: "Saved approximately €500K per car line",
        image: "/images/achievement1.jpg", // Optional achievement image
      },
      {
        icon: "FaRocket",
        title: "CX Agent",
        description: "Delivered an end-to-end Conversational AI solution in six months, integrating multiple internal data sources.",
        impact: "Cut time to insights by 60%, enabling faster decision-making for senior leadership",
        image: "/images/achievement2.jpg", // Optional achievement image
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Machine Learning Model Pipeline",
        description: "End-to-end framework for model development, testing, and deployment with CI/CD implementation.",
        image: "/images/project1.jpg", // Add project screenshots here
        technologies: ["Python", "MLFlow", "Docker", "CI/CD"],
        highlights: [
          "Architected complete ML pipeline with modular components and configuration-driven deployment",
          "Implemented feature selection algorithm with mutual information criteria, improving prediction accuracy by 25%",
          "Developed model drift detection system using Kolmogorov-Smirnov and Jensen-Shannon divergence tests",
          "Created containerized deployment workflow with version control integration",
        ],
        links: {
          github: "", // Add your project links here
          demo: "",
        },
      },
      // Add more projects here
    ],
  },

  // Education Section
  education: {
    title: "Education",
    degrees: [
      {
        degree: "Executive Post-Graduate",
        institution: "IIIT, Bangalore",
        location: "Bangalore, India",
        period: "Jan 2021 - Jan 2022",
        gpa: "3.4 / 4.0",
      },
      {
        degree: "Bachelor of Technology",
        institution: "Manipal University",
        location: "Manipal, India",
        period: "Jan 2013 - Jan 2017",
        gpa: "8.45 / 10.0",
      },
    ],
  },

  // Contact Section
  contactSection: {
    title: "Let's Connect",
    description: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    image: "/images/contact.jpg", // Optional contact section image
  },

  // Theme Colors (Customize your portfolio colors)
  theme: {
    primary: "#6366f1", // Indigo
    secondary: "#8b5cf6", // Purple
    accent: "#ec4899", // Pink
  },
};

export type PortfolioConfig = typeof portfolioConfig;
