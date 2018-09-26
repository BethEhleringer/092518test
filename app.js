


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchPhrase + "&?begin_date=" + beginDate + "&?end_date=" + endDate + "&?api-key=9401fbdc39dc4461be368bc34c94d1fe"

searchButton.click()
$.ajax({

    url: queryURL,

    method: "GET"
}
)