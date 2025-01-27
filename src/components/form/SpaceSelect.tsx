// src/components/SpaceSelect.tsx
import React, { useState } from 'react';
import { Form, Select, Input } from 'antd';

const { Option } = Select;

interface SpaceSelectProps {
  name: string;
  label: string;
  rules: any[];
}

const SpaceSelect: React.FC<SpaceSelectProps> = ({ name, label, rules }) => {
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSelectChange = (value: string) => {
    setShowOtherInput(value === 'Altro');
  };

  return (
    <>
      <Form.Item
        name={name}
        label={label}
        rules={rules}>
        <Select placeholder="Seleziona lo spazio da ristrutturare" onChange={handleSelectChange}>
          <Option value="Bagno">Bagno</Option>
          <Option value="Cucina">Cucina</Option>
          <Option value="Soggiorno">Soggiorno</Option>
          <Option value="Intera casa">Intera casa</Option>
          <Option value="Esterno">Esterno</Option>
          <Option value="Altro">Altro</Option>
        </Select>
      </Form.Item>
      {showOtherInput && (
        <Form.Item
          name="otherSpace"
          label="Specifica lo spazio"
          rules={[{ required: true, message: 'Per favore specifica lo spazio!' }]}>
          <Input placeholder="Specifica lo spazio" />
        </Form.Item>
      )}
    </>
  );
};

export default SpaceSelect;