# 07 — Transformers & Architecture Evolution (2017–2026)

A comprehensive bibliography of landmark papers on the Transformer architecture and its evolution, covering encoder models (BERT family), decoder models (GPT family, LLaMA, Mistral), encoder-decoder models (T5, BART), efficient transformers (Reformer, Linformer, Performer, Longformer, BigBird), mixture of experts (Switch Transformer, GShard), sparse attention, rotary embeddings, FlashAttention, grouped-query attention, and modern open LLMs.

Papers are sorted chronologically within each era.

---

## 2017: The Transformer

### 1. Attention Is All You Need (2017)
- **Authors:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin
- **Year:** 2017
- **Venue:** NeurIPS
- **ID:** arXiv:1706.03762
- **Summary:** Introduced the Transformer, the first sequence transduction model based entirely on self-attention, dispensing with recurrence and convolutions. Scaled dot-product attention with multi-head attention and positional encodings became the foundation for all subsequent architectures.

### 2. Convolutional Sequence to Sequence Learning (2017, ConvS2S)
- **Authors:** Jonas Gehring, Michael Auli, David Grangier, Denis Yarats, Yann N. Dauphin
- **Year:** 2017
- **Venue:** ICML
- **ID:** arXiv:1705.03122
- **Summary:** Introduced an all-convolutional seq2seq model with multi-step attention that rivaled early transformers, providing the key comparison baseline that motivated self-attention's superiority for parallelism.

### 3. Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer (2017)
- **Authors:** Noam Shazeer, Azalia Mirhoseini, Krzysztof Maziarz, Andy Davis, Quoc V. Le, Geoffrey Hinton, Jeff Dean
- **Year:** 2017
- **Venue:** ICLR
- **ID:** arXiv:1701.06538
- **Summary:** Introduced sparsely-gated mixture-of-experts (MoE) layers with a learned gating network, enabling models with thousands of experts and trillion-parameter-scale capacity while maintaining computational efficiency.

---

## 2018: BERT & GPT — The Pre-training Revolution

### 4. Generating Wikipedia by Summarizing Long Sequences (2018)
- **Authors:** Peter J. Liu, Yuanzhong Xu, Wei Liu, et al.
- **Year:** 2018
- **Venue:** ICLR
- **ID:** arXiv:1801.10198
- **Summary:** Applied encoder-decoder transformers to abstractive summarization of long documents, an early demonstration of transformer-based generation at scale.

### 5. Improving Language Understanding by Generative Pre-Training (GPT-1) (2018)
- **Authors:** Alec Radford, Karthik Narasimhan, Tim Salimans, Ilya Sutskever
- **Year:** 2018
- **Venue:** OpenAI Technical Report
- **ID:** [no arxiv]
- **Summary:** Introduced GPT, a 12-layer decoder-only transformer pre-trained on unlabeled text and fine-tuned for downstream tasks, demonstrating that generative pre-training transfers to NLU tasks.

### 6. Deep Contextualized Word Representations (ELMo) (2018)
- **Authors:** Matthew Peters, Mark Neumann, Mohit Iyyer, Matt Gardner, Christopher Clark, Kenton Lee, Luke Zettlemoyer
- **Year:** 2018
- **Venue:** NAACL
- **ID:** arXiv:1802.05365
- **Summary:** Introduced ELMo, deep contextualized word representations from bidirectional language models, a precursor to BERT that demonstrated the power of pre-trained contextual representations.

### 7. Universal Language Model Fine-tuning for Text Classification (ULMFiT) (2018)
- **Authors:** Jeremy Howard, Sebastian Ruder
- **Year:** 2018
- **Venue:** ACL
- **ID:** arXiv:1801.06146
- **Summary:** Introduced ULMFiT, a three-phase transfer learning method (general-domain LM pre-training, target-domain fine-tuning, classifier fine-tuning) with discriminative fine-tuning and slanted triangular learning rates, pioneering transfer learning for NLP.

### 8. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (2019)
- **Authors:** Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova
- **Year:** 2019
- **Venue:** NAACL
- **ID:** arXiv:1810.04805
- **Summary:** Introduced BERT, a bidirectionally pre-trained transformer using masked language modeling (MLM) and next sentence prediction (NSP), achieving state-of-the-art on 11 NLP tasks and launching the pre-trained model era.

### 9. Language Models are Unsupervised Multitask Learners (GPT-2) (2019)
- **Authors:** Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever
- **Year:** 2019
- **Venue:** OpenAI Technical Report
- **ID:** [no arxiv]
- **Summary:** Introduced GPT-2, a 1.5B parameter decoder-only transformer trained on WebText, demonstrating strong zero-shot performance on multiple NLP tasks without task-specific fine-tuning — a milestone for unsupervised multi-task learning.

---

## 2019: Pre-training Diversification

### 10. Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (2019)
- **Authors:** Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan Salakhutdinov
- **Year:** 2019
- **Venue:** ACL
- **ID:** arXiv:1901.02860
- **Summary:** Introduced segment-level recurrence and relative positional encodings, enabling language modeling with context beyond a fixed-length window — a key innovation for long-context transformers.

### 11. XLNet: Generalized Autoregressive Pretraining for Language Understanding (2019)
- **Authors:** Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov, Quoc V. Le
- **Year:** 2019
- **Venue:** NeurIPS
- **ID:** arXiv:1906.08237
- **Summary:** Introduced XLNet, a generalized autoregressive pre-training objective modeling all permutations of the factorization order, combining the bidirectional context of BERT with the autoregressive generation of GPT.

### 12. RoBERTa: A Robustly Optimized BERT Pretraining Approach (2019)
- **Authors:** Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov
- **Year:** 2019
- **Venue:** arXiv preprint
- **ID:** arXiv:1907.11692
- **Summary:** Showed that BERT was significantly undertrained; improved the pre-training recipe (removing NSP, training longer with more data, larger batches, dynamic masking) to set new state-of-the-art results.

### 13. ALBERT: A Lite BERT for Self-supervised Learning of Language Representations (2020)
- **Authors:** Zhenzhong Lan, Mingda Chen, Sebastian Goodman, Kevin Gimpel, Piyush Sharma, Radu Soricut
- **Year:** 2020
- **Venue:** ICLR
- **ID:** arXiv:1909.11942
- **Summary:** Introduced parameter reduction techniques (factorized embedding parameterization, cross-layer parameter sharing) reducing memory footprint while improving model scalability, and replaced NSP with sentence order prediction.

### 14. DistilBERT, a distilled version of BERT (2020)
- **Authors:** Victor Sanh, Lysandre Debut, Julien Chaumond, Thomas Wolf
- **Year:** 2020
- **Venue:** NeurIPS Workshop on Energy Efficient Machine Learning
- **ID:** arXiv:1910.01108
- **Summary:** Distilled BERT via knowledge distillation into a 6-layer model that is 40% smaller, 60% faster, and retains ~95% of BERT's performance — widely deployed in production for efficient inference.

### 15. TinyBERT: Distilling BERT for Natural Language Understanding (2020)
- **Authors:** Xiaoqi Jiao, Yichun Yin, Lifeng Shang, Xin Jiang, Xiao Chen, Linlin Li, Fang Wang, Qun Liu
- **Year:** 2020
- **Venue:** EMNLP Findings
- **ID:** arXiv:1909.10351
- **Summary:** Introduced a two-stage knowledge distillation approach transferring both attention and hidden-state representations from BERT to a smaller student model.

### 16. ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators (2020)
- **Authors:** Kevin Clark, Minh-Thang Luong, Quoc V. Le, Christopher D. Manning
- **Year:** 2020
- **Venue:** ICLR
- **ID:** arXiv:2003.10555
- **Summary:** Introduced the replaced token detection (RTD) pre-training task, where a generator corrupts tokens and a discriminator identifies them — more compute-efficient than MLM, achieving better results with less compute.

### 17. SpanBERT: Improving Pre-training by Representing and Predicting Spans (2020)
- **Authors:** Mandar Joshi, Danqi Chen, Yinhan Liu, Daniel S. Weld, Luke Zettlemoyer, Omer Levy
- **Year:** 2020
- **Venue:** TACL
- **ID:** arXiv:1907.10529
- **Summary:** Extended BERT with a span-based pre-training objective that masks contiguous spans and trains the model to predict the entire span, improving performance on span-selection tasks.

### 18. ERNIE: Enhanced Language Representation with Informative Entities (2019)
- **Authors:** Zhengyan Zhang, Xu Han, Zhiyuan Liu, Xin Jiang, Maosong Sun, Qun Liu
- **Year:** 2019
- **Venue:** ACL
- **ID:** arXiv:1905.07129
- **Summary:** Injected knowledge graph entity information into the pre-training process, improving the model's ability to leverage factual knowledge for NLU tasks.

### 19. ERNIE 2.0: A Continual Pre-training Framework for Language Understanding (2019)
- **Authors:** Yu Sun, Shuohuan Wang, Yukun Li, Shikun Feng, Hao Tian, Hua Wu, Haifeng Wang
- **Year:** 2020
- **Venue:** AAAI
- **ID:** arXiv:1907.12412
- **Summary:** Introduced a continual pre-training framework that incrementally learns multiple tasks via a multi-task learning paradigm, improving on BERT and XLNet.

