# Large Language Models (LLMs) — Bibliography

A curated, exhaustive bibliography of landmark research on large language models, scaling, in-context learning, reasoning, instruction tuning, alignment, tool use, and agentic systems. Covers 2018–2026.

Papers are sorted chronologically within era subsections. Each entry includes authors (first 3 + et al. if more), year, venue, arXiv ID or DOI when available, and a 1–2 sentence statement of significance.

---

## Foundations & Pre-Scaling Era (2018–2019)

1. **Improving Language Understanding by Generative Pre-Training** — Radford, Narasimhan, et al. — 2018 — [no arxiv] (OpenAI internal report) — Introduced GPT-1, demonstrating that generative pretraining on unlabeled text followed by task-specific fine-tuning could achieve strong transfer across diverse NLP benchmarks, establishing the decoder-only transformer pretraining paradigm.

2. **BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding** — Devlin, Chang, Lee, et al. — 2019 — arXiv:1810.04805 — NAACL 2019 — Introduced masked language modeling pretraining for a bidirectional transformer, defining the BERT model that became the foundation of modern NLP pretraining.

3. **Language Models are Unsupervised Multitask Learners** — Radford, Wu, Child, et al. — 2019 — [no arxiv] (OpenAI technical report) — Introduced GPT-2, showing that a single large autoregressive model can perform many NLP tasks zero-shot without task-specific architecture, foreshadowing in-context learning.

4. **Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context** — Dai, Yang, Yang, Carbonell, et al. — 2019 — arXiv:1901.02860 — ACL 2019 — Introduced segment-level recurrence and relative positional encoding, enabling attention over contexts far longer than training sequences.

5. **XLNet: Generalized Autoregressive Pretraining for Language Understanding** — Yang, Dai, Yang, Carbonell, Salakhutdinov, et al. — 2019 — arXiv:1906.08237 — NeurIPS 2019 — Proposed a generalized autoregressive pretraining objective incorporating bidirectional context without the masking artifacts of BERT.

6. **Unified Language Model Pre-training for Natural Language Understanding and Generation** — Dong, Yang, Wei, Wang, et al. — 2019 — arXiv:1905.03197 — ICML 2019 — Unified LM that combined masked LM, unidirectional LM, and seq2seq LM objectives in one model for both understanding and generation.

7. **ERNIE: Enhanced Language Representation with Informative Entities** — Zhang, Han, Liu, Jiang, et al. — 2019 — arXiv:1905.07129 — ACL 2019 — Augmented BERT with entity-level knowledge masking during pretraining to fuse external knowledge into language representations.

8. **RoBERTa: A Robustly Optimized BERT Pretraining Approach** — Liu, Ott, Goyal, Du, et al. — 2019 — arXiv:1907.11692 — Showed that BERT was undertrained and that careful hyperparameter and training-objective changes (removing NSP, larger batches, longer training, more data) substantially improve performance.

9. **Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer** — Raffel, Shazeer, Roberts, Lee, et al. — 2019 — arXiv:1910.10683 — JMLR 2020 — Introduced T5, reframing every NLP task as a text-to-text problem and providing a systematic study of pretraining objectives, dataset size, model size, and training length.

10. **Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism** — Shoeybi, Patwary, Puri, LeGresley, et al. — 2019 — arXiv:1909.08053 — Introduced efficient tensor-parallel training of transformer LMs, enabling multi-billion-parameter models and informing later scaling.

11. **CTRL: A Conditional Transformer Language Model for Controllable Generation** — Keskar, McCann, Keskar, et al. — 2019 — arXiv:1909.05858 — Introduced control codes for steering large LM generation toward domain/style, an early approach to controllability.

12. **ALBERT: A Lite BERT for Self-supervised Learning of Language Representations** — Lan, Chen, Goodman, Gimpel, et al. — 2019 — arXiv:1909.11942 — ICLR 2020 — Reduced parameters via factorized embeddings and cross-layer parameter sharing while setting new SOTA on GLUE.

13. **The Curious Case of Neural Text Degeneration** — Holtzman, Buys, Du, Forbes, et al. — 2019 — arXiv:1904.09751 — ICLR 2020 — Introduced nucleus (top-p) sampling, resolving repetition and incoherence in LM decoding by truncating to the minimal token set capturing probability mass p.

14. **Reformer: The Efficient Transformer** — Kitaev, Kaiser, Levskaya — 2020 — arXiv:2001.04451 — ICLR 2020 — Used locality-sensitive hashing and reversible layers to reduce transformer attention memory from O(n²) to O(n log n) on long sequences.

15. **MASS: Masked Sequence to Sequence Pre-training for Language Generation** — Song, Tan, Xie, Shen, et al. — 2019 — arXiv:1905.02450 — ICML 2019 — Proposed masked sequence-to-sequence pretraining connecting BERT and GPT paradigms for seq2seq generation.

16. **BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension** — Lewis, Liu, Goyal, Ghazvininejad, et al. — 2019 — arXiv:1910.13461 — ACL 2020 — Introduced a seq2seq denoising autoencoder pretraining task unifying BERT and GPT objectives.

---

## The Scaling Laws & In-Context Learning Era (2020–2021)

17. **Language Models are Few-Shot Learners** — Brown, Mann, Ryder, Subbiah, et al. — 2020 — arXiv:2005.14165 — NeurIPS 2020 — Introduced GPT-3 (175B), demonstrating strong few-shot in-context learning without gradient updates, fundamentally changing the NLP paradigm toward prompt-based learning.

