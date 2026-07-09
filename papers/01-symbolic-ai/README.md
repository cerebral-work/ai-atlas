# 01 — Symbolic AI (1959–2004)

A curated bibliography of the papers and books that built "Good
Old-Fashioned AI" (GOFAI) — the symbolic, knowledge-based, and logicist
tradition that ran from the early problem-solvers and theorem provers
of the 1960s, through the expert-systems boom of the 1970s–80s, to the
cognitive architectures, qualitative-reasoning, and non-monotonic logics
of the 1980s–90s.

Papers are listed chronologically by year of original publication.

---

1. **Programs with Common Sense**
   - John McCarthy
   - 1959 — in *Mechanisation of Thought Processes, Proceedings of
     Symposium of National Physics Laboratory*, HMSO, pp. 77–84
     (republished 1968 in *Semantic Information Processing*, MIT Press)
   - [no arxiv]
   - Introduces the "Advice Taker," the first proposal for a program that
     uses formal logic to represent knowledge and reason about the
     consequences of actions — a direct precursor to logic-based AI and
     automated planning.

2. **GPS, a Program That Simulates Human Thought**
   - Allen Newell, Herbert A. Simon
   - 1961 — in E. Feigenbaum & J. Feldman (eds.), *Computers and
     Thought*, McGraw-Hill, pp. 279–293 (first described 1957)
   - [no arxiv]
   - The General Problem Solver: a means-ends analysis program that
     models problem-solving as goal-directed search over a problem
     space — the canonical reference for early symbolic search-based
     AI.

3. **Knowledge and Belief: An Introduction to the Logic of the Two
    Notions**
   - Jaakko Hintikka
   - 1962 — Cornell University Press (book)
   - ISBN: 978-0-87413-001-1 (reprint)
   - Founding work of epistemic logic; formalizes knowledge and belief
     in modal logic, providing the formal apparatus later used for
     multi-agent and metareasoning in AI.

4. **Situations, Actions and Causal Laws**
   - John McCarthy
   - 1963 (memo) / 1968 — in *Semantic Information Processing*, MIT
     Press, Chapter 7
   - [no arxiv]
   - Introduces the situation calculus, the first formal logical
     framework for reasoning about actions, time, and change —
     foundational to classical planning and all later action logics.

5. **A Machine-Oriented Logic Based on the Resolution Principle**
   - J. A. Robinson
   - 1965 — *Journal of the ACM*, 12(1), pp. 23–41
   - DOI: 10.1145/321250.321253
   - Introduces the resolution inference rule and unification — the
     algorithmic core of automated theorem proving and, via PROLOG, of
     logic programming.

6. **Fuzzy Sets**
   - Lotfi A. Zadeh
   - 1965 — *Information and Control*, 8(3), pp. 338–353
   - DOI: 10.1016/S0019-9958(65)90241-X
   - Founding paper of fuzzy logic: introduces sets with graded
     membership, the basis of fuzzy reasoning and approximate reasoning
     systems widely deployed in control and expert systems.

7. **ELIZA — A Computer Program for the Study of Natural Language
    Communication Between Man and Machine**
   - Joseph Weizenbaum
   - 1966 — *Communications of the ACM*, 9(1), pp. 36–45
   - DOI: 10.1145/365153.365168
   - A rule-based pattern-matching dialogue system that passed a
     limited Turing test; the first demonstration of apparently
     intelligent conversation by purely symbolic means.

8. **Semantic Information Processing**
   - Marvin Minsky (ed.)
   - 1968 — MIT Press (book)
   - ISBN: 978-0-262-13043-4
   - The defining anthology of early symbolic AI: collects McCarthy's
     "Programs with Common Sense," Minsky's "Matter, Mind and Models,"
     and the SHRDLU precursor work; the textbook of the
     logicist/representational program for a generation.

9. **Programs with Common Sense** (expanded)
   - John McCarthy
   - 1968 — in *Semantic Information Processing*, MIT Press, pp.
     403–418
   - [no arxiv]
   - Definitive statement of the logicist program in AI: represent the
     world in formal logic, update beliefs, and let a theorem prover
     reason toward action — the philosophical charter for symbolic
     AI.

10. **Matter, Mind and Models**
   - Marvin Minsky
   - 1968 — in *Semantic Information Processing*, MIT Press, pp.
     425–432
   - [no arxiv]
   - Articulates the representationalist view that intelligence
     consists in building and manipulating internal models of the
     world; a concise philosophical manifesto for symbolic
     model-based AI.

11. **Semantic Memory**
   - M. Ross Quillian
   - 1968 — in *Semantic Information Processing*, MIT Press, pp.
     227–270
   - [no arxiv]
   - First implemented semantic network, a spreading-activation model
     of associative memory; the ancestor of all network-based
     knowledge representations (KL-ONE, WordNet, and modern knowledge
     graphs).

12. **Some Philosophical Problems from the Standpoint of Artificial
    Intelligence**
   - John McCarthy, Patrick J. Hayes
   - 1969 — in B. Meltzer & D. Michie (eds.), *Machine Intelligence
     4*, Edinburgh University Press, pp. 463–502
   - [no arxiv]
   - Introduces the frame problem: how a reasoning agent should know
     what stays unchanged when an action is performed. One of the
     deepest and most influential open problems in AI knowledge
     representation.

13. **STRIPS: A New Approach to the Application of Theorem Proving to
    Problem Solving**
   - Richard E. Fikes, Nils J. Nilsson
   - 1971 — *Artificial Intelligence*, 2(3–4), pp. 189–208
   - DOI: 10.1016/0004-3702(71)90010-5
   - Introduces the STRIPS planning formalism (state as a set of
     ground atoms, actions as preconditions + add/delete lists), the
     canonical representation for classical planning for two decades.

14. **Problem-Solving Methods in Artificial Intelligence**
   - Nils J. Nilsson
   - 1971 — McGraw-Hill (book)
   - ISBN: 978-0-07-046571-1
   - First textbook systematization of AI methods (search, theorem
     proving, game playing, perception); defined the methodological
     curriculum of classical AI for the 1970s generation.

15. **Human Problem Solving**
   - Allen Newell, Herbert A. Simon
   - 1972 — Prentice-Hall (book)
   - ISBN: 978-0-13-445403-0
   - Comprehensive theory of human problem-solving as search through
     problem spaces using production rules and heuristics; the
     empirical backbone of classical symbolic AI and of cognitive
     architectures.

