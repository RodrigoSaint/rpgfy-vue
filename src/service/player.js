import getHttp from "./http";

function PlayerService() 
{

}

PlayerService.prototype.create = function(player)
{
    return getHttp().post('/user', player)
}

PlayerService.prototype.get = function get() 
{
    return getHttp().get('/user')
        .then(result => result.data)
}

export default new PlayerService(); 