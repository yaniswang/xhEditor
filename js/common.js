function addBookmark(title,url)
{
	if (window.sidebar)
		window.sidebar.addPanel(title, url,"");
	else if(document.all)
		window.external.AddFavorite(url,title);
	else if(window.opera && window.print)
		return true;
	return false;
}