16. **Understanding Natural Language** (SHRDLU)
   - Terry Winograd
   - 1972 — *Cognitive Psychology*, 3(1), pp. 1–191 (monograph; also
     book *Understanding Natural Language*, Academic Press, 1972)
   - DOI: 10.1016/0010-0285(72)90001-4
   - SHRDLU: a natural-language dialog system that plans and acts in
     a blocks world using grammar, semantics, and reasoning; the
     high-water mark of early symbolic NLP and a demonstration of
     integrated knowledge-based language understanding.

17. **What Computers Can't Do: A Critique of Artificial Reason**
   - Hubert L. Dreyfus
   - 1972 (1st ed.) — Harper & Row (book) (2nd ed. 1979, 3rd ed.
     1992 MIT Press)
   - ISBN: 978-0-262-54067-9 (1992 MIT Press)
   - The most influential philosophical critique of GOFAI: argues that
     symbol-manipulation models of intelligence miss the embodied,
     situational, non-formal character of human expertise.

18. **Predicate Logic as a Programming Language**
   - Robert A. Kowalski
   - 1974 — *Proceedings of IFIP Congress 74*, North-Holland, pp.
     569–574
   - DOI: 10.5555/647315.720736
   - Articulates the algorithm = logic + control thesis: a program is
     a set of logical clauses and the Prolog-style proof procedure is
     a way to execute them; the philosophical and technical
     foundation of logic programming.

19. **A Framework for Representing Knowledge**
   - Marvin Minsky
   - 1974 — MIT AI Laboratory Memo 306 (published 1975 in P. Winston
     (ed.), *The Psychology of Computer Vision*, McGraw-Hill)
   - [no arxiv]
   - Introduces frames — structured templates for stereotyped
     situations with slots, defaults, and attached procedures; the
     direct ancestor of object-oriented KR and a precursor of modern
     structured representations.

20. **The Psychology of Computer Vision**
   - Patrick H. Winston (ed.)
   - 1975 — McGraw-Hill (book)
   - ISBN: 978-0-07-072155-5
   - Early collection that codifies computer vision as a
     knowledge-based discipline; the volume in which Minsky's frames
     paper is widely cited and disseminated.

21. **What's in a Link: Foundations for Semantic Networks**
   - William A. Woods
   - 1975 — in D. G. Bobrow & A. M. Collins (eds.), *Representation
     and Understanding*, Academic Press, pp. 35–82
   - DOI: 10.1016/B978-0-12-108630-5.50007-3
   - Foundational critique clarifying the formal semantics of
     semantic networks; distinguishes definitional, assertional, and
     structural links, motivating the move to structured (KL-ONE-style)
     representation.

22. **The Waltz Labeling Algorithm** (*Understanding Line Drawings of
    Scenes with Shadows*)
   - David L. Waltz
   - 1975 — in P. H. Winston (ed.), *The Psychology of Computer
     Vision*, McGraw-Hill, pp. 19–91
   - Propagates constraints through a junction graph to interpret
     line drawings of polyhedral scenes; a landmark of
     constraint-based reasoning and an early high-water mark of
     symbolic computer vision.

23. **A Mathematical Theory of Evidence**
   - Glenn Shafer
   - 1976 — Princeton University Press (book)
   - ISBN: 978-0-691-08275-0
   - The Dempster–Shafer theory of evidence: a generalization of
     Bayesian probability that represents ignorance and aggregates
     evidence from multiple sources; an influential alternative to
     Bayes in 1980s uncertain-reasoning systems.

24. **MYCIN: A Computer Program for Generating and Selecting Medical
    Diagnosis**
   - Edward H. Shortliffe
   - 1976 — Addison-Wesley (book) (based on 1974 Stanford PhD thesis)
   - ISBN: 978-0-89925-333-5 (reprint)
   - MYCIN: the canonical rule-based expert system for
     infectious-disease diagnosis; introduces certainty factors,
     explanation facilities, and the medical expert-systems research
     program that defined the field.

25. **The Art of Artificial Intelligence: I. Themes and Case Studies
    of Knowledge Engineering**
   - Edward A. Feigenbaum
   - 1977 — *Proceedings of the 5th International Joint Conference
     on Artificial Intelligence (IJCAI-77)*, pp. 1014–1029
   - [no arxiv]
   - The "knowledge is power" manifesto: argues that the bottleneck
     in AI is acquiring domain knowledge, not clever inference; the
     intellectual charter of the expert-systems era.

26. **Consistency in Networks of Relations**
   - Alan K. Mackworth
   - 1977 — *Artificial Intelligence*, 8(1), pp. 99–118
   - DOI: 10.1016/0004-3702(77)90007-0
   - Introduces arc consistency as a general inference technique for
     constraint satisfaction; the foundation of constraint processing
     used in planning, scheduling, and configuration.

27. **Scripts, Plans, Goals, and Understanding: An Inquiry into Human
    Knowledge Structures**
   - Roger C. Schank, Robert P. Abelson
   - 1977 — Lawrence Erlbaum (book)
   - ISBN: 978-0-89859-041-0
   - Introduces scripts — stereotyped event sequences used to
     understand narratives by filling in unstated actions; a major
     representational contribution of symbolic AI and a direct
     ancestor of case-based reasoning.

28. **Production System Representation of Real-World Knowledge**
   - J. McDermott, C. Forgy
   - 1978 — in D. A. Waterman & F. Hayes-Roth (eds.), *Pattern-
     Directed Inference Systems*, Academic Press
   - [no arxiv]
   - Consolidates production systems as a representation for
     large-scale expert knowledge; the methodological basis of OPS5
     and the Rete-based expert systems that follow.

29. **A Truth Maintenance System**
   - Jon Doyle
   - 1979 — *Artificial Intelligence*, 12(3), pp. 231–272
   - DOI: 10.1016/0004-3702(79)90008-0
   - Introduces truth maintenance systems (TMS) for tracking and
     propagating the justifications of beliefs, enabling retraction
     in the face of default reasoning and contradiction; core
     infrastructure for non-monotonic and model-based reasoning.

30. **The Naive Physics Manifesto**
   - Patrick J. Hayes
   - 1979 — in N. V. Findler (ed.), *Associative Networks:
     Representation and Use of Knowledge by Computers*, Academic
     Press, pp. 242–273
   - [no arxiv]
   - Argues that commonsense physical reasoning can and should be
     formalized in first-order logic via rich axioms of quantity,
     space, time, and matter; the manifesto of the logicist approach
     to commonsense knowledge.

31. **On the Epistemological Status of Semantic Networks**
   - Ronald J. Brachman
   - 1979 — in N. V. Findler (ed.), *Associative Networks*,
     Academic Press, pp. 3–50
   - [no arxiv]
   - Distinguishes the linguistic, conceptual, and epistemological
     levels of knowledge representation; sets the agenda for the
     KL-ONE family and the structured-KR movement that dominates
     1980s symbolic AI.