### 20. StructBERT: Incorporating Language Structures into Pre-training for Deep Language Understanding (2019)
- **Authors:** Wei Wang, Bin Bi, Ming Yan, et al.
- **Year:** 2019
- **Venue:** arXiv preprint
- **ID:** arXiv:1908.04577
- **Summary:** Incorporated word and sentence-level linguistic structure into BERT pre-training, predicting word ordering and sentence ordering to learn structural information.

### 21. T5: Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (2020)
- **Authors:** Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu
- **Year:** 2020
- **Venue:** JMLR
- **ID:** arXiv:1910.10683
- **Summary:** Introduced T5 (Text-to-Text Transfer Transformer), framing every NLP task as a text-to-text problem and training on a massive multi-task mixture, establishing a unified paradigm for transfer learning.

### 22. BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension (2020)
- **Authors:** Mike Lewis, Yinhan Liu, Naman Goyal, Marjan Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Veselin Stoyanov, Luke Zettlemoyer
- **Year:** 2020
- **Venue:** ACL
- **ID:** arXiv:1910.13461
- **Summary:** Introduced BART, a seq2seq model pre-trained with denoising autoencoding (various text corruption functions), excelling at generation tasks while being competitive on comprehension.

### 23. UniLM: A Unified Framework for Natural Language Understanding and Generation (2019)
- **Authors:** Li Dong, Nan Yang, Wenhui Wang, Furu Wei, Xiaodong Liu, Yu Wang, Jianfeng Gao, Ming Zhou, Hsiao-Wuen Hon
- **Year:** 2019
- **Venue:** NeurIPS
- **ID:** arXiv:1905.03197
- **Summary:** Introduced UniLM, a unified pre-training framework combining unidirectional, bidirectional, and seq2seq LM objectives within a single Transformer for both NLU and NLG.

### 24. MASS: Masked Sequence to Sequence Pre-training for Language Generation (2019)
- **Authors:** Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu
- **Year:** 2019
- **Venue:** ICML
- **ID:** arXiv:1905.02450
- **Summary:** Introduced MASS, a masked seq2seq pre-training method where the encoder receives a sentence with masked fragments and the decoder predicts the full sentence.

### 25. Language Models are Few-Shot Learners (GPT-3) (2020)
- **Authors:** Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, et al.
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2005.14165
- **Summary:** Introduced GPT-3 (175B parameters), demonstrating that scaling enables strong few-shot performance via in-context learning without gradient updates — a paradigm shift showing emergent capabilities from scale.

### 26. Scaling Laws for Neural Language Models (2020)
- **Authors:** Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B. Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, Dario Amodei
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2001.08361
- **Summary:** Established smooth power-law scaling for LM loss as a function of model size, dataset size, and compute, providing a foundational framework for predicting and planning large-model training.

---

## 2020: Efficient Transformers & Long-Context

### 27. Reformer: The Efficient Transformer (2020)
- **Authors:** Nikita Kitaev, Łukasz Kaiser, Anselm Levskaya
- **Year:** 2020
- **Venue:** ICLR
- **ID:** arXiv:2001.04451
- **Summary:** Introduced Reformer, reducing the memory complexity of attention using locality-sensitive hashing (LSH) attention and reversible layers, enabling processing of context lengths up to 64k on a single GPU.

### 28. Linformer: Self-Attention with Linear Complexity (2020)
- **Authors:** Sinong Wang, Belinda Z. Li, Madian Khabsa, Han Fang, Hao Ma
- **Year:** 2020
- **Venue:** arXiv preprint
- **ID:** arXiv:2006.04768
- **Summary:** Proposed a low-rank approximation of self-attention matrices that reduces the self-attention complexity from O(n²) to O(n) in both time and space, while preserving performance.

### 29. Performer: Rethinking Attention with Performers (2020)
- **Authors:** Krzysztof Choromanski, Valerii Likhosherstov, David Dohan, et al.
- **Year:** 2020
- **Venue:** ICLR
- **ID:** arXiv:2009.14794
- **Summary:** Introduced Fast Attention Via Positive Orthogonal Random Features (FAVOR+), approximating attention kernels with random features to achieve unbiased, near-linear time attention.

### 30. Longformer: The Long-Document Transformer (2020)
- **Authors:** Iz Beltagy, Matthew E. Peters, Arman Cohan
- **Year:** 2020
- **Venue:** arXiv preprint
- **ID:** arXiv:2004.05150
- **Summary:** Introduced Longformer, combining local windowed attention with a small number of global attention tokens to handle sequences up to 4096 tokens, making transformers practical for long documents.

### 31. BigBird: Transformers for Longer Sequences (2020)
- **Authors:** Manzil Zaheer, Guru Guruganesh, Kumar Avinava Dubey, Joshua Ainslie, Chris Alberti, Santiago Ontañón, Philip Pham, Anirudh Ravula, Qifan Wang, Li Yang, Amr Ahmed
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2007.14062
- **Summary:** Introduced BigBird, a sparse attention mechanism combining random, window, and global tokens that is a universal approximator of sequence functions and Turing complete, extending to 8x longer sequences.

### 32. ETC: Encoding Long and Structured Inputs in Transformers (2020)
- **Authors:** Joshua Ainslie, Travis Lehman, Peter Alberti, et al.
- **Year:** 2020
- **Venue:** EMNLP
- **ID:** arXiv:2004.08483
- **Summary:** Introduced ETC (Encoders Taking in Context), a variant of BigBird that adds structured inputs and a CPC pre-training objective for long and structured document understanding.

### 33. Generating Long Sequences with Sparse Transformers (2019)
- **Authors:** Rewon Child, Scott Gray, Alec Radford, Ilya Sutskever
- **Year:** 2019
- **Venue:** arXiv preprint
- **ID:** arXiv:1904.10509
- **Summary:** Introduced Sparse Transformers, factorizing attention into strided and fixed patterns to reduce O(n²) complexity, enabling generation of 16k-token sequences for images and text.

### 34. Set Transformer: A Framework for Attention-based Permutation-Invariant Neural Networks (2019)
- **Authors:** Juho Lee, Yoonho Lee, Jungtaek Kim, et al.
- **Year:** 2019
- **Venue:** ICML
- **ID:** arXiv:1810.00825
- **Summary:** Introduced Induced Set Attention Blocks (ISAB) for permutation-invariant attention, reducing computational complexity for set-structured inputs — foundational for efficient attention patterns.

### 35. Longformer-Encoder-Decoder (LED) / LongT5 (2021)
- **Authors:** Mandy Guo, Joshua Ainslie, David Uthus, Shuoqi Hu, Sergio Bermudez, Maarten Bosma, Philip Pham, Eyal Ofek, et al.
- **Year:** 2022
- **Venue:** ICLR
- **ID:** arXiv:2110.08266
- **Summary:** Introduced LongT5, combining transient-global attention with the T5 text-to-text framework, extending long-context capabilities to encoder-decoder generation tasks like summarization.

### 36. Efficient Transformers: A Survey (2020)
- **Authors:** Yi Tay, Mostafa Dehghani, Dara Bahri, Donald Metzler
- **Year:** 2020
- **Venue:** arXiv preprint
- **ID:** arXiv:2009.06732
- **Summary:** A comprehensive survey and taxonomy of efficient transformer architectures (sparse, linear, low-rank, memory-based), providing a unified framework for understanding the landscape.

### 37. Synthesizer: Rethinking Self-Attention in Transformer Models (2021)
- **Authors:** Yi Tay, Dara Bahri, Luke Metz, et al.
- **Year:** 2021
- **Venue:** arXiv preprint
- **ID:** arXiv:2005.00743
- **Summary:** Proposed Synthesizer, replacing dot-product self-attention with factored, random, or dense attention functions, showing that the standard QK^T formulation is not strictly necessary.

### 38. Linear Transformer (2020)
- **Authors:** Angelos Katharopoulos, Apoorv Singh, et al.
- **Year:** 2020
- **Venue:** ICML
- **ID:** arXiv:2006.16236
- **Summary:** Showed that by replacing the softmax non-linearity with a kernel feature map, the attention computation can be rearranged to achieve linear time complexity, enabling efficient linearized attention.

### 39. Pay Less Attention with Lightweight and Dynamic Convolutions (2019)
- **Authors:** Felix Wu, Angela Fan, Alexei Baevski, Yann Dauphin, Michael Auli
- **Year:** 2019
- **Venue:** ICLR
- **ID:** arXiv:1901.10430
- **Summary:** Introduced dynamic convolutions as an efficient alternative to self-attention, reducing quadratic complexity while matching transformer performance on translation tasks.

### 40. Funnel-Transformer: Filtering out Sequential Redundancy for Efficient Language Processing (2020)
- **Authors:** Zihao Dai, Zhenhao Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan Salakhutdinov
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2006.06922
- **Summary:** Proposed gradually reducing sequence length in deeper layers (funneling), recovering full resolution only for final prediction — reducing computation while improving or matching performance.

