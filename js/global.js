function syntaxPretty() {
	var syntax = document.querySelectorAll('.syntax');
	
	for (var i = 0; i < syntax.length; ++i) {
		var item = syntax[i]; 
		var hyphen = item.innerHTML.replace(/-/g, '<span class="hyphen">-</span>'),
				bracket_left = hyphen.replace(/\[/g, '<span class="bracket">[</span>'),
				bracket_right = bracket_left.replace(/\]/g, '<span class="bracket">]</span>'),
				period = bracket_right.replace(/\./g, '<span class="period">.</span>'),
				underscore = period.replace(/\_/g, '<span class="underscore">_</span>');
		
		item.innerHTML = underscore;
		console.log(item.innerHTML);
	}
}

syntaxPretty();
