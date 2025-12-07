@echo off
echo ========================================
echo Setting up Git repository and pushing to GitHub
echo ========================================
echo.

cd /d "%~dp0"

echo Step 1: Initializing git repository...
git init
if %errorlevel% neq 0 (
    echo ERROR: Git initialization failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Adding all files...
git add .
if %errorlevel% neq 0 (
    echo ERROR: Failed to add files!
    pause
    exit /b 1
)

echo.
echo Step 3: Creating initial commit...
git commit -m "Initial commit - AI Asmakh project"
if %errorlevel% neq 0 (
    echo ERROR: Failed to create commit!
    pause
    exit /b 1
)

echo.
echo Step 4: Setting branch to main...
git branch -M main
if %errorlevel% neq 0 (
    echo ERROR: Failed to rename branch!
    pause
    exit /b 1
)

echo.
echo Step 5: Setting up remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/priyabanait/AI-Asmakh.git
if %errorlevel% neq 0 (
    echo ERROR: Failed to set remote!
    pause
    exit /b 1
)

echo.
echo Step 6: Verifying remote...
git remote -v

echo.
echo Step 7: Pushing to GitHub...
echo NOTE: You may be prompted for your GitHub username and password/token
echo.
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo SUCCESS! Code has been pushed to GitHub!
    echo ========================================
) else (
    echo.
    echo ========================================
    echo PUSH FAILED!
    echo.
    echo Possible reasons:
    echo 1. GitHub repository does not exist yet
    echo 2. Authentication failed (need GitHub token)
    echo 3. No write permissions to the repository
    echo.
    echo To fix:
    echo - Create the repository on GitHub first: https://github.com/new
    echo - Use a Personal Access Token instead of password
    echo - Make sure you have write access to priyabanait/AI-Asmakh
    echo ========================================
)

echo.
pause
