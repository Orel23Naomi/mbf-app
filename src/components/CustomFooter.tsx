import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
    return (
        <Footer style={{ textAlign: 'center' , backgroundColor: '#f0f2f5', padding: '20px 0' }}>
            <div className="container">
                <Row justify="center">
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <ul className="icons" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'inline', margin: '0 10px' }}>
                                <a href="https://www.facebook.com/share/p/n7RSexg5QHoUpzgN/" title="Facebook" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </li>
                        </ul>
                        <div className="copyright" style={{ marginTop: '10px' }}>
                            M.B.F. MULTISERVIZI Eccellenza nelle ristrutturazioni a Alessandria e provincia. © 2025
                        </div>
                    </Col>
                </Row>
            </div>
        </Footer>
    );
};

export default CustomFooter;