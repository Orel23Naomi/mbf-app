// src/components/AddressInfo.tsx
import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const AddressInfo: React.FC = () => {
  return (
    <>
      <Form.Item
        name="province"
        label="Provincia"
        rules={[{ required: true, message: 'Per favore seleziona la tua provincia!' }]}
      >
        <Select placeholder="Provincia">
          <Option value="Alessandria">Alessandria</Option>
          <Option value="Asti">Asti</Option>
          <Option value="Bergamo">Bergamo</Option>
          {/* Add other options here */}
        </Select>
      </Form.Item>
      <Form.Item
        name="city"
        label="Città"
        rules={[{ required: true, message: 'Per favore seleziona la tua città!' }]}
      >
        <Select placeholder="Città">
          <Option value="Alessandria">Alessandria</Option>
          <Option value="Asti">Asti</Option>
          <Option value="Bergamo">Bergamo</Option>
          {/* Add other options here */}
        </Select>
      </Form.Item>
    </>
  );
};

export default AddressInfo;