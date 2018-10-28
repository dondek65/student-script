function triangleArea(a, b, c) 
		{
		if (a+b<=c || a+c<=b || b+c<=a) 
		{
			return -1;
		} 
		else 
		{
			if((a>0 && b>0 && c>0))
			{
			var obwod = a+b+c;
			var p = obwod/2;
			var pole= Math.sqrt(p*(p-a)*(p-b)*(p-c));
			pole = Math.round(pole * 100) / 100;
			
			return pole;
			}
			else
			{
				return -1;
			}
		}
}
