$(document).ready(function(){
// Check if the notes widget exists
if(typeof($.custom.notes)!=”undefined”) {
// Redefine notes widget
$.widget(”custom.notes”, $.custom.notes, {
_init_main: function() {
// Call the old _init_main
this._super(arguments);
// Add an hello after the refresh button
$(”<span>”,{ html:” Hello” }).insertAfter(this.btnRefresh);
},
new_function_name: function() { }
});
}
});
