import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const TransformYourHome: React.FC = () => {
    return (
        <Row justify="center" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Col span={24}>
                <Title level={2}>
                    <Text type="secondary">Trasforma la Tua Casa con M.B.F. MULTISERVIZI</Text>
                </Title>
                <Button
                    type="primary"
                    icon={<PhoneOutlined />}
                    href="tel:+393313919378"
                    style={{ marginRight: '10px' }}
                >
                    CHIAMA 375 5981328
                </Button>
                <Button
                    type="primary"
                    icon={<WhatsAppOutlined />}
                    href="https://wa.me/393755981328"
                    style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                    SCRIVI SU WHATSAPP
                </Button>
                <Divider />
                <Title level={2}>
                    <Text strong>
                        M.B.F. MULTISERVIZI è sinonimo di eccellenza nel settore delle ristrutturazioni a Alessandria e provincia. Offriamo una vasta gamma di servizi per soddisfare tutte le vostre esigenze di ristrutturazione e manutenzione.
                    </Text>
                </Title>
            </Col>
        </Row>
    );
};

export default TransformYourHome;