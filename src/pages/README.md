# Details

- **Directory Name** - pages
- **Details** - separate pages that will appear on different URL paths
- **Files** :
  - _404_ - custom 404 (NotFound) page
    - **used in** - Routes/Routes
    - **path** - /\* (all paths except defined ones)
  - _home_ - home page after successful login
    - **used in** - Routes/Routes
    - **path** - /
  - _login_ - landing or login page
    - **used in** - Routes/Routes
    - **path** - /login

<br />

> **Note** - unlike components pages should not contain folders (preference not necessity) following the Next.js and Gatsby pattern.  
> Styles for pages are stores in styles/PageStyles folder
