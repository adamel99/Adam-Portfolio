import React from "react";
import {
  Box,
  Typography,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Container,
  Tooltip,
  Chip,
  Stack,
} from "@mui/material";
import {
  Email,
  Phone,
  GitHub,
  School,
  Code,
  Build,
  Work,
  Star,
  Security,
  VerifiedUser,
  Shield,
  Terminal,
  CheckCircle,
} from "@mui/icons-material";
import { motion } from "framer-motion";

// Animated grid background component
const GridBackground = () => {
  return (
    <Box
      sx={{
        position: "fixed",
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

// A simple animated skill bar
const SkillBar = ({ skill, level }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        {skill}
      </Typography>
      <motion.div initial={{ width: 0 }} animate={{ width: `${level}%` }} transition={{ duration: 1.2 }}>
        <Box
          sx={{
            height: 10,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        />
      </motion.div>
    </Box>
  );
};

const ContactItem = ({ icon, text, href, label }) => {
  const theme = useTheme();
  return (
    <Tooltip title={label}>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Box
          component={href ? Link : "div"}
          href={href}
          target="_blank"
          rel="noopener"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: theme.palette.tertiary.main,
            textDecoration: "none",
            fontFamily: "monospace",
            fontSize: "0.9rem",
            px: 2,
            py: 1,
            background: `${theme.palette.tertiary.main}10`,
            border: `1px solid ${theme.palette.tertiary.main}30`,
            borderRadius: "6px",
            transition: "all 0.3s ease",
            "&:hover": {
              background: `${theme.palette.tertiary.main}20`,
              borderColor: theme.palette.tertiary.main,
              boxShadow: `0 0 15px ${theme.palette.tertiary.main}20`,
            },
          }}
        >
          {icon}
          <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
            {text}
          </Typography>
        </Box>
      </motion.div>
    </Tooltip>
  );
};

const Section = ({ title, icon, children }) => {
  const theme = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box mb={6}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 1,
            background: `${theme.palette.tertiary.main}10`,
            border: `1px solid ${theme.palette.tertiary.main}40`,
            borderRadius: "6px",
            mb: 2,
            fontFamily: "monospace",
          }}
        >
          {icon}
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              fontFamily: "'Courier New', monospace",
              color: theme.palette.tertiary.main,
              letterSpacing: "0.05em",
            }}
          >
            &gt; {title}
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, borderColor: `${theme.palette.tertiary.main}40` }} />
        {children}
      </Box>
    </motion.div>
  );
};

const projects = [
  {
    name: "TDX Arena IR Expert",
    subtitle: "Tackled advanced simulations in the TDX-Arena system",
    date: "February 2025 - November 2025",
    link: null,
    statusLabel: "SECURITY_OPS",
    desc: [
      "Conducted memory forensics on compromised Windows systems, extracting credentials, analyzing process artifacts, and recovering encrypted data from malicious Office documents.",
      "Performed malware triage and static analysis using Linux command-line tools (strings, file, grep, hash generation), validating threats via ClamAV signature matching.",
      "Analyzed PCAP files to identify reconnaissance activity (TCP SYN scans, port enumeration).",
      "Documented Indicators of Compromise (IoCs) and remediation steps following industry incident response frameworks.",
      "Utilized tcpdump, Wireshark, Snort, and Snorby for end-to-end threat detection and alert validation.",
    ],
  },
  {
    name: "Full-Stack E-Commerce Website",
    subtitle: "Platform for musicians",
    date: "October 2024 - December 2024",
    link: "https://doomsprodstore.onrender.com/",
    statusLabel: "FULL_STACK",
    desc: [
      "Designed a production-ready marketplace for beats, kits with secure role-based permissions.",
      "Built RESTful APIs with Express and Sequelize, supporting full CRUD operations and relational data modeling.",
      "Applied OWASP principles including SQL injection prevention and secure session management.",
      "Developed an admin-only product management workflow for creating, updating, and publishing products.",
    ],
  },
  {
    name: "Full-Stack Portfolio Website",
    subtitle: "Personal portfolio and resume showcase",
    date: "October 2024 - December 2024",
    link: "https://adamportfolio-xknb.onrender.com/",
    statusLabel: "WEB_DEV",
    desc: [
      "Designed and implemented backend APIs with PostgreSQL, Sequelize, and Node.js.",
      "Applied secure coding practices (input sanitation, error handling) and implemented authentication workflows.",
    ],
  },
  {
    name: "Stereo Imager Plugin",
    subtitle: "Spatial Audio Processing Plugin",
    date: "June 2024 - August 2024",
    link: null,
    statusLabel: "AUDIO_DEV",
    desc: [
      "Built a real-time stereo imaging effect using C++ and JUCE, implementing mid/side processing, adjustable width controls, and smooth gain compensation.",
    ],
  },
];

