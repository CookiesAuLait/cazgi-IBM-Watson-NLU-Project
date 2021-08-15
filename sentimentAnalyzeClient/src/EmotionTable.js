import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
	render() {
		return (  
		  <div>
			<table className="table table-bordered">
			  <tbody>
				  {
					  Object.entries(this.props.emotions).map(function (value) {
						  return (<tr>
						  			<th scope="row">{value[0]}</th>
						  			<td>{value[1]}</td>
						  		</tr>)
					  })
				  }  
			  </tbody>
			</table>
			</div>
			// {JSON.stringify(this.props.emotions)}
			// <table className="table table-bordered">
			// <tbody>
			// {
			// 		this.props.emotions && Object.entries(this.props.emotions).map(function (element, val){
			/* 	  return (
					  <tr key={element}>
						  <td>{element[0]}</td>
						  <td>{element[1]}</td>
					  </tr>
				  ); */
			// })
			// }
			// </tbody>
			);
		  }
	// state = { emotions:[] }
	// componentDidMount() {
	
	// 	let listOfkeywords = this.props.emotions.result.keywords;
	// 	let listOfkeywordsAsArray = Object.entries(listOfkeywords);
    //     let eventDetails = listOfkeywordsAsArray.map((keywordDetail)=>{
	// 		let eventListCollection = Object.entries(keywordDetail[1])
	// 		let emotion = Object.entries(eventListCollection[2][1])
	// 		let emotionText = eventListCollection[0]
	// 		return <tr><td style={{border: "1px solid black"}}>{emotionText[1]}
	// 			<table width="100%"><tbody><tr><td>{ emotion[0][0]}</td><td>{ emotion[0][1]}</td></tr>
	// 			<tr><td>{ emotion[1][0]}</td><td>{ emotion[1][1]}</td></tr>
	// 			<tr><td>{ emotion[2][0]}</td><td>{ emotion[2][1]}</td></tr>
	// 			<tr><td>{ emotion[3][0]}</td><td>{ emotion[3][1]}</td></tr>
	// 			<tr><td>{ emotion[4][0]}</td><td>{ emotion[4][1]}</td></tr></tbody></table></td></tr>  
	// 		})
	// 	this.setState({emotions:<table className="table table-bordered"><tbody>{eventDetails}</tbody></table>})
		
	// }
    // render() {
    //   return (  
	// 		<div>
	// 			<br/>
	// 				{
	// 					this.state.emotions
	// 				}
	// 		</div>
    //       );
    // }
    
}
export default EmotionTable;
