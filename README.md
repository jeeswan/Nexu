# Nexu
Nexu is a social media / networking application (or whatever your intended purpose) enabling users to create profiles, share content, follow each other, like & comment, etc.  

---

## Features

Here are features you might have (or plan):

- User registration / login / authentication  
- User profile (avatar, bio, etc.)  
- Posting content (text, images)  
- Follow / unfollow users  
- Like / comment on posts  
- Feed / timeline  
- Real-time notifications  
- Search / discovery  

---

## Tech Stack

Suggest based on common choices — change to what you used:

| Layer | Tech / Library |
|---|---|
| Backend | Node.js, Express |
| Database | MongoDB (Atlas) |
| Frontend | React / Tailwind |
| Storage | Cloudinary |
| Authentication | JWT |
| Hosting / Deployment |  Render |

---

## Architecture / Flow

High-level:

1. Frontend UI sends requests to backend (REST API)  
2. Backend handles business logic, interacts with DB  
3. For media (images), you upload to storage service (Cloudinary etc.)  
4. Backend issues JWT tokens for authenticated sessions  
5. Users follow each other; feed built from following relationships  

---

