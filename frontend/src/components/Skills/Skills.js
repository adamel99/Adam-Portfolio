import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Palette, Shield, Music, Terminal } from "lucide-react";

// === Skill Bar with Animation ===
const SkillBar = ({ skill, level }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
        <span style={{ fontSize: "14px", fontWeight: "500", color: "#FFFFFF" }}>{skill}</span>
        <span style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.7)" }}>{level}%</span>
      </div>
      <div style={{
        height: "10px",
        backgroundColor: "rgba(220, 19, 108, 0.15)",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            height: "100%",
            background: "linear-gradient(135deg, #DC136C 0%, #A0104E 100%)",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(220, 19, 108, 0.4)",
          }}
        />
      </div>
    </div>
  );
};

// === Skills Page ===
const Skills = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0A0903 0%, #1a0a0f 100%)",
      position: "relative",
      overflow: "hidden",
      padding: "80px 20px",
    }}>
      {/* Background blur blobs */}
      <div style={{
        position: "fixed",
        top: -100,
        left: -100,
        width: 280,
        height: 280,
        background: "#DC136C",
        opacity: 0.12,
        filter: "blur(140px)",
        borderRadius: "50%",
        zIndex: 0,
      }} />
      <div style={{
        position: "fixed",
        bottom: -100,
        right: -80,
        width: 260,
        height: 260,
        background: "#00BBF9",
        opacity: 0.08,
        filter: "blur(120px)",
        borderRadius: "50%",
        zIndex: 0,
      }} />
      <div style={{
        position: "fixed",
        top: "50%",
        right: "20%",
        width: 200,
        height: 200,
        background: "#FDCFF3",
        opacity: 0.06,
        filter: "blur(100px)",
        borderRadius: "50%",
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        color: "#FFFFFF"
      }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 7vw, 4rem)",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "60px",
          letterSpacing: "1px",
          color: "#FFFFFF"
        }}>
          SKILLS // TECH STACK // PROJECTS
        </h1>

        {/* Skills Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "700",
            marginBottom: "30px",
            color: "#FFFFFF"
          }}>
            Core Competencies
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "60px"
          }}>
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div style={{
                  padding: "24px",
                  backdropFilter: "blur(20px)",
                  background: "linear-gradient(135deg, rgba(220, 19, 108, 0.08) 0%, rgba(220, 19, 108, 0.05) 100%)",
                  border: "1px solid rgba(220, 19, 108, 0.2)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(220, 19, 108, 0.1)",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}>
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, #DC136C, transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }} className="card-glow" />
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                    {category.icon}
                    <h3 style={{
                      marginLeft: "12px",
                      fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                      fontWeight: "600",
                      color: "#FFFFFF"
                    }}>
                      {category.name}
                    </h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "6px 12px",
                          fontSize: "13px",
                          background: "linear-gradient(135deg, rgba(220, 19, 108, 0.2) 0%, rgba(220, 19, 108, 0.1) 100%)",
                          border: "1px solid rgba(220, 19, 108, 0.3)",
                          borderRadius: "8px",
                          fontWeight: "500",
                          transition: "all 0.2s ease",
                          color: "#FFFFFF"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <h2 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "700",
          marginBottom: "30px",
          marginTop: "60px",
          color: "#FFFFFF"
        }}>
          Featured Projects
        </h2>

        {projectData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            style={{ marginBottom: "32px" }}
          >
            <div style={{
              maxWidth: "900px",
              width: "100%",
              margin: "0 auto",
              padding: "32px",
              backdropFilter: "blur(20px)",
              background: "linear-gradient(135deg, rgba(220, 19, 108, 0.08) 0%, rgba(220, 19, 108, 0.05) 100%)",
              border: "1px solid rgba(220, 19, 108, 0.2)",
              borderRadius: "16px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(220, 19, 108, 0.1)",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            }}>
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #DC136C, transparent)",
                opacity: 0,
                transition: "opacity 0.3s ease"
              }} className="card-glow" />

              <h3 style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#FFFFFF"
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: "16px",
                lineHeight: "1.8"
              }}>
                {project.description}
              </p>

              {project.highlights && (
                <div style={{ marginBottom: "20px" }}>
                  <h4 style={{
                    fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                    fontWeight: "600",
                    marginBottom: "8px",
                    color: "#FFFFFF"
                  }}>
                    Key Highlights:
                  </h4>
                  <ul style={{ marginTop: 0, paddingLeft: 20, lineHeight: "1.8" }}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i} style={{
                        fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
                        color: "rgba(255, 255, 255, 0.7)",
                        marginBottom: "6px"
                      }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    maxHeight: 300,
                    objectFit: "contain",
                    borderRadius: 12,
                    marginBottom: 20,
                  }}
                />
              )}

              <h4 style={{
                fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
                fontWeight: "600",
                marginBottom: "12px",
                marginTop: "20px",
                color: "#FFFFFF"
              }}>
                Technical Proficiency:
              </h4>
              {project.skills.map((skill, i) => (
                <SkillBar key={i} skill={skill.label} level={skill.value} />
              ))}

              {project.technologies && (
                <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 14px",
                        fontSize: "13px",
                        border: "2px solid #DC136C",
                        borderRadius: "8px",
                        color: "#DC136C",
                        fontWeight: "500",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        div:hover .card-glow {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

// === Skill Categories Data ===
const skillCategories = [
  {
    name: "Frontend Development",
    icon: <Code size={24} color="#DC136C" />,
    skills: ["React", "Redux", "Material-UI", "CSS3", "Responsive Design", "Framer Motion", "JavaScript (ES6+)"]
  },
  {
    name: "Backend & Database",
    icon: <Database size={24} color="#00BBF9" />,
    skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "REST APIs", "Stripe API Integration"]
  },
  {
    name: "Audio Engineering",
    icon: <Music size={24} color="#FDCFF3" />,
    skills: ["JUCE Framework", "C++", "DSP", "FFT Analysis", "Plugin Development", "Audio Production"]
  },
  {
    name: "Cybersecurity",
    icon: <Shield size={24} color="#DC136C" />,
    skills: ["Incident Response", "Windows Security", "Linux Security", "Threat Analysis", "Security Operations"]
  },
  {
    name: "Development Tools",
    icon: <Terminal size={24} color="#00BBF9" />,
    skills: ["Git", "VS Code", "Terminal/CLI", "Package Managers", "Build Tools", "Version Control"]
  },
  {
    name: "Design & UI/UX",
    icon: <Palette size={24} color="#FDCFF3" />,
    skills: ["UI Design", "Component Architecture", "Visual Design", "User Experience", "Prototyping"]
  }
];

// === Project Data ===
const projectData = [
  {
    title: "TDX Arena Incident Response Expert",
    description:
      "Advanced cybersecurity training through simulated real-world incident response scenarios in the TDX-Arena system.",
    image: "/Images/cert.jpg",
    highlights: [
      "Mastered incident detection and response protocols across Windows and Linux environments",
      "Analyzed and mitigated security threats in high-pressure simulation scenarios",
      "Developed expertise in threat hunting and forensic analysis techniques",
      "Achieved expert-level proficiency in security operations workflows"
    ],
    skills: [
      { label: "Windows Security", value: 85 },
      { label: "Linux Security", value: 80 },
      { label: "Incident Response", value: 95 },
      { label: "Threat Analysis", value: 90 },
    ],
    technologies: ["Windows", "Linux", "Security Tools", "Forensics", "Network Analysis"]
  },
  {
    title: "DoomsProd Music Store (Full-Stack E-Commerce)",
    description:
      "A complete e-commerce platform for selling beats, loop kits, and drum kits to music producers and artists worldwide.",
    highlights: [
      "Built scalable backend API with Node.js and Express handling user authentication and transactions",
      "Implemented Redux for robust state management across complex shopping workflows",
      "Integrated Stripe payment processing with secure checkout flow",
      "Designed responsive UI with Material-UI ensuring seamless mobile and desktop experience",
      "Developed PostgreSQL database schema for products, users, and order management"
    ],
    skills: [
      { label: "React / Redux", value: 85 },
      { label: "Express / Node.js", value: 75 },
      { label: "PostgreSQL", value: 70 },
      { label: "Material UI", value: 80 },
      { label: "API Integration", value: 85 },
    ],
    technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Stripe API", "Material-UI", "JWT Auth"]
  },
  {
    title: "Imagination Stereo Imager (JUCE Plugin)",
    description:
      "A professional-grade audio plugin for stereo width manipulation with real-time visual feedback, built for music producers and audio engineers.",
    image: "/Images/Imager.jpg",
    highlights: [
      "Engineered DSP algorithms in C++ for precise stereo field manipulation",
      "Implemented FFT-based spectrum analysis for real-time visual stereo representation",
      "Optimized performance for low-latency real-time audio processing",
      "Designed intuitive GUI with JUCE framework featuring dynamic meters and controls",
      "Created cross-platform VST3/AU plugin compatible with major DAWs"
    ],
    skills: [
      { label: "JUCE Framework", value: 80 },
      { label: "C++", value: 90 },
      { label: "DSP Programming", value: 85 },
      { label: "Audio Processing", value: 88 },
    ],
    technologies: ["JUCE", "C++", "VST3", "AU", "FFT", "DSP", "Cross-platform Development"]
  },
];

export default Skills
