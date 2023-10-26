import { Container, Row, Col } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";
import { syaratketentuan } from "../data";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                repellat vero eos eius molestias modi debitis dolores laboriosam
                unde nostrum qui numquam reiciendis iste, doloribus quae beatae,
                officia aperiam quisquam facere ut ipsum eaque facilis? Enim vel
                dolorum placeat harum at quia laborum excepturi quibusdam
                reprehenderit quo tenetur consequuntur dolor, tempora nostrum ut
                doloremque itaque pariatur voluptas quisquam corrupti dicta.
              </p>
            </Col>
          </Row>
          {syaratketentuan.map((data) => (
          <Row key={data.id} className="py-3">
              <Col>
              <h4 className="fw-bold">{data.title}</h4>
              <p>{data.desc}</p>
              </Col>
          </Row>
          ))}
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
