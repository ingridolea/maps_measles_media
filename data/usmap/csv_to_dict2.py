import csv 

with open("vaccine_coverage_filtered.csv", "r") as f: 
	reader = csv.DictReader(f)
	rows = list(reader)
	coverage = [dict(row) for row in rows]

import json

with open("relevant_coverage.json", "w") as f: 
	json.dump(coverage, f, indent = 8)