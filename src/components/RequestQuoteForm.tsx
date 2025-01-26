// src/components/RequestQuoteForm.tsx
import React from 'react';
import { Form, Button, Row, Col, Typography } from 'antd';
import PersonalInfo from './form/PersonalInfo';
import AddressInfo from './form/AddressInfo';
import ProjectDetails from './form/ProjectDetails';
import PrivacyPolicy from './form/PrivacyPolicy';

const { Title, Paragraph } = Typography;

const RequestQuoteForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
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
            Compila il form in tutti i suoi campi per richiedere un preventivo. Verrai presto ricontattato da un esperto del Team di Nest.City
          </Paragraph>
          <Form
            form={form}
            name="request_quote"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
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