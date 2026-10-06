import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
// Add other SVG icons when available

export const DATA = {
  name: "Harsh Kale",
  initials: "HK",

  url: "https://github.com/Harshk133",

  location: "Latur, Maharashtra, India",

  locationLink:
    "https://www.google.com/maps/search/?api=1&query=Latur%2C%20Maharashtra%2C%20India",

  description:
    "Computer Science Engineering student building AI-powered software, full-stack applications, and developer tools.",

  summary:
    "I'm a Computer Science Engineering student passionate about Artificial Intelligence, Full-Stack Development, and developer tools. I enjoy turning real-world problems into practical software using LLMs, RAG, FastAPI, Next.js, and modern AI APIs. I've contributed to open-source projects, built AI-powered applications, participated in hackathons, and regularly experiment with new ideas across software engineering and AI.",

  avatarUrl: "/meeee.png",

  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },

    // Add these when you have matching SVG components:
    // { name: "FastAPI", icon: FastAPI },
    // { name: "MongoDB", icon: MongoDB },
    // { name: "GitHub", icon: Github },
    // { name: "Tailwind CSS", icon: Tailwind },
  ],

  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
    },
    {
      href: "/blog",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],

  contact: {
    email: "harshmkale.2004@gmail.com",
    tel: "+91-9421616978",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Harshk133",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harsh-kale",
        icon: Icons.linkedin,
        navbar: true,
      },

      Youtube: {
        name: "YouTube",
        url: "https://www.youtube.com/@ProgrammingNCodingWithHarsh",
        icon: Icons.youtube,
        navbar: true,
      },

      X: {
        name: "X",
        url: "https://x.com/HelloWorldHarsh",
        icon: Icons.x,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:harshmkale.2004@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Google Agent Development Kit (ADK)",
      href: "https://github.com/google/adk-python",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/google.png",
      start: "March 2026",
      end: "Present",
      description:
        "Engineered custom messaging connectors for Google ADK to support real-time user interaction through messaging interfaces. Improved developer documentation and setup configurations across public repository modules. Collaborated through structured GitHub pull requests with a focus on reliability, execution, and edge cases.",
    },

    {
      company: "Google Developer Groups On Campus",
      href: "https://developers.google.com/community/gdg",
      badges: [],
      location: "Latur, India",
      title: "Co-Tech Lead",
      logoUrl: "/gdg.jfif",
      start: "October 2025",
      end: "Present",
      description:
        "Organize AI and Full-Stack development workshops for students and mentor junior developer teams in hackathon preparation, API integration, and modular software design. Help students get started with open source, modern development tools, and practical software projects.",
    },
  ],

  education: [
    {
      school: "M.S. Bidve Engineering College",
      href: "#",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/msbidve.jfif",
      start: "July 2024",
      end: "July 2027",
      description: "CGPA: 8.15",
    },

    {
      school: "V.A.P.M., Almala",
      href: "#",
      degree: "Diploma in Computer Engineering / IT",
      logoUrl: "/vapm.jfif",
      start: "2021",
      end: "2024",
      description: "Percentage: 93.09%",
    },

    {
      school: "Shri Marwadi Rajasthan Vidyalaya",
      href: "#",
      degree: "Secondary School Certificate",
      logoUrl: "/school.jfif",
      start: "2021",
      end: "2021",
      description: "Percentage: 91.80%",
    },
  ],

  projects: [
    {
      title: "Code To Podcast",
      href: "#",
      dates: "2026",
      active: true,

      description:
        "An AI-powered VS Code extension that turns source code into conversational audio content. It extracts relevant code context, generates dynamic podcast-style scripts using Gemini, and synthesizes developer-friendly audio summaries directly inside VS Code.",

      technologies: [
        "JavaScript",
        "Python",
        "React",
        "FastAPI",
        "Docker",
        "Gemini API",
        "ChromaDB",
        "RAG",
        "VS Code Extension",
      ],

      links: [
        {
          type: "Marketplace",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Harshk133",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/vscode_ctp.jpg",
      video: "",
    },

    {
      title: "SwasthyaAI",
      href: "#",
      dates: "2024",
      active: true,

      description:
        "A multilingual AI healthcare assistant designed to provide preliminary health information and localized medical education. Built with a React frontend and FastAPI backend using Gemini and Retrieval-Augmented Generation for contextual responses.",

      technologies: [
        "React",
        "Python",
        "FastAPI",
        "Gemini AI",
        "RAG",
        "AI",
      ],

      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "",
      video: "",
    },

    {
      title: "Google ADK WhatsApp Connector",
      href: "#",
      dates: "2026",
      active: true,

      description:
        "An open-source WhatsApp integration bridge for Google Agent Development Kit that routes real-time user messages to autonomous AI agents using event-driven webhook handlers, session state management, message serialization, and automated response callbacks.",

      technologies: [
        "Python",
        "Google ADK",
        "Webhooks",
        "Git",
        "AI Agents",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Harshk133",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/google.png",
      video: "",
    },

    {
      title: "Cutly",
      href: "#",
      dates: "2026",
      active: true,

      description:
        "A browser-based AI-focused video editor built for modern creators. Features include media importing, transforms, masking, blending modes, captions, and browser-based video export powered by FFmpeg WebAssembly.",

      technologies: [
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "FFmpeg WASM",
        "React",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Harshk133",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "",
      video: "",
    },

    {
      title: "RAG Chat2PDF",
      href: "#",
      dates: "2026",
      active: true,

      description:
        "A document question-answering application that combines PDF ingestion, vector search, retrieval-augmented generation, and LLMs to let users interact with their documents conversationally.",

      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Clerk",
        "Qdrant",
        "OpenRouter",
        "RAG",
        "LLMs",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Harshk133",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "http://187.124.99.31:3100/",
          icon: <Icons.globe className="size-3" />,
        },
      ],

      image: "/chat2pdf.jpg",
      video: "",
    },

    {
      title: "Browser Agent Lab",
      href: "#",
      dates: "2026",
      active: true,

      description:
        "An experimental environment for building, testing, and observing AI browser agents. Uses browser automation, remote browser sessions, VNC-based visualization, and agent tooling to explore practical autonomous browser workflows.",

      technologies: [
        "Next.js",
        "Camofox",
        "Browser Automation",
        "VNC",
        "AI Agents",
        "Docker",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Harshk133",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/camofox.jpg",
      video: "",
    },

    {
      title: "Chrome Dino AI Agent",
      href: "#",
      dates: "2026",
      active: false,

      description:
        "An experiment exploring whether small local language models can make real-time game decisions. Captures the game screen, detects obstacles using computer vision, and evaluates actions through locally running models such as Tev1 and Ollama.",

      technologies: [
        "Python",
        "OpenCV",
        "PyAutoGUI",
        "Ollama",
        "Local LLMs",
        "Computer Vision",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Harshk133",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/dino.jpg",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "State Level Project Competition",
      dates: "2023",
      location: "Latur, Maharashtra",
      description:
        "Won 1st Prize at the IEI-sponsored State Level Project Competition for Diploma Engineering Students.",

      image: "",
      win: "1st Prize Winner",
      links: [],
    },

    {
      title: "Techathon 2K24",
      dates: "February 2024",
      location: "India",
      description:
        "Participated in a 24-hour national-level techathon with Team VAPM's 4TechQies.",

      image: "",
      links: [],
    },

    {
      title: "DIPEX 2026",
      dates: "February 2026",
      location: "Nanded, Maharashtra",
      description:
        "Participated in the Deogiri Region Idea Presentation Round under the Agricultural Technology theme.",

      image: "",
      links: [],
    },

    {
      title: "HackSpectra 2025",
      dates: "2025",
      location: "Nanded, Maharashtra",
      description:
        "Participated in a 24-hour hackathon focused on rapid software development and problem solving.",

      image: "",
      links: [],
    },

    {
      title: "AGTechathon 2.0",
      dates: "2024",
      location: "India",
      description:
        "Presented SwasthyaAI, a multilingual AI healthcare assistant, as part of a national-level technology competition.",

      image: "",
      links: [],
    },
  ],
} as const;
