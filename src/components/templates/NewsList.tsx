import { Layout, MediaItem, NewsItem } from './organisms';

// Process data

const groupedModel = {
    group: "" // Today etc.
    data: [
        {
            "newsID":1,
            "newsDate": "2021-05-26T06:54:52.000Z"
            ...
        }
    ]
}


// Source: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript
const getDateGroup = (date:string) =>{
    function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it
const a = new Date("2017-01-01"),
    b = new Date("2017-07-25"),
    difference = dateDiffInDays(a, b);
    
    return difference === 0
            ? "TODAY"
            : difference > 0 && difference <= 7
            ? "LAST WEEK"
            : difference > 7
            ? "LONG TIME"; 
}

// today, 7 days, more than 7 days
const groupNewsByDate = (newsArray:News[]) =>
    newsArray.reduce((acc,curr,i)=>
        appendToDateGroup(getDateGroup(curr),acc)
    ,[])

// List

const NewsList = () => {
    return (
        <>
            <NewsItem
                templateAreas={Layout.articleDesktop}
                className="news-item"
            />
       </>
    );
};

NewsList.Item = NewsItem;
NewsList.Parent = NewsList;
export default NewsList;
