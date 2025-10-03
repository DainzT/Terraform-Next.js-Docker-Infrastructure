provider "docker" {
  host = "npipe:////./pipe/docker_engine"
}

resource "docker_image" "nextjs" {
  name         = "nextjs-docker:latest"
  keep_locally = false

  build {
    context    = "${path.module}/.."
    # dockerfile = "Dockerfile"
  }
}

resource "docker_container" "nextjs" {
  image = docker_image.nextjs.image_id
  name  = var.container_name
  ports {
    internal = 3000
    external = 3000
  }
}