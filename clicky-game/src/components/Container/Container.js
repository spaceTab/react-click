import React from "react";

const Container = ({ children }) => (
    
    <div className={`container`}>
        { children }
    </div>
);

export default Container;






    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         score: 1,
    //         cars: Cars,
    //         selected: []
    //     };
    //     console.log(this.state.selected)
    // }

    // handleClick = e => {
    //     console.log('')
    //     let id = e.target.id;
    //     let exists = false;
    //     console.log(id)
    //     this.state.selected.map(cars => {
    //         console.log(this.state.selected)
    //         if (cars.id === id) {
    //             console.log('here')
    //             exists = true;
    //             console.log('inblock', exists)
    //         }
    //         return exists
    //     });

    //     //   console.log(exists)

    //     if (exists) {
    //         this.game_over();
    //     } else {
    //         this.state.cars.forEach(elem => {

    //             if (elem.id === id) {
    //                 this.setState({
    //                     selected: [...this.state.selected, elem]
    //                 });
    //                 console.log('select', this.state.selected);
    //                 this.update_score();
    //             }
    //         })
    //     }
    //     // do da shuffling
    // }
    // update_score = () => {

    //     this.setState({
    //         score: this.state.score + 1
    //     });


    //     this.props.updateCurrScore(this.state.score);
    //     console.log("Score: " + this.state.score);

    // };

    // game_over = () => {
    //     this.props.updateTop(this.state.score)

    //     this.setState({
    //         score: 1,
    //         selected: []
    //     });
    //     this.update_score(0);


    // }
