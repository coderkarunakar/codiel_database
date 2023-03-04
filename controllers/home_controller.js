module.exports.home = function(req, res){
    
    return res.render('home', {
        title: "Home all"
    });
}

// module.exports.actionName = function(req, res){}