### 41. DeLighT: Deep and Light-Weight Transformer (2021)
- **Authors:** Sachin Mehta, Marjan Ghazvininejad, et al.
- **Year:** 2021
- **Venue:** ICML
- **ID:** arXiv:2008.00671
- **Summary:** Proposed DeLighT, replacing standard transformer blocks with a deep-and-light transformer using group linear transformations, reducing parameters and improving efficiency.

### 42. Nyströmformer: A Nyström-Based Algorithm for Approximating Self-Attention (2021)
- **Authors:** Yunyang Xiong, Zhanpeng Hu, et al.
- **Year:** 2021
- **Venue:** AAAI
- **ID:** arXiv:2102.03902
- **Summary:** Applied Nyström matrix approximation to self-attention, reducing both memory and computation to linear complexity while maintaining competitive performance.

---

## 2020–2021: Mixture of Experts

### 43. GShard: Scaling Giant Models with Conditional Computation (2020)
- **Authors:** Dmitry Lepikhin, HyoukJoong Lee, Yuanzhong Xu, et al.
- **Year:** 2020
- **Venue:** ICLR
- **ID:** arXiv:2006.16668
- **Summary:** Introduced GShard, scaling MoE models to 600B parameters with a top-2 gating mechanism and distributed sharding, improving multilingual translation at scale via conditional computation.

### 44. Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity (2029)
- **Authors:** William Fedus, Barret Zoph, Noam Shazeer
- **Year:** 2022
- **Venue:** JMLR
- **ID:** arXiv:2101.03961
- **Summary:** Introduced Switch Transformer, using a simplified top-1 routing MoE that reduces communication costs and improves training stability, achieving 4-7x speedup over dense T5.

### 45. GLaM: Efficient Scaling of a Billion Parameter Language Model with Mixture-of-Experts (2021)
- **Authors:** Nan Du, Yanping Huang, Andrew M. Dai, et al.
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2112.06905
- **Summary:** Trained a 1.2T parameter MoE model (GLaM) with 64 experts, achieving better few-shot performance than GPT-3 while using only 1/3 of the training energy.

### 46. ST-MoE: Designing Stable and Transferable Sparse Expert Models (2022)
- **Authors:** Barret Zoph, Irwan Bello, et al.
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2202.08906
- **Summary:** Studied and improved MoE training stability (router z-loss, expert freezing) and transferability, achieving strong results on downstream tasks including SuperGLUE and reasoning.

### 48. FastMoE: A Fast Mixture of Expert Training System (2021)
- **Authors:** Junyou He, et al.
- **Year:** 2021
- **Venue:** arXiv preprint
- **ID:** arXiv:2103.13262
- **Summary:** Introduced FastMoE, a distributed MoE training system enabling easy integration of MoE layers into existing transformer models with PyTorch.

### 49. DeepSpeed-MoE: Advancing Mixture-of-Experts Inference and Training (2022)
- **Authors:** Ammar Ahmad Awan, et al.
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2201.05596
- **Summary:** Introduced DeepSpeed-MoE, a system for training and inferring with MoE models, including PR-MoE and flexible expert grouping for efficient serving.

### 50. Brainformers: Trading FLOPs for Effective Capacity (2023)
- **Authors:** Yanqi Zhou, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2306.11557
- **Summary:** Combined MoE with non-linear blocks, varying attention and FFN layers to achieve better quality per FLOP than standard MoE.

---

## 2020–2021: Positional Encodings

### 51. RoFormer: Enhanced Transformer with Rotary Position Embedding (RoPE) (2021)
- **Authors:** Jianlin Su, Yu Lu, Shengfeng Pan, Bo Wen, Yunfeng Liu
- **Year:** 2021
- **Venue:** arXiv preprint (later Neurocomputing)
- **ID:** arXiv:2104.09864
- **Summary:** Introduced Rotary Position Embedding (RoPE), encoding absolute positional information via rotation in complex space, with the key property of naturally incorporating relative position — adopted in nearly all modern open LLMs.

### 52. Train Short, Test Long: Attention with Linear Biases (ALiBi) (2022)
- **Authors:** Ofir Press, Noah A. Smith, Mike Lewis
- **Year:** 2022
- **Venue:** ICLR
- **ID:** arXiv:2108.12409
- **Summary:** Introduced ALiBi (Attention with Linear Biases), a positional encoding that biases attention by distance without adding positional embeddings, enabling extrapolation to longer sequences at inference than seen in training.

### 53. No Positional Encoding (NoPE) (2023)
- **Authors:** Kaj Bostrom, et al.
- **Year:** 2023
- **Venue:** arXiv preprint (EMNLP)
- **ID:** arXiv:2305.16871
- **Summary:** Showed that decoder-only transformers without explicit positional encoding can match or exceed RoPE/ALiBi on long-context tasks, due to implicit positional information from causal masking.

### 54. Length Extrapolation of Self-Attention via NTK-Aware Interpolation (2023, YaRN)
- **Authors:** Bowen Peng, Jeffrey Su, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2309.00071
- **Summary:** Introduced YaRN, a method for extending the context window of RoPE-based LLMs via NTK-aware interpolation of frequency bases, enabling 4x+ context extension with minimal fine-tuning.

### 55. Position Interpolation (2023)
- **Authors:** Shouyong Chen, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2306.15595
- **Summary:** Introduced position interpolation, linearly scaling RoPE positions to extend context windows without retraining, enabling LLaMA models to handle 4x-32x longer contexts.

### 56. Two Stones Hit One Bird: A Linearly Sliding Position Encoding (2023, LongRoPE)
- **Authors:** Bowen Peng, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2402.13753
- **Summary:** Introduced LongRoPE, a progressive extension method for RoPE that achieves 2M token context windows via 2D position interpolation and evolutionary search.

---

## 2021–2023: Scaling Laws & Training Efficiency

### 57. Training Compute-Optimal Large Language Models (2022, Chinchilla)
- **Authors:** Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, Elena Buchatskaya, Trevor Cai, Eliza Rutherford, et al.
- **Year:** 2022
- **Venue:** NeurIPS
- **ID:** arXiv:2203.15556
- **Summary:** Found that existing LLMs were undertrained relative to compute, establishing the Chinchilla scaling law: for compute-optimal training, model size and data should be scaled equally (~20 tokens per parameter), correcting prior guidance.

### 58. Scaling Down to Scale Up: A Cost-Benefit Analysis of Decoder-Only Language Model Training (2023, "Scaling Laws for Data-Constrained Training")
- **Authors:** Niklas Muennighoff, Alexander M. Rush, et al.
- **Year:** 2023
- **Venue:** arXiv preprint (EMNLP)
- **ID:** arXiv:2305.16264
- **Summary:** Derived scaling laws for data-constrained training, showing that repeating data up to 4 epochs is beneficial, and computing optimal allocation between fresh data, repetition, and code data.

### 59. Scaling Laws for Multilingual Neural Machine Translation (2023)
- **Authors:** Marco Gaido, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2305.15735
- **Summary:** Derived scaling laws specific to multilingual NMT, showing that optimal data allocation differs across high and low-resource languages.

### 61. The Pile: An 880GB Open-Source Language Modeling Dataset (2020)
- **Authors:** Leo Gao, Stella Biderman, Sid Black, Laurence Golding, Travis Hoppe, Charles Foster, et al.
- **Year:** 2020
- **Venue:** arXiv preprint
- **ID:** arXiv:2101.00027
- **Summary:** Introduced The Pile, an 880GB diverse pre-training dataset of 22 sub-corpora, becoming a standard pre-training corpus for open LLMs like GPT-J, GPT-Neo, and Pythia.

### 62. C4: Colossal Clean Crawled Corpus (in T5 paper) (2020)
- **Authors:** Colin Raffel, et al. (part of T5)
- **Year:** 2020
- **Venue:** JMLR (T5 appendix)
- **ID:** arXiv:1910.10683
- **Summary:** Introduced C4 (Colossal Clean Crawled Corpus), a 750GB cleaned CommonCrawl corpus used for T5 pre-training, widely reused across open LLMs.

---

## 2021–2023: DeBERTa and Advanced Encoder Models

### 63. DeBERTa: Decoding-enhanced BERT with Disentangled Attention (2021)
- **Authors:** Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen
- **Year:** 2021
- **Venue:** ICLR
- **ID:** arXiv:2006.03654
- **Summary:** Introduced DeBERTa, using disentangled attention that encodes content and position separately and computes attention via their disentangled interactions, plus an enhanced mask decoder — surpassing human performance on SuperGLUE.

### 64. DeBERTaV3: Improving DeBERTa using ELECTRA-Style Pre-Training (2021)
- **Authors:** Pengcheng He, Jianfeng Gao
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2111.09543
- **Summary:** Combined DeBERTa's disentangled attention with ELECTRA's replaced token detection pre-training, improving efficiency and performance on NLU benchmarks.

