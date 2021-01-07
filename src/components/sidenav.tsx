import React from 'react';

interface sidenavTypes {
    previousNav: string;
    currentNav: string;
    nextNav: string;
}

class Sidenav extends React.Component<sidenavTypes> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="sidenav">
                <div className="sidenav-container">
                    <div className="sidenav-prev">
                        {this.props.previousNav}
                    </div>
                    <div className="sidenav-current">
                        {this.props.currentNav}
                    </div>
                    <div className="sidenav-next">
                        {this.props.nextNav}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidenav;
