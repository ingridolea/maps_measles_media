import csv 

with open("relevant_exemptions.csv", "r") as f: 
	reader = csv.DictReader(f)
	rows = list(reader)
	exemptions = [dict(row) for row in rows]

import json

with open("relevant_exemptions.json", "w") as f: 
	json.dump(exemptions, f, indent = 8)