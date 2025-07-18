// src/components/RequestQuoteForm.tsx
import React, { useEffect } from 'react';
import { Form, Button, Row, Col, Select,Typography } from 'antd';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import ProjectDetails from './ProjectDetails';
import PrivacyPolicy from './PrivacyPolicy';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const RequestQuoteForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const message = `Salve sono ${values.firstName} ${values.lastName}, da ${values.city} vorrei chiedervi un preventivo per:
    Spazio da ristrutturare: ${values.space}
    Metratura intervento: ${values.area} Mq
    Idea di budget: ${values.budget}
    Tipo di ristrutturazione: ${values.renovationType}
    Proprietario: ${values.ownership}
    ${values.email || values.phone ? `Dati di contatto:(${values.phone? `telefono:${values.phone}`:''} ${values.email? `email:${values.email}`:''})`: ''}
Grazie`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/393755981328?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Richiedi ora il tuo preventivo: è gratuito!</Title>
          <Paragraph>
            Compila il form in tutti i suoi campi per richiedere un preventivo su Whatsapp
          </Paragraph>
          <Form
            form={form}
            name="request_quote"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
            <ProjectDetails />
            <PersonalInfo />
            <AddressInfo />
            <PrivacyPolicy />
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Richiedi Preventivo
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RequestQuoteForm;