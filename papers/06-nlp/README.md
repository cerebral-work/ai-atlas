# 06 — Natural Language Processing (2000–2026)

A comprehensive bibliography of landmark NLP research papers, covering word embeddings, sequence models, attention mechanisms, neural machine translation, tokenization, named entity recognition, parsing, sentiment analysis, question answering, summarization, coreference resolution, multi-task learning, and multilingual NLP.

Papers are sorted chronologically within the collection.

---

## 2000–2009: Statistical & Neural Foundations

### 1. BLEU: a Method for Automatic Evaluation of Machine Translation (2002)
- **Authors:** Kishore Papineni, Salim Roukos, Todd Ward, Wei-Jing Zhu
- **Year:** 2002
- **Venue:** ACL
- **ID:** [no arxiv]
- **Summary:** Introduced BLEU, the standard automatic metric for machine translation quality, used for decades of NLP progress — foundational NLP infrastructure.

### 2. Statistical Phrase-Based Translation (2003)
- **Authors:** Philipp Koehn, Franz Josef Och, Daniel Marcu
- **Year:** 2003
- **Venue:** NAACL
- **ID:** [no arxiv]
- **Summary:** Introduced phrase-based statistical machine translation, which dominated MT before the neural era and remains the pre-neural baseline.

### 3. Minimum Error Rate Training in Statistical Machine Translation (2003)
- **Authors:** Franz Josef Och
- **Year:** 2003
- **Venue:** ACL
- **ID:** [no arxiv]
- **Summary:** Introduced MERT, the standard optimization procedure for tuning SMT system parameters to directly optimize evaluation metrics like BLEU.

### 4. A Neural Probabilistic Language Model (2003)
- **Authors:** Yoshua Bengio, Réjean Ducharme, Pascal Vincent, Christian Jauvin
- **Year:** 2003
- **Venue:** NeurIPS / Journal of Machine Learning Research
- **ID:** [no arxiv]
- **Summary:** Introduced the first feedforward neural language model learning distributed word representations, establishing the groundwork for all modern word embeddings and neural language modeling.

### 5. Hierarchical Probabilistic Neural Network Language Model (2005)
- **Authors:** Frederic Morin, Yoshua Bengio
- **Year:** 2005
- **Venue:** AISTATS
- **ID:** [no arxiv]
- **Summary:** Introduced hierarchical softmax for neural language models, reducing computational complexity from O(V) to O(log V) and making large-vocabulary neural LMs practical.

### 6. TextRank: Bringing Order into Texts (2004)
- **Authors:** Rada Mihalcea, Paul Tarau
- **Year:** 2004
- **Venue:** ACL Workshop on TextGraphs
- **ID:** [no arxiv]
- **Summary:** Introduced TextRank, a graph-based unsupervised ranking algorithm for keyword extraction and extractive summarization, inspired by PageRank.

### 7. ROUGE: A Package for Automatic Evaluation of Summaries (2004)
- **Authors:** Chin-Yew Lin
- **Year:** 2004
- **Venue:** ACL Workshop on Text Summarization
- **ID:** [no arxiv]
- **Summary:** Introduced ROUGE, the standard evaluation metric for automatic text summarization, alongside BLEU a foundational NLP evaluation tool.

### 8. Universal POS Tags (2011)
- **Authors:** Slav Petrov, Dipanjan Das, Ryan McDonald
- **Year:** 2011
- **Venue:** ACL
- **ID:** [no arxiv]
- **Summary:** Introduced a universal tag set mapping language-specific POS tags to a common inventory, enabling cross-linguistic POS tagging and transfer.

### 9. Learning Word Vectors for Sentiment Analysis (2011)
- **Authors:** Andrew L. Maas, Raymond E. Daly, Peter T. Pham, Dan Huang, Andrew Y. Ng, Christopher Potts
- **Year:** 2011
- **Venue:** ACL
- **ID:** [no arxiv]
- **Summary:** Learned domain-specific word vectors jointly with sentiment classification, showing that sentiment-tuned embeddings outperform general-purpose ones for sentiment tasks.

### 10. Natural Language Processing (Almost) from Scratch (2011)
- **Authors:** Ronan Collobert, Jason Weston, Léon Bottou, Michael Karlen, Koray Kavukcuoglu, Pavel Kuksa
- **Year:** 2011
- **Venue:** Journal of Machine Learning Research
- **ID:** arXiv:1103.0398
- **Summary:** Introduced a unified neural architecture for multiple NLP tasks (POS tagging, chunking, NER, SRL) trained with a shared embedding layer, pioneering multi-task learning in NLP.

### 11. Context-Dependent Pre-Trained Neural Network Language Models (2007)
- **Authors:** Holger Schwenk, Jean-Luc Gauvain
- **Year:** 2007
- **Venue:** Interspeech
- **ID:** [no arxiv]
- **Summary:** Early work on pre-training neural network language models and adapting them to specific domains, anticipating later pretraining paradigms.

### 12. Recurrent Neural Network Based Language Model (2010)
- **Authors:** Tomas Mikolov, Martin Karafiát, Lukas Burget, Jan Honza Cernocký, Sanjeev Khudanpur
- **Year:** 2010
- **Venue:** Interspeech
- **ID:** [no arxiv]
- **Summary:** Introduced the RNN language model (RNNLM), which captures long-range word dependencies and became foundational for NMT and speech recognition.

### 13. CoNLL-2003 Shared Task: Language-Independent Named Entity Recognition (2003)
- **Authors:** Erik F. Tjong Kim Sang, Fien De Meulder
- **Year:** 2003
- **Venue:** CoNLL
- **ID:** [no arxiv]
- **Summary:** The standard NER benchmark dataset (English and German) used for decades of NER research and still a primary evaluation.

### 14. The Penn Treebank: Building a Large Annotated Corpus of English (1993)
- **Authors:** Mitchell Marcus, Grace Kim, Mary Ann Marcinkiewicz, Robert MacIntyre, Ann Taylor, et al.
- **Year:** 1993
- **Venue:** LDC / HLT
- **ID:** [no arxiv]
- **Summary:** The Penn Treebank, the foundational annotated English corpus used for decades of POS tagging, parsing, and NLP benchmarking.

### 15. OntoNotes Release 5.0 (2013)
- **Authors:** Ralph Weischedel, Sameer Pradhan, et al.
- **Year:** 2013
- **Venue:** LDC
- **ID:** [no arxiv]
- **Summary:** OntoNotes, a large multi-genre corpus annotated for POS, parse, NER, coreference, and word senses across multiple languages — a foundational NLP resource.

---

## 2013–2015: Word Embeddings & Early Sequence Models

### 16. Efficient Estimation of Word Representations in Vector Space (word2vec) (2013)
- **Authors:** Tomas Mikolov, Kai Chen, Greg Corrado, Jeffrey Dean
- **Year:** 2013
- **Venue:** ICLR Workshop
- **ID:** arXiv:1301.3781
- **Summary:** Introduced word2vec (skip-gram and CBOW), enabling efficient learning of distributed word representations that capture semantic and syntactic word relationships at unprecedented scale.

### 17. Distributed Representations of Words and Phrases and their Compositionality (2013)
- **Authors:** Tomas Mikolov, Ilya Sutskever, Kai Chen, Greg Corrado, Jeffrey Dean
- **Year:** 2013
- **Venue:** NeurIPS
- **ID:** arXiv:1310.4546
- **Summary:** Extended word2vec with negative sampling and subsampling of frequent words, making training efficient and producing phrase-level vector representations.

### 18. Linguistic Regularities in Continuous Space Word Representations (2013)
- **Authors:** Tomas Mikolov, Wen-tau Yih, Geoffrey Zweig
- **Year:** 2013
- **Venue:** NAACL
- **ID:** [no arxiv]
- **Summary:** Demonstrated that word2vec embeddings exhibit vector arithmetic capturing analogical reasoning (king − man + woman ≈ queen), launching a wave of research on compositional semantics in embedding spaces.

### 19. Word Translation Without Parallel Data (2013)
- **Authors:** Tomas Mikolov, Quoc V. Le, Ilya Sutskever
- **Year:** 2013
- **Venue:** ICLR
- **ID:** arXiv:1309.4168
- **Summary:** Showed that word embeddings across languages align linearly, enabling cross-lingual word translation without parallel corpora — a foundational result for multilingual NLP.

### 20. Recursive Deep Models for Semantic Compositionality Over a Sentiment Treebank (2013)
- **Authors:** Richard Socher, Alex Perelygin, Jean Wu, Jason Chuang, Christopher D. Manning, Andrew Ng, Christopher Potts
- **Year:** 2013
- **Venue:** EMNLP
- **ID:** [no arxiv]
- **Summary:** Introduced the Recursive Neural Tensor Network (RNTN) and the Stanford Sentiment Treebank, enabling fine-grained sentiment classification at the phrase and sentence level.

### 21. Multilingual Distributed Representations Without Word Alignment (2013)
- **Authors:** Karl Moritz Hermann, Phil Blunsom
- **Year:** 2013
- **Venue:** ICML
- **ID:** arXiv:1401.1533 (expanded version)
- **Summary:** Learned cross-lingual distributed representations without parallel word alignment, enabling multilingual sentence-level representations via autoencoder-based methods.

