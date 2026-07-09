// Core types for the AI/ML History timeline PWA

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
  | "interpretability";

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
  yearRange: [number, number];
}


export interface Era {
  yearStart: number;
  yearEnd: number;
  name: string;
  description: string;
  color: string;
}