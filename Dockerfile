FROM denoland/deno:2.0.2

WORKDIR /app

COPY deno.json .

RUN deno install
RUN deno task build
RUN deno task start

ARG PORT=3000
EXPOSE $PORT

CMD ["task", "start"]
