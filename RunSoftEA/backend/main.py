
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Artifact(BaseModel):
    id: int
    name: str
    layer: str
    description: str

artifacts_db = []

@app.get("/artifacts", response_model=List[Artifact])
def get_artifacts():
    return artifacts_db

@app.post("/artifacts", response_model=Artifact)
def add_artifact(artifact: Artifact):
    artifacts_db.append(artifact)
    return artifact
