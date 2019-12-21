interface a {
  name: string,
  eat(): void
}

interface b {
  seep(): void
}

interface c extends a, b {
}