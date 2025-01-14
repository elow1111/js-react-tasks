import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {btnOneIsPressd: false, btnTwoIsPressd: false}
    }
    handleOneClick = () =>
    {
        this.setState({btnOneIsPressd: true, btnTwoIsPressd: false})
    }
    handleTwoClick = () =>
        {
            this.setState({btnOneIsPressd: false, btnTwoIsPressd: true})
        }
    render()
    {
        const btnClassOne = cn("btn", "btn-secondary", "left",{
            'active': this.state.btnOneIsPressd,
        })
        const btnClassTwo = cn("btn", "btn-secondary", "right",{
            'active': this.state.btnTwoIsPressd,
        })
        return(
            <div className="btn-group" role="group">
            <button type="button" className={btnClassOne} onClick={this.handleOneClick}>Left</button>
            <button type="button" className={btnClassTwo} onClick={this.handleTwoClick}>Right</button>
          </div>
        )
    }
}
// END
