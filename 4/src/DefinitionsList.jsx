import React from 'react';

// BEGIN (write your solution here)
export default class DefinitionsList extends React.Component {
    render()
    {
        const data = this.props.data;
        if (data.length === 0)
        {
            return null;
        }
        return (
            <dl>
            {data.map((definitions) => (
            <React.Fragment key={definitions.id}>
            <dt>{definitions.dt}</dt>
            <dd>{definitions.dd}</dd>
            </React.Fragment>
            ))}
            </dl>
            );
    }
}
// END
