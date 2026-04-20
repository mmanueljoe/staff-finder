# Staff Finder — Project Context

## What this project is
A practice project built to cover Vue 3 concepts required for contributing to ARMS, a real resource management microservices system. The goal is learning by building, not isolated exercises.

## Developer context
- Frontend engineering trainee, React background, learning Vue 3
- Solid on: Composition API, refs, computed, watchers, slots, props
- Unfamiliar with: watchEffect (knows what it is, hasn't used it)
- TypeScript: familiar enough to use, still building muscle memory
- Preference: understand the why before implementation, direct feedback over reassurance

## Stack
**Frontend:** Vue 3, Vite, TypeScript, Vue Router, Pinia, Vue Apollo (`@vue/apollo-composable`)
**Backend:** Node.js, GraphQL Yoga, in-memory JSON data (no database, no Express, plain JavaScript)

## Folder structure
```
staff-finder/
├── backend/
│   ├── src/
│   │   ├── data/
│   │   │   └── employees.js
│   │   ├── schema/
│   │   │   └── typeDefs.js
│   │   ├── resolvers/
│   │   │   ├── queries.js
│   │   │   └── mutations.js
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── ui/
    │   │   │   ├── Card.vue
    │   │   │   ├── Badge.vue
    │   │   │   └── Modal.vue
    │   │   ├── EmployeeCard.vue
    │   │   ├── EmployeeList.vue
    │   │   └── SkillFilter.vue
    │   ├── composables/
    │   │   ├── useEmployees.ts
    │   │   ├── useEmployee.ts
    │   │   └── useUpload.ts
    │   ├── stores/
    │   │   └── employeeStore.ts
    │   ├── views/
    │   │   ├── EmployeesView.vue
    │   │   ├── ProfileView.vue
    │   │   ├── UploadView.vue
    │   │   └── MatchView.vue
    │   ├── router/
    │   │   └── index.ts
    │   ├── apollo/
    │   │   └── client.ts
    │   ├── App.vue
    │   └── main.ts
    ├── package.json
    └── .env
```

## Architecture principles
- **Separate by responsibility, not file type**
- `components/ui/` — generic, domain-agnostic, slot-based
- `components/` — domain-specific, know what an employee is
- `composables/` — all data fetching logic, views never write GraphQL queries directly
- `stores/` — only for state that crosses page boundaries
- `views/` — thin wiring layer, import composables and components, no heavy logic

## Build order (current progress: folder structure set up, starting backend)
1. Backend — schema, resolvers, server running
2. Frontend shell — routing, empty views
3. Apollo client connected to backend
4. EmployeesView — list rendering, useEmployees composable
5. Live search — watchers
6. Card + Modal — slots
7. ProfileView — useEmployee, async component (lazy loaded)
8. Pinia store — selected employee across pages
9. UploadView — mutation, useUpload composable
10. MatchView — project input, filtered results

## Concepts to cover
Composition API, watchers, watchEffect, slots, Vue Router, Pinia, async components, composables, Vue Apollo composable

## Working dynamic
- Developer writes all code — the agent reviews, points out errors, and explains why something is wrong
- Agent does not rewrite code unless the developer is completely stuck and has made multiple attempts
- Feedback should be direct — flag inefficiencies, unnecessary complexity, wrong mental models
- Explain from first principles when correcting — not just "this is wrong" but "this is wrong because..."
- One concept at a time, don't move forward until the current step works and is understood

## Code style expectations
- `<script setup lang="ts">` on all Vue components
- TypeScript on frontend, plain JavaScript on backend
- Composables for all data fetching — never inline GraphQL in views
- Refs typed by inference where possible, explicit types on props and function signatures
- No unnecessary use of ref() on static values
- No direct DOM manipulation — let Vue handle the DOM