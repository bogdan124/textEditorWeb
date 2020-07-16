$("#text-format-id").click(function() {
  $(".toggle_text_mode").toggle( "slow" );
});
window.addEventListener('load', function(){
			document.getElementById('w3review').setAttribute('contenteditable', 'true');		
});

$
/*$('#format_bold').on('click', function(){
    
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
     //text.execCommand("bold");
   
});
*/
function addTextEditor(where_add){
var textEditor=`
      <div id="w3review" name="w3review" rows="4" cols="50">
      At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
      </div>
       <div class="content-text-editor">
        
        <div class="themes-list-text-editor">

        </div>

        <div class="item-inner take-url">
          <div class="item-title item-label"><b>URL</b></div>
          <div class="item-input-wrap">
            <input type="url" id="url_value" placeholder="URL">
            <span class="input-clear-button"></span>
          </div>
        </div>
         
        <span id="text-format-id" class="spawn-text-mode material-icons">text_format</span>
        <div class="toggle_text_mode">
           <a href="javascript:void(0)" onclick="addStyleInsertLink()"><span class="text-mode material-icons">insert_link</span></a>
           <a href="javascript:void(0)" onclick="addStyle('bold')"><span class="text-mode material-icons" id="format_bold">format_bold</span></a>
           <a href="javascript:void(0)" onclick="addStyle('italic')"><span class="text-mode material-icons">format_italic</span></a>
           <a href="javascript:void(0)" onclick="addStyle('justifyLeft')"><span class="text-mode material-icons">format_align_left</span></a>
           <a href="javascript:void(0)" onclick="addStyle('justifyCenter')"><span class="text-mode material-icons">format_align_justify</span></a>
           <a href="javascript:void(0)" onclick="addStyle('justifyRight')"><span class="text-mode material-icons">format_align_right</span></a>
        </div>
        <a href="javascript:void(0)" onclick="addStyleInsertImage('insertImage')"><span class="material-icons">insert_photo</span></a>
        <span class="material-icons">open_in_browser</span>
        <a href="javascript:void(0)" onclick="addStyleBackground('formatBackground')"><span class="material-icons">format_color_reset</span></a>
       </div>
`;
	$(where_add).html(textEditor);
}

function addStyle(command, value) {
    document.execCommand(command, false, value);
 }

function addStyleInsertImage(){

}

function addStyleInsertLink(){
	$(".take-url").toggle("slow");
}


function addStyleBackground(){
	$("#w3review").css("background","red");
}