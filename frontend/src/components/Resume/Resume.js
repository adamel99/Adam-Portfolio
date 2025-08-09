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
} from "@mui/icons-material";
import { motion } from "framer-motion";

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
      <motion.div whileHover={{ scale: 1.2 }}>
        <Box component={href ? Link : "div"} href={href} target="_blank" rel="noopener" sx={{ display: "flex", alignItems: "center", gap: 1, color: theme.palette.text.primary }}>
          {icon}
          <Typography variant="body2">{text}</Typography>
        </Box>
      </motion.div>
    </Tooltip>
  );
};

const Section = ({ title, icon, children }) => {
  const theme = useTheme();
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <Box mb={8}>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          {icon}
          <Typography variant="h4" fontWeight={800}>
            {title}
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, borderColor: `${theme.palette.primary.main}40` }} />
        {children}
      </Box>
    </motion.div>
  );
};

const projects = [
  {
    name: "DoomsProd E-Commerce",
    tech: "React, Node.js, Express, PostgreSQL, Sequelize, MUI, Stripe, Render, GitHub Actions",
    date: "Jan 2025 – May 2025",
    desc: [
      "Designed and built a full-stack e-commerce platform tailored for musicians to buy and lease beats, loop kits, and drum kits.",
      "Implemented dynamic role-based access (admin vs customer) to control permissions for product uploads, license creation, and order tracking.",
      "Developed RESTful API endpoints with full CRUD functionality using Express and Sequelize, with robust relational modeling for users, products, licenses, carts, and orders.",
      "Integrated Stripe for secure payment processing using Payment Intents API, with dynamic pricing for beats based on selected license types.",
      "Applied Material UI (MUI) for a sleek, responsive front-end with conditional rendering for user actions and admin panels.",
      "Deployed app on Render with PostgreSQL hosting, and implemented a CI/CD pipeline via GitHub Actions for automated deployments and linting.",
      "Optimized product filtering, playback previews, and cart persistence using React state management and local storage.",
    ],
  },
  {
    name: "DoomsVerb – Audio Plugin",
    tech: "C++, JUCE, VST/AU plugin formats",
    date: "Sep 2023 – Nov 2023",
    desc: [
      "Designed and implemented a custom digital reverb DSP plugin focused on high-quality audio processing for professional audio engineers and producers.",
      "Developed cross-platform compatibility and conducted extensive testing across major DAWs (Ableton Live, Logic Pro, Pro Tools), ensuring stable performance and accurate audio input validation.",
      "Engineered memory-efficient algorithms with exception-safe coding practices to maintain real-time processing performance and prevent crashes or glitches.",
      "Utilized JUCE framework for seamless integration with audio hosts, and optimized the UI for intuitive control over reverb parameters.",
    ],
  },
  {
    name: "Imagination – Stereo Imager",
    tech: "C++, JUCE, Real-time audio DSP",
    date: "Jun 2024 – Aug 2024",
    desc: [
      "Built a real-time stereo imaging plugin to enhance spatial perception and width of audio signals with interactive visual feedback for producers and mixing engineers.",
      "Implemented thread-safe user interface and optimized render pipeline to ensure low-latency processing and smooth GUI updates without audio dropouts.",
      "Contributed to the audio developer community through peer reviews and received positive feedback for algorithmic innovation and usability.",
      "Leveraged JUCE’s cross-platform capabilities to support multiple plugin formats and maintain consistent performance across Windows and macOS hosts.",
    ],
  },
];

