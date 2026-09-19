# Maintaining the research catalogue

The homepage is generated from `_data/research.yml`. Each output appears once in its primary theme; the theme filter also finds outputs with a matching secondary theme. Headings, descriptions and navigation order live in `_data/research_themes.yml`.

## Add an output

1. Copy a complete entry in `_data/research.yml` and give it a unique, stable `id` using lowercase words and hyphens. This ID is its page anchor.
2. Add the title, destination URL and publication year. Use `Code` for a code repository and `Project` for a project page.
3. Write a short, plain-language `summary`. Keep the fuller scientific explanation in `description`.
4. Choose one primary `theme` and optional `secondary_themes` from the IDs in `_data/research_themes.yml`.
5. Reuse existing values for data types, tasks, methods, concerns and resource types where possible. Empty lists are written as `[]`. Only mark a resource as a dataset, package or benchmark when that artefact is actually available; models used in a paper are not necessarily downloadable models.
6. Add its BibTeX entry to `_bibliography/references.bib` and put the exact key in `citation`. Existing citations and the reference list are rendered by Jekyll Scholar.
7. Build and preview the site. Check the new output, citation, theme and filters before merging.

Example structure (replace the placeholders before adding):

```yaml
- id: short-project-name
  title: Project name
  url: https://github.com/organisation/repository
  link_label: Code
  year: 2026
  theme: imaging
  secondary_themes: [responsible]
  summary: A short sentence explaining what this resource helps people do.
  description: A fuller description of the research.
  citation: existing-bibtex-key
  data_types: [MRI]
  tasks: [Segmentation]
  methods: [Deep learning]
  concerns: [Uncertainty]
  resource_types: [Research code]
```

## Preview and checks

With Ruby and Bundler installed, run `bundle install`, then `bundle exec jekyll serve`. Open the address printed by Jekyll. The existing GitHub deployment builds Jekyll when changes reach `main`.

Check that all outputs are visible initially; search by title, a cited author and a synonym such as “magnetic resonance”; combine theme, data and resource filters; clear the filters; and try a narrow phone viewport. With JavaScript disabled, all thematic sections and citations must remain readable.

Search matches all entered words, regardless of their order. Different filters are combined with AND. Search and filters are stored in the URL so a view can be bookmarked or shared. Theme navigation links clear filters and jump to the primary section. Theme navigation counts show primary outputs, while the theme filter includes related outputs too.

## Initial editorial review

All 42 original titles, destination URLs, descriptions and citation keys were retained. Summaries, themes and tags are proposed editorial metadata and should be reviewed by project authors when practical. Resource types are conservative and based on the existing descriptions.

Two existing citation pairings merit checking: the mood symptom monitoring output uses the same `Corponi2024` key as Bayesian HRV, and “Decoding Deep Learning Methods for Binding Affinity Prediction” uses the same `Gorantla2024` key as the active-learning study. These were preserved rather than silently replaced.