### 66. LUKE: Deep Contextualized Language Representations with Entity-Aware Self-Attention (2021)
- **Authors:** Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda, Yuji Matsumoto
- **Year:** 2020
- **Venue:** EMNLP
- **ID:** arXiv:2010.01057
- **Summary:** Extended RoBERTa with entity-aware self-attention, treating words and entities as separate tokens, improving entity-related tasks like NER, RE, and entity typing.

### 67. Megatron-LM: Efficient Model Parallel Deep Learning Training (2019)
- **Authors:** Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley, Jared Casper, Bryan Catanzaro
- **Year:** 2019
- **Venue:** arXiv preprint
- **ID:** arXiv:1909.08053
- **Summary:** Introduced Megatron-LM, a model-parallel approach for training large transformers (up to 8.3B parameters) by partitioning attention heads and FFN matrices across GPUs.

### 68. Megatron-Turing NLG 530B: Training and Deployment (2021)
- **Authors:** Deepak Narayanan, et al.
- **Year:** 2021
- **Venue:** arXiv preprint
- **ID:** arXiv:2201.11990
- **Summary:** Combined 3D parallelism (data, tensor, pipeline) to train the 530B parameter MT-NLG model, the largest dense model of its time, demonstrating efficient large-scale training.

---

## 2022–2023: Efficient Attention — FlashAttention and GQA

### 70. FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (2022)
- **Authors:** Tri Dao, Daniel Y. Fu, Stefano Ermon, Atri Rudra, Christopher Ré
- **Year:** 2022
- **Venue:** NeurIPS
- **ID:** arXiv:2205.03561
- **Summary:** Introduced FlashAttention, an exact attention algorithm that minimizes HBM (high-bandwidth memory) reads/writes via tiling and recomputation, achieving 2-4x speedup and enabling longer context without approximation.

### 71. FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning (2023)
- **Authors:** Tri Dao
- **Year:** 2023
- **Venue:** arXiv preprint (ICLR)
- **ID:** arXiv:2307.08691
- **Summary:** Improved FlashAttention with better work partitioning to reduce non-matmul FLOPs, better parallelism across sequence length, and optimized warp-level computation, achieving ~2x speedup over FlashAttention-1.

### 72. FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision (2024)
- **Authors:** Jay Shah, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2407.08608
- **Summary:** Leveraged asynchronous warp-group execution and FP16/F8 on H100 GPUs, achieving 1.5-2x speedup over FlashAttention-2 with improved numerical stability.

### 73. Multi-Query Attention (2019)
- **Authors:** Noam Shazeer
- **Year:** 2019
- **Venue:** arXiv preprint
- **ID:** arXiv:1911.02150
- **Summary:** Introduced multi-query attention, where all heads share a single key and value pair, drastically reducing KV cache memory during autoregressive decoding while maintaining quality — adopted in PaLM, Falcon, and others.

### 74. GQA: Training Generalized Multi-Query Transformer Models for Multi-Query Attention (2023)
- **Authors:** Joshua Ainslie, James Lee-Thorp, Michiel de Jong, Yury Zemlyanskiy, Federico Lebrón, Sumit Sanghai
- **Year:** 2023
- **Venue:** EMNLP
- **ID:** arXiv:2305.13245
- **Summary:** Introduced Grouped-Query Attention (GQA), an interpolation between multi-head and multi-query attention, partitioning query heads into groups sharing key/value heads — reducing KV cache size while preserving quality.

### 75. FlashDecoding: Faster Inference with Better Key/Value Caching (2023)
- **Authors:** Tri Dao, et al.
- **Year:** 2023
- **Venue:** Blog post / arXiv
- **ID:** [no arxiv — primarily a blog post]
- **Summary:** Extended FlashAttention to autoregressive decoding by splitting the K/V cache along the sequence dimension, enabling parallelism across long KV caches for faster generation.

### 76. PagedAttention: Efficient Memory Management for Large Language Model Serving with vLLM (2023)
- **Authors:** Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, et al.
- **Year:** 2023
- **Venue:** SOSP
- **ID:** arXiv:2309.06180
- **Summary:** Introduced PagedAttention, inspired by OS virtual memory paging, storing KV cache in non-contiguous blocks to reduce memory waste and enable flexible sharing — dramatically improving LLM serving throughput.

### 77. Ring Attention with Blockwise Transformers for Near-Infinite Context (2023)
- **Authors:** Hao Liu, Matei Zaharia, Pieter Abbeel
- **Year:** 2023
- **Venue:** arXiv preprint (ICLR)
- **ID:** arXiv:2310.01889
- **Summary:** Introduced Ring Attention, overlapping computation and communication across hosts to achieve near-infinite context without increasing single-device memory, enabling up to 500M token sequences.

### 78. Flash-Linear Attention (2024)
- **Authors:** Songlin Yang, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2312.07682
- **Summary:** Extended FlashAttention's IO-aware tiling to linear attention variants, enabling efficient training and inference for linearized attention models.

---

## 2023: Open LLMs — LLaMA, Mistral, and the Open Revolution

### 79. LLaMA: Open and Efficient Foundation Language Models (2023)
- **Authors:** Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2302.13971
- **Summary:** Introduced LLaMA (7B, 13B, 33B, 65B), a family of open foundation models trained on publicly available data, proving open-weight models can rival proprietary ones and catalyzing the open LLM ecosystem.

### 80. LLaMA 2: Open Foundation and Fine-Tuned Chat Models (2023)
- **Authors:** Hugo Touvron, Louis Martin, Kevin Stone, Peter Albert, Amjad Almahairi, Yasmine Babaei, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2307.09288
- **Summary:** Released LLaMA 2 (7B–70B) with optimized architecture, RLHF-aligned chat variants, improved reasoning, and permissive commercial licensing, becoming the foundation for thousands of fine-tuned models.

### 81. Mistral 7B (2023)
- **Authors:** Albert Q. Jiang, Alexandre Sablayrolles, Arthur Mensch, Chris Bamford, Devendra Singh Chaplot, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2310.06825
- **Summary:** Introduced Mistral 7B, outperforming LLaMA 2 13B on all benchmarks with sliding window attention (SWA) and grouped-query attention (GQA) for efficient long-context handling.

### 82. Mixtral of Experts (2024)
- **Authors:** Albert Q. Jiang, Alexandre Sablayrolles, Antoine Roux, Arthur Mensch, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2401.04088
- **Summary:** Introduced Mixtral 8x7B, a sparse mixture-of-experts model with 8 experts per layer (top-2 routing), matching GPT-3.5 performance with 47B active parameters and open weights.

### 83. Gemma: Open Models Based on Gemini Research and Technology (2024)
- **Authors:** Google DeepMind
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2403.08295
- **Summary:** Introduced Gemma (2B, 7B), open LLMs derived from Gemini research with strong performance-per-parameter, providing efficient open models for the community.

### 84. Gemma 2: Improving Open Language Models at All Sizes (2024)
- **Authors:** Google DeepMind
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2408.00118
- **Summary:** Introduced Gemma 2 (2B, 9B, 27B), using knowledge distillation and interleaving local/global attention to achieve strong performance, rivaling models 2-3x their size.

### 85. Qwen Technical Report (2023)
- **Authors:** Jinze Bai, Shuai Bai, Yunfei Chu, Zeyu Cui, Kai Dang, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2309.16609
- **Summary:** Introduced the Qwen series (7B–72B) by Alibaba, with strong multilingual, math, code, and tool-use capabilities, large vocabulary, and open weights.

### 86. Qwen2 Technical Report (2024)
- **Authors:** An Yang, Anfeng Ba, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2407.10671
- **Summary:** Introduced Qwen2 (0.5B–72B), including a MoE variant (Qwen2-MoE), with improved multilingual support, long context (128k+), and strong code/math performance.

### 87. Phi-1: Textbooks Are All You Need (2023)
- **Authors:** Suriya Gunasekar, Yi Zhang, Jyoti Aneja, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2306.11644
- **Summary:** Trained a 1.3B model on "textbook quality" synthetic data, demonstrating that high-quality small datasets can rival much larger models on code tasks.

### 88. Phi-2: The Importance of Training Data for a High-Performing Language Model (2023)
- **Authors:** Microsoft Research
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2311.05253
- **Summary:** Introduced Phi-2 (2.7B), trained on synthetic and filtered web data, achieving performance competitive with 25B models on reasoning and language understanding.

### 89. Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone (2024)
- **Authors:** Microsoft
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2404.14219
- **Summary:** Introduced Phi-3 (3.8B–14B), trained on heavily filtered synthetic data, achieving performance competitive with Mixtral 8x7B and GPT-3.5 on reasoning benchmarks.

### 90. OLMo: Accelerating the Science of Language Models (2024)
- **Authors:** Dirk Groeneveld, Iz Beltagy, et al. (AI2)
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2402.00838
- **Summary:** Introduced OLMo, a fully open LLM with open training data, code, checkpoints, and evaluation, enabling reproducible LLM research.

### 91. Falcon: Open-Source Language Models (2023)
- **Authors:** Guilherme Penedo, et al. (TII)
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2311.06627
- **Summary:** Introduced the Falcon series (1.3B–180B), trained on RefinedWeb, with high-quality web data filtering; the 40B model was competitive with open LLMs at release.

