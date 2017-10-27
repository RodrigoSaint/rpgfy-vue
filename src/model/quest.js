import * as validateJs from 'validate.js';
import * as moment from 'moment';

function Quest()
{

}

Quest.validation = {
    title: {
        presence: {allowEmpty: false },
        length: {
            minimum: 3,
            maximum: 30
        }
    },
    description: {presence: {allowEmpty: false }},
    difficulty: {
        presence: {allowEmpty: false },
        numericality: {
            onlyInteger: true,
            greaterThan: 0,
            lessThan: 6
        }
    },
    dueDate: {datetime:{
        earliest: moment().add(-1, 'days').toDate()
    }}
}

Quest.validate = function(questToValidate)
{
    return validateJs.async(questToValidate, Quest.validation);
}

export default Quest;