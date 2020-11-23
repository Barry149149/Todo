import React from "react";
import Card from "./ListCard"
import ActionButton from "./ActionButton";

const List = ({title,cards,listID}) => {
    return(
        <div style={styles.container}>
            <h4>{title}</h4>
            <ActionButton listID={listID}/>
            {cards.slice(0).reverse().map(cards =>(
                <Card key={cards.id} finished={cards.finished} text={cards.text} listID={listID} cardID={cards.id}/> //performance update for react by including the id when mapping
            ))}


        </div>
    )
};

const styles={
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius: 3,
        width: 300,
        padding:8,
        height: "100%",
        marginRight: 8
    }
}

export default List;