32. **Model Design in the PROSPECTOR Consultant System for Mineral
    Exploration**
   - Richard O. Duda, Peter E. Hart, Kurt Konolige, John D. Reboh
   - 1979 — SRI International Technical Note 244
   - [no arxiv]
   - PROSPECTOR: an early influential expert system for mineral
     exploration using a rule-based Bayesian-inference network;
     demonstrated the commercial potential of knowledge-based
     systems and popularized Bayesian rule-updating in AI.

33. **Machines Who Think**
   - Pamela McCorduck
   - 1979 — W. H. Freeman (book)
   - ISBN: 978-0-7167-1171-6 (25th-anniversary edition 2004)
   - First scholarly history of AI from the 1950s through the 1970s;
     the foundational-era oral history and a primary secondary
     source.

34. **A Domain-Independent Production-Rule System for Consultation
    Programs** (EMYCIN)
   - William van Melle
   - 1979 — *Proceedings of the 6th International Joint Conference
     on Artificial Intelligence (IJCAI-79)*, pp. 923–925
   - [no arxiv]
   - EMYCIN: the domain-independent expert-system shell extracted
     from MYCIN; demonstrates that the inference engine and the
     knowledge base can be separated, establishing the
     expert-system-shell architecture that dominated the 1980s.

35. **Applications of Artificial Intelligence for Organic Chemistry:
    The DENDRAL Project**
   - Robert K. Lindsay, Bruce G. Buchanan, Edward A. Feigenbaum,
     Joshua Lederberg
   - 1980 — McGraw-Hill (book) (DENDRAL began 1965)
   - ISBN: 978-0-07-037823-3
   - DENDRAL: the first expert system, inferring molecular structure
     from mass spectra using domain-specific chemical heuristics;
     the origin of the knowledge-based-systems paradigm later
     generalized by MYCIN.

36. **Minds, Brains, and Programs** (the Chinese Room)
   - John R. Searle
   - 1980 — *Behavioral and Brain Sciences*, 3(3), pp. 417–457
   - DOI: 10.1017/S0140525X00005756
   - The Chinese Room argument: syntax is not semantics, so symbolic
     manipulation alone cannot yield understanding; the most
     influential philosophical challenge to the GOFAI program.

37. **HEARSAY-II: Understanding Domain-Independent Speech**
   - Lee D. Erman, Frederick Hayes-Roth, Victor R. Lesser,
     D. Raj Reddy
   - 1980 — *ACM Transactions on Database Systems*, 5(2), pp.
     213–253
   - DOI: 10.1145/320077.320080
   - Introduces the blackboard architecture: cooperating independent
     knowledge sources posting partial results on a shared
     blackboard — a major architectural pattern for uncertain,
     distributed reasoning.

38. **A Logic for Default Reasoning**
   - Raymond Reiter
   - 1980 — *Artificial Intelligence*, 13(1–2), pp. 81–132
   - DOI: 10.1016/0004-3702(80)90014-4
   - Introduces default logic, a formal non-monotonic logic with
     default rules of the form "if P and it is consistent to assume
     Q, then R"; the most influential default-reasoning formalism.

39. **Circumscription — A Form of Non-Monotonic Reasoning**
   - John McCarthy
   - 1980 — *Artificial Intelligence*, 13(1–2), pp. 27–39
   - DOI: 10.1016/0004-3702(80)90011-9
   - Introduces circumscription, the first model-theoretic form of
     non-monotonic reasoning: conclude that the objects satisfying a
     predicate are exactly those forced to exist — a cornerstone of
     default reasoning.

40. **Non-Monotonic Logic I**
   - Drew McDermott, Jon Doyle
   - 1980 — *Artificial Intelligence*, 13(1–2), pp. 41–72
   - DOI: 10.1016/0004-3702(80)90012-0
   - First systematic non-monotonic logic, formalizing default rules
     whose conclusions can be retracted; founds the non-monotonic
     reasoning subfield alongside McCarthy's circumscription.

41. **Dynamic Memory: A Theory of Reminding and Learning in Computers
    and People**
   - Roger C. Schank
   - 1982 — Cambridge University Press (book)
   - ISBN: 978-0-521-28175-3
   - Develops the dynamic-memory theory of MOPs (Memory
     Organization Packets), indexing episodes by the goals and
     situations they teach; the conceptual foundation of case-based
     reasoning.

42. **Generalization as Search**
   - Tom M. Mitchell
   - 1982 — *Artificial Intelligence*, 18(2), pp. 203–226
   - DOI: 10.1016/0004-3702(82)90022-2
   - Introduces version spaces: a bidirectional search over the
     hypothesis space using most-general and most-specific
     boundaries; a foundational symbolic-learning framework and the
     conceptual basis of active-learning theory.

43. **The Knowledge Level**
   - Allen Newell
   - 1982 — *Artificial Intelligence*, 18(1), pp. 87–127
   - DOI: 10.1016/0004-3702(82)90012-4
   - Defines the "knowledge level" as a distinct systems level above
     the symbol level: an agent is rational given its knowledge and
     goals, independent of the symbolic implementation; Newell's
     organizational framework for AI as a discipline.

44. **Design and Synthesis of Synchronization Skeletons Using
    Branching Time Temporal Logic**
   - E. Allen Emerson, Edmund M. Clarke
   - 1982 — *Proceedings of the Workshop on Logics of Programs*,
     Springer LNCS 131, pp. 52–71
   - DOI: 10.1007/BFb0025774
   - Introduces model checking: verify finite-state systems by
     checking temporal-logic formulas against the Kripke structure;
     became a major verification technique and, via planning, a tool
     of symbolic AI.

45. **Rete: A Fast Algorithm for the Many Pattern/Many Object
    Pattern Match Problem**
   - Charles L. Forgy
   - 1982 — *Artificial Intelligence*, 19(1), pp. 17–37
   - DOI: 10.1016/0004-3702(82)90020-0
   - The Rete algorithm for efficient forward-chaining rule matching
     across large working memories; the compilation engine of OPS5,
     CLIPS, Drools, and most production-rule expert systems.

46. **R1 (XCON): A Configurator of Computer Systems**
   - John McDermott
   - 1982 — *Artificial Intelligence*, 19(1), pp. 39–88 (also
     McDermott 1980, *Proc. AAAI-80*)
   - DOI: 10.1016/0004-3702(82)90021-2
   - R1/XCON: a large production-rule system that configured VAX
     computers for Digital Equipment Corporation, saving the company
     tens of millions of dollars; the flagship commercial success of
     the expert-systems era.

