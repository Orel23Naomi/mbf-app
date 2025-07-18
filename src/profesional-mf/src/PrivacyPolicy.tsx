// src/components/PrivacyPolicy.tsx
import React from 'react';
import { Form, Checkbox } from 'antd';

const PrivacyPolicy: React.FC = () => {
  return (
    <Form.Item
      name="privacyPolicy"
      valuePropName="checked"
      rules={[{ required: true, message: 'Per favore accetta la Privacy Policy!' }]}>
      <Checkbox>
        Ho letto e accetto la <a href="https://www.iubenda.com/privacy-policy/18768928" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
      </Checkbox>
    </Form.Item>
  );
};

export default PrivacyPolicy;