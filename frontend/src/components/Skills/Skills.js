import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Palette, Shield, Music, Terminal } from "lucide-react";

// === Matrix-style code rain effect ===
const CodeRain = () => {
  const characters = "01アイウエオカキクケコサシスセソタチツテト";
  const [columns, setColumns] = React.useState([]);

  React.useEffect(() => {
    const columnCount = Math.floor(window.innerWidth / 20);
    const newColumns = Array.from({ length: columnCount }, (_, i) => ({
      x: i * 20,
      y: Math.random() * -1000,
      speed: Math.random() * 3 + 1,
      char: characters[Math.floor(Math.random() * characters.length)],
    }));
    setColumns(newColumns);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.15,
      }}
    >
      {columns.map((col, i) => (
        <motion.div
          key={i}
          initial={{ y: col.y }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 20 / col.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: col.x,
            color: "#00FF41",
            fontFamily: "monospace",
            fontSize: "14px",
            textShadow: "0 0 5px #00FF41",
          }}
        >
          {col.char}
        </motion.div>
      ))}
    </div>
  );
};

// === Animated grid background ===
const GridBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `
          linear-gradient(rgba(0, 187, 249, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 187, 249, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

// === Security Particles ===
const SecurityParticles = () => {
  const icons = ["🔒", "🛡️", "⚡", "💻"];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.1,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            position: "absolute",
            color: "#00BBF9",
            fontSize: "16px",
          }}
        >
          {icons[Math.floor(Math.random() * icons.length)]}
        </motion.div>
      ))}
    </div>
  );
};

// === Cyber Orb ===
const CyberOrb = ({ size = 400, top, left, delay = 0, color = "#00BBF9" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        top,
        left,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}25, transparent)`,
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

