import { Container } from "react-bootstrap"

export const AppFooter = () => {
  return (
    <Container as="footer" className="mt-5">
      <div className="d-flex justify-content-between small text-muted">
        <p>Balancer</p>
        <p>Hecho con ♥ por <a href="https://juancrrn.io" target="_blank" rel="noreferrer">Juan Carrión</a></p>
      </div>
    </Container>
  )
}
