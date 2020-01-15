import csv 

with open("All_exemptions.csv", "r") as f: 
	reader = csv.DictReader(f)
	rows = list(reader)
	exemptions = [dict(row) for row in rows]

print(exemptions)

with open("relevant_exemptions.csv", "w") as f: 
	writer = csv.writer(f)
	writer.writerow(["state", "state abbreviation", "exemption rate"])
	for element in exemptions: 
		writer.writerow([element["states"], element["state abbreviations"], element["exemption rate"]])
	