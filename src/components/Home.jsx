import { useState, useEffect } from "react";
// Put sunlogo.png in /public/ (imported as "/sunlogo.png")
import universityLogo from "/sunlogo.png";

/* ------------------------------------------------------------------
   SETUP
   1. Put all images in /public/ (same filenames as used below).
   2. All styling is inline CSS. Add once to global CSS:
         body { margin: 0; }
         html { scroll-behavior: smooth; }
   3. In handleSubmit(), send the lead to your CRM and fire your
      Google Ads conversion event (gtag_report_conversion).
------------------------------------------------------------------- */

const RECRUITERS = [
  { name: "Rêve Pharma", src: "/10001 (1).png" },
  { name: "Yugandhar", src: "/10004 (2).jpg" },
  { name: "Nova Beauty", src: "/10008 (1).png" },
  { name: "Pantaloons", src: "/10007 (1).png" },
  { name: "Forest Essentials", src: "/10005 (1).png" },
  { name: "The Souled Store", src: "/10002 (1).png" },

];

const CAMPUS = [
  { src: "/labimg.jpg", title: "Advanced Labs", text: "State-of-the-art laboratories for hands-on experiments and innovation." },
  { src: "/studentActivities.jpg", title: "Student Activities", text: "Cultural festivals, sports, clubs, and various student-led initiatives." },
  { src: "/securityimg.webp", title: "24×7 Security", text: "Round-the-clock surveillance with advanced monitoring systems." },
  { src: "/gym.webp", title: "Gymnasium", text: "Modern fitness center with advanced workout machines." },
  { src: "/campus-1.jpg", title: "Vibrant Campus Atmosphere", text: "Experience an energetic campus filled with learning, culture and fun." },
  { src: "/classroom-1.jpg", title: "Modern Classrooms", text: "Well-equipped digital classrooms designed for interactive learning." },
  { src: "/library.jpg", title: "Library & Research Center", text: "A huge digital + physical library supporting academic and research needs." },
  { src: "/hostel.jpg", title: "Hostel & Accommodation", text: "Comfortable, secure hostel facilities that feel like a second home." },
];

const IMG = {
  hero: "/DSC_4855.jpg",
  campus: "/042__1_.jpg",
  mscMaths: "/MSc_Maths.jpg",
  mscPhysics: "/MSc_Physics.jpg",
  phdPhysics: "/Ph.D_Physics.jpg",
  phdZoology: "/Ph.D_Zoology.jpg",
};

