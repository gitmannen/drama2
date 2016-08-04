console.log("w3Slider loaded.")


//create navigation Dots
var dotrow=document.getElementById("dotrow");
var spanstring="";
var slid = document.getElementsByClassName("mySlides");
for (i = 0; i < slid.length; i++) {
     spanstring=spanstring + "<span class='dot' ></span>" + "\n";
  }
dotrow.innerHTML=spanstring
console.log(spanstring)

var slideNumber = 1; // slideNumber is 1-based
showSlides(slideNumber);

//create a combobox for download purpose
makeDropdown();





 $(window).resize(function(){
	 
	 showSlides(slideNumber)
	 
	 
 });

$(".prev").click(function(){
    showSlides(slideNumber -= 1);
});

$(".next").click(function(){
    showSlides(slideNumber += 1);
});


$(".dot").click(function(){
//slideNumber = $(this).index()+1;
//setTimeout(function(){showSlides(slideNumber);},2000);
  showSlides(slideNumber = $(this).index()+1);
  console.log("dot no.="+slideNumber )
});


function plusSlides(n) {
  showSlides(slideNumber += n);
}

function currentSlide(n) {
  showSlides(slideNumber = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var imgg=document.getElementsByClassName("imgg");
  var dots = document.getElementsByClassName("dot");
  var cpTxts=document.getElementsByClassName("text");
  var numTxts=document.getElementsByClassName("numbertext");
  if (n > slides.length) {slideNumber = 1} 
  if (n < 1) {slideNumber = slides.length}
 // -----  Hide ALL slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //slides[slideNumber-1].style.display = "block"; 

  //----DISPLAY current img  slide
     // slides[slideNumber-1].style.display = "block";      
  
 // console.log("display slide="+slideNumber);
   //----display current DOT
 // dots[slideNumber-1].className += " active";
  
  var cscr=imgg[slideNumber-1].getAttribute("src");
  console.log("current src="+cscr)
 //fix image to the desired size and centralise
  imgWdHtSetCenter(slides[slideNumber-1], cpTxts[slideNumber-1],imgg ,numTxts);
  
}
 
  

//---adjust image size to the given width & height (including centralising)    
// eg domSlideObj=document.getElementsByTagName("myslides")[0]    
// eg domCapObj=document.getElementsByTagName("text")[0]    
// eg domImggObj=document.getElementsByClassName("imgg");
// eg domNumObj=document.getElementsByClassName("numbertext");
function imgWdHtSetCenter(domSlideObj, domCapObj,domImggObj, domNumObj)
{
	console.log("inside imgWdHtSetCenter")
	
	//===========!!!!Important How to change the picture displya height and width!!!!============
	
    var maxWidth = 640;//787; // change this to your need width for the image
    var maxHeight =480 ;//480;    // Max height for the image
    var ratio = 0;  // Used for aspect ratio
    var width =0;// $(domSlideObj).width();    // Current image width
    var height =0;// $(domSlideObj).height();  // Current image height
    
    //---To get current physical image width & height, we need to wait the current image is loaded.  
    //  We can create a img load event using a new image tag
    //  Create a new img tag obj.  Load the new img tag with our targetted image and wait for new img tag to load  so as to get its width n height
    $("<img>") // Create a new <img>
      .attr("src", domImggObj[slideNumber-1].getAttribute("src")) // Copy the src attr from the target img  ie  domSlideObj
        .load(function() {
          width=this.width;
          height=this.height;
          console.log("onLoad Width:  " + this.width);
          console.log("onLoad Height: " + this.height);

            var totalImg=$(".imgg").length;
            console.log("current image="+slideNumber+"/"+totalImg+"  width="+width+"   height="+height+"   maWidth="+maxWidth+"  maxHt="+maxHeight);
            
            // Check if current height is larger than max
//            if(height > maxHeight)
//            {
                //-----Constant height, adjust width ------------ 
                console.log("img "+slideNumber+"  constant Height adjust width to maintain aspect ratio."+"  width="+width+"   height="+height);        
                ratio = maxHeight / height; // get ratio for scaling image
                $(domSlideObj).css("height", maxHeight);   // Set new height
                $(domSlideObj).css("width", width * ratio);    // Scale width based on ratio
                width = width * ratio;    // Reset width to match scaled image
                height = height * ratio;    // Reset height to match scaled image
                console.log("img "+slideNumber+"  adjusted width="+width+"  adjusted height="+height);        
                
//           }    
        
        /*     
            // Check if the current width is larger than the max
            if(width > maxWidth)
            {
                console.log("img "+slideNumber+"  width>maxWidth"+"  width="+width+"   height="+height);        
                ratio = maxWidth / width;   // get ratio for scaling image
                $(domSlideObj).css("width", maxWidth); // Set new width
                $(domSlideObj).css("height", height * ratio);  // Scale height based on ratio
                height = height * ratio;    // Reset height to match scaled image
                width = width * ratio;    // Reset width to match scaled image
                console.log("img "+slideNumber+"  adjusted width="+width+"  adjusted height="+height);                
            }
         */
 
            var newwidth = width;//$(domSlideObj).width(); adjusted picture width
            var parentwidth=$(domSlideObj).parent().width();
            //var capwidth=$(domCapObj).innerWidth();
            var widthdiff=(parentwidth-newwidth)/2;
            $(domSlideObj).css("margin-left",widthdiff);
            console.log("img "+slideNumber+"  Parent width="+parentwidth+"  img width="+newwidth+" widthdiff= "+widthdiff);
           

              //---prepare to find out the text caption width
              //  So as to reposition the caption in a centralised position
              var curTxt=domCapObj.innerHTML;
              var curFontFam=$(domCapObj).css("font-family"); //retrieve font family value from markdown file
              var curFontSize=$(domCapObj).css("font-size"); // eg  15px   i.e with px retrieve font size value from markdown file
              var fontstr=curFontSize+" "+curFontFam; // eg  15px arial
              //-----call jquery func  textWidth() and return the text width
              var capwd=$(domCapObj).textWidth(curTxt, fontstr);
              var capwdSet=capwd+32 ;// one char 8px,  32 is 4 additional chars
              //-----Note!!!  Do not forget the px unit
              var capwdSetStr=capwdSet+"px"
              
              
              
              var capWdDiff=((parentwidth-capwd)/2);
              $(domCapObj).css("width",capwdSetStr);    
              $(domCapObj).css("left",capWdDiff);    
              
                  //----DISPLAY current img  slide-------------
              domSlideObj.style.display = "block";     
               //----display current DOT
              document.getElementsByClassName("dot")[slideNumber-1].className += " active";
            
             var slideno=slideNumber+"/"+document.getElementsByClassName("mySlides").length;
			 console.log(slideno);
			 document.getElementsByClassName("numbertext")[slideNumber-1].innerHTML=slideno;


			$(".prev").css("left",widthdiff+"px");
			// prevPos=widthdiff+newwidth-20
			
			//$(".next").css("width","10px");
			var rightPos=parentwidth-(widthdiff+newwidth)
			$(".next").css("right",rightPos+"px");









			   //---display slider numbertext
              //var numT=slideNumber+" / "+domNumObj.length;
              //domNumObj[slideNumber-1].innerHTML=numT;
              //console.log("caption width="+capwd+"    currentText="+curTxt+"   fontsize="+curFontSize+"   number text="+numT);
          
      });// end  create a new <img> tag
    

};    //-------function imgWdHtSetCenter()----------



var selectedValue = "{{ site.url }}/images/costume3.jpg"
function makeDropdown(){
	var slides = document.getElementsByClassName("mySlides");
	var combostring = "";
	var dropdownBoxElement = document.getElementById("downloadDrop");
	var imgg=document.getElementsByClassName("imgg");
	var imgScr=imgg[0].getAttribute("src");
	var imgName
	var imgNamePos
	for (i = 0; i < slides.length; i++) {
		imgScr=imgg[i].getAttribute("src")
		imgNamePos=imgScr.lastIndexOf("/")+1
		imgName=imgScr.substr(imgNamePos)
		console.log(imgName);
		combostring =  combostring +"<option value='"+imgScr+"'>"+imgName+"</option>" + "\n";
	}
	dropdownBoxElement.innerHTML=combostring;
	console.log(combostring);
	  //<option value="volvo">Volvo</option>
}

function getSelectedValue(downloadDrop){
	var selectedText = downloadDrop.options[downloadDrop.selectedIndex].innerHTML;
    selectedValue = downloadDrop.value;
	console.log(selectedValue)
	document.getElementById("downloadBtn").setAttribute("href", selectedValue)
	
}
/* 
function trigDl(){
	document.getElementById("downloadBtn").setAttribute("href", selectedValue)
	
	
} */











 //----This is how to find the text width in px using jquery----
//----------jquery way of finding text width
// To call this jquery func ,     $('.classname').textWidth(text, font);
//   font can be '15px arial'
$.fn.textWidth = function(text, font) {
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    return $.fn.textWidth.fakeEl.width();
};