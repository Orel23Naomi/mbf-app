import React from 'react';
import { Form, Slider, InputNumber, Row, Col } from 'antd';

interface AreaSliderProps {
  name: string;
  label: string;
  rules: any[];
}

const AreaSlider: React.FC<AreaSliderProps> = ({ name, label, rules }) => {

  const [inputValue, setInputValue] = React.useState<number>(0);
  const [form] = Form.useForm();

  const onChange = (value: number | null) => {
    if (value !== null) {
      setInputValue(value);
      form.setFieldsValue({ [name]: value });
    }
  };

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}>
         <Row>
        <Col span={16}>
          <Slider
            min={0}
            max={400}
            onChange={onChange}
            value={inputValue}
            step={10}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={400}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={onChange}
            step={10}
          />
        </Col>
      </Row>
    </Form.Item>
  );
};

export default AreaSlider;