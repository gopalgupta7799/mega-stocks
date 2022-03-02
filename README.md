Steps for contributors:

1. From "https://github.com/gopalgupta7799/mega-stocks" fork the repo. This will clone repo in your github profile.
2. Create a folder in your PC (for clarity use the name as Mega Stocks).
3. Open this folder in any command shell(PowerShell or cmd or VS Code terminal or git-bash).
4. In the shell type "git clone https://github.com/your-github-username/mega-stocks". This will clone your remote github repo to your local PC. and mega-stocks repo will be created.
5. Open this mega-stocks repo in vs code.
6. In terminal type "npm install" to install all required packages.
7. Add central repo by typing "git remote add gopal https://github.com/gopalgupta7799/mega-stocks.git". 
8. Type "npm start" to run react app.

To reduce commits and keep git log clean follow these steps always:

9. Run "git pull gopal main" to fetch latest commit from central repo.
10. Make your changes, add features, etc. 
11. Add changes to stage by typing "git add ." and then stash your changes by typing "git stash".
12. Again repeat step 9.
13. Pop stash by typing "git stash pop". Resolve conflicts if any.
14. Add files to stage by using "git add ." and then commit changes by typing "git commit -m "Your Commit Message"".
15. Push your changes to your remote repo on github by typing "git push -u origin main".

To merge your changes to central repo:

15. Go to "https://github.com/your-github-username/mega-stocks".
16. Click on "Pull Request" and create a pull request.