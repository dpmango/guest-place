FROM node:14-alpine
LABEL maintainer="Sergey Khmelevskoy <sergey@khmelevskoy.co>"

RUN apk update && apk upgrade
RUN mkdir -p /var/app/
WORKDIR /var/app/
VOLUME /var/app

ENV NUXT_HOST 0.0.0.0
EXPOSE 3000

COPY ci/docker/entrypoint.sh /
CMD ["/entrypoint.sh"]
