
# loadenv

## Description
Reads environment files and envs from current execution, so you can have .env.default files and change the same envs on production.

## How it works:

```ts
import { load } from 'https://deno.land/x/loadenv';
await load();

// Enjoy your envs with Deno.env.get('...')
```