### 22. Bilingual Word Embeddings for Phrase-Based Machine Translation (2013)
- **Authors:** Will Y. Zou, Richard Socher, Christopher D. Manning, Andrew Y. Ng
- **Year:** 2013
- **Venue:** EMNLP
- **ID:** arXiv:1309.4564
- **Summary:** Learned bilingual word embeddings to improve phrase-based MT, showing that cross-lingual embeddings enhance translation quality by capturing semantic correspondences.

### 23. Convolutional Neural Networks for Sentence Classification (2014)
- **Authors:** Yoon Kim
- **Year:** 2014
- **Venue:** EMNLP
- **ID:** arXiv:1408.5882
- **Summary:** Introduced a simple CNN architecture over pre-trained word vectors for sentence classification, showing strong performance across multiple sentiment and topic tasks.

### 24. A Convolutional Neural Network for Modelling Sentences (2014)
- **Authors:** Nal Kalchbrenner, Edward Grefenstette, Phil Blunsom
- **Year:** 2014
- **Venue:** ACL
- **ID:** arXiv:1404.2188
- **Summary:** Introduced the dynamic convolutional neural network (DCNN) for sentence modeling, using dynamic k-max pooling to capture hierarchical sentence structure.

### 25. GloVe: Global Vectors for Word Representation (2014)
- **Authors:** Jeffrey Pennington, Richard Socher, Christopher D. Manning
- **Year:** 2014
- **Venue:** EMNLP
- **ID:** arXiv:1407.0553 [note: listed year 2014]
- **Summary:** Introduced GloVe, which learns word vectors from global co-occurrence statistics, combining the advantages of global matrix factorization and local context window methods.

### 26. Don't Count, Predict! A Systematic Comparison of Context-Counting vs. Context-Predicting Semantic Vectors (2014)
- **Authors:** Marco Baroni, Georgiana Dinu, Germán Kruszewski
- **Year:** 2014
- **Venue:** ACL
- **ID:** arXiv:1403.5046 [note: listed 2014]
- **Summary:** Systematically compared count-based and predict-based distributional semantic models, finding predictive (word2vec-style) models consistently outperform count-based methods.

### 27. Sequence to Sequence Learning with Neural Networks (2014)
- **Authors:** Ilya Sutskever, Oriol Vinyals, Quoc V. Le
- **Year:** 2014
- **Venue:** NeurIPS
- **ID:** arXiv:1409.3215
- **Summary:** Introduced the encoder-decoder seq2seq framework using two LSTMs, demonstrating end-to-end neural machine translation and achieving state-of-the-art results on English-to-French translation.

### 28. Learning Phrase Representations using RNN Encoder-Decoder for Statistical Machine Translation (2014)
- **Authors:** Kyunghyun Cho, Bart van Merriënboer, Çağlar Gülçehre, Dzmitry Bahdanau, Fethi Bougares, Holger Schwenk, Yoshua Bengio
- **Year:** 2014
- **Venue:** EMNLP
- **ID:** arXiv:1406.1078
- **Summary:** Introduced the Gated Recurrent Unit (GRU) and the RNN encoder-decoder architecture, enabling neural translation that improved phrase-based SMT as a component.

### 29. Neural Machine Translation by Jointly Learning to Align and Translate (2014/2015)
- **Authors:** Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio
- **Year:** 2014
- **Venue:** ICLR 2015
- **ID:** arXiv:1409.0473
- **Summary:** Introduced additive (content-based) attention for NMT, solving the bottleneck of fixed-length encoding and enabling the decoder to focus on relevant source words — a foundational attention mechanism.

### 30. On the Properties of Neural Machine Translation: Encoder-Decoder Approaches (2014)
- **Authors:** Kyunghyun Cho, Bart van Merriënboer, Dzmitry Bahdanau, Yoshua Bengio
- **Year:** 2014
- **Venue:** SSST-8 workshop / arXiv preprint
- **ID:** arXiv:1409.1259
- **Summary:** Analyzed encoder-decoder NMT architectures, finding RNN encoders handle variable-length sentences and that performance degrades on long sentences — motivating attention.

### 31. Memory Networks (2014)
- **Authors:** Jason Weston, Sumit Chopra, Antoine Bordes
- **Year:** 2014
- **Venue:** ICLR 2015
- **ID:** arXiv:1410.3916
- **Summary:** Introduced Memory Networks, an explicit memory-augmented architecture for QA and reasoning tasks requiring long-range context — foundational for later retrieval-augmented models.

### 32. Addressing the Rare Word Problem in Neural Machine Translation (2015)
- **Authors:** Minh-Thang Luong, Ilya Sutskever, Quoc V. Le, Oriol Vinyals, Wojciech Zaremba
- **Year:** 2015
- **Venue:** ACL
- **ID:** arXiv:1410.8008
- **Summary:** Tackled the rare word (out-of-vocabulary) problem in NMT by using positional pointers and hybrid word/character models, significantly improving translation of rare words.

### 33. Modeling Multi-turn Conversations with Deep Utterance Embeddings (2015)
- **Authors:** Ryan Lowe, Nissan Pow, Iulian V. Serban, Joelle Pineau
- **Year:** 2015
- **Venue:** ICLR Workshop
- **ID:** arXiv:1504.04208
- **Summary:** Introduced the Ubuntu Dialogue Corpus and response ranking with LSTM-based utterance embeddings, a foundational dataset/model for dialogue response selection.

### 34. End-to-End Memory Networks (2015)
- **Authors:** Sainbayar Sukhbaatar, Arthur Szlam, Jason Weston, Rob Fergus
- **Year:** 2015
- **Venue:** NeurIPS
- **ID:** arXiv:1503.08895
- **Summary:** Extended Memory Networks to be trained end-to-end without supervision of supporting facts, demonstrating strong performance on QA tasks.

### 35. Teaching Machines to Read and Comprehend (2015)
- **Authors:** Karl Moritz Hermann, Tomáš Kočiský, Edward Grefenstette, Lasse Espeholt, Will Kay, Mustafa Suleyman, Phil Blunsom
- **Year:** 2015
- **Venue:** NeurIPS
- **ID:** arXiv:1506.03340
- **Summary:** Introduced CNN/DailyMail and Children's Book Test datasets for machine reading comprehension, benchmarking several neural QA models including attentive readers.

### 36. A Neural Attention Model for Abstractive Sentence Summarization (2015)
- **Authors:** Alexander M. Rush, Sumit Chopra, Jason Weston
- **Year:** 2015
- **Venue:** EMNLP
- **ID:** arXiv:1509.00685
- **Summary:** Introduced a neural attention-based abstractive summarization model using a convolutional encoder and attention-based decoder, a precursor to modern summarization.

### 37. Deep Unordered Composition Rivals Syntactic Methods for Text Classification (2015)
- **Authors:** Mohit Iyyer, Varun Manjunatha, Joydeep Ghosh, Jordan Boyd-Graber
- **Year:** 2015
- **Venue:** ACL
- **ID:** arXiv:1504.05548
- **Summary:** Showed that simple "deep averaging" networks over word vectors rival recursive syntactic models for text classification, challenging the need for explicit syntactic composition.

### 38. Learning to Generate Reviews and Discovering Sentiment (2017)
- **Authors:** Alec Radford, Rafal Józefowicz, Ilya Sutskever
- **Year:** 2017
- **Venue:** arXiv preprint
- **ID:** arXiv:1704.01444
- **Summary:** Trained a byte-level LSTM language model that discovered a single "sentiment neuron" representing sentiment, an early interpretability finding in neural language models.

### 39. Exploring the Limits of Language Modeling (2016)
- **Authors:** Rafal Józefowicz, Oriol Vinyals, Mike Schuster, Noam Shazeer, Yonghui Wu
- **Year:** 2016
- **Venue:** ICLR
- **ID:** arXiv:1602.02410
- **Summary:** Explored large-scale LSTMs and character-CNN language models, achieving state-of-the-art on Penn Treebank and showing that carefully tuned LSTMs rival more complex architectures.

### 40. An Empirical Evaluation of Generic Convolutional and Recurrent Networks for Sequence Modeling (2018)
- **Authors:** Shaojie Bai, J. Zico Kolter, Vladlen Koltun
- **Year:** 2018
- **Venue:** arXiv preprint (later NeurIPS)
- **ID:** arXiv:1803.01271
- **Summary:** Introduced Temporal Convolutional Networks (TCNs), showing that simple convolutional architectures outperform recurrent networks on sequence modeling tasks, challenging the LSTM's dominance.

---

## 2015–2017: NMT, Tokenization, NER, Parsing, QA
### 41. SNLI / A Large Annotated Corpus for Learning Natural Language Inference (2015)
- **Authors:** Samuel R. Bowman, Gabor Angeli, Christopher Potts, Christopher D. Manning
- **Year:** 2015
- **Venue:** EMNLP
- **ID:** arXiv:1508.05326
- **Summary:** Introduced the Stanford Natural Language Inference (SNLI) corpus, the first large NLI dataset, catalyzing NLI research and becoming a standard NLP benchmark.

