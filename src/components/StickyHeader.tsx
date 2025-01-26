import React from 'react';
import './StickyHeader.css'; // Import the CSS for styling

const StickyHeader: React.FC = () => {
    return (
        <div className="elementor-748">
            <div className="elementor-element elementor-element-4d8448a elementor-sticky--effects">
                <h2 className="text-center">
                    <ul className="icons">
                        <li>
                            <a href="https://www.mbfmultiservice.it" target="_blank" rel="noopener noreferrer">
                                <img
                                    width="100"
                                    height="100"
                                    src="https://mbfmultiservice.it/img/favicon.png"
                                    alt="MBF Multiservice Logo"
                                />
                            </a>
                        </li>
                        <li>Professionisti nel settore delle ristrutturazioni a Alessandria e provincia</li>
                    </ul>
                </h2>
            </div>
        </div>
    );
};

export default StickyHeader;