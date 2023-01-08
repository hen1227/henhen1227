import React from 'react';
import '../../App.css';
import './pages/Home.css'
import './Tag.css'
import './SearchBar.css'
import Tag from "./Tag";
import TagsList from "./TagsList";
// import Project from "./Project";

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.key = 0;
        this.searchBarRef = React.createRef();
        this.state = {
            needsScroll: false,
            selectedTags: {},
        }
    }


    handleScroll = () => {
        if(this.state.needsScroll) {
            const currentScroll = this.searchBarRef.current.scrollLeft;
            const maxScroll = this.searchBarRef.current.scrollWidth;

            if(currentScroll > maxScroll*2/3){
                this.searchBarRef.current.scrollLeft = currentScroll-maxScroll/3;

            }else if(currentScroll < maxScroll/3){
                this.searchBarRef.current.scrollLeft = currentScroll+maxScroll/3;
            }
        }
    };

    calculateResize = () => {
        if(this.state.needsScroll){
            if(this.searchBarRef.current == null || this.searchBarRef.current.scrollWidth/3 < this.searchBarRef.current.offsetWidth){
                this.setState(prevState => ({
                    needsScroll: false,
                    selectedTags: prevState.selectedTags,
                }));
            }
        }else {
            if(this.searchBarRef.current.scrollWidth > this.searchBarRef.current.offsetWidth){
                this.setState(prevState => ({
                    needsScroll: true,
                    selectedTags: prevState.selectedTags,
                }));
            }
        }
    }



    componentDidMount() {
        window.addEventListener("resize", this.calculateResize);
        this.calculateResize();
        this.scroller = setInterval(() => {
            if(this.searchBarRef.current.offsetWidth > 800){
                this.searchBarRef.current.scrollLeft += 1;
            }
        }, 50);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.calculateResize);
        clearInterval(this.scroller);
    }

    checkScroll(){
        if(this.state.needsScroll) {
            return [
                Object.entries(TagsList).map(([key, value]) => {
                    return (<Tag key={this.key++} parentCallback={this.handleCallback} clickable={true} active={this.state.selectedTags[`${key}`] == null ? false : this.state.selectedTags[`${key}`]} lang={`${key}`} color={`${value}`}/>)
                }),
                Object.entries(TagsList).map(([key, value]) => {
                    return (<Tag key={this.key++} parentCallback={this.handleCallback} clickable={true} active={this.state.selectedTags[`${key}`] == null ? false : this.state.selectedTags[`${key}`]} lang={`${key}`} color={`${value}`}/>)
                })
            ];
        }else{
            return [];
        }
    }

    handleCallback = (lang) => {
        // const temp = this.state.selectedTags;
        // temp[lang] = temp[lang] == null ? true : !temp[lang];
        const temp = []
        temp[lang] = this.state.selectedTags[lang] == null ? true : !this.state.selectedTags[lang];

        this.props.updatedSelection(temp);

        this.setState(prevState => ({
            needsScroll: prevState.needsScroll,
            selectedTags: temp,
        }));
    }

    render() {
        return (
            <>
                <div className="overviewSearch">
                    <ul ref={this.searchBarRef} onScroll={this.handleScroll}>
                    {
                        Object.entries(TagsList).map(([key, value]) => {
                            return (<Tag key={this.key++} parentCallback={this.handleCallback} clickable={true}
                                         active={this.state.selectedTags[`${key}`] == null ? false : this.state.selectedTags[`${key}`]}
                                         lang={`${key}`} color={`${value}`}/>)
                        })
                    }
                    {(this.checkScroll())}
                    </ul>
                </div>
            </>
        );
    }
}

export default SearchBar;