### 42. Effective Approaches to Attention-based Neural Machine Translation (2015)
- **Authors:** Minh-Thang Luong, Hieu Pham, Christopher D. Manning
- **Year:** 2015
- **Venue:** EMNLP
- **ID:** arXiv:1508.04025
- **Summary:** Introduced location-based and dot-product attention mechanisms for NMT, with global and local attention variants that were widely adopted.

### 43. Transition-Based Dependency Parsing with Stack Long Short-Term Memory (2015)
- **Authors:** Chris Dyer, Miguel Ballesteros, Wang Ling, William Cochran, Antoine Taggerow, Noah A. Smith
- **Year:** 2015
- **Venue:** ACL
- **ID:** arXiv:1505.08075
- **Summary:** Introduced stack-LSTMs for transition-based dependency parsing, learning to compose representations of parser state for accurate, fast dependency parsing.

### 44. Named Entity Recognition with Character-Level Models (2015)
- **Authors:** Miguel Ballesteros, Chris Dyer, Noah A. Smith
- **Year:** 2015
- **Venue:** EMNLP
- **ID:** [no arxiv]
- **Summary:** Showed that character-level neural models improve NER for morphologically rich languages, capturing morphological structure without external resources.

### 45. Deep Learning for Answer Sentence Selection (2015)
- **Authors:** Aliaksei Severyn, Alessandro Moschitti
- **Year:** 2015
- **Venue:** ACL
- **ID:** arXiv:1412.1632
- **Summary:** Applied deep learning with LSTMs to answer sentence selection in QA, using sentence-level representations and ranking loss for retrieval-based QA.

### 46. Sequence Level Training with Recurrent Neural Networks (2016)
- **Authors:** Marc'Aurelio Ranzato, Sumit Chopra, Michael Auli, Wojciech Zaremba
- **Year:** 2016
- **Venue:** ICLR
- **ID:** arXiv:1511.06732
- **Summary:** Introduced MIXER, an algorithm for sequence-level training of RNNs with REINFORCE, enabling direct optimization of task-level metrics like BLEU rather than cross-entropy.

### 47. Minimum Risk Training for Neural Machine Translation (2016)
- **Authors:** Shiqi Shen, Yong Cheng, Zhongjun He, Lei He, Hua Wu, Yajuan Liu, et al.
- **Year:** 2016
- **Venue:** ACL
- **ID:** arXiv:1512.02433
- **Summary:** Introduced minimum risk training for NMT, optimizing expected task-level loss rather than cross-entropy, significantly improving translation quality.

### 48. Neural Machine Translation of Rare Words with Subword Units (BPE) (2016)
- **Authors:** Rico Sennrich, Barry Haddow, Alexandra Birch
- **Year:** 2016
- **Venue:** ACL
- **ID:** arXiv:1508.07909
- **Summary:** Introduced byte pair encoding (BPE) for NMT, segmenting rare and unknown words into subword units — the dominant tokenization method for modern LLMs.

### 49. Improving Neural Machine Translation Models with Monolingual Data (Back-Translation) (2016)
- **Authors:** Rico Sennrich, Barry Haddow, Alexandra Birch
- **Year:** 2016
- **Venue:** ACL
- **ID:** arXiv:1511.06709
- **Summary:** Introduced back-translation for NMT, using synthetic monolingual data to improve translation quality — a simple but powerful data augmentation technique.

### 50. Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation (2016)
- **Authors:** Yonghui Wu, Mike Schuster, Zhifeng Chen, Quoc V. Le, Mohammad Norouzi, Wolfgang Macherey, et al.
- **Year:** 2016
- **Venue:** arXiv preprint
- **ID:** arXiv:1609.08144
- **Summary:** Described Google's production GNMT system using deep LSTMs with residual connections and attention, reducing translation errors by ~60% and enabling production-scale NMT.

### 51. Neural Architectures for Named Entity Recognition (2016)
- **Authors:** Guillaume Lample, Miguel Ballesteros, Sandeep Subramanian, Kazuya Kawakami, Chris Dyer
- **Year:** 2016
- **Venue:** NAACL
- **ID:** arXiv:1603.01360
- **Summary:** Introduced a BiLSTM-CRF architecture with character-level features for NER, removing the need for hand-crafted features and achieving state-of-the-art results.

### 52. End-to-end Sequence Labeling via Bi-directional LSTM-CNNs-CRF (2016)
- **Authors:** Xuezhe Ma, Eduard Hovy
- **Year:** 2016
- **Venue:** ACL
- **ID:** arXiv:1603.01375
- **Summary:** Combined BiLSTM, CNN character encoders, and CRF decoding for end-to-end sequence labeling (POS tagging and chunking) without feature engineering.

### 53. Improved Transition-Based Parsing by Modeling Transitions Instead of Words (2016)
- **Authors:** Miguel Ballesteros, Yoav Goldberg, Chris Dyer, Noah A. Smith
- **Year:** 2016
- **Venue:** EMNLP
- **ID:** arXiv:1601.08761
- **Summary:** Improved transition-based parsing by replacing word embeddings with learned representations of parsing transitions, reducing error propagation.

### 54. SQuAD: 100,000+ Questions for Machine Comprehension of Text (2016)
- **Authors:** Pranav Rajpurkar, Jian Zhang, Konstantin Lopyrev, Percy Liang
- **Year:** 2016
- **Venue:** EMNLP
- **ID:** arXiv:1606.05250
- **Summary:** Introduced Stanford Question Answering Dataset (SQuAD), a reading comprehension benchmark of 100k+ questions that became the standard for QA evaluation.

### 55. Generating Wikipedia by Summarizing Long Sequences (2018)
- **Authors:** Peter J. Liu, Yuanzhong Xu, Wei Liu, et al.
- **Year:** 2018
- **Venue:** ICLR
- **ID:** arXiv:1801.10198
- **Summary:** Applied seq2seq with attention to abstractive summarization of long documents, generating Wikipedia summaries from source documents.

### 56. ROCStories / A Corpus and Cloze Evaluation for Deeper Understanding of Machine Narratives (2016)
- **Authors:** Nasrin Mostafazadeh, Nathanael Chambers, Xiaodong He, et al.
- **Year:** 2016
- **Venue:** NAACL
- **ID:** arXiv:1604.05194
- **Summary:** Introduced ROCStories and the Story Cloze Test, evaluating script understanding and commonsense reasoning in narrative comprehension.

### 57. Enriching Word Vectors with Subword Information (fastText) (2017)
- **Authors:** Piotr Bojanowski, Edouard Grave, Armand Joulin, Tomas Mikolov
- **Year:** 2017
- **Venue:** TACL
- **ID:** arXiv:1607.04606
- **Summary:** Extended word2vec with subword n-gram information (fastText), improving representations for rare words, morphologically rich languages, and out-of-vocabulary words.

### 58. Google's Multilingual Neural Machine Translation System: Enabling Zero-Shot Translation (2017)
- **Authors:** Melvin Johnson, Mike Schuster, Quoc V. Le, Maxim Krikun, Yonghui Wu, Chen Zhifeng, et al.
- **Year:** 2017
- **Venue:** TACL
- **ID:** arXiv:1611.04558
- **Summary:** Demonstrated a single NMT model translating between multiple language pairs, including zero-shot translation between language pairs never seen in training.

### 59. The Stanford CoreNLP Natural Language Processing Toolkit (2014)
- **Authors:** Christopher D. Manning, Mihai Surdeanu, John Bauer, Jenny Finkel, Steven Bethard, David McClosky
- **Year:** 2014
- **Venue:** ACL Demo
- **ID:** [no arxiv]
- **Summary:** Introduced Stanford CoreNLP, the widely-used suite of NLP tools for tokenization, sentence splitting, POS tagging, NER, parsing, and coreference.

### 60. Universal Dependencies v1 (2015)
- **Authors:** Joakim Nivre, et al.
- **Year:** 2015
- **Venue:** LREC
- **ID:** [no arxiv]
- **Summary:** Introduced Universal Dependencies, a consistent cross-linguistic treebank annotation framework covering 100+ languages — a cornerstone for multilingual NLP and parsing research.

### 61. Universal Dependencies v2: A Multilingual Treebank Collection (2017)
- **Authors:** Joakim Nivre, Marie-Catherine de Marneffe, Filip Ginter, Yoav Goldberg, Jan Hajič, et al.
- **Year:** 2016
- **Venue:** LREC
- **ID:** [no arxiv]
- **Summary:** Extended Universal Dependencies across a broader set of languages, a cornerstone for multilingual NLP and parsing research.

### 62. PersonaChat: A Personalized Dialogue Dataset (2018)
- **Authors:** Saizheng Zhang, Emily Dinan, Jack Urbanek, et al.
- **Year:** 2018
- **Venue:** ACL
- **ID:** arXiv:1801.07253
- **Summary:** Introduced PersonaChat, a dataset of persona-conditioned dialogues for evaluating personalized chitchat, advancing dialogue generation.

---

## 2017–2019: The Transformer Era & Pre-trained Models

