/*Goal is to convert the dates in the object below while keeping them grouped in their arrays. A sample of before/after is below.
    The input comes from a mysql formatted date, while the output is something like javascript's new Date() that we want to make it play nice with the front-end.
Input:
items = [
    {
        "start": "2020-08-29T00:00:00-05:00",
        "end": "2020-08-30T00:00:00-05:00"
    }];
Desired output:
items = [
    {
        "start": "Sat Aug 29 2020 00:00:00 GMT-0500 (Central Daylight Time)",
        "end": "Sun Aug 30 2020 00:00:00 GMT-0500 (Central Daylight Time)"
    }];
*/

let items = [
    {
        "start": "2020-08-29T00:00:00-05:00",
        "end": "2020-08-30T00:00:00-05:00"
    },
    {
        "start": "2020-09-04T00:00:00-05:00",
        "end": "2020-09-05T00:00:00-05:00"
    },
    {
        "start": "2020-05-07T00:00:00-05:00",
        "end": "2020-05-08T00:00:00-05:00"
    },
    {
        "start": "2020-04-01T20:00:00-05:00",
        "end": "2020-04-01T21:00:00-05:00"
    },
    {
        "start": "2020-03-27T00:00:00-05:00",
        "end": "2020-03-27T01:00:00-05:00"
    },
    {
        "start": "2020-03-27T00:00:00-05:00",
        "end": "2020-03-27T01:00:00-05:00"
    },
    {
        "start": "2020-03-24T00:30:00-05:00",
        "end": "2020-03-24T01:30:00-05:00"
    },
    {
        "start": "2020-03-12T17:00:00-05:00",
        "end": "2020-03-12T18:00:00-05:00"
    },
    {
        "start": "2020-03-03T23:00:00-06:00",
        "end": "2020-03-04T00:00:00-06:00"
    },
    {
        "start": "2020-02-28T02:00:00-06:00",
        "end": "2020-02-28T03:00:00-06:00"
    },
    {
        "start": "2020-02-25T01:45:00-06:00",
        "end": "2020-02-25T02:15:00-06:00"
    },
    {
        "start": "2020-02-18T20:00:00-06:00",
        "end": "2020-02-18T21:00:00-06:00"
    },
    {
        "start": "2020-02-12T20:00:00-06:00",
        "end": "2020-02-12T21:00:00-06:00"
    },
    {
        "start": "2020-01-31T00:00:00-06:00",
        "end": "2020-01-31T01:00:00-06:00"
    },
    {
        "start": "2020-01-13T20:00:00-06:00",
        "end": "2020-01-13T21:00:00-06:00"
    },
    {
        "start": "2020-01-03T20:00:00-06:00",
        "end": "2020-01-03T21:00:00-06:00"
    },
    {
        "start": "2019-12-30T20:00:00-06:00",
        "end": "2019-12-30T21:00:00-06:00"
    },
    {
        "start": "2019-12-19T21:00:00-06:00",
        "end": "2019-12-19T22:00:00-06:00"
    },
    {
        "start": "2019-12-12T19:00:00-06:00",
        "end": "2019-12-12T20:00:00-06:00"
    },
    {
        "start": "2019-12-09T20:00:00-06:00",
        "end": "2019-12-09T21:00:00-06:00"
    }
];

//In this case I considered space complexity important and converted the array in place. Otherwise building a new array with formatted dates is a valid solution.
items.forEach((element, itemIndex, items) => {
    Object.entries(element).forEach(([key, value]) =>{
        let date = new Date(value)
        let dateString = date.toString()
        dateString = dateString.replace(/(?<=\().+?(?=\))/, date.toLocaleDateString('en-US', {timeZoneName:'long'}).split(',')[1].trim()) 
        items[itemIndex][key] = dateString
    });
});

console.log(items)
