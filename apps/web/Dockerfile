FROM node:lts-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
RUN pnpm add -g turbo
COPY . .
RUN turbo prune web --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile
COPY --from=builder /app/out/full/ .
COPY turbo.json .
RUN pnpm turbo run build --filter=web...

FROM base AS runner
LABEL org.opencontainers.image.source="https://github.com/dct0/human-livestocks"
# ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer /app/apps/web/next.config.mjs .
COPY --from=installer /app/apps/web/package.json .
COPY --from=installer --chown=nextjs:nextjs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nextjs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nextjs /app/apps/web/public ./apps/web/public

CMD node apps/web/server.js