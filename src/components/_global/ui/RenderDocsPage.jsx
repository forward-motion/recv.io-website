import React from 'react';

/* Styles for RednerDocsPage */ 
import '../../../styles/_global/ui/RenderDocsPage.scss';


const RenderDocsPage = (props) => {

    return(
        <div className="container-fluid render-docs-page" style={{backgroundColor : 'white', float : 'right', width : '80%'}}>
            
            <div style={{ width: '870px'}}>
                <h1 style={{ textTransform: 'uppercase' }}> {props.title}</h1>

                <div className="underline-accent"></div>

                <p>Lorem ipsum dolor sit amet, ad dicat utroque verterem per. Ubique graece nec ei, mea errem offendit perfecto id, duo an quem omnium intellegam. Nec dictas sadipscing in. Solet alienum nam et.</p>

                <pre>
                    <code>
                        <ol>
                            <li><p><span className="var">item</span> = [[<span className="array-var">NSMutableDictionary</span> alloc] init];</p></li>
                            <li><p><span className="var">tile</span> = [[<span className="array-var">NSMutableString</span> alloc] init];</p></li>
                            <li><p></p></li>
                            <li><p></p></li>
                            <li><p></p></li>
                            <li><p><span className="var">link</span> = [[<span className="array-var">NSMutableString</span> alloc] init];</p></li>
                            <li><p></p></li>
                            <li><p></p></li>
                            <li><p></p></li>
                            <li><p></p></li>
                            <li><p><span className="var">discrption</span> = [[<span className="array-var">NSMutableString</span> alloc] init];</p></li>
                            <li><p><span className="var">date</span> = [[<span className="array-var">NSMutableString</span> alloc] init];</p></li>
                            <li><p></p></li>
                        </ol>
                    </code>
                </pre>

                <p>avisse ut, ius ubique dolorum id, mea erat exerci definitionem an. Dolore populo per id. Detraxit disputando an pro, vero concludaturque eam at. Mei veritus maiestatis suscipiantur ad, cu quo dolor primis. Te justo omittantur ullamcorper mea.</p>

            </div>
        </div>
    );
}

export default RenderDocsPage;