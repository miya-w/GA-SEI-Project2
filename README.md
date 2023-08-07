# 202308 GA SEI Project 2 - My Anime List
This project is for General Assembly's Software Engineering Immersive, a full stack project in a week.
![project2](https://github.com/miya-w/GA-SEI-Project2/blob/main/public/images/project2.png)


## Technologies Used
- EJS
- HTML5
- CSS3
- Node
- MongoDB
- Mongoose
## User Stories & Rules

This Web application My Anime List uses CRUD (Create, Read, Update, Delete) functionalities to help users to manage and track the animes.

- Add Animes Adding the anime’s title, and release year, and setting the status(Watching, Watched, Not Start, Skip) into the list to manage the collected animes. The animes’ information can be deleted and updated.
- Animes’s details In Animes’s detail, users can add the characters to the animes, and leave the review and rating.
- Add Characters Users can add the animes’ name and bio.
## Code process

Step 1: Set Up

- Setting up Express-generator

```bash
npx express-generator -e project2
cd project2
# rename app.js to server.js
npm install
git init
touch .env
touch .gitignore
# add .env and node_modules to .gitignore
# visit github.com/new and create a new repo
git add .
git commit -m 'First commit'
# copy git remote && git branch && git push commands from github and paste into the terminal
```
- Create Model, Controllers

- Set the routes

- set the views(EJS)



## Biggest challenge
- Mongoose Delete and Update


## Key learnings/takeaways
- Connect the MongoDB via Mongoose

## Next Steps: Planned future enhancements (icebox items)
- Add Images upload function using [Cloudinary](https://cloudinary.com/)
- Searching function
- Deployment
- Add the animes' genres in new model


### Resources
---
- [project-2-brief](https://git.generalassemb.ly/seir66anz/project-2-brief)
- [How to Use findOneAndUpdate() in Mongoose](https://mongoosejs.com/docs/tutorials/findoneandupdate.html#how-to-use-findoneandupdate-in-mongoose)
- [Express Tutorial Part 4: Routes and controllers](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)