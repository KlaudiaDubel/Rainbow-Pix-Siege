import React from 'react';
import BigLogo from './bigLogo.jsx';
import PlayButton from './playButton.jsx';
import '../css/mainPanel.css';



class MainPanel extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        event.preventDefault();
        if (event.key === "Enter")
        {
            this.props.history.push('/characterPanel');
        }
    };

    render()
    {
        return <div className="mainPanel">
            <BigLogo />
            <PlayButton linkUrl="/characterPanel" buttonText=">"/>
        </div>;
    }

}

export default MainPanel;