const CONTENT = {
  brand: "Sandip University",
  phone: "+91-8956374111",
  phoneHref: "tel:+918956374111",
  heroTag: "Admissions Open 2027-28",
  heroTitle: "Building Scientific Minds. Shaping Tomorrow.",
  heroSub: "NAAC Accredited ‘A’ Grade with 3.11 CGPA (1st Cycle)",
  para: "4th Top Ranking Private University in India | Approved by UGC | AIU",

  heroPoints: [
    "Experiential science learning",
    "Expert faculty & research mentors",
    "Research-oriented curriculum",
    "Advanced laboratories & facilities",
  ],
  datNotice: {
    titlee: "1st Phase Examination",
    title: "",
    lastDateLabel: "Last Date to Apply",
    lastDate: "4th Feb 2027",
    examLabel: "SU-DAT Exam",
    examDate: "6th Feb 2027",
  },

  stats: [
    { value: "20+", label: "Years of Excellence" },
    { value: "150+", label: "Industry Partners" },
    { value: "20+", label: "Design Labs & Studios" },
    { value: "100%", label: "Placement Support" },
  ],
  aboutTitle: "About the School of Science ",
  aboutText: [
    "Sandip University’s School of Science (SOS) is one of the top science colleges in Nashik, offering futuristic scientific programs at the undergraduate and postgraduate levels. The course curriculum of each program is designed in collaboration with top industry experts to ensure a research-based pedagogy.",
    "Students gain hands-on skill development opportunities in fully-equipped science labs on campus. Industry exposure is ensured through workshops, seminars, compulsory internships, and industry visits to help students develop technical and soft skills in the long run.",
  ],
  programs: [

    { name: "Bachelor of Science (B.Sc)", duration: "3 Years", blurb: "Science-based degrees in microbiology, forensics, physics, data science, chemistry and more." },
    { name: "Master of Science (M.Sc)", duration: "2 Years", blurb: "Advanced postgraduate programmes in life science, physics, chemistry, mathematics, microbiology and forensics." },
  ],
  highlights: [
    {
      title: "Learn Through Experiments",
      text: "Gain practical knowledge through laboratory experiments, scientific activities and hands-on learning."
    },
    {
      title: "Expert Faculty",
      text: "Learn from experienced faculty members and research mentors who encourage scientific thinking."
    },
    {
      title: "Research & Innovation",
      text: "Explore research-driven learning and develop innovative solutions to real-world scientific challenges."
    },
    {
      title: "Advanced Laboratories",
      text: "Access modern laboratories and scientific facilities designed to support practical and experimental learning."
    },
    {
      title: "Industry & Research Exposure",
      text: "Gain valuable exposure through workshops, expert sessions, projects, internships and research opportunities."
    },
    {
      title: "Future-Ready Learning",
      text: "Build analytical, problem-solving and scientific skills for higher studies and diverse career opportunities."
    },
  ],
  careers: [
    "Research Scientist",
    "Laboratory & Clinical Scientist",
    "Data & Research Analyst",
    "Biotechnologist",
    "Chemist",
    "Environmental Scientist",
    "Scientific Consultant",
    "Science Educator",
  ],
  steps: [
    { title: "Enquire", text: "Fill the form or call our admission desk." },
    { title: "Counselling", text: "Talk to our team about programmes and eligibility." },
    { title: "Apply", text: "Submit your application and documents." },
    { title: "Enrol", text: "Confirm your seat and start your design journey." },
  ],
  faqs: [
    { q: "What is the eligibility criteria for B.SC. admission at Sandip University’s school of sciences?", a: "10 + 2 with Chemistry as compulsory subject and 40 % & 45% aggregate percentage for reserved category and general category respectively." },
    { q: "What is the eligibility criteria for M.SC. admission at Sandip University’s school of sciences?", a: "Graduation from respective stream or equivalent course with minimum 50% marks for open and 45% marks forreserved category students" },
    { q: "What are the eligibility criteria for UG and PG courses at Sandip University?", a: "Eligibility for most UG programs is 10+2 from a reputed educational institution with minimum 50% aggregate marks in the qualifying exam, and the eligibility for most PG programs is an undergraduate degree in the relevant field from a UGC-recognised university with minimum 50% aggregate marks in the qualifying exam. For more information, choose the specific program you prefer to check the eligibility." },
    { q: "Are internships included in the curriculum at Sandip University’s school of sciences?", a: "Yes, the curriculum includes an internship component during the semester." },
    { q: "What is the course duration of the M.sc. program at Sandip University?", a: "The M.sc program is a 2-years course." },
    { q: "What is the course duration of the B.sc. program at Sandip University?", a: "The B. sc program is a 3-years course." },
  ],
  footerAddress: "Sandip University, Nashik, Maharashtra, India",
};

/* ------------------------------------------------------------------
   ELIGIBILITY CONSTANTS
   These MUST be declared before DEGREES (const is not hoisted for use),
   otherwise: "Uncaught ReferenceError: BSC_ELIGIBILITY is not defined"
------------------------------------------------------------------- */

const BSC_ELIGIBILITY = [
  "Passed 10+2 science or equivalent course from any recognized Board with minimum 45% marks",
  "Three years Diploma from any recognised Board of Technical Education",
];

const MSC_ELIGIBILITY = [
  "BSc (any branch) or BE/BTech with Physics and Mathematics courses with aggregate 50% for general category & 45% for SC / ST / OBC",
];

