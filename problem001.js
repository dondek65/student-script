function triangleArea(a, b, c) 
		{
		if (a+b<=c || a+c<=b || b+c<=a || a<=0 || b<=0 || c<=0) 
		{
			return -1;
		} 
		else 
		{
			var obwod = a+b+c;
			var area = Math.sqrt(p*(p-a)*(p-b)*(p-c)); //Dominik Luber
			
		return area;
		}
}