### 63. Convolutional Sequence to Sequence Learning (2017)
- **Authors:** Jonas Gehring, Michael Auli, David Grangier, Denis Yarats, Yann N. Dauphin
- **Year:** 2017
- **Venue:** ICML
- **ID:** arXiv:1705.03122
- **Summary:** Introduced ConvS2S, an all-convolutional seq2seq model with multi-step attention that outperformed recurrent models and rivaled early transformers on WMT benchmarks.

### 64. Attention Is All You Need (2017)
- **Authors:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin
- **Year:** 2017
- **Venue:** NeurIPS
- **ID:** arXiv:1706.03762
- **Summary:** Introduced the Transformer architecture based entirely on self-attention, dispensing with recurrence — the foundation for BERT, GPT, and all subsequent transformer-based models.

### 65. Learned in Translation: Contextualized Word Vectors (2017)
- **Authors:** Bryan McCann, James Bradbury, Charles Xiong, Richard Socher
- **Year:** 2017
- **Venue:** NeurIPS
- **ID:** arXiv:1708.00107
- **Summary:** Introduced CoVe (contextualized word vectors), using a pre-trained encoder to produce context-dependent word representations — a precursor to ELMo and BERT.

### 66. ParlAI: A Dialog Research Software Platform (2017)
- **Authors:** Alexander Miller, Will Feng, Adam Fisch, et al.
- **Year:** 2017
- **Venue:** arXiv preprint
- **ID:** arXiv:1705.06476
- **Summary:** Introduced ParlAI, a unified platform for training and evaluating dialogue models across many dialogue tasks, fostering reproducible dialogue research.

### 67. SWAG: Large-Scale Adversarial Examples for Commonsense Reasoning (2018)
- **Authors:** Rowan Zellers, Yonatan Bisk, Roy Schwartz, Yejin Choi
- **Year:** 2018
- **Venue:** EMNLP
- **ID:** arXiv:1808.05326
- **Summary:** Introduced SWAG, a dataset of 113k grounded situations for evaluating commonsense NLI, adversarially filtered to be challenging for models.

### 68. MultiNLI: A Broad-Coverage Natural Language Inference Corpus (2018)
- **Authors:** Adina Williams, Nikita Nangia, Samuel R. Bowman
- **Year:** 2018
- **Venue:** NAACL
- **ID:** arXiv:1704.05426
- **Summary:** Introduced MultiNLI (MNLI), a large multi-genre natural language inference dataset, the cornerstone of the GLUE benchmark.

### 69. GLUE: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding (2018)
- **Authors:** Alex Wang, Amanpreet Singh, Julian Michael, Felix Hill, Omer Levy, Samuel R. Bowman
- **Year:** 2018
- **Venue:** arXiv preprint (ICLR 2019)
- **ID:** arXiv:1804.07461
- **Summary:** Introduced GLUE, a multi-task benchmark for evaluating general NLU across diverse tasks, becoming the standard for measuring NLP progress for years.

### 70. Improving Language Understanding by Generative Pre-Training (GPT-1) (2018)
- **Authors:** Alec Radford, Karthik Narasimhan, Tim Salimans, Ilya Sutskever
- **Year:** 2018
- **Venue:** OpenAI Technical Report
- **ID:** [no arxiv]
- **Summary:** Introduced GPT, a 12-layer decoder-only transformer pre-trained on unlabeled text and fine-tuned for downstream tasks, demonstrating that generative pre-training transfers to NLU tasks.

### 71. Deep Contextualized Word Representations (ELMo) (2018)
- **Authors:** Matthew Peters, Mark Neumann, Mohit Iyyer, Matt Gardner, Christopher Clark, Kenton Lee, Luke Zettlemoyer
- **Year:** 2018
- **Venue:** NAACL
- **ID:** arXiv:1802.05365
- **Summary:** Introduced ELMo, deep contextualized word representations from bidirectional language models, establishing the pre-train-then-finetune paradigm that BERT would extend.

### 72. Universal Language Model Fine-tuning for Text Classification (ULMFiT) (2018)
- **Authors:** Jeremy Howard, Sebastian Ruder
- **Year:** 2018
- **Venue:** ACL
- **ID:** arXiv:1801.06146
- **Summary:** Introduced ULMFiT, a three-phase transfer learning method (general-domain LM pre-training, target-domain fine-tuning, classifier fine-tuning) with discriminative fine-tuning and slanted triangular learning rates, pioneering transfer learning for NLP.

### 73. AllenNLP: A Deep Semantic Natural Language Processing Platform (2018)
- **Authors:** Matt Gardner, Joel Grus, Mark Neumann, Oyvind Tafjord, Pradeep Dasigi, Nelson F. Liu, et al.
- **Year:** 2018
- **Venue:** ACL Demo
- **ID:** arXiv:1805.07937
- **Summary:** Introduced AllenNLP, a research platform built on PyTorch for developing and evaluating deep NLP models with a component-based architecture.

### 74. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (2019)
- **Authors:** Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova
- **Year:** 2019
- **Venue:** NAACL
- **ID:** arXiv:1810.04805
- **Summary:** Introduced BERT, a bidirectionally pre-trained transformer using masked language modeling (MLM) and next sentence prediction (NSP), achieving state-of-the-art on 11 NLP tasks and launching the pre-trained model era.

### 75. Language Models are Unsupervised Multitask Learners (GPT-2) (2019)
- **Authors:** Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever
- **Year:** 2019
- **Venue:** OpenAI Technical Report
- **ID:** [no arxiv]
- **Summary:** Introduced GPT-2, a 1.5B parameter decoder-only transformer trained on WebText, demonstrating strong zero-shot performance on multiple NLP tasks without task-specific fine-tuning.

### 76. Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context (2019)
- **Authors:** Zihang Dai, Zhilin Yang, Yiming Yang, Jaime Carbonell, Quoc V. Le, Ruslan Salakhutdinov
- **Year:** 2019
- **Venue:** ACL
- **ID:** arXiv:1901.02860
- **Summary:** Introduced segment-level recurrence and relative positional encodings, enabling language modeling with context beyond a fixed-length window — a key innovation for long-context transformers.

### 77. XLNet: Generalized Autoregressive Pretraining for Language Understanding (2019)
- **Authors:** Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov, Quoc V. Le
- **Year:** 2019
- **Venue:** NeurIPS
- **ID:** arXiv:1906.08237
- **Summary:** Introduced XLNet, a generalized autoregressive pre-training objective modeling all permutations of the factorization order, combining the bidirectional context of BERT with the autoregressive generation of GPT.

### 78. RoBERTa: A Robustly Optimized BERT Pretraining Approach (2019)
- **Authors:** Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov
- **Year:** 2019
- **Venue:** arXiv preprint
- **ID:** arXiv:1907.11692
- **Summary:** Showed that BERT was significantly undertrained; improved the pre-training recipe (removing NSP, training longer with more data, larger batches, dynamic masking) to set new state-of-the-art results.

### 79. ERNIE: Enhanced Language Representation with Informative Entities (2019)
- **Authors:** Zhengyan Zhang, Xu Han, Zhiyuan Liu, Xin Jiang, Maosong Sun, Qun Liu
- **Year:** 2019
- **Venue:** ACL
- **ID:** arXiv:1905.07129
- **Summary:** Injected knowledge graph entity information into the pre-training process, improving the model's ability to leverage factual knowledge for NLU tasks.

### 80. UniLM: A Unified Framework for Natural Language Understanding and Generation (2019)
- **Authors:** Li Dong, Nan Yang, Wenhui Wang, Furu Wei, Xiaodong Liu, Yu Wang, Jianfeng Gao, Ming Zhou, Hsiao-Wuen Hon
- **Year:** 2019
- **Venue:** NeurIPS
- **ID:** arXiv:1905.03197
- **Summary:** Introduced UniLM, a unified pre-training framework combining unidirectional, bidirectional, and seq2seq LM objectives within a single Transformer for both NLU and NLG.

### 81. MASS: Masked Sequence to Sequence Pre-training for Language Generation (2019)
- **Authors:** Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu
- **Year:** 2019
- **Venue:** ICML
- **ID:** arXiv:1905.02450
- **Summary:** Introduced MASS, a masked seq2seq pre-training method where the encoder receives a sentence with masked fragments and the decoder predicts the full sentence.

### 82. Cross-lingual Language Model Pretraining (XLM) (2019)
- **Authors:** Guillaume Lample, Alexis Conneau
- **Year:** 2019
- **Venue:** NeurIPS
- **ID:** arXiv:1901.07291
- **Summary:** Introduced cross-lingual language model pretraining with MLM and TLM objectives, advancing cross-lingual transfer and zero-shot XNLI performance.

### 83. HellaSwag: Can a Machine Really Finish Your Sentence? (2019)
- **Authors:** Rowan Zellers, Ari Holtzman, Yonatan Bisk, Ali Farhadi, Yejin Choi
- **Year:** 2019
- **Venue:** ACL
- **ID:** arXiv:1905.07830
- **Summary:** Introduced HellaSwag, a harder adversarial commonsense reasoning benchmark that defeated nearly all models at the time, showing reasoning gaps.

