const icon = (label, src, shortLabel = label) => ({ label, icon: src, shortLabel });
const devicon = (label, className, shortLabel = label) => ({
  label,
  className,
  shortLabel,
});
const monogram = (label, text, shortLabel = label) => ({
  label,
  text,
  shortLabel,
});

const tech = {
  python: icon(
    "Python",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  ),
  aws: icon("AWS", "/assets/images/aws.png.png"),
  pytorch: icon(
    "PyTorch",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
  ),
  sql: devicon("SQL", "devicon-azuresqldatabase-plain colored"),
  pandas: icon(
    "Pandas",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
  ),
  numpy: icon(
    "NumPy",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
  ),
  react: icon(
    "React",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
  ),
  javascript: icon(
    "JavaScript",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "JS"
  ),
  django: icon(
    "Django",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
  ),
  openai: icon("OpenAI API", "/assets/images/openai.png", "OpenAI"),
  typescript: icon(
    "TypeScript",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "TS"
  ),
  fastapi: icon(
    "FastAPI",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
  ),
  googleCloud: icon(
    "Google Cloud",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
    "GCP"
  ),
  flask: icon(
    "Flask",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
  ),
  docker: icon(
    "Docker",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
  ),
  css: icon(
    "CSS",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
  ),
  gitHub: devicon("GitHub", "devicon-github-original", "GitHub"),
  terraform: icon(
    "Terraform",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    "Terraform"
  ),
  rcs: monogram("RCS", "RCS", "RCS"),
  framerMotion: monogram("Framer Motion", "FM", "Framer"),
};

