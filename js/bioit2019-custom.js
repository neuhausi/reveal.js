onReady(function(){

	var cars = {
      "x" : {
        "Country" : ["U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "Japan", "Japan", "U.S.", "Germany", "Sweden", "Sweden", "France", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "Japan", "Japan", "U.S.", "Germany", "Japan", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "Japan", "Italy", "Germany", "Japan", "Germany", "Germany"]
      },
      "y" : {
        "smps" : ["Buick Estate Wagon", "Ford Country Squire Wagon", "Chevy Malibu Wagon", "Chrysler LeBaron Wagon", "Chevette", "Toyota Corona", "Datsun 510", "Dodge Omni", "Audi 5000", "Volvo 240 GL", "Saab 99 GLE", "Peugeot 694 SL", "Buick Century Special", "Mercury Zephyr", "Dodge Aspen", "AMC Concord D/L", "Chevy Caprice Classic", "Ford LTD", "Mercury Grand Marquis", "Dodge St Regis", "Ford Mustang 4", "Ford Mustang Ghia", "Mazda GLC", "Dodge Colt", "AMC Spirit", "VW Scirocco", "Honda Accord LX", "Buick Skylark", "Chevy Citation", "Olds Omega", "Pontiac Phoenix", "Plymouth Horizon", "Datsun 210", "Fiat Strada", "VW Dasher", "Datsun 810", "BMW 320i", "VW Rabbit"],
        "vars" : ["MPG", "Weight", "Drive_Ratio", "Horsepower", "Displacement", "Cylinders"],
        "data" : [[16.9, 15.5, 19.2, 18.5, 30, 27.5, 27.2, 30.9, 20.3, 17, 21.6, 16.2, 20.6, 20.8, 18.6, 18.1, 17, 17.6, 16.5, 18.2, 26.5, 21.9, 34.1, 35.1, 27.4, 31.5, 29.5, 28.4, 28.8, 26.8, 33.5, 34.2, 31.8, 37.3, 30.5, 22, 21.5, 31.9],
                  [4.36, 4.054, 3.605, 3.94, 2.155, 2.56, 2.3, 2.23, 2.83, 3.14, 2.795, 3.41, 3.38, 3.07, 3.62, 3.41, 3.84, 3.725, 3.955, 3.83, 2.585, 2.91, 1.975, 1.915, 2.67, 1.99, 2.135, 2.67, 2.595, 2.7, 2.556, 2.2, 2.02, 2.13, 2.19, 2.815, 2.6, 1.925],
                  [2.73, 2.26, 2.56, 2.45, 3.7, 3.05, 3.54, 3.37, 3.9, 3.5, 3.77, 3.58, 2.73, 3.08, 2.71, 2.73, 2.41, 2.26, 2.26, 2.45, 3.08, 3.08, 3.73, 2.97, 3.08, 3.78, 3.05, 2.53, 2.69, 2.84, 2.69, 3.37, 3.7, 3.1, 3.7, 3.7, 3.64, 3.78],
                  [155, 142, 125, 150, 68, 95, 97, 75, 103, 125, 115, 133, 105, 85, 110, 120, 130, 129, 138, 135, 88, 109, 65, 80, 80, 71, 68, 90, 115, 115, 90, 70, 65, 69, 78, 97, 110, 71],
                  [350, 351, 267, 360, 98, 134, 119, 105, 131, 163, 121, 163, 231, 200, 225, 258, 305, 302, 351, 318, 140, 171, 86, 98, 121, 89, 98, 151, 173, 173, 151, 105, 85, 91, 97, 146, 121, 89],
                  [8, 8, 8, 8, 4, 4, 4, 4, 5, 6, 4, 6, 6, 6, 6, 6, 8, 8, 8, 8, 4, 6, 4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 4, 4, 6, 4, 4]]
      }
	}
	
	var tooth = {
      "x" : {
        "supp"  : ["VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","VC","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ","OJ"],
        "order" : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "dose"  : ["0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","0.5","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2"]
      },
      "y" : {
        "smps" : ["Var1","Var2","Var3","Var4","Var5","Var6","Var7","Var8","Var9","Var10","Var11","Var12","Var13","Var14","Var15","Var16","Var17","Var18","Var19","Var20","Var21","Var22","Var23","Var24","Var25","Var26","Var27","Var28","Var29","Var30","Var31","Var32","Var33","Var34","Var35","Var36","Var37","Var38","Var39","Var40","Var41","Var42","Var43","Var44","Var45","Var46","Var47","Var48","Var49","Var50","Var51","Var52","Var53","Var54","Var55","Var56","Var57","Var58","Var59","Var60"],
        "data" : [[4.2,11.5,7.3,5.8,6.4,10,11.2,11.2,5.2,7,16.5,16.5,15.2,17.3,22.5,17.3,13.6,14.5,18.8,15.5,23.6,18.5,33.9,25.5,26.4,32.5,26.7,21.5,23.3,29.5,15.2,21.5,17.6,9.7,14.5,10,8.2,9.4,16.5,9.7,19.7,23.3,23.6,26.4,20,25.2,25.8,21.2,14.5,27.3,25.5,26.4,22.4,24.5,24.8,30.9,26.4,27.3,29.4,23]],
        "vars" : ["len"]
      }
	}
	
	var cfgl = {
			"graphType" : "Bar",
			"title" : "Measurements on 38 1978-79 model automobiles.\nThe gas mileage in miles per gallon as measured by Consumers Union on a test track."
	}
	
	var cfgr = {
			"graphType" : "Bar",
      "title": "The Effect of Vitamin C on Tooth Growth in Guinea Pigs"			
	}
	
	var cxl = new CanvasXpress("canvasl", cars, cfgl);
	
	var cxr = new CanvasXpress("canvasr", tooth, cfgr);
	
});