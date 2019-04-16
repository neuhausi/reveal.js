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
	
	var cars = {
      "x" : {
        "Country" : ["U.S.", "Japan", "Germany"],
      },
      "y" : {
        "smps" : ["Buick Estate Wagon", "Toyota Corona", "Audi 5000"],
        "vars" : ["MPG"],
        "data" : [[16.9, 15.5, 19.2]]
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

	var tooth = {
      "x" : {
        "supp"  : ["VC","OJ","VC"],
        "order" : [1, 2, 3],
        "dose"  : ["0.5","1.0","2.0"],
      },
      "y" : {
        "smps" : ["Var1","Var2","Var3"],
        "data" : [[4.2,11.5,7.3]],
        "vars" : ["len"]
      }
	}
	
	var heatmap =           {
      "z" : {
        "Type" : ["Pro", "Tyr", "Pho", "Kin", "Oth", "Pro", "Tyr", "Pho", "Kin", "Oth", "Pro", "Tyr", "Pho", "Kin", "Oth", "Pro", "Tyr", "Pho", "Kin", "Oth", "Pro", "Tyr", "Pho", "Kin", "Oth", "Pro", "Tyr", "Pho", "Kin", "Oth", "Pro", "Tyr", "Pho", "Kin", "Oth", "Pro", "Tyr", "Pho", "Kin", "Oth"],
        "Sens" : [ 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4] 
      },
      "x" :{
        "Treatment" : ["Control","Control","Control","Control","Control","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB","TreatmentA","TreatmentB"],
        "Site" : ["Site1","Site1","Site1","Site1","Site1","Site2","Site2","Site2","Site2","Site2","Site2","Site2","Site2","Site2","Site2","Site3","Site3","Site3","Site3","Site3","Site3","Site3","Site3","Site3","Site3"],
        "Dose-Type" : ["","","","","","Dose1","Dose1","Dose2","Dose2","Dose3","Dose3","Dose4","Dose4","Dose5","Dose5","Dose1","Dose1","Dose2","Dose2","Dose3","Dose3","Dose4","Dose4","Dose5","Dose5"],
        "Dose" : [0,0,0,0,0,5,5,10,10,15,15,20,20,25,25,5,5,10,10,15,15,20,20,25,25]
      },
      "y" :{
        "smps":["Sample1","Sample2","Sample3","Sample4","Sample5","Sample6","Sample7","Sample8","Sample9","Sample10","Sample11","Sample12","Sample13","Sample14","Sample15","Sample16","Sample17","Sample18","Sample19","Sample20","Sample21","Sample22","Sample23","Sample24","Sample25"],
        "vars":["Probe1","Probe2","Probe3","Probe4","Probe5","Probe6","Probe7","Probe8","Probe9","Probe10","Probe11","Probe12","Probe13","Probe14","Probe15","Probe16","Probe17","Probe18","Probe19","Probe20","Probe21","Probe22","Probe23","Probe24","Probe25","Probe26","Probe27","Probe28","Probe29","Probe30","Probe31","Probe32","Probe33","Probe34","Probe35","Probe36","Probe37","Probe38","Probe39","Probe40"],
        "data":[[0.784,1.036,-0.641,1.606,2.208,3.879,0.333,2.265,-1.55,1.678,-0.639,-0.533,-0.078,0.433,0.391,1.013,0.928,0.812,0.072,3.564,0.47,1.836,0.351,3.139,-2.207],[0.222,0.716,0.993,-0.913,0.996,1.235,1.396,1.817,0.162,1.137,-0.126,1.56,1.003,1.86,0.43,0.696,0.777,1.6,0.175,2.423,0.044,3.881,-0.757,1.486,0.01],[0.486,2.15,-0.069,-0.468,0.402,0.725,-1.697,0.653,0.101,2.852,-0.27,0.414,-0.789,1.877,1.555,2.511,0.07,0.244,-0.41,2.345,2.401,-0.033,0.951,2.053,0.725],[-1.857,0.698,0.528,1.024,-0.035,2.181,-0.015,3.68,-1.13,-0.842,-1.759,1.784,-0.673,0.147,0.765,1.585,0.33,1.481,-0.362,1.456,-0.719,0.961,1.296,2.375,0.208],[-1.19,1.564,-2.407,0.642,-0.51,4.116,-0.379,0.786,1.508,3.119,1.011,1.54,1.184,1.821,-0.217,2.752,0.083,1.663,0.568,2.48,-1.207,1.222,0.296,1.055,1.078],[0.256,1.214,1.919,0.577,1.07,1.53,1.537,3.063,0.481,2.332,-1.466,0.167,0.428,1.401,-1.716,3.524,-0.822,1.073,-1.825,3.923,-0.542,2.637,-1.296,0.759,0.836],[-0.443,0.286,0.379,1.076,0.478,3.443,-0.287,1.206,-1.275,2.275,1.101,2.821,-0.638,0.922,-0.205,2.318,0.494,1.648,-0.585,1.963,-0.636,1.229,0.998,1.523,-1.01],[1.023,-0.417,0.865,1.645,0.324,1.94,0.122,-0.171,0.352,1.42,-0.436,3.076,0.434,0.986,-1.912,3.899,-0.212,0.716,0.782,0.534,1.939,1.374,-0.083,2.318,0.982],[-2.33,0.575,-0.543,-0.38,-2.153,1.717,-1.219,0.725,0.273,1.908,0.488,1.426,0.108,2.586,0.653,0.317,0.112,3.138,0.212,1.393,-0.506,1.87,0.332,1.893,1.017],[0.841,0.146,0.716,-0.233,-0.206,0.237,-0.307,2.499,-1.619,1.957,-0.12,3.058,0.511,3.598,0.286,0.922,0.164,0.782,-3.468,0.262,0.812,0.798,1.209,2.964,-1.47],[-0.099,1.666,-1.635,1.475,-0.186,0.781,-1.919,1.472,-0.109,1.588,-0.379,0.862,-1.455,2.386,2.783,0.98,-0.136,1.042,0.532,1.778,0.463,0.647,0.92,2.427,-0.07],[0.663,-1.411,-0.69,-0.216,-0.735,1.878,-0.073,1.568,-1.254,3.792,-0.345,3.384,0.206,1.572,0.134,2.035,-0.26,2.42,0.437,2.164,-0.063,5.027,-0.166,3.878,-1.313],[-0.647,-1.152,3.437,-0.3,0.358,1.766,0.067,0.149,-1.005,1.191,-1.299,1.326,-2.378,1.8,-0.858,2.019,-1.357,2.278,-0.711,2.196,-0.243,3.326,-0.215,2.25,-0.504],[-0.264,-1.328,1.228,1.247,0.692,1.763,-0.978,2.781,-0.058,2.223,0.796,2.414,-1.834,3.203,0.459,2.914,0.375,3.309,0.946,0.943,-1.365,2.452,0.474,0.503,0.025],[0.253,-0.529,-0.429,-1.111,0.398,2.332,-1.334,2.202,-0.585,1.885,0.398,1.788,0.972,2.025,-0.835,0.622,0.001,0.837,-0.776,2.257,0.682,1.304,2.407,4.038,0.518],[-0.876,-1.41,0.538,-1.04,-0.717,-0.889,3.129,1.202,3.398,0.398,3.857,1.372,4.813,-1.311,4.029,-0.432,3.01,0.756,4.688,0.294,4.61,0.859,4.498,1.794,3.319],[-0.363,0.042,-0.253,-0.076,-1.27,-0.904,2.931,-0.119,2.669,-0.165,6.023,-0.65,2.031,1.424,2.844,-1.019,4.062,-0.025,2.637,-0.317,4.228,-0.142,3.013,0.611,3.74],[-1.674,-0.318,-0.726,-1.271,1.753,-1.678,3.341,-1.772,3.814,-1.391,2.622,0.677,3.307,-0.92,3.545,0.305,2.808,0.836,4.532,-0.378,4.87,-0.044,4.061,1.684,5.486],[-0.288,0.165,-0.468,1.219,-3.353,-0.578,3.414,-0.674,4.755,0.033,4.025,0.44,4.186,1.136,2.505,0.436,3.293,-0.868,4.746,-0.545,3.666,-0.295,3.206,-0.966,4.678],[-0.558,-0.855,-1.114,-0.623,0.368,-0.182,4.37,0.563,3.75,0.189,2.717,-1.708,5.274,0.741,2.537,-1.583,2.832,-1.515,3.829,0.358,5.306,0.388,3.284,0.661,3.804],[1.693,-1.53,0.057,-0.217,0.511,0.309,3.998,0.925,1.045,0.379,2.024,0.331,3.612,0.151,5.808,-1.429,3.402,-0.297,4.692,-0.439,4.521,-0.816,4.693,0.323,2.869],[-0.234,1.999,-1.603,-0.292,-0.91,-0.766,6.167,1.242,4.219,-1.291,6.974,-0.443,4.039,0.72,3.808,1.465,2.86,2.736,4.675,-0.554,3.091,0.057,4.311,-0.005,2.605],[0.529,-1.721,2.207,-0.873,-1.364,1.139,3.146,1.277,3.963,-0.234,4.581,-1.266,3.743,-0.84,3.682,-0.566,4.249,0.599,4.202,0.125,4.136,-0.67,3.433,-0.954,3.97],[-0.529,0.375,0.204,-0.529,1.001,0.244,3.922,-0.904,3.479,-0.926,4.171,-0.047,2.158,0.467,2.277,0.429,3.903,-1.013,3.182,0.73,3.318,-1.663,4.222,0.264,3.538],[2.302,-0.218,-1.184,-0.644,0.118,-1.35,4.497,1.262,5.131,-1.095,4.354,-1.364,4.376,-0.936,3.278,0.753,4.903,-2.193,3.336,0.722,3.92,-1.341,4.762,1.756,4.032],[0.957,1.309,-1.317,1.254,-0.397,0.004,3.34,1.233,4.681,-0.875,2.497,0.207,1.703,-0.614,3.171,-0.034,2.59,0.968,3.576,0.946,3.85,1.128,4.015,0.633,3.148],[-0.789,-1.139,0.066,0.418,0.366,-0.932,3.982,0.151,4.018,0.74,5.374,0.067,6.07,1.178,6.316,1.948,3.389,0.383,5.084,-0.251,3.874,-0.715,3.101,-0.172,4.867],[-0.26,-0.005,-0.12,-0.422,0.629,1.242,3.954,-0.027,4.352,-0.074,4.369,0.196,4.847,-0.763,3.042,-1.643,3.952,-1.358,4.105,-0.257,4.168,0.047,1.782,-0.585,5.465],[1.882,0.869,-1.305,1.095,1.002,-0.897,3.248,1.113,5.83,0.298,4.811,-0.128,3.263,0.186,4.244,1.314,2.832,0.222,3.899,-1.279,4.133,-1.523,4.49,0.966,4.658],[-1.052,0.429,0.646,0.642,1.037,-1.046,1.724,-0.698,5.316,-0.403,2.821,-0.108,5.52,-0.352,3.298,-0.716,2.672,1.499,3.919,0.202,3.409,0.841,5.47,1.225,1.988],[-1.862,-0.589,0.205,1.281,-1.256,0.924,4.189,-1.219,3.137,0.142,5.869,0.529,2.138,-0.034,3.921,-1.097,5.402,1.468,5.034,0.088,3.055,1.587,3.374,0.377,2.939],[-0.315,-0.369,0.634,0.495,-1.059,-0.481,1.329,1.105,5.3,0.135,6.515,0.001,4.161,1.686,4.747,-0.911,3.24,-1.461,4.64,0.698,5.006,-1.072,4.608,-0.317,5.208],[0.558,0.793,-1.713,0.055,2.242,0.588,3.785,2.949,2.175,2.055,3.328,0.236,3.549,-0.009,1.477,0.538,3.116,-0.621,5.203,0.736,3.606,-0.313,4.402,-1.039,3.894],[-1.332,-1.134,0.153,0.66,1.764,-0.588,3.417,-0.547,3.849,-1.521,3.332,0.88,5.449,0.179,4.596,0.626,4.006,0.33,2.969,-0.42,2.606,-0.485,4.581,-0.199,5.008],[0.29,0.228,0.117,-0.587,-2.116,0.188,4.009,0.551,3.127,0.682,3.858,-1.053,4.388,-1.46,1.468,0.434,4.221,0.782,2.992,0.056,5.223,-0.747,6.549,-0.959,3.714],[-0.015,-1.665,1.007,0.278,-0.091,1.919,3.861,-0.318,3.026,-1.642,5.379,2.097,4.396,0.802,3.66,0.544,2.156,0.87,4.044,0.3,4.422,-0.788,4.677,-0.215,4.643],[-0.984,0.915,0.944,-1.975,-1.717,0.16,4.748,1.521,4.091,-0.386,3.802,-1.134,5.701,-0.402,5.682,-0.987,4.281,0.844,3.427,1.368,3.358,-1.748,3.792,2.125,5.137],[-0.399,-0.613,2.211,0.238,2.799,0.687,5.522,0.534,5.233,-0.395,4.387,-1.733,4.494,-1.26,4.693,1.679,4.477,0.399,2.508,1.683,3.185,0.865,4.958,0.602,4.371],[1.205,-0.562,1.134,0.202,0.209,0.692,2.419,0.397,2.429,0.911,6.341,0.713,4.548,-0.688,3.947,0.439,4.69,-0.324,3.07,0.265,3.757,-1.535,5.434,-0.017,4.125],[-0.298,0.118,1.653,1.519,-0.821,-0.85,4.602,1.073,5.087,0.155,6.987,-0.716,2.912,0.581,2.112,-0.426,3.523,0.188,4.548,0.155,4.256,0.775,2.607,-0.697,5.338]]
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
	
	var cfg = {
			"colorSpectrum": ["blue", "white", "red"],
      "graphType": "Heatmap",
      "title": "Simple Heatmap"
  }
	
	//var cxl = new CanvasXpress("canvasl", cars, cfgl);
	
	//var cxr = new CanvasXpress("canvasr", tooth, cfgr);
	
	var cx = new CanvasXpress("canvas", heatmap, cfg);

});