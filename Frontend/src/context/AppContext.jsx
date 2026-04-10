import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const NAV_LINKS = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Courses", id: "courses" },
    { name: "Career", id: "career", href: "/career" },
    { name: "Success Stories", id: "stories" },
    { name: "Contact Us", id: "contact" },
  ];

  const TECH_STACK = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Programming" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Version Control" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "TypeScript", category: "Programming" },
    { name: "Next.js", category: "Frontend" },
  ];

  const FEATURES = [
    { icon: "📈", title: "Industry Relevant Skills", desc: "Learn technologies and tools that companies actually use in 2025" },
    { icon: "</>", title: "Hands-on Projects", desc: "Build real-world projects for your portfolio, not just watch tutorials" },
    { icon: "👥", title: "Expert Mentors", desc: "Get guidance from industry professionals with 10+ years experience" },
    { icon: "💼", title: "Career Support", desc: "Resume building, interview prep, and job placement assistance" },
    { icon: "🕐", title: "Flexible Learning", desc: "Learn at your own pace with lifetime access to course materials" },
    { icon: "💬", title: "Community Access", desc: "Join 5000+ learners, share knowledge, and grow together" },
  ];

  const COURSES = [
    {
      title: "Full Stack Web Development",
      desc: "Master frontend and backend development with React, Node.js, and MongoDB",
      level: "Beginner to Advanced",
      levelColor: "bg-purple-500",
      weeks: "12 weeks",
      enrolled: "234 enrolled",
      tags: ["React", "Node.js", "MongoDB", "+1"],
      bg: "from-green-900 via-black to-blue-900",
    },
    {
      title: "AI & Machine Learning",
      desc: "Learn artificial intelligence, deep learning, and build intelligent applications",
      level: "Intermediate",
      levelColor: "bg-purple-400",
      weeks: "16 weeks",
      enrolled: "186 enrolled",
      tags: ["Python", "TensorFlow", "Neural Networks", "+1"],
      bg: "from-purple-900 via-gray-900 to-blue-900",
    },
    {
      title: "Data Science & Analytics",
      desc: "Transform data into insights with Python, SQL, and advanced analytics",
      level: "Beginner to Intermediate",
      levelColor: "bg-purple-300",
      weeks: "14 weeks",
      enrolled: "312 enrolled",
      tags: ["Python", "SQL", "Pandas", "+1"],
      bg: "from-blue-900 via-gray-900 to-green-900",
    },
  ];

  const STATS = [
    { value: "500+", label: "Students Trained" },
    { value: "97%", label: "Success Rate" },
    { value: "300+", label: "Workshops Conducted" },
    { value: "50+", label: "Hiring Partners" },
  ];

  const CAREER_STEPS = [
    { num: 1, title: "Enroll Free", desc: "Start your learning journey with zero upfront cost" },
    { num: 2, title: "Complete Projects", desc: "Build 3-5 real-world projects with mentor guidance" },
    { num: 3, title: "Free Internship", desc: "Get hands-on experience with our partner companies" },
    { num: 4, title: "Get Hired", desc: "Convert internship to paid job or apply to 100+ partners" },
  ];

  const TESTIMONIALS = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer at Tech Corp",
      quote: "SkillTrix transformed my career! From zero coding knowledge to landing a 12 LPA job in just 6 months. The hands-on projects and mentor support were game-changers.",
      stars: 5,
      avatar: "PS",
    },
    {
      name: "Rahul Verma",
      role: "Data Scientist at Analytics Pro",
      quote: "The AI/ML course is incredibly practical. I built 4 projects that directly helped me crack interviews. The free internship program gave me the experience I needed.",
      stars: 5,
      avatar: "RV",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager at StartupHub",
      quote: "Best investment in my career! The curriculum is up-to-date with 2025 tech trends. Career support team helped me prepare for interviews and negotiate my salary.",
      stars: 5,
      avatar: "SJ",
    },
    {
      name: "Ananya Reddy",
      role: "Frontend Developer at Design Studio",
      quote: "The community is amazing! I learned so much from peers and mentors. The project-based learning approach helped me build a strong portfolio that impressed employers.",
      stars: 5,
      avatar: "AR",
    },
  ];

  const value = {
    NAV_LINKS,
    TECH_STACK,
    FEATURES,
    COURSES,
    STATS,
    CAREER_STEPS,
    TESTIMONIALS,
    token,
    setToken
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
