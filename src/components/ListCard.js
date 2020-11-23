
import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent'
import {toggleCard} from "../actions/action";
import {connect} from "react-redux"

class ListCard extends React.Component{

    handleClickForComplete = () => {
        const {dispatch,listID,cardID,} = this.props;

        dispatch(toggleCard(listID,cardID));
    }
    render () {
        const {text,finished} = this.props;
        const lineThrough = finished? "line-through": "none";

        return (
            <Card onClick={this.handleClickForComplete}  style={styles.cardContainer}>
                <CardContent>
                    <Typography gutterBottom>
                        <span style={{textDecoration:lineThrough}}>{text}</span>
                    </Typography>
                </CardContent>
            </Card>
        );


    }
}

const styles = {
    cardContainer: {
        marginTop: 8
    }
}

export default connect()(ListCard);