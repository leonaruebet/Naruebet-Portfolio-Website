export interface SkillDetail {
  name: string
  tools: string[]
  description: string
  icon?: any
}

export interface SkillCategory {
  id: string
  title: string
  icon: any
  color: string
  subCategories: {
    name: string
    icon: any
    details: SkillDetail[]
  }[]
} 