# Team Member Guide: Adding Your Info to "About Us"

This guide walks team members through how to add their profile picture, bio, role, and project ownership details to the **About Us** page.

---

## Quick Steps Overview

1. **Add your profile photo** to `frontend/public/profile_images/`.
2. **Update your member details** in `frontend/src/pages/AboutUs.jsx`.
3. **Verify locally** by running the frontend dev server.

---

## Step 1: Add Your Profile Photo

1. Choose a clear photo of yourself (square or portrait aspect ratio works best).
2. Name the image using camelCase or PascalCase with your name (e.g., `JaneDoe.jpeg` or `JaneDoe.png`).
3. Save the image inside:
   ```text
   frontend/public/profile_images/
   ```

> [!TIP]
> The profile image is automatically styled into a circle avatar (`95px × 95px`) positioned at the top-right of your card. If you don't have a photo ready yet, set `image: null` and your card will automatically display your first initial instead.

---

## Step 2: Update Your Information in `AboutUs.jsx`

Open [AboutUs.jsx](frontend/src/pages/AboutUs.jsx) located at:
```text
frontend/src/pages/AboutUs.jsx
```

Find the `teamMembers` array near the top of the file:

```javascript
const teamMembers = [
    {
        name: "Isaac Padilla",
        role: "Software Engineer",
        bio: "Isaac is a full-stack software engineer with experience in web development, database management, and cloud computing. He is passionate about building scalable and efficient software solutions.",
        ownership: "I am responsible for the front-end development, database management, and cloud computing aspects of the project.",
        image: "/profile_images/IsaacPadilla.jpeg",
    },
    {
        name: "Team Member 2",
        role: "Role / Position",
        bio: "Short bio about this team member goes here.",
        ownership: "Project responsibility goes here.",
        image: null,
    },
    // ...
];
```

### Fields to Fill Out

| Field | Type | Description | Example |
|---|---|---|---|
| `name` | `string` | Your full name | `"Jane Doe"` |
| `role` | `string` | Your role or title on the team | `"Backend Engineer"` |
| `bio` | `string` | A short biography (background, interests, skills) | `"Jane is a computer science student specializing in distributed systems and REST APIs..."` |
| `ownership` | `string` | The specific area of the project you are responsible for | `"Responsible for authentication, database schema design, and API endpoint integration."` |
| `image` | `string \| null` | Absolute path relative to `public/` or `null` | `"/profile_images/JaneDoe.jpeg"` |

### Example

Replace one of the placeholder entries (e.g., `Team Member 2`) with your details:

```javascript
{
    name: "Jane Doe",
    role: "Backend Engineer",
    bio: "Jane is passionate about system design, databases, and microservices. She enjoys architecting robust backend APIs and data pipelines.",
    ownership: "Responsible for backend architecture, REST API design, and database integration.",
    image: "/profile_images/JaneDoe.jpeg",
},
```

---

## Step 3: Verify Locally

1. Open your terminal and change into the frontend directory:
   ```bash
   cd frontend
   ```
2. Start the development server (if not already running):
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5173/about-us
   ```
4. Verify:
   - Your name, role, bio, and ownership appear correctly.
   - Your image renders properly in the circular avatar at the top right.
   - The card looks good in both light and dark mode.
   - Run `npm run build` in `frontend/` to make sure there are no syntax or build errors.

---

## Step 4: Commit and Push to Main

Pull the latest changes from `main`, stage your files, commit, and push:

```bash
git pull origin main
git add frontend/public/profile_images/<your-photo> frontend/src/pages/AboutUs.jsx
git commit -m "Add profile information for <Your Name>"
git push origin main
```

---

## Adding Your Individual Contributions for Sprint 1

Each team member has a dedicated section under **Sprint 1 &rarr; Individual Contributions** (`#individual-contributions`).

### Quick Steps:

1. Open [Sprint1.jsx](frontend/src/pages/Sprint1.jsx):
   ```text
   frontend/src/pages/Sprint1.jsx
   ```

2. Locate the `individualContributions` array right at the top of the file.

3. Find your entry (e.g., `Karina Rivera`, `Juan Reyna`, `Jonathan Hernandez`, or `Ricardo Morales Perez`).

4. Add your bullet points to the `items` array under each category:
   - **Business Strategy**
   - **Front-End Development**
   - **Market Research**
   - **Additional Contributions**

### How to format items:

- **Simple bullet point:**
  ```javascript
  items: [
      "Wrote the Strategy-to-Project Chain section.",
      "Conducted 5 user interviews.",
  ]
  ```

- **Bullet point with sub-bullets:**
  ```javascript
  items: [
      {
          text: "Collaborated with team to brainstorm Project Charter’s Business Objective section.",
          subItems: [
              "Gathered and organized the team’s ideas into a structured section.",
          ],
      },
  ]
  ```

5. Save and check your changes locally at `http://localhost:5173/sprint-1#individual-contributions`.

6. Commit and push:
   ```bash
   git add frontend/src/pages/Sprint1.jsx
   git commit -m "Add Sprint 1 individual contributions for <Your Name>"
   git push origin main
   ```

