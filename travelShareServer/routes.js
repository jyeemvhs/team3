var formidable = require('formidable');
var mv = require('mv');
var express = require("express");
var router = express.Router();
const path = require("path");

let savedFilename = "";

router.get("/",function(request,response){
response.sendFile(__dirname + "/public/views/index.html");
});
router.get("/Africa",function(request,response){
response.sendFile(__dirname + "/public/views/africa.html");
});

router.get("/Antarctica",function(request,response){
response.sendFile(__dirname + "/public/views/antarctica.html");
});
router.get("/Asia",function(request,response){
response.sendFile(__dirname + "/public/views/asia.html");
});
router.get("/Australia",function(request,response){
response.sendFile(__dirname + "/public/views/australia.html");
});
router.get("/Europe",function(request,response){
response.sendFile(__dirname + "/public/views/europe.html");
});
router.get("/North_America",function(request,response){
response.sendFile(__dirname + "/public/views/nAmerica.html");
});
router.get("/South_America",function(request,response){
response.sendFile(__dirname + "/public/views/sAmerica.html");
});

var infoList = [];
var listNum = 0;
var index =0;
router.get('/read', function(req, res){
//var tempList = [];
console.log(infoList.length)
for (let i = 0; i < infoList.length; i++) {
console.log(i)
console.log("comparing: " + i + " and " + listNum);
while (i != listNum && listNum != 0){
i++;
console.log(i);
}
if (infoList[i].continent==req.query.continent)
res.json(infoList[i]);
    console.log("reading: ");
console.log(infoList[i]);
console.log("index: ");
console.log(i);
listNum++;


}
//if (req.query.continent == "") {
// res.json(null);
//} else {
//console.log(infoList[listNum]);
// res.json(infoList[listNum]);
//}
listNum = 0;


});

router.post('/create', function(req, res){
if (req.body.continent == "" || req.body.name == "") {
res.json(null);
} else {

//if(listNum == listNum && listNum != 0)
//listNum++;
console.log ("length:"+infoList.length)
if (req.body.name != null)
{
infoList[index] = {continent:req.body.continent, name:req.body.name, country:req.body.country,  image:savedFilename, description: req.body.description};
console.log("created: ");
console.log(infoList[index]);
console.log("index: " + listNum);
index++;
res.json(infoList[infoList.length]);
}
//listNum++;
//console.log("new index: " + listNum);

}
});

router.post('/uploadSuccessPath', function(req, res){

 	var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.image.path;
        var newpath = __dirname + '/public/images/' + files.image.name;

        console.log('Received image: ' + files.image.name);

        mv(oldpath, newpath, function (err) {
            if (err) throw err;
            savedFilename = files.image.name;
            res.json({ name: files.image.name });
        });
    });

	//res.json(null); //get image file and put it into the public images folder in server
})

module.exports = router;