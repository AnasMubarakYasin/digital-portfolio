import { createApp } from 'astro/app/entrypoint'

const app = createApp()

export async function render(request: Request) {
  return app.render(request)
}
