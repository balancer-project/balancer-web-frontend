import { Accordion, Badge, Col, Container, Row } from "react-bootstrap"
import { PiCalendarLight, PiEyeLight, PiEyeSlashLight } from "react-icons/pi"
import { TfiReload } from "react-icons/tfi"
import { capitalize } from "../../../helpers/String"
import { RecurringExpenseStatus } from "../../../models/RecurringExpenseStatus"
import { PaymentsList } from "./PaymentsList"

export const RecurringExpenseBody = ({
  id,
  type,
  recurringExpenseStatus,
  category,
  recipient,
  concept,
  comments,
  amount,
  amountType,
  paymentMethod,
  frequency,
  firstPaymentDate,
  lastPaymentDate,
  hiddenInPlans,
  payments,
  createdAt,
  updatedAt
}) => {
  return (
    <Accordion.Body>
      <Container className="body recurring py-3">
        <Row className="mb-4">
          <Col xs="7">
            <h1 className="amount mb-2">-{amount.toFixed(2)} €</h1>
            <h4 className="concept mb-2">{concept}</h4>
            <small className="text-muted">Cantidad {amountType.humanName}</small>
          </Col>
          <Col>
            <div className="mb-1">
              <Col>
                <TfiReload /> Recurrente
                <Badge className="ms-2" bg={recurringExpenseStatus === RecurringExpenseStatus.Active ? "success" : "secondary"}>
                  {capitalize(recurringExpenseStatus.humanName)}
                </Badge>
              </Col>
            </div>
            <div className="mb-1">
              <PiCalendarLight /> {capitalize(frequency.humanName)}
            </div>
            <div>
              {category.icon} {capitalize(category.humanName)}
            </div>
          </Col>
        </Row>
        <PaymentsList payments={payments} />
        { comments !== "" ?
          <div className="small mb-3">
            <p className="text-muted">Comentarios</p>
            <div><p>{comments}</p></div>
          </div>
        : <></> }
        <Row className="text-muted small">
          <Col xs={3}>Destinatario</Col>
          <Col>{recipient.name}</Col>
          <Col xs={2}>Primer pago</Col>
          <Col>{firstPaymentDate !== undefined ? firstPaymentDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : "Desconocido"}</Col>
        </Row>
        <Row className="text-muted small mb-3">
          <Col xs={3}>Método de pago</Col>
          <Col>{paymentMethod.humanName}</Col>
          <Col xs={2}>Pago final</Col>
          <Col>{lastPaymentDate !== undefined ? lastPaymentDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) : "Desconocido"}</Col>
        </Row>
        <div className="text-muted small">
          {hiddenInPlans ? <PiEyeSlashLight /> : <PiEyeLight />} {hiddenInPlans ? "No se" : "Se"} muestra en las planificaciones
        </div>
      </Container>
    </Accordion.Body>
  )
}
