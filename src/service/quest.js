import getHttp from "./http";

function QuestService() 
{

}

QuestService.prototype.get = function get() 
{
    return getHttp().get('/quest')
        .then(result => result.data)
}

QuestService.prototype.create = function create() 
{
    return getHttp().post('/quest')
}

export default new QuestService(); 