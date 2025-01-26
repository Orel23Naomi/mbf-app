import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const OurServices: React.FC = () => {
    return (
        <Row style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Col span={24}>
                <Divider />
                <Title level={2} className="intro-text">
                    I Nostri Servizi
                </Title>
                <Divider />
                <Divider className="visible-xs" />
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Ristrutturazioni Chiavi In Mano di Alloggi</strong> Offriamo soluzioni complete per la ristrutturazione del vostro alloggio, dalla progettazione alla realizzazione finale.
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Ristrutturazioni Bagni</strong> Trasformiamo il vostro bagno in uno spazio moderno e funzionale, con materiali di alta qualità e design innovativo.
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Manutenzione Impianti Idraulici</strong> Garantiamo il corretto funzionamento dei vostri impianti idraulici con interventi di manutenzione ordinaria e straordinaria.
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Manutenzione Impianti Elettrici</strong> Assicuriamo la sicurezza e l'efficienza dei vostri impianti elettrici con servizi di manutenzione professionale.
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Interventi di Manutenzione Ordinaria e Straordinaria</strong> Offriamo servizi di manutenzione per mantenere la vostra proprietà in perfette condizioni, prevenendo problemi futuri.
                        </small>
                    </Text>
                </Title>
            </Col>
        </Row>
    );
};

export default OurServices;