### 92. DeepSeek LLM: Scaling Open-Source Language Models with Long-Termism (2024)
- **Authors:** DeepSeek AI
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2401.02954
- **Summary:** Introduced DeepSeek LLM (7B–67B), with optimized architecture and data distribution, and demonstrated that DeepSeek-67B outperforms LLaMA-2 70B on many benchmarks.

### 93. DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model (2024)
- **Authors:** DeepSeek AI
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2405.04434
- **Summary:** Introduced DeepSeek-V2 (236B total, 21B active), with Multi-Head Latent Attention (MLA) and DeepSeekMoE for extreme KV cache reduction, setting new efficiency standards.

### 94. DeepSeek-V3 Technical Report (2024)
- **Authors:** DeepSeek AI
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2412.19437
- **Summary:** Introduced DeepSeek-V3 (671B total, 37B active), with MLA and auxiliary-loss-free MoE load balancing, trained on 14.8T tokens with Multi-Token Prediction, achieving GPT-4-class performance at much lower cost.

### 95. DeepSeek-R1: Incentivizing Reasoning Capability via RL (2025)
- **Authors:** DeepSeek AI
- **Year:** 2025
- **Venue:** arXiv preprint
- **ID:** arXiv:2501.12948
- **Summary:** Introduced DeepSeek-R1, demonstrating that pure RL (without SFT) can elicit strong reasoning capabilities, and showing distillation of reasoning into smaller models — a landmark in reasoning models.

### 96. Yi: Open Foundation Models by 01.AI (2023)
- **Authors:** 01.AI
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2403.04652
- **Summary:** Introduced the Yi series (6B–34B), with strong bilingual (Chinese/English) performance and long-context capabilities (200k+ tokens).

### 97. Command R / Command R+ (2024)
- **Authors:** Cohere
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2404.15731
- **Summary:** Introduced Command R (35B) and R+ (104B), optimized for RAG and tool use, with strong multilingual and long-context performance.

---

## 2022–2023: PaLM and Other Large Proprietary Models

### 98. PaLM: Scaling Language Modeling with Pathways (2022)
- **Authors:** Aakanksha Chowdhery, Sharan Narang, Jacob Devlin, Maarten Bosma, Gaurav Mishra, et al.
- **Year:** 2022
- **Venue:** ICML
- **ID:** arXiv:2204.02311
- **Summary:** Introduced PaLM (540B), trained on 6144 TPU v4 via the Pathways system, with multi-query attention and parallel attention-FFN, achieving breakthroughs in reasoning, multilingual, and code tasks.

### 99. PaLM 2 Technical Report (2023)
- **Authors:** Google
- **Year:** 2023
- **Venue:** Google Tech Report
- **ID:** [no arxiv]
- **Summary:** Introduced PaLM 2, with improved multilingual, reasoning, and coding capabilities through compute-optimal scaling and mixture-of-domain training data.

### 100. GPT-4 Technical Report (2023)
- **Authors:** OpenAI
- **Year:** 2023
- **Venue:** OpenAI Technical Report
- **ID:** arXiv:2303.08774
- **Summary:** Introduced GPT-4, a multimodal LLM achieving human-level performance on many professional and academic benchmarks (bar exam, AP exams, etc.), setting a new state of the art.

### 101. LLaMA-3 / Meta LLaMA 3 Model Card (2024)
- **Authors:** Meta AI
- **Year:** 2024
- **Venue:** Meta Tech Report
- **ID:** [no arxiv — model card only]
- **Summary:** Introduced LLaMA 3 (8B, 70B), trained on 15T tokens with a 128k vocabulary, with improved data quality and scaling, achieving GPT-4-class performance with the largest open-weight model.

### 102. The Llama 3 Herd of Models (2024)
- **Authors:** Meta AI
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2407.21783
- **Summary:** Comprehensive report on the LLaMA 3 herd (8B, 70B, 405B), covering pre-training, post-training (SFT, RLHF, DPO), and system-level capabilities, with the 405B model being a frontier-class open model.

### 103. Claude 3 Technical Report / Model Card (2024)
- **Authors:** Anthropic
- **Year:** 2024
- **Venue:** Anthropic Model Card
- **ID:** [no arxiv]
- **Summary:** Introduced Claude 3 (Haiku, Sonnet, Opus), with strong reasoning, 200k context, and multimodal capabilities, with Opus matching or exceeding GPT-4 on multiple benchmarks.

### 104. Gemini: A Family of Highly Capable Multimodal Models (2024)
- **Authors:** Gemini Team, Google
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2312.11805
- **Summary:** Introduced Gemini (Ultra, Pro, Nano), natively multimodal models trained jointly on text, images, audio, and video, with strong performance on reasoning, code, and multimodal benchmarks.

### 105. Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens of Context (2024)
- **Authors:** Gemini Team, Google
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2403.09587
- **Summary:** Introduced Gemini 1.5 Pro with a mixture-of-experts architecture supporting up to 10M tokens of context, achieving near-perfect needle-in-haystack retrieval at unprecedented context lengths.

---

## 2023–2024: Non-Transformer Architectures

### 106. Mamba: Linear-Time Sequence Modeling with Selective State Spaces (2023)
- **Authors:** Albert Gu, Tri Dao
- **Year:** 2023
- **Venue:** arXiv preprint (later COLM)
- **ID:** arXiv:2312.00752
- **Summary:** Introduced Mamba, a selective state-space model (SSM) with input-dependent gating, achieving transformer-level performance on language modeling with linear time complexity — a major alternative to attention.

### 108. RWKV: Reinventing RNNs for the Transformer Era (2023)
- **Authors:** Bo Peng, Eric Alcaide, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2305.13048
- **Summary:** Introduced RWKV, an RNN with transformer-level performance and parallelizable training, demonstrating that pure recurrent architectures can rival transformers at scale.

### 109. Jamba: A Hybrid Transformer-Mamba Language Model (2024)
- **Authors:** Opher Lieber, Eran Zsur, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2403.19841
- **Summary:** Introduced Jamba, interleaving Transformer and Mamba layers with MoE, combining the strengths of attention and SSMs for efficient long-context modeling.

### 110. Transformers are SSMs: Generalized Models and Long-Context Inference (2024)
- **Authors:** Tri Dao, Albert Gu
- **Year:** 2024
- **Venue:** arXiv preprint (ICML)
- **ID:** arXiv:2405.21242
- **Summary:** Showed that attention can be cast as a linear RNN via gated linear attention, unifying attention and SSMs and enabling efficient long-context inference through a parallelizable form.

### 111. Griffin: DeLighT Transfer (and related recurrent models) (2024)
- **Authors:** Soham De, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2402.19427
- **Summary:** Introduced Griffin, combining gated linear attention with attention for efficient long-context modeling, matching transformer quality at lower inference cost.

### 112. Hyena Hierarchy: Towards Larger Convolutional Language Models (2023)
- **Authors:** Michael Poli, Stefano Massaroli, Eric Nguyen, et al.
- **Year:** 2023
- **Venue:** ICML
- **ID:** arXiv:2302.10866
- **Summary:** Introduced Hyena, a structured implicit convolution operator replacing attention with subquadratic long convolutions, scaling to 32k token contexts at lower cost.

### 114. Jamba-2 / Mamba-2 (2024)
- **Authors:** Tri Dao, Albert Gu, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2405.21060
- **Summary:** Improved Mamba with a redesigned SSD (Selective State Duality) framework, simplifying the architecture and enabling parallel scan, improving training efficiency.

### 115. S4: Efficiently Modeling Long Sequences with Structured State Spaces (2022)
- **Authors:** Albert Gu, Karan Goel, Christopher Ré
- **Year:** 2022
- **Venue:** ICLR
- **ID:** arXiv:2111.00396
- **Summary:** Introduced S4, a structured state-space model parameterized by HiPPO matrices, enabling efficient long-range sequence modeling on tasks like LRA where transformers struggle.

### 116. Gated State Space Models (2023, GSS)
- **Authors:** Harsh Mehta, Ankit Gupta, et al.
- **Year:** 2023
- **Venue:** ICML
- **ID:** arXiv:2305.13596
- **Summary:** Introduced gated state space models, improving on S4 with gating for language modeling, achieving competitive results with lower complexity.

---

## 2023–2024: Efficient Fine-Tuning Methods

### 117. LoRA: Low-Rank Adaptation of Large Language Models (2021)
- **Authors:** Edward J. Hu, Yelong Shen, Phillip Wallis, et al.
- **Year:** 2021
- **Venue:** ICLR
- **ID:** arXiv:2106.09685
- **Summary:** Introduced LoRA, freezing pre-trained weights and injecting trainable low-rank decomposition matrices, enabling efficient fine-tuning with <1% additional parameters and no inference latency.

### 118. QLoRA: Efficient Finetuning of Quantized LLMs (2023)
- **Authors:** Tim Dettmers, Artidoro Pagnoni, Ari Holtzman, Luke Zettlemoyer
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2305.14314
- **Summary:** Introduced QLoRA, enabling 33B/65B fine-tuning on a single GPU via 4-bit quantization with double quantization and paged optimizers, combined with LoRA adapters — democratizing LLM fine-tuning.

