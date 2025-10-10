import React, { Component} from 'react';
import './styles.css'; 

class Tooltip extends Component {

  state = { update: null }

  handleMouseEnter = (index) => {
this.setState({update:index})

  }

  handleMouseLeave = () => {
this.setState({update:null})
  }

  
  render() {
    const {update} =this.state
    const icons = [
      { emoji: '🏠', label: 'Home' },
      { emoji: '📧', label: 'Email' },
      { emoji: '⚙️', label: 'Settings' }
    ];

    return (
      <div className="tooltip-container">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="tooltip-item"
          
            onMouseEnter={() => this.handleMouseEnter(index)} onMouseLeave={this.handleMouseLeave}
          >

            {update === index && <div className="tooltip-box ">{icon.label}</div>}
           
            <span>{icon.emoji}</span>
           
          </div>
        ))}
      </div>
    );
  }
}

export default Tooltip;
