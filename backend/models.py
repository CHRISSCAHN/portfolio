from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

# Portfolio Profile Model
class PortfolioProfile(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    name: str
    title: str
    subtitle: str
    description: str
    location: str
    email: str
    phone: str
    linkedin: str
    github: str
    website: str
    availability: str
    response_time: str
    experience: str
    projects_completed: str
    research_papers: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class PortfolioProfileCreate(BaseModel):
    name: str
    title: str
    subtitle: str
    description: str
    location: str
    email: str
    phone: str
    linkedin: str
    github: str
    website: str
    availability: str
    response_time: str
    experience: str
    projects_completed: str
    research_papers: str

# Skills Models
class Skill(BaseModel):
    name: str
    level: int = Field(ge=0, le=100)

class SkillCategory(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    category: str
    skills: List[Skill]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class SkillCategoryCreate(BaseModel):
    category: str
    skills: List[Skill]

# Projects Models
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    title: str
    description: str
    image: str
    technologies: List[str]
    features: List[str]
    demo_url: str
    github_url: str
    status: str
    timeline: str
    featured: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    title: str
    description: str
    image: str
    technologies: List[str]
    features: List[str]
    demo_url: str
    github_url: str
    status: str
    timeline: str
    featured: bool = True

# Achievements Models
class Achievement(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    title: str
    description: str
    date: str
    type: str
    icon: str
    impact: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class AchievementCreate(BaseModel):
    title: str
    description: str
    date: str
    type: str
    icon: str
    impact: str

# Contact Models
class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    name: str
    email: str
    subject: str
    message: str
    status: str = "unread"  # 'unread', 'read', 'replied'
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactMessageUpdate(BaseModel):
    status: str

# About Section Model
class AboutSection(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")
    title: str
    description: str
    highlights: List[str]
    stats: List[dict]  # [{label: str, value: str}]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class AboutSectionCreate(BaseModel):
    title: str
    description: str
    highlights: List[str]
    stats: List[dict]