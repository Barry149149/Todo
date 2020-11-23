import React, {Component} from 'react';
import List from "./List";
import {connect} from "react-redux"
import ActionButton from "./ActionButton"

class App extends Component {
    render () {
        const {lists} = this.props;
        return (
            <div className="App">

                <div style={styles.listContainer}>

                    {/* <List title="first list"/> */}
                    {lists.map(list => (
                        <List
                            listID={list.id}
                            key={list.id} /*performance update for react by including the id when mapping*/
                            title={list.title}
                            cards={list.cards} />
                    ))}
                    <ActionButton list />
                </div>
            </div>
        );
    }
}

const styles ={
    listContainer: {
        display: "flex",
        flexDirection:"row"
    }
};

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps) (App);