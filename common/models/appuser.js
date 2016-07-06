module.exports = function(Appuser) {
   Appuser.validatesUniquenessOf('email', {message: 'Email đã được đăng ký'});
     Appuser.validatesUniquenessOf('username', {message: 'Tên đăng nhập đã được đăng ký'});
   
};
