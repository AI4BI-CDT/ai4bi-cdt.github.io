---
layout: default
---

These pages contain links to various tools and resources created by the staff and students associated with the two Biomedical Artificial Intelligence Centres for Doctoral Training funded by UKRI at the University of Edinburgh.

## Courses and Training

- [Introduction to Python for Biomedical Innovation](https://ai4bi-cdt.github.io/python-course/). A student developed crash course in using Python for biomedical data analysis. This course is presented in modules including coding notebooks to allow you to develop practical skills.
- [An Introduction to Multi Modal Analysis Using Networks](https://biomedicalinformaticsgroup.github.io/networks_ismb24/intro.html). This workshop was run at the Intelligent Systems for Molecular Biology (ISMB) confrence in Montreal in July 2024. It is a Python based hands on tutorial introducing network methods including network similarity fusion (SNF) and the use of Graph Neural Networks (GNNs) to perofrm classification tasks on patient specific networks (PSNs).
- [How to Create a Protein](https://github.com/DrLeucine/how_to_create_a_protein). A short course on proteins and protein design aimed at early career students.

## Public Outreach Activities

- [Zoo Reviews](https://ai4bi-cdt.github.io/NLP_workshop_zoo_reviews/). A workshop using natural language processing to identify animals from text, group them by species and assess people's feelings about the animals.
- [Spacebound Minds](https://ai4bi-cdt.github.io/spacebound-minds-resources/). A workshop with online resources to learn more about mental health and well-being.

## Resources from Research Projects
- [CheXGenBench](https://github.com/Raman1121/CheXGenBench) - CheXGenBench is a standardized evaluation framework for synthetic chest X-ray generation, assessing fidelity, privacy, and clinical utility across multiple models using a unified multi-metric protocol. It also releases the SynthCheX-75K dataset and provides a reproducible benchmark for comparing and developing medical generative models. {% cite dutt2026chexgenbenchunifiedbenchmarkfidelity %}
- [Uncertainty quantification for WMH segmentation](https://github.com/BenjaminPhi5/wmhuq) - A framework for evaluating and leveraging uncertainty quantification in WMH segmentation, combining stochastic segmentation networks and deep ensembles to detect failures and ambiguity. It further integrates uncertainty features into downstream Fazekas scoring, improving classification accuracy and calibration. {% cite PHILPS2025103697 %}
- [GNN-Suite](https://github.com/AI4BI-CDT/gnn-suite) - GNN-Suit is a robust modular framework for constructing and benchmarking Graph Neural Network (GNN) architectures in computational biology. GNN-Suite standardises experimentation and reproducibility using the Nextflow workflow to evaluate GNN performance. {% cite kamp2025gnnsuite %}
- [Controlled Amplitude of Present Epitopes (CAPE)](https://github.com/hcgasser/CAPE_MPNN) -  an extension of ProteinMPNN that integrates direct preference optimization (DPO) with MHC-I presentation predictions to design proteins with reduced CTL immunogenicity. The framework preserves structural fidelity while systematically minimizing predicted immune-visible epitopes. {% cite 10.1093/protein/gzaf003 %}
- [CrossSDF](https://github.com/iamsalvatore/cross_sdf) - a novel method for 3D reconstruction of thin structures from cross-sectional data. It demonstrates a significant improvement over existing methods, effectively reconstructing thin structures and producing accurate 3D models without the interpolation artifacts or over-smoothing of prior approaches. {% cite Walker_2025_CVPR %}
- [Diffusion memorisation](https://github.com/Raman1121/diffusion_memorization) - a systematic framework for analysing memorization in medical text-to-image diffusion models, identifying high-risk prompts and tokens within MIMIC-CXR. It provides evaluation protocols and mitigation strategies to reduce privacy leakage and improve reliability in synthetic chest X-ray generation. {% cite dutt2025devilpromptsdeidentificationtraces %}
- [DEPfold](https://github.com/Vicky-0256/DEPfold) -  a novel approach to RNA secondary structure prediction that leverages techniques from natural language processing, specifically dependency parsing with biaffine attention. The model can effectively predict both canonical base pairs and pseudoknots, achieving competitive performance on standard RNA structure benchmarks. {% cite ICLR2025_1ad84bf5 %}
- [VL-ICL Bench](https://github.com/ys-zong/VL-ICL) - a comprehensive benchmark suite  for multimodal in-context learning, encompassing a broad spectrum of tasks that involve both images and text as inputs and outputs, and different types of challenges, from perception to reasoning and long context length. {% cite zong2025vliclbenchdevildetails %}
- [MOG-Dx](https://github.com/AI4BI-CDT/MOGDx) - Multi-omic Graph Diagnosis (MOGDx) is a tool for the integration of omic data and classification of heterogeneous diseases. MOGDx exploits a Patient Similarity Network (PSN) framework to integrate omic data using Similarity Network Fusion (SNF). {% cite ryan2024mogdx %}
- [PDBench](https://github.com/wells-wood-research/PDBench) - PDBench is a dataset and software package for evaluating fixed-backbone sequence design algorithms. The structures included in PDBench have been chosen to account for the diversity and quality of observed protein structures, giving a more holistic view of performance. {% cite castorina_2023_pdbench %}
- [CoPHE](https://github.com/modr00cka/CoPHE) - Count-preserving hierarchical evaluation and set-based hierarchical evaluation methods for hierarchical label spaces. Currently implemented only for the label space of the ICD-9 ontology of diseases and procedures. {% cite falis2021 %}
## References

{% bibliography --cited %}
