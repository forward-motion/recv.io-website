import React from 'react';

import '../../../styles/home/sections/Animation.scss';

import recvLogo from '../../../assets/img/home/recv-icon.png';


class Animation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stage: 0
        };
    }

    componentDidMount() {

        setInterval(() => {

            let stage = this.state.stage + 1;
            if (stage > this.props.numStages) {
                stage = 1;
            }
            this.setState({ stage });
        }, 1000);
    }

    render() {

        return (
            <div className={`component-animation stage-${this.state.stage}`}>

                <div className="back-end server-one">
                    <div className="data" />
                    <span className="icon-drive" title="your back-end" />
                </div>
                <div className="back-end server-two">
                    <div className="data" />
                    <span className="icon-drive" title="your back-end" />
                </div>
                <div className="back-end server-three">
                    <div className="data" />
                    <span className="icon-drive" title="your back-end" />
                </div>
                <div className="recv">
                    <img src={recvLogo} title="recv.io"/>
                </div>
                <div className="device laptop">
                    <div className="data" />
                    <span className="icon-laptop" title="laptop" />
                </div>
                <div className="device mobile">
                    <div className="data" />
                    <span className="icon-mobile" title="mobile" />
                </div>
                <div className="device tablet">
                    <div className="data" />
                    <span className="icon-tablet" title="tablet" />
                </div>
                <div className="device gamepad">
                    <div className="data" />
                    <span className="icon-gamepad2" title="gamepad" />
                </div>

            </div>
        );
    }

    static get defaultProps() {
        return {
            numStages: 12
        };
    }
}

export default Animation;