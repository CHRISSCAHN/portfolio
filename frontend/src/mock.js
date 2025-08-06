// Mock data for portfolio sections
export const portfolioData = {
  // Home/Hero section data
  hero: {
    name: "Alex Johnson",
    title: "Full Stack Developer & Project Manager",
    subtitle: "Building scalable web applications and innovative HR Information Systems",
    description: "Passionate about delivering end-to-end solutions from backend architecture to frontend experiences, with expertise in leading cross-functional teams to create efficient, high-quality software systems.",
    location: "San Francisco, CA",
    experience: "5+ Years Experience",
    projectsCompleted: "25+ Projects Delivered",
    researchPapers: "2 International Research Studies"
  },

  // About section data
  about: {
    title: "About Me",
    description: "I am a Full Stack Developer and Project Manager with extensive experience in building scalable web applications and HR Information Systems. My journey spans from backend development with Laravel and PHP to frontend design with Vue.js and Bootstrap, while leading cross-functional teams to deliver innovative solutions.",
    highlights: [
      "End-to-end project leadership from conception to deployment",
      "Cross-functional collaboration with design, QA, and stakeholder teams",
      "Research-driven approach with 2 internationally presented studies",
      "Commitment to delivering high-quality, efficient systems"
    ],
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "25+" },
      { label: "Team Members Led", value: "15+" },
      { label: "Research Publications", value: "2" }
    ]
  },

  // Skills section data
  skills: {
    title: "Technical Skills",
    categories: [
      {
        category: "Backend Development",
        skills: [
          { name: "Laravel", level: 95 },
          { name: "PHP", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "Python", level: 80 },
          { name: "RESTful APIs", level: 92 }
        ]
      },
      {
        category: "Frontend Development", 
        skills: [
          { name: "Vue.js", level: 88 },
          { name: "React.js", level: 85 },
          { name: "Bootstrap", level: 90 },
          { name: "Tailwind CSS", level: 85 },
          { name: "JavaScript", level: 92 }
        ]
      },
      {
        category: "Database & Tools",
        skills: [
          { name: "MySQL", level: 88 },
          { name: "PostgreSQL", level: 82 },
          { name: "Git/GitHub", level: 90 },
          { name: "Docker", level: 75 },
          { name: "AWS", level: 78 }
        ]
      },
      {
        category: "Project Management",
        skills: [
          { name: "Agile/Scrum", level: 92 },
          { name: "Team Leadership", level: 88 },
          { name: "Requirements Analysis", level: 90 },
          { name: "Risk Management", level: 85 },
          { name: "Stakeholder Communication", level: 90 }
        ]
      }
    ]
  },

  // Projects section data
  projects: [
    {
      id: 1,
      title: "Enterprise HR Information System",
      description: "Comprehensive HRIS platform managing employee lifecycle, payroll, performance tracking, and analytics for 500+ employees.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      technologies: ["Laravel", "Vue.js", "MySQL", "Bootstrap", "Redis"],
      features: ["Employee Management", "Payroll Processing", "Performance Analytics", "Role-based Access"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      timeline: "6 months"
    },
    {
      id: 2,
      title: "Real-time Project Management Dashboard",
      description: "Interactive dashboard for tracking multiple projects with real-time updates, resource allocation, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Socket.io", "PostgreSQL", "Chart.js"],
      features: ["Real-time Updates", "Resource Tracking", "Team Chat", "Advanced Analytics"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      timeline: "4 months"
    },
    {
      id: 3,
      title: "E-commerce Platform with Admin Panel",
      description: "Full-featured e-commerce solution with inventory management, payment processing, and comprehensive admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Laravel", "Vue.js", "Stripe API", "MySQL", "Tailwind CSS"],
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Admin Dashboard"],
      demoUrl: "#",
      githubUrl: "#",
      status: "In Progress",
      timeline: "5 months"
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Educational platform with course management, student progress tracking, and interactive learning modules.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      technologies: ["Laravel", "React.js", "MySQL", "AWS S3", "Bootstrap"],
      features: ["Course Management", "Progress Tracking", "Interactive Quizzes", "Video Streaming"],
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
      timeline: "7 months"
    }
  ],

  // Achievements section data
  achievements: [
    {
      id: 1,
      title: "International Research Publication",
      description: "Presented research on 'Optimizing Database Performance in HR Systems' at the International Conference on Software Engineering",
      date: "2023",
      type: "Research",
      icon: "trophy",
      impact: "Cited by 25+ researchers worldwide"
    },
    {
      id: 2,
      title: "Best Innovation Award",
      description: "Recognized for developing an AI-powered employee performance prediction system that improved HR decision-making by 40%",
      date: "2023",
      type: "Award",
      icon: "award",
      impact: "Implemented across 3 organizations"
    },
    {
      id: 3,
      title: "International Conference Speaker",
      description: "Keynote speaker on 'Scalable Architecture Patterns in Modern Web Applications' at TechCon Asia 2022",
      date: "2022",
      type: "Speaking",
      icon: "mic",
      impact: "Audience of 500+ developers"
    },
    {
      id: 4,
      title: "Team Excellence Recognition",
      description: "Led a cross-functional team of 12 developers to deliver a complex ERP system 2 months ahead of schedule",
      date: "2022",
      type: "Leadership",
      icon: "users",
      impact: "Saved client $200K in operational costs"
    },
    {
      id: 5,
      title: "Open Source Contributor",
      description: "Active contributor to Laravel community with 500+ GitHub stars across personal repositories",
      date: "Ongoing",
      type: "Open Source",
      icon: "github",
      impact: "Used by 100+ developers globally"
    },
    {
      id: 6,
      title: "Certified Scrum Master",
      description: "Advanced certification in Agile project management and team leadership methodologies",
      date: "2021",
      type: "Certification",
      icon: "certificate",
      impact: "Improved team velocity by 35%"
    }
  ],

  // Contact section data
  contact: {
    title: "Let's Work Together",
    subtitle: "Ready to bring your next project to life? Let's discuss how I can help you build something amazing.",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/alexjohnson",
    github: "https://github.com/alexjohnson",
    website: "https://alexjohnson.dev",
    availability: "Available for new projects",
    responseTime: "Within 24 hours",
    services: [
      "Full Stack Development",
      "Project Management",
      "Technical Consulting", 
      "Team Leadership",
      "System Architecture"
    ]
  }
};