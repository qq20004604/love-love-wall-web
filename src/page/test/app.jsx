import {DatePicker} from 'antd'; // 加载 JS
import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';

class Root extends React.Component {
    render () {
        return <div>
            <DatePicker/>
            <button id="abc">abcde</button>
        </div>;
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