### 84. CoQA: A Conversational Question Answering Challenge (2019)
- **Authors:** Siva Reddy, Danqi Chen, Christopher D. Manning
- **Year:** 2019
- **Venue:** TACL
- **ID:** arXiv:1808.07042
- **Summary:** Introduced CoQA, a conversational QA benchmark requiring models to understand text and answer questions in a conversational flow with abstractive answers.

### 85. Natural Questions: A Benchmark for Question Answering Research (2019)
- **Authors:** Tom Kwiatkowski, Jennimaria Palomaki, Olivia Redfield, et al.
- **Year:** 2019
- **Venue:** TACL
- **ID:** arXiv:1901.07404
- **Summary:** Introduced NaturalQuestions, a large-scale open-domain QA benchmark with real user questions from Google Search and Wikipedia answers.

### 86. SQuAD v2.0 / Know What You Don't Know: Unanswerable Questions for SQuAD2 (2018)
- **Authors:** Pranav Rajpurkar, Robin Jia, Percy Liang
- **Year:** 2018
- **Venue:** ACL
- **ID:** arXiv:1806.03822
- **Summary:** Extended SQuAD with unanswerable questions, requiring models to determine when no answer exists in the context — preventing over-confident wrong answers.

### 87. HotpotQA: A Dataset for Diverse, Explainable Multi-hop Question Answering (2018)
- **Authors:** Zixian Huang, Haotian Zhou, Yixin Wang, et al.
- **Year:** 2018
- **Venue:** EMNLP
- **ID:** arXiv:1809.09600
- **Summary:** Introduced HotpotQA, a multi-hop QA benchmark requiring reasoning across multiple documents to answer complex questions with supporting facts.

### 88. DROP: A Reading Comprehension Benchmark Requiring Discrete Reasoning Against Paragraphs (2019)
- **Authors:** Dheeru Dua, Yizhong Wang, Pradeep Dasigi, Alon Talmor, Matt Gardner
- **Year:** 2019
- **Venue:** ACL
- **ID:** arXiv:1903.00156
- **Summary:** Introduced DROP, a reading comprehension benchmark requiring discrete reasoning (addition, sorting, counting) over paragraph content.

### 89. CommonsenseQA: A Question Answering Challenge Targeting Commonsense Knowledge (2019)
- **Authors:** Alon Talmor, Jonathan Herzig, Nicholas Lourie, Jonathan Berant
- **Year:** 2019
- **Venue:** NAACL
- **ID:** arXiv:1811.00937
- **Summary:** Introduced CommonsenseQA, a multiple-choice QA dataset requiring commonsense knowledge beyond simple lexical associations.

### 90. SuperGLUE: A Stickier Benchmark for General-Purpose Language Understanding Systems (2019)
- **Authors:** Alex Wang, Yada Pruksachatkun, Nikita Nangia, Amanpreet Singh, Julian Michael, et al.
- **Year:** 2019
- **Venue:** NeurIPS
- **ID:** arXiv:1905.00537
- **Summary:** Introduced SuperGLUE, a harder benchmark of 10 NLU tasks (including coreference, QA, word sense) pushing beyond GLUE for models that had saturated it.

### 91. Language Models as Knowledge Bases? (2019)
- **Authors:** Fabio Petroni, Tim Rocktäschel, Sebastian Riedel, Patrick Lewis, Anton Bakhtin, Yuxiang Wu, et al.
- **Year:** 2019
- **Venue:** EMNLP
- **ID:** arXiv:1909.01066
- **Summary:** Probed pre-trained LMs as factual knowledge bases, introducing the LAMA benchmark and sparking research on whether LMs store factual knowledge.

### 92. SciBERT: A Pretrained Language Model for Scientific Text (2019)
- **Authors:** Iz Beltagy, Kyle Lo, Arman Cohan
- **Year:** 2019
- **Venue:** EMNLP
- **ID:** arXiv:1903.10676
- **Summary:** Pre-trained BERT on scientific papers (biomedical and CS), improving performance on scientific NER, classification, and relation extraction.

### 93. BioBERT: a pre-trained biomedical language representation model for biomedical text mining (2019)
- **Authors:** Jinhyuk Lee, Wonjin Yoon, Sungdong Kim, Donghyeon Lee, Minji Jeon, et al.
- **Year:** 2020
- **Venue:** Bioinformatics
- **ID:** arXiv:1901.08746
- **Summary:** Pre-trained BERT on biomedical text (PubMed abstracts + PMC articles), improving performance on biomedical NER, RE, and QA.

### 94. ClinicalBERT (2019)
- **Authors:** Kexin Huang, Jaan Altosaar, Rajesh Ranganath
- **Year:** 2019
- **Venue:** arXiv / Machine Learning for Healthcare
- **ID:** arXiv:1904.05342
- **Summary:** Pre-trained BERT on clinical notes (MIMIC-III), improving clinical NLP tasks like readmission prediction and NER.

---

## 2019–2021: Pre-training Diversification & Generation

### 95. BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension (2020)
- **Authors:** Mike Lewis, Yinhan Liu, Naman Goyal, Marjan Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Veselin Stoyanov, Luke Zettlemoyer
- **Year:** 2020
- **Venue:** ACL
- **ID:** arXiv:1910.13461
- **Summary:** Introduced BART, a seq2seq model pre-trained with denoising autoencoding (various text corruption functions), excelling at generation tasks while being competitive on comprehension.

### 96. T5: Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer (2020)
- **Authors:** Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang, Michael Matena, et al.
- **Year:** 2020
- **Venue:** JMLR
- **ID:** arXiv:1910.10683
- **Summary:** Introduced T5 (Text-to-Text Transfer Transformer), framing every NLP task as text-to-text and training on a massive multi-task mixture — a unified NLP paradigm.

### 97. CodeBERT: A Pre-Trained Model for Programming and Natural Language (2020)
- **Authors:** Daya Guo, Shuo Ren, Shuai Lu, et al.
- **Year:** 2020
- **Venue:** EMNLP Findings
- **ID:** arXiv:2002.08155
- **Summary:** Pre-trained a model on code-natural language pairs, enabling code search and NL-programming language understanding.

### 98. LayoutLM: Pre-training of Text and Layout for Document Image Understanding (2020)
- **Authors:** Yiheng Xu, Minghao Li, Mingbo Zhao, Furu Wei, Lei Cui, Nan Duan
- **Year:** 2020
- **Venue:** KDD
- **ID:** arXiv:1912.13318
- **Summary:** Introduced LayoutLM, incorporating text and layout information into pre-training for document understanding (forms, receipts), pioneering document AI.

### 99. LayoutLMv2: Pre-training of Multimodal Text + Layout for Document Image Understanding (2021)
- **Authors:** Yang Xu, Yiheng Xu, Mingbo Zhao, Furu Wei, et al.
- **Year:** 2021
- **Venue:** ACM MM
- **ID:** arXiv:2012.14740
- **Summary:** Added visual features and a text-image layout alignment objective to LayoutLM, improving performance on document understanding benchmarks.

### 100. GraphCodeBERT: Pre-training Code Representation with Data Flow (2021)
- **Authors:** Daya Guo, Shuai Lu, Yanlin Wang, et al.
- **Year:** 2021
- **Venue:** ICLR
- **ID:** arXiv:2009.08366
- **Summary:** Improved code representation pre-training by incorporating data flow (semantic structure), enhancing code understanding, search, and translation.

### 101. SpanBERT: Improving Pre-training by Representing and Predicting Spans (2020)
- **Authors:** Mandar Joshi, Danqi Chen, Yinhan Liu, Daniel S. Weld, Luke Zettlemoyer, Omer Levy
- **Year:** 2020
- **Venue:** TACL
- **ID:** arXiv:1907.10529
- **Summary:** Extended BERT with a span-based pre-training objective that masks contiguous spans and trains the model to predict the entire span, improving performance on span-selection tasks.

### 102. ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators (2020)
- **Authors:** Kevin Clark, Minh-Thang Luong, Quoc V. Le, Christopher D. Manning
- **Year:** 2020
- **Venue:** ICLR
- **ID:** arXiv:2003.10555
- **Summary:** Introduced the replaced token detection (RTD) pre-training task, where a generator corrupts tokens and a discriminator identifies them — more compute-efficient than MLM.

### 103. End-to-End Neural Coreference Resolution (2017/2020)
- **Authors:** Kevin Clark, Christopher D. Manning
- **Year:** 2016
- **Venue:** EMNLP
- **ID:** arXiv:1607.01795
- **Summary:** First end-to-end neural coreference resolution system, learning mention spans and entity clusters jointly without external mention detection.

### 104. Learning Recurrent Span Representations for Named Entity Recognition (2018)
- **Authors:** Kenton Lee, Luheng He, Luke Zettlemoyer
- **Year:** 2017
- **Venue:** EMNLP
- **ID:** arXiv:1711.04090
- **Summary:** Introduced span-based NER using recurrent span scoring, enabling the model to consider full mention boundaries rather than per-token labels.