const Resume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      {/* Grid background */}
      <GridBackground />

      {/* Scanning line effect */}
      <Box
        component={motion.div}
        animate={{
          y: ["0vh", "100vh"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}, transparent)`,
          boxShadow: `0 0 20px ${theme.palette.tertiary.main}`,
          zIndex: 0,
          opacity: 0.2,
        }}
      />

      {/* Corner brackets */}
      <Box
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          width: 60,
          height: 60,
          borderTop: `3px solid ${theme.palette.tertiary.main}`,
          borderLeft: `3px solid ${theme.palette.tertiary.main}`,
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          width: 60,
          height: 60,
          borderTop: `3px solid ${theme.palette.tertiary.main}`,
          borderRight: `3px solid ${theme.palette.tertiary.main}`,
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          left: 20,
          width: 60,
          height: 60,
          borderBottom: `3px solid ${theme.palette.tertiary.main}`,
          borderLeft: `3px solid ${theme.palette.tertiary.main}`,
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderBottom: `3px solid ${theme.palette.tertiary.main}`,
          borderRight: `3px solid ${theme.palette.tertiary.main}`,
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      {/* Glowing orbs */}
      <Box
        sx={{
          position: "fixed",
          top: -80,
          left: -90,
          width: 300,
          height: 300,
          background: theme.palette.tertiary.main,
          opacity: 0.05,
          filter: "blur(120px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: -100,
          right: -80,
          width: 280,
          height: 280,
          background: theme.palette.primary.main,
          opacity: 0.05,
          filter: "blur(100px)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <Container sx={{ py: 10, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          {/* Terminal command header */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              background: `${theme.palette.tertiary.main}08`,
              border: `1px solid ${theme.palette.tertiary.main}40`,
              borderRadius: "6px",
              mb: 3,
              fontFamily: "monospace",
            }}
          >
            <Terminal sx={{ fontSize: 16, color: theme.palette.tertiary.main }} />
            <Typography
              sx={{
                color: theme.palette.tertiary.main,
                fontWeight: 600,
                fontSize: "0.85rem",
                fontFamily: "monospace",
              }}
            >
              ~/resume$ cat credentials.txt
            </Typography>
          </Box>

          <Typography
            variant="h2"
            fontWeight={800}
            letterSpacing={1}
            sx={{
              fontFamily: "'Courier New', monospace",
              background: `linear-gradient(135deg, ${theme.palette.tertiary.main}, ${theme.palette.primary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            &gt; Adam Elhamami
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              mt: 1,
              fontFamily: "monospace",
              fontSize: "0.95rem",
            }}
          >
            CompTIA Security+ Certified • Cybersecurity Professional • Full-Stack Developer
          </Typography>

          {/* Certification Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                background: `linear-gradient(135deg, ${theme.palette.tertiary.main}15, ${theme.palette.primary.main}10)`,
                backdropFilter: "blur(10px)",
                border: `2px solid ${theme.palette.tertiary.main}60`,
                borderRadius: "12px",
                px: 3,
                py: 1.5,
                mt: 3,
                boxShadow: `0 0 20px ${theme.palette.tertiary.main}20`,
              }}
            >
              <VerifiedUser sx={{ color: theme.palette.tertiary.main, fontSize: 28 }} />
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.tertiary.main,
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    display: "block",
                    letterSpacing: "0.1em",
                    fontFamily: "monospace",
                  }}
                >
                  CERTIFIED
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    fontFamily: "monospace",
                  }}
                >
                  CompTIA Security+
                </Typography>
              </Box>
            </Box>
          </motion.div>

          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mt={4}>
            <ContactItem icon={<Email fontSize="small" />} text="adamelh1999@gmail.com" label="Email" />
            <ContactItem icon={<Phone fontSize="small" />} text="(201) 234-2766" label="Phone" />
            <ContactItem
              icon={<GitHub fontSize="small" />}
              text="github.com/adamel99"
              href="https://github.com/adamel99"
              label="GitHub Profile"
            />
          </Box>
        </motion.div>
      </Container>

      <Container maxWidth="md" sx={{ py: 6, position: "relative", zIndex: 1 }}>
        <Section title="Professional Summary" icon={<Terminal fontSize="small" />}>
          <Box
            sx={{
              p: 4,
              borderRadius: 0,
              backdropFilter: "blur(14px)",
              backgroundColor: `${theme.palette.background.paper}dd`,
              border: `2px solid ${theme.palette.tertiary.main}40`,
              boxShadow: `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.tertiary.main}10`,
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${theme.palette.tertiary.main}, transparent)`,
              },
            }}
          >
            {/* Terminal header */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                background: theme.palette.background.default,
                borderBottom: `1px solid ${theme.palette.tertiary.main}40`,
                px: 2,
                py: 0.75,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontFamily: "monospace",
                fontSize: "0.7rem",
              }}
            >
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
              </Box>
              <Typography sx={{ fontSize: "inherit", color: theme.palette.tertiary.main }}>
                [PROFILE_SUMMARY]
              </Typography>
            </Box>

            <Box sx={{ pt: 3 }}>
              <Typography
                variant="body1"
                lineHeight={1.8}
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                  color: theme.palette.text.secondary,
                }}
              >
                CompTIA Security+ certified cybersecurity professional specializing in incident response, threat detection, and security monitoring. Combines hands-on experience in digital forensics, malware analysis, and network defense with technical proficiency in SIEM platforms, packet analysis, and threat hunting. Brings a developer's mindset to security operations with strong programming skills in Python, JavaScript, SQL, and C++ for automation and vulnerability analysis.
              </Typography>
            </Box>
          </Box>
        </Section>

        <Section title="Education" icon={<School fontSize="small" />}>
          <Box
            sx={{
              p: 4,
              borderRadius: 0,
              backdropFilter: "blur(14px)",
              backgroundColor: `${theme.palette.background.paper}dd`,
              border: `2px solid ${theme.palette.tertiary.main}40`,
              boxShadow: `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.tertiary.main}10`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Terminal header */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                background: theme.palette.background.default,
                borderBottom: `1px solid ${theme.palette.tertiary.main}40`,
                px: 2,
                py: 0.75,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontFamily: "monospace",
                fontSize: "0.7rem",
              }}
            >
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
              </Box>
              <Typography sx={{ fontSize: "inherit", color: theme.palette.tertiary.main }}>
                [EDUCATION]
              </Typography>
            </Box>

            <Box sx={{ pt: 3 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  fontFamily: "'Courier New', monospace",
                  color: theme.palette.tertiary.main,
                }}
              >
                New Jersey Institute of Technology
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                }}
                gutterBottom
              >
                CompTIA Security+ Cybersecurity Certificate
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  color: theme.palette.text.secondary,
                }}
                gutterBottom
              >
                February 2025 – November 2025 | Newark, New Jersey
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  color: theme.palette.text.secondary,
                }}
              >
                <strong style={{ color: theme.palette.tertiary.main }}>Key Courses:</strong> Threat Hunting & Intelligence, Incident Response & Digital Forensics, Computer Networking Fundamentals, Security Information & Event Management
              </Typography>
            </Box>
          </Box>
        </Section>

        <Section title="Certifications & Skills" icon={<Security fontSize="small" />}>
          <Box
            sx={{
              p: 4,
              borderRadius: 0,
              backdropFilter: "blur(14px)",
              backgroundColor: `${theme.palette.background.paper}dd`,
              border: `2px solid ${theme.palette.tertiary.main}40`,
              boxShadow: `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.tertiary.main}10`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Terminal header */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                background: theme.palette.background.default,
                borderBottom: `1px solid ${theme.palette.tertiary.main}40`,
                px: 2,
                py: 0.75,
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontFamily: "monospace",
                fontSize: "0.7rem",
              }}
            >
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
              </Box>
              <Typography sx={{ fontSize: "inherit", color: theme.palette.tertiary.main }}>
                [TECHNICAL_SKILLS]
              </Typography>
            </Box>

            <Box sx={{ pt: 3 }}>
              {/* Certifications */}
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip
                    icon={<VerifiedUser />}
                    label="CompTIA Security+"
                    sx={{
                      background: `${theme.palette.tertiary.main}20`,
                      border: `1px solid ${theme.palette.tertiary.main}60`,
                      color: theme.palette.tertiary.main,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      boxShadow: `0 0 10px ${theme.palette.tertiary.main}20`,
                    }}
                  />
                  <Chip
                    icon={<Shield />}
                    label="TDX Arena IR Expert"
                    sx={{
                      background: `${theme.palette.primary.main}20`,
                      border: `1px solid ${theme.palette.primary.main}60`,
                      color: theme.palette.primary.main,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      boxShadow: `0 0 10px ${theme.palette.primary.main}20`,
                    }}
                  />
                </Stack>
              </Box>

              <Divider sx={{ my: 3, borderColor: `${theme.palette.tertiary.main}30` }} />

              {/* Security Tools */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: theme.palette.tertiary.main,
                    fontSize: "0.9rem",
                  }}
                >
                  &gt; Security Tools / Platforms
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                  }}
                >
                  Splunk, Wireshark, Snort IDS/IPS, ClamAV, Nmap, tcpdump, Snorby, Active Directory/GPO
                </Typography>
              </Box>

              {/* Security Skills */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: theme.palette.tertiary.main,
                    fontSize: "0.9rem",
                  }}
                >
                  &gt; Security Skills
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                  }}
                >
                  Incident Response, Digital Forensics, Threat Hunting, Malware Analysis, Vulnerability Assessment, SIEM Analysis, Log Analysis, Network Traffic Analysis
                </Typography>
              </Box>

              {/* Operating Systems */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: theme.palette.tertiary.main,
                    fontSize: "0.9rem",
                  }}
                >
                  &gt; Operating Systems
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                  }}
                >
                  Windows (Memory Forensics), Linux (CLI-based investigation), MacOS (Web/Audio Development)
                </Typography>
              </Box>

              {/* Networking */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: theme.palette.tertiary.main,
                    fontSize: "0.9rem",
                  }}
                >
                  &gt; Networking
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                  }}
                >
                  TCP/IP, Packet Analysis, OSI Model, HTTP/HTTPS, Firewall Configuration
                </Typography>
              </Box>

              {/* Programming */}
              <Box>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontFamily: "monospace",
                    color: theme.palette.tertiary.main,
                    fontSize: "0.9rem",
                  }}
                >
                  &gt; Programming/Scripting
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                  }}
                >
                  Python, JavaScript, SQL, Bash (for automation and log parsing)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Section>

        <Section title="Professional Projects" icon={<Build fontSize="small" />}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 0,
                    backdropFilter: "blur(14px)",
                    backgroundColor: `${theme.palette.background.paper}dd`,
                    border: `2px solid ${theme.palette.tertiary.main}40`,
                    boxShadow: `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${theme.palette.tertiary.main}10`,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: theme.palette.tertiary.main,
                      boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 30px ${theme.palette.tertiary.main}20`,
                    },
                  }}
                >
                  {/* Terminal header */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      background: theme.palette.background.default,
                      borderBottom: `1px solid ${theme.palette.tertiary.main}40`,
                      px: 2,
                      py: 0.75,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      fontFamily: "monospace",
                      fontSize: "0.7rem",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                      <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#27C93F" }} />
                    </Box>
                    <Typography sx={{ fontSize: "inherit", color: theme.palette.tertiary.main }}>
                      [{proj.statusLabel}]
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 3 }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        fontFamily: "'Courier New', monospace",
                        color: theme.palette.tertiary.main,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {proj.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontFamily: "monospace",
                        fontSize: "0.8rem",
                      }}
                    >
                      // {proj.subtitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontFamily: "monospace",
                        fontSize: "0.8rem",
                      }}
                      gutterBottom
                    >
                      {proj.date}
                    </Typography>
                    {proj.link && (
                      <Link
                        href={proj.link}
                        target="_blank"
                        rel="noopener"
                        underline="hover"
                        sx={{
                          color: theme.palette.tertiary.main,
                          display: "block",
                          mb: 1,
                          fontFamily: "monospace",
                          fontSize: "0.85rem",
                        }}
                      >
                        → {proj.link}
                      </Link>
                    )}
                    <List dense sx={{ mt: 2 }}>
                      {proj.desc.map((d, i) => (
                        <ListItem key={i} disablePadding sx={{ alignItems: "flex-start", mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                            <CheckCircle
                              sx={{
                                color: theme.palette.tertiary.main,
                                fontSize: 18,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={d}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: theme.palette.text.secondary,
                              fontFamily: "monospace",
                              fontSize: "0.85rem",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Section>
      </Container>
    </Box>
  );
};

export default Resume;
