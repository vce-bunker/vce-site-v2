// note: in the future get it to show a section contining the phrase searched (with the phrase bolded)

(function() {
  function showResults(results, store, searchTerm2) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // If there are results...
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over them and generate html
        var item = store[results[i].ref];
        var filteredcontent = getPreview(searchTerm2, item.content, 170);
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + ' | ' + item.collection + '</h3></a>';
        appendString += '<p>' + filteredcontent + '</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  // inserted

  function getPreview(query, content, previewLength) {
		var parts = query.split(" "), //set parts to a list of words in query
			match = content.toLowerCase().indexOf(query.toLowerCase()), //pos of query in content
			matchLength = query.length, //length of the query as string
			preview;
    
		// Find a relevant location in content
		for (var i = 0; i < parts.length; i++) { //for each i in (# of words in query)
			if (match >= 0) { // if the entire phrase exists together then break
				break;
			}
      
      //change the phrase to just one of the words (then check each word individually until one exists)
			match = content.toLowerCase().indexOf(parts[i].toLowerCase()); 
			matchLength = parts[i].length; //length of the word
		}

		// Create preview
		if (match >= 0) { // if a match was found
      // aim to create extract of preview length of (previewlength / 2) to the left and right of identified str
			var start = match - (previewLength / 2),
				end = start > 0 ? match + matchLength + (previewLength / 2) : previewLength;


			preview = content.substring(start, end).trim();

			if (start > 0) {
				preview = "..." + preview;
			}
			if (end < content.length) {
				preview = preview + "...";
			}      

			// Highlight query parts
			preview = preview.replace(new RegExp("(" + parts.join("|") + ")", "gi"), "<mark>$1</mark>");
		} else {
			// Use start of content if no match found
			preview = content.substring(0, previewLength).trim() + (content.length > previewLength ? "..." : "");
		}

		return preview;
	}

  // endinsert




  function getQuery(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQuery('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr.js with the fields to search.
    // The title field is given more weight with the "boost" parameter
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('content');

      for (var key in window.store) { // Add the JSON we generated from the site content to Lunr.js.
        this.add({
          'id': key,
          'title': window.store[key].title,
          'author': window.store[key].author,
          'category': window.store[key].category,
          'content': window.store[key].content
        });
      }
    });

    var results = idx.search(searchTerm); // Perform search with Lunr.js
    showResults(results, window.store, searchTerm);
  }
})();