const DEGREES = [

  {
    id: "bsc",
    title: "Bachelor of Science (B.Sc)",
    duration: "3 Years",
    mode: "Full-Time",
    eligibility: BSC_ELIGIBILITY,
    specializations: [
      {
        key: "Microbiology",
        summary:
          "Sandip University offers a Bachelor of Science degree with a specialisation in Microbiology. The program runs for three years and six semesters. Students who choose this program acquire in-depth knowledge of a variety of microbiology topics, and graduates are taught genetics, cell remodeling, and other core areas of the field.",
        careers: ["Clinical Microbiologist", "Lab Technician / Lab Manager", "Infection Control Officer", "Diagnostic Labs (Pathology, Hospitals)"],
      },
      {
        key: "Forensic Science",
        summary:
          "One of the top B.Sc forensic science colleges in Nashik, Sandip University offers a Bachelor of Science degree with a specialisation in Forensic Science. The program runs for three years and six semesters. Students who choose this program acquire in-depth knowledge of a variety of forensic topics.",
        careers: ["Forensic Expert", "Crime Laboratory Analyst", "Drug Analyst", "Forensic Toxicologist", "Crime Scene Investigator"],
      },
      {
        key: "Physics",
        summary:
          "B.Sc. in Physics is one of the most popular undergraduate science degrees, spanning three years and six semesters. This program focuses on the fundamentals of physics and includes relevant topics like quantum mechanics, optics, theory of relativity, nuclear physics, and thermodynamics.",
        careers: ["Radiologist Assistant", "Radiation Oncologist", "Senior Physicist", "Consulting Physicist"],
      },
      {
        key: "Computational Mathematics & Data Science",
        summary:
          "Sandip University's B.Sc. in Computational Mathematics and Data Science program is a comprehensive three-year undergraduate program spread across six semesters. Each semester combines the practical applications of computational mathematics with the fundamentals of data science.",
        careers: ["Data Operations Scientist", "Statistician", "Quantitative Mathematician", "AI Consultant"],
      },
      {
        key: "Wine Technology",
        // TODO: placeholder - replace with the real Wine Technology summary
        summary:
          "Sandip University's B.Sc. in Wine Technology is a three-year undergraduate program spread across six semesters. It combines the science of fermentation, grape cultivation, and quality control with practical training in winemaking and the wine industry.",
        // TODO: placeholder careers - replace with the real list
        careers: ["Winemaker", "Enologist", "Quality Control Analyst", "Vineyard Manager"],
      },
      {
        key: "Nanoscience & Nanotechnology",
        summary:
          "B.Sc. in Nanoscience and Nanotechnology is a comprehensive undergraduate degree program divided into six semesters across three years. This is a highly specialised program designed to train students in the manipulation of matter at the nanoscale.",
        careers: ["Medical Nanotechnologist", "Pharmaceutical Scientist", "Development Engineer", "Research Scientist"],
      },
      {
        key: "Chemistry",
        summary:
          "B.Sc. in Chemistry is an advanced undergraduate degree program spread across three years and divided into six semesters. This is one of the best B.Sc. in Chemistry degrees in Nashik, as its curriculum is designed to provide detailed academic knowledge about the various aspects of chemistry such as organic and inorganic chemistry.",
        careers: ["Biomedical Chemist", "Lab Chemist", "Forensic Chemist", "Chemical Associate"],
      },
    ],
  },
  {
    id: "msc",
    title: "Master of Science (M.Sc)",
    duration: "2 Years",
    mode: "Full-Time",
    eligibility: MSC_ELIGIBILITY,
    specializations: [
      {
        key: "Life Science",
        summary:
          "Sandip University offers a two-year, four-semester Master of Science in Life Sciences course. This program concentrates on research on microorganisms such as viruses, fungi, and various algae, as well as plant, animal, and human life processes.",
        careers: ["Food Scientist", "Nutritionist", "Product Manager", "Project Manager"],
      },
      {
        key: "Physics",
        summary:
          "Blessed with beautiful nature and as one of the top M.Sc in Physics colleges in Nashik, Sandip University offers the best learning environment with spacious classroom and laboratory facilities for learners.",
        careers: ["Radiologist Assistant", "Radiation Oncologist", "Senior Physicist", "Consulting Physicist"],
      },
      {
        key: "Chemistry (Organic / Analytical)",
        summary:
          "The Sandip University Graduate M.Sc. Organic / Analytical Chemistry Program focuses on the study of various constituents of organic compounds, including their properties, structures, and reactions.",
        careers: ["Biomedical Chemist", "Lab Chemist", "Forensic Chemist", "Chemical Associate"],
      },
      {
        key: "Mathematics",
        summary:
          "The Department of Mathematics was established at the Sandip School of Science in 2016 with the aim of training individuals towards research and teaching in advanced fields of mathematics.",
        careers: ["Mathematician", "Data Scientist", "Statistician", "Investment Analyst"],
      },
      {
        key: "Microbiology",
        summary:
          "Sandip University offers a two-year full-time Master's degree in Microbiology divided into four semesters. Each semester lasts six months, followed by semester tests.",
        careers: ["Clinical Microbiologist", "Lab Technician / Lab Manager", "Infection Control Officer", "Diagnostic Labs (Pathology, Hospitals)"],
      },
      {
        key: "Forensic Science",
        summary:
          "Sandip University has diverse faculties in different areas of science to guide students and direct projects through the complexities of this important field. Sandip University is one of the best universities in Maharashtra.",
        careers: ["Analytical Chemist", "Biomedical Scientist", "Crime Scene Investigator", "Detective"],
      },
    ],
  },
];

/* ----------------------------- theme ----------------------------- */

const C = {
  blue950: "#172554",
  blue900: "#1e3a8a",
  blue800: "#1e40af",
  blue700: "#1d4ed8",
  blue200: "#bfdbfe",
  blue100: "#dbeafe",
  orange700: "#c2410c",
  orange600: "#ea580c",
  orange500: "#f97316",
  orange400: "#fb923c",
  orange200: "#fed7aa",
  orange100: "#ffedd5",
  slate900: "#0f172a",
  slate700: "#334155",
  slate600: "#475569",
  slate500: "#64748b",
  slate400: "#94a3b8",
  slate300: "#cbd5e1",
  slate200: "#e2e8f0",
  slate50: "#f8fafc",
  white: "#ffffff",
};

