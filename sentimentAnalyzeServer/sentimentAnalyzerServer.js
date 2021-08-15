const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = new express();

function getNLUInstance() {
	let api_key = process.env.API_KEY;
	let api_url = process.env.API_URL;

	const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
	const { IamAuthenticator } = require('ibm-watson/auth');

	const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
		version: '2020-08-01',
		authenticator: new IamAuthenticator({
			apikey: api_key,
		}),
		serviceUrl: api_url,
	});
	return naturalLanguageUnderstanding;
}


app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {
	let nlu = getNLUInstance();
	console.log(req.query.url);
	
	const analyzeParams = {'url': req.query.url, 'features': {'keywords': {'emotion': true, 'sentiment': false, 'limit':5}}};
//     nlu.analyze(analyzeParams).then(analysisResults => {
//     	let result = JSON.stringify(analysisResults, null, 2);
//     	console.log(result);
//     	res.send(result);
//     }).catch(err => {
//     	console.log('error:', err);
//     });
	nlu.analyze(analyzeParams).then(analysisResults => {
		res.status(200);
		if analysisResults.result.keywords {
				var dataFilter = analysisResults.result.keywords.sort((a, b) => a.count < b.count ? 1 : -1)[0];
				console.log(dataFilter);
				if dataFilter.emotion {
					res.send(dataFilter.emotion);
				} else {
					res.send('Without data');
				}
		} else {
				res.send('Without data');
		}
	}).catch(err => {
			res.status(500);
			res.send(err);
	});
});

app.get("/url/sentiment", (req,res) => {
    let nlu = getNLUInstance();
	console.log(req.query.url);
	
	const analyzeParams = {'url': req.query.url, 'features': {'keywords': {'emotion': false, 'sentiment': true, 'limit':5}}};
//     nlu.analyze(analyzeParams).then(analysisResults => {
//     	let result = JSON.stringify(analysisResults, null, 2);
// 		console.log(analysisResults.result.keywords[0].sentiment.label);
// 		res.send(JSON.stringify(analysisResults.result.keywords[0].sentiment.label, null, 2));
// }).catch(err => {
// 		console.log('error:', err);
// 	});
    nlu.analyze(analyzeParams).then(analysisResults => {
		res.status(200);
		if analysisResults.result.keywords {
				var dataFilter = analysisResults.result.keywords.sort((a, b) => a.count < b.count ? 1 : -1)[0];
				console.log(dataFilter);
				if dataFilter.sentiment.label {
					res.send(dataFilter.sentiment.label);
				} else {
					res.send('Without data');
				}
		} else {
				res.send('Without data');
		}
	}).catch(err => {
			res.status(500);
			res.send(err);
	});



});

app.get("/text/emotion", (req,res) => {
	let nlu = getNLUInstance();
	console.log(req.query.text);
	
	const analyzeParams = {'text': req.query.text, 'features': {'keywords': {'emotion': true, 'sentiment': false, 'limit':5}}};
// 	nlu.analyze(analyzeParams).then(analysisResults => {
// 		let result = JSON.stringify(analysisResults, null, 2);
// 		console.log(result);
// 		res.send(result);
// 	}).catch(err => {
// 		console.log('error:', err);
// 	});
    nlu.analyze(analyzeParams).then(analysisResults => {
		res.status(200);
		if analysisResults.result.keywords {
				var dataFilter = analysisResults.result.keywords.sort((a, b) => a.count < b.count ? 1 : -1)[0];
				console.log(dataFilter);
				if dataFilter.emotion {
					res.send(dataFilter.emotion);
				} else {
					res.send('Without data');
				}
		} else {
				res.send('Without data');
		}
	}).catch(err => {
			res.status(500);
			res.send(err);
	});
});

app.get("/text/sentiment", (req,res) => {
	let nlu = getNLUInstance();
	console.log(req.query.text);
	
	const analyzeParams = {'text': req.query.text, 'features': {'keywords': {'emotion': false, 'sentiment': true, 'limit':5}}};
//     nlu.analyze(analyzeParams).then(analysisResults => {
//     	let result = JSON.stringify(analysisResults, null, 2);
// 		console.log(analysisResults.result.keywords[0].sentiment.label);
// 		res.send(JSON.stringify(analysisResults.result.keywords[0].sentiment.label, null, 2));
// }).catch(err => {
// 		console.log('error:', err);
// 	});
	nlu.analyze(analyzeParams).then(analysisResults => {
		res.status(200);
		if analysisResults.result.keywords {
				var dataFilter = analysisResults.result.keywords.sort((a, b) => a.count < b.count ? 1 : -1)[0];
				console.log(dataFilter);
				if dataFilter.sentiment.label {
					res.send(dataFilter.sentiment.label);
				} else {
					res.send('Without data');
				}
		} else {
				res.send('Without data');
		}
	}).catch(err => {
			res.status(500);
			res.send(err);
	});


});

let server = app.listen(8080, () => {
    console.log('Listening', server.address().port)
})

