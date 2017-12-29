import getHttp from "./http";

function MobService() 
{

}

MobService.prototype.get = function()
{
    return getHttp().get('/mob')
        .then(result => result.data);
}

export default new MobService(); 