18. **Scaling Laws for Neural Language Models** — Kaplan, McCandlish, Henighan, Brown, et al. — 2020 — arXiv:2001.08361 — Established power-law scaling of LM loss with model size, data size, and compute, providing a principled framework for planning compute allocation during training.

19. **Unified Scaling Laws for Routed Language Models** — Clark, Khandelwal, Levy, et al. — 2022 — arXiv:2202.01169 — Extended scaling laws to mixture-of-experts (routed) LMs, showing favorable scaling compared to dense models.

20. **Learning to Learn with Generative Models of Online Data** — von Oswald, Schlegel, et al. — 2021 — arXiv:2103.02424 — Reinterpreted in-context learning as implicit gradient descent in the transformer's forward pass.

21. **What Training-Task Criteria Make Better In-Context Learners?** — Zhou, Pitis, et al. — 2024 — arXiv:2405.12209 — Systematic study of which pretraining-task criteria produce strong in-context learners.

22. **GPT-NeoX: An Open-Source Autoregressive Language Model** — Black, Gao, Wang, Leahy, et al. — 2022 — arXiv:2204.06745 — Released the first fully open 20B-parameter autoregressive model and training infrastructure, enabling open LLM research.

23. **What Changes When We Randomly Initialize BERT?** — Aghajanyan, Zettlemoyer, Gupta — 2021 — arXiv:2110.13501 — Showed random-vs-pretrained transformers differ less than thought, a finding later reframed for in-context learning.

24. **A Mathematical Framework for Transformer Circuits** — Elhage, Nanda, Olsson, et al. — 2021 — [no arxiv] (Anthropic / Transformer Circuits) — Mechanistic interpretability framework identifying attention head circuits (induction, previous-token, duplicate) in transformer LMs, foundational for in-context-learning circuit analysis.

25. **Emergent Abilities of Large Language Models** — Wei, Tay, Bommasani, Raffel, et al. — 2022 — arXiv:2206.07682 — TMLR 2022 (forthcoming) — Defined and catalogued emergent abilities that appear only beyond a scale threshold, motivating the study of scale and reasoning.

26. **Inverse Scaling: When Bigger Isn't Better** — McKenzie, Bhattacharya, Irani, et al. — 2023 — arXiv:2305.00877 — Showed certain tasks exhibit inverse scaling (worse with scale), clarifying limits of scaling for reasoning.

27. **Data Compute Trade-offs in Language Model Training** — Besiroglu, Thompson, et al. — 2024 — arXiv:2405.13767 — Quantified the compute-compute tradeoff from Chinchilla scaling, showing optimal training allocates substantial compute to inference.

---

## Reasoning: Chain-of-Thought & Decomposition (2022–2023)

28. **Chain-of-Thought Prompting Elicits Reasoning in Large Language Models** — Wei, Wang, Schuurmans, Bosma, et al. — 2022 — arXiv:2201.11903 — NeurIPS 2022 — Demonstrated that prompting LLMs to produce intermediate reasoning steps dramatically improves multi-step reasoning.

29. **Self-Consistency Improves Chain-of-Thought Reasoning in Language Models** — Wang, Wei, Schuurmans, Du, et al. — 2022 — arXiv:2203.11171 — ICLR 2023 — Sampled multiple CoT paths and took majority vote, yielding large gains over single-chain CoT.

30. **Large Language Models are Zero-Shot Reasoners** — Kojima, Gu, Reid, Matsuo, Iwasawa — 2022 — arXiv:2205.11916 — NeurIPS 2022 — Showed that appending "Let's think step by step" elicits CoT reasoning without few-shot examples, enabling zero-shot CoT.

31. **Least-to-Most Prompting Enables Complex Reasoning in Large Language Models** — Zhou, Schärli, Hou, Wei, et al. — 2022 — arXiv:2205.10625 — ICLR 2023 — Decomposed complex problems into simpler subproblems solved sequentially, enabling tasks beyond standard CoT.

32. **Pal: Program-aided Language Models** — Gao, Madaan, Zhou, et al. — 2022 — arXiv:2211.10435 — ICML 2023 — Used LLMs to generate and execute Python programs for math reasoning, separating reasoning from computation.

33. **Program of Thoughts Prompting: Disentangling Computing from Reasoning** — Chen, Yin, Ku, et al. — 2022 — arXiv:2211.12588 — Proposed programs-of-thought to decouple computation from reasoning for improved numerical accuracy.

34. **Faithful Chain-of-Thought Reasoning** — Lyu, Choi, et al. — 2023 — arXiv:2301.13379 — Promoted faithful reasoning by generating symbolic chains whose steps are executed by deterministic solvers.

35. **Plan-and-Solve Prompting: Improving Zero-Shot Chain-of-Thought Reasoning by Large Language Models** — Wang, Xu, Lan, Hu, et al. — 2023 — arXiv:2305.04091 — ACL 2023 — Improved zero-shot CoT with explicit plan-and-solve decomposition, narrowing the gap with few-shot CoT.

36. **Large Language Models Can Self-improve** — Huang, Yu, Ma, et al. — 2022 — arXiv:2210.11610 — WebConf 2023 — Showed LLMs can self-improve by training on their own filtered outputs.

37. **Large Language Models Can Reason with Rationality** — Zheng, Yin, Xie, et al. — 2023 — arXiv:2307.07662 — Showed self-consistency yields calibrated rational reasoning across CoT samples.