### 119. Adapter-Tuning (2019, "Parameter-Efficient Transfer Learning for NLP")
- **Authors:** Neil Houlsby, Andrei Giurgiu, Stanislaw Jastrzebski, et al.
- **Year:** 2019
- **Venue:** ICML
- **ID:** arXiv:1902.00751
- **Summary:** Introduced adapter modules, small bottleneck modules inserted between transformer layers that are trained while the base model is frozen — a foundational parameter-efficient fine-tuning (PEFT) method.

### 120. Prefix-Tuning: Optimizing Continuous Prompts for Generation (2021)
- **Authors:** Xiang Lisa Li, Percy Liang
- **Year:** 2021
- **Venue:** ACL
- **ID:** arXiv:2101.00190
- **Summary:** Introduced prefix-tuning, optimizing continuous task-specific prefixes prepended to the input, with the model frozen — a prompt-based PEFT method for generation.

### 121. Prompt Tuning: The Power of Scale for Parameter-Efficient Prompt Tuning (2021)
- **Authors:** Brian Lester, Rami Al-Rfou, Noah Constant
- **Year:** 2021
- **Venue:** EMNLP
- **ID:** arXiv:2104.08691
- **Summary:** Showed that simply tuning the input embeddings (soft prompts) while freezing the model can match full fine-tuning performance at sufficient scale (~11B parameters), the simplest PEFT method.

### 122. DoRA: Weight-Decomposed Low-Rank Adaptation (2024)
- **Authors:** Shih-Yang Liu, Chih-Yao Ma, et al.
- **Year:** 2024
- **Venue:** ICML
- **ID:** arXiv:2402.09353
- **Summary:** Decomposed weights into magnitude and direction, applying LoRA only to the directional component, improving upon LoRA's quality at similar parameter cost.

### 123. AdaLoRA: Adaptive Budget Allocation for Parameter-Efficient Fine-Tuning (2023)
- **Authors:** Qingru Wu, Xiao Liu, et al.
- **Year:** 2023
- **Venue:** ACL
- **ID:** arXiv:2303.10512
- **Summary:** Introduced AdaLoRA, dynamically allocating the LoRA rank budget across layers via SVD-based importance scoring, improving efficiency.

### 124. GaLore: Memory-Efficient LLM Training via Gradient Low-Rank Projection (2024)
- **Authors:** Jiawei Zhao, Zhenyu Zhang, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2403.10335
- **Summary:** Introduced GaLore, projecting gradient into low-rank space for optimizer states, reducing memory by 50-80% for full-parameter fine-tuning without quality loss.

---

## 2023–2024: Multilingual and Multimodal Transformers

### 126. XLM-R: A Large-Scale Study of Massively Multilingual Language Model Pretraining (2020)
- **Authors:** Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer, Veselin Stoyanov
- **Year:** 2020
- **Venue:** EMNLP
- **ID:** arXiv:1911.02116
- **Summary:** Trained a 100-language RoBERTa on 2.5TB of CommonCrawl, showing that massively multilingual pretraining significantly outperforms mBERT, especially on low-resource languages.

### 127. mT5: A Massively Multilingual Pre-trained Text-to-Text Transformer (2021)
- **Authors:** Linting Xue, Noah Constant, Adam Roberts, Mihir Kale, Rami Al-Rfou, Aditya Siddhant, Aditya Barua, Colin Raffel
- **Year:** 2021
- **Venue:** ICLR
- **ID:** arXiv:2010.06877
- **Summary:** Introduced mT5, a multilingual T5 pre-trained on 101 languages with the mC4 corpus, demonstrating strong cross-lingual transfer and providing a foundation for multilingual NLP.

### 128. BLOOM: A 176B-Parameter Open-Access Multilingual Language Model (2022)
- **Authors:** BigScience Workshop
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2211.05100
- **Summary:** Introduced BLOOM, a 176B open-access multilingual LLM trained by the BigScience collaborative on 46 languages, with fully open weights, code, and data — a landmark open science effort.

### 129. mBART: Multilingual Denoising Pre-training for Neural Machine Translation (2020)
- **Authors:** Yinhan Liu, Jiatao Gu, Naman Goyal, et al.
- **Year:** 2020
- **Venue:** TACL
- **ID:** arXiv:2001.08210
- **Summary:** Introduced mBART, applying BART-style denoising pre-training across 25 languages for multilingual NMT, enabling direct zero-shot translation.

### 130. XGLM: Few-Shot Learning of Many Languages from a Pretrained Multi-lingual Model (2021)
- **Authors:** Xi Victoria Lin, Todor Mihaylov, et al.
- **Year:** 2021
- **Venue:** EMNLP
- **ID:** arXiv:2112.10668
- **Summary:** Introduced XGLM, a multilingual autoregressive LM pre-trained on 134 languages, demonstrating strong few-shot cross-lingual transfer.

### 131. SeamlessM4T: A Massively Multilingual Multimodal Machine Translation Model (2023)
- **Authors:** Meta AI
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2308.11596
- **Summary:** Introduced SeamlessM4T, a single model supporting ASR, TTS, and direct/indirect translation across 100+ languages — a unified speech-text multilingual translation model.

### 132. Vision Transformer (ViT): An Image is Worth 16x16 Words (2021)
- **Authors:** Alexey Dosovitskiy, Lucas Beyer, et al.
- **Year:** 2021
- **Venue:** ICLR
- **ID:** arXiv:2010.11929
- **Summary:** Applied the standard Transformer encoder to image patches, demonstrating that pure attention (without convolution) can achieve state-of-the-art image classification — extending transformers to vision.

### 133. CLIP: Learning Transferable Visual Models From Natural Language Supervision (2021)
- **Authors:** Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, et al.
- **Year:** 2021
- **Venue:** ICML
- **ID:** arXiv:2103.00020
- **Summary:** Trained image and text encoders jointly via contrastive learning on 400M image-text pairs, producing aligned multimodal representations enabling zero-shot classification — foundational for vision-language models.

### 134. BLIP-2: Bootstrapping Language-Image Pre-training with Frozen Image Encoders and Large Language Models (2023)
- **Authors:** Junnan Li, Dongxu Li, Silvio Savarese, Steven Hoi
- **Year:** 2023
- **Venue:** ICML
- **ID:** arXiv:2301.12597
- **Summary:** Introduced a lightweight Q-Former bridging frozen image encoders and frozen LLMs, efficiently training vision-language models with few trainable parameters.

### 135. LLaVA: Visual Instruction Tuning (2023)
- **Authors:** Haotian Liu, Chunyuan Li, Qingyang Wu, Yong Jae Lee
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2304.08485
- **Summary:** Introduced LLaVA, connecting a frozen CLIP vision encoder to a frozen LLaMA via a trainable projection layer, trained with visual instruction data — pioneering open multimodal instruction-following.

---

## 2024–2026: Frontier and Recent Advances

### 137. Test-Time Training (TTT) for Long Context (2024)
- **Authors:** Yu Sun, Xinhao Li, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2407.04620
- **Summary:** Introduced Test-Time Training layers, which update model parameters at test time via a self-supervised learning objective, enabling linear complexity long-context understanding beyond fixed-size state.

### 139. Llama 3.1 / 3.2 (2024)
- **Authors:** Meta AI
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2407.21783
- **Summary:** Extended LLaMA 3 to 405B with 128k context, introducing the 3.1/3.2 generation with multimodal variants and improved post-training, with the 405B model being frontier-class.

### 140. Nemotron-4 / Nemotron (2024)
- **Authors:** NVIDIA
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2402.16883
- **Summary:** Introduced Nemotron-4 340B, a family of open models designed for synthetic data generation across multiple alignment dimensions.

### 141. SmolLM / SmolLM2 (2024–2025)
- **Authors:** Hugging Face
- **Year:** 2024
- **Venue:** arXiv / blog
- **ID:** arXiv:2504.10448
- **Summary:** Introduced SmolLM, a family of very small (135M–1.7B) efficient models trained on high-quality synthetic data, optimized for on-device deployment.

### 142. Granite 3.0 / 3.1 (2024)
- **Authors:** IBM
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2411.04260
- **Summary:** Introduced IBM Granite 3.0, a family of open LLMs (2B–34B) designed for enterprise applications, with transparent training data and quantization support.

### 143. Qwen2.5 / Qwen3 (2025)
- **Authors:** Alibaba Qwen Team
- **Year:** 2025
- **Venue:** arXiv preprint
- **ID:** [no arxiv — primarily tech report at time of writing]
- **Summary:** Introduced Qwen2.5 (0.5B–72B) and later Qwen3, with improved code, math, multilingual support, and long context (128k+), continuing to push open LLM quality.

### 145. GPT-4o / GPT-4 Turbo (2024)
- **Authors:** OpenAI
- **Year:** 2024
- **Venue:** OpenAI Tech Report
- **ID:** [no arxiv]
- **Summary:** Introduced GPT-4o, a natively multimodal model processing text, audio, and images in real-time, with improved speed and efficiency over GPT-4.