export const projects = [
  {
    slug: "nativemsg-stats",
    priority: 1,
    highlightTier: "highlighted",
    kicker: "In progress",
    name: "sluggr ai",
    summary:
      "Fantasy assistant delivering NFL and MLB insight through RCS conversations, backed by Python workflows and cloud infrastructure.",
    compactSummary:
      "Fantasy assistant delivering NFL and MLB insight through RCS conversations.",
    listRole: "Product direction, backend workflows, and cloud delivery",
    listOutcome:
      "Makes fantasy insight feel native on a phone by delivering NFL and MLB context through RCS conversations.",
    listLayout: "hero",
    listMedia: {
      type: "theme-image",
      lightSrc: "/assets/images/sluggr-phone-light.png",
      darkSrc: "/assets/images/sluggr-phone-dark.png",
      alt: "sluggr ai conversation preview on a phone",
    },
    accent: "blue",
    badge: { type: "new", label: "New" },
    hasDetailPage: true,
    detailPageType: "placeholder",
    logo: {
      kind: "asset",
      src: "/assets/images/project-mark-nativemsg.svg",
      alt: "sluggr ai mark",
      fit: "contain",
    },
    tech: [
      tech.python,
      tech.googleCloud,
      tech.rcs,
      tech.docker,
      tech.terraform,
    ],
    detail: {
      lead:
        "sluggr ai is being framed as a fantasy-first assistant that delivers NFL and MLB context directly through RCS conversations.",
      meta: [
        { label: "Status", value: "Case study in progress" },
        { label: "Focus", value: "Fantasy workflows + RCS delivery" },
        { label: "Stack", value: "Python, GCP, RCS, Docker, Terraform" },
      ],
      media: {
        type: "monogram",
        text: "SA",
        alt: "sluggr ai project mark",
      },
      highlights: [
        {
          title: "Operational perspective",
          body:
            "The eventual case study is intended to show how analysis and delivery fit together as one reliable workflow.",
        },
        {
          title: "Infra-aware product thinking",
          body:
            "The stack leans into infrastructure and deployment as part of the product story rather than as hidden implementation detail.",
        },
        {
          title: "Designed to expand later",
          body:
            "The project is visible now without pretending the full case study is already finished.",
        },
      ],
      workflow: [
        {
          title: "Collect and shape the data",
          body:
            "Python-based analysis forms the core of the workflow and prepares information for downstream delivery.",
        },
        {
          title: "Run through cloud infrastructure",
          body:
            "GCP, Docker, and Terraform make the deployment story part of the product’s credibility and scalability.",
        },
        {
          title: "Deliver through sluggr ai",
          body:
            "Messaging is part of the endpoint, turning insight into something operational teams can actually receive and act on.",
        },
      ],
      contributions: [
        {
          title: "Placeholder case-study shell",
          body:
            "Added a presentable route now so the project can be represented cleanly while fuller material is still being assembled.",
        },
      ],
    },
  },
  {
    slug: "statscout",
    priority: 2,
    highlightTier: "highlighted",
    kicker: "Current build",
    name: "StatScout",
    summary:
      "Sports analytics workspace combining data pipelines, model experiments, and player insight workflows into one product.",
    compactSummary:
      "Sports analytics workspace for pipelines, model experiments, and player insight.",
    listRole: "Sports analytics workspace",
    listOutcome:
      "Organizes pipelines, model experiments, and player research into one environment instead of scattered notebooks and scripts.",
    listLayout: "signal",
    repo: "https://github.com/Kamiltczarnik/StatScout",
    accent: "blue",
    badge: null,
    hasDetailPage: false,
    detailPageType: null,
    logo: {
      kind: "asset",
      src: "/assets/images/project-mark-statscout.svg",
      alt: "StatScout mark",
      fit: "contain",
    },
    tech: [
      tech.python,
      tech.aws,
      tech.pytorch,
      tech.sql,
      tech.pandas,
      tech.numpy,
    ],
  },
  {
    slug: "lira",
    priority: 3,
    highlightTier: "more",
    kicker: "AI assistant",
    name: "Lira AI",
    summary:
      "Conversational AI banking assistant focused on real-time financial context, voice interaction, and a clearer dashboard experience.",
    compactSummary:
      "Finance assistant pairing account context, dashboards, and voice interaction.",
    listRole: "Full-stack concept build",
    listOutcome:
      "Blends voice, dashboard context, and assistant workflows into a clearer conversational banking product.",
    listLayout: "feature",
    listMedia: {
      type: "video",
      src: "/assets/images/lira2.webm",
      poster: "/assets/images/lira2.jpg",
      alt: "Lira AI dashboard walkthrough",
    },
    repo: "https://github.com/Kamiltczarnik/Lira",
    accent: "orange",
    badge: null,
    hasDetailPage: true,
    detailPageType: "full",
    logo: {
      kind: "asset",
      src: "/assets/images/project-mark-lira.svg",
      alt: "Lira AI mark",
      fit: "contain",
    },
    tech: [
      tech.openai,
      tech.python,
      tech.react,
      tech.typescript,
      tech.fastapi,
    ],
    detail: {
      lead:
        "Lira AI explores what a conversational banking product feels like when advice, dashboards, and voice live inside one interface.",
      meta: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Focus", value: "Conversational finance UX" },
        { label: "Stack", value: "OpenAI, React, FastAPI" },
      ],
      media: {
        type: "video",
        src: "/assets/images/liragif.webm",
        poster: "/assets/images/lira2.jpg",
        alt: "Lira AI product walkthrough",
      },
      highlights: [
        {
          title: "AI-first guidance",
          body:
            "The assistant supports natural language questions about accounts, spending, and product choices without hiding the data context.",
        },
        {
          title: "Dashboard plus assistant",
          body:
            "Balances operational account views with a more conversational layer so users do not need to choose between data and help.",
        },
        {
          title: "Voice-aware experience",
          body:
            "Extends the interaction model beyond typing to make the assistant feel more accessible and more product-like.",
        },
      ],
      workflow: [
        {
          title: "Sign in and orient quickly",
          body:
            "The initial view puts balance, trends, and primary actions front and center so the app does not feel like a chatbot pasted onto a dashboard.",
          media: {
            type: "image",
            src: "/assets/images/lira1.png",
            alt: "Lira login view",
          },
        },
        {
          title: "Read the financial snapshot",
          body:
            "The dashboard turns account activity into a compact decision surface that stays readable even as more information is introduced.",
          media: {
            type: "video",
            src: "/assets/images/lira2.webm",
            alt: "Lira dashboard walkthrough",
          },
        },
        {
          title: "Ask for help in context",
          body:
            "The assistant can respond to product and account questions while the surrounding interface still grounds the conversation in real data.",
          media: {
            type: "image",
            src: "/assets/images/lira3.png",
            alt: "Lira conversational assistant",
          },
        },
      ],
      contributions: [
        {
          title: "Product flow",
          body:
            "Connected assistant behavior, dashboard presentation, and supporting product surfaces into one experience.",
        },
        {
          title: "AI + finance integration",
          body:
            "Combined external data and language-model interactions so the app feels responsive and grounded in context.",
        },
        {
          title: "Voice support",
          body:
            "Added multimodal interaction to make the product feel more assistive than a standard dashboard.",
        },
      ],
    },
  },
  {
    slug: "personal-portfolio",
    priority: 4,
    highlightTier: "more",
    kicker: "This site",
    name: "Portfolio Website",
    summary:
      "Narrative portfolio site focused on case studies, responsive composition, and a more editorial presentation of engineering work.",
    compactSummary:
      "Portfolio site built to present engineering work with more clarity and range.",
    listRole: "Design system and frontend storytelling",
    listOutcome:
      "Turns technical work into a more legible narrative through motion, hierarchy, and case-study framing.",
    listLayout: "editorial",
    listMedia: {
      type: "image",
      src: "/assets/images/home.png",
      alt: "Portfolio website home page",
    },
    repo: "https://github.com/Kamiltczarnik/Kamiltczarnik.github.io",
    accent: "neutral",
    badge: null,
    hasDetailPage: true,
    detailPageType: "full",
    logo: {
      kind: "asset",
      src: "/assets/images/project-mark-portfolio.svg",
      alt: "Portfolio Website mark",
      fit: "contain",
    },
    tech: [
      tech.react,
      tech.javascript,
      tech.css,
      tech.gitHub,
      tech.framerMotion,
    ],
    detail: {
      lead:
        "This site is an ongoing exercise in turning technical work into a more legible story through layout, motion, and clearer project framing.",
      meta: [
        { label: "Role", value: "Designer + developer" },
        { label: "Focus", value: "Portfolio storytelling" },
        { label: "Stack", value: "React, CSS, motion" },
      ],
      media: {
        type: "video",
        src: "/assets/images/port2.webm",
        poster: "/assets/images/home.png",
        alt: "Portfolio website walkthrough",
      },
      highlights: [
        {
          title: "Story-first structure",
          body:
            "The site is organized to help visitors understand what was built, why it matters, and how to navigate quickly.",
        },
        {
          title: "Responsive composition",
          body:
            "Each surface is tuned to preserve hierarchy and spacing from mobile through large desktop layouts.",
        },
        {
          title: "Case-study readiness",
          body:
            "Project pages exist to give more depth than a grid alone can provide, making the work easier to scan and remember.",
        },
      ],
      workflow: [
        {
          title: "Introduce the person behind the work",
          body:
            "The home view balances personality, current focus, and technical depth without making the first screen feel crowded.",
          media: {
            type: "image",
            src: "/assets/images/home.png",
            alt: "Portfolio home page",
          },
        },
        {
          title: "Surface projects with clearer hierarchy",
          body:
            "The projects page exists to make standout work easy to scan while still allowing deeper project exploration.",
          media: {
            type: "image",
            src: "/assets/images/projects.png",
            alt: "Portfolio projects page",
          },
        },
        {
          title: "Keep contact simple and intentional",
          body:
            "The contact route stays concise so the page works as a clear conversion step rather than a content dump.",
          media: {
            type: "image",
            src: "/assets/images/contact.png",
            alt: "Portfolio contact page",
          },
        },
      ],
      contributions: [
        {
          title: "Visual language",
          body:
            "Built the typography, spacing, and motion system to make the site feel premium without losing clarity.",
        },
        {
          title: "Responsive layouts",
          body:
            "Tuned the composition across device sizes so the same story reads well on both phone and desktop.",
        },
        {
          title: "Project narrative",
          body:
            "Used deeper project pages to turn brief summaries into clearer project stories.",
        },
      ],
    },
  },
  {
    slug: "hof-oracle",
    priority: 5,
    highlightTier: "more",
    kicker: "Sports predictor",
    name: "HOF Oracle",
    summary:
      "NFL Hall of Fame predictor built around player comparison, search, and a streamlined interpretation of model output.",
    compactSummary:
      "Hall of Fame predictor built for player search, comparison, and model clarity.",
    listRole: "Search, comparison, and model interpretation",
    listOutcome:
      "Makes sports predictions easier to trust by framing them through player search and side-by-side comparisons.",
    listLayout: "analysis",
    listMedia: {
      type: "image",
      src: "/assets/images/compare.png",
      alt: "HOF Oracle player comparison view",
    },
    accent: "orange",
    badge: { type: "blocki", label: "Class project" },
    hasDetailPage: true,
    detailPageType: "full",
    logo: {
      kind: "asset",
      src: "/assets/images/project-mark-hof.svg",
      alt: "HOF Oracle mark",
      fit: "contain",
    },
    tech: [
      tech.react,
      tech.python,
      tech.googleCloud,
      tech.flask,
      tech.javascript,
      tech.sql,
    ],
    detail: {
      lead:
        "HOF Oracle reframes predictive sports analytics as a clearer player-comparison product rather than a model result buried in tables.",
      meta: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Focus", value: "Search + model interpretation" },
        { label: "Stack", value: "React, Flask, GCP" },
      ],
      media: {
        type: "video",
        src: "/assets/images/hoforac.webm",
        poster: "/assets/images/choose.png",
        alt: "HOF Oracle product walkthrough",
      },
      highlights: [
        {
          title: "Model output with context",
          body:
            "Presents prediction output alongside supporting comparisons so the probability feels explainable, not abstract.",
        },
        {
          title: "Fast search and compare",
          body:
            "Players can be found and evaluated quickly, keeping exploration fast enough to feel like a product, not just an analysis demo.",
        },
        {
          title: "Readable sports data UI",
          body:
            "The interface stays legible around dense stats by emphasizing structure, spacing, and a clean visual rhythm.",
        },
      ],
      workflow: [
        {
          title: "Choose a player to analyze",
          body:
            "The search flow prioritizes fast discovery and immediate orientation so the model feels approachable.",
          media: {
            type: "image",
            src: "/assets/images/choose.png",
            alt: "Player selection interface",
          },
        },
        {
          title: "Read the model outcome",
          body:
            "Prediction output is framed with supporting statistics, helping users understand where the result is coming from.",
          media: {
            type: "image",
            src: "/assets/images/chances.png",
            alt: "Hall of Fame prediction output",
          },
        },
        {
          title: "Compare careers side by side",
          body:
            "The comparison flow keeps the product exploratory and makes the predictive system easier to trust.",
          media: {
            type: "image",
            src: "/assets/images/compare.png",
            alt: "Player comparison interface",
          },
        },
      ],
      contributions: [
        {
          title: "Comparison UX",
          body:
            "Built the search, comparison, and presentation layers around fast interpretation instead of raw stat dumps.",
        },
        {
          title: "Frontend and backend integration",
          body:
            "Integrated API responses so the predictive results and supporting data felt unified.",
        },
        {
          title: "Dense-data readability",
          body:
            "Used hierarchy and visual restraint to keep sports data readable without flattening the product’s depth.",
        },
      ],
    },
  },
  {
    slug: "portfolipro",
    priority: 6,
    highlightTier: "more",
    kicker: "Portfolio research",
    name: "PortfoliPro",
    summary:
      "ML-powered portfolio research tool that pairs market data, forecasting, and a cleaner decision surface for retail investors.",
    compactSummary:
      "Portfolio research tool pairing market data, forecasts, and cleaner decisions.",
    listRole: "Forecasting and portfolio workflow design",
    listOutcome:
      "Puts market data, model output, and portfolio actions into one calmer research flow for retail investors.",
    listLayout: "analysis",
    listMedia: {
      type: "image",
      src: "/assets/images/PortManager.png",
      alt: "PortfoliPro forecast panel",
    },
    accent: "blue",
    badge: { type: "blocki", label: "Class project" },
    hasDetailPage: true,
    detailPageType: "full",
    logo: {
      kind: "asset",
      src: "/assets/images/project-mark-portfolipro.svg",
      alt: "PortfoliPro mark",
      fit: "contain",
    },
    tech: [
      tech.react,
      tech.javascript,
      tech.python,
      tech.django,
      tech.pandas,
      tech.numpy,
    ],
    detail: {
      lead:
        "PortfoliPro turns portfolio tracking and LSTM-based forecasting into a calmer, more readable research flow.",
      meta: [
        { label: "Role", value: "Full-stack developer" },
        { label: "Focus", value: "Forecasting + portfolio UX" },
        { label: "Stack", value: "React, Django, Python" },
      ],
      media: {
        type: "video",
        src: "/assets/images/port.webm",
        poster: "/assets/images/portfolipro.png",
        alt: "PortfoliPro dashboard demo",
      },
      highlights: [
        {
          title: "Portfolio workspace",
          body:
            "Keeps research, holdings, and model output in one surface instead of forcing users across disconnected pages.",
        },
        {
          title: "Model-assisted exploration",
          body:
            "Blends historical data with forward-looking forecasts so the interface supports both analysis and action.",
        },
        {
          title: "Simple decision hierarchy",
          body:
            "Prioritizes signal first, then detail, so the page reads clearly even for users without a finance background.",
        },
      ],
      workflow: [
        {
          title: "Search and compare candidates",
          body:
            "Users can find assets quickly, evaluate live data, and decide which securities belong in the portfolio view.",
          media: {
            type: "image",
            src: "/assets/images/image1.png",
            alt: "PortfoliPro stock search interface",
          },
        },
        {
          title: "Inspect forecast-driven context",
          body:
            "The model output is surfaced as supporting context rather than visual noise, making the prediction panel useful instead of overwhelming.",
          media: {
            type: "image",
            src: "/assets/images/PortManager.png",
            alt: "PortfoliPro forecast panel",
          },
        },
        {
          title: "Manage the full portfolio",
          body:
            "Holdings and portfolio performance stay visible as part of the same workflow so the interface keeps its decision-making context intact.",
          media: {
            type: "image",
            src: "/assets/images/img3.png",
            alt: "PortfoliPro portfolio management view",
          },
        },
      ],
      contributions: [
        {
          title: "Research flow",
          body:
            "Structured the interface around scanning, comparing, and acting instead of around disconnected feature demos.",
        },
        {
          title: "Live data and forecasts",
          body:
            "Connected real-time market information with the predictive layer so the product feels like one system.",
        },
        {
          title: "Readable modeling UI",
          body:
            "Tuned layout and hierarchy so model-driven information stays interpretable on smaller screens.",
        },
      ],
    },
  },
];

export const orderedProjects = [...projects].sort(
  (left, right) => left.priority - right.priority
);

export const getProjectBySlug = (slug) =>
  orderedProjects.find((project) => project.slug === slug);

export const projectsWithDetails = orderedProjects.filter(
  (project) => project.hasDetailPage
);
