# Shared

Shared code between frontend and backend including types, utilities, and constants.

## Structure

```
shared/
├── types/         # TypeScript type definitions and interfaces
├── constants/     # Shared constants
├── utils/         # Shared utility functions
├── package.json
└── tsconfig.json
```

## Usage

### In Frontend

```typescript
import { User, ApiResponse } from '../shared/types';
import { API_BASE_URL } from '../shared/constants';
import { formatDate } from '../shared/utils';
```

### In Backend

```typescript
import { User, ApiResponse } from '../shared/types';
import { formatDate } from '../shared/utils';
```

## Development

```bash
cd shared
npm install
npm run build    # Build TypeScript
npm run dev      # Watch mode
```