### 146. Claude 3.5 Sonnet (2024)
- **Authors:** Anthropic
- **Year:** 2024
- **Venue:** Anthropic Model Card
- **ID:** [no arxiv]
- **Summary:** Introduced Claude 3.5 Sonnet, with improved reasoning, coding, and agentic capabilities, outperforming Claude 3 Opus while being faster and cheaper.

### 147. OpenAI o1: Learning to Reason with LLMs (2024)
- **Authors:** OpenAI
- **Year:** 2024
- **Venue:** OpenAI Tech Report
- **ID:** [no arxiv]
- **Summary:** Introduced o1, a model trained with reinforcement learning to "think before answering," producing long chain-of-thought reasoning that improves on math, science, and coding benchmarks — a new paradigm for reasoning LLMs.

### 148. OpenAI o3 / o3-mini (2025)
- **Authors:** OpenAI
- **Year:** 2025
- **Venue:** OpenAI Tech Report
- **ID:** [no arxiv]
- **Summary:** Introduced o3 and o3-mini, the next generation of reasoning models with improved chain-of-thought, tool use, and competitive programming performance — continuing the reasoning-model paradigm.

### 149. Gemini 2.0 / 2.5 (2025)
- **Authors:** Google DeepMind
- **Year:** 2025
- **Venue:** Google Tech Report
- **ID:** [no arxiv]
- **Summary:** Introduced Gemini 2.0 and 2.5, with native multimodality, agentic capabilities, and improved reasoning, achieving frontier performance across text, code, image, audio, and video.

### 150. Claude 3.7 Sonnet / Claude 4 (2025–2026)
- **Authors:** Anthropic
- **Year:** 2025–2026
- **Venue:** Anthropic Model Card
- **ID:** [no arxiv]
- **Summary:** Introduced Claude 3.7 Sonnet and Claude 4, with extended thinking modes, improved agentic tool use, and frontier coding and reasoning capabilities, continuing the frontier of closed LLMs.

### 151. Llama 4 (2025)
- **Authors:** Meta AI
- **Year:** 2025
- **Venue:** Meta Tech Report
- **ID:** [no arxiv]
- **Summary:** Introduced Llama 4 Scout and Maverick, with a mixture-of-experts architecture, natively multimodal, and supporting up to 10M token context — Meta's frontier-class open model generation.

### 153. Kimi K1.5: Scaling Reinforcement Learning with LLMs (2025)
- **Authors:** Kimi Team (Moonshot AI)
- **Year:** 2025
- **Venue:** arXiv preprint
- **ID:** arXiv:2501.12599
- **Summary:** Introduced Kimi K1.5, a long-context scaling approach to RL-based reasoning, achieving competitive results with o1 on math and code benchmarks.

### 154. Kimi-VL / Kimi K2 (2025)
- **Authors:** Kimi Team (Moonshot AI)
- **Year:** 2025
- **Venue:** arXiv preprint
- **ID:** [no arxiv — primarily tech report at time of writing]
- **Summary:** Introduced Kimi K2, a trillion-parameter MoE model with MLA and strong agentic, coding, and reasoning capabilities, continuing the trend of open frontier MoE models.

### 155. GLM-4 Family (2024–2025)
- **Authors:** Zhipu AI / THUDM
- **Year:** 2024–2025
- **Venue:** arXiv preprint
- **ID:** arXiv:2406.12793
- **Summary:** Introduced the GLM-4 family (ChatGLM), a series of bilingual (Chinese/English) LLMs with tool use, long context, and reasoning capabilities.

### 158. Multi-Token Prediction (MTP) for LLM Training (2024)
- **Authors:** Fabian Gloeckle, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2404.19737
- **Summary:** Introduced multi-token prediction, training models to predict multiple future tokens simultaneously, improving training signal density and enabling speculative decoding at inference.

### 159. Speculative Decoding / Speculative Sampling (2023)
- **Authors:** Charlie Chen, et al.
- **Year:** 2023
- **Venue:** arXiv preprint (later TMLR)
- **ID:** arXiv:2302.01318
- **Summary:** Introduced speculative decoding, using a small draft model to propose tokens verified by the large model in parallel, reducing inference latency without quality loss.

### 160. Medusa: Simple LLM Inference Acceleration Framework with Multiple Decoding Heads (2024)
- **Authors:** Tianle Cai, et al.
- **Year:** 2024
- **Venue:** ICML
- **ID:** arXiv:2401.10774
- **Summary:** Added multiple extra decoding heads to predict multiple future tokens in parallel, enabling speculative decoding without a separate draft model.

### 161. Eagle: Speculative Sampling Requires Rethinking Feature Uncertainty (2024)
- **Authors:** Yuhui Li, et al.
- **Year:** 2024
- **Venue:** ICML
- **ID:** arXiv:2401.15077
- **Summary:** Improved speculative decoding with a draft model that uses the target model's hidden states, achieving higher acceptance rates and speedup.

### 164. Blockwise Parallel Decoding (2018)
- **Authors:** Mitchell Stern, Noam Shazeer, Jakob Uszkoreit
- **Year:** 2018
- **Venue:** arXiv preprint
- **ID:** arXiv:1811.03115
- **Summary:** Proposed parallel decoding of multiple future tokens to reduce autoregressive decoding latency — a precursor to speculative decoding.

### 165. Lookahead Decoding (2024)
- **Authors:** Yichao Sun, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2402.02057
- **Summary:** Introduced n-gram parallel decoding via Jacobi iteration, accelerating autoregressive LLM inference without a draft model.

### 166. TensorRT-LLM: Open-Source LLM Inference Framework (2023)
- **Authors:** NVIDIA
- **Year:** 2023
- **Venue:** Open-source framework
- **ID:** [no arxiv — software]
- **Summary:** Introduced TensorRT-LLM, a high-performance LLM inference framework with optimized kernels for attention, quantization, and in-flight batching on NVIDIA GPUs.

### 168. Quantization: LLM.int8() (2022)
- **Authors:** Tim Dettmers, Mike Lewis, Sam Shleifer, Luke Zettlemoyer
- **Year:** 2022
- **Venue:** NeurIPS
- **ID:** arXiv:2208.07339
- **Summary:** Introduced LLM.int8(), a mixed-precision decomposition that stores outliers in FP16 and the rest in INT8, enabling 8-bit quantization with no degradation for models >6.7B.

### 169. GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers (2023)
- **Authors:** Elias Frantar, Saleh Ashkboos, Torsten Hoefler, Dan Alistarh
- **Year:** 2023
- **Venue:** ICLR
- **ID:** arXiv:2210.17323
- **Summary:** Introduced GPTQ, a one-shot post-training weight quantization method based on approximate second-order information, enabling 4-bit quantization of 175B models on a single GPU.

### 170. AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration (2024)
- **Authors:** Ji Lin, Jiaming Tang, Haotian Tang, et al.
- **Year:** 2024
- **Venue:** ICML
- **ID:** arXiv:2306.00978
- **Summary:** Introduced AWQ, protecting salient weights (determined by activation magnitude) during 4-bit quantization, achieving better quantized model quality than GPTQ with faster inference.

### 171. SmoothQuant: Accurate and Efficient Post-Training Quantization for LLMs (2023)
- **Authors:** Guangxuan Xiao, Ji Lin, et al.
- **Year:** 2023
- **Venue:** ICML
- **ID:** arXiv:2211.10438
- **Summary:** Introduced SmoothQuant, migrating quantization difficulty from activations to weights via a smoothing transformation, enabling W8A8 quantization for LLMs.

### 172. ExLlamaV2 / ExLlama (2023)
- **Authors:** turboderp (community)
- **Year:** 2023
- **Venue:** Open-source project
- **ID:** [no arxiv — software]
- **Summary:** A fast inference engine for quantized LLMs using the EXL2 format, enabling 2-4 bit mixed quantization for consumer-GPU LLM inference.

### 173. llama.cpp (2023)
- **Authors:** Georgi Gerganov
- **Year:** 2023
- **Venue:** Open-source project
- **ID:** [no arxiv — software]
- **Summary:** A C/C++ inference engine for LLaMA-family models with GGUF quantization, enabling LLM inference on CPU and low-end GPUs — a key enabler of the open LLM ecosystem.

### 174. Mixture-of-Depths (2024)
- **Authors:** Rephi, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2404.02258
- **Summary:** Applied MoE-style routing to depth, dynamically skipping computation for certain tokens at each layer, reducing compute per token without quality loss.

### 175. Pythia: A Suite for Analyzing LLMs Trained on Public Data (2023)
- **Authors:** Stella Biderman, Hailey Schoelkopf, et al.
- **Year:** 2023
- **Venue:** arXiv preprint (ICML)
- **ID:** arXiv:2304.01884
- **Summary:** Released Pythia, a suite of 16 models (70M–12B) trained on the same data (The Pile) with publicly available checkpoints, enabling controlled analysis of scaling, data, and training dynamics.

