var express = require('express');
var router = express.Router();

var lists=[
{
	id:1,
	title:'wine1',
	description:'good wine1'
},
{
	id:1,
	title:'wine1',
	description:'good wine1'
},
{
	id:1,
	title:'wine1',
	description:'good wine1'
},
{
	id:1,
	title:'wine1',
	description:'good wine1'
},
{
	id:1,
	title:'wine1',
	description:'good wine1'
},
{
	id:1,
	title:'wine1',
	description:'good wine1'
}
];

var pageable=function(req,res,next){
	var page=req.params.page||1;
	var size=req.params.size||10;
	req.pageable=new Page(page,size);
	next();
}

router.use('/',pageable);

router.get('/',function(req,res){
	console.log(req.pageable);
	res.json({
		id:1,
		title:'wine1'
	});
});

router.get('/:id',function(req,res){
	console.log(req.params.id);
});

router.get('/category/:id',function(req,res){
	res.json({
		id:2,
		title:'wine2',
		category:'category1'
	});
});


function Page(page,size){
	this.page=page;
	this.size=size;
}


module.exports = router;