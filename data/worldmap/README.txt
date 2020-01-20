For the first visualization: 
- I downloaded the data from https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/measles_monthlydata/en/ (measlescasesbycountrybymonth file in the folder)
- In excel, I created the column "total cases by year"
- I filtered and only kept the 2019 data
- I created a new column and used the function "CONCAT" to create the string separated by comma
- I pasted the data into d3.csv
- I manually added the roots "folders" of continents (first rows of the csv)


For the second visualization
- I downloaded the data from https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/measles_monthlydata/en/
- In excel, I created the column "total cases by year"
- I filtered and only kept the 2019 data
- I downloaded the world population data from https://population.un.org/wpp/DataQuery/ (TotalPopSex-20200118093540 file in the folder)
- I merged the data in excel (manually fixing some differences in names of countries)
- I created a new column and used the function "CONCAT" to create the string separated by comma
- I pasted the data into prevalence.csv
- I manually added the roots "folders" of continents (first rows of the csv)

