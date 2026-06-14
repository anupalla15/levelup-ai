from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class AnswerRequest(BaseModel):
    answer: str

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
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.post("/generate-question")
def generate_question(data: dict):

    domain = data["domain"]
    difficulty = data["difficulty"]

    prompt = f"""
Generate EXACTLY ONE interview question.

Domain: {domain}
Difficulty: {difficulty}

IMPORTANT RULES:

If difficulty is EASY:
- Ask only beginner-level questions
- Ask basic definitions and concepts
- Suitable for students starting the domain
- Keep question short and simple

Examples:
- What is React?
- What is JSX?
- What is a Component?

If difficulty is MEDIUM:
- Ask practical questions
- Ask about real-world usage
- Ask about Props, State, Hooks, APIs

Examples:
- What is the difference between State and Props?
- Explain useEffect in React.

If difficulty is HARD:
- Ask advanced questions
- Ask performance optimization
- Ask architecture
- Ask scalability
- Ask system design concepts

Examples:
- How would you optimize React re-rendering?
- Explain code splitting in React.

Return ONLY the interview question.

Do NOT:
- Give explanations
- Give answers
- Give numbering
- Generate multiple questions
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

    question = (
        response
        .choices[0]
        .message.content
    )

    return {
        "question": question
    }

@app.post("/roadmap")
def roadmap(data: dict):

    feedback = data["feedback"]

    prompt = f"""
You are an AI career mentor.

Based on this interview feedback:

{feedback}

Generate a personalized learning roadmap.

Rules:
- Keep concise
- Mention weak areas
- Create 4-step roadmap
- Mention important skills
- Sound motivating
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

    roadmap = (
        response
        .choices[0]
        .message.content
    )

    return {
        "roadmap": roadmap
    }

@app.post("/career-profile")
def career_profile(data: dict):

    feedback = data["feedback"]
    domain = data["domain"]

    prompt = f"""
You are an AI Career Coach.

Based on:

Domain: {domain}

Interview Feedback:
{feedback}

Generate:

Current Level:
Strength Areas:
Weak Areas:
Recommended Job Roles:
Readiness Percentage:
Next Skills To Learn:

Keep concise.
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

    return {
        "profile":
        response.choices[0].message.content
    }
@app.post("/career-advice")
def career_advice(data: dict):

    profile = data["profile"]

    prompt = f"""
You are an expert career coach.

Based on:

{profile}

Generate:

Recommended Career Path:
Recommended Job Role:
Next Skill To Learn:
Expected Timeline:
Target Salary Range:

Keep concise.
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

    return {
        "advice":
        response.choices[0].message.content
    }
@app.post("/work-iq")
def work_iq(data: dict):

    feedback = data["feedback"]

    prompt = f"""
You are Microsoft Work IQ.

Analyze workplace readiness based on:

{feedback}

Return:

Communication Intelligence:
Technical Intelligence:
Problem Solving Intelligence:
Collaboration Intelligence:
Leadership Potential:
Overall Work Readiness:

Keep concise.
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

    return {
        "work_iq":
        response.choices[0].message.content
    }