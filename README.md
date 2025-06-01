# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Add README.md"

# Connect to your GitHub repository (replace URL with your repo link)
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git push -u origin master  # or `main`, depending on your default branch

# If you're already connected to GitHub:
# Just add and push
git add README.md
git commit -m "Add README.md"
git push

[watch demo ](https://drive.google.com/file/d/1WHh4CNPgYHgXEnwiF-RDP2wNcs0tCf1X/view?usp=drive_link)