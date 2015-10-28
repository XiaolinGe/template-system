import Log from './src/entity/log';


export let action_logger = function (req, res, next) {
    let domain = req.headers.host.replace(/:.*$/,"");
    let url = req.url;

    if(url.indexOf("/api")===-1){
        next();
    }else{
        let sess = req.session;
        let method = req.method;
        console.log(sess);
        if(sess.user) {
            let data = {
                operator:sess.user.name,
                action:method+" "+url.substring(5)
            };
            Log.create(data);
        };
        next();
    }
};

export let login_checker = function (req, res, next) {
    let url = req.url;
    console.log(url);
    console.log(url.indexOf("/admin")===-1);
    if(url.indexOf("/admin")===-1||url.indexOf(".css")>-1
       ||url.indexOf(".js")>-1||url.indexOf(".gif")>-1||url.indexOf(".png")>-1){
        next();
    }else{
        let sess = req.session;
        if(sess.user){
            next();
        }else{
            req.url = '/admin/login.html';
            next();
        }
    }
};
