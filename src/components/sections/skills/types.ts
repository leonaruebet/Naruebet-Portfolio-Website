import { IconType } from 'react-icons'

export interface SkillDetail {
  name: string
  tools: string[]
  description: string
  icon?: IconType
}

export interface SubCategory {
  name: string
  icon: IconType
  details: SkillDetail[]
}

export interface SkillCategory {
  id: string
  title: string
  icon: IconType
  color: string
  subCategories: SubCategory[]
} 