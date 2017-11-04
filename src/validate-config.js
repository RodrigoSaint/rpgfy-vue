import * as moment from 'moment';
import dateConfig from './date-config'

export default function setValidation(validate) 
{
    validate.extend(validate.validators.datetime, 
    {
        // The value is guaranteed not to be null or undefined but otherwise it
        // could be anything.
        parse: function(value, options) {
            return moment.utc(value).toDate();
        },
        // Input is a unix timestamp
        format: function(value, options) {
            var format = options.dateOnly ? dateConfig.dateFormat.short: dateConfig.dateFormat.long;
            return moment.utc(value).format(format);
        }
    });    
}

