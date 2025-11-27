export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & Languages',
      skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'PHP'],
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        'PyTorch',
        'LLMs',
        'LangChain',
        'GenAI',
        'Prompt Engineering',
        'OpenAI APIs',
        'Vector Databases',
        'Pinecone',
      ],
    },
    {
      title: 'Data Engineering & Analytics',
      skills: [
        'ETL',
        'IBM DataStage',
        'Power BI',
        'Data Warehousing',
        'Data Visualization',
        'Data Analytics',
        'Alteryx',
        'Pandas',
        'NumPy',
        'Matplotlib',
      ],
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Docker', 'Kubernetes', 'REST API'],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Git/GitHub',
        'Jira',
        'SharePoint',
        'MySQL',
        'Selenium',
        'BeautifulSoup',
        'Web Scraping',
        'Microsoft Excel',
      ],
    },
  ]

  return (
    <section id="skills" className="relative section py-16 sm:py-24">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card p-5 hover:border-accent/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-medium mb-4 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="tag hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

