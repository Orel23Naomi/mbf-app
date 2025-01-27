import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

const TransformYourHome: React.FC = () => {
    return (
        <Row justify="center" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Col span={24}>
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