47. **An Efficient Easily Adaptable Parser for Natural Language — A
    New Form of the Prolog Language**
   - David H. D. Warren, Fernando C. N. Pereira
   - 1982 — *Communications of the ACM*, 25(11), pp. 768–783
   - DOI: 10.1145/358281.358295
   - Demonstrates definite-clause grammars (DCGs) in PROLOG — a
     clean, executable formalism for natural-language grammars; made
     PROLOG the language of choice for symbolic computational
     linguistics through the 1980s.

48. **Knowledge-Based Systems in Artificial Intelligence** (AM and
    EURISKO)
   - Randall Davis, Douglas B. Lenat
   - 1982 — McGraw-Hill (book)
   - ISBN: 978-0-07-015456-5
   - AM (1976) and EURISKO: programs that discover mathematical
     concepts by heuristic search over a frame-based representation;
     a landmark of automated discovery and a touchstone of the 1980s
     learning-by-discovery debate.

49. **KRYPTON: A Functional Approach to Knowledge Representation**
   - Ronald J. Brachman, Richard E. Fikes, Hector J. Levesque
   - 1983 — *Proceedings of the 8th International Joint Conference
     on Artificial Intelligence (IJCAI-83)*, pp. 613–619
   - [no arxiv]
   - KRYPTON: separates an assertional component (FOL) from a
     terminological component (KL-ONE-style), explicitly isolating
     the TBox/ABox distinction that becomes standard in description
     logics.

50. **Maintaining Knowledge About Temporal Intervals**
   - James F. Allen
   - 1983 — *Communications of the ACM*, 26(11), pp. 832–843
   - DOI: 10.1145/182.358434
   - The Allen interval algebra: 13 relations between time intervals
     and their composition table; the standard qualitative
     temporal-reasoning formalism for planning and natural-language
     understanding.

51. **A Theory and Methodology of Inductive Learning**
   - Ryszard S. Michalski
   - 1983 — *Artificial Intelligence*, 20(2), pp. 111–161
   - DOI: 10.1016/0004-3702(83)90016-4
   - The foundational theory of inductive learning from examples in
     the symbolic-AI tradition (star methodology, strong rules);
     organizes the AQ family of rule-induction systems.

52. **A Qualitative Physics Based on Confluences**
   - Johan de Kleer, John Seely Brown
   - 1984 — *Artificial Intelligence*, 24(1–3), pp. 7–83
   - DOI: 10.1016/0004-3702(84)90033-X
   - Develops qualitative physics using qualitative differential
     equations (confluences) over device structure; a foundational
     paper of qualitative reasoning.

53. **Qualitative Reasoning About Physical Processes**
   - Kenneth D. Forbus
   - 1984 — *Artificial Intelligence*, 24(1–3), pp. 7–83
   - DOI: 10.1016/0004-3702(84)90034-1
   - Introduces the Qualitative Process (QP) theory: representing
     continuous physical processes with qualitative relations over
     quantities and influences; a foundational paper of qualitative
     reasoning.

54. **A Method for Managing Evidential Reasoning in a Hierarchical
    Hypothesis Space**
   - Jean Gordon, Edward H. Shortliffe
   - 1984 — *Artificial Intelligence*, 25(3), pp. 325–359
   - DOI: 10.1016/0004-3702(85)90019-5
   - Adapts Dempster–Shafer theory to the hierarchical hypothesis
     spaces typical of medical expert systems; a primary reference
     for combining evidence under ignorance in symbolic AI.

55. **Artificial Intelligence: The Very Idea**
   - John Haugeland
   - 1985 — MIT Press (book)
   - ISBN: 978-0-262-58095-6
   - Coins "GOFAI" ("Good Old-Fashioned AI") and gives the clearest
     philosophical articulation of the symbolic, representational,
     rationalist program that characterized the foundational era.

56. **On the Logic of Theory Change: Partial Meet Contraction and
    Revision Functions** (AGM)
   - Carlos E. Alchourrón, Peter Gärdenfors, David Makinson
   - 1985 — *Journal of Philosophical Logic*, 14(3), pp. 243–267
   - DOI: 10.1007/BF00252147
   - The AGM model of belief revision: postulates governing how a
     rational agent's belief set should change when new information
     arrives; the formal foundation of belief revision and dynamic
     epistemic logic in AI.

57. **Bayesian Networks: A Model of Self-Activated Memory for
    Evidential Reasoning**
   - Judea Pearl
   - 1985 — *Proceedings of the 7th Conference of the Cognitive
     Science Society*, pp. 329–334
   - [no arxiv]
   - First appearance of Bayesian networks as a structured
     probabilistic model for evidential reasoning; the opening move
     in the probabilistic revolution in symbolic AI.

58. **Semantical Considerations on Nonmonotonic Logic**
   - Robert C. Moore
   - 1985 — *Artificial Intelligence*, 25(1), pp. 75–94
   - DOI: 10.1016/0004-3702(85)90005-9
   - Introduces autoepistemic logic, a non-monotonic logic
     formalizing the reasoning of an ideal agent reflecting on its
     own beliefs; a cornerstone of the non-monotonic-reasoning
     landscape.

59. **An Overview of the KL-ONE Knowledge Representation System**
   - Ronald J. Brachman, James G. Schmolze
   - 1985 — *Cognitive Science*, 9(2), pp. 171–216
   - DOI: 10.1207/s15516709cog0902_3
   - KL-ONE: the canonical structured-inheritance network, defining
     concepts by structuring roles and role-value restrictions; the
     progenitor of the description-logic family (Classic, Loom,
     FaCT, Pellet) that dominated 1990s KR.

60. **A Fundamental Tradeoff in Knowledge Representation**
   - Hector J. Levesque, Ronald J. Brachman
   - 1985 — *Proceedings of the IEEE Workshop on Principles of
     Knowledge-Based Systems*, pp. 3–12 (revised in *IEEE
     Computer*, 1987)
   - DOI: 10.1109/MC.1985.1664043
   - Identifies the expressiveness/tractability tradeoff in KR: more
     expressive representations make reasoning intractable; the
     founding argument for the description-logic research program.

61. **An Assumption-Based TMS**
   - Johan de Kleer
   - 1986 — *Artificial Intelligence*, 28(2), pp. 127–162
   - DOI: 10.1016/0004-3702(86)90080-6
   - The assumption-based TMS (ATMS): simultaneously tracks multiple
     environments of assumptions, enabling efficient
     multiple-context reasoning and model-based diagnosis.

