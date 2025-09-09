import React from 'react';
import { Row, Col, Typography, Divider, List } from 'antd';

const { Title, Text } = Typography;

interface ListItem {
  title: string;
  description: string;
}

interface GenericListProps {
  title: string;
  description: string;
  items: ListItem[];
}

const GenericList: React.FC<GenericListProps> = ({ title, description, items }) => {
  return (
    <Row style={{ marginBottom: '10px' }}>
      <Col span={24}>
        <Divider />
        <Title level={2} className="intro-text" style={{ textAlign: 'center' }}>
          {title}
        </Title>
        <Divider />
        <Divider className="visible-xs" />
        <Text>{description}</Text>
        <List
          itemLayout="vertical"
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

const OurServices: React.FC = () => {
  const services = [
    {
      title: 'Ristrutturazioni Chiavi In Mano di Alloggi',
      description: 'Offriamo soluzioni complete per la ristrutturazione del vostro alloggio, dalla progettazione alla realizzazione finale.',
    },
    {
      title: 'Ristrutturazioni Bagni',
      description: 'Trasformiamo il vostro bagno in uno spazio moderno e funzionale, con materiali di alta qualità e design innovativo.',
    },
    {
      title: 'Manutenzione Impianti Idraulici',
      description: 'Garantiamo il corretto funzionamento dei vostri impianti idraulici con interventi di manutenzione ordinaria e straordinaria.',
    },
    {
      title: 'Manutenzione Impianti Elettrici',
      description: 'Assicuriamo la sicurezza e l\'efficienza dei vostri impianti elettrici con servizi di manutenzione professionale.',
    },
    {
      title: 'Interventi di Manutenzione Ordinaria e Straordinaria',
      description: 'Offriamo servizi di manutenzione per mantenere la vostra proprietà in perfette condizioni, prevenendo problemi futuri.',
    },
  ];

  return (
      <GenericList
        title="I Nostri Servizi"
        description=""
        items={services}
      />
    );
  };

export default OurServices;
export {};