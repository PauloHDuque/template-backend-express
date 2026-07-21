# Padrões de Código

## Convenções de Nomenclatura

- Variáveis devem usar `camelCase`.
- Pastas devem usar `kebab-case`.
- Tabelas e colunas do banco de dados devem usar `snake_case`.

## Branches do Git

Os nomes das branches devem começar com um dos prefixos abaixo, sempre seguido por uma barra:

- `feature/`
- `bugfix/`
- `release/`
- `hotfix/`
- `support/`

Exemplo: `feature/adiciona-autenticacao`.

## Fluxo de Trabalho no GitLab

Lembre-se sempre de mover as tarefas concluídas para a coluna "Done" no GitLab.

## Mensagens de Commit

As mensagens de commit devem seguir esta estrutura:

```text
<tipo>: <descrição>
```

### Tipos Permitidos

- `feat` - Adição de uma nova funcionalidade.
- `fix` - Correção de um defeito.
- `docs` - Alterações na documentação.
- `perf` - Melhorias de desempenho.
- `style` - Formatação, espaços em branco e ajustes sem alteração funcional.
- `refactor` - Alterações de código que não corrigem defeitos nem adicionam funcionalidades.
- `test` - Adição ou alteração de testes.
- `chore` - Tarefas de build, configurações, atualizações do gerenciador de pacotes e atividades semelhantes.

### Regras da Descrição

A descrição deve ser clara, concisa e explicar o que foi feito. Use a terceira pessoa do presente do indicativo.

Exemplos:

- `feat: adiciona autenticação OAuth2`
- `fix: corrige erro de layout no formulário de login`

O commitlint valida automaticamente o tipo, a estrutura e a descrição de cada mensagem de commit por meio do hook `commit-msg` do Husky.

## Verificações Automatizadas

- O hook `pre-commit` executa o lint-staged para formatar e validar os arquivos alterados.
- O hook `pre-push` executa o lint e todos os testes antes do envio das alterações.
- Todo código deve passar pelo ESLint, pelo Prettier e pelos testes antes de ser integrado.