62. **Applications of Circumscription to Formalizing Common-Sense
    Reasoning**
   - John McCarthy
   - 1986 — *Artificial Intelligence*, 28(1), pp. 89–116
   - DOI: 10.1016/0004-3702(86)90079-8
   - Extends circumscription to formalize commonsense defaults (the
     bird example, the qualification problem); the key application
     paper of McCarthy's non-monotonic program.

63. **Induction of Decision Trees**
   - J. Ross Quinlan
   - 1986 — *Machine Learning*, 1(1), pp. 81–106
   - DOI: 10.1007/BF00116251
   - Introduces the ID3 decision-tree induction algorithm from
     labeled examples; the starting point of the ML line that runs
     through C4.5 and that bridges symbolic AI and statistical
     learning.

64. **Explanation-Based Generalization: A Unifying View**
   - Tom M. Mitchell, Rajesh Keller, Smadar Kedar-Cabelli
   - 1986 — *Machine Learning*, 1(1), pp. 47–80
   - DOI: 10.1007/BF00116249
   - The unifying formulation of explanation-based learning (EBL) as
     goal concept + domain theory + operationality criterion; the
     standard reference that consolidated EBL.

65. **Chunking in SOAR: The Anatomy of a General Learning Mechanism**
   - John E. Laird, Paul S. Rosenbloom, Allen Newell
   - 1986 — *Machine Learning*, 1(1), pp. 11–46
   - DOI: 10.1007/BF00116248
   - Describes chunking, SOAR's single, domain-independent learning
     mechanism that compiles problem-solving experience into
     productions; the most studied general speed-up-learning method
     of the symbolic era.

66. **Escaping Brittleness: The Possibilities of General-Purpose
    Learning Algorithms Applied to Parallel Rule-Based Systems**
   - John H. Holland
   - 1986 — in R. S. Michalski, J. G. Carbonell & T. M. Mitchell
     (eds.), *Machine Learning: An Artificial Intelligence Approach,
     Vol. II*, Morgan Kaufmann, pp. 593–623
   - ISBN: 978-0-934613-41-2 (volume)
   - Introduces learning classifier systems: rule-based systems that
     evolve rules via genetic algorithms and reward (bucket-brigade)
     allocation; bridges symbolic production systems with
     evolutionary and reinforcement learning.

67. **A Robust Layered Control System for a Mobile Robot**
    (Subsumption Architecture)
   - Rodney A. Brooks
   - 1986 — *IEEE Journal of Robotics and Automation*, 2(1), pp.
     14–23
   - DOI: 10.1109/JRA.1986.1087036
   - The subsumption architecture: layered, reactive behavior
     modules with no central symbolic world model; the founding
     paper of behavior-based AI and the "nouvelle AI" critique of
     GOFAI's representational assumptions.

68. **The Society of Mind**
   - Marvin Minsky
   - 1986 — Simon & Schuster (book)
   - ISBN: 978-0-671-65713-0
   - Argues that intelligence emerges from the cooperation of many
     small, mindless agents rather than any single mechanism; a
     structural theory of mind that reframed GOFAI's search for a
     single reasoning engine.

69. **Understanding Computers and Cognition**
   - Terry Winograd, Fernando Flores
   - 1986 — Ablex (book) (reprint Addison-Wesley 1987)
   - ISBN: 978-0-201-18034-8
   - A phenomenologically informed critique of the rationalist,
     symbolic-AI tradition, arguing for a situated, language-as-
     action view of cognition; influential in the shift toward
     situated AI and HCI.

70. **Derivational Analogy: A Theory of Reconstructive Problem
    Solving from Experience**
   - Jaime G. Carbonell
   - 1986 — in R. S. Michalski, J. G. Carbonell & T. M. Mitchell
     (eds.), *Machine Learning: An Artificial Intelligence
     Approach, Vol. II*, Morgan Kaufmann, pp. 371–402
   - ISBN: 978-0-934613-41-2 (volume)
   - Introduces derivational analogy, reusing the problem-solving
     trace (not just the solution) of a past problem; a key
     milestone in the emergence of case-based reasoning.

71. **SOAR: An Architecture for General Intelligence**
   - John E. Laird, Allen Newell, Paul S. Rosenbloom
   - 1987 — *Artificial Intelligence*, 33(1), pp. 1–64 (also
     IJCAI-87, pp. 1523–1532)
   - DOI: 10.1016/0004-3702(87)90050-6
   - SOAR: a unified cognitive architecture based on a
     production-system memory, problem spaces, and chunking as the
     single learning mechanism; the most influential general
     cognitive architecture of the symbolic era.

72. **COBWEB: Conceptual Clustering with Probabilistic Concepts**
   - Douglas H. Fisher
   - 1987 — *Machine Learning*, 2(2), pp. 139–172
   - DOI: 10.1007/BF00116256
   - COBWEB: incremental conceptual clustering using category
     utility (a probabilistic measure); a bridge between symbolic
     concept formation and probabilistic methods.

73. **UNIMEM: A General Learning System** (*Experiments with
    Incremental Concept Formation*)
   - Michael Lebowitz
   - 1987 — *Machine Learning*, 2(2), pp. 103–138
   - DOI: 10.1007/BF00058683
   - UNIMEM: incremental conceptual clustering from examples; a
     representative system of the symbolic unsupervised-learning
     tradition and an ancestor of modern hierarchical clustering.

74. **Constraint Logic Programming**
   - Joxan Jaffar, Jean-Louis Lassez
   - 1987 — *Proceedings of the 14th Annual ACM SIGACT-SIGPLAN
     Symposium on Principles of Programming Languages (POPL-87)*,
     pp. 111–119
   - DOI: 10.1145/41625.41635
   - Constraint logic programming (CLP): unifies logic programming
     with constraint solving over domains (reals, finite domains);
     the technical basis of CLP(R), Eclipse, and modern constraint-
     solving systems.

75. **Scientific Discovery: Computational Explorations of the
    Creative Processes** (BACON)
   - Pat Langley, Herbert A. Simon, Gary L. Bradshaw, Jan M. Zytkow
   - 1987 — MIT Press (book)
   - ISBN: 978-0-262-12157-2
   - The BACON family of scientific-discovery programs that
     rediscover physical laws from data; a landmark of symbolic
     machine discovery and computational philosophy of science.

76. **Computational Reflection**
   - Pattie Maes
   - 1987 — *Proceedings of IJCAI-87*, pp. 242–247
   - [no arxiv]
   - Formalizes computational reflection: systems that reason about
     and modify their own computation; the meta-level architectures
     tradition that lets symbolic systems introspect and self-adapt.

