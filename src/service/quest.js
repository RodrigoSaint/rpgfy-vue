import getHttp from "./http";

function QuestService() 
{

}

QuestService.prototype.get = function get() 
{
    return getHttp().get('/quest')
        .then(result => result.data)
}

QuestService.prototype.create = function create(quest) 
{
    return getHttp().post('/quest', quest)
}

QuestService.prototype.changeStatus = function changeStatus(quest, newStatus)
{
    return getHttp().patch(`/quest/${quest._id}`, {status: newStatus})
}

QuestService.prototype.changeDueDate = function changeDueDate(quest, newDueDate)
{
    return getHttp().patch(`/quest/${quest._id}`, {dueDate: newDueDate})
}

export default new QuestService(); 