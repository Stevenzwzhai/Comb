App

    .service("IndexSev",function($http,$q,SERVER){
        var IndexSev={
            loadData:function(){
                var defer= $q.defer();
                var data = {
                    "style": "",
                    "data": {
                    },
                    "clientInfo": {}
                };
                $http.post(SERVER.url.mp+"/index.json",data)
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        defer.reject(err);
                    });
                return defer.promise;
            }
        };

        return IndexSev;
    });