77. **Plans and Situated Actions: The Problem of Human-Machine
    Communication**
   - Lucy A. Suchman
   - 1987 — Cambridge University Press (book)
   - ISBN: 978-0-521-33739-3
   - Argues that action is situated and contingent rather than
     plan-driven; an influential critique from outside AI that
     shaped the 1990s move toward situated, behavior-based, and
     reactive AI.

78. **A Theory of Diagnosis from First Principles**
   - Raymond Reiter
   - 1987 — *Artificial Intelligence*, 32(1), pp. 57–96
   - DOI: 10.1016/0004-3702(87)90018-3
   - Introduces consistency-based diagnosis as abductive
     reasoning: find minimal sets of components whose abnormality
     explains the observations; the foundation of model-based
     diagnosis.

79. **Foundations of Logic Programming**
   - J. W. Lloyd
   - 1987 — Springer (book, 2nd ed.)
   - ISBN: 978-3-540-18117-3
   - The definitive mathematical foundations of logic programming
     (least Herbrand models, SLD resolution, negation-as-failure);
     the standard reference for the theoretical side of the PROLOG
     tradition.

80. **Probabilistic Reasoning in Intelligent Systems: Networks of
    Plausible Inference**
   - Judea Pearl
   - 1988 — Morgan Kaufmann (book)
   - ISBN: 978-1-55860-479-7 (revised 2nd printing)
   - The book that defines Bayesian networks, influence diagrams,
     and belief-propagation algorithms; the canonical reference for
     the probabilistic turn in AI.

81. **The Stable Model Semantics for Logic Programming**
   - Michael Gelfond, Vladimir Lifschitz
   - 1988 — *Proceedings of the 5th International Conference and
     Symposium on Logic Programming*, pp. 1070–1080
   - [no arxiv]
   - The stable-model semantics: selects a distinguished subset of
     a logic program's models as its "intended" meaning; the
     foundation of answer-set programming (ASP).

82. **Belief Revision** (*Knowledge in Flux*)
   - Peter Gärdenfors
   - 1988 — MIT Press (book)
   - ISBN: 978-0-262-07106-2
   - The book-length treatment of the AGM theory of belief
     revision; the canonical reference for symbolic approaches to
     belief change and a bridge between logic and practical
     reasoning systems.

83. **The Rise of the Expert Company**
   - Edward A. Feigenbaum, Pamela McCorduck, Penny N. Nii
   - 1988 — Times Books (book)
   - ISBN: 978-0-8129-14175-9
   - Documents the commercialization of expert systems in the
     1980s; the reference for the expert-systems boom and its
     limits.

84. **The Procedural Reasoning System (PRS)**
   - Michael P. Georgeff, David K. Ingrand
   - 1989 — *Proceedings of IJCAI-89*, pp. 517–523
   - [no arxiv]
   - PRS: a BDI (belief-desire-intention) agent architecture for
     real-time reasoning and control; brought symbolic reasoning to
     reactive planning and embedded systems.

85. **The CN2 Induction Algorithm**
   - Peter Clark, Tim Niblett
   - 1989 — *Machine Learning*, 3(4), pp. 261–283
   - DOI: 10.1007/BF00116835
   - CN2: induces ordered if-then rule sets from examples,
     combining the strengths of ID3 and the AQ algorithm; a
     standard reference for symbolic rule induction in the
     expert-systems tradition.

86. **Case-Based Planning: A Framework for Learning from
    Experience** (CHEF)
   - Kristian J. Hammond
   - 1989 — *Proceedings of the 11th Annual Conference of the
     Cognitive Science Society*, pp. 311–318
   - [no arxiv]
   - CHEF: a case-based planner that retrieves and adapts past
     plans to handle new cooking tasks, learning from failures;
     one of the first complete case-based reasoning systems.

87. **ADL: Exploring the Middle Ground Between STRIPS and the
    Situation Calculus**
   - Edwin P. D. Pednault
   - 1989 — *Proceedings of the 1st International Conference on
     Principles of Knowledge Representation and Reasoning (KR-89)*,
     pp. 324–332
   - [no arxiv]
   - ADL: a planning representation between STRIPS and the
     situation calculus, introducing conditional effects and
     nondeterministic actions; the basis for PDDL and modern
     classical-planning action descriptions.

88. **Unified Theories of Cognition**
   - Allen Newell
   - 1990 — Harvard University Press (book)
   - ISBN: 978-0-674-92101-4
   - Argues for unified cognitive theories realized as
     architectures (SOAR) rather than collections of single-process
     models; the capstone of the symbolic-cognitive-architecture
     tradition and Newell's final major work.

89. **The Adaptive Character of Thought**
   - John R. Anderson
   - 1990 — Lawrence Erlbaum (book)
   - ISBN: 978-0-8058-0865-0
   - The rational analysis of cognition: cognitive mechanisms are
     optimized to adapt to the statistics of the environment; the
     theoretical foundation of the ACT-R architecture and a bridge
     between symbolic and probabilistic approaches.

90. **Elephants Don't Play Chess**
   - Rodney A. Brooks
   - 1990 — in P. Maes (ed.), *Designing Autonomous Agents: Theory
     and Practice*, MIT Press, pp. 3–15
   - ISBN: 978-0-262-63135-3 (volume)
   - The manifesto of "nouvelle AI": argues that intelligence can
     emerge from simple, situated, reactive behaviors without
     symbolic representation; the explicit challenge to GOFAI that
     defined the 1990s debate.

91. **The Symbol Grounding Problem**
   - Stevan Harnad
   - 1990 — *Physica D: Nonlinear Phenomena*, 42(1–3), pp.
     335–346
   - DOI: 10.1016/0167-2789(90)90035-6
   - Names the symbol grounding problem: how do symbols get their
     meaning? The central philosophical challenge to pure symbolic
     AI and a reference point for the connectionist and embodied
     turn of the 1990s.

92. **Building Large Knowledge-Based Systems: Representation and
    Inference in the Cyc Project**
   - Douglas B. Lenat, R. V. Guha
   - 1990 — Addison-Wesley (book)
   - ISBN: 978-0-201-51692-6
   - The Cyc project: a massive, hand-encoded commonsense knowledge
     base in a frame-and-predicate representation; the most
     ambitious attempt to realize the GOFAI dream of a formalized
     commonsense ontology.

93. **Learning Search Control Knowledge That Explains** (PRODIGY)
   - Steven Minton
   - 1990 — *Machine Learning*, 5, pp. 35–68 (earlier version
     1988)
   - DOI: 10.1007/BF00114970
   - PRODIGY: learns control rules by explanation-based methods and
     statistics; a landmark in speed-up (control) learning for
     planning, showing learned macros can both help and hurt (the
     utility problem).

