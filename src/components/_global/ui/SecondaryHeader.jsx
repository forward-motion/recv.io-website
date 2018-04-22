import React from 'react';
import '../../../styles/_global/ui/SecondaryHeader.scss';

const SecondaryHeader = (props) => {
    return(
        <div className="col-md-12 secondary-background">
            <p className="subtitle">{ props.title }</p>
        </div>
    );
}

export default SecondaryHeader;