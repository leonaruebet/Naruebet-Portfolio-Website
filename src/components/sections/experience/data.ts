import { IconType } from 'react-icons'
import { 
  FaChartLine,
  FaBriefcase,
  FaRocket,
  FaLightbulb,
  FaLeaf
} from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

export interface Experience {
  id: string
  role: string
  company: string
  companyDesc: string
  duration: string
  icon: IconType
  color: string
  logo: string
  achievements: string[]
  technologies?: string[]
}

export const experienceData: Experience[] = [
  {
    id: 'ireadcustomer',
    role: 'Founder',
    company: 'iReadCustomer',
    companyDesc: 'Agentic Data Analytics',
    duration: '07/2024 - Present',
    icon: SiNextdotjs,
    color: '#000000',
    logo: '/ireadcustomer.webp',
    achievements: [
      'Founded **iReadCustomer**, an **AI-driven platform** leveraging **Culture 3.0** frameworks for advanced **customer behavior analytics**.',
      'Trained **multi-agent AI systems**, automating key pipeline processes like **data collection**, **analysis**, and **reporting**.',
      'Designed and developed the **platform architecture**, integrating **full-stack technologies** (**Next.js**, **MongoDB**, **Tailwind CSS**) with secure **Google Authentication**.',
      'Created **scalable data architectures** and models, enabling robust **analytics pipelines** and actionable **business insights**.',
      'Applied **system thinking methodologies**, crafting a cohesive and adaptive **platform ecosystem**.',
      'Developed comprehensive **marketing strategies** and compelling **pitch decks**, successfully securing **1.5 million THB funding** from **TEDFund**.'
    ],
    technologies: ['AI/ML', 'Next.js', 'MongoDB', 'Tailwind CSS', 'Google Auth', 'System Design']
  },
  {
    id: 'station',
    role: 'Co-Founder & COO',
    company: 'The Station Group Holding',
    companyDesc: 'Technology Solution',
    duration: '05/2024 – Present',
    icon: FaRocket,
    color: '#73D25D',
    logo: '/station.png',
    achievements: [
      '**Automated 60%** of routine inquiries, **tripling** response times with AI chatbot',
      'Increased customer retention by **25%** through data-driven ad targeting',
      'Reduced content ideation time by **80%** using AI tools for automated updates',
      'Launched the "**Next Gen Entrepreneur Station x BOTNOI CEO Padawan Program**" to train future CEOs'
    ],
    technologies: ['Operations', 'Leadership', 'Strategy', 'Growth Management']
  },
  {
    id: 'baksters',
    role: 'Finance Team Lead & Business Development',
    company: 'Baksters',
    companyDesc: 'AI Solution',
    duration: '09/2023 – Present',
    icon: FaBriefcase,
    color: '#CFE301',
    logo: '/baksters.png',
    achievements: [
      'Led valuation process, securing **30M funding** for 4 AI products, significantly boosting investor confidence',
      'Drove **150% growth** in engagement with market research and refined strategies',
      'Enhanced efficiency by **30%** through AI integration and data-driven insights',
      'Fostered **long-term partnerships** with innovative solutions'
    ],
    technologies: ['Financial Planning', 'Business Development', 'Team Leadership', 'Strategic Planning']
  },
  {
    id: 'starters',
    role: 'Co-Founder & COO',
    company: 'Starters Official',
    companyDesc: 'Technology Solution',
    duration: '11/2022 – 03/2024',
    icon: FaLightbulb,
    color: '#00A4EF',
    logo: '/starters.png',
    achievements: [
      'Leading company operations and strategy',
      'Developing and scaling business initiatives',
      'Managing team growth and development',
      'Implementing operational excellence'
    ],
    technologies: ['Operations', 'Strategy', 'Leadership', 'Business Development']
  },
  {
    id: 'durian',
    role: 'Data Scientist',
    company: 'Durian Corporation',
    companyDesc: 'Data Consulting',
    duration: '06/2024 – 10/2024',
    icon: FaLeaf,
    color: '#FFD700',
    logo: '/durian.png',
    achievements: [
      'Built **interactive data visualizations** for product development and campaigns',
      'Extracted insights from **unstructured data** for SEA market analysis',
      'Created an **AI system** for TikTok, optimizing video content performance'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Statistical Modeling']
  },
  {
    id: 'syntax',
    role: 'Business Analyst',
    company: 'Syntax',
    companyDesc: 'Industrial Services',
    duration: '12/2023 – 02/2024',
    icon: FaChartLine,
    color: '#4285F4',
    logo: '/syntax.png',
    achievements: [
      'Digitized backend systems to improve customer insights with **analytics**',
      'Built a no-code AI chatbot, increasing response efficiency by **30%**',
      'Led rebranding efforts, boosting market penetration by **40%**',
      'Designed strategies to drive community engagement and **15% revenue growth**'
    ],
    technologies: ['Data Analysis', 'Business Intelligence', 'Analytics Tools', 'Reporting']
  }
] 