import React from 'react';

class Lightsabers extends React.Component {

// tbd - find a home for this one day

    render() {
        return (
            <div className="lightsabers">

                <div data-aos="fade" className="lightsabers-bars">
                    <div className="lightsabers-bars-bar lightsabers-bars-bar-one" />
                    <div className="lightsabers-bars-bar lightsabers-bars-bar-two" />
                    <div className="lightsabers-bars-bar lightsabers-bars-bar-three" />
                    <div className="lightsabers-bars-bar lightsabers-bars-bar-four" />
                </div>

            </div>
        );
    }
}

export default Lightsabers;
