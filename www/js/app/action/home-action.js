$(function () {
    $(document).delegate("#page-home", "pagebeforeshow", function () {
        HomeController.getHome();
    });
    $(document).delegate("#list-categories li a", "click", function () {
        CategoryModel.setId(this.id);        
        CategoryModel.setName($(this).attr("data-cat_name"));        
    });
    $(document).delegate("#search-category", "click", function () {
        $(this).toggleClass('ui-hidden-accessible');
        $('#frm-search-category').toggleClass('ui-hidden-accessible');                
        $('#home-title').toggleClass('ui-hidden-accessible');                
        $('#filter-category').trigger( "focus" );
    });   
    $(document).delegate("#frm-search-category", "blur", function () {        
        $(this).toggleClass('ui-hidden-accessible');
        $('#search-category').toggleClass('ui-hidden-accessible');                
        $('#home-title').toggleClass('ui-hidden-accessible');                
    });   
    $(document).delegate("#btn-bar", "click", function () {        
        HomeController.getPanel();
    });   
});



