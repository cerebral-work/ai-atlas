// Core types for the AI Atlas interactive exhibit PWA

export type PaperCategory =
  | "foundations"
  | "symbolic-ai"
  | "neural-networks"
  | "statistical-learning"
  | "deep-learning"
  | "computer-vision"
  | "nlp"
  | "transformers"
  | "llms"
  | "reinforcement-learning"
  | "generative-models"
  | "diffusion-models"
  | "alignment-safety"
  | "multimodal"
  | "scaling-efficiency"
  | "retrieval-memory"
  | "agents"
  | "robotics"
  | "ai-safety"
  | "interpretability"
  // NEW categories:
  | "spatial-audio"     // 3D audio, HRTF, Ambisonics, binaural, neural spatial audio
  | "speech-processing" // ASR, TTS, vocoders, speech synthesis
  | "graph-learning"    // GNNs, GraphSAGE, GAT, message passing
  ;

export interface Paper {
  id: string;
  year: number;
  title: string;
  authors: string;
  venue: string;
  arxivId: string | null;
  category: PaperCategory;
  summary: string;
  // Cross-references to related papers by id
  related?: string[];
  // Key concepts/techniques introduced
  concepts?: string[];
  // Links to concept explainer IDs for terms introduced/used
  explainerIds?: string[];
  // DOI or canonical URL for the paper (optional)
  doi?: string | null;
}

export interface Explainer {
  id: string;                  // slug, e.g. "backpropagation"
  term: string;                // display name, e.g. "Backpropagation"
  category: PaperCategory | "general";
  aka?: string[];              // alternative names: ["back-propagation", "BP"]
  summary: string;             // 1-2 sentence TL;DR
  explanation: string;         // multi-paragraph markdown — rigorous, exhaustive
  howItWorks?: string;          // technical mechanism — markdown, may include formulas
  whyItMatters?: string;        // significance and impact — markdown
  history?: string;             // discovery/development narrative — markdown
  relatedConcepts: string[];   // ids of related explainers
  relatedPapers: string[];      // paper ids that introduce or use this concept
  discoverers?: string;         // who introduced it
  yearDiscovered?: number;
  tags?: string[];              // cross-cutting tags: ["optimization", "training"]
}

export interface Milestone {
  id: string;
  year: number;
  title: string;
  description: string;
  type: "event" | "product" | "dataset" | "benchmark" | "organization" | "competition";
  category: PaperCategory | "general";
  impact: string;
  relatedPapers?: string[];
}

export type HardwareCategory =
  | "mainframe"
  | "cpu"
  | "gpu"
  | "accelerator"
  | "edge"
  | "datacenter";

export interface HardwareDevice {
  year: number;
  name: string;
  category: HardwareCategory;
  // Performance in a normalized unit (we'll use TFLOPS for comparison)
  performance: number;
  unit: string;
  desc: string;
}

export interface NeuroEvent {
  year: number;
  title: string;
  category:
    | "neuroscience"
    | "neuroinformatics"
    | "bci"
    | "neural_computation"
    | "brain_imaging"
    | "connectomics"
    | "computational_neuroscience"
    | "neuromorphic"
    | "neuroai";
  description: string;
  keyFigures: string;
  aiConnection: string;
}

export interface MooreLawPoint {
  year: number;
  transistorCount: number;
  // Approximate cost per transistor (cents)
  costPerTransistor: number;
}

export interface ComputeTotal {
  year: number;
  // Total global compute in PFLOPS (aggregate)
  globalCompute: number;
  // AI-specific compute in PFLOPS
  aiCompute: number;
}

export interface TimelineFilter {
  categories: Set<PaperCategory>;
  showHardware: boolean;
  showNeuro: boolean;
  showCompute: boolean;
  showMoore: boolean;
  showMilestones: boolean;
  showEras: boolean;
  yearRange: [number, number];
}

export interface Era {
  yearStart: number;
  yearEnd: number;
  name: string;
  description: string;
  color: string;
}