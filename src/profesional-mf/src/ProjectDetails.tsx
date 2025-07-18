import React from 'react';
import { Form, Select, Radio, Row, Col } from 'antd';
import AreaSlider from './AreaSlider';
import SpaceSelect from './SpaceSelect';

const { Option } = Select;

const ProjectDetails: React.FC = () => {
  const [form] = Form.useForm();
  const [budgetOptions] = React.useState([
    { label: 'Inferiore ai 10.000€', value: 'Inferiore ai 10.000€' },
    { label: 'Tra i 10.000€ ed i 30.000€', value: 'Tra i 10.000€ ed i 30.000€' },
    { label: 'Superiore ai 30.000€', value: 'Superiore ai 30.000€' },
  ]);

  return (
    <Form form={form} layout="vertical">
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <SpaceSelect
            name="space"
            label="Quale spazio vuoi ristrutturare?"
            rules={[{ required: true, message: 'Per favore seleziona lo spazio da ristrutturare!' }]}
          />
        </Col>
        <Col xs={24} sm={12}>
          <AreaSlider
            name="area"
            label="Metratura intervento"
            rules={[{ required: true, message: "Per favore inserisci la metratura dell'intervento!" }]}
          />
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="renovationType"
            label="Che tipo di ristrutturazione stai cercando?"
            rules={[{ required: true, message: 'Per favore seleziona il tipo di ristrutturazione!' }]}
          >
            <Radio.Group>
              <Radio value="Parziale">Parziale</Radio>
              <Radio value="Chiavi in mano">Chiavi in mano</Radio>
              <Radio value="Profonda">Profonda</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="budget"
            label="Idea di budget"
            rules={[{ required: true, message: "Per favore seleziona un'idea di budget!" }]}
          >
            <Radio.Group>
              {budgetOptions.map(option => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12}>
          <Form.Item
            name="ownership"
            label="Sei proprietario oppure hai il compromesso?"
            rules={[{ required: true, message: "Per favore seleziona un'opzione!" }]}
          >
            <Radio.Group>
              <Radio value="Si">Si</Radio>
              <Radio value="No, ma ho il compromesso">No, ma ho il compromesso</Radio>
              <Radio value="No, ma sto valutando l’acquisto">No, ma sto valutando l’acquisto</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ProjectDetails;