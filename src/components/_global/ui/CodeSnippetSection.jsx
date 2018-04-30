import React from 'react';
import ReactDOM from 'react-dom';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css'

import '../../../styles/_global/ui/CodeSnippetSection.scss';
import BackgroundImage from '../../../assets/img/home/pub-sub-bg.png';


class CodeSnippetSection extends React.Component {

    componentDidMount() {

        Prism.highlightAllUnder(ReactDOM.findDOMNode(this));
    }

    get codeSnippets() {

        const { codeSnippets } = this.props;
        const columnClass = Math.floor(12 / codeSnippets.length);

        return codeSnippets.map(({ title, code }) => {

            return (
                <div className={`col-md-${columnClass}`}>
                    <div className="code-snip" key={title}>
                        <div className="title-wrapper">
                            <div className="title">{title}</div>
                            <span className="title-underline" />
                        </div>
                        <div className="code">
                <pre>
                    <code className="language-js">
                        {code}
                    </code>
                </pre>
                        </div>
                    </div>
                </div>
            );
        });

    }

    render() {

        return (
            <div className="component-code-snippet-section"
                 style={{
                     backgroundImage:`url(${BackgroundImage})`,
                     backgroundRepeat:"no-repeat",
                     backgroundPosition:"center"
                 }}>
                <div className="codesnip-wrapper">
                    <div className="row">
                        {this.codeSnippets}
                    </div>
                </div>

            </div>
        );
    }
}


export default CodeSnippetSection;