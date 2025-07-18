// src/components/GenericList.tsx
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
          renderItem={item => (
            <List.Item>
              <Title level={4}>
                <Text strong>{item.title}</Text>
              </Title>
              <Text>{item.description}</Text>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default GenericList;