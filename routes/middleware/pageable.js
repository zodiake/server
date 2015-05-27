 function pageable(req, res, next) {
     var page = req.params.page || 1;
     var size = req.params.size || 10;
     req.pageable = new Page(page, size);
     next();
 }

 function Page(page, size) {
     this.page = page;
     this.size = size;
 }
 exports = module.exports = pageable;
