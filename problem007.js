function findMax() 
{	
  var maxValue=arguments[0];
  var i=0
    for (; i < arguments.length; i++)
	{
		if(maxValue<arguments[i]) 
		{
			maxValue=arguments[i];
		}
    }
    return maxValue;
}