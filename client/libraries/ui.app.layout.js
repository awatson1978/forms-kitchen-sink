Template.appContainerTemplate.rendered = function(){
//    if(isMobile){
//        $('.touch-trigger').removeClass('touch-disabled');
//    }
    try{
        $('#appLayoutPanel').css('height', window.innerHeight);
        //$(body).css('height', window.innerHeight);
    }catch(err){
        console.log(err);
    }
};




Template.appContainerTemplate.resized = function(){
    try{
        $('#appLayoutPanel').css('height', window.innerHeight);
        $('#sidebarPanel').css('height', window.innerHeight);
        $('#formPanel').css('height', window.innerHeight);
        return Session.get("resized");
    }catch(err){
        console.log(err);
    }
};

Template.appContainerTemplate.height = function(){
    try{
        //$('#formPanel').html(window.innerHeight);
        //return Session.get("resized");
        return window.innerHeight;
    }catch(err){
        console.log(err);
    }
};