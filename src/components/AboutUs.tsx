import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const AboutUs: React.FC = () => {
    return (
        <Row style={{marginBottom: '10px' }}>
            <Col span={24} style={{ textAlign: 'center'}}>
                <Divider />
                <Title level={2} className="intro-text">
                    Chi Siamo
                </Title>
                <Divider />
                <Divider className="visible-xs" />
                <Title level={2}>
                    <Text strong>
                        M.B.F. MULTISERVIZI è un'azienda leader nel settore delle ristrutturazioni chiavi in mano, specializzata in ristrutturazioni di alloggi, bagni, e manutenzione di impianti idraulici ed elettrici. La nostra missione è fornire servizi di alta qualità con un'attenzione particolare ai dettagli e alla soddisfazione del cliente.
                    </Text>
                </Title>
            </Col>
        </Row>
    );
};

export default AboutUs;