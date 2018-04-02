import React from 'react';
import Helmet from 'react-helmet';
import Header from '../ui/Header';

import '../../../styles/_global/templates/DefaultTemplate.scss';

const DefaultTemplate = ({ children }) => (
    <div className="default-template">
        <Helmet
            title="recv.io"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />
        <Header />
        <div className="container-fluid">
            {children()}
        </div>
    </div>
);

export default DefaultTemplate;