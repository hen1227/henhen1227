import React from 'react';
import '../../App.css';
import './pages/Home.css'
import './Tag.css'


class Tag extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     active: props.active
        // }
        this.handleClick = this.handleClick.bind(this);
    }


    componentDidMount() {
        this.updateProperties();

        this.tagRef.current.addEventListener('mousemove', function (e){
            const { currentTarget:target } = e;

            const rect = target.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`)
            target.style.setProperty("--mouse-y", `${y}px`)
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateProperties();
    }

    handleClick(){
        if(this.props.clickable) {
            // this.setState(prevState => ({
            //     active: !prevState.active
            // }));
            this.props.parentCallback(this.props.lang);
        }
    }

    updateProperties(){
        if (this.props.active) {
            this.tagRef.current.style.setProperty("--bg-color", this.props.color)
            this.tagRef.current.style.setProperty("--hover-color", `#ffffffa0`)
        }else{
            this.tagRef.current.style.setProperty("--bg-color", `#595959`)
            this.tagRef.current.style.setProperty("--hover-color", this.props.color)
        }
    }

        render() {
            this.tagRef = React.createRef();
            return (
            <>
                <li>
                    <div ref={this.tagRef} className={"overviewTag"} onClick={this.handleClick}>
                        <p>{this.props.lang}</p>
                    </div>
                </li>
            </>
        );
    }
}

export default Tag;
