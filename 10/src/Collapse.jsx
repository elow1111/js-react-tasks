import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collapseStatus: this.props.opened };
    }

    handlerClick = () => {
        this.setState({ collapseStatus: !this.state.collapseStatus });
    }

    render() {
        const { text } = this.props;
        const { collapseStatus } = this.state;

        const collapseClass = cn("collapse", { show: collapseStatus });

        return (
            <div>
                <p>
                    <a
                        className="btn btn-primary"
                        onClick={this.handlerClick}
                        data-bs-toggle="collapse"
                        href="#"
                        role="button"
                        aria-expanded={collapseStatus}
                    >
                        Link with href
                    </a>
                </p>
                <div className={collapseClass}>
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        );
    }
}

Collapse.defaultProps =
{
    opened: true
}
// END
