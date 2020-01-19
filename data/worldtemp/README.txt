This text file contains information on how the data was transformed for the two World Temporal Data Visualizations: the Data Wrapper Chart and the D3 Line Chart. 

*For the D3 Line Graph*
1.	I started with the Excel file from the WHO and saved that as the attached ‘originaldata.csv’ then…
2.	Summed all months per year and added column for total cases per year
3.	Wrote an if statement to delete rows for the year 2020 (no data available)
4.	Transposed the country names into a new file ‘processeddataallcountries.csv’
5.	Tried to graph all countries and in order to write the code to do this I used excel functions (substitute, replace and concatenate) for all countries to create a list of countries in the following two formats (countries with spaces or apostrophes were replaced with underscores):
'Angola': {column: 'Angola'},
'Burundi': {column: 'Burundi'},
'Benin': {column: 'Benin'},
'Burkina Faso': {column: 'Burkina_Faso'},
'Botswana': {column: 'Botswana'},
'Central African Republic': {column: 'Central_African_Republic'},
'Cote dIvoire': {column: 'Cote_d_Ivoire'},
'Cameroon': {column: 'Cameroon'},
'Democratic Republic of the Congo': {column: 'Democratic_Republic_of_the_Congo'},

And 

d.Gambia = +d.Gambia;
d.Guinea-Bissau = +d.Guinea-Bissau;
d.Equatorial_Guinea = +d.Equatorial_Guinea;
d.Kenya = +d.Kenya;
d.Liberia = +d.Liberia;
d.Lesotho = +d.Lesotho;
d.Madagascar = +d.Madagascar;
d.Mali = +d.Mali;
d.Mozambique = +d.Mozambique;
6.	After testing this out and gathering feedback, we determined that the chart was too busy (or wouldn’t work) so we chose to graph the six most populous countries
7.	It is those six countries that are saved in ‘finaldata.csv’ (I then typed the code directly into the worldtemp.html)

*For the Data Wrapper Chart*
1.	I started with the same WHO dataset ‘originaldata.csv’ and followed steps 1 -4 from above and the following before uploading and refining on the data wrapper platform
2.	Transposed the data from ‘processeddataallcountries.csv’ so that the countries were in the first column
3.	Regrouped countries by Continent (rather than WHO region)
4.	Added a column for country codes using the syntax described here: https://github.com/datawrapper/datawrapper/wiki/Country-flag-icons
5.	Sorted the countries in alphabetical order and used a vlookup to compare the list of country codes with the WHO countries and manually removed missing countries and renamed countries with multiple names
6.	Used the concatenate function to merge the country codes with country names
7.	Used an if statement to remove countries that had no reported cases (0) from 2011 - 2019
