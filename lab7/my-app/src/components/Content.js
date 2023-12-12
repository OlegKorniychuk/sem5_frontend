import React from 'react';

// Content component as a class
class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClickedElement9: false,
      isClickedElement10: false,
      hasNewImage: false,
    };
  }

  handleClickElement = (elementId) => {
    this.setState((prevState) => ({
      [elementId]: !prevState[elementId],
    }));
  };

  render() {
    const { isClickedElement9, isClickedElement10 } = this.state;

    return (
      <div>
        <p>
          Born: 31.03.2004, Kyiv
        </p>
        <p>
          Education: <br />
          Graduated from lyceum "Prestige" in 2021, <br />
          3rd year Student in KPI <br />
        </p>
        My hobbies
        <ul>
          <li>Coding</li>
          <li
            id="element9"
            className={isClickedElement9 ? 'clicked-1' : ''}
            onClick={() => this.handleClickElement('isClickedElement9')}
          >
            Eating (element9)
          </li>
          <li
            id="element10"
            className={isClickedElement10 ? 'clicked-2' : ''}
            onClick={() => this.handleClickElement('isClickedElement10')}
          >
            Sleeping (element10)
          </li>
        </ul>
        My favourite movies
        <ol>
          <li>The Departed</li>
          <li>Unbearable Weight of Massive Talant</li>
          <li>Rocky</li>
        </ol>
      </div>
    );
  }
}

export default Content;