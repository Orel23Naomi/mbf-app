import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const AboutUs: React.FC = () => {
    return (
        <Row style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Col span={24}>
                <Divider />
                <Title level={2} className="intro-text">
                    Chi Siamo
                </Title>
                <Divider />
                <Divider className="visible-xs" />
                <Title level={2}>
                    <Text strong>
                        <small>
                            M.B.F. MULTISERVIZI è un'azienda leader nel settore delle ristrutturazioni chiavi in mano, specializzata in ristrutturazioni di alloggi, bagni, e manutenzione di impianti idraulici ed elettrici. La nostra missione è fornire servizi di alta qualità con un'attenzione particolare ai dettagli e alla soddisfazione del cliente.
                        </small>
                    </Text>
                </Title>
            </Col>
        </Row>
    );
};

export default AboutUs;