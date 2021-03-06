import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
 CardSubtitle, CardBody, Col} from 'reactstrap';
import './Card.css'

const Cardcomp = (props) => {
	
	const book = props.bookdesc;

	return (
		<Col sm="3">
			<Card className="grow" style={{height:"250px"}}>
				<div className="cont">
			        <CardImg className="cardimg"src={`${book.Img_url_m}`} alt="Card image cap"/>
			        <CardBody className="takeright">
			          <CardTitle>{book.BookName}</CardTitle>
			          <CardSubtitle>Publisher: {book.Publisher}</CardSubtitle>
			          <CardSubtitle>Edition: {book.BookEdition}</CardSubtitle>
			        </CardBody>
			    </div>
			    <CardBody>
		          <CardText>{book.BookDescription}</CardText>
		        </CardBody>
		    </Card>
	    </Col>
	);
}

export default Cardcomp;


{/*<div className="br3 pa3 ma3 dib grow bw2 shadow-5" style={{width:'200px'}}>
			<img alt="robots" src={`${props.bookdesc.Img_url_m}`} />
			<div>
				<h2> {props.bookdesc.BookName} </h2>
				<p> {props.bookdesc.BookDescription} </p>
			</div>
		</div>*/}