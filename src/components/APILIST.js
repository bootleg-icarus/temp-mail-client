const APILIST = [
    {
        type: 'POST',
        name: 'awaitInbox',
        link: 'https://temp-mail-api.live/api/v1/awaitInbox',
        description: 'API will wait for mail for given inbox.',
        parameters: [
            {
                name: 'inbox',
                required: true,
                description: '',
                example: 'darshan@shashin-don.online'
            },
            {
                name: 'subject',
                required: false,
                description: 'if specified api will only return mail with exact matching subject text.',
                example: 'ABC'
            },
            {
                name: 'timeLimit',
                required: false,
                description: 'in seconds, if specified api will look into db for old mails from last this many seconds. If there is no matching mail then api will wait for new mail. ',
                example: 300
            },
            {
                name: 'timeout',
                required: false,
                description: 'default-max 60 seconds. Will return blank response after this many seconds if mail will not arrive in this seconds.',
                example: 300
            }
        ]
    },
    {
        type: 'POST',
        name: 'lastN',
        link: 'http://temp-mail-api.live/api/v1/lastN',
        description: 'API will return emails from db with specified inbox and subject.',
        parameters: [
            {
                name: 'inbox',
                required: true,
                description: '',
                example: 'darshan@shashin-don.online'
            },
            {
                name: 'subject',
                required: false,
                description: 'if specified api will only return mail with exact matching subject text.',
                example: 'ABC'
            },
            {
                name: 'limit',
                required: false,
                description: 'default 10, if specified API will return last this number of emails instead of only 10. ',
                example: 60
            }
        ]
    },
    {
        type: 'GET',
        name: 'html',
        link: 'http://temp-mail-api.live/api/v1/html/{{uniqueEmailKey}}',
        description: 'API will return HTML content for given uniqueEmailKey'

    },
    {
        type: 'GET',
        name: 'json',
        link: 'http://temp-mail-api.live/api/v1/json/{{uniqueEmailKey}}',
        description: 'API will return TEXT content for given uniqueEmailKey'
    },
    {
        type: 'GET',
        name: 'domainList',
        link: 'http://temp-mail-api.live/api/v1/domainList',
        description: 'API will return an array with available domain names'

    },
];

export default APILIST;