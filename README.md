# boyu-zhu.github.io

Source of [Boyu Zhu's academic homepage](https://boyu-zhu.github.io), built with [al-folio](https://github.com/alshedivat/al-folio).

## Local preview

```bash
bundle install
bundle exec jekyll serve --livereload   # http://127.0.0.1:4000/
```

## Where to edit

- Bio and profile photo: `_pages/about.md`, `assets/img/prof_pic.jpg`
- News: `_news/`
- Publications: `_bibliography/papers.bib` (thumbnails in `assets/img/publication_preview/`)
- Social links: `_data/socials.yml`
- Site settings: `_config.yml`

Pushing to `main` builds the site with GitHub Actions and deploys it to the `gh-pages` branch.
