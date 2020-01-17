import csv 

with open('originalustemp.csv', 'r') as f:
	reader = csv.DictReader(f)
	rows = list(reader)
	rows = [dict(row) for row in rows]

print(rows)

with open ('temporalmeasles.csv', 'w') as f:
	writer = csv.writer(f)
	writer.writerow(['name', 'value', 'year', 'lastValue', 'rank'])
	for row in rows: 
		writer.writerow([row['Area'],row['value'], row['Week'],'a','b'])
