$(function () {
    $(document).delegate("#page-ngo", "pagebeforeshow", function () {
        NgoController.getNgos();
    });
    $(document).delegate("#list-ngo li a", "click", function () {
        NgoModel.setId($(this).attr("data-ngo_id"));
        NgoModel.setName($(this).attr("data-ngo_name"));
    });
//    $(document).delegate("#page-ngo", "pageshow", function () {        
//        $("#page-ngo-header").html(CategoryModel.getName());       
//    });
//    $(document).delegate("#search-ngo", "click", function () {
//        $(this).toggleClass('ui-hidden-accessible');
//        $('#frm-search-ngo').toggleClass('ui-hidden-accessible');                
//        $('#page-ngo-header').toggleClass('ui-hidden-accessible');                
//        $('#filter-ngo').trigger( "focus" );
//    });   
//    $(document).delegate("#frm-search-ngo", "blur", function () {        
//        $(this).toggleClass('ui-hidden-accessible');
//        $('#search-ngo').toggleClass('ui-hidden-accessible');                
//        $('#page-ngo-header').toggleClass('ui-hidden-accessible');                
//    });
//    new $.nd2Search({
//        placeholder: "Input Placeholder", // Placeholder in the search field
//        defaultIcon: "globe-alt", // optional: icon | null
//        source: [{label: 'Displayed Value', value: 'real-value', icon: 'custom-icon'}], // autocomplete : option-source
//        fn: function (result) { // this function will be executed when a valid result item is selected
//            console.log('--- Your custom handling ---');
//            console.log('you picked: ');
//            console.log(result);
//        }
//    });
           
});