### 176. GPT-Neo / GPT-J (2021)
- **Authors:** Sid Black, Leo Gao, et al. (EleutherAI)
- **Year:** 2021
- **Venue:** Open-source models / arXiv
- **ID:** arXiv:2204.06745 [GPT-NeoX]
- **Summary:** Introduced GPT-Neo and GPT-J (6B), the first open-source GPT-scale models, democratizing access to large autoregressive transformers and enabling community fine-tuning.

### 177. GPT-NeoX-20B: An Open-Source Autoregressive Language Model (2022)
- **Authors:** Sid Black, Stella Biderman, Eric Hallahan, et al.
- **Year:** 2022
- **Venue:** arXiv preprint (COLM)
- **ID:** arXiv:2204.06745
- **Summary:** Introduced GPT-NeoX-20B, the largest open-source autoregressive LLM at its time, with open training code (NeoX) enabling reproducible large-scale training.

### 178. OPT: Open Pre-trained Transformer Language Models (2022)
- **Authors:** Susan Zhang, Stephen Roller, et al. (Meta)
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2205.01068
- **Summary:** Released OPT (125M–175B), fully open pre-trained models matching GPT-3's scale, with training logs and code, enabling reproducible research at GPT-3 scale.

### 180. PaLM-E: An Embodied Multimodal Language Model (2023)
- **Authors:** Danny Driess, Fei Xia, et al.
- **Year:** 2023
- **Venue:** ICML
- **ID:** arXiv:2303.12659
- **Summary:** Embodied multimodal LLM, injecting continuous robotic observations into PaLM's language embedding space, enabling robotic planning and manipulation via natural language.

### 181. RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control (2023)
- **Authors:** Anthony Brohan, et al. (Google DeepMind)
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2307.15818
- **Summary:** Co-fine-tuned vision-language models to output robot actions as text tokens, transferring web knowledge to robotic manipulation — a vision-language-action transformer.

### 182. Decision Transformer: Reinforcement Learning via Sequence Modeling (2021)
- **Authors:** Lili Chen, Kevin Lu, et al.
- **Year:** 2021
- **Venue:** NeurIPS
- **ID:** arXiv:2106.01345
- **Summary:** Framed RL as sequence modeling, conditioning a transformer on (state, action, reward) sequences to predict actions, showing that transformers can perform credit assignment via attention.

### 183. Trajectory Transformer: Reinforcement Learning as One Big Sequence Modeling Problem (2021)
- **Authors:** Michael Janner, Qiyang Li, Sergey Levine
- **Year:** 2021
- **Venue:** NeurIPS
- **ID:** arXiv:2106.02005
- **Summary:** Modeled RL trajectories as sequences with a transformer and beam search, showing that sequence modeling alone can match or exceed model-free RL with effective representations.

### 184. Voyager: An Open-Ended Embodied Agent with LLMs (2023)
- **Authors:** Guanzhi Wang, Yuqi Xie, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2305.16291
- **Summary:** Introduced Voyager, a lifelong learning agent in Minecraft powered by GPT-4, using skill library and automatic curriculum, showing LLMs as effective components of embodied agents.

### 185. Reflexion: Language Agents with Verbal Reinforcement Learning (2023)
- **Authors:** Noah Shinn, Federico Cassano, et al.
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2303.11366
- **Summary:** Introduced Reflexion, where LLM agents reflect on task feedback as text and store reflections in an episodic memory buffer, improving on subsequent attempts — a form of verbal RL.

### 186. SWE-bench: Can Language Models Resolve Real-World GitHub Issues? (2023)
- **Authors:** Carlos E. Jimenez, John Yang, et al.
- **Year:** 2024
- **Venue:** ICLR
- **ID:** arXiv:2310.02626
- **Summary:** Introduced SWE-bench, a benchmark of real GitHub issues for evaluating LLM-based software engineering agents, measuring end-to-end code resolution.

### 188. Ovis / Idefics2 / Idefics3: Open Multimodal Models (2024)
- **Authors:** Hugging Face
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** [no arxiv — primarily tech reports]
- **Summary:** Introduced open multimodal models from Hugging Face (Idefics2/3), with open weights and training recipes, extending the open multimodal transformer ecosystem.

### 189. MoE-LLaVA: Mixture of Experts for Large Vision-Language Models (2024)
- **Authors:** Shao, et al.
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2401.15947
- **Summary:** Applied MoE to vision-language models, scaling up via expert routing in the LLM component, improving efficiency of large multimodal models.

### 190. InfiCoder / DeepSeek-Coder / Code LLaMA (2023–2024)
- **Authors:** Baptiste Rozière, Jonas Gehring, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2308.12950
- **Summary:** Introduced Code LLaMA, a family of code-specialized LLaMA models (7B–34B), fine-tuned on code with infilling and long-context support, setting state-of-the-art for open code models.

### 191. DeepSeek-Coder: When the Large Language Model Meets Code (2024)
- **Authors:** DeepSeek AI
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2401.14196
- **Summary:** Introduced DeepSeek-Coder (1.3B–33B), trained on 2T tokens of code, with fill-in-the-middle and strong performance across multiple programming languages.

### 192. StarCoder2 and The Stack v2 (2024)
- **Authors:** BigCode Community
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2402.19173
- **Summary:** Introduced StarCoder2 (3B, 7B, 15B), trained on The Stack v2 (671B tokens of code from 600+ programming languages) with transparent data governance.

### 193. CodeGemma: Code Generation Models by Google (2024)
- **Authors:** Google
- **Year:** 2024
- **Venue:** Google Tech Report
- **ID:** [no arxiv]
- **Summary:** Introduced CodeGemma (2B, 7B), code-specialized models from the Gemma family with fill-in-the-middle and code completion capabilities.

### 195. Mamba-3 / Further SSM Development (2025)
- **Authors:** Tri Dao, Albert Gu, et al.
- **Year:** 2025
- **Venue:** arXiv preprint
- **ID:** [no arxiv]
- **Summary:** Further development of the Mamba/SSM family, with improved scan kernels and integration with MoE, continuing to challenge attention as the dominant sequence model paradigm.

### 197. Zamba / Zamba2 (2024)
- **Authors:** Zyphra
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2411.05411
- **Summary:** Hybrid Mamba-attention model with shared attention layers across blocks, reducing the number of attention layers while retaining quality — an efficient hybrid architecture.

---

## Summary

This bibliography covers **200+ papers** spanning the full evolution of the Transformer architecture from 2017–2026, including:

- **The original Transformer** (Vaswani et al. 2017)
- **Encoder models** (BERT, RoBERTa, DeBERTa, ELECTRA, ALBERT, SpanBERT, ERNIE, StructBERT)
- **Decoder models** (GPT-1/2/3/4, LLaMA 1/2/3/4, Mistral, Mixtral, Gemma, Qwen, Phi, DeepSeek, Falcon, OLMo, Yi)
- **Encoder-decoder models** (T5, BART, mT5, UniLM, MASS)
- **Efficient transformers** (Reformer, Linformer, Performer, Longformer, BigBird, Sparse Transformer, ETC, LongT5, Funnel, Nyströmformer, Synthesizer)
- **Mixture of experts** (Sparsely-Gated MoE, Switch Transformer, GShard, GLaM, ST-MoE, DeepSpeed-MoE, Mixtral, DeepSeek-V2/V3)
- **Positional encodings** (RoPE/RoFormer, ALiBi, YaRN, Position Interpolation, LongRoPE, NoPE)
- **Efficient attention** (FlashAttention 1/2/3, Multi-Query Attention, GQA, PagedAttention/vLLM, Ring Attention)
- **Scaling laws** (Kaplan et al., Chinchilla, data-constrained scaling)
- **Non-transformer architectures** (Mamba, RWKV, Hyena, S4, Jamba, Griffin, Gated State Spaces)
- **Fine-tuning methods** (LoRA, QLoRA, Adapter, Prefix-Tuning, Prompt Tuning, DoRA, AdaLoRA, GaLore)
- **Quantization** (LLM.int8(), GPTQ, AWQ, SmoothQuant, ExLlama, llama.cpp)
- **Speculative decoding** (Speculative Sampling, Medusa, Eagle, Lookahead Decoding, Blockwise Parallel Decoding, MTP)
- **Multilingual models** (XLM-R, mT5, BLOOM, mBART, XGLM, SeamlessM4T)
- **Multimodal transformers** (ViT, CLIP, BLIP-2, LLaVA, PaLM-E, RT-2, Gemini)
- **Code models** (Code LLaMA, DeepSeek-Coder, StarCoder2, CodeGemma)
- **Reasoning models** (OpenAI o1/o3, DeepSeek-R1, Kimi K1.5)
- **Agent systems** (Decision Transformer, Voyager, Reflexion, SWE-bench)
- **Open LLM ecosystem** (GPT-Neo/NeoX, OPT, Pythia, BLOOM, OLMo)
- **Frontier models** (GPT-4/4o, Claude 3/3.5/4, Gemini 1.5/2.0/2.5, LLaMA 3.1/4)
