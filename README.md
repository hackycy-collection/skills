# Hackycy's Skills

Preferences agent skills

## Installation

```bash
pnpx skills add hackycy-collection/skills
```

Learn more about the CLI usage at [skills](https://github.com/vercel-labs/skills).

## Generate Skills

Fork this project to create your own customized skill collection.

1. Fork or clone this repository
2. Install dependencies: `pnpm install`
3. Update `meta.ts` with your own projects and skill sources
4. Run `pnpm start cleanup` to remove existing submodules and skills
5. Run `pnpm start init` to clone the submodules
6. Run `pnpm start sync` to sync vendored skills
7. Ask your agent to `Generate skills for \<project\>` (recommended one at a time to manage token usage)

See [AGENTS.md](AGENTS.md) for detailed generation guidelines.

## Inspire

- https://github.com/antfu/skills
- https://github.com/pbakaus/impeccable
- https://code.claude.com/docs/zh-CN

## License

[MIT](./LICENSE) License © [hackycy](https://github.com/hackycy)
