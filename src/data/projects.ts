export interface CaseStudySections {
  intro?: string;
  contextProblem: string;
  whatWasExplored: string;
  processThinking: string;
  workArtifact: string;
  resultLearning: string;
  limitations?: string;
  artifactLink?: {
    label: string;
    url: string;
  };
}

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  type: string;
  image: string;
  alt: string;
  description: string;
  caseStudyUrl: string;
  documentUrl?: string;
  sections: CaseStudySections;
}

export const projectsData: Project[] = [
  {
    id: "psalms",
    num: "01",
    title: "Psalms",
    subtitle: "Offline PDF → Text-to-Speech Reader",
    type: "Prototype",
    image: "assets/06-psalms-project-visual.png",
    alt: "Psalms visual representation showing open text with Psalm 23, text extraction flow, and audio waveform with headphones",
    description: "A prototype exploring how an offline PDF can be converted into readable text and then experienced through text-to-speech.",
    caseStudyUrl: "#/work/psalms",
    sections: {
      intro: "Psalms is an offline-first desktop application designed to bridge reading and auditory learning for long-form study material without relying on cloud APIs or continuous internet connectivity.",
      contextProblem: "I had books I wanted to read but didn't have time to open them while studying for my courses, so I looked for a way to fit reading into small moments wherever I was. Listening to course material while reading helped it stick better, but paid offline options were too expensive and internet wasn't reliable enough for cloud-based reading.",
      whatWasExplored: "How local speech synthesis engines can run on standard consumer hardware, how structured document text can be extracted accurately from multi-column PDFs, and how visual sentence-tracking can keep reading and listening synchronized.",
      processThinking: "Instead of building a full document reader immediately, I focused on validating the audio pipeline: loading a local file, breaking it into sensible text chunks, warming up the local synthesis engine, and keeping playback controls responsive.",
      workArtifact: "A working prototype text-to-speech application that converts PDF to extracted text to sound, entirely offline. Currently functional features include opening PDFs, extracting text, reading aloud, play / pause / stop, model warm-up, reading progress bar, sentence and paragraph visual highlighting, and resuming from the last position.",
      resultLearning: "Validate only what's actually needed, not your own ability to build it. Research how existing tools solved the same problem, then build on top of what already works instead of starting from nothing.",
      limitations: "Current engineering challenges include eliminating micro-delays between audio chunks, improving pronunciation accuracy on technical acronyms and headings, and preserving intricate multi-column academic formatting."
    }
  },
  {
    id: "talk-more-pay-less",
    num: "02",
    title: "Talk More, Pay Less",
    subtitle: "Exploring communication on weak networks",
    type: "Research / Concept",
    image: "assets/07-Talk-more-pay-less-project-visual.jpg",
    alt: "Talk More, Pay Less visual showing communication packet degradation and cellular signal bars",
    description: "A research and concept exploration into how communication changes when network reliability becomes a constraint.",
    caseStudyUrl: "#/work/talk-more-pay-less",
    sections: {
      intro: "Talk More, Pay Less is an independent investigation into why voice and internet calls fail abruptly on fluctuating mobile networks, and what protocols might enable graceful degradation.",
      contextProblem: "This came from frustration, mine and my friends'. A friend trying to teach a class over WhatsApp kept losing the connection. I got dropped from an alumni meeting because my subscription plan couldn't support the call. When I looked into it, I found other people had the same problem.",
      whatWasExplored: "Packet loss characteristics, jitter, low-bitrate voice codecs (like Opus narrowband), and whether asynchronous audio delivery or graceful degradation could preserve call intelligibility over erratic carrier data connections.",
      processThinking: "I researched how VoIP architectures work and where latency accumulates, combined with empirical survey data from Ghanaian users navigating erratic data connections.",
      workArtifact: "A research write-up and conceptual system model examining call breakdown on weak networks, supported by 29 survey responses analyzing carrier behavior, drop frequency, and user communication workarounds. (Research and concept stage only; not a finished commercial software product).",
      resultLearning: "Bad calls usually come down to both hardware and software limits, not just the network provider. A lot of modern communication software is designed under assumptions of continuous broadband typical of Western environments.",
      limitations: "The project is currently a research write-up and conceptual architecture; testing requires live network simulation across carrier cell towers."
    }
  },
  {
    id: "blue-outreach",
    num: "03",
    title: "Blue Outreach",
    subtitle: "Learning from Ghanaian small businesses",
    type: "Field Study",
    image: "assets/03-blue-outreach.jpeg",
    alt: "A group of five students in matching blue Blue Outreach t-shirts smiling for a group selfie inside a retail store",
    description: "A field-based study focused on learning directly from small businesses and understanding the realities behind their day-to-day operations.",
    caseStudyUrl: "#/work/blue-outreach",
    sections: {
      intro: "Blue Outreach was an on-the-ground business investigation conducted with students from the KNUST School of Business, learning firsthand how local traders manage inventory, capital, and operations.",
      contextProblem: "Small business owners and market traders navigate thin margins, volatile supplier pricing, and informal credit arrangements without access to formal software tools or analytics.",
      whatWasExplored: "Day-to-day cash flow tracking, stock replenishment cycles, how profit is calculated versus perceived, how personal and family finances bleed into business capital, and how risk is mitigated without insurance.",
      processThinking: "Rather than administering formal academic questionnaires, we conducted conversational interviews in the market stall environment, observing actual customer transactions and listening to vendor priorities.",
      workArtifact: "In-depth structured field conversations with 5 business owners spanning insurance, savings, profit, capital allocation, and procurement, plus three shorter observational interviews with local retail operators.",
      resultLearning: "Preparation isn't just about materials, your body and stamina matter too. Many profitable opportunities and structural inefficiencies are hiding in plain sight—you just have to ask the right, respectful questions.",
      limitations: "Findings are qualitative and grounded in informal retail hubs in Kumasi; formalization recommendations must respect established local credit trust networks."
    }
  },
  {
    id: "critical-thinking-study",
    num: "04",
    title: "Critical Thinking Study",
    subtitle: "Independent exploration of critical thinking",
    type: "Research",
    image: "assets/08-Critical-thinking-project-visual.png",
    alt: "Critical Thinking Study visual showing printed research paper pages, notebook, and pen",
    description: "An academic research exploration into critical thinking, its barriers, its role in development, and possible pathways forward.",
    caseStudyUrl: "#/work/critical-thinking",
    documentUrl: "assets/critical-thinking-paper.pdf",
    sections: {
      intro: "An academic inquiry into the paradox of the educated non-thinker, examining why formal educational attainment does not reliably protect individuals from cognitive shortcuts or ideological dogmatism.",
      contextProblem: "It started with a class debate with my lecturer about why Ghana faces economic challenges despite its resources. It turned into a chance to explore nature versus nurture, and the lecturer proposed we research, in groups, why educated people fail to think critically.",
      whatWasExplored: "System 1 vs. System 2 cognition (Daniel Kahneman), the Dunning-Kruger effect, confirmation bias (Keith Stanovich), Reflective vs. Standard Educational Paradigms (Matthew Lipman, John Dewey), and identity-protective cognition (Dan Kahan).",
      processThinking: "We conducted a structured literature review across cognitive psychology, philosophy of education, and institutional sociology, examining how credentials frequently replace genuine intellectual humility.",
      workArtifact: "A cited group academic research paper arguing that institutional conditioning and misaligned academic incentives—not innate intelligence deficits—explain the breakdown in critical reasoning, proposing Socratic communities of inquiry and incentive reforms.",
      resultLearning: "Learn from what's already been done, especially how others approached the problem, not just their conclusions. Optimize for efficiency, not just effort. Understanding cognitive bias and institutional conditioning has permanently shaped how I evaluate evidence.",
      limitations: "The literature review was largely rooted in classical cognitive and educational texts; deeper empirical field tracking within localized African tertiary institutions remains an active opportunity.",
      artifactLink: {
        label: "Read the full research paper (PDF)",
        url: "assets/critical-thinking-paper.pdf"
      }
    }
  }
];
