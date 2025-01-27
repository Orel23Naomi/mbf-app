// src/components/StickyHeader.tsx
import React from 'react';
import './StickyHeader.css'; // Import the CSS for styling
import { Row, Col, Typography, Button, Divider } from 'antd';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import ContactButtons from './ContactButtons';

const { Title, Text } = Typography;

const StickyHeader: React.FC = () => {
  return (
    <div className="elementor-748">
      <div className="elementor-element elementor-element-4d8448a elementor-sticky--effects header-content">
        <Row justify="start" align="middle">
            <Col>
              <a href="https://www.mbfmultiservice.it" target="_blank" rel="noopener noreferrer">
                <img
                  width="100"
                  height="100"
                  src="https://mbfmultiservice.it/img/favicon.png"
                  alt="MBF Multiservice Logo"
                />
              </a>
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col>
              <Title level={4} className="header-subtitle">
                <Text type="secondary">Professionisti nel settore delle ristrutturazioni a Alessandria e provincia</Text>
              </Title>
            </Col>
          </Row>
          <ContactButtons></ContactButtons>
      </div>
    </div>
  );
};

export default StickyHeader;