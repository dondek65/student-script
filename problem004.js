function getTotalNumberOfNewYaersEveSundays(a, b) 
{
	var niedziela = 0;
	for (a; a < b+1; a++) {
		if(new Date(a,0).getDay()==0)
		{
			niedziela++;
		}
  }
  return niedziela;
}