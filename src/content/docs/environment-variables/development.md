---
title: Development
description: Environment variables for various development tools and packages.
---

**Node:**
```bash
export NODE_REPL_HISTORY="$XDG_DATA_HOME"/node_repl_history #nodejs
export NPM_CONFIG_USERCONFIG=$XDG_CONFIG_HOME/npm/npmrc #npm
export NVM_DIR="$XDG_DATA_HOME"/nvm #nvm
export PNPM_HOME="$XDG_DATA_HOME"/pnpm
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
```

