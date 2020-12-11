import React from "react";
import Container from "react-bootstrap/Container";

export default function PageContainer({ children }) {
  return (
    <Container fluid className="px-0">
      {children}
    </Container>
  );
}
