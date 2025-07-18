import React from 'react';
import { Row, Col, Button, Divider } from 'antd';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './ContactButtons.css'; // Importa il file CSS per lo stile

const ContactButtons: React.FC = () => {
  return (
    <Row justify="center" align="middle" gutter={[16, 16]}>
      <Col xs={24} sm={12} className="contact-button-col">
        <Button
          type="primary"
          icon={<PhoneOutlined />}
          href="tel:+393755981328"
          block
        >
          CHIAMA 375 5981328
        </Button>
      </Col>
      <Col xs={24} sm={12} className="contact-button-col">
        <Button
          type="primary"
          icon={<WhatsAppOutlined />}
          href="https://wa.me/393755981328"
          style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
          block
        >
          SCRIVI SU WHATSAPP
        </Button>
      </Col>
    </Row>
  );
};

export default ContactButtons;