const FONT =
  "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

/* ----------------------------- helpers ----------------------------- */

function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

function useBp() {
  const w = useWidth();
  return { sm: w >= 640, md: w >= 768, lg: w >= 1024 };
}

const goToForm = () =>
  document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });

const NAV = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Recruiters", id: "recruiters" },
  { label: "Campus Life", id: "campus-life" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Contact Us", id: "enquire" },
];

const goTo = (id) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Container({ children, style }) {
  const { sm } = useBp();
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: 1152,
        margin: "0 auto",
        padding: sm ? "0 24px" : "0 16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, center = true, light = false }) {
  const { sm } = useBp();
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      {eyebrow && (
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: light ? C.orange400 : C.orange600,
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          margin: "8px 0 0",
          fontSize: sm ? 36 : 30,
          fontWeight: 700,
          lineHeight: 1.2,
          color: light ? C.white : C.slate900,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Btn({ href, onClick, style, hoverStyle, children, type }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : type || "button"}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        cursor: "pointer",
        textDecoration: "none",
        border: "none",
        fontFamily: "inherit",
        transition: "background-color .2s, transform .2s",
        ...style,
        ...(hover ? hoverStyle : {}),
      }}
    >
      {children}
    </Tag>
  );
}

function HoverCard({ style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "transform .2s, box-shadow .2s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 10px 25px rgba(15,23,42,.12)" : "0 1px 2px rgba(15,23,42,.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Field({ as = "input", style, ...props }) {
  const [focus, setFocus] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        padding: "11px 12px",
        fontSize: 14,
        fontFamily: "inherit",
        color: C.slate900,
        background: C.white,
        borderRadius: 8,
        outline: "none",
        border: `1px solid ${focus ? C.orange600 : C.slate300}`,
        boxShadow: focus ? `0 0 0 3px ${C.orange200}` : "none",
        ...style,
      }}
    />
  );
}

/* ----------------------------- lead form ----------------------------- */

function LeadForm() {
  const { sm } = useBp();
  const [data, setData] = useState({ name: "", phone: "", email: "", program: "", city: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST `data` to your CRM / backend
    // TODO: fire Google Ads conversion, e.g. gtag_report_conversion();
    console.log("Lead:", data);
    setSent(true);
  };

  const card = {
    boxSizing: "border-box",
    background: C.white,
    borderRadius: 16,
    padding: sm ? 32 : 24,
    boxShadow: "0 25px 50px rgba(0,0,0,.3)",
  };

  if (sent) {
    return (
      <div style={{ ...card, textAlign: "center", padding: 32 }}>
        <div
          style={{
            width: 56,
            height: 56,
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "#dcfce7",
            color: "#16a34a",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✓
        </div>
        <h3 style={{ margin: 0, fontSize: 20, color: C.slate900 }}>Thank you!</h3>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: C.slate600 }}>
          Our admission counsellor will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={card}>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>
        Apply / Get a Free Callback
      </h3>
      <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate500 }}>Takes less than a minute.</p>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <Field name="name" placeholder="Full name" required value={data.name} onChange={onChange} />
        <Field name="phone" type="tel" placeholder="Mobile number" required pattern="[0-9+\- ]{10,15}" value={data.phone} onChange={onChange} />
        <Field name="email" type="email" placeholder="Email address" required value={data.email} onChange={onChange} />
        <Field name="city" placeholder="City" value={data.city} onChange={onChange} />
        <Field as="select" name="program" required value={data.program} onChange={onChange}>
          <option value="">Select programme</option>
          {CONTENT.programs.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name}
            </option>
          ))}
        </Field>
      </div>
      <Btn
        type="submit"
        style={{
          width: "100%",
          marginTop: 20,
          padding: "14px 16px",
          borderRadius: 8,
          background: "rgb(216 10 18)",
          color: C.white,
          fontSize: 16,
          fontWeight: 600,
        }}
        hoverStyle={{ background: C.orange700 }}
      >
        Submit Enquiry
      </Btn>
      <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 12, color: C.slate400 }}>
        By submitting, you agree to be contacted by Sandip University.
      </p>
    </form>
  );
}

/* ----------------------------- sections ----------------------------- */