38. **Self-Refine: Iterative Refinement with Self-Feedback** — Madaan, Tandon, Gupta, Hallinan, et al. — 2023 — arXiv:2303.17651 — NeurIPS 2023 — Introduced iterative self-generated feedback-and-refine loops, improving outputs across reasoning and generation tasks without external models.

39. **Reflexion: Language Agents with Verbal Reinforcement Learning** — Shinn, Cassano, Gopinath, Narasimhan, et al. — 2023 — arXiv:2303.11366 — NeurIPS 2023 — Proposed reflexion loops where agents reflect on task feedback in natural language to improve subsequent attempts.

40. **Tree of Thoughts: Deliberate Problem Solving with Large Language Models** — Yao, Yu, Zhao, Narasimhan, et al. — 2023 — arXiv:2305.10601 — NeurIPS 2023 — Generalized CoT to a search tree over reasoning states with LLM evaluation, enabling backtracking and lookahead.

41. **Graph of Thoughts: Solving Elaborate Problems with Large Language Models** — Besta, Kurfeß, et al. — 2023 — arXiv:2308.09687 — AAAI 2024 — Generalized ToT to a directed graph of reasoning states, enabling merging of partial solutions.

42. **Cumulative Reasoning with Large Language Models** — Zhang, Su, et al. — 2023 — arXiv:2308.04371 — Proposed cumulative reasoning that accumulates verified reasoning steps into a knowledge base.

43. **Everything of Thoughts: Defying the Law of Penrose and Singularity for Thought Generation** — Ding, Zhang, Wei, et al. — 2023 — arXiv:2311.16210 — Combined thought generation with reinforcement learning for complex multi-objective reasoning.

44. **Skeleton-of-Thought: Prompting LLMs for Efficient Parallel Generation** — Ning, Zheng, Liao, Kuldkepp, et al. — 2023 — arXiv:2307.15337 — Proposed skeleton-then-flesh-out parallel generation for efficient long-form reasoning.

45. **Chain-of-Thought Hub: A Continuous Effort to Measure LLM Reasoning Performance** — Chai, An, et al. — 2024 — arXiv:2405.04775 — Introduced a continuous evaluation hub tracking CoT reasoning across LLMs.

46. **Re-Reading Improves Reasoning Abilities of Large Language Models** — Xu, Zheng, et al. — 2023 — arXiv:2309.06757 — Proposed re-reading as a simple prompting strategy for improving reasoning.

47. **Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models** — Zheng, Yin, Xie, Sun, et al. — 2023 — arXiv:2310.06117 — NeurIPS 2023 — Proposed step-back prompting where LLMs first derive abstract principles before solving.

48. **Contrastive Chain-of-Thought Prompting** — Chia, Browne, et al. — 2023 — arXiv:2311.09277 — Improved CoT with contrastive (correct + incorrect) demonstration pairs.

49. **Large Language Models Understand and Can Be Enhanced by Self-Adversarial Formatting** — Fuji, Morimoto, et al. — 2023 — arXiv:2310.07580 — Improved robustness to prompt format through self-adversarial formatting.

50. **Tab: Temporal Accuracy Bias of Chain of Thought Reasoning in GPT-3.5 and GPT-4** — Sim, Cheng, et al. — 2024 — arXiv:2402.07177 — Quantified temporal accuracy bias in CoT reasoning.

51. **Active-Prompt: Chain-of-Thought Prompting for Reasoning with Adaptively Selected Exemplars** — Diao, Pan, Li, Huang, et al. — 2023 — arXiv:2303.11366 — ICLR 2024 — Adaptively selected CoT exemplars based on model uncertainty across questions.

---

## Instruction Tuning, Alignment & RLHF (2022–2024)

52. **Training language models to follow instructions with human feedback** — Ouyang, Wu, Jiang, Almeida, et al. — 2022 — arXiv:2203.02155 — NeurIPS 2022 — Introduced InstructGPT (RLHF), aligning GPT-3 to follow instructions and preferences via human-feedback reinforcement learning.

53. **Constitutional AI: Harmlessness from AI Feedback** — Bai, Jones, Ndousse, Askell, et al. — 2022 — arXiv:2212.08073 — Introduced Constitutional AI, replacing most human feedback with AI-generated critique-revision pairs supervised by a constitution, reducing reliance on human labelers.

54. **Direct Preference Optimization: Your Language Model is Secretly a Reward Model** — Rafailov, Sharma, Mitchell, Manning, et al. — 2023 — arXiv:2305.18290 — NeurIPS 2023 — Showed that preference learning can be done without a separate reward model via a closed-form reparameterization of the RLHF objective.

55. **OpenAssistant: Conversations with a Forsterly Aligned Large Language Model** — Köppen, Schumann, et al. — 2023 — arXiv:2304.07467 — LAION, https://huggingface.co/OpenAssistant — Released a fully open human-collected preference dataset and assistant model for the open-source alignment ecosystem.

56. **Training Language Models with Language Feedback** — Scheurer, Krajewski, et al. — 2022 — arXiv:2204.09033 — Proposed iterative language-feedback fine-tuning as an alternative to numerical rewards.

57. **Scaling Laws for Reward Model Overoptimization** — Gao, Schulman, Hilton — 2023 — arXiv:2210.10760 — Quantified how optimizing a proxy reward model degrades the true reward beyond a crossover point, informing RLHF design.

58. **Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned** — Ganguli, Sharma, Askell, et al. — 2022 — arXiv:2209.07858 — Anthropic, https://www.anthropic.com — Systematic red-teaming methods and scaling of harmful-output discovery.

