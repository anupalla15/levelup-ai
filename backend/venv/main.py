from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq
from dotenv import load_dotenv
import os

# LOAD ENV
load_dotenv()

# GROQ CLIENT
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

# FASTAPI
app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# REQUEST MODEL
class AnswerRequest(BaseModel):
    answer: str

# HOME
@app.get("/")
def home():
    return {
        "message": "LevelUp AI Backend Running"
    }
@app.post("/analyze")
def analyze_answer(data: AnswerRequest):

    prompt = f"""
You are an advanced AI technical interviewer.

Analyze the candidate answer professionally.

Candidate Answer:
{data.answer}

Rules:
- If answer is weak or says "I don't know", give low realistic scores.
- Keep feedback SHORT and precise.
- Avoid overly long paragraphs.
- Sound like a real interviewer.

Return STRICTLY in this format:

Technical Score: X/10

Communication Score: X/10

Strengths:
- point
- point

Weaknesses:
- point
- point

Suggestions:
- point
- point
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    feedback = response.choices[0].message.content

    return {
        "feedback": feedback
    }
  