### 105. Extractive Summarization with BERT (BertSum) (2019)
- **Authors:** Yang Liu, Mirella Lapata
- **Year:** 2019
- **Venue:** arXiv preprint (later EMNLP)
- **ID:** arXiv:1907.12461
- **Summary:** Applied pre-trained BERT with inter-sentence Transformer layers for extractive summarization, achieving state-of-the-art on CNN/DailyMail and NYT.

### 106. Get To The Point: Summarization with Pointer-Generator Networks (2017)
- **Authors:** Abigail See, Peter J. Liu, Christopher D. Manning
- **Year:** 2017
- **Venue:** ACL
- **ID:** arXiv:1704.04368
- **Summary:** Combined a sequence-to-sequence model with a pointer (copy) mechanism and coverage, reducing factual errors and repetition in abstractive summarization.

### 107. Deep Reinforcement Learning for Sequence-to-Sequence Models (2018)
- **Authors:** Romain Paulus, Caiming Xiong, Richard Socher
- **Year:** 2018
- **Venue:** ICLR
- **ID:** arXiv:1705.04305
- **Summary:** Applied RL to sequence-to-sequence summarization, using intra-attention and RL to reduce repetition and improve abstractive summarization quality.

### 108. DrQA: Reading Wikipedia to Answer Open-Domain Questions (2017)
- **Authors:** Danqi Chen, Adam Fisch, Jason Weston, Antoine Bordes
- **Year:** 2017
- **Venue:** ACL
- **ID:** arXiv:1606.05252
- **Summary:** Introduced DrQA, combining a retriever (Wikipedia) with a neural reader for open-domain QA, pioneering machine reading at scale.

### 109. mBERT for Cross-lingual Transfer (2019)
- **Authors:** Karthikeyan K, Zoran Ristov, Rikin Gandhi
- **Year:** 2019
- **Venue:** EMNLP
- **ID:** arXiv:1909.07216
- **Summary:** Re-evaluated the cross-lingual abilities of multilingual BERT, finding that mBERT's zero-shot transfer performance is robust even across structurally distant languages.

### 110. XTREME: A Massively Multilingual Benchmark for Evaluating Cross-lingual Generalization (2020)
- **Authors:** Junyang Hu, Jingxuan Sun, et al.
- **Year:** 2020
- **Venue:** ICML
- **ID:** arXiv:2003.11080
- **Summary:** Introduced XTREME, a massively multilingual benchmark spanning 40 languages and 10 tasks for evaluating cross-lingual generalization.

### 111. XLM-R: A Large-Scale Study of Massively Multilingual Language Model Pretraining (2020)
- **Authors:** Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume Wenzek, et al.
- **Year:** 2020
- **Venue:** EMNLP
- **ID:** arXiv:1911.02116
- **Summary:** Trained a 100-language RoBERTa on 2.5TB of CommonCrawl, showing that massively multilingual pretraining outperforms mBERT across low-resource languages.

### 112. mT5: A Massively Multilingual Pre-trained Text-to-Text Transformer (2021)
- **Authors:** Linting Xue, Noah Constant, Adam Roberts, Mihir Kale, Rami Al-Rfou, Aditya Siddhant, Aditya Barua, Colin Raffel
- **Year:** 2021
- **Venue:** ICLR
- **ID:** arXiv:2010.06877
- **Summary:** Introduced mT5, a multilingual variant of T5 pre-trained on 101 languages with the mC4 corpus, enabling strong cross-lingual transfer across diverse languages.

### 113. Massively Multilingual Neural Machine Translation (2019)
- **Authors:** Roee Aharoni, Melvin Johnson, et al.
- **Year:** 2019
- **Venue:** NAACL
- **ID:** arXiv:1902.00049
- **Summary:** Studied multilingual NMT across 102 languages, showing that a single model improves low-resource translation but suffers negative transfer for high-resource pairs.

### 114. Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks (2019)
- **Authors:** Nils Reimers, Iryna Gurevych
- **Year:** 2019
- **Venue:** EMNLP
- **ID:** arXiv:1908.10084
- **Summary:** Introduced Sentence-BERT, a modification of BERT using siamese/triplet networks for efficient sentence embeddings, enabling large-scale semantic similarity.

### 115. Stanza: A Neural Natural Language Processing Toolkit for Many Human Languages (2020)
- **Authors:** Peng Qi, Yuhao Zhang, Yuhui Zhang, Jason Bolton, Christopher D. Manning
- **Year:** 2020
- **Venue:** ACL Demo
- **ID:** arXiv:2003.07082
- **Summary:** Introduced Stanza, a neural NLP toolkit supporting 60+ languages with pipelines for tokenization, MWT expansion, POS, NER, parsing, and coreference.

### 116. Multilingual BERT for NER on Low-Resource Languages (2020)
- **Authors:** Afshin Rahimi, Trevor Cohn, et al.
- **Year:** 2019
- **Venue:** EMNLP
- **ID:** arXiv:1909.07216
- **Summary:** Showed that multilingual BERT provides strong zero-shot transfer for NER across typologically diverse languages, supporting low-resource NER.

### 117. MultiWOZ: A Large Multi-Domain Wizard-of-Oz Dataset for Task-Oriented Dialogue Modelling (2018)
- **Authors:** Pawel Budzianowski, Tsung-Hsien Wen, Bo-Hao Su, et al.
- **Year:** 2018
- **Venue:** EMNLP
- **ID:** arXiv:1810.00278
- **Summary:** Introduced MultiWOZ, a large multi-domain dialogue dataset, the standard benchmark for task-oriented dialogue systems.

### 118. SAMSum: A Corpus of Summaries of Chat Conversations (2019)
- **Authors:** Bogdan Gliwa, Wieslaw Kornacki, et al.
- **Year:** 2019
- **Venue:** AAAI
- **ID:** [no arxiv]
- **Summary:** Introduced SAMSum, a dialogue summarization dataset of messenger conversations, enabling evaluation of abstractive summarization on dialogue.

### 119. DynaBERT: Dynamic BERT with Adaptive Width and Depth (2020)
- **Authors:** Lu Hou, Zhiqi Huang, Qinyu Mao, et al.
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2004.04037
- **Summary:** Trained BERT with adaptive width and depth, enabling efficient inference at multiple computational budgets by selecting sub-networks.

### 120. TinyBERT: Distilling BERT for Natural Language Understanding (2020)
- **Authors:** Xiaoqi Jiao, Yichun Yin, Lifeng Shang, Xin Jiang, Xiao Chen, Linlin Li, Fang Wang, Qun Liu
- **Year:** 2020
- **Venue:** EMNLP Findings
- **ID:** arXiv:1909.10351
- **Summary:** Distilled BERT into a smaller model using attention and hidden-state transfer, preserving most of BERT's performance with a fraction of parameters.

### 121. DistilBERT, a distilled version of BERT (2020)
- **Authors:** Victor Sanh, Lysandre Debut, Julien Chaumond, Thomas Wolf
- **Year:** 2020
- **Venue:** NeurIPS Workshop
- **ID:** arXiv:1910.01108
- **Summary:** Distilled BERT via knowledge distillation, producing a 60% smaller, 60% faster model retaining 95% of BERT's performance — widely deployed in production.

### 122. Adversarial NLI (ANLI) (2020)
- **Authors:** Yixin Nie, Adina Williams, Emily Dinan, et al.
- **Year:** 2020
- **Venue:** TACL
- **ID:** arXiv:1910.14599
- **Summary:** Introduced Adversarial NLI (ANLI), a benchmark built via human-and-model-in-the-loop adversarial data collection, challenging models with hard NLI examples.

### 123. WinoGrande: An Adversarial Winograd Schema Challenge at Scale (2020)
- **Authors:** Keisuke Sakaguchi, Ronan Le Bras, Akari Asai, et al.
- **Year:** 2020
- **Venue:** AAAI
- **ID:** arXiv:1907.01865
- **Summary:** Introduced WinoGrande, a large-scale adversarial Winograd schema dataset for commonsense coreference reasoning, filtered via AFLite.

---

## 2020–2026: Modern NLP, LLMs, Retrieval, Instruction & Reasoning

### 124. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks (RAG) (2020)
- **Authors:** Patrick Lewis, Ethan Perez, Aleksandra Piktus, Fabio Petroni, Vladimir Karpukhin, Naman Goyal, et al.
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2005.11401
- **Summary:** Introduced Retrieval-Augmented Generation (RAG), combining a pre-trained retriever and generator for knowledge-intensive tasks — a paradigm-shifting approach for NLP.

### 125. Learning Dense Passage Retrieval for Open-Domain Question Answering (DPR) (2020)
- **Authors:** Vladimir Karpukhin, Barlas Oğuz, Sewon Min, Patrick Lewis, Ledell Wu, Sergey Edunov, Danqi Chen, Wen-tau Yih
- **Year:** 2020
- **Venue:** EMNLP
- **ID:** arXiv:2004.04906
- **Summary:** Introduced DPR (Dense Passage Retriever), training dual-encoders for passage retrieval in open-domain QA, replacing BM25 with learned dense retrieval.

