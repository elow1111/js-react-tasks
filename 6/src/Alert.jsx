import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Alert extends React.Component
{   
    render(){
    const {text, type} = this.props;
    const alertClass = cn("alert", `alert-${type}`)
    return(
        <div className={alertClass} role='alert'>{text}</div>
    )
    }
}
// END
