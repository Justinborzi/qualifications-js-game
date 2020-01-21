var repoUrl = require('get-repository-url');

module.exports.getLib = function (lib) {
    return new Promise((resolve) => {
        repoUrl(lib, function(err, url) {
            resolve({
                libName: lib,
                url: url
            });
        });
    });
};