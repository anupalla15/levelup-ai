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

# ANALYZE ROUTE
@app.post("/analyze")
def analyze_answer(data: AnswerRequest):

    prompt = f"""
    You are an expert AI technical interviewer.

    Analyze this candidate answer dynamically.

    Candidate Answer:
    {data.answer}

    Give:
    1. Technical Score out of 10
    2. Communication Score
    3. Strengths
    4. Weaknesses
    5. Improvement Suggestions
    6. Recommended Topics

    IMPORTANT:
    If answer is weak or says "I don't know",
    give low scores realistically.

    Keep response professional.
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