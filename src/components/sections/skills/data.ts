import { BsCodeSlash, BsGraphUp, BsBriefcase, BsPalette, BsLayers } from 'react-icons/bs'
import { FiFigma, FiLayout } from 'react-icons/fi'
import { MdDesignServices } from 'react-icons/md'
import { SkillCategory } from './types'

export const skillsData: SkillCategory[] = [
  {
    id: 'programming',
    title: 'tech',
    icon: BsCodeSlash,
    color: '#73D25D',
    subCategories: [
      {
        name: 'Web Development',
        icon: BsCodeSlash,
        details: [
          {
            name: 'Languages',
            tools: ['Python', 'HTML', 'CSS', 'SQL', 'Swift', 'Arduino'],
            description: 'Core programming languages',
            icon: BsCodeSlash
          },
          {
            name: 'Libraries',
            tools: ['NumPy', 'Pandas', 'Streamlit', 'Plotly', 'NetworkX', 'Matplotlib', 'Seaborn'],
            description: 'Development libraries and frameworks',
            icon: BsLayers
          }
        ]
      }
    ]
  },
  {
    id: 'data',
    title: 'analytics',
    icon: BsGraphUp,
    color: '#73D25D',
    subCategories: [
      {
        name: 'Analysis',
        icon: BsGraphUp,
        details: [
          {
            name: 'Processing',
            tools: ['ETL', 'Data Preparation', 'Data Cleaning', 'EDA'],
            description: 'Data processing and preparation techniques'
          },
          {
            name: 'Methods',
            tools: ['LDA', 'GSDMM', 'ANOVA', 'TF-IDF', 'Topic Modeling', 'Sentiment Analysis', 'Semantic Mapping'],
            description: 'Advanced analytical methodologies'
          },
          {
            name: 'Visualization',
            tools: ['Word Cloud', 'Semantic Networks', 'Network Graphs', 'Sankey Map', 'Heatmap'],
            description: 'Data visualization techniques'
          }
        ]
      },
      {
        name: 'Tools',
        icon: BsLayers,
        details: [
          {
            name: 'Platforms',
            tools: ['Tableau', 'Excel', 'Looker', 'Gephi'],
            description: 'Data analysis and visualization platforms'
          }
        ]
      }
    ]
  },
  {
    id: 'ai',
    title: 'ai',
    icon: BsLayers,
    color: '#73D25D',
    subCategories: [
      {
        name: 'AI Tools',
        icon: BsLayers,
        details: [
          {
            name: 'Language Models',
            tools: ['ChatGPT', 'Claude', 'Perplexity', 'Gemini'],
            description: 'Advanced AI language models'
          },
          {
            name: 'Creative AI',
            tools: ['Stable Diffusion', 'Suno', 'Cursor', 'Make.com'],
            description: 'AI-powered creative tools'
          }
        ]
      },
      {
        name: 'Collaboration',
        icon: BsBriefcase,
        details: [
          {
            name: 'Project Tools',
            tools: ['GitHub', 'Notion', 'Trello', 'Miro'],
            description: 'Project and task management tools'
          },
          {
            name: 'Workspace',
            tools: ['Word', 'Google Workspace', 'Notion'],
            description: 'Team collaboration platforms'
          }
        ]
      }
    ]
  },
  {
    id: 'business',
    title: 'business',
    icon: BsBriefcase,
    color: '#90EE90',
    subCategories: [
      {
        name: 'Finance',
        icon: BsGraphUp,
        details: [
          {
            name: 'Valuation',
            tools: ['DCF', 'NPV', 'IRR', 'ROI', 'CAC Calculation'],
            description: 'Financial modeling and valuation'
          },
          {
            name: 'Strategy',
            tools: ['Value-Based Pricing', 'Financial Projection', 'Business Model Canvas'],
            description: 'Strategic financial planning'
          }
        ]
      },
      {
        name: 'Development',
        icon: BsBriefcase,
        details: [
          {
            name: 'Frameworks',
            tools: ['Five Forces', 'Business Model Canvas', 'Value Proposition Canvas', '4Us', '3Ds'],
            description: 'Strategic business frameworks'
          },
          {
            name: 'Analysis',
            tools: ['SWOT', 'PESTEL', 'Customer Journey Mapping'],
            description: 'Business analysis methods'
          }
        ]
      },
      {
        name: 'Marketing',
        icon: BsGraphUp,
        details: [
          {
            name: 'Strategy',
            tools: ['RFM Analysis', 'Inbound/Outbound Marketing', 'Hook Model', '4Ps'],
            description: 'Marketing strategies and frameworks'
          }
        ]
      }
    ]
  },
  {
    id: 'design',
    title: 'creative',
    icon: BsPalette,
    color: '#98FB98',
    subCategories: [
      {
        name: 'Design Tools',
        icon: FiFigma,
        details: [
          {
            name: 'UI/UX',
            tools: ['Figma', 'Adobe XD', 'Framer', 'Spark Studio'],
            description: 'Interface design tools',
            icon: FiLayout
          },
          {
            name: 'Graphics',
            tools: ['Photoshop', 'Premier Pro'],
            description: 'Visual design and production tools',
            icon: BsPalette
          }
        ]
      },
      {
        name: 'Slide Development',
        icon: MdDesignServices,
        details: [
          {
            name: 'Presentation',
            tools: ['PowerPoint', 'Keynote', 'Google Slides', 'Figma'],
            description: 'Slide design and presentation tools'
          }
        ]
      },
      {
        name: 'Design Process',
        icon: MdDesignServices,
        details: [
          {
            name: 'Methodology',
            tools: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
            description: 'Design methodology and processes'
          }
        ]
      }
    ]
  }
] 