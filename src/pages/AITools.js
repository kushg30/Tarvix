import { useState, useMemo, useLayoutEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ai-tools.css';

const CATEGORIES = [
  {
    id: 'assistants',
    num: '01',
    title: 'AI Assistants & Research Copilots',
    subtitle: 'Browser & desktop',
    desc: 'General-purpose AI for writing, coding, research, and reasoning.',
    tools: [
      { name: 'ChatGPT', by: 'OpenAI', desc: 'General-purpose assistant for writing, coding, data analysis, and reasoning', url: 'https://chat.openai.com' },
      { name: 'Claude', by: 'Anthropic', desc: 'Long-document reasoning, writing, coding, and analysis', url: 'https://claude.ai' },
      { name: 'Gemini', by: 'Google', desc: 'Multimodal assistant connected to Google Workspace', url: 'https://gemini.google.com' },
      { name: 'Perplexity', by: 'Perplexity AI', desc: 'Answer engine with cited, real-time web research', url: 'https://perplexity.ai' },
      { name: 'NotebookLM', by: 'Google', desc: 'Research assistant grounded in your own documents', url: 'https://notebooklm.google.com' },
      { name: 'Google AI Studio', by: 'Google', desc: 'Prototype prompts and apps with Gemini models', url: 'https://aistudio.google.com' },
      { name: 'Duck.ai', by: 'DuckDuckGo', desc: 'Private, anonymous AI chat', url: 'https://duck.ai' },
      { name: 'Askimo', by: 'Open Source', desc: 'Open-source multi-model desktop client', url: 'https://github.com/nicepkg/askimo' },
    ],
  },
  {
    id: 'browsers',
    num: '02',
    title: 'AI Browsers & Chrome Extensions',
    subtitle: 'Browser extensions',
    desc: 'AI-powered browsing, summaries, and web automation.',
    tools: [
      { name: 'Comet', by: 'Perplexity', desc: 'AI-native browser that researches and completes multi-step web tasks', url: 'https://perplexity.ai/comet' },
      { name: 'Claude in Chrome', by: 'Anthropic', desc: 'Chrome extension that reads, navigates, and acts on web pages', url: 'https://claude.ai' },
      { name: 'Monica', by: 'Monica AI', desc: 'All-in-one AI sidebar for chat, summaries, translation, and writing', url: 'https://monica.im' },
      { name: 'HARPA AI', by: 'HARPA', desc: 'Chrome extension for web automation and AI chat on any page', url: 'https://harpa.ai' },
      { name: 'Prompt Genie', by: 'Prompt Genie', desc: 'Turn simple prompts into detailed, optimised ones', url: 'https://promptgenie.ai' },
      { name: 'Merlin', by: 'Merlin AI', desc: 'AI assistant across any website — summaries, replies, search', url: 'https://getmerlin.in' },
      { name: 'Sider', by: 'Sider AI', desc: 'AI sidebar with ChatGPT, Claude, and Gemini on every page', url: 'https://sider.ai' },
    ],
  },
  {
    id: 'coding',
    num: '03',
    title: 'AI Coding Agents & AI-Native IDEs',
    subtitle: 'IDE & terminal',
    desc: 'Agentic coding assistants that write, test, and refactor across full codebases.',
    tools: [
      { name: 'Claude Code', by: 'Anthropic', desc: 'Agentic coding in the terminal, IDE, and desktop', url: 'https://claude.ai/code' },
      { name: 'Codex', by: 'OpenAI', desc: 'Coding agent across CLI, IDE extension, and cloud tasks', url: 'https://openai.com/codex' },
      { name: 'Cursor', by: 'Anysphere', desc: 'AI-native code editor with agent mode and codebase-aware chat', url: 'https://cursor.sh' },
      { name: 'Antigravity', by: 'Google', desc: 'Agent-first platform for planning and building with multiple agents', url: 'https://idx.google.com' },
      { name: 'Kiro', by: 'AWS', desc: 'Spec-driven AI IDE that turns requirements into designs, tasks, and code', url: 'https://kiro.dev' },
      { name: 'Trae', by: 'ByteDance', desc: 'AI IDE with built-in chat and an autonomous builder mode', url: 'https://trae.ai' },
      { name: 'OpenCode', by: 'Open Source', desc: 'Terminal-first AI coding assistant', url: 'https://github.com/opencode-ai/opencode' },
      { name: 'GitHub Copilot', by: 'GitHub', desc: 'AI pair programmer — inline suggestions and chat in VS Code', url: 'https://github.com/features/copilot' },
      { name: 'Gemini CLI', by: 'Google', desc: 'Gemini in the terminal for coding and system tasks', url: 'https://github.com/google-gemini/gemini-cli' },
    ],
  },
  {
    id: 'ides',
    num: '04',
    title: 'Desktop IDEs, Runtimes & Source Control',
    subtitle: 'Desktop apps',
    desc: 'Editors, interpreters, containers, and version control — the workbench.',
    tools: [
      { name: 'Visual Studio Code', by: 'Microsoft', desc: 'Primary editor for Python, notebooks, and AI extensions', url: 'https://code.visualstudio.com' },
      { name: 'PyCharm', by: 'JetBrains', desc: 'Full-featured Python IDE for larger projects', url: 'https://www.jetbrains.com/pycharm/' },
      { name: 'Anaconda', by: 'Anaconda Inc.', desc: 'Python distribution with data-science packages and environments', url: 'https://www.anaconda.com' },
      { name: 'JupyterLab', by: 'Project Jupyter', desc: 'Interactive notebooks for experiments and teaching', url: 'https://jupyter.org' },
      { name: 'Docker Desktop', by: 'Docker', desc: 'Containers for reproducible environments and model serving', url: 'https://www.docker.com/products/docker-desktop/' },
      { name: 'Git & GitHub', by: 'GitHub', desc: 'Version control and collaboration', url: 'https://github.com' },
      { name: 'Miniforge', by: 'conda-forge', desc: 'Minimal conda installer with conda-forge defaults', url: 'https://github.com/conda-forge/miniforge' },
      { name: 'GitHub Desktop', by: 'GitHub', desc: 'Visual Git client for commits, branches, and diffs', url: 'https://desktop.github.com' },
      { name: 'Node.js LTS', by: 'OpenJS Foundation', desc: 'JavaScript runtime for tooling and AI app backends', url: 'https://nodejs.org' },
      { name: 'WSL 2 + Ubuntu', by: 'Microsoft', desc: 'Linux environment inside Windows for native toolchains', url: 'https://learn.microsoft.com/en-us/windows/wsl/' },
    ],
  },
  {
    id: 'visual-ml',
    num: '05',
    title: 'Data, Visual ML & Lab Utilities',
    subtitle: 'Desktop & browser',
    desc: 'Drag-and-drop ML, data mining, and visual experiment tools.',
    tools: [
      { name: 'KNIME Analytics', by: 'KNIME', desc: 'Drag-and-drop data science and ML workflows', url: 'https://www.knime.com' },
      { name: 'Orange Data Mining', by: 'Univ. of Ljubljana', desc: 'Visual ML and data mining for teaching', url: 'https://orangedatamining.com' },
      { name: 'RStudio Desktop', by: 'Posit', desc: 'Statistical computing and analysis in R', url: 'https://posit.co/products/open-source/rstudio/' },
      { name: 'DBeaver', by: 'DBeaver Corp.', desc: 'Universal database client for SQL work', url: 'https://dbeaver.io' },
      { name: 'Arduino IDE', by: 'Arduino', desc: 'Program microcontrollers for edge-AI and IoT projects', url: 'https://www.arduino.cc/en/software' },
      { name: 'GNU Octave', by: 'GNU Project', desc: 'Open-source numerical computing (MATLAB-compatible)', url: 'https://octave.org' },
      { name: 'WEKA', by: 'Univ. of Waikato', desc: 'Classic ML workbench for classification and clustering', url: 'https://www.cs.waikato.ac.nz/ml/weka/' },
      { name: 'DB Browser for SQLite', by: 'Open Source', desc: 'Visual SQLite editor and browser', url: 'https://sqlitebrowser.org' },
    ],
  },
  {
    id: 'datascience',
    num: '06',
    title: 'Python Data Science & Classical ML',
    subtitle: 'pip / conda packages',
    desc: 'The foundation of every analytics and ML role — from data cleaning to model explainability.',
    tools: [
      { name: 'NumPy', by: 'NumFOCUS', desc: 'Fast numerical arrays — the base of the Python ML stack', url: 'https://numpy.org' },
      { name: 'Pandas', by: 'NumFOCUS', desc: 'Data cleaning, transformation, and analysis', url: 'https://pandas.pydata.org' },
      { name: 'scikit-learn', by: 'scikit-learn', desc: 'Classical ML: classification, regression, clustering', url: 'https://scikit-learn.org' },
      { name: 'Matplotlib', by: 'Matplotlib', desc: 'Foundational 2D plotting library for Python', url: 'https://matplotlib.org' },
      { name: 'Seaborn', by: 'Michael Waskom', desc: 'Statistical data visualisation built on Matplotlib', url: 'https://seaborn.pydata.org' },
      { name: 'SciPy', by: 'NumFOCUS', desc: 'Scientific computing — optimisation, integration, signal processing', url: 'https://scipy.org' },
      { name: 'XGBoost', by: 'DMLC', desc: 'Gradient boosting for structured/tabular data', url: 'https://xgboost.readthedocs.io' },
      { name: 'LightGBM', by: 'Microsoft', desc: 'Fast gradient boosting framework for large datasets', url: 'https://lightgbm.readthedocs.io' },
      { name: 'Plotly', by: 'Plotly', desc: 'Interactive charts and dashboards in Python', url: 'https://plotly.com/python/' },
      { name: 'Streamlit', by: 'Snowflake', desc: 'Turn Python scripts into shareable data apps', url: 'https://streamlit.io' },
      { name: 'Gradio', by: 'Hugging Face', desc: 'Build ML demos and web UIs in minutes', url: 'https://gradio.app' },
      { name: 'SHAP', by: 'Scott Lundberg', desc: 'Model explainability via Shapley values', url: 'https://shap.readthedocs.io' },
    ],
  },
  {
    id: 'deep-learning',
    num: '07',
    title: 'Deep Learning & GenAI Frameworks',
    subtitle: 'pip / conda packages',
    desc: 'Neural network training, fine-tuning, and generative model toolkits.',
    tools: [
      { name: 'PyTorch', by: 'Meta AI', desc: 'Research-first deep learning framework', url: 'https://pytorch.org' },
      { name: 'TensorFlow', by: 'Google', desc: 'End-to-end ML platform for production deployment', url: 'https://www.tensorflow.org' },
      { name: 'Keras', by: 'Google', desc: 'High-level deep learning API — ships with TensorFlow', url: 'https://keras.io' },
      { name: 'Hugging Face Transformers', by: 'Hugging Face', desc: 'Pre-trained models for NLP, vision, and audio', url: 'https://huggingface.co/transformers' },
      { name: 'LangChain', by: 'LangChain', desc: 'Framework for building LLM-powered applications', url: 'https://www.langchain.com' },
      { name: 'LlamaIndex', by: 'LlamaIndex', desc: 'Data framework for connecting LLMs to private data', url: 'https://www.llamaindex.ai' },
      { name: 'Diffusers', by: 'Hugging Face', desc: 'State-of-the-art diffusion models for image and video', url: 'https://huggingface.co/docs/diffusers' },
      { name: 'Unsloth', by: 'Unsloth AI', desc: 'Fast fine-tuning of LLMs with lower memory', url: 'https://unsloth.ai' },
    ],
  },
  {
    id: 'agents',
    num: '08',
    title: 'AI Agents & Multi-Agent Frameworks',
    subtitle: 'pip / npm packages',
    desc: 'Build autonomous agents and multi-agent orchestration systems.',
    tools: [
      { name: 'CrewAI', by: 'CrewAI', desc: 'Role-based multi-agent orchestration framework', url: 'https://www.crewai.com' },
      { name: 'AutoGen', by: 'Microsoft', desc: 'Multi-agent conversation framework', url: 'https://github.com/microsoft/autogen' },
      { name: 'Google ADK', by: 'Google', desc: 'Agent development kit for building, evaluating, and deploying agents', url: 'https://google.github.io/adk-docs/' },
      { name: 'Pydantic AI', by: 'Pydantic', desc: 'Type-safe Python agents with structured outputs', url: 'https://ai.pydantic.dev' },
      { name: 'Mastra', by: 'Mastra', desc: 'TypeScript framework for agents and workflows', url: 'https://mastra.ai' },
      { name: 'Semantic Kernel', by: 'Microsoft', desc: 'Enterprise AI orchestration SDK', url: 'https://learn.microsoft.com/en-us/semantic-kernel/' },
      { name: 'Haystack', by: 'deepset', desc: 'Framework for building NLP and RAG pipelines', url: 'https://haystack.deepset.ai' },
      { name: 'DSPy', by: 'Stanford NLP', desc: 'Programming framework for optimising LLM pipelines', url: 'https://dspy-docs.vercel.app' },
      { name: 'Model Context Protocol', by: 'Anthropic', desc: 'Open standard for connecting AI to tools and data', url: 'https://modelcontextprotocol.io' },
    ],
  },
  {
    id: 'local-llms',
    num: '09',
    title: 'Local LLMs & Generative AI',
    subtitle: 'Desktop & CLI',
    desc: 'Run and serve open models on your own hardware — fully private.',
    tools: [
      { name: 'Ollama', by: 'Ollama', desc: 'Run open models locally with one command', url: 'https://ollama.com' },
      { name: 'LM Studio', by: 'LM Studio', desc: 'Desktop app to find, run, and chat with local models', url: 'https://lmstudio.ai' },
      { name: 'GPT4All', by: 'Nomic AI', desc: 'Private local chat app for everyday PCs', url: 'https://gpt4all.io' },
      { name: 'vLLM', by: 'vLLM Team', desc: 'High-throughput model serving on GPUs', url: 'https://vllm.ai' },
      { name: 'Open WebUI', by: 'Open Source', desc: 'ChatGPT-style web interface for local models', url: 'https://openwebui.com' },
      { name: 'ComfyUI', by: 'Open Source', desc: 'Node-based image and video generation workflows', url: 'https://github.com/comfyanonymous/ComfyUI' },
      { name: 'llama.cpp', by: 'Georgi Gerganov', desc: 'Efficient C++ inference for LLMs on consumer hardware', url: 'https://github.com/ggerganov/llama.cpp' },
      { name: 'LocalAI', by: 'Open Source', desc: 'OpenAI-compatible local API for any model', url: 'https://localai.io' },
      { name: 'AnythingLLM', by: 'Mintplex Labs', desc: 'All-in-one desktop AI app with RAG and agents', url: 'https://anythingllm.com' },
    ],
  },
  {
    id: 'rag',
    num: '10',
    title: 'RAG, Vector Databases & Knowledge',
    subtitle: 'pip packages & services',
    desc: 'Connect AI to your own documents — retrieval, embedding, and search.',
    tools: [
      { name: 'Chroma', by: 'Chroma', desc: 'Open-source embedding database', url: 'https://www.trychroma.com' },
      { name: 'FAISS', by: 'Meta', desc: 'Fast similarity search over large vector sets', url: 'https://github.com/facebookresearch/faiss' },
      { name: 'Milvus', by: 'Zilliz', desc: 'Scalable, cloud-native vector database', url: 'https://milvus.io' },
      { name: 'Weaviate', by: 'Weaviate', desc: 'Vector database with hybrid search', url: 'https://weaviate.io' },
      { name: 'Docling', by: 'IBM Research', desc: 'Parses PDFs and documents for AI pipelines', url: 'https://github.com/DS4SD/docling' },
      { name: 'Unstructured', by: 'Unstructured', desc: 'Ingests and cleans documents in many formats', url: 'https://unstructured.io' },
      { name: 'LanceDB', by: 'LanceDB', desc: 'Serverless vector database built on Lance format', url: 'https://lancedb.com' },
      { name: 'RAGFlow', by: 'InfiniFlow', desc: 'Open-source RAG engine with document understanding', url: 'https://ragflow.io' },
      { name: 'Mem0', by: 'Mem0', desc: 'Memory layer for AI applications', url: 'https://mem0.ai' },
    ],
  },
  {
    id: 'cv',
    num: '11',
    title: 'Computer Vision & Multimodal AI',
    subtitle: 'pip packages',
    desc: 'Image and video processing, object detection, and visual understanding.',
    tools: [
      { name: 'OpenCV', by: 'OpenCV', desc: 'Standard library for image and video processing', url: 'https://opencv.org' },
      { name: 'MediaPipe', by: 'Google', desc: 'Real-time face, hand, and pose detection', url: 'https://mediapipe.dev' },
      { name: 'Detectron2', by: 'Meta AI', desc: 'Object detection and segmentation', url: 'https://github.com/facebookresearch/detectron2' },
      { name: 'Supervision', by: 'Roboflow', desc: 'Reusable computer-vision utilities', url: 'https://supervision.roboflow.com' },
      { name: 'Albumentations', by: 'Open Source', desc: 'Fast image augmentation for deep learning', url: 'https://albumentations.ai' },
      { name: 'FiftyOne', by: 'Voxel51', desc: 'Dataset curation and model evaluation for CV', url: 'https://voxel51.com/fiftyone/' },
      { name: 'EasyOCR', by: 'JaidedAI', desc: 'Ready-to-use OCR for 80+ languages', url: 'https://github.com/JaidedAI/EasyOCR' },
      { name: 'Open3D', by: 'Open3D', desc: '3D data processing for point clouds and meshes', url: 'http://www.open3d.org' },
    ],
  },
  {
    id: 'nlp',
    num: '12',
    title: 'NLP, Speech & Audio AI',
    subtitle: 'pip packages',
    desc: 'Text processing, speech recognition, synthesis, and audio analysis.',
    tools: [
      { name: 'spaCy', by: 'Explosion', desc: 'Industrial-strength NLP pipelines', url: 'https://spacy.io' },
      { name: 'Whisper', by: 'OpenAI', desc: 'Multilingual speech recognition', url: 'https://github.com/openai/whisper' },
      { name: 'Sentence Transformers', by: 'Hugging Face', desc: 'Text embeddings for search and RAG', url: 'https://www.sbert.net' },
      { name: 'Bark', by: 'Suno', desc: 'Generative speech and audio', url: 'https://github.com/suno-ai/bark' },
      { name: 'NLTK', by: 'NLTK Project', desc: 'Classic NLP toolkit for education and research', url: 'https://www.nltk.org' },
      { name: 'Librosa', by: 'Open Source', desc: 'Audio and music analysis in Python', url: 'https://librosa.org' },
      { name: 'SpeechBrain', by: 'SpeechBrain', desc: 'All-in-one speech processing toolkit', url: 'https://speechbrain.github.io' },
      { name: 'Coqui TTS', by: 'Coqui', desc: 'Open-source text-to-speech engine', url: 'https://github.com/coqui-ai/TTS' },
    ],
  },
  {
    id: 'mlops',
    num: '13',
    title: 'MLOps, Evaluation & Monitoring',
    subtitle: 'CLI & services',
    desc: 'Experiment tracking, data versioning, deployment, and production monitoring.',
    tools: [
      { name: 'MLflow', by: 'Linux Foundation', desc: 'Experiment tracking and model lifecycle', url: 'https://mlflow.org' },
      { name: 'DVC', by: 'Iterative', desc: 'Version control for datasets and models', url: 'https://dvc.org' },
      { name: 'BentoML', by: 'BentoML', desc: 'Package and serve models as APIs', url: 'https://www.bentoml.com' },
      { name: 'Grafana', by: 'Grafana Labs', desc: 'Dashboards and alerting for model metrics', url: 'https://grafana.com' },
      { name: 'Prometheus', by: 'CNCF', desc: 'Metrics collection and time-series monitoring', url: 'https://prometheus.io' },
      { name: 'Weights & Biases', by: 'W&B', desc: 'Experiment tracking, model registry, and sweeps', url: 'https://wandb.ai' },
      { name: 'Label Studio', by: 'HumanSignal', desc: 'Open-source data labelling platform', url: 'https://labelstud.io' },
      { name: 'ClearML', by: 'ClearML', desc: 'End-to-end MLOps — experiments, pipelines, serving', url: 'https://clear.ml' },
    ],
  },
  {
    id: 'security',
    num: '14',
    title: 'AI Security, Red Teaming & Governance',
    subtitle: 'pip packages & tools',
    desc: 'Guard rails, vulnerability testing, and compliance for AI systems.',
    tools: [
      { name: 'Inspect', by: 'UK AI Safety Institute', desc: 'Framework for LLM and agent evaluations', url: 'https://inspect.ai-safety-institute.org.uk' },
      { name: 'LLM Guard', by: 'Protect AI', desc: 'Input/output protection for LLM applications', url: 'https://llm-guard.com' },
      { name: 'ModelScan', by: 'Protect AI', desc: 'Scan model files for security vulnerabilities', url: 'https://github.com/protectai/modelscan' },
      { name: 'Giskard', by: 'Giskard', desc: 'Quality and security testing for ML models', url: 'https://giskard.ai' },
      { name: 'DeepEval', by: 'Confident AI', desc: 'LLM and agent evaluation framework', url: 'https://deepeval.com' },
      { name: 'Ragas', by: 'Ragas', desc: 'RAG evaluation — faithfulness, relevance, context', url: 'https://ragas.io' },
      { name: 'DeepTeam', by: 'Confident AI', desc: 'LLM red teaming and adversarial testing', url: 'https://github.com/confident-ai/deepteam' },
    ],
  },
  {
    id: 'cloud',
    num: '15',
    title: 'Cloud Platforms, Datasets & Research',
    subtitle: 'Browser',
    desc: 'Free GPU notebooks, datasets, model hubs, and research resources.',
    tools: [
      { name: 'Google Colab', by: 'Google', desc: 'Cloud Python notebooks with free GPU tiers', url: 'https://colab.research.google.com' },
      { name: 'Kaggle', by: 'Google', desc: 'Datasets, notebooks, and competitions', url: 'https://www.kaggle.com' },
      { name: 'Hugging Face Hub', by: 'Hugging Face', desc: 'Models, datasets, and Spaces', url: 'https://huggingface.co' },
      { name: 'Roboflow', by: 'Roboflow', desc: 'Computer-vision datasets, annotation, and deployment', url: 'https://roboflow.com' },
      { name: 'IBM Quantum', by: 'IBM', desc: 'Run circuits on real quantum computers', url: 'https://quantum.ibm.com' },
      { name: 'Teachable Machine', by: 'Google', desc: 'Train simple ML models in the browser — no code', url: 'https://teachablemachine.withgoogle.com' },
      { name: 'TensorFlow Playground', by: 'Google', desc: 'Interactive neural network visualisation', url: 'https://playground.tensorflow.org' },
      { name: 'UCI ML Repository', by: 'UC Irvine', desc: 'Classic benchmark datasets for ML research', url: 'https://archive.ics.uci.edu' },
    ],
  },
];

const TOTAL_TOOLS = CATEGORIES.reduce((n, c) => n + c.tools.length, 0);

export default function AITools() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  useLayoutEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q && !activeCategory) return CATEGORIES;
    return CATEGORIES
      .filter((c) => !activeCategory || c.id === activeCategory)
      .map((c) => {
        if (!q) return c;
        const tools = c.tools.filter(
          (t) =>
            t.name.toLowerCase().includes(q) ||
            t.by.toLowerCase().includes(q) ||
            t.desc.toLowerCase().includes(q)
        );
        return tools.length ? { ...c, tools } : null;
      })
      .filter(Boolean);
  }, [query, activeCategory]);

  const totalFiltered = filtered.reduce((n, c) => n + c.tools.length, 0);

  return (
    <div className="pg show">
      <Navbar />

      {/* HERO */}
      <section className="ai-hero">
        <div className="hero-glow"></div>
        <div className="hero-dot-grid"></div>
        <div className="ai-hero-inner">
          <div className="ai-hero-eyebrow">AI &amp; ML Lab</div>
          <h1 className="ai-hero-h1">
            Every tool in our<br />
            AI &amp; ML lab<span className="ac">.</span>
          </h1>
          <p className="ai-hero-sub">
            {CATEGORIES.length} domains, {TOTAL_TOOLS} tools — curated for building, training, deploying, and securing AI systems.
          </p>

          <div className="ai-stats">
            <div className="ai-stat">
              <div className="ai-stat-num">{TOTAL_TOOLS}+</div>
              <div className="ai-stat-label">Industry tools</div>
            </div>
            <div className="ai-stat">
              <div className="ai-stat-num">{CATEGORIES.length}</div>
              <div className="ai-stat-label">Domains</div>
            </div>
            <div className="ai-stat">
              <div className="ai-stat-num">Open</div>
              <div className="ai-stat-label">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH + FILTER BAR */}
      <div className="ai-bar">
        <div className="ai-bar-inner">
          <div className="ai-search-wrap">
            <i className="ti ti-search ai-search-icon"></i>
            <input
              className="ai-search"
              type="text"
              placeholder="Search tools, frameworks, or categories…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="ai-search-clear" onClick={() => setQuery('')}>
                <i className="ti ti-x"></i>
              </button>
            )}
          </div>
          <div className="ai-filter-pills">
            <button
              className={`ai-pill ${!activeCategory ? 'on' : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              All ({TOTAL_TOOLS})
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`ai-pill ${activeCategory === c.id ? 'on' : ''}`}
                onClick={() => setActiveCategory(activeCategory === c.id ? null : c.id)}
              >
                {c.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <section className="ai-body">
        {query || activeCategory ? (
          <div className="ai-result-count">
            {totalFiltered} tool{totalFiltered !== 1 ? 's' : ''} found
          </div>
        ) : null}

        {filtered.length === 0 && (
          <div className="ai-empty">
            <i className="ti ti-mood-empty"></i>
            <div>No tools match your search.</div>
          </div>
        )}

        {filtered.map((cat) => (
          <div className="ai-cat" key={cat.id} id={cat.id}>
            <div className="ai-cat-head">
              <span className="ai-cat-num">{cat.num}</span>
              <div>
                <h2 className="ai-cat-title">{cat.title}</h2>
                <p className="ai-cat-desc">{cat.desc}</p>
              </div>
              <div className="ai-cat-meta">
                <span className="ai-cat-badge">{cat.subtitle}</span>
                <span className="ai-cat-count">{cat.tools.length} tools</span>
              </div>
            </div>

            <div className="ai-tool-grid">
              {cat.tools.map((tool) => (
                <a
                  key={tool.name}
                  className="ai-tool"
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="ai-tool-top">
                    <div className="ai-tool-name">{tool.name}</div>
                    <div className="ai-tool-by">{tool.by}</div>
                  </div>
                  <div className="ai-tool-desc">{tool.desc}</div>
                  <div className="ai-tool-arrow">
                    <i className="ti ti-arrow-up-right"></i>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* DISCLAIMER */}
      <div className="ai-disclaimer">
        Tool names and logos are trademarks of their respective owners and are shown for identification only.
      </div>

      <Footer />
    </div>
  );
}