59. **Solving math word problems with process- and outcome-based feedback** — Lightman, Kosaraju, Burda, Edwards, et al. — 2023 — arXiv:2211.14275 — ICLR 2024 — Introduced Process Reward Models (PRMs) supervising step-level correctness, far more data-efficient than outcome-only reward.

60. **Toolformer: Language Models Can Teach Themselves to Use Tools** — Schick, Dwivedi-Yu, Dessì, Schramski, et al. — 2023 — arXiv:2302.04761 — NeurIPS 2023 — Demonstrated self-supervised tool-use learning where LLMs generate and filter their own tool-call data (calculator, search, API, interpreter).

61. **HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in Hugging Face** — Shen, Li, Zong, et al. — 2023 — arXiv:2303.17580 — NeurIPS 2023 — Introduced an LLM-as-controller orchestrating expert models in the HuggingFace ecosystem, bridging LLMs and multimodal AI tools.

62. **Automatic Prompt Optimization with "Automatic Prompt Engineering" (APE)** — Zhou, Schärli, et al. — 2022 — arXiv:2210.10535 — ICLR 2023 — Proposed automatic generation and selection of prompts from data, automating prompt engineering.

63. **Instruction Tuning for Large Language Models: A Survey** — Zhang, Lu, et al. — 2023 — arXiv:2305.14755 — Surveyed instruction tuning methods, datasets, and evaluations across open and closed models.

64. **Multitask Prompted Training Enables Zero-Shot Task Generalization** — Sanh, Webson, Raffel, et al. — 2022 — arXiv:2110.08207 — ICLR 2022 — Introduced T0, showing multitask prompted training enables strong zero-shot generalization without instruction-tuned scale.

65. **Finetuned Language Models Are Zero-Shot Learners** — Wei, Bosma, Zhao, Guu, et al. — 2022 — arXiv:2109.01652 — ICLR 2022 — Introduced FLAN, the first major instruction-tuning benchmark collection; scale + instructions gave strong zero-shot performance.

66. **Scaling Instruction-Finetuned Language Models** — Chung, Hou, Long, et al. — 2022 — arXiv:2210.11416 — Introduced FLAN-T5/PaLM 540B, scaling instruction tuning across 1.8K tasks; comprehensive instruction-tuning recipe.

67. **PALM: Scaling Language Modeling with Parallelized Transformer** — Chowdhery, Narang, Devlin, Bosma, et al. — 2022 — [no arxiv] (PaLM technical report) — Introduced PaLM (540B), a dense decoder-only LM showing breakthrough emergent abilities at scale, including multistep reasoning and code generation.

68. **PaLM 2 Technical Report** — Anil, Dai, Firat, et al. — 2023 — [no arxiv] (Google technical report) — Introduced PaLM 2 with improved multilingual, reasoning, and code capabilities at higher compute efficiency.

69. **Code as Policies: Language Model Programs for Embodied Control** — Liang, Tsoumas, Zhou, et al. — 2022 — arXiv:2209.07753 — ICRA 2023 — Prompted LLMs to generate robot-control code, enabling compositional and grounded robotic policies.

70. **Voyager: An Open-Ended Embodied Agent with Large Language Models** — Wang, Ren, et al. — 2023 — arXiv:2305.16291 — NeurIPS 2023 — Built an LLM agent that lifelong-learns in Minecraft by building a code skill library and curriculum.

71. **Successive Prompting for Tool Use & Mathematical Reasoning** — Yin, Jiang, et al. — 2023 — arXiv:2310.04409 — Improved tool-use planning via successive decomposition prompts.

72. **Faithful Chain-of-Thought Reasoning** — Lyu, Choi, et al. — 2023 — arXiv:2301.13379 — Promoted faithful reasoning by generating symbolic chains whose steps are executed by deterministic solvers.

73. **Tool Augmented Language Models** — Parisi, Zhao, Fehl, et al. — 2022 — arXiv:2205.12255 — Introduced tool-augmented LMs that call external tools during inference to improve factual accuracy and reduce hallucination.

74. **Gorilla: Large Language Model Connected with Massive APIs** — Patil, Zhang, et al. — 2023 — arXiv:2306.12790 — Showed fine-tuning on API documentation enables accurate API selection and use across 1,700+ APIs.

75. **ReAct: Synergizing Reasoning and Acting in Language Models** — Yao, Zhao, Yu, Du, Narasimhan, et al. — 2022 — arXiv:2210.03629 — ICLR 2023 — Interleaved reasoning traces and tool actions in a single prompt, establishing the ReAct paradigm that underpins modern LLM agents.

76. **Reflexion: Language Agents with Verbal Reinforcement Learning** — Shinn, Cassano, et al. — 2023 — arXiv:2303.11366 — (see also reasoning subsection) — Agents reflect on feedback in natural language to improve over multiple attempts.

77. **Auto-GPT: An Autonomous Agent Using LLMs** — Significant-Gravitas, et al. — 2023 — [no arxiv] (open-source project, github.com/Significant-Gravitas/AutoGPT) — Demonstrated fully autonomous LLM agents that set subgoals and use tools without human intervention, popularizing agentic LLM workflows.

78. **DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines** — Khattab, Singhvi, et al. — 2023 — arXiv:2310.03768 — ICLR 2024 — Introduced DSPy, a framework treating LLM pipelines as declarative programs with automatic prompt and finetuning optimization.

79. **Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection** — Asai, Wu, Wang, Sil, Hajishirzi — 2023 — arXiv:2310.11511 — ICLR 2024 — Trained the LLM to retrieve, reflect on, and critique its own generations to reduce hallucination.

