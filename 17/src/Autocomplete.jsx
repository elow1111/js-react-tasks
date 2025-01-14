import axios from 'axios';
import React from 'react';

export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            data: []
        };
    }

    handleChange = async (e) => {
        const inputText = e.target.value;
        this.setState({ inputText });

        if (inputText) {
            const res = await axios.get("/countries", { params: { term: inputText } });
            this.setState({ data: res.data });
        } else {
            this.setState({ data: [] }); 
        }
    }

    render() {
        const { inputText, data } = this.state;

        return (
            <div>
                <form>
                    <input
                        value={inputText}
                        onChange={this.handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Enter Country"
                    />
                </form>
                {inputText && data.length > 0 && (
                    <ul>
                        {data.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}
