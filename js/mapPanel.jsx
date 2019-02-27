import React from "react";
import "../css/mapPanel.css";
import BigLogo from "./bigLogo.jsx";
import PlayButton from "./playButton.jsx";
import Map from "./map.jsx";

class MapPanel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                    mapArray: [false, false, false],
                    selectedIndex: null,
            };
    }

    componentDidMount()
    {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    isNoMapSelected = () => {
        if(this.state.selectedIndex === null)
        {
            return true;
        }
    };

    setStateArrayElement = (index) => {
        let newState = Object.assign({}, this.state);
        newState.mapArray[index] = true;
        newState.mapArray[this.state.selectedIndex] = false;
        newState.selectedIndex = index;
        this.setState(newState);
    };

    handleKeyPress = (event) => {
        event.preventDefault();
        if (event.key === "ArrowLeft")
        {
            if (this.isNoMapSelected())
            {
                this.setStateArrayElement(this.state.mapArray.length - 1);
            }
            else
            {
                let index = null;
                if(this.state.selectedIndex === 0)
                    index = this.state.mapArray.length - 1;
                else
                    index = this.state.selectedIndex - 1;
                this.setStateArrayElement(index);
            }
        }
        else if (event.key === "ArrowRight")
        {
            if (this.isNoMapSelected())
            {
                this.setStateArrayElement(0);
            }
            else
            {
                let index = null;
                if(this.state.selectedIndex === this.state.mapArray.length - 1)
                    index = 0;
                else
                    index = this.state.selectedIndex + 1;
                this.setStateArrayElement(index);
            }
        }
        else if (event.key === "Enter")
        {
            if(this.state.selectedIndex !== null)
            {
                this.props.history.push('/game');
            }
        }
    };

    render() {
        return (
            <div className="mapSlider">
                <div className="mapHeader">
                    <BigLogo/>
                    <h1>Choose a map</h1>
                </div>
                <div className="mapChoice">
                    <div className="maps">
                        <Map mapName="Border" isSelected={this.state.mapArray[0]}/>
                        <Map mapName="Theme Park" isSelected={this.state.mapArray[1]}/>
                        <Map mapName="Hereford Base" isSelected={this.state.mapArray[2]}/>
                    </div>
                </div>
                <PlayButton linkUrl="/game" buttonText="Play"/>
            </div>
        );
    }
}

export default MapPanel;