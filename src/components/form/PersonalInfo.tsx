// src/components/PersonalInfo.tsx
import React from 'react';
import { Form, Input } from 'antd';

const PersonalInfo: React.FC = () => {
  return (
    <>
      <Form.Item
        name="firstName"
        label="Nome"
        rules={[{ required: true, message: 'Per favore inserisci il tuo nome!' }]}
      >
        <Input placeholder="Nome" />
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Cognome"
        rules={[{ required: true, message: 'Per favore inserisci il tuo cognome!' }]}
      >
        <Input placeholder="Cognome" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email', message: 'Per favore inserisci una email valida!' }]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Telefono"
        rules={[{ required: true, message: 'Per favore inserisci il tuo numero di telefono!' }]}
      >
        <Input placeholder="Telefono" />
      </Form.Item>
    </>
  );
};

export default PersonalInfo;