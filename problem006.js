function divisible()
{
  var podzielna = true;
  var i=0;
    for(;i < arguments.length; i++) 
	{
		if(arguments[0]%arguments[i]!=0)
		{
        podzielna = false;
		}
    }
    return podzielna;
}