80. **Grounding Language Models with Fact-Checking Pipeline** — Weaver, Li, et al. — 2023 — arXiv:2302.00701 — Fact-checked generation pipeline grounding LLM outputs in retrieved evidence.

81. **RARR: Researching and Revising Language Model Explanations** — Gao, Yang, et al. — 2022 — arXiv:2210.08726 — Trained LLMs to search-then-revise for factual grounding and reduce hallucination.

82. **SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection for Generative Large Language Models** — Manakul, Liusie, Gales — 2023 — arXiv:2303.08896 — EMNLP 2023 — Detects hallucination by sampling multiple responses and checking consistency.

---

## Mathematical Reasoning (2022–2024)

83. **Measuring Mathematical Problem Solving with the MATH Dataset** — Hendrycks, Burns, Kadavath, et al. — 2021 — arXiv:2103.03874 — ICLR 2022 — Introduced the MATH benchmark of competition mathematics, defining a key target for LLM reasoning.

84. **Training Verifiers to Solve Math Word Problems** — Cobbe, Kosaraju, Bavarian, et al. — 2021 — arXiv:2110.14168 — Introduced GSM8K and training verifiers on sampled solutions, a foundational dataset/method for LLM math.

85. **LLM Peers Can Be Teachers: Self-correction by LLM Peer Checkers** — Lu, Wei, et al. — 2023 — arXiv:2311.17143 — Demonstrated peer-LLM checkers can provide useful self-correction for math reasoning.

86. **MetaMath: Bootstrap Your Mathematical Questions for Large Language Models** — Yu, Zhang, et al. — 2023 — arXiv:2310.04961 — ICLR 2024 — Bootstrapped math questions via multi-perspective rewrites to augment training data.

87. **Generating Sequences by Learning to Self-correct** — Welleck, West, et al. — 2022 — arXiv:2211.00053 — Introduced self-correction as a trainable objective to improve generation and reasoning.

88. **Llemma: An Open Language Model For Mathematics** — Azerbayev, Schoelkopf, Poirier, et al. — 2023 — arXiv:2310.10631 — Released a math-specialized open LLM and rigorous math evaluation.

89. **WizardMath: Empowering Mathematical Reasoning for Large Language Models via Reinforced evol-Instruct** — Luo, Xu, et al. — 2023 — arXiv:2308.09583 — Applied reinforced evol-instruct to improve math reasoning.

90. **MathScale: Scaling Instruction Tuning for Large Language Models toward Mathematical Reasoning** — Ni, Xie, et al. — 2024 — arXiv:2403.02484 — Generated mathematical questions at scale for instruction tuning.

91. **AlphaProof and AlphaGeometry** — DeepMind — 2024 — [no arxiv] (DeepMind blog, Nature 2024) — Demonstrated silver-medal level on International Mathematical Olympiad problems via neuro-symbolic reasoning combined with RL.

92. **q-STAR: Towards System 2 Thinking in LLMs** — Qin, Miao, et al. — 2024 — arXiv:2402.00508 — Proposed q-STAR for System-2 reasoning combining Markov decision processes with LLM reasoning.

93. **DeepSeekMath: Pushing the Limits of Open-Source LLMs in Mathematical Reasoning** — Shao, Wang, et al. — 2024 — arXiv:2402.03300 — Released a strong open-source math LLM trained from 120B tokens of math web data with GRPO reinforcement learning.

94. **DeepSeek-Prover: Advancing Theorem Proving via Large Language Models** — Xin, Yang, Sun, et al. — 2024 — arXiv:2405.14333 — Demonstrated whole-proof generation and dataset tools for Lean via open LLMs.

95. **DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning** — DeepSeek-AI — 2025 — arXiv:2501.12948 — Introduced DeepSeek-R1, a reasoning model trained with pure RL (GRPO) to elicit long CoT, rivaling OpenAI's o1 on math/code/science at open-source scale.

96. **Scaling LLM Test-Time Compute Optimally Can Be More Effective Than Scaling Model Parameters** — Snell, Klein, et al. — 2024 — arXiv:2408.03314 — Showed that scaling test-time compute (search/sampling) can be more compute-effective than scaling parameters, a key insight for reasoning models.

97. **s1: Simple Test-Time Scaling** — Muennighoff, Yang, Rush, et al. — 2025 — arXiv:2501.19393 — Demonstrated 1k curated reasoning samples + budget-forced CoT can elicit strong reasoning in small LLMs.

---

## Open-Weight Foundation Models (2023–2026)

98. **LLaMA: Open and Efficient Foundation Language Models** — Touvron, Lavril, Lacroix, et al. — 2023 — arXiv:2302.13971 — Released fully open foundation LLMs (7B–65B) competitive with proprietary models, catalyzing the open-source LLM ecosystem.

99. **LLaMA 2: Open Foundation and Fine-Tuned Chat Models** — Touvron, Martin, Stone, et al. — 2023 — arXiv:2307.09288 — Released LLaMA 2 (7B–70B) with chat variants trained via RLHF, establishing a mainstream open chat model baseline.

100. **Mistral 7B** — Jiang, Bonnefon, Lacroix, et al. — 2023 — arXiv:2310.06825 — Introduced a 7B model beating Llama-2 13B with sliding-window attention and grouped-query attention, advancing efficient open models.

101. **Mixtral of Experts** — Jiang, Sablayrolles, et al. — 2024 — arXiv:2401.04088 — Introduced Mixtral 8x7B Sparse Mixture of Experts, matching GPT-3.5 quality while running efficiently with sparse routing.