94. **Modeling Rational Agents within a BDI-Architecture**
   - Anand S. Rao, Michael P. Georgeff
   - 1991 — *Proceedings of the 2nd International Conference on
     Principles of Knowledge Representation and Reasoning (KR-91)*,
     pp. 473–484
   - [no arxiv]
   - The formal BDI (Belief-Desire-Intention) logic for rational
     agents; the canonical reference for the agent-architecture
     tradition that extends symbolic reasoning into real-time,
     reactive, and multi-agent settings.

95. **The Frame Problem in the Situation Calculus: A Simple
    Solution**
   - Raymond Reiter
   - 1991 — in V. Lifschitz (ed.), *Artificial Intelligence and
     Mathematical Theory of Computation*, Academic Press, pp.
     359–380
   - [no arxiv]
   - The successor-state-axiom solution to the frame problem: a
     single axiom per fluent captures the conditions under which
     it changes, eliminating the need to enumerate non-effects;
     the standard modern situation-calculus formulation.

96. **The Well-Founded Semantics for General Logic Programs**
   - Allen Van Gelder, Kenneth A. Ross, John S. Schlipf
   - 1991 — *Journal of the ACM*, 38(3), pp. 620–650
   - DOI: 10.1145/116825.116836
   - The well-founded semantics: a three-valued, polynomial-time
     semantics for logic programs with negation; the standard
     tractable alternative to stable-model semantics and the basis
     of the XSB tabled-Prolog system.

97. **Systematic Nonlinear Planning** (SNLP)
   - David A. McAllester, David Rosenblitt
   - 1991 — *Proceedings of the 9th National Conference on
     Artificial Intelligence (AAAI-91)*, pp. 269–275
   - [no arxiv]
   - SNLP: a systematic partial-order planning algorithm that
     established the formal foundations of least-commitment
     planning; the direct precursor of UCPOP.

98. **UCPOP: A Sound, Complete, Partial-Order Planner for ADL**
   - J. Scott Penberthy, Daniel S. Weld
   - 1992 — *Proceedings of the 3rd International Conference on
     Principles of Knowledge Representation and Reasoning (KR-92)*,
     pp. 639–647 (full version: *Artificial Intelligence* 76, 1995)
   - DOI: 10.1016/0004-3702(94)00020-S
   - UCPOP: the canonical partial-order (least-commitment) planner
     for ADL; the reference implementation of the
     partial-order-planning paradigm and the baseline against
     which Graphplan and Satplan were measured.

99. **Genetic Programming: On the Programming of Computers by
    Means of Natural Selection**
   - John R. Koza
   - 1992 — MIT Press (book)
   - ISBN: 978-0-262-11170-1
   - Genetic Programming: induces Lisp programs by evolutionary
     search over a program tree; a major 1990s program-induction
     method at the intersection of symbolic AI and evolutionary
     computation.

100. **Readings in Model-Based Diagnosis**
   - Walter Hamscher, Johan de Kleer, Luca Console (eds.)
   - 1992 — Morgan Kaufmann (book)
   - ISBN: 978-1-55860-245-8
   - The definitive collection of model-based diagnosis papers;
     consolidates the consistency-based and abductive diagnosis
     tradition that grew from Reiter 1987 and the ATMS.

101. **A Survey on the Complexity of Nonmonotonic Reasoning**
   - Marco Cadoli, Marco Schaerf
   - 1993 — *Journal of Automated Reasoning*, 11(2), pp. 219–264
   - DOI: 10.1007/BF00881846
   - Establishes the complexity landscape of non-monotonic
     formalisms, showing many are at the second level of the
     polynomial hierarchy; drives the 1990s search for tractable
     fragments.

102. **Case-Based Reasoning**
   - Janet L. Kolodner
   - 1993 — Morgan Kaufmann (book)
   - ISBN: 978-1-55860-335-6
   - The canonical textbook and systematization of case-based
     reasoning (CBR): retrieval, adaptation, and learning from
     stored cases; defines the CBR paradigm as a distinct
     symbolic-learning approach.

103. **C4.5: Programs for Machine Learning**
   - J. Ross Quinlan
   - 1993 — Morgan Kaufmann (book)
   - ISBN: 978-1-55860-238-0
   - C4.5: the mature decision-tree learner (pruning, continuous
     attributes, missing values, rule sets); the most widely used
     symbolic-learning algorithm of the 1990s.

104. **Rules of the Mind** (ACT-R)
   - John R. Anderson
   - 1993 — Lawrence Erlbaum (book)
   - ISBN: 978-0-8058-1199-5
   - ACT-R: a cognitive architecture combining declarative chunks
     and procedural productions with rational analysis; alongside
     SOAR, the major symbolic cognitive architecture of the 1990s.

105. **Causation, Prediction, and Search**
   - Peter Spirtes, Clark Glymour, Richard Scheines
   - 1993 — Springer (book) (2nd edition MIT Press 2000)
   - ISBN: 978-0-262-69267-9 (2nd ed.)
   - The foundational text of constraint-based causal discovery
     (the PC algorithm); complements Pearl's Bayesian-network
     program with algorithms for learning causal structure from
     statistical data.

106. **The Computational Complexity of Propositional STRIPS
    Planning**
   - Tom Bylander
   - 1994 — *Artificial Intelligence*, 69(1–2), pp. 165–204
   - DOI: 10.1016/0004-3702(94)90008-6
   - Establishes the precise complexity of the STRIPS planning
     problem (PSPACE-complete in the general case, NP-complete
     under simplifying restrictions); the definitive complexity
     analysis.

107. **Qualitative Reasoning: Modeling and Simulation with
    Incomplete Knowledge**
   - Benjamin Kuipers
   - 1994 — MIT Press (book)
   - ISBN: 978-0-262-11190-9
   - The canonical textbook of qualitative reasoning; the
     definitive consolidation of QSIM, QP, and confluence-based
     approaches into a unified methodology.

108. **Features and Fluents: A Systematic Approach to Representing
    Knowledge About Dynamical Systems**
   - Erik Sandewall
   - 1994 — Oxford University Press (book)
   - ISBN: 978-0-19-853836-6
   - The formal analysis of the frame problem across many logics
     of action; a comprehensive framework for reasoning about
     action and change.

109. **HTN Planning: Complexity and Expressivity**
   - Kutluhan Erol, James Hendler, Dana S. Nau
   - 1994 — *Proceedings of the 12th National Conference on
     Artificial Intelligence (AAAI-94)*, pp. 1123–1128
   - [no arxiv]
   - Formalizes Hierarchical Task Network (HTN) planning, the
     practical alternative to classical state-space planning that
     underlies most real-world planners.