function Header() {
  const { sm, lg } = useBp();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${C.slate200}`,
      }}
    >
      <Container style={{ display: "flex", height: 64, alignItems: "center", justifyContent: "space-between", gap: 16, maxWidth: 1180 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <img
            src={universityLogo}
            alt={CONTENT.brand}
            style={{ height: 56, width: "auto", objectFit: "contain", display: "block" }}
          />
        </div>

        {lg && (
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV.map((n) => (
              <Btn
                key={n.id}
                onClick={() => go(n.id)}
                style={{ padding: "8px 10px", background: "none", color: C.slate700, fontSize: 14, fontWeight: 600, borderRadius: 6 }}
                hoverStyle={{ color: C.orange600 }}
              >
                {n.label}
              </Btn>
            ))}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          {sm && (
            <Btn
              onClick={goToForm}
              style={{ padding: "8px 20px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
              hoverStyle={{ background: "#000" }}
            >
              Apply Now
            </Btn>
          )}
          {!lg && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ background: "none", border: `1px solid ${C.slate300}`, borderRadius: 8, width: 40, height: 40, fontSize: 20, cursor: "pointer", color: C.slate700 }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </Container>

      {!lg && menuOpen && (
        <nav style={{ background: C.white, borderTop: `1px solid ${C.slate200}`, padding: "8px 16px 16px", display: "flex", flexDirection: "column" }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              style={{ textAlign: "left", padding: "12px 4px", background: "none", border: "none", borderBottom: `1px solid ${C.slate200}`, fontFamily: "inherit", fontSize: 15, fontWeight: 600, color: C.slate700, cursor: "pointer" }}
            >
              {n.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { sm, lg } = useBp();
  return (
    <section id="home" style={{ position: "relative", overflow: "hidden", background: "rgb(23 37 84 / 41%);" }}>
      <img
        src={IMG.hero}
        alt="Students working in the science laboratory"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgb(23 37 84 / 70%), rgb(23 37 84 / 51%), transparent)",
        }}
      />
      <Container
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: lg ? "1fr 1fr" : "1fr",
          alignItems: "center",
          gap: 40,
          paddingTop: lg ? 80 : 56,
          paddingBottom: lg ? 80 : 56,
        }}
      >
        <div style={{ color: C.white }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: 999,
              background: "rgb(216 10 18)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {CONTENT.heroTag}
          </span>
          <h1 style={{ margin: "20px 0 0", fontSize: sm ? 48 : 36, fontWeight: 700, lineHeight: 1.15 }}>
            {CONTENT.heroTitle}
          </h1>
          <h5 style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 18, lineHeight: 1.6, color: "#fff" }}>
            {CONTENT.heroSub}
          </h5>
          <p style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 15, lineHeight: 1.6, color: C.blue100 }}>
            {CONTENT.para}
          </p>
          {/* <div
            style={{
              marginTop: 24,
              maxWidth: 576,
              padding: "16px 20px",
              borderRadius: 12,
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.25)",
              borderLeft: "4px solid rgb(216 10 18)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div style={{ fontSize: sm ? 20 : 17, fontWeight: 600, lineHeight: 1.3, marginBottom: 5 }}>
              {CONTENT.datNotice.titlee}
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3 }}>
              {CONTENT.datNotice.title}
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                flexDirection: sm ? "row" : "column",
                alignItems: sm ? "center" : "flex-start",
                gap: sm ? 20 : 10,
              }}
            >
              <div>
                <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "red", fontWeight: 700, marginBottom: 4 }}>
                  {CONTENT.datNotice.lastDateLabel}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{CONTENT.datNotice.lastDate}</div>
              </div>

              <div
                aria-hidden="true"
                style={{
                  width: sm ? 1 : "100%",
                  height: sm ? 36 : 1,
                  background: "rgba(255,255,255,.35)",
                }}
              />

              <div>
                <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "red", fontWeight: 700, marginBottom: 4 }}>
                  {CONTENT.datNotice.examLabel}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{CONTENT.datNotice.examDate}</div>
              </div>
            </div>
          </div> */}
          <ul
            style={{
              listStyle: "none",
              margin: "24px 0 0",
              padding: 0,
              display: "grid",
              gridTemplateColumns: sm ? "1fr 1fr" : "1fr",
              gap: 8,
            }}
          >
            {CONTENT.heroPoints.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgb(216 10 18)",
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div id="enquire" style={{ scrollMarginTop: 96 }}>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  const { md } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)" }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
          gap: 24,
          padding: "32px 24px",
          textAlign: "center",
          color: C.white,
        }}
      >
        {CONTENT.stats.map((s) => (
          <div key={s.label}>
            <p style={{ margin: 0, fontSize: 30, fontWeight: 800 }}>{s.value}</p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: C.orange100 }}>{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function About() {
  const { sm, lg } = useBp();
  return (
    <section id="about" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container style={{ display: "grid", gridTemplateColumns: lg ? "1fr 1fr" : "1fr", alignItems: "center", gap: 40 }}>
        <div>
          <SectionTitle eyebrow="Who we are" title={CONTENT.aboutTitle} center={false} />
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16, color: C.slate600, lineHeight: 1.7 }}>
            {CONTENT.aboutText.map((t) => (
              <p key={t} style={{ margin: 0 }}>{t}</p>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Talk to a Counsellor
          </Btn>
        </div>
        <img
          src={IMG.campus}
          alt="Sandip University campus"
          loading="lazy"
          style={{
            width: "100%",
            height: lg ? 380 : 240,
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 20px 40px rgba(15,23,42,.2)",
          }}
        />
      </Container>
    </section>
  );
}

/* ----------------------------- programmes ----------------------------- */

function DegreePanel({ degree }) {
  const { sm, md } = useBp();
  const [tab, setTab] = useState(0);
  const spec = degree.specializations[tab];

  return (
    <div
      style={{
        boxSizing: "border-box",
        background: C.white,
        border: `1px solid ${C.slate200}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(15,23,42,.08)",
      }}
    >
      <div style={{ background: "rgb(216 10 18)", color: C.white, padding: sm ? "28px 32px" : "24px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "#000", fontSize: 12, fontWeight: 600 }}>
            {degree.duration}
          </span>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,.15)", fontSize: 12, fontWeight: 600 }}>
            {degree.mode}
          </span>
        </div>
        <h3 style={{ margin: "12px 0 0", fontSize: sm ? 30 : 24, fontWeight: 800 }}>{degree.title}</h3>
        <p style={{ margin: "16px 0 8px", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
          Choose Specialization
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {degree.specializations.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setTab(i)}
              aria-pressed={tab === i}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${tab === i ? C.orange600 : "rgba(255,255,255,.4)"}`,
                background: tab === i ? "#000" : "transparent",
                color: C.white,
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color .2s, border-color .2s",
              }}
            >
              {s.key}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: md ? "1.2fr 1fr" : "1fr",
          gap: md ? 40 : 28,
          padding: sm ? "32px" : "24px 20px",
        }}
      >
        <div>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{spec.key} — Summary</h4>
          <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.7, color: C.slate600 }}>{spec.summary}</p>

          <h4 style={{ margin: "28px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>Eligibility</h4>
          <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {(spec.eligibility ?? degree.eligibility).map((e) => (
              <li key={e} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, color: C.slate700 }}>
                <span style={{ color: C.orange600, fontWeight: 700 }}>✓</span>
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ boxSizing: "border-box", background: C.slate50, border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24, alignSelf: "start" }}>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>Career Opportunities</h4>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {spec.careers.map((c) => (
              <span
                key={c}
                style={{ padding: "8px 14px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
              >
                {c}
              </span>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Enquire for {spec.key} →
          </Btn>
        </div>
      </div>
    </div>
  );
}

const TABS = [

  {
    id: "bsc",
    label: "B.Sc",
    title: "Bachelor of Science",
    hash: "#bsc-courses",
    desc: "Undergraduate science programmes in microbiology, forensics, physics, data science, chemistry and more.",
  },
  {
    id: "msc",
    label: "M.Sc",
    title: "Master of Science",
    hash: "#msc-courses",
    desc: "Advanced postgraduate programmes in life science, physics, chemistry, mathematics, microbiology and forensics.",
  },
];

function Programs() {
  const { sm, md } = useBp();
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const degree = DEGREES.find((d) => d.id === tab.id);
  const others = CONTENT.programs.filter((p) => !DEGREES.some((d) => d.title === p.name));

  // Keep old nav links (#bsc-courses, #msc-courses) working: they switch the tab
  useEffect(() => {
    const syncFromHash = () => {
      const i = TABS.findIndex((t) => t.hash === window.location.hash);
      if (i !== -1) setActive(i);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id="courses" style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      {/* anchors so existing links to these ids still scroll here */}
      <span id="bsc-courses" style={{ display: "block", scrollMarginTop: 64 }} />
      <span id="msc-courses" style={{ display: "block", scrollMarginTop: 64 }} />

      <Container>
        <SectionTitle eyebrow="Programmes" title={tab.title} />
        {tab.desc && (
          <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
            {tab.desc}
          </p>
        )}

        {/* Filter tabs: flat, one row, underline on active */}
        <div
          role="tablist"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            marginTop: 40,
            marginBottom: 24,
            borderBottom: `2px solid ${C.slate200}`,
          }}
        >
          {TABS.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  padding: sm ? "16px 12px" : "12px 6px",
                  background: "transparent",
                  border: "none",
                  borderBottom: `3px solid ${isActive ? C.orange600 : "transparent"}`,
                  marginBottom: -2,
                  color: isActive ? "rgb(216 10 18)" : C.slate600,
                  fontFamily: "inherit",
                  fontSize: sm ? 17 : 15,
                  fontWeight: isActive ? 800 : 600,
                  cursor: "pointer",
                  transition: "color .2s, border-color .2s",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* key resets the specialization tab when the degree changes */}
        <DegreePanel key={degree.id} degree={degree} />

        {/* extra programmes only under B.Des, as before */}
        {tab.id === "bdes" && others.length > 0 && (
          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: md ? `repeat(${others.length}, 1fr)` : "1fr",
              gap: 24,
            }}
          >
            {others.map((p) => (
              <HoverCard
                key={p.name}
                style={{ boxSizing: "border-box", background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}
              >
                <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 999, background: C.orange100, color: C.orange700, fontSize: 12, fontWeight: 600 }}>
                  {p.duration}
                </span>
                <h3 style={{ margin: "16px 0 0", fontSize: 24, fontWeight: 700, color: C.slate900 }}>{p.name}</h3>
                <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{p.blurb}</p>
                <Btn
                  onClick={goToForm}
                  style={{ marginTop: 20, padding: 0, background: "none", color: C.orange600, fontSize: 14, fontWeight: 600 }}
                  hoverStyle={{ color: C.orange700 }}
                >
                  Enquire now →
                </Btn>
              </HoverCard>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function Highlights() {
  const { sm, lg } = useBp();
  return (
    <section id="why-us" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container>
        <SectionTitle eyebrow="Why choose us" title="What Makes Our School Different" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(3, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.highlights.map((h, i) => (
            <div key={h.title} style={{ boxSizing: "border-box", border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{h.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{h.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- campus life ----------------------------- */

function CarouselArrow({ dir, onClick, top }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        top,
        [dir]: 4,
        transform: "translateY(-50%)",
        zIndex: 2,
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
        lineHeight: 1,
        color: hover ? C.white : C.slate900,
        background: hover ? C.orange600 : "rgba(255,255,255,.92)",
        boxShadow: "0 4px 12px rgba(15,23,42,.25)",
        transition: "background-color .2s, color .2s",
      }}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}

function CampusCard({ item, imgH }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxSizing: "border-box",
        height: "100%",
        overflow: "hidden",
        background: C.white,
        borderRadius: 20,
        boxShadow: hover ? "0 14px 30px rgba(15,23,42,.18)" : "0 4px 14px rgba(15,23,42,.10)",
        transition: "box-shadow .3s",
      }}
    >
      <div style={{ overflow: "hidden", height: imgH, background: `linear-gradient(135deg, ${C.blue900}, ${C.orange600})` }}>
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .5s",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>{item.title}</h3>
        <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, color: C.slate600 }}>{item.text}</p>
      </div>
    </div>
  );
}

function CampusLife() {
  const { sm, md } = useBp();
  const perView = md ? 2 : 1;
  const pages = Math.ceil(CAMPUS.length / perView);
  const imgH = md ? 300 : sm ? 260 : 210;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const page = Math.min(index, pages - 1);

  const next = () => setIndex((page + 1) % pages);
  const prev = () => setIndex((page - 1 + pages) % pages);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (Math.min(i, pages - 1) + 1) % pages), 5000);
    return () => clearInterval(t);
  }, [paused, pages]);

  return (
    <section
      id="campus-life"
      style={{
        padding: sm ? "80px 0" : "64px 0",
        scrollMarginTop: 64,
        background: `linear-gradient(to bottom, ${C.orange100}, ${C.white} 35%, ${C.slate50})`,
      }}
    >
      <Container>
        <SectionTitle eyebrow="Life at Sandip" title="Campus Life" />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
          Learning, creativity, fitness and community — everything you need for a complete university experience.
        </p>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: "relative", marginTop: 40 }}
        >
          <CarouselArrow dir="left" onClick={prev} top={imgH / 2 + 8} />
          <CarouselArrow dir="right" onClick={next} top={imgH / 2 + 8} />

          <div style={{ overflow: "hidden", margin: "0 -12px", padding: "8px 0 24px" }}>
            <div
              style={{
                display: "flex",
                transform: `translateX(-${page * 100}%)`,
                transition: "transform .6s ease",
              }}
            >
              {CAMPUS.map((item) => (
                <div
                  key={item.title}
                  style={{ boxSizing: "border-box", flex: `0 0 ${100 / perView}%`, padding: "0 12px" }}
                >
                  <CampusCard item={item} imgH={imgH} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === page ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === page ? C.orange600 : C.slate300,
                transition: "width .3s, background-color .3s",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const { sm, lg } = useBp();
  const items = [
    { src: IMG.mscMaths, alt: "Students examining circuit experiment boards in the lab", title: "Hands-on Experiments", text: "Students learn by building and testing circuits and experiments." },
    { src: IMG.mscPhysics, alt: "Students operating measuring instruments in the physics lab", title: "Instrumentation Lab", text: "Practical sessions with precision measuring instruments." },
    { src: IMG.phdPhysics, alt: "Researchers working with lab equipment at a workbench", title: "Advanced Research Lab", text: "Well-equipped benches for experiments and research projects." },
    { src: IMG.phdZoology, alt: "Students working in the computer lab", title: "Computer & Data Lab", text: "Modern computing facilities for data analysis and simulation." },
  ];
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Inside our labs" title="Learning in Action" />
        <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: lg ? "repeat(4, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr", gap: 24 }}>
          {items.map((it) => (
            <article
              key={it.title}
              style={{ overflow: "hidden", background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 16, boxShadow: "0 1px 2px rgba(15,23,42,.06)" }}
            >
              <img src={it.src} alt={it.alt} loading="lazy" style={{ display: "block", width: "100%", height: 288, objectFit: "cover" }} />
              <div style={{ padding: 20 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{it.title}</h3>
                <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  const { sm } = useBp();
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Careers" title="Where a Design Degree Can Take You" />
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {CONTENT.careers.map((c) => (
            <span
              key={c}
              style={{ padding: "8px 20px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const { sm, lg } = useBp();
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Admission process" title="4 Simple Steps to Get Started" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(4, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.steps.map((s, i) => (
            <div key={s.title} style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{s.title}</h3>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate600 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Recruiters() {
  const { sm, md } = useBp();
  return (
    <section
      id="recruiters"
      style={{ background: C.blue950, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}
    >
      <Container>
        <SectionTitle eyebrow="Placements" title="Our Recruiters" light />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.blue200, lineHeight: 1.6 }}>
          Leading fashion, lifestyle, beauty and design brands hire and mentor our students.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
            gap: sm ? 20 : 12,
          }}
        >
          {RECRUITERS.map((r) => (
            <HoverCard
              key={r.name}
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: sm ? 140 : 110,
                padding: 16,
                background: C.white,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <img
                src={r.src}
                alt={r.name}
                loading="lazy"
                style={{ display: "block", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </HoverCard>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Start Your Journey
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const { sm } = useBp();
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container style={{ maxWidth: 768 }}>
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          {CONTENT.faqs.map((f, i) => (
            <div key={f.q} style={{ background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 12 }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.slate900,
                }}
              >
                {f.q}
                <span style={{ marginLeft: 16, fontSize: 20, color: C.orange600 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p style={{ margin: 0, padding: "0 20px 16px", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  const { sm } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)", padding: "64px 0", textAlign: "center", color: C.white }}>
      <Container>
        <h2 style={{ margin: 0, fontSize: sm ? 36 : 30, fontWeight: 700 }}>Ready to Start Your Science Journey?</h2>
        <p style={{ margin: "12px auto 0", maxWidth: 576, color: C.blue100 }}>
          Limited seats. Talk to our admission team today.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: sm ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: "#000", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Apply Now
          </Btn>
          <Btn
            href={CONTENT.phoneHref}
            style={{ padding: "12px 32px", borderRadius: 999, border: "1px solid rgba(255,255,255,.7)", background: "transparent", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: "rgba(255,255,255,.1)" }}
          >
            📞 Call {CONTENT.phone}
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const { md } = useBp();
  return (
    <footer style={{ padding: md ? "15px 0" : "32px 0 96px", textAlign: "center", fontSize: 14, color: C.slate700 }}>
      <Container>
        <img
          src={universityLogo}
          alt={CONTENT.brand}
          style={{ height: 48, width: "auto", objectFit: "contain", display: "block", margin: "0 auto" }}
        />
        <p style={{ margin: "12px 0 0" }}>{CONTENT.footerAddress}</p>
        <p style={{ margin: "12px 0 0", fontSize: 12 }}>
          © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function StickyMobileBar() {
  const { md } = useBp();
  if (md) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        background: C.white,
        borderTop: `1px solid ${C.slate200}`,
      }}
    >
      <a
        href={CONTENT.phoneHref}
        style={{ flex: 1, padding: "12px 0", textAlign: "center", fontSize: 14, fontWeight: 600, color: C.blue900, textDecoration: "none" }}
      >
        📞 Call Now
      </a>
      <button
        onClick={goToForm}
        style={{ flex: 1, padding: "12px 0", border: "none", background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}
      >
        Apply Now
      </button>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function SchoolOfDesignLanding() {
  return (
    <div style={{ fontFamily: FONT, color: C.slate700, WebkitFontSmoothing: "antialiased" }}>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Careers />
      <Highlights />
      <CampusLife />
      <Showcase />
      <Process />
      <Recruiters />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}