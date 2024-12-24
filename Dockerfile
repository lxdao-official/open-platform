FROM node:20-alpine AS builder

WORKDIR /app
RUN npm install -g pnpm

COPY .env .env
COPY package.json ./

RUN pnpm install
COPY . .

RUN pnpm build

# 使用多阶段构建来减小最终镜像大小
FROM node:20-alpine

WORKDIR /app

# 从构建阶段复制必要文件
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.env ./.env

CMD ["node", "dist/main"]