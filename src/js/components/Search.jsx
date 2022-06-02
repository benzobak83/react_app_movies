import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    checked: true,
    type: "all",
  };

  componentDidMount(props) {
    document.addEventListener("keydown", (e) => {
      if (
        document.querySelector("#search") == document.activeElement &&
        e.key == "Enter"
      ) {
        this.props.refresh(this.state.search, this.state.type);
      }
    });
    let labeles = document.querySelectorAll(".label__filter");
    console.log(labeles);
    labeles.forEach((label) => {
      label.addEventListener("change", (e) => {
        let type = label.querySelector("span").id;
        this.setState({ type: type }, () => {
          this.props.refresh(this.state.search, this.state.type);
        });
        //  label.querySelector('span').innerHTML
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="search"
            type="search"
            className="validate"
            placeholder="search"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
          />
          <button
            className="btn search-btn"
            onClick={(e) => {
              this.props.refresh(this.state.search);
            }}
          >
            search
          </button>

          <label className="label__filter">
            <input
              name="group1"
              type="radio"
              checked={this.state.checked}
              onChange={(e) => this.setState({ checked: true })}
            />
            <span>All</span>
          </label>

          <label className="label__filter">
            <input
              name="group1"
              type="radio"
              onChange={(e) => this.setState({ checked: false })}
            />
            <span id="movie">Movies only</span>
          </label>

          <label className="label__filter">
            <input
              name="group1"
              type="radio"
              onChange={(e) => this.setState({ checked: false })}
            />
            <span id="series">Series only</span>
          </label>

          <label className="label__filter">
            <input
              name="group1"
              type="radio"
              onChange={(e) => this.setState({ checked: false })}
            />
            <span id="episode">Episodes only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
