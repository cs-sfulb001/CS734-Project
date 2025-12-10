from google import genai
import sys
client = genai.Client()


response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=f"Summarize the following information {sys.argv[2]} in plain text to answer this query {sys.argv[1]}",
)
returnText = ""
for line in response.text.split('\n'):
    returnText += line
returnText = returnText.replace('\"','')
returnText = returnText.replace('{','')
returnText = returnText.replace('}"','')
print("{\"result\": \""+returnText+"\"}")