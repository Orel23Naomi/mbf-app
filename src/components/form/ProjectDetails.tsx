// src/components/ProjectDetails.tsx
import React from 'react';
import { Form, Select, Input, Radio } from 'antd';

const { Option } = Select;

const ProjectDetails: React.FC = () => {
  return (
    <>
      <Form.Item
        name="space"
        label="Quale spazio vuoi ristrutturare?"
        rules={[{ required: true, message: 'Per favore seleziona lo spazio da ristrutturare!' }]}
      >
        <Select placeholder="Seleziona lo spazio da ristrutturare">
          <Option value="Bagno">Bagno</Option>
          <Option value="Cucina">Cucina</Option>
          <Option value="Soggiorno">Soggiorno</Option>
          <Option value="Intera casa">Intera casa</Option>
          <Option value="Esterno">Esterno</Option>
          <Option value="Altro">Altro</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="area"
        label="Metratura intervento"
        rules={[{ required: true, message: 'Per favore inserisci la metratura dell\'intervento!' }]}
      >
        <Input type="number" placeholder="Metratura in Mq" />
      </Form.Item>
      <Form.Item
        name="budget"
        label="Idea di budget"
        rules={[{ required: true, message: 'Per favore seleziona un\'idea di budget!' }]}
      >
        <Radio.Group>
          <Radio value="Inferiore ai 10.000€">Inferiore ai 10.000€</Radio>
          <Radio value="Tra i 10.000€ ed i 30.000€">Tra i 10.000€ ed i 30.000€</Radio>
          <Radio value="Superiore ai 30.000€">Superiore ai 30.000€</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="renovationType"
        label="Che tipo di ristrutturazione stai cercando?"
        rules={[{ required: true, message: 'Per favore seleziona il tipo di ristrutturazione!' }]}
      >
        <Radio.Group>
          <Radio value="Parziale">Parziale</Radio>
          <Radio value="Completa">Completa</Radio>
          <Radio value="Profonda">Profonda</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="ownership"
        label="Sei proprietario oppure hai il compromesso?"
        rules={[{ required: true, message: 'Per favore seleziona un\'opzione!' }]}
      >
        <Radio.Group>
          <Radio value="Si">Si</Radio>
          <Radio value="No, ma ho il compromesso">No, ma ho il compromesso</Radio>
          <Radio value="No, ma sto valutando l’acquisto">No, ma sto valutando l’acquisto</Radio>
        </Radio.Group>
      </Form.Item>
    </>
  );
};

export default ProjectDetails;