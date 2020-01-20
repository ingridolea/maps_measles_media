Explanation of data and data transformation for UStemp visualization 

The original data source was the "NNDSS - TABLE 1V. Malaria to Measles, Imported" publisheded by the Center for Disease Control and provided by the U.S. Department of Health and Human Services . 

The data can be found at https://catalog.data.gov/dataset/nndss-table-1v-malaria-to-measles-imported-74ebc and as temporalmeasles.csv in this folder.  

The data was transformed as follows: 
1. In excel: Manually renamed columns in originalustemp.csv to match D3 code format
2. In sublime/python: used ustconverter.py (which can also be found in this folder) to extract relevant columns of data
3. In excel: Manually rank-ordered states within each time period (week)
4. In sublime/java: Changed color, tick duration, name and label positioning, and start and end period in ustempscript.js