110. **Intelligent Agents: Theory and Practice**
   - Michael Wooldridge, Nicholas R. Jennings
   - 1995 — *The Knowledge Engineering Review*, 10(2), pp.
     115–152
   - DOI: 10.1017/S0269888900008122
   - The standard survey of intelligent-agent theory and practice;
     the reference point as symbolic AI's focus shifted from
     isolated expert systems toward multi-agent and distributed
     reasoning.

111. **Planning as Satisfiability** (Satplan)
   - Henry A. Kautz, Bart Selman
   - 1996 — *Artificial Intelligence*, 90(1–2), pp. 257–282
     (earlier version KR-92, 1992)
   - DOI: 10.1016/S0004-3702(96)00050-1
   - Satplan: encodes classical planning as propositional
     satisfiability and hands it to fast SAT solvers;
     demonstrates that planning can be cast as constraint
     satisfaction — the start of the SAT-based-planning line.

112. **Fast Planning Through Planning Graph Analysis** (Graphplan)
   - Avrim L. Blum, Merrick L. Furst
   - 1997 — *Artificial Intelligence*, 90(1–2), pp. 281–300
   - DOI: 10.1016/S0004-3702(96)00047-1
   - Graphplan: introduces the planning graph, a polynomial-size
     data structure capturing reachability and mutual exclusions,
     enabling dramatically faster classical planning; a watershed
     that revitalized classical-planning research.

113. **Solving the Frame Problem**
   - Murray Shanahan
   - 1997 — MIT Press (book)
   - ISBN: 978-0-262-19384-2
   - The book-length treatment of the frame problem and its
     solution via the situation calculus and circumscription; the
     definitive synthesis of the classical approach.

114. **Nonmonotonic Reasoning: An Annotated Bibliography**
   - Gerhard Brewka, Jürgen Dix, Kurt Konolige
   - 1997 — CSLI Publications (book)
   - ISBN: 978-1-57586-041-5
   - The standard reference surveying default logic,
     circumscription, autoepistemic logic, and belief revision as
     a unified non-monotonic reasoning landscape.

115. **A Deductive System for Non-Monotonic Reasoning** (DLV)
   - Thomas Eiter, Georg Gottlob, Nicola Leone, et al.
   - 1997 — *Journal of Automated Reasoning*
   - DOI: 10.1023/A:1005892404572
   - DLV: a disjunctive-Datalog answer-set programming system
     that made ASP practical; the foundational system for the
     ASP problem-solving paradigm.

116. **PDDL — The Planning Domain Definition Language**
   - Drew McDermott, et al.
   - 1998 — *Technical Report CVC TR-98-003*, Yale Center for
     Computational Vision and Control
   - [no arxiv]
   - PDDL: the standard language for specifying
     classical-planning domains and problems; the lingua franca
     of the 1998-onwards planning community and the direct
     descendant of STRIPS/ADL.

117. **Model Checking**
   - Edmund M. Clarke, Orna Grumberg, Doron A. Peled
   - 1999 — MIT Press (book)
   - ISBN: 978-0-262-03270-4
   - The definitive book on model checking; the verification
     technique that became central to formal methods and symbolic
     verification of finite-state systems.

118. **Logic Programs with Stable Model Semantics as a Constraint
    Programming Paradigm** (ASP)
   - Ilkka Niemelä
   - 1999 — *Annals of Mathematics and Artificial Intelligence*,
     25(3–4), pp. 241–273
   - DOI: 10.1023/A:1018931917837
   - Formalizes answer-set programming as a constraint programming
     paradigm; the foundational paper that established ASP as a
     general problem-solving methodology.

119. **Stable Models and an Alternative to Strict Negation**
   - Victor Marek, Mirosław Truszczyński
   - 1999 — *Artificial Intelligence*, 124(1), pp. 175–194
   - DOI: 10.1016/S0004-3702(99)00080-2
   - Formalizes stable-model semantics as a practical alternative
     to classical negation; a key paper in making ASP a usable
     problem-solving tool.

120. **Causality: Models, Reasoning and Inference**
   - Judea Pearl
   - 2000 — Cambridge University Press (book) (2nd edition 2009)
   - ISBN: 978-0-521-89560-6 (2nd ed.)
   - The definitive synthesis of the structural causal model:
     do-calculus, counterfactuals, and the identification of
     causal effects; the capstone of the probabilistic-causal line.

121. **The Semantic Web**
   - Tim Berners-Lee, James Hendler, Ora Lassila
   - 2001 — *Scientific American*, 284(5), pp. 34–43
   - DOI: 10.1038/scientificamerican0501-34
   - Proposes the Semantic Web: machine-readable annotations and
     ontologies (OWL/RDF) layered on the Web; the large-scale
     deployment vision for symbolic knowledge representation in
     the 2000s.

122. **Constraint Processing**
   - Rina Dechter
   - 2003 — Morgan Kaufmann (book)
   - ISBN: 978-1-55860-890-0
   - The definitive textbook of constraint processing; the
     synthesis of two decades of symbolic-AI work on consistency,
     backtracking, and structure-based search.

123. **The Description Logic Handbook: Theory, Implementation and
    Applications**
   - Franz Baader, Diego Calvanese, Deborah L. McGuinness,
     Daniele Nardi, Peter F. Patel-Schneider (eds.)
   - 2003 — Cambridge University Press (book)
   - ISBN: 978-0-521-78176-3
   - The canonical reference for the description-logic family
     (descendants of KL-ONE: Classic, Loom, FaCT++, Pellet, and
     the formal basis of OWL), consolidating two decades of
     expressiveness/tractability results.

124. **Knowledge Representation and Reasoning**
   - Ronald J. Brachman, Hector J. Levesque
   - 2004 — MIT Press (book)
   - ISBN: 978-0-262-53116-4
   - The definitive modern textbook of knowledge representation
     and reasoning; the capstone synthesis of the symbolic-AI/KR
     tradition and the standard reference for the field as it
     entered the probabilistic and neural era.

125. **OWL Web Ontology Language Overview**
   - Deborah L. McGuinness, Frank van Harmelen
   - 2004 — W3C Recommendation, 10 February 2004
   - [no arxiv]
   - OWL: the W3C standardization of description logics as the
     Semantic Web's representation language; the practical legacy
     of the KL-ONE lineage for the modern web.


---

*End of 01-symbolic-ai bibliography. The neural, statistical, and
learning-theory lineages that run in parallel (and increasingly
superseded pure symbolic AI from the late 1980s onward) are catalogued
in the deep-learning, machine-learning-theory, and statistical-learning
categories.*
