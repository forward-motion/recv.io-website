import React from 'react';
import Helmet from 'react-helmet';

import '../../styles/blog/ArticlePage.scss';

const ArticlePage = () => (
    <div className="article-page">

        <Helmet
            title="recv.io - title goes here"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        />

    </div>
);

export default ArticlePage;