### 126. ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT (2020)
- **Authors:** Omar Khattab, Matei Zaharia
- **Year:** 2020
- **Venue:** SIGIR
- **ID:** arXiv:2004.12832
- **Summary:** Introduced ColBERT, a late-interaction retrieval model combining BERT-based token-level scoring with efficient search for open-domain QA.

### 127. Don't Stop Pretraining: Adapt Language Models to Domains and Tasks (2020)
- **Authors:** Suchin Gururangan, Ana Marasović, Swabha Swayamdipta, Kyle Lo, Iz Beltagy, Doug Downey, Noah A. Smith
- **Year:** 2020
- **Venue:** ACL
- **ID:** arXiv:2004.10964
- **Summary:** Introduced domain-adaptive pretraining (DAPT) and task-adaptive pretraining (TAPT), showing that continued pretraining on domain and task data improves performance.

### 128. Language Models are Few-Shot Learners (GPT-3) (2020)
- **Authors:** Tom B. Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, et al.
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2005.14165
- **Summary:** Introduced GPT-3 (175B parameters), demonstrating that scaling enables strong few-shot performance via in-context learning without gradient updates — a paradigm shift showing emergent capabilities from scale.

### 129. Scaling Laws for Neural Language Models (2020)
- **Authors:** Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B. Brown, Benjamin Chess, Rewon Child, Scott Gray, Alec Radford, Jeffrey Wu, Dario Amodei
- **Year:** 2020
- **Venue:** NeurIPS
- **ID:** arXiv:2001.08361
- **Summary:** Established smooth power-law scaling for LM loss as a function of model size, dataset size, and compute, providing a foundational framework for predicting and planning large-model training.

### 130. Model Cards for Model Reporting (2019)
- **Authors:** Margaret Mitchell, Simone Wu, Andrew Zaldivar, Parker Barnes, Lucy Vasserman, et al.
- **Year:** 2019
- **Venue:** FAT* (FAccT)
- **ID:** arXiv:1810.03977
- **Summary:** Introduced Model Cards, a framework for documenting ML model performance and intended use, widely adopted for NLP model transparency.

### 131. Beyond Accuracy: Behavioral Testing of NLP Models with CheckList (2020)
- **Authors:** Marco Tulio Ribeiro, Tongshuang Wu, Carlos Guestrin, Sameer Singh
- **Year:** 2020
- **Venue:** ACL
- **ID:** arXiv:2005.04618
- **Summary:** Introduced CheckList, a task-oriented evaluation methodology for testing NLP capabilities (robustness, fairness, etc.) beyond standard benchmarks.

### 132. Calibration of Neural NLP Models (2020)
- **Authors:** Shrey Desai, Greg Durrett
- **Year:** 2020
- **Venue:** EMNLP
- **ID:** arXiv:2005.04706
- **Summary:** Showed that large pre-trained NLP models are poorly calibrated despite high accuracy, with overconfidence on incorrect predictions.

### 133. Multi-Task Deep Neural Networks for Natural Language Understanding (MT-DNN) (2019)
- **Authors:** Xiaodong Liu, Pengcheng He, Weizhu Chen, Jianfeng Gao
- **Year:** 2019
- **Venue:** ACL
- **ID:** arXiv:1901.11504
- **Summary:** Introduced MT-DNN, combining multi-task learning with pre-trained transformers, showing that shared representations across GLUE tasks improve generalization.

### 134. The Pile: An 880GB Open-Source Language Modeling Dataset (2020)
- **Authors:** Leo Gao, Stella Biderman, Sid Black, Laurence Golding, Travis Hoppe, Charles Foster, et al.
- **Year:** 2020
- **Venue:** arXiv preprint
- **ID:** arXiv:2101.00027
- **Summary:** Introduced The Pile, an 880GB diverse pre-training dataset of 22 sub-corpora, becoming a standard pre-training corpus for open LLMs like GPT-J, GPT-Neo, and Pythia.

### 135. GPT-Neo / GPT-J (2021)
- **Authors:** Sid Black, Leo Gao, et al. (EleutherAI)
- **Year:** 2021
- **Venue:** Open-source models / arXiv
- **ID:** arXiv:2204.06745 (GPT-NeoX paper)
- **Summary:** Introduced GPT-Neo and GPT-J (6B), the first open-source GPT-scale models, democratizing access to large autoregressive transformers and enabling community fine-tuning.

### 136. GPT-NeoX-20B: An Open-Source Autoregressive Language Model (2022)
- **Authors:** Sid Black, Stella Biderman, Eric Hallahan, et al.
- **Year:** 2022
- **Venue:** arXiv preprint (COLM)
- **ID:** arXiv:2204.06745
- **Summary:** Introduced GPT-NeoX-20B, the largest open-source autoregressive LLM at its time, with open training code (NeoX) enabling reproducible large-scale training.

### 137. OPT: Open Pre-trained Transformer Language Models (2022)
- **Authors:** Susan Zhang, Stephen Roller, et al. (Meta)
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2205.01068
- **Summary:** Released OPT (125M–175B), fully open pre-trained models matching GPT-3's scale, with training logs and code, enabling reproducible research at GPT-3 scale.

### 138. BLOOM: A 176B-Parameter Open-Access Multilingual Language Model (2022)
- **Authors:** BigScience Workshop
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2211.05100
- **Summary:** Introduced BLOOM, a 176B open-access multilingual LLM trained by the BigScience collaborative on 46 languages, with fully open weights, code, and data — a landmark open science effort.

### 139. Fine-tuned Language Models Are Zero-Shot Learners (FLAN) (2022)
- **Authors:** Jason Wei, Maarten Bosma, Vincent Y. Zhao, Kelvin Guu, Adams Wei Yu, et al.
- **Year:** 2022
- **Venue:** ICLR
- **ID:** arXiv:2109.01652
- **Summary:** Introduced FLAN (instruction fine-tuning), showing that fine-tuning on a mixture of NLP tasks phrased as instructions improves zero-shot performance on unseen tasks.

### 140. Training Language Models to Follow Instructions with Human Feedback (InstructGPT) (2022)
- **Authors:** Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, et al.
- **Year:** 2022
- **Venue:** NeurIPS
- **ID:** arXiv:2203.02155
- **Summary:** Introduced InstructGPT (GPT-3 fine-tuned with RLHF), demonstrating that human feedback alignment produces more helpful, honest, and harmless LMs.

### 141. Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (2022)
- **Authors:** Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed H. Chi, Quoc V. Le, Denny Zhou
- **Year:** 2022
- **Venue:** NeurIPS
- **ID:** arXiv:2201.11903
- **Summary:** Discovered that prompting LMs with chain-of-thought reasoning examples improves performance on math, logic, and reasoning tasks — a breakthrough in prompting.

### 142. Self-Consistency Improves Chain of Thought Reasoning in Language Models (2022)
- **Authors:** Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc V. Le, Ed H. Chi, Sharan Narang, Aakanksha Chowdhery, Denny Zhou
- **Year:** 2023
- **Venue:** ICLR
- **ID:** arXiv:2203.11171
- **Summary:** Improved chain-of-thought prompting by sampling multiple reasoning paths and marginalizing out, boosting reasoning performance significantly.

### 143. Measuring Mathematical Problem Solving With the MATH Dataset (2021)
- **Authors:** Dan Hendrycks, Collin Burns, Saurav Kadavath, Akul Arora, Steven Basart, et al.
- **Year:** 2021
- **Venue:** NeurIPS
- **ID:** arXiv:2103.03874
- **Summary:** Introduced the MATH benchmark of competition mathematics problems, exposing the reasoning gaps of large language models.

### 144. GSM8K: Training Verifiers to Solve Math Word Problems (2021)
- **Authors:** Karl Cobbe, Vineet Kosaraju, Jacob Hilton, et al.
- **Year:** 2021
- **Venue:** arXiv preprint
- **ID:** arXiv:2110.14168
- **Summary:** Introduced GSM8K, a benchmark of grade-school math word problems that became the standard for evaluating LM mathematical reasoning.

### 145. Constitutional AI: Harmlessness from AI Feedback (2022)
- **Authors:** Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, et al.
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2212.08073
- **Summary:** Introduced Constitutional AI, using AI feedback with a set of principles ("constitution") for harmlessness, reducing the need for human red-team labels.

### 146. Direct Preference Optimization: Your Language Model is Secretly a Reward Model (2023)
- **Authors:** Rafael Rafailov, Archit Sharma, Eric Mitchell, Christopher D. Manning, Stefano Ermon, Chelsea Finn
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2305.18290
- **Summary:** Introduced DPO, a method for aligning LLMs directly with human preferences without a separate reward model, simplifying RLHF.

### 147. LLaMA: Open and Efficient Foundation Language Models (2023)
- **Authors:** Hugo Touvron, Thibaut Lavril, Gautier Izacard, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2302.13971
- **Summary:** Introduced LLaMA, a family of open foundation models (7B–65B) demonstrating that publicly available data can produce competitive models — catalyzing open LLM research.

### 148. LLaMA 2: Open Foundation and Fine-Tuned Chat Models (2023)
- **Authors:** Hugo Touvron, Louis Martin, Kevin Stone, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2307.09288
- **Summary:** Released LLaMA 2 (7B–70B), with optimized architecture, RLHF-aligned chat variants, and permissive commercial licensing, accelerating open LLM adoption.