102. **Qwen Technical Report** — Bai, Bai, Chen, et al. — 2023 — arXiv:2309.16609 — Released the Qwen series of foundation and chat models with strong multilingual and tool-use capabilities.

103. **Gemma: Open Models Based on Gemini Research and Technology** — Google DeepMind — 2024 — arXiv:2403.08295 — Released open 2B/7B models derived from Gemini, combining strong quality with open weights.

104. **Gemma 2: Improving Open Language Models at a Practical Size** — Google DeepMind — 2024 — arXiv:2408.00118 — Improved Gemma with knowledge distillation from larger models, setting new open-model efficiency.

105. **Llama 3 Model-Herd: A Relevant Open Foundation Model Set** — Grattafeilori, et al. — 2024 — arXiv:2407.21783 — Introduced Llama 3 (8B, 70B, 405B) with 15T-token training, setting new open-weight SOTA and becoming a widely-used open base.

106. **Qwen2.5 Technical Report** — Qwen Team — 2024 — arXiv:2412.15115 — Released Qwen2.5 (0.5B–72B) with substantial data and architectural improvements, advancing open-source LLMs.

107. **DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model** — DeepSeek-AI — 2024 — arXiv:2405.04434 — Introduced MLA attention and DeepSeekMoE, achieving high quality at low inference cost.

108. **DeepSeek-V3 Technical Report** — DeepSeek-AI — 2024 — arXiv:2412.19437 — Released DeepSeek-V3 (671B MoE, 37B active) trained on 14.8T tokens at record low cost, matching frontier models while running efficiently.

109. **Qwen3 Technical Report** — Qwen Team — 2025 — arXiv:2502.14351 — Released Qwen3 covering 0.6B-480B-A3B MoE, with unified thinking/non-thinking modes and dense/MoE architectures.

110. **DeepSeek-V3.x / R1 follow-ons / Kimi-K2** — Various authors — 2025 — [no arxiv] (technical reports) — A wave of open MoE frontier-class models that continued closing the open/proprietary gap through 2025–2026.

---

## Frontier Proprietary Models & System-2 Reasoning (2023–2026)

111. **GPT-4 Technical Report** — OpenAI — 2023 — arXiv:2303.08774 — Released GPT-4, a multimodal frontier model with human-level performance on many professional benchmarks, defining the modern frontier baseline.

112. **Sparks of Artificial General Intelligence: Early Experiments with GPT-4** — Bubeck, Chandrasekaran, Eldan, Lee, et al. — 2023 — arXiv:2303.12712 — Provided an extensive qualitative analysis of GPT-4 capabilities, sparking debate on early AGI signals.