// === Skill Bar with Animation ===
const SkillBar = ({ skill, level }) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "14px", fontWeight: "600", color: "#FFFFFF", fontFamily: "monospace" }}>{skill}</span>
        <span style={{ fontSize: "13px", color: "#00BBF9", fontWeight: "600", fontFamily: "monospace" }}>{level}%</span>
      </div>
      <div style={{
        height: "8px",
        backgroundColor: "rgba(0, 187, 249, 0.12)",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid rgba(0, 187, 249, 0.2)"
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          style={{
            height: "100%",
            background: "linear-gradient(135deg, #00BBF9 0%, #DC136C 100%)",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 187, 249, 0.4), 0 0 20px rgba(0, 187, 249, 0.3)",
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
      background: "#0A0903",
      position: "relative",
      overflow: "hidden",
      padding: "80px 20px 60px",
    }}>
      {/* Background Effects */}
      <GridBackground />
      <CodeRain />
      <SecurityParticles />
      <CyberOrb size={700} top="-15%" left="-15%" delay={0} color="#00BBF9" />
      <CyberOrb size={500} top="40%" left="65%" delay={3} color="#DC136C" />
      <CyberOrb size={400} top="70%" left="20%" delay={6} color="#FDCFF3" />

      {/* Scanline effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "repeating-linear-gradient(0deg, rgba(0, 187, 249, 0.03) 0px, transparent 2px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        color: "#FFFFFF"
      }}>
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          {/* Terminal-style header */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "rgba(0, 187, 249, 0.08)",
            border: "1px solid rgba(0, 187, 249, 0.3)",
            borderRadius: "6px",
            marginBottom: "24px",
            fontFamily: "monospace",
          }}>
            <Terminal size={16} color="#00BBF9" />
            <span style={{
              color: "#00BBF9",
              fontWeight: 600,
              fontSize: "0.85rem",
            }}>
              ~/skills$
            </span>
            <span style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.85rem",
            }}>
              cat expertise.txt
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            fontWeight: "900",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            <span style={{ color: "#FFFFFF" }}>Technical </span>
            <span style={{
              background: "linear-gradient(135deg, #00BBF9 0%, #DC136C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Arsenal
            </span>
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            color: "rgba(255, 255, 255, 0.6)",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Multi-domain expertise spanning security, development, and creative technology
          </p>
        </motion.div>

        {/* Skills Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "80px" }}
        >
          {/* Section Header */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            background: "rgba(220, 19, 108, 0.08)",
            border: "1px solid rgba(220, 19, 108, 0.3)",
            borderRadius: "6px",
            marginBottom: "32px",
            fontFamily: "monospace",
          }}>
            <Shield size={16} color="#DC136C" />
            <span style={{
              color: "#DC136C",
              fontWeight: 600,
              fontSize: "0.85rem",
            }}>
              CORE_COMPETENCIES
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px"
          }}>
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div style={{
                  padding: "28px",
                  background: `linear-gradient(135deg, ${category.bgColor}08, ${category.bgColor}04)`,
                  border: `2px solid ${category.bgColor}40`,
                  borderRadius: "16px",
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${category.bgColor}20`,
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}>
                  {/* Glowing top border on hover */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${category.bgColor}, transparent)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }} className="card-glow" />

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    paddingBottom: "16px",
                    borderBottom: `1px solid ${category.bgColor}20`
                  }}>
                    <div style={{
                      padding: "12px",
                      background: `${category.bgColor}15`,
                      border: `2px solid ${category.bgColor}60`,
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 20px ${category.bgColor}30`
                    }}>
                      {category.icon}
                    </div>
                    <h3 style={{
                      marginLeft: "14px",
                      fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                      fontWeight: "700",
                      color: "#FFFFFF",
                      letterSpacing: "0.3px"
                    }}>
                      {category.name}
                    </h3>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "8px 14px",
                          fontSize: "13px",
                          background: `${category.bgColor}10`,
                          border: `1px solid ${category.bgColor}40`,
                          borderRadius: "8px",
                          fontWeight: "500",
                          transition: "all 0.2s ease",
                          color: "#FFFFFF",
                          whiteSpace: "nowrap"
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
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div style={{
            marginBottom: "50px",
            textAlign: "center"
          }}>
            {/* Section Header */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              background: "rgba(0, 187, 249, 0.08)",
              border: "1px solid rgba(0, 187, 249, 0.3)",
              borderRadius: "6px",
              marginBottom: "24px",
              fontFamily: "monospace",
            }}>
              <Code size={16} color="#00BBF9" />
              <span style={{
                color: "#00BBF9",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}>
                FEATURED_TECH
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: "800",
              marginBottom: "12px",
              background: "linear-gradient(135deg, #FFFFFF, rgba(255, 255, 255, 0.7))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.5px"
            }}>
              Technical Showcase
            </h2>
            <p style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "700px",
              margin: "0 auto"
            }}>
              Real-world applications showcasing technical proficiency and problem-solving
            </p>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px"
          }}>
            {projectData.map((project, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div style={{
                  maxWidth: "950px",
                  width: "100%",
                  margin: "0 auto",
                  padding: "36px",
                  background: `linear-gradient(135deg, ${project.accentColor}08, ${project.accentColor}04)`,
                  border: `2px solid ${project.accentColor}40`,
                  borderRadius: "20px",
                  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px ${project.accentColor}20`,
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                }}>
                  {/* Glowing effect on hover */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }} className="card-glow" />

                  {/* Project Header */}
                  <div style={{ marginBottom: "24px" }}>
                    {/* Terminal-style title */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      color: project.accentColor,
                    }}>
                      <span>{'>'}</span>
                      <span style={{ opacity: 0.7 }}>PROJECT_STATUS:</span>
                      <span style={{
                        padding: "4px 8px",
                        background: `${project.accentColor}20`,
                        border: `1px solid ${project.accentColor}60`,
                        borderRadius: "4px",
                        fontWeight: "600"
                      }}>
                        COMPLETE
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                      fontWeight: "700",
                      marginBottom: "12px",
                      color: "#FFFFFF",
                      letterSpacing: "0.3px"
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: "clamp(1rem, 2vw, 1.125rem)",
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: "1.7"
                    }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Project Image */}
                  {project.image && (
                    <div style={{
                      marginBottom: "28px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: `2px solid ${project.accentColor}30`,
                      boxShadow: `0 0 30px ${project.accentColor}20`
                    }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          maxHeight: 320,
                          objectFit: "contain",
                          background: "rgba(0, 0, 0, 0.5)"
                        }}
                      />
                    </div>
                  )}

                  {/* Key Highlights */}
                  {project.highlights && (
                    <div style={{
                      marginBottom: "28px",
                      padding: "20px",
                      background: `${project.accentColor}05`,
                      borderRadius: "12px",
                      border: `1px solid ${project.accentColor}20`
                    }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "14px",
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        color: project.accentColor,
                      }}>
                        <span>{'>'}</span>
                        <span style={{ fontWeight: "600" }}>KEY_HIGHLIGHTS</span>
                      </div>
                      <ul style={{
                        margin: 0,
                        paddingLeft: 24,
                        lineHeight: "1.8",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      }}>
                        {project.highlights.map((highlight, i) => (
                          <li key={i} style={{
                            fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
                            color: "rgba(255, 255, 255, 0.75)"
                          }}>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technical Proficiency */}
                  <div style={{
                    marginBottom: "24px",
                    padding: "20px",
                    background: `${project.accentColor}03`,
                    borderRadius: "12px",
                    border: `1px solid ${project.accentColor}15`
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "18px",
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      color: project.accentColor,
                    }}>
                      <Terminal size={14} />
                      <span style={{ fontWeight: "600" }}>TECHNICAL_PROFICIENCY</span>
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                      gap: "14px"
                    }}>
                      {project.skills.map((skill, i) => (
                        <SkillBar key={i} skill={skill.label} level={skill.value} />
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  {project.technologies && (
                    <div>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "12px",
                        fontFamily: "monospace",
                        fontSize: "0.75rem",
                        color: project.accentColor,
                      }}>
                        <span>{'>'}</span>
                        <span style={{ fontWeight: "600" }}>TECH_STACK</span>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              padding: "8px 16px",
                              fontSize: "13px",
                              border: `1.5px solid ${project.accentColor}`,
                              borderRadius: "8px",
                              color: project.accentColor,
                              fontWeight: "600",
                              transition: "all 0.2s ease",
                              background: `${project.accentColor}10`,
                              fontFamily: "monospace",
                              boxShadow: `0 0 10px ${project.accentColor}20`
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
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
    name: "Cybersecurity",
    icon: <Shield size={24} color="#00BBF9" />,
    bgColor: "#00BBF9",
    skills: ["Incident Response", "Windows Security", "Linux Security", "Threat Analysis", "Database Security/Management", "Network Security/Analysis", "Vulnerability Assessment", "Security Auditing"]
  },
  {
    name: "Frontend Development",
    icon: <Code size={24} color="#FDCFF3" />,
    bgColor: "#FDCFF3",
    skills: ["React", "Redux", "Material-UI", "CSS3", "Responsive Design", "Framer Motion", "JavaScript (ES6+)", "Input Validation & Sanitization", "XSS Prevention", "CSRF Protection", "Secure Authentication"]
  },
  {
    name: "Backend & Database",
    icon: <Database size={24} color="#DC136C" />,
    bgColor: "#DC136C",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "REST APIs", "SQL Injection Prevention", "Parameterized Queries", "Authentication & Authorization", "Rate Limiting", "API Security"]
  },
  {
    name: "Audio Engineering",
    icon: <Music size={24} color="#00BBF9" />,
    bgColor: "#00BBF9",
    skills: ["JUCE Framework", "C++", "DSP", "FFT Analysis", "Plugin Development", "Audio Production", "Buffer Overflow Prevention", "Memory Safety"]
  },
  {
    name: "Development Tools",
    icon: <Terminal size={24} color="#FDCFF3" />,
    bgColor: "#FDCFF3",
    skills: ["Git", "VS Code", "Terminal/CLI", "Package Managers", "Build Tools", "Version Control", "Deployment", "AWS", "Dependency Scanning", "CI/CD Security", "Environment Variable Management"]
  },
  {
    name: "Design & UI/UX",
    icon: <Palette size={24} color="#DC136C" />,
    bgColor: "#DC136C",
    skills: ["UI Design", "Component Architecture", "Visual Design", "User Experience", "Prototyping", "Security-Focused Design", "Privacy-First UX"]
  }
];

// === Project Data ===
const projectData = [
  {
    title: "CompTIA Security+ Certified",
    description:
      "Industry-recognized certification validating comprehensive cybersecurity knowledge and hands-on skills in network security, threat management, and risk mitigation.",
    image: "/Images/Untitled.jpg",
    accentColor: "#00BBF9",
    highlights: [
      "Demonstrated proficiency in identifying and addressing security vulnerabilities",
      "Mastered security concepts including cryptography, identity management, and access control",
      "Gained expertise in implementing secure network architecture and protocols",
      "Developed skills in risk assessment, incident response, and security compliance",
      "Validated knowledge of security tools, technologies, and best practices"
    ],
    skills: [
      { label: "Network Security", value: 90 },
      { label: "Threat Management", value: 85 },
      { label: "Risk Assessment", value: 88 },
      { label: "Security Protocols", value: 87 },
    ],
    technologies: ["Encryption", "Firewalls", "IDS/IPS", "VPN", "PKI", "Security Frameworks", "Compliance Standards"]
  },
  {
    title: "TDX Arena Incident Response Expert",
    description:
      "Advanced cybersecurity training through simulated real-world incident response scenarios in the TDX-Arena system.",
    image: "/Images/cert.jpg",
    accentColor: "#DC136C",
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
    technologies: ["Windows", "Linux", "Security Tools", "Forensics", "Network Analysis", "ClamAV", "Snort", "IDS/IPS"]
  },
  {
    title: "DoomsProd Music Store (Secure Full-Stack E-Commerce)",
    description:
      "A security-hardened e-commerce platform for selling beats, loop kits, and drum kits to music producers and artists worldwide. Built with defense-in-depth architecture and OWASP best practices.",
    accentColor: "#FDCFF3",
    highlights: [
      "Architected secure backend API with Node.js and Express implementing JWT authentication, input sanitization, and rate limiting to prevent brute force attacks",
      "Implemented Redux with encrypted local storage for secure state management across shopping workflows, preventing XSS vulnerabilities",
      "Integrated PCI-compliant Stripe payment processing with HTTPS enforcement, CSRF protection, and secure session management",
      "Designed responsive UI with Material-UI following secure coding practices and Content Security Policy (CSP) headers",
      "Developed PostgreSQL database with parameterized queries to prevent SQL injection, role-based access control (RBAC), and encrypted sensitive data at rest"
    ],
    skills: [
      { label: "React / Redux", value: 85 },
      { label: "Express / Node.js", value: 75 },
      { label: "PostgreSQL", value: 70 },
      { label: "Material UI", value: 80 },
      { label: "Secure API Design", value: 85 },
    ],
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Stripe API",
      "Material-UI",
      "JWT Auth",
      "bcrypt",
      "Express-Validator"
    ],
    securityFeatures: [
      "JWT Authentication & Authorization",
      "Input Validation & Sanitization",
      "SQL Injection Prevention",
      "XSS Protection",
      "CSRF Tokens",
      "Rate Limiting",
      "HTTPS Enforcement",
    ]
  },
];

export default Skills;