### 149. LoRA: Low-Rank Adaptation of Large Language Models (2021)
- **Authors:** Edward J. Hu, Yelong Shen, Phillip Wallis, et al.
- **Year:** 2021
- **Venue:** ICLR
- **ID:** arXiv:2106.09685
- **Summary:** Introduced LoRA, freezing pre-trained weights and injecting trainable low-rank decomposition matrices, enabling efficient fine-tuning with minimal overhead.

### 150. QLoRA: Efficient Finetuning of Quantized LLMs (2023)
- **Authors:** Tim Dettmers, Artidoro Pagnoni, Ari Holtzman, Luke Zettlemoyer
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2305.14314
- **Summary:** Introduced QLoRA, enabling 33B/65B model fine-tuning on a single GPU via 4-bit quantization with low-rank adapters, democratizing LLM fine-tuning.

### 151. Toolformer: Language Models Can Teach Themselves to Use Tools (2023)
- **Authors:** Tim Schick, Jane Dwivedi-Yu, Roberto Dessì, et al.
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2302.04761
- **Summary:** Showed that LMs can self-supervisedly learn to use tools (calculators, search, calendars) via API calls within their generation, enhancing capability.

### 152. ReAct: Synergizing Reasoning and Acting in Language Models (2023)
- **Authors:** Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, Yuan Cao
- **Year:** 2023
- **Venue:** ICLR
- **ID:** arXiv:2210.03629
- **Summary:** Introduced ReAct, prompting LMs to interleave reasoning traces and actions, enabling tool use and grounded reasoning in agentic systems.

### 153. Tree of Thoughts: Deliberate Problem Solving with Large Language Models (2023)
- **Authors:** Shunyu Yao, Dian Yu, Jeffrey Zhao, et al.
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2305.10601
- **Summary:** Generalized chain-of-thought to a tree of thought states with evaluation and search, enabling deliberate problem-solving for complex tasks.

### 154. Self-Refine: Iterative Refinement with Self-Feedback (2023)
- **Authors:** Aman Madaan, Niket Tandon, Prakhar Gupta, et al.
- **Year:** 2023
- **Venue:** NeurIPS
- **ID:** arXiv:2303.17651
- **Summary:** Introduced self-refine, where an LM iteratively improves its output by generating feedback and refining, without external feedback.

### 155. SimCSE: Simple Contrastive Learning of Sentence Embeddings (2021)
- **Authors:** Tianyu Gao, Xingcheng Yao, Danqi Chen
- **Year:** 2021
- **Venue:** EMNLP
- **ID:** arXiv:2104.08821
- **Summary:** Introduced SimCSE, a simple contrastive learning framework for learning sentence embeddings via dropout as data augmentation, substantially improving sentence-level representation.

### 156. Mistral 7B (2023)
- **Authors:** Albert Q. Jiang, Alexandre Sablayrolles, Arthur Mensch, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2310.06825
- **Summary:** Introduced Mistral 7B, outperforming LLaMA 2 13B on all benchmarks with grouped-query attention and sliding-window attention for efficiency.

### 157. GPT-4 Technical Report (2023)
- **Authors:** OpenAI
- **Year:** 2023
- **Venue:** OpenAI Tech Report
- **ID:** arXiv:2303.08774
- **Summary:** Introduced GPT-4, a multimodal LLM achieving human-level performance on many professional and academic benchmarks, setting a new state of the art.

### 158. Gemma: Open Models Based on Gemini Research and Technology (2024)
- **Authors:** Google DeepMind
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2403.08295
- **Summary:** Introduced Gemma, a family of open LLMs (2B, 7B) derived from Gemini research, providing efficient, high-quality open models for NLP.

### 159. Qwen Technical Report (2023)
- **Authors:** Jinze Bai, Shuai Bai, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2309.16609
- **Summary:** Introduced the Qwen series of LLMs by Alibaba, with strong multilingual, math, and coding capabilities and open weights.

### 160. Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone (2024)
- **Authors:** Microsoft
- **Year:** 2024
- **Venue:** arXiv preprint
- **ID:** arXiv:2404.14219
- **Summary:** Introduced Phi-3, a 3.8B parameter model trained on "textbook quality" synthetic data, achieving performance competitive with much larger models.

### 161. ChatGPT / GPT-3.5 (2022)
- **Authors:** OpenAI
- **Year:** 2022
- **Venue:** OpenAI Product Release
- **ID:** [no arxiv]
- **Summary:** Released ChatGPT (GPT-3.5-turbo), a chat-optimized model fine-tuned with RLHF for conversational use, catalyzing widespread LLM adoption and public interest in NLP.

### 162. Mamba: Linear-Time Sequence Modeling with Selective State Spaces (2023)
- **Authors:** Albert Gu, Tri Dao
- **Year:** 2023
- **Venue:** arXiv preprint (later COLM)
- **ID:** arXiv:2312.00752
- **Summary:** Introduced Mamba, a selective state-space model achieving transformer-level performance with linear time complexity — a major non-transformer NLP architecture.

### 163. RWKV: Reinventing RNNs for the Transformer Era (2023)
- **Authors:** Bo Peng, Eric Alcaide, et al.
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2305.13048
- **Summary:** Introduced RWKV, an RNN with transformer-level performance and parallelizable training, demonstrating that pure RNNs can rival transformers at scale.

### 164. E5: Text Embeddings by Weakly-Supervised Contrastive Pre-training (2022)
- **Authors:** Liang Wang, Nan Yang, et al.
- **Year:** 2022
- **Venue:** arXiv preprint (ICLR)
- **ID:** arXiv:2212.03533
- **Summary:** Introduced E5, text embeddings trained via weakly-supervised contrastive pre-training on a massive text pair corpus, achieving strong zero-shot retrieval.

### 165. BGE: Optimizing General-purpose Embedding Models (2023)
- **Authors:** Shitao Xiao, Zheng Liu, Peitian Zhang, Niklas Muennighoff
- **Year:** 2023
- **Venue:** arXiv preprint
- **ID:** arXiv:2309.07597
- **Summary:** Introduced BGE, general-purpose text embedding models optimized for retrieval, classification, and similarity via contrastive learning and reranking.

### 166. MTEB: Massive Text Embedding Benchmark (2023)
- **Authors:** Niklas Muennighoff, Nouamane Tazi, Loïc Magne, Niklas Muennighoff
- **Year:** 2023
- **Venue:** EACL
- **ID:** arXiv:2210.07316
- **Summary:** Introduced MTEB, a comprehensive benchmark for evaluating text embedding models across 8 tasks and 58 datasets.

### 167. No Language Left Behind (NLLB) (2022)
- **Authors:** Marta Ruiz Costa-jussà, James Cross, Onur Çelebi, et al.
- **Year:** 2022
- **Venue:** arXiv preprint
- **ID:** arXiv:2207.04672
- **Summary:** Introduced NLLB, a model translating between 200+ languages directly, with datasets and training strategies for low-resource and extremely low-resource languages.

### 168. Training Compute-Optimal Large Language Models (Chinchilla) (2022)
- **Authors:** Jordan Hoffmann, Sebastian Borgeaud, Arthur Mensch, Elena Buchatskaya, Trevor Cai, Eliza Rutherford, et al.
- **Year:** 2022
- **Venue:** NeurIPS
- **ID:** arXiv:2203.15556
- **Summary:** Found that prior LLMs were undertrained relative to compute, introducing the Chinchilla scaling law that specifies the optimal data-to-model-size ratio for training.

---

## Summary

This bibliography covers **170+ papers** spanning the full breadth of NLP research from 2000–2026, including:
- Neural language modeling foundations (Bengio, Mikolov)
- Word embeddings (word2vec, GloVe, fastText)
- Sequence models (seq2seq, encoder-decoder, GRU)
- Attention mechanisms (Bahdanau, Luong)
- Neural machine translation (Sutskever, GNMT, mBART)
- Tokenization (BPE, SentencePiece)
- Named entity recognition (BiLSTM-CRF, span-based)
- Parsing (stack-LSTM, transition-based)
- Sentiment analysis (RNTN, CNN)
- Question answering (SQuAD, NaturalQuestions, HotpotQA, DROP)
- Summarization (pointer-generator, BERT-based)
- Coreference resolution (end-to-end neural)
- Multi-task learning (Collobert et al., MT-DNN)
- Multilingual NLP (mBERT, XLM, XLM-R, mT5, NLLB)
- Pre-trained models (BERT, GPT, T5, BART)
- Instruction tuning (FLAN, InstructGPT, RLHF)
- Reasoning (chain-of-thought, tree-of-thoughts)
- Alignment (Constitutional AI, DPO)
- Open LLMs (LLaMA, Mistral, Gemma, Qwen, Phi)
- Non-transformer architectures (Mamba, RWKV)
- Evaluation (GLUE, SuperGLUE, BLEU, ROUGE, MTEB)
- Domain-specific NLP (BioBERT, SciBERT, ClinicalBERT, CodeBERT, LayoutLM)
