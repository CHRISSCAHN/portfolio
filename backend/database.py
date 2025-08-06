from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

# MongoDB connection
MONGO_URL = os.environ.get('MONGO_URL')
DB_NAME = os.environ.get('DB_NAME', 'portfolio_db')

client = AsyncIOMotorClient(MONGO_URL)
database = client[DB_NAME]

# Collections
profile_collection = database.get_collection("profiles")
skills_collection = database.get_collection("skills")
projects_collection = database.get_collection("projects")
achievements_collection = database.get_collection("achievements")
contact_collection = database.get_collection("contact_messages")
about_collection = database.get_collection("about_sections")

async def init_database():
    """Initialize database with indexes and constraints"""
    try:
        # Create indexes for better query performance
        await profile_collection.create_index("email", unique=True)
        await projects_collection.create_index([("featured", 1), ("created_at", -1)])
        await achievements_collection.create_index([("date", -1), ("type", 1)])
        await contact_collection.create_index([("status", 1), ("created_at", -1)])
        await skills_collection.create_index("category")
        
        print("Database initialized successfully")
        return True
    except Exception as e:
        print(f"Database initialization error: {e}")
        return False