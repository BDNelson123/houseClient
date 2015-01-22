// this loop builds the pages array we loop over in the view to see how many pages we have
function pagination_search_pagesArray(pages){
  var pages_array = [];

  for (i = 0; i < pages; i++) {
    pages_array.push(i + 1);
  }

  return pages_array;
}

function pagination_search_currentPage(query,page,count) {
  if(page != null && page != "" && page <= count){
    currentPage = parseInt(page);
  } else {
    currentPage = 1;
  }

  return currentPage;
}

function pagination_search_query(query,page,count,indexSearch) {
  if(page != null && page != "" && page <= count){
    searches = indexSearch.read({query: query, page: page});
  } else {
    searches = indexSearch.read({query: query, page: 1});
  }

  return searches;
}








