(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"keyboard_atlas_1", frames: [[1499,90,208,92],[1709,120,208,92],[1499,0,316,88],[0,0,1497,118],[1817,0,218,118]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["keyboard_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["keyboard_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["keyboard_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["keyboard_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["keyboard_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_teacherSelectBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj5hjIHzAAIjrDHg");
	this.shape.setTransform(25,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_teacherSelectBtn, new cjs.Rectangle(0,0,50,20), null);


(lib.Pawprint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsVSEQgjgXgdgfIgIgVQiDmiMGoxQHwjmFwLaQDvE9h9CiQgiArg9AgQgyAbhFATQhmAvjxhdQg7gXhDgfImuBkQhkAVhUAAQiXAAhlhDgALqHOQjuiQDCmfQDWlVELCNQDyC4jVGfQiwDJibAAQhGAAhBgpgAyvCOIgdgoQizmODQiaIAKgHQD5iVDgE1QDIEii3ETQhiA8hdAAQijAAiSi6gAEVj/Qiqh8AIjbQAFiEBGinQDal9DuB3QD2CNiHGkIgLAhQiRFCjpAAQgsAAgvgMgAqNpVIgBgBQhgnVDwiCQCihBCCBnQCCBmAjCgQAZCsgNB/QgaEFi6BKIgaAAQkhAAhVlOg");
	this.shape.setTransform(-0.0135,-0.0093);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pawprint, new cjs.Rectangle(-131.2,-122.3,262.4,244.6), null);


(lib.mc_slider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("EgiCgCAMBEFAAAQAmAAAbAaQAbAbAAAmIAABLQAAAlgbAbQgbAbgmAAMhEFAAAQgmAAgbgbQgbgbAAglIAAhLQAAgmAbgbQAbgaAmAAg");
	this.shape.setTransform(300.0128,8.9168,1.3211,0.6927);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#520404","#EA6A60","#81EE71","#146A07"],[0,0.318,0.737,1],-257.3,0.2,215.1,0.2).s().p("EgiCACBQgmAAgbgbQgbgaAAgnIAAhJQAAgmAbgbQAbgbAmAAMBEFAAAQAmAAAbAbQAbAbAAAmIAABJQAAAngbAaQgbAbgmAAg");
	this.shape_1.setTransform(300.0128,8.9168,1.3211,0.6927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_slider, new cjs.Rectangle(-1.5,-1.5,603,20.9), null);


(lib.mc_keyboardBkg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.988)").s().p("Eg2UAUEQinAAAAioMAAAgi3QAAioCnAAMBspAAAQCnAAAACoMAAAAi3QAACoinAAg");
	this.shape.setTransform(364.425,130.7685,1,1.0187);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_keyboardBkg, new cjs.Rectangle(0,0,728.9,261.6), null);


(lib.keyboardBtn_XL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {up:0,down:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		let isPressed = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// txt
	this.keyLabel = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.keyLabel.name = "keyLabel";
	this.keyLabel.textAlign = "center";
	this.keyLabel.lineHeight = 16;
	this.keyLabel.lineWidth = 91;
	this.keyLabel.parent = this;
	this.keyLabel.setTransform(51.9,12.35);

	this.timeline.addTween(cjs.Tween.get(this.keyLabel).wait(2));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(129,154,230,0.988)").s().p("An1DUQgVAAABgUIAAl/QgBgUAVAAIPrAAQAVAAAAAUIAAF/QAAAUgVAAg");
	this.shape.setTransform(52.25,20.0123,1,0.9443);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,0,0.988)").s().p("An1DUQgVAAABgUIAAl/QgBgUAVAAIPrAAQAVAAAAAUIAAF/QAAAUgVAAg");
	this.shape_1.setTransform(52.25,20.0123,1,0.9443);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.5,40);


(lib.keyboardBtn_space = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"up":0,"down":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		let isPressed = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// txt
	this.keyLabel = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.keyLabel.name = "keyLabel";
	this.keyLabel.textAlign = "center";
	this.keyLabel.lineHeight = 16;
	this.keyLabel.lineWidth = 100;
	this.keyLabel.parent = this;
	this.keyLabel.setTransform(175.9,13.55);

	this.timeline.addTween(cjs.Tween.get(this.keyLabel).wait(2));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,102,204,0.988)").s().p("A64DIQgUAAAAgUIAAlnQAAgUAUAAMA1xAAAQAUAAAAAUIAAFnQAAAUgUAAg");
	this.shape.setTransform(173.4796,20,0.9962,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,0,0.988)").s().p("A64DIQgUAAAAgUIAAlnQAAgUAUAAMA1xAAAQAUAAAAAUIAAFnQAAAUgUAAg");
	this.shape_1.setTransform(173.4796,20,0.9962,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,347,40);


(lib.keyboardBtn_small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"up":0,"down":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		let isPressed = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// txt
	this.keyLabel = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.keyLabel.name = "keyLabel";
	this.keyLabel.textAlign = "center";
	this.keyLabel.lineHeight = 18;
	this.keyLabel.lineWidth = 24;
	this.keyLabel.parent = this;
	this.keyLabel.setTransform(20,13.6);

	this.timeline.addTween(cjs.Tween.get(this.keyLabel).wait(2));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.988)").s().p("AitDIQgaAAAAgaIAAlbQAAgaAaAAIFbAAQAaAAAAAaIAAFbQAAAagaAAg");
	this.shape.setTransform(20,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.988)").s().p("AitDIQgaAAAAgaIAAlbQAAgaAaAAIFbAAQAaAAAAAaIAAFbQAAAagaAAg");
	this.shape_1.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,40);


(lib.keyboardBtn_medium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"up":0,"down":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		let isPressed = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// txt
	this.keyLabel = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.keyLabel.name = "keyLabel";
	this.keyLabel.textAlign = "center";
	this.keyLabel.lineHeight = 16;
	this.keyLabel.lineWidth = 58;
	this.keyLabel.parent = this;
	this.keyLabel.setTransform(34.35,13.2);

	this.timeline.addTween(cjs.Tween.get(this.keyLabel).wait(2));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(129,154,230,0.988)").s().p("Ai2DIQgRAAAAgRIAAltQAAgRARAAIFtAAQARAAAAARIAAFtQAAARgRAAg");
	this.shape.setTransform(34.7995,20,1.7395,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,204,0,0.988)").s().p("Ai2DIQgRAAAAgRIAAltQAAgRARAAIFtAAQARAAAAARIAAFtQAAARgRAAg");
	this.shape_1.setTransform(34.7995,20,1.7395,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.6,40);


(lib.keyboardBtn_large = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"up":0,"down":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		let isPressed = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// txt
	this.keyLabel = new cjs.Text("", "14px 'Arial'", "#FFFFFF");
	this.keyLabel.name = "keyLabel";
	this.keyLabel.textAlign = "center";
	this.keyLabel.lineHeight = 16;
	this.keyLabel.lineWidth = 78;
	this.keyLabel.parent = this;
	this.keyLabel.setTransform(44.75,12.4);

	this.timeline.addTween(cjs.Tween.get(this.keyLabel).wait(2));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(129,154,230,0.988)").s().p("Ai1DIQgSAAAAgSIAAlrQAAgSASAAIFrAAQASAAAAASIAAFrQAAASgSAAg");
	this.shape.setTransform(44.4547,20,2.2229,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,0,0.988)").s().p("Ai1DIQgSAAAAgSIAAlrQAAgSASAAIFrAAQASAAAAASIAAFrQAAASgSAAg");
	this.shape_1.setTransform(44.4547,20,2.2229,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.9,40);


(lib.mc_importBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(6.95,2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("AnuD1QhkAAAAhkIAAkhQAAhkBkAAIPdAAQBkAAAABkIAAEhQAABkhkAAg");
	this.shape.setTransform(59.525,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_importBtn, new cjs.Rectangle(0,0,119.1,49), null);


(lib.mc_genBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(6.95,2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnuD1QhkAAAAhkIAAkhQAAhkBkAAIPdAAQBkAAAABkIAAEhQAABkhkAAg");
	this.shape.setTransform(59.525,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_genBtn, new cjs.Rectangle(0,0,119.1,49), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.mc_scrubber = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paw
	this.instance = new lib.Pawprint();
	this.instance.setTransform(25.2,24.5,0.1372,0.1472,0,0,0,0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AD6AAQAABohJBJQhJBJhoAAQhnAAhJhJQhJhJAAhoQAAhnBJhJQBJhJBnAAQBoAABJBJQBJBJAABng");
	this.shape.setTransform(25,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,102,204,0.988)").s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBoAABJBJQBJBKAABmQAABohJBJQhJBJhoAAQhmAAhKhJg");
	this.shape_1.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_scrubber, new cjs.Rectangle(-1.5,-1.5,53,53), null);


// stage content:
(lib.keyboard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		
		const teacherArray = ["Mr. Bombard's", "Mr. Herold's", "Mrs. Bulkley's", "Ms. Grib's", "Ms. Marek's", "Ms. Buyer's", "Mrs. Nicholas'", "Mrs. Jaeger's", "Mrs. Scrima's", "Mrs. Devine's"];
		
		const keyboardTxtArray = ["esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "+", "Delete",
		"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|",
		"CapsLk", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",
		"Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "Shift",
		"Ctrl", "Cmd", "Opt", "Alt", "SpaceBar", "Ctrl", "Fn"];
		
		const NUM_KEYS = 60;
		let pressedKeys = 0;
		let percentCompleted = 0;
		
		const mainStage = this.stage;
		const teacherTxt = this.teacherTxt;
		const percentTxt = this.percentage;
		const scrubber = this.scrubber;
		const xPos_MIN = this.scrubber.x;
		const xPos_MAX = this.scrubber.x + 600; 
		
		const generateBtn = this.genBtn;
		const importBtn = this.importBtn;
		const alertTxt = this.alertTxt;
		let codeText = this.codeTxt;
		
		let xPos = this.scrubber.x;
		let teacherIndex = 0;
		teacherTxt.text = teacherArray[teacherIndex];
		
		this.teacherSelectBtn.addEventListener("click", function(){
			teacherIndex = (teacherIndex + 1) % teacherArray.length;
			teacherTxt.text = teacherArray[teacherIndex];
		});
		
		generateBtn.addEventListener("click", generateCode);
		
		for (let i = 0; i < NUM_KEYS; i++) { 
		    const targetKey = this.getChildByName('key' + i);
		    if (targetKey) {
				targetKey.gotoAndStop("up");
		        targetKey.keyLabel.text = keyboardTxtArray[i];
				targetKey.addEventListener("click", function(){
					if (targetKey.isPressed){
						targetKey.gotoAndStop("up")
						targetKey.isPressed = !targetKey.isPressed;
						pressedKeys --;
						if(scrubber.x > xPos_MIN){
							xPos = xPos - 10;
							scrubber.x = xPos;
						}
					}else if(!targetKey.isPressed){
						targetKey.gotoAndStop("down")
						targetKey.isPressed = !targetKey.isPressed;
						pressedKeys ++;
						if(scrubber.x < xPos_MAX){
							xPos = xPos + 10;
							scrubber.x = xPos;
							console.log(xPos);
						}
					}
				calculatePressedPercentage(pressedKeys, NUM_KEYS);
				});
			}
		}
		
		
		this.percentage.text = "0%";
		function calculatePressedPercentage(pressedKeys, totalKeys) {
		    // Ensure pressedKeys is within valid bounds
		    pressedKeys = Math.max(0, Math.min(pressedKeys, totalKeys));
		    
		    // Calculate the percentage
		    const percentage = Math.floor((pressedKeys / totalKeys) * 100);
		    percentTxt.text = percentage + "%";
		}
		
		function generateCode(){
			let code = "";
		
			for(let i = 0; i < NUM_KEYS; i++){
				let keyState = this.root.stage.getChildByName('key' + i);
				if (keyState){
					if (keyState.isPressed){
						code = code + "1";
					}else if(!keyState.isPressed){
						code = code + "0";
					}
				}
			}
		
			codeText.text = "test";
			console.log(code);
			console.log(code.length);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btns
	this.teacherSelectBtn = new lib.mc_teacherSelectBtn();
	this.teacherSelectBtn.name = "teacherSelectBtn";
	this.teacherSelectBtn.setTransform(600,327.05,1,1,0,0,0,25,10);

	this.timeline.addTween(cjs.Tween.get(this.teacherSelectBtn).wait(1));

	// txt
	this.codeTxt = new lib.an_TextInput({'id': 'codeTxt', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.codeTxt.name = "codeTxt";
	this.codeTxt.setTransform(596.25,1064.3,6.749,1.4545,0,0,0,50.1,11);

	this.myCss = new lib.an_CSS({'id': 'myCss', 'href':'assets/style.css'});

	this.myCss.name = "myCss";
	this.myCss.setTransform(1135.95,-41.95,1,1.0365,0,-15.2539,0,50,11);

	this.importBtn = new lib.mc_importBtn();
	this.importBtn.name = "importBtn";
	this.importBtn.setTransform(680,999.7,1,1,0,0,0,59.5,24.5);

	this.genBtn = new lib.mc_genBtn();
	this.genBtn.name = "genBtn";
	this.genBtn.setTransform(530,999.7,1,1,0,0,0,59.5,24.5);

	this.alertTxt = new cjs.Text("", "bold 28px 'Burbank Big Cd Bk'", "#CC0000");
	this.alertTxt.name = "alertTxt";
	this.alertTxt.textAlign = "center";
	this.alertTxt.lineHeight = 30;
	this.alertTxt.lineWidth = 666;
	this.alertTxt.parent = this;
	this.alertTxt.setTransform(600,1097);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(223.45,77.9,0.5,0.5);

	this.teacherTxt = new cjs.Text("Mr. Bombard's", "bold 60px 'Burbank Big Cd Bk'", "#FFFFFF");
	this.teacherTxt.name = "teacherTxt";
	this.teacherTxt.textAlign = "center";
	this.teacherTxt.lineHeight = 62;
	this.teacherTxt.lineWidth = 812;
	this.teacherTxt.parent = this;
	this.teacherTxt.setTransform(600,174);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(545.6,243.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.teacherTxt},{t:this.instance},{t:this.alertTxt},{t:this.genBtn},{t:this.importBtn},{t:this.myCss},{t:this.codeTxt}]}).wait(1));

	// meter
	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(586,814.9,0.5,0.5);

	this.percentage = new cjs.Text("0%", "20px 'Arial'");
	this.percentage.name = "percentage";
	this.percentage.textAlign = "right";
	this.percentage.lineHeight = 24;
	this.percentage.lineWidth = 68;
	this.percentage.alpha = 0.98823529;
	this.percentage.parent = this;
	this.percentage.setTransform(578.1018,820.25,1.568,1.662);

	this.scrubber = new lib.mc_scrubber();
	this.scrubber.name = "scrubber";
	this.scrubber.setTransform(305.95,767.95,1.1997,1.2002,0,0,0,25.2,25);

	this.slider = new lib.mc_slider();
	this.slider.name = "slider";
	this.slider.setTransform(600.1,768.1,1,1.662,0,0,0,300.1,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slider},{t:this.scrubber},{t:this.percentage},{t:this.instance_2}]}).wait(1));

	// keyboard
	this.key57 = new lib.keyboardBtn_space();
	this.key57.name = "key57";
	this.key57.setTransform(611.75,654.2,1.1428,1.1845,0,0,0,174.2,20.1);
	this.key57.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key58 = new lib.keyboardBtn_XL();
	this.key58.name = "key58";
	this.key58.setTransform(877,654.2,1.1428,1.1845,0,0,0,52.4,20.1);
	this.key58.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key52 = new lib.keyboardBtn_XL();
	this.key52.name = "key52";
	this.key52.setTransform(931.1,598.05,1.1428,1.1845,0,0,0,52.4,20.1);
	this.key52.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key41 = new lib.keyboardBtn_XL();
	this.key41.name = "key41";
	this.key41.setTransform(252.3,598.05,1.1428,1.1845,0,0,0,52.3,20.1);
	this.key41.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key28 = new lib.keyboardBtn_large();
	this.key28.name = "key28";
	this.key28.setTransform(243.4,541.7,1.1428,1.1845,0,0,0,44.5,20.1);
	this.key28.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key13 = new lib.keyboardBtn_medium();
	this.key13.name = "key13";
	this.key13.setTransform(951,429.7,1.1428,1.1845,0,0,0,34.9,20.1);
	this.key13.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key40 = new lib.keyboardBtn_medium();
	this.key40.name = "key40";
	this.key40.setTransform(951,541.7,1.1428,1.1845,0,0,0,34.9,20.1);
	this.key40.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key14 = new lib.keyboardBtn_medium();
	this.key14.name = "key14";
	this.key14.setTransform(232.45,486.05,1.1428,1.1845,0,0,0,34.9,20.1);
	this.key14.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key59 = new lib.keyboardBtn_small();
	this.key59.name = "key59";
	this.key59.setTransform(967.9,654.2,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key59.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key56 = new lib.keyboardBtn_small();
	this.key56.name = "key56";
	this.key56.setTransform(381.15,654.2,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key56.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key55 = new lib.keyboardBtn_small();
	this.key55.name = "key55";
	this.key55.setTransform(325.5,654.2,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key55.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key54 = new lib.keyboardBtn_small();
	this.key54.name = "key54";
	this.key54.setTransform(270.95,654.2,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key54.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key53 = new lib.keyboardBtn_small();
	this.key53.name = "key53";
	this.key53.setTransform(215.5,654.2,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key53.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key51 = new lib.keyboardBtn_small();
	this.key51.name = "key51";
	this.key51.setTransform(840.2,598.05,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key51.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key50 = new lib.keyboardBtn_small();
	this.key50.name = "key50";
	this.key50.setTransform(784.6,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key50.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key49 = new lib.keyboardBtn_small();
	this.key49.name = "key49";
	this.key49.setTransform(729.6,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key49.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key48 = new lib.keyboardBtn_small();
	this.key48.name = "key48";
	this.key48.setTransform(674.1,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key48.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key47 = new lib.keyboardBtn_small();
	this.key47.name = "key47";
	this.key47.setTransform(619.55,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key47.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key46 = new lib.keyboardBtn_small();
	this.key46.name = "key46";
	this.key46.setTransform(564.05,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key46.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key45 = new lib.keyboardBtn_small();
	this.key45.name = "key45";
	this.key45.setTransform(507.7,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key45.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key44 = new lib.keyboardBtn_small();
	this.key44.name = "key44";
	this.key44.setTransform(452.35,598.05,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key44.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key43 = new lib.keyboardBtn_small();
	this.key43.name = "key43";
	this.key43.setTransform(397.65,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key43.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key42 = new lib.keyboardBtn_small();
	this.key42.name = "key42";
	this.key42.setTransform(342.15,598.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key42.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key39 = new lib.keyboardBtn_small();
	this.key39.name = "key39";
	this.key39.setTransform(878.05,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key39.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key38 = new lib.keyboardBtn_small();
	this.key38.name = "key38";
	this.key38.setTransform(823.6,541.7,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key38.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key37 = new lib.keyboardBtn_small();
	this.key37.name = "key37";
	this.key37.setTransform(767.95,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key37.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key36 = new lib.keyboardBtn_small();
	this.key36.name = "key36";
	this.key36.setTransform(712.95,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key36.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key35 = new lib.keyboardBtn_small();
	this.key35.name = "key35";
	this.key35.setTransform(657.45,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key35.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key34 = new lib.keyboardBtn_small();
	this.key34.name = "key34";
	this.key34.setTransform(602.9,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key34.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key33 = new lib.keyboardBtn_small();
	this.key33.name = "key33";
	this.key33.setTransform(547.4,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key33.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key32 = new lib.keyboardBtn_small();
	this.key32.name = "key32";
	this.key32.setTransform(491,541.7,1.1428,1.1845,0,0,0,20,20.1);
	this.key32.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key31 = new lib.keyboardBtn_small();
	this.key31.name = "key31";
	this.key31.setTransform(435.6,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key31.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key30 = new lib.keyboardBtn_small();
	this.key30.name = "key30";
	this.key30.setTransform(381.15,541.7,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key30.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key29 = new lib.keyboardBtn_small();
	this.key29.name = "key29";
	this.key29.setTransform(325.5,541.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key29.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key27 = new lib.keyboardBtn_small();
	this.key27.name = "key27";
	this.key27.setTransform(967.9,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key27.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key26 = new lib.keyboardBtn_small();
	this.key26.name = "key26";
	this.key26.setTransform(910.65,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key26.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key25 = new lib.keyboardBtn_small();
	this.key25.name = "key25";
	this.key25.setTransform(855.2,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key25.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key24 = new lib.keyboardBtn_small();
	this.key24.name = "key24";
	this.key24.setTransform(800.75,486.05,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key24.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key23 = new lib.keyboardBtn_small();
	this.key23.name = "key23";
	this.key23.setTransform(745.1,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key23.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key22 = new lib.keyboardBtn_small();
	this.key22.name = "key22";
	this.key22.setTransform(690.25,486.05,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key22.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key21 = new lib.keyboardBtn_small();
	this.key21.name = "key21";
	this.key21.setTransform(634.6,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key21.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key20 = new lib.keyboardBtn_small();
	this.key20.name = "key20";
	this.key20.setTransform(580,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key20.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key19 = new lib.keyboardBtn_small();
	this.key19.name = "key19";
	this.key19.setTransform(524.65,486.05,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key19.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key18 = new lib.keyboardBtn_small();
	this.key18.name = "key18";
	this.key18.setTransform(468.2,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key18.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key17 = new lib.keyboardBtn_small();
	this.key17.name = "key17";
	this.key17.setTransform(412.85,486.05,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key17.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key16 = new lib.keyboardBtn_small();
	this.key16.name = "key16";
	this.key16.setTransform(358.3,486.05,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key16.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key15 = new lib.keyboardBtn_small();
	this.key15.name = "key15";
	this.key15.setTransform(302.65,486.05,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key15.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key12 = new lib.keyboardBtn_small();
	this.key12.name = "key12";
	this.key12.setTransform(877.8,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key12.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key11 = new lib.keyboardBtn_small();
	this.key11.name = "key11";
	this.key11.setTransform(822.45,429.7,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key11.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key10 = new lib.keyboardBtn_small();
	this.key10.name = "key10";
	this.key10.setTransform(767,429.7,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key10.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key9 = new lib.keyboardBtn_small();
	this.key9.name = "key9";
	this.key9.setTransform(712.25,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key9.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key8 = new lib.keyboardBtn_small();
	this.key8.name = "key8";
	this.key8.setTransform(656.75,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key8.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key7 = new lib.keyboardBtn_small();
	this.key7.name = "key7";
	this.key7.setTransform(601.75,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key7.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key6 = new lib.keyboardBtn_small();
	this.key6.name = "key6";
	this.key6.setTransform(546.25,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key6.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key5 = new lib.keyboardBtn_small();
	this.key5.name = "key5";
	this.key5.setTransform(491.8,429.7,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key5.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key4 = new lib.keyboardBtn_small();
	this.key4.name = "key4";
	this.key4.setTransform(436.2,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key4.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key3 = new lib.keyboardBtn_small();
	this.key3.name = "key3";
	this.key3.setTransform(380,429.7,1.1428,1.1845,0,0,0,20.2,20.1);
	this.key3.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key2 = new lib.keyboardBtn_small();
	this.key2.name = "key2";
	this.key2.setTransform(324.4,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key2.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key1 = new lib.keyboardBtn_small();
	this.key1.name = "key1";
	this.key1.setTransform(269.85,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key1.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.key0 = new lib.keyboardBtn_small();
	this.key0.name = "key0";
	this.key0.setTransform(215.5,429.7,1.1428,1.1845,0,0,0,20.1,20.1);
	this.key0.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.bkg = new lib.mc_keyboardBkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(592.15,542.6,1.1428,1.1845,0,0,0,364.4,130.8);
	this.bkg.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bkg},{t:this.key0},{t:this.key1},{t:this.key2},{t:this.key3},{t:this.key4},{t:this.key5},{t:this.key6},{t:this.key7},{t:this.key8},{t:this.key9},{t:this.key10},{t:this.key11},{t:this.key12},{t:this.key15},{t:this.key16},{t:this.key17},{t:this.key18},{t:this.key19},{t:this.key20},{t:this.key21},{t:this.key22},{t:this.key23},{t:this.key24},{t:this.key25},{t:this.key26},{t:this.key27},{t:this.key29},{t:this.key30},{t:this.key31},{t:this.key32},{t:this.key33},{t:this.key34},{t:this.key35},{t:this.key36},{t:this.key37},{t:this.key38},{t:this.key39},{t:this.key42},{t:this.key43},{t:this.key44},{t:this.key45},{t:this.key46},{t:this.key47},{t:this.key48},{t:this.key49},{t:this.key50},{t:this.key51},{t:this.key53},{t:this.key54},{t:this.key55},{t:this.key56},{t:this.key59},{t:this.key14},{t:this.key40},{t:this.key13},{t:this.key28},{t:this.key41},{t:this.key52},{t:this.key58},{t:this.key57}]}).wait(1));

	// bkg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("A5nFoQhaAAAAhaIAAobQAAhaBaAAMAzPAAAQBaAAAABaIAAIbQAABahaAAg");
	this.shape.setTransform(597.175,202.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(772.7,546.6,416.89999999999986,580.4);
// library properties:
lib.properties = {
	id: 'E0B91F3CEB5D464EAB622D20E0E108E6',
	width: 1200,
	height: 1200,
	fps: 30,
	color: "#669999",
	opacity: 1.00,
	manifest: [
		{src:"images/keyboard_atlas_1.png?1736370382777", id:"keyboard_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1736370382794", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1736370382794", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1736370382794", id:"an.TextInput"},
		{src:"components/ui/src/css.js?1736370382794", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E0B91F3CEB5D464EAB622D20E0E108E6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;