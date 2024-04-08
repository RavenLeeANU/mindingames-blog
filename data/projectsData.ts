interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Fantancy World Generator',
    description: `This is a project that enable writers use AI tools to manage their outlines.`,
    imgSrc: '/static/images/editor_banner.png',
    href: 'https://generator.project.mindingames.com/',
  },
  {
    title: 'Manga Master',
    description: `An Manga Generator which allows users to create their own comics or mangas with AI.`,
    imgSrc: '/static/images/manga.png',
    href: 'https://www.bilibili.com/video/BV1F84y1w7om/?spm_id_from=333.999.0.0',
  },
  {
    title: 'Living Soul',
    description: `An open source living studio that enable users create character 2D assets by AI, the user can driving the characters like virtual youtubers.`,
    imgSrc: '/static/images/living-soul.png',
    href: 'https://www.bilibili.com/video/BV1FX4y1r7it/?spm_id_from=333.999.0.0',
  },
  {
    title: 'AI Agent Town',
    description: `An Unreal Engine Game project that simulates the villager life style and behaviors using LLM. Generate a livable town life!`,
    imgSrc: '/static/images/agent-town.png',
    href: 'https://www.bilibili.com/video/BV1Nw411j7uT/?spm_id_from=333.999.0.0',
  },
  {
    title: 'AI Tanmaku Interactive Story Generator',
    description: `A rule based Love Story Generator, which allows users input Tanmaku and change love process of characters and story ending.`,
    imgSrc: '/static/images/love-story.png',
    href: 'https://www.bilibili.com/video/BV1h2421c74Q/?spm_id_from=333.999.0.0',
  },
]

export default projectsData
