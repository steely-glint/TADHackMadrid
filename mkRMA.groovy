def rma = [rma : 54321];
def reps = groovy.json.JsonOutput.toJson(rma);
response.setContentType('application/json')
out.print(reps);
