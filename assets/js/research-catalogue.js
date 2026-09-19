(() => {
  'use strict';
  const form = document.getElementById('research-filters');
  const source = document.getElementById('research-data-json');
  if (!form || !source) return;
  const resources = JSON.parse(source.textContent);
  const query = document.getElementById('research-query');
  const theme = document.getElementById('research-theme');
  const data = document.getElementById('research-data');
  const type = document.getElementById('research-type');
  const count = document.getElementById('research-count');
  const empty = document.getElementById('research-empty');
  const sections = [...document.querySelectorAll('.research-section')];
  const normalise = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const synonyms = [
    ['mri', 'magnetic resonance'], ['wmh', 'white matter hyperintensity', 'white matter hyperintensities'],
    ['gnn', 'gnns', 'graph neural network', 'graph neural networks'],
    ['llm', 'llms', 'large language model', 'language models'],
    ['nlp', 'natural language processing', 'clinical language'],
    ['aging', 'ageing'], ['methylome', 'dna methylation'],
    ['x ray', 'xray', 'radiograph'], ['ecg', 'electrocardiogram'],
    ['immunogenicity', 'immune visibility'],
  ];
  function populate(select, field) {
    [...new Set(resources.flatMap(resource => resource[field]))].sort((a, b) => a.localeCompare(b)).forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      select.append(option);
    });
  }
  populate(data, 'data_types');
  populate(type, 'resource_types');
  const records = resources.map(resource => {
    const card = document.getElementById(resource.id);
    const themes = [resource.theme, ...resource.secondary_themes];
    const reference = card.querySelector('.research-citation a[href^="#"]');
    const bibliographyText = reference ? document.getElementById(decodeURIComponent(reference.hash.slice(1)))?.textContent || '' : '';
    const labels = themes.map(id => [...theme.options].find(option => option.value === id)?.textContent || id);
    let searchable = normalise([resource.title, resource.summary, resource.description, resource.year,
      ...resource.data_types, ...resource.tasks, ...resource.methods, ...resource.concerns, ...resource.resource_types,
      ...labels, bibliographyText, card.querySelector('.research-citation').textContent].join(' '));
    synonyms.forEach(group => {
      if (group.some(term => (` ${searchable} `).includes(` ${term} `))) searchable += ` ${group.join(' ')}`;
    });
    return { resource, card, themes, searchable };
  });
  const controls = { q: query, theme, data, type };
  function restore() {
    const params = new URLSearchParams(location.search);
    Object.entries(controls).forEach(([key, control]) => { control.value = params.get(key) || ''; });
  }
  function filter(syncURL = true) {
    const terms = normalise(query.value).split(' ').filter(Boolean);
    let visible = 0;
    records.forEach(({ resource, card, themes, searchable }) => {
      const matches = terms.every(term => searchable.includes(term)) &&
        (!theme.value || themes.includes(theme.value)) &&
        (!data.value || resource.data_types.includes(data.value)) &&
        (!type.value || resource.resource_types.includes(type.value));
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    sections.forEach(section => { section.hidden = !section.querySelector('.research-card:not([hidden])'); });
    empty.hidden = visible !== 0;
    count.textContent = `${visible} of ${resources.length} outputs`;
    if (syncURL) {
      const url = new URL(location.href);
      Object.entries(controls).forEach(([key, control]) => {
        if (control.value) url.searchParams.set(key, control.value); else url.searchParams.delete(key);
      });
      history.replaceState(null, '', url);
    }
  }
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('input', () => filter());
  form.addEventListener('change', () => filter());
  form.addEventListener('reset', event => {
    event.preventDefault();
    Object.values(controls).forEach(control => { control.value = ''; });
    filter();
    query.focus();
  });
  // Theme links remain ordinary in-page navigation; clear active filters before jumping.
  document.querySelectorAll('.research-themes a').forEach(link => link.addEventListener('click', () => {
    Object.values(controls).forEach(control => { control.value = ''; });
    filter();
  }));
  window.addEventListener('popstate', () => { restore(); filter(false); });
  restore();
  filter(false);
  form.hidden = false;
})();