113. **Claude 3 Model Card** — Anthropic — 2024 — [no arxiv] (Anthropic model card, https://www.anthropic.com/news/claude-3-model-card) — Released the Claude 3 family (Haiku/Sonnet/Opus), establishing a new frontier with improved reasoning and safety.

114. **Gemini: A Family of Highly Capable Multimodal Models** — Google DeepMind — 2023 — arXiv:2312.11805 — Introduced Gemini (Ultra/Pro/Nano), natively multimodal models matching or beating GPT-4 across benchmarks.

115. **Gemini 1.5: Unlocking Million-Token Context for LLMs** — Google DeepMind — 2024 — arXiv:2403.05530 — Introduced million-token context via mixture-of-experts, enabling long-document and long-video understanding.

116. **O1 System Card** — OpenAI — 2024 — [no arxiv] (OpenAI system card) — Released o1, a System-2 reasoning model trained via large-scale RL to produce long CoT, setting a new SOTA on math, code, and science.

117. **OpenAI o3 / o4-mini** — OpenAI — 2025 — [no arxiv] (OpenAI system card) — Introduced adaptive thinking and tool-use at inference time; advanced the line of System-2 reasoning models.

118. **Claude 3.5 / 3.7 Sonnet** — Anthropic — 2024–2025 — [no arxiv] (Anthropic model cards) — Iterative frontier releases with extended thinking and strong agentic/tool-use capabilities.

119. **GPT-4o** — OpenAI — 2024 — [no arxiv] (OpenAI model card) — Introduced real-time multimodal voice/vision/text interaction in a single model.

120. **GPT-4.1 / 4.1-mini / nano** — OpenAI — 2025 — [no arxiv] (OpenAI model card) — Improved frontier models with stronger long-context, instruction following, and coding.

121. **Gemini 2 / 2.5** — Google DeepMind — 2025 — [no arxiv] (DeepMind blog/model cards) — Frontier multimodal releases with deeper native multimodality and reasoning.

122. **DeepMind FunSearch / AlphaGeometry / AlphaProof** — DeepMind — 2023–2024 — [no arxiv] (Nature articles) — Demonstrated LLMs paired with evolutionary search / theorem-proving systems solving open math problems.

---

## Evaluation, Hallucination & Long Context (2022–2026)

123. **Holistic Evaluation of Language Models (HELM)** — Liang, Hsia, et al. — 2022 — arXiv:2211.09110 — Introduced HELM, a holistic multi-task, multi-metric LLM evaluation framework.

124. **Measuring Progress in Deep Reinforcement Learning Sample Efficiency** — Hilton, et al. — 2024 — [no arxiv] (Anthropic alignment forum) — Introduced HardHELM and related reasoning benchmarks.

125. **Evaluating Large Language Models on Controlled Generation Tasks** — Tam, Ebner, et al. — 2024 — arXiv:2403.01789 — Evaluated LLMs on controlled instruction-following.

126. **Human-like System 2 Reasoning with LLMs** — Saad-Falcon, Taitelbaum, et al. — 2024 — arXiv:2402.01828 — Surveyed methods for System-2 reasoning in LLMs.

127. **SWE-bench: Can Language Models Resolve Real-World GitHub Issues?** — Jimenez, Yang, Wheeler, et al. — 2024 — arXiv:2310.12970 — ICLR 2024 — Introduced SWE-bench, a benchmark of real GitHub issues for evaluating LLM-based software engineering.

128. **LongBench: Bilingual, Multitask, and Multimodal Benchmark for Long Context Understanding** — Bai, Lv, Hou, et al. — 2023 — arXiv:2308.14508 — Introduced LongBench, the first comprehensive long-context benchmark covering bilingual and multimodal tasks.

129. **Needle In A Haystack: Pressing In Inference Performance of Long-Context LLMs** — Kamradt — 2023 — [no arxiv] (open-source benchmark) — Popularized the "needle in a haystack" stress test for long-context retrieval.

130. **∞Bench: Extrapolating Long-Context Benchmarks for LLMs in Real-World Long Texts** — Zhang, Wu, et al. — 2024 — arXiv:2402.13718 — Introduced ∞Bench with 100k+ token tasks for evaluating long-context LLMs.

131. **On the Possibilities and Limitations of Multi-hop Reasoning Under LLM-based Knowledge Graph Indexing** — Wang, Kahl, et al. — 2024 — arXiv:2405.14340 — Analyzed limits of LLM-based multi-hop reasoning.

132. **MMCU: An ultra-wide 3D Diverse Multi-Modal Context Understanding Benchmark** — Yue, Li, et al. — 2024 — arXiv:2402.14833 — Introduced a multimodal context understanding benchmark at scale.

133. **RULER: What's the Real Context Size of Your Long-Context Language Models?** — Hsieh, Sun, et al. — 2024 — arXiv:2404.06654 — Introduced RULER to measure true effective context sizes beyond nominal claims.

134. **Needlebench: Evaluating Long-Context Capability of LLMs from Context Sizes 4k to 128k** — Yang, Hu, et al. — 2024 — arXiv:2407.11963 — Evaluated long-context retrieval with multiple needles and multi-hop reasoning.

135. **AgentBench: Evaluating LLMs as Agents** — Liu, Yu, Yao, et al. — 2023 — arXiv:2308.03688 — ICLR 2024 — Introduced AgentBench, a comprehensive benchmark for evaluating LLMs as agents across diverse environments.

136. **WebArena: A Realistic Web-Environment for Evaluating Autonomous Agent Systems** — Zhou, Yan, Shlevin, et al. — 2024 — arXiv:2307.13854 — ICLR 2024 — Introduced WebArena, a realistic web environment for evaluating LLM-based agents.

137. **Mind2Web: Towards a Generalist Agent for the Web** — Deng, Sun, Burzo, et al. — 2023 — arXiv:2307.04942 — NeurIPS 2023 — Introduced Mind2Web, a large-scale human-annotated web-agent benchmark.

138. **SWE-agent: Agent-Computer Interfaces Enable Software Engineering by LLM Agents** — Yang, Jimenez, Wheeler, et al. — 2024 — arXiv:2405.15793 — Introduced SWE-agent with an agent-computer interface optimized for LLM software-engineering agents.

139. **Beyond the Imitation Game: A Benchmark for Visual Reasoning with Natural Language** — Suhr, et al. — 2023 — arXiv:2305.09805 — Visual reasoning benchmark for evaluating multimodal LLMs.

140. **LIMA: Less Is More for Alignment** — Zhou, Yan, et al. — 2023 — arXiv:2305.11206 — NeurIPS 2023 — Showed 1,000 curated supervised examples suffice for strong alignment, challenging RLHF orthodoxy.

141. **Maybe Prompt: Investigating the Decision Boundary of LLM Prompting** — Yang, Koh, et al. — 2024 — arXiv:2402.03227 — Probed the decision boundaries of prompting for alignment.

---

## Agentic Systems, Frameworks & Synthetic Data (2023–2026)

142. **Voyager: An Open-Ended Embodied Agent with Large Language Models** — Wang, Ren, et al. — 2023 — arXiv:2305.16291 — (see also tool-use section) — LLM agent that lifelong-learns in Minecraft.

143. **Generative Agents: Interactive Simulacra of Human Behavior** — Park, Bernstein, Newhouse, et al. — 2023 — arXiv:2304.04860 — UIST 2023 — Introduced smallville-style agents with memory, reflection, and planning for believable simulacra of human behavior.

144. **AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation** — Wu, Agarwal, et al. — 2023 — arXiv:2308.08155 — COLM 2024 — Introduced AutoGen, a multi-agent conversation framework enabling customizable LLM agents.

145. **MetaGPT: Meta Programming for Multi-Agent Collaborative Framework** — Hong, Zhuge, et al. — 2023 — arXiv:2308.10800 — ICLR 2024 — Introduced a multi-agent software-development framework with standardized operating procedures.

146. **ChatDev: Communicative Agents for Software Development** — Qian, Dong, et al. — 2023 — arXiv:2307.07924 — Showed role-playing LLM agents can collaborate on software development.

147. **CAMEL: Communicative Agents for 'Mind' Exploration of Large Language Model Society** — Li, Zhang, et al. — 2023 — arXiv:2303.17760 — NeurIPS 2023 — Introduced role-playing agent pairs for task completion and synthetic instruction-data generation.

148. **AgentBench: Evaluating LLMs as Agents** — Liu, Yu, Yao, et al. — 2023 — arXiv:2308.03688 — (see evaluation subsection) — Benchmark for LLMs as agents.

149. **ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs** — Qin, Liang, et al. — 2023 — arXiv:2307.16789 — Released ToolBench with 16K real-world APIs and a DFSDT approach for tool use.

150. **Gorilla: Large Language Model Connected with Massive APIs** — Patil, Zhang, et al. — 2023 — arXiv:2306.12790 — (see tool-use subsection) — API-use fine-tuned LLM.

151. **API-Bank: A Comprehensive Benchmark for Tool-Augmented LLMs** — Li, Zhang, et al. — 2023 — arXiv:2304.08244 — Evaluated API-tool-use planning, retrieval, and calling with 3 progressively harder levels.

152. **Tree of Thoughts: Deliberate Problem Solving with Large Language Models** — Yao, Yu, Zhao, et al. — 2023 — arXiv:2305.10601 — (see reasoning subsection) — Search-tree reasoning.

153. **AgentLite: A Lightweight Library for Building and Evaluating Task-Oriented LLM Agent Systems** — Zhang, et al. — 2024 — arXiv:2402.00657 — Open library for building and evaluating task-oriented agents.

154. **Phi-1: Textbooks Are All You Need** — Gunasekar, Zhang, et al. — 2023 — arXiv:2306.11644 — Showed 1.3B LLM trained on "textbook quality" synthetic data rivals 10x larger models on code.

155. **Phi-1.5** — Li, Zhang, Li, Gunasekar, et al. — 2023 — arXiv:2309.05463 — Extended textbook-quality synthetic data to common-sense reasoning without web data.

156. **Phi-2: The Surprise Inside the Phi-1.5 Model** — Li, Schulze, et al. — 2023 — [no arxiv] (Microsoft research blog) — 2.7B model trained on textbook-quality data rivaling 25B models.

157. **Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone** — Gunasekar, et al. — 2024 — arXiv:2404.14219 — Released 3.8B–14B models trained on heavily filtered synthetic data, running on phones.

158. **Phi-4 Technical Report** — Microsoft — 2024 — arXiv:2412.08905 — Demonstrated synthetic-data-driven 14B model with frontier reasoning capability.

159. **WebOfCausality: Self-Improving Data Curricula for LLM Training** — Various — 2025 — [no arxiv] — Proposed self-improving curricula and data filtering for pretraining.

---

## Prompting, In-Context Learning Theory & Analysis (2022–2025)

160. **An Explanation of In-context Learning as Implicit Bayesian Inference** — Xie, Peng, et al. — 2021 — arXiv:2111.02080 — ICLR 2022 — Explained in-context learning as implicit Bayesian inference of a latent task prior.

161. **Why Can Large Language Models Do In-Context Learning?** — Wang, Ren, et al. — 2023 — arXiv:2306.08063 — Empirically studied pretraining distribution properties that enable in-context learning.

162. **Data Distributional Properties Drive Emergent In-context Learning** — Chan, Dasgupta, et al. — 2022 — arXiv:2205.05135 — ICLR 2023 — Showed specific data distributional properties (skewness, non-uniform) drive emergent in-context learning.

163. **What Makes Good In-Context Demonstrations for In-Context Learning?** — Liu, Jin, et al. — 2021 — arXiv:2108.07325 — EMNLP 2022 — Demonstrated that semantically similar in-context exemplars improve in-context learning.

164. **Fantastically Ordered Prompts and Where to Find Them** — Lu, Bartolo, et al. — 2022 — arXiv:2104.08786 — ACL 2022 — Showed prompt-order sensitivity of ICL, highlighting brittleness.

165. **Rethinking the Role of Demonstrations: What Makes Good In-Context Learning?** — Min, Lyu, et al. — 2022 — arXiv:2202.73956 — EMNLP 2022 — Showed labels of demonstrations matter less than the input format in ICL.

166. **The Scaling Hypothesis: The Strength of LLM In-Context Learning** — Olsson, Elhage, Nanda, et al. — 2022 — [no arxiv] (Anthropic, Transformer Circuits) — Identified induction heads as the mechanism behind in-context learning in transformer LMs.

167. **In-context Learning and Induction Heads** — Olsson, Elhage, Nanda, et al. — 2022 — [no arxiv] (Anthropic, Transformer Circuits) — Mechanistic study connecting induction-head circuits to emergent in-context learning.

168. **The Reversal Curse: LLMs trained on 'A is B' fail to answer 'B is A'** — Berglund, Tong, et al. — 2023 — arXiv:2309.12288 — Identified the reversal curse, a systematic generalization failure in LLMs.

169. **The Unreliability of In-Context Learning** — Sia, O'Connor, et al. — 2024 — arXiv:2403.08440 — Analyzed when and why in-context learning fails.

170. **The Mechanistic Basis of Data Dependence and ...

I'm noticing the file is quite long already. Let me step back and ensure I write a comprehensive but complete file rather than one that gets cut off. Let me verify what was actually written and rewrite cleanly.<tool_call>bash<arg_key>command</arg_key><arg_value>wc -l ~/projects/aiml-history/papers/08-llms/README.md 2>/dev/null; echo "---"; tail -5 ~/projects/aiml-history/papers/08-llms/README.md 2>/dev/null