Explanation of data and data transformation for USmap visualization 

The original data source was the "2018-2019 School Year Vaccination Exemptions Report" provided by SchoolVaxView, a service by the Centers for Disease Control and Prevention which publishes data, information and news about US school vaccination coverage based on reports received from individual states. 

The data can be found at https://www.cdc.gov/vaccines/imz-managers/coverage/schoolvaxview/data-reports/exemptions-reports/2018-19.html (under the "Download Report Data") and as all_exemptions_original.xls in this folder.  

The data was transformed as follows: 
1. In excel: Opened xls file and deleted merged header rows (rows 1 and 2) to allow file to be saved as csv more easily. 
2. In excel: Manually added column with abbreviations of state names as new column B.  
3. In excel: Changed column names to make them more intuitively meaningful and incorporated information lost when deleting merged columns. 
4. Saved file as csv. (All_exemptions.csv) 
5.Wrote python program (extract_exemptions.py) to extract only certain columns of csv (state, state abbreviation and exemption rate (nonmedical + medical)) and saved them in new csv (relevant_exemptions.csv)
6. Wrote python progam (csv_to_dict.py) to convert data from csv to json and save resulting dictionnary in new file (relevant_exemptions.json)
7. Copied and pasted dictionnary from relevant_exemptions.json into script for visualization (USmapscript.js).

Please note that I only pushed my visualization to GitHub once it had the relevant exemptions data in it (not when it was still based on data unrelated to this project). Therefore there are no commits showing how I copied and pasted the exemptions data into the template and adjusted the variable names. However a link to the template can be found under the visualization on our webpage. 
