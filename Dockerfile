FROM denoland/deno:2.0.2

WORKDIR /app

COPY deno.json .

RUN deno install

COPY . .

ARG PORT=8000
EXPOSE $PORT

CMD ["task", "start"]
