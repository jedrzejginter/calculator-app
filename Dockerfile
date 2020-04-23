FROM node:13.11.0-alpine AS builder
WORKDIR /usr/src/project
COPY package.json yarn.lock packages/app/package.json ./
RUN yarn --frozen-lockfile
COPY . .
WORKDIR /usr/src/project/packages/app
RUN yarn build

FROM pagespeed/nginx-pagespeed:stable-alpine3.8 AS runner
COPY --from=builder /usr/src/project/packages/app/out /usr/share/nginx/html
COPY --from=builder /usr/src/project/packages/app/.nginx/entrypoint.sh /usr/src/entrypoint.sh
COPY --from=builder /usr/src/project/packages/app/.nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
RUN chmod +x /usr/src/entrypoint.sh
CMD /usr/src/entrypoint.sh
