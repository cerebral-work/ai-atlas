import type { Era } from "$lib/types";

// Historical eras of AI/ML research. Overlaps are intentional —
// e.g. Connectionist Revival (1986-1995) overlaps Second AI Winter (1987-1993)
// because backprop was published in 1986 but the field didn't revive until mid-90s.
export const eras: Era[] = [
  {
    yearStart: 1936,
    yearEnd: 1955,
    name: "Foundations",
    description:
      "Turing, Shannon, McCulloch-Pitts, Hebb — the mathematical foundations",
    color: "#8b6914",
  },
  {
    yearStart: 1956,
    yearEnd: 1969,
    name: "Dartmouth Era",
    description: "AI named as a field; symbolic systems, perceptrons",
    color: "#c0392b",
  },
  {
    yearStart: 1969,
    yearEnd: 1979,
    name: "First AI Winter",
    description: "Perceptrons critique kills neural network funding",
    color: "#3a3a3a",
  },
  {
    yearStart: 1980,
    yearEnd: 1987,
    name: "Expert Systems Boom",
    description: "Rule-based systems, MYCIN, commercial AI",
    color: "#2980b9",
  },
  {
    yearStart: 1987,
    yearEnd: 1993,
    name: "Second AI Winter",
    description: "Expert systems bubble bursts; hardware limits",
    color: "#3a3a3a",
  },
  {
    yearStart: 1986,
    yearEnd: 1995,
    name: "Connectionist Revival",
    description: "Backpropagation, Hopfield, Boltzmann machines",
    color: "#8e44ad",
  },
  {
    yearStart: 1995,
    yearEnd: 2011,
    name: "Statistical Learning Era",
    description: "SVMs, kernel methods, probabilistic ML",
    color: "#27ae60",
  },
  {
    yearStart: 2012,
    yearEnd: 2016,
    name: "Deep Learning Revolution",
    description: "AlexNet, ImageNet, GPU training",
    color: "#e67e22",
  },
  {
    yearStart: 2017,
    yearEnd: 2020,
    name: "Transformer Era",
    description: "Attention mechanism, BERT, GPT",
    color: "#e74c3c",
  },
  {
    yearStart: 2020,
    yearEnd: 2026,
    name: "Foundation Model Era",
    description: "Scaling laws, multimodal, GPT-4, Claude",
    color: "#f39c12",
  },
];
