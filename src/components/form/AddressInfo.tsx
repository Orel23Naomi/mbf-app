// src/components/AddressInfo.tsx
import React from 'react';
import { Form, Select, Row, Col } from 'antd';

const { Option } = Select;

const AddressInfo: React.FC = () => {
  return (
    <Row gutter={16}>
      <Col xs={24} sm={12}>
        <Form.Item
          name="province"
          label="Provincia"
          rules={[{ required: true, message: 'Per favore seleziona la tua provincia!' }]}
        >
          <Select placeholder="Provincia">
            <Option value="Alessandria">Alessandria</Option>
            <Option value="Asti">Asti</Option>
            {/* Add other options here */}
          </Select>
        </Form.Item>
      </Col>
      <Col xs={24} sm={12}>
        <Form.Item
          name="city"
          label="Città"
          rules={[{ required: true, message: 'Per favore seleziona la tua città!' }]}
        >
          <Select placeholder="Città">
            <Option value="Alessandria">Alessandria</Option>
            <Option value="Asti">Asti</Option>
            {/* Add other options here */}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default AddressInfo;