const Resume = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ minHeight: "100vh", position: "relative", overflow: "hidden", background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.background.default})`, color: theme.palette.text.primary }}>
      {/* Parallax-ish background blur blobs */}
      <Box sx={{ position: "fixed", top: -80, left: -90, width: 300, height: 300, background: theme.palette.primary.main, opacity: 0.1, filter: "blur(120px)", borderRadius: "50%", zIndex: 0 }} />
      <Box sx={{ position: "fixed", bottom: -100, right: -80, width: 280, height: 280, background: theme.palette.tertiary.main, opacity: 0.08, filter: "blur(100px)", borderRadius: "50%", zIndex: 0 }} />

      <Container sx={{ py: 10, position: "relative", zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center" }}>
          <Typography variant="h2" fontWeight={800} letterSpacing={1}>Adam Elhamami</Typography>
          <Typography variant="h6" color={theme.palette.text.secondary} mt={1}>
            Full Stack Developer • Cybersecurity Student • Audio Plugin Dev
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4} mt={3}>
            <ContactItem icon={<Phone />} text="(201) 234‑2766" label="Phone" />
            <ContactItem icon={<Email />} text="adamelh1999@gmail.com" label="Email" />
            <ContactItem icon={<GitHub fontSize="large" />} text="adamel99" href="https://github.com/adamel99" label="GitHub Profile" />
          </Box>
        </motion.div>
      </Container>

      <Container maxWidth="md" sx={{ py: 6, position: "relative", zIndex: 1 }}>
        <Section title="Professional Summary">
          <Box sx={{
            p: 3,
            borderRadius: 3,
            backdropFilter: "blur(14px)",
            backgroundColor: `${theme.palette.background.paper}ee`,
            border: `1px solid ${theme.palette.primary.main}25`,
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          }}>
            <Typography variant="body1" lineHeight={1.8}>
              Full‑stack software engineer across web & audio tech. Skilled in React, TS, Node.js, C++; experienced in scalable architecture, REST APIs, plugin development & CI/CD. 1M+ music streams. Currently pursuing NJIT’s Security+ certification.
            </Typography>
          </Box>
        </Section>

        <Section title="Technical Proficiency" icon={<Code />}>
          <Box sx={{
            p: 3,
            borderRadius: 3,
            backdropFilter: "blur(14px)",
            backgroundColor: `${theme.palette.background.paper}ee`,
            border: `1px solid ${theme.palette.primary.main}25`,
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          }}>
            <SkillBar skill="React / TypeScript / Material UI" level={90} />
            <SkillBar skill="Node.js / Express" level={85} />
            <SkillBar skill="C++ / JUCE (Audio Dev)" level={60} />
            <SkillBar skill="PostgreSQL / Sequelize / MySQL" level={95} />
            <SkillBar skill="Linux / CI‑CD / Render" level={80} />
          </Box>
        </Section>

        <Section title="Education" icon={<School />}>
          <Box sx={{
            p: 3,
            borderRadius: 3,
            backdropFilter: "blur(14px)",
            backgroundColor: `${theme.palette.background.paper}ee`,
            border: `1px solid ${theme.palette.primary.main}25`,
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          }}>
            <Typography variant="h6" fontWeight={600}>NJIT Cyber‑Security Certification</Typography>
            <Typography variant="body2" gutterBottom>Feb 2025 – Nov 2025</Typography>
            <Typography variant="body2">
              <strong>Relevant Coursework:</strong> TCP/IP, DNS, ARP, Microsoft Security Admin, Active Directory, GPO, System Hardening, SIEM, Secure Coding & CI/CD.
            </Typography>
          </Box>
        </Section>

        <Section title="Projects" icon={<Build />}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {projects.map((proj, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2, duration: 0.6 }}>
                <Box sx={{
                  p: 3,
                  borderRadius: 3,
                  backdropFilter: "blur(14px)",
                  backgroundColor: `${theme.palette.background.paper}ee`,
                  border: `1px solid ${theme.palette.primary.main}25`,
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
                }}>
                  <Typography variant="h6" fontWeight={700}>{proj.name}</Typography>
                  <Typography variant="body2" color={theme.palette.text.secondary} gutterBottom>{proj.tech} • {proj.date}</Typography>
                  {proj.link && <Link href={proj.link} target="_blank" rel="noopener" underline="hover" sx={{ color: theme.palette.tertiary.main }}>{proj.link}</Link>}
                  <List dense>
                    {proj.desc.map((d, i) => (
                      <ListItem key={i} disablePadding>
                        <ListItemIcon>
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <Star sx={{ color: "#FFD700" }} />
                          </motion.div>
                        </ListItemIcon>
                        <ListItemText primary={d} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Section>

        <Section title="Achievements" icon={<Work />}>
          <Box sx={{
            p: 3,
            borderRadius: 3,
            backdropFilter: "blur(14px)",
            backgroundColor: `${theme.palette.background.paper}ee`,
            border: `1px solid ${theme.palette.primary.main}25`,
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          }}>
            <Typography variant="body2">• Independent music producer with 1,000,000+ total streams</Typography>
            <Typography variant="body2">• NCAA Division I Track & Field Athlete (400m / 200m)</Typography>
          </Box>
        </Section>
      </Container>
    </Box>
  );
};

export default Resume;
