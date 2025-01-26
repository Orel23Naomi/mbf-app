import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const MaintenanceSchedule: React.FC = () => {
    return (
        <Row style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Col span={24}>
                <Divider />
                <Title level={2} className="intro-text">
                    Quando Fare la Manutenzione
                </Title>
                <Divider />
                <Divider className="visible-xs" />
                <Title level={2}>
                    <Text>
                        <small>
                            La manutenzione regolare è essenziale per garantire la sicurezza e l'efficienza degli impianti della vostra casa. Ecco alcuni consigli su quando effettuare la manutenzione:
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Impianti Idraulici</strong> Controlli annuali per prevenire perdite e garantire il corretto funzionamento.
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Impianti Elettrici</strong> Verifiche periodiche per assicurare la sicurezza e prevenire guasti.
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Ristrutturazioni Bagni</strong> Interventi di aggiornamento ogni 10-15 anni per mantenere il bagno moderno e funzionale.
                        </small>
                    </Text>
                </Title>
                <Title level={2}>
                    <Text strong>
                        <small>
                            <strong>Manutenzione Ordinaria</strong> Controlli stagionali per mantenere la vostra proprietà in ottime condizioni.
                        </small>
                    </Text>
                </Title>
            </Col>
        </Row>
    );
};

export default MaintenanceSchedule;