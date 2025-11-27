export type Project = {
  slug: string
  title: string
  shortDescription: string
  year: string
  tags: string[]
  type: string
  detailedDescription: string
  problem: string
  solution: string
  impact: string
  responsibilities: string[]
  links?: {
    github?: string
    demo?: string
  }
}

// Edit your projects here.
export const projects: Project[] = [
  {
    slug: 'ai-knowledge-to-book-engine',
    title: 'AI Knowledge-to-Book Engine',
    shortDescription:
      'Full-stack AI system that transforms diverse knowledge sources (YouTube, articles, PDFs) into structured, publish-ready books using hybrid retrieval and multi-step agent workflows.',
    year: '2025',
    tags: ['Python', 'FastAPI', 'LangChain / LangGraph', 'Vector DB', 'Neo4j', 'LLMs', 'RAG'],
    type: 'LLM',
    detailedDescription:
      "I'm building a full-stack AI system that allows users to upload diverse knowledge sources—YouTube videos, playlists, articles, PDFs, and web pages—and automatically transform them into a structured, publish-ready book. The platform unifies ingestion, semantic retrieval, knowledge-graph reasoning, and multi-step agent workflows into a single authoring engine.",
    problem:
      'Creating long-form content like books is slow, fragmented, and cognitively heavy. People gather information from scattered sources, manually summarize, outline, organize chapters, and iterate endlessly before reaching a coherent final manuscript.',
    solution:
      'I designed a hybrid AI architecture combining vector search, knowledge graphs, and agentic LLM workflows: Ingestion Pipeline converts YouTube transcripts, documents, and URLs into structured text, metadata, embeddings, and knowledge-graph entities. Hybrid Retrieval stores information in a vector database for semantic search and Neo4j for topic/relationship mapping. Book Generation Workflow uses LangGraph multi-step agents to collect requirements, build outlines, retrieve context, generate content, and maintain consistency. Persona & Style Engine adapts narrative to match user preferences.',
    impact:
      'This project aims to compress weeks of research and writing into a guided, automated workflow. Users will be able to generate complete book drafts with outlines, chapters, and citations; maintain factual grounding through vector search + graph reasoning; apply personalized writing styles across the manuscript; and turn any knowledge collection into publishable long-form content.',
    responsibilities: [
      'Architecting the ingestion system for YouTube, documents, and web data',
      'Designing hybrid retrieval using Qdrant/pgvector + Neo4j',
      'Building multi-step authoring agents with LangChain/LangGraph',
      'Implementing FastAPI backend for project, source, and workflow management',
      'Developing export workflows (Markdown, DOCX, PDF)',
      'Creating an interactive frontend for project creation, knowledge inspection, and book editing',
    ],
  },
  {
    slug: 'llm-pod-scale-up',
    title: 'LLM Data Pod Scale-Up',
    shortDescription:
      'Led a 9-engineer pod that delivered 70-80 curated trajectories per week for code, reasoning, and conversational LLMs.',
    year: '2023-2025',
    tags: ['Python', 'Prompt Engineering', 'LangChain', 'QA', 'Leadership'],
    type: 'LLM',
    detailedDescription:
      'I was promoted to Pod Lead inside Turing’s 600-person AI program where I owned throughput, quality, and stakeholder alignment for multiple LLM workstreams.',
    problem:
      'Client LLM initiatives were bottlenecked by inconsistent reviewer workflows, unclear quality bars, and slow iteration cycles.',
    solution:
      'Built SOPs, reviewer training, and validation gates; standardized task taxonomies; and implemented daily dashboards to keep throughput and quality on target.',
    impact:
      'Sustained 70-80 high-quality trajectories per week at 100% compliance, enabling measurable model lifts and earning “Rising Star”, “Top Trainer”, and “Top Lead” awards.',
    responsibilities: [
      'Directed a 9-person pod focused on code, reasoning, and conversational LLM data',
      'Instituted SOPs and automated validation workflows for every delivery',
      'Partnered with cross-functional leads to prioritize data gaps and unblock launches',
    ],
  },
  {
    slug: 'llm-eval-workbench',
    title: 'LLM Evaluation Workbench',
    shortDescription:
      'Designed rubric-based evaluation and benchmarking workflows that reduced scoring errors and aligned tightly with client KPIs.',
    year: '2024',
    tags: ['Python', 'Evaluation', 'Benchmarking', 'RLHF', 'Analytics'],
    type: 'Analytics',
    detailedDescription:
      'While supporting supervised fine-tuning and RLHF initiatives, I created a centralized evaluation playbook so reviewers could deliver defensible, repeatable model assessments.',
    problem:
      'Evaluation signals were noisy and hard to compare across tasks, which made it difficult to prove model improvements.',
    solution:
      'Defined rubric scorecards, created rationale templates, and mapped every task to benchmarking accuracy metrics and client objectives.',
    impact:
      'Reduced evaluation errors, improved reasoning quality, and gave product teams trustworthy data to ship milestones with confidence.',
    responsibilities: [
      'Mapped evaluation workflows to benchmarking targets and business goals',
      'Produced detailed rationales for every scored sample to eliminate ambiguity',
      'Aligned reviewers, PMs, and researchers on what “good” looked like for each release',
    ],
  },
  {
    slug: 'brighthouse-financial-data-migration',
    title: 'Brighthouse Financial Data Migration',
    shortDescription:
      'Extracted COBOL business logic from legacy systems, converted to Eultrics workflows and Python code, and verified correctness through input/output data file validation for Brighthouse Financial.',
    year: '2021-2023',
    tags: ['COBOL', 'Python', 'Eultrics', 'Data Migration', 'Legacy Systems', 'Data Validation'],
    type: 'Data Engineering',
    detailedDescription:
      'As a Junior Consultant at Systems Limited, I worked on a data migration project for Brighthouse Financial focused on extracting and modernizing legacy COBOL business logic. The project involved analyzing existing COBOL programs, understanding their business rules, and converting them into modern Eultrics workflows or Python code.',
    problem:
      'Brighthouse Financial had critical business logic embedded in legacy COBOL systems that needed to be migrated to modern platforms. The challenge was accurately extracting the complex business rules, converting them to maintainable code, and ensuring the migrated logic produced identical results to the original COBOL programs.',
    solution:
      'I extracted COBOL business logic by analyzing source code and documentation, then converted the logic into Eultrics workflows and Python code. To ensure accuracy, I implemented comprehensive verification processes that compared input and output data files between the original COBOL systems and the new implementations, validating that the logic was extracted correctly before handoff to the implementation team.',
    impact:
      'Successfully extracted and converted legacy COBOL logic with verified accuracy, enabling the downstream implementation team to build the new system with confidence. The verification process ensured zero discrepancies between legacy and modern implementations, reducing migration risks and ensuring business continuity.',
    responsibilities: [
      'Analyzed and extracted business logic from legacy COBOL programs',
      'Converted COBOL logic to Eultrics workflows and Python code',
      'Designed and executed verification processes comparing input/output data files',
      'Validated that extracted logic produced identical results to original COBOL systems',
      'Documented converted logic and verification results for implementation team handoff',
    ],
  },
  {
    slug: 'etisalat-data-virtualization-etl',
    title: 'Etisalat Data Virtualization & ETL Development',
    shortDescription:
      'Delivered data virtualization solutions, ETL development using IBM DataStage, and Power BI dashboard designs for Etisalat at Systems Limited.',
    year: '2021-2023',
    tags: ['IBM DataStage', 'Power BI', 'SQL', 'Python', 'Alteryx', 'Data Virtualization', 'ETL'],
    type: 'Data Engineering',
    detailedDescription:
      'As a Junior Consultant at Systems Limited, I worked on the Etisalat project focusing on data virtualization, ETL pipeline development, and business intelligence dashboard design. The project involved creating unified data views across multiple sources and building efficient data processing workflows.',
    problem:
      'Etisalat needed to integrate data from multiple disparate sources, improve data accessibility through virtualization, and create efficient ETL processes to support business intelligence needs. Legacy systems were slow, and reporting capabilities were limited.',
    solution:
      'Implemented data virtualization solutions to create unified views across multiple data sources. Developed high-performance ETL pipelines using IBM DataStage to improve data ingestion efficiency by 30%. Designed and built Power BI dashboards with optimized SQL queries, reducing reporting time by 40% and enabling faster data-driven decisions.',
    impact:
      'Improved data accessibility through virtualization, enabling stakeholders to access unified data views. Enhanced ETL efficiency by 30% and reduced reporting cycles by 40%. The Power BI dashboards provided real-time insights that accelerated decision-making across business units.',
    responsibilities: [
      'Designed and implemented data virtualization solutions for unified data access',
      'Developed ETL pipelines using IBM DataStage for efficient data processing',
      'Designed Power BI dashboards with optimized SQL queries and interactive visualizations',
      'Created automated validation workflows with Python/Alteryx for data quality assurance',
      'Collaborated with business stakeholders to understand requirements and deliver tailored solutions',
    ],
  },
  {
    slug: 'sleep-quality-analysis-lstm',
    title: 'Sleep Quality Analysis using Deep Learning',
    shortDescription:
      'Developed LSTM-based deep learning models to predict sleep quality stages with 98% accuracy using PyTorch.',
    year: '2021',
    tags: ['PyTorch', 'LSTM', 'Deep Learning', 'Time Series', 'Healthcare', 'Python'],
    type: 'Research',
    detailedDescription:
      'Research project focused on analyzing sleep patterns and predicting sleep quality stages using Long Short-Term Memory (LSTM) neural networks. The project involved processing time-series sleep data and training deep learning models to classify different sleep stages accurately.',
    problem:
      'Traditional sleep analysis methods are time-consuming and require manual interpretation. There was a need for automated, accurate classification of sleep quality stages to assist in sleep disorder diagnosis and treatment.',
    solution:
      'Implemented LSTM neural networks using PyTorch to capture temporal dependencies in sleep data. The model was trained on time-series features extracted from sleep monitoring data to predict different sleep quality stages, including wake, light sleep, deep sleep, and REM stages.',
    impact:
      'Achieved 98% accuracy in predicting sleep quality stages, demonstrating the effectiveness of LSTM models for time-series sleep data analysis. The model can assist healthcare professionals in automated sleep pattern analysis and early detection of sleep disorders.',
    responsibilities: [
      'Preprocessed and engineered features from time-series sleep monitoring data',
      'Designed and implemented LSTM architecture using PyTorch',
      'Trained and fine-tuned deep learning models for sleep stage classification',
      'Evaluated model performance and achieved 98% prediction accuracy',
      'Documented methodology and results for research publication',
    ],
  },
]
