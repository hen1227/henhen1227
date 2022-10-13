import React from "react";
import p5 from 'p5'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {

        p.setup = () => {
            this.myP5.createCanvas(400,200);
        }

        p.draw = () => {
            this.myP5.background(0);
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div className="MorseTranslator">
                <div className="Canvas" ref={this.myRef}>

                </div>
            </div>
        )
    }
}

export default App;
