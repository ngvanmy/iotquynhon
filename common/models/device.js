module.exports = function(Device) {
    Device.getByUsers=function (user,cb) {
     //    Device.find({
     //   fields: {
     //       ownerId: user
     //   }
      //  }, cb);
      Device.find({where: {ownerId: user}},function(err,devices){
                return cb(err,devices);
      });
    };

    Device.remoteMethod('getByUsers',{
        accepts: 
            {arg: 'user', type: 'string'},
        returns: {arg: 'devices', type: 'array'},
        http: {path:'/list-devices', verb: 'get'}
    })
};
