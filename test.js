
var Clarifai = require('clarifai');
var ffmpeg = require('fluent-ffmpeg');
var fs = require('fs');
var http = require('http');

const app = new Clarifai.App({
 apiKey: 'f7cfa78227654e299078ad48ef5d2c23'
});

const testFolder = '/Users/Yidong/Documents/hackathon/imagesFromVideo';

var imageDetails = {
  clarifaiFaces: [],
  realFaces: []
};

var overlay = "*";

http.createServer(function (req, res) {
	// ffmpeg('/Users/Yidong/Downloads/logo.mp4').on('filenames', function(filenames) {
	// 	console.log('Will generate ' + filenames.join(', '))
	// }).on('end', function() {
	// 	console.log('Screenshots taken');
	 	//Open a file on the server and return it's content:

	  	fs.readFile('test.html', function(err, data) {
	  		res.writeHead(200, {'Content-Type': 'text/html'});
	  		res.write('<video controls><source src="http://html5doctor.com/demos/video-canvas-magic/video.webm" type="video/ogg"></source></video><canvas id="canvas" width="640" height="480"></canvas><button id="snap" onclick="snap()">Snap Photo</button><input type="button" onclick="uploadEx()" value="Upload"/><script>var video=document.querySelector("video");var canvas=document.querySelector("canvas");var context=canvas.getContext("2d");var w,h,ratio;video.addEventListener("loadedmetadata",function(){ratio=video.videoWidth/video.videoHeight;w=video.videoWidth-100;h=parseInt(w/ratio,10);canvas.width=w;canvas.height=h;},false);function snap(){context.fillRect(0,0,w,h);context.drawImage(video,0,0,w,h);}</script>');
	  		res.write('<script>function uploadEx() {var canvas = document.getElementById("canvas");var dataURL = canvas.toDataURL("image/png");var xhr = new XMLHttpRequest();xhr.open("POST", "upload_data.php", true);xhr.upload.onprogress = function(e) {if (e.lengthComputable) {var percentComplete = (e.loaded / e.total) * 100;console.log(percentComplete + "% uploaded");alert("Succesfully uploaded");}};xhr.send(dataURL);};</script>');
	  		fs.readdirSync(testFolder).forEach(file => {
			  	// console.log(file);
			  	var base64str = base64_encode('/Users/Yidong/Documents/hackathon/imagesFromVideo/' + file);

					app.models.predict("c443119bf2ed4da98487520d01a0b1e3", {base64: base64str}).then(
					    function(response) {

					      // do something with response
					      // console.log(base64str);
					      // var img = document.createElement('img');
					      
					      if(!isEmptyObject(response.outputs[0].data)){
					      	// console.log(response.outputs[0].data.regions[0].data.concepts[0].value);
					      	// console.log(response.outputs[0].input.data.image.url);
					      	// console.log(response.outputs[0].data.regions[0].region_info);
					      	if(response.outputs[0].data.regions[0].data.concepts[0].value >= 0.9){
					      		res.write('<h1>' + response.outputs[0].data.regions[0].data.concepts[0].name +'</h1>');
						    	// res.write('<img src="' + response.outputs[0].input.data.image.url + '">');
						    	// // res.write('<canvas id="canvas"></canvas>');
						    	// var data = response.outputs[0].data.regions[0];
						    	// console.log(data.region_info.bounding_box);

						    	res.write('<div class="media-explorer">');
						    	res.write('<div class="demo-explorer-media-view">');
						    	res.write('<div class="image-view no-title" style="transform: translateY(0vh) translateZ(0px);"><img draggable="false" id="image-view-content" src="' + response.outputs[0].input.data.image.url + '"></div>'); 
						    	res.write('</div>');
						    	res.write('</div>');
						    	
						  //   	var img1 = PImage.make(100,50);
						  //   	var ctx = img1.getContext('2d');
								// ctx.fillStyle = 'rgba(255,0,0, 0.5)';
								// ctx.fillRect(0,0,100,100);
						   //    	if (data !== null) {
						   //      	imageDetails.clarifaiFaces = data.region_info.bounding_box;
						   //      	canvas = document.getElementById("canvas");
									// $(canvas).attr("width", imageDetails.width).attr("height", imageDetails.height);
									// ctx = canvas.getContext("2d");
									// ctx.textBaseline = "top";

								 //    box = {
								 //      x: imageDetails.clarifaiFaces.left_col * imageDetails.width,
								 //      y: imageDetails.clarifaiFaces.top_row * imageDetails.height,
								 //      w: (imageDetails.clarifaiFaces.right_col * imageDetails.width) - (imageDetails.clarifaiFaces.left_col * imageDetails.width),
								 //      h: (imageDetails.clarifaiFaces.bottom_row * imageDetails.height) - (imageDetails.clarifaiFaces.top_row * imageDetails.height)
								 //    }
								 //    console.log(box);
								 //    imageDetails.realFaces = box;
								 //    ctx.font = (box.w * 1.4) + "px monospace";
								 //    ctx.fillText(overlay, box.x - (box.w / 5), box.y - (box.h/4));
									
						   //    	}
					      	}
							
							// capture();
					  		// var image = document.createElement("img");
							// var imageParent = document.getElementById("body");
							// image.id = "id";
							// image.className = "class";
							// image.src = response.outputs[0].input.data.image.url;         // image.src = "IMAGE URL/PATH"
							// imageParent.appendChild(image);
					      }
					    },
					    function(err) {
					      // there was an error
					      console.log('error');
					    }
					  );



			})
			// res.end();
		});

		// fs.readFile(__dirname + '/public/css/styles.css', function (err, data) {
	 //        if (err) console.log(err);
	 //        res.writeHead(200, {'Content-Type': 'text/css'});
	 //        res.write(data);
	 //        // res.end();
  //     	});

	// })
	// .screenshots({
	// 	// Will take count screenshots
	// 	count: 10,
	// 	folder: testFolder
	// });



}).listen(8080);

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

function faceDetection(b64Img) {
  app.models.predict("a403429f2ddf4b49b307e318f00e528b", {
    base64: b64Img
  }).then(
    function(res) {
      var data = res.outputs[0].data.regions;
      console.log(data);
      if (data !== null) {
        for (var i = 0; i < data.length; i++) {
          imageDetails.clarifaiFaces.push(data[i].region_info.bounding_box);
        }
      }
      drawBoxes();
    },
    function(err) {
      console.log(err);
    }
  )
}




// function drawBoxes() {
//   canvas = document.getElementById("canvas");
//   $(canvas).attr("width", imageDetails.width).attr("height", imageDetails.height);
//   ctx = canvas.getContext("2d");
//   ctx.textBaseline = "top";

//   for(var i=0; i<imageDetails.clarifaiFaces.length; i++) {
//     box = {
//       x: imageDetails.clarifaiFaces[i].left_col * imageDetails.width,
//       y: imageDetails.clarifaiFaces[i].top_row * imageDetails.height,
//       w: (imageDetails.clarifaiFaces[i].right_col * imageDetails.width) - (imageDetails.clarifaiFaces[i].left_col * imageDetails.width),
//       h: (imageDetails.clarifaiFaces[i].bottom_row * imageDetails.height) - (imageDetails.clarifaiFaces[i].top_row * imageDetails.height)
//     }
//     imageDetails.realFaces.push(box);
//     ctx.font = (box.w * 1.4) + "px monospace";
//     ctx.fillText(overlay, box.x - (box.w / 5), box.y - (box.h/4));
//   }
// }





