# Lecture 01: Web Development Fundamentals
Course Notes & Study Guide | World Wide Web, Architecture & HTML Basics

---

## 🌳 Lecture Tree Structure

- **Lecture 01: Web Development Fundamentals**
  ├── **1. Introduction & Importance of the World Wide Web (WWW)**
  │   ├── Invention (1989 by Sir Tim Berners-Lee at CERN)
  │   ├── Internet vs. Web (Internet = physical infrastructure, Web = application-level service using HTTP/HTTPS)
  │   ├── Universal Information Access
  │   ├── Economic Driver (Online marketplaces, banking, cloud)[cite: 1]
  │   └── Software Delivery Ecosystem (SaaS platforms inside browsers)[cite: 1]
  │
  ├── **2. Static vs. Dynamic Websites**[cite: 1]
  │   ├── **Static Websites:** Pre-built files, no database, pure HTML/CSS/JS, fast & low cost[cite: 1]
  │   └── **Dynamic Websites:** Generated on the fly, connected to databases (MySQL, MongoDB), backend runtimes (Node.js, Python)[cite: 1]
  │
  ├── **3. Markup Languages vs. Programming Languages**[cite: 1]
  │   ├── **Programming Languages (Python, C++, JS):** Computational logic, control flow, algorithms[cite: 1]
  │   └── **Markup Languages (HTML, XML, Markdown):** Declarative structure, no algorithmic logic, document layout[cite: 1]
  │
  ├── **4. Hypertext Markup Language (HTML)**[cite: 1]
  │   ├── **Core Concepts:** Tags (`<tag>`), Elements (Opening tag + Content + Closing tag), Void Tags (`<br>`, `<img>`), Attributes (`href`, `class`)[cite: 1]
  │   ├── **HTML5 Enhancements:** Semantic tags (`<header>`, `<footer>`), Native Media (`<video>`, `<audio>`), Forms validation, Canvas/SVG[cite: 1]
  │   └── **Governing Bodies:** W3C and WHATWG (Living Standard)[cite: 1]
  │
  ├── **5. Creating an HTML Document & Core File Structure**[cite: 1]
  │   ├── `<!DOCTYPE html>` (Standards Mode)[cite: 1]
  │   ├── `<html lang="en">` (Root container)[cite: 1]
  │   ├── `<head>` (Metadata, title, charset, viewport)[cite: 1]
  │   └── `<body>` (Visible rendered content)[cite: 1]
  │
  └── **6. HTML Editors & File Extensions**[cite: 1]
      ├── **Editors:** VS Code (Industry standard), Sublime Text, WebStorm[cite: 1]
      └── **Conventions:** `.html` extension, The `index.html` default homepage rule[cite: 1]

---

## 📝 Detailed Notes

### 1. Introduction & Importance of the World Wide Web (WWW)
* **Invented:** 1989 by Sir Tim Berners-Lee at CERN[cite: 1].
* **Internet vs. Web:** 
  * *Internet:* Global physical infrastructure (computers, routers, cables, TCP/IP)[cite: 1].
  * *World Wide Web:* Application-level service running over the Internet using HTTP/HTTPS[cite: 1].
* **Key Roles:** Universal information access, economic driver for digital marketplaces, and cloud software delivery[cite: 1].

### 2. Static vs. Dynamic Websites Comparison
* **Static Websites:** Pre-stored files sent directly to the browser. Best for portfolios, landing pages, and resumes[cite: 1].
* **Dynamic Websites:** Generated per request using servers and databases (MySQL, PostgreSQL, MongoDB). Best for e-commerce and social networks[cite: 1].

### 3. Markup vs. Programming Languages
* **Programming Languages:** Execute logic, calculations, and control loops (e.g., Python, Java)[cite: 1].
* **Markup Languages:** Define document structure and layout for browsers using tags (e.g., HTML)[cite: 1].

### 4. HTML Anatomy & Structure
* **Tags & Elements:** 
  ```html
  <p class="summary">Welcome to Web Development.</p>
* ** Detailed Notes **  *
# Lecture 01: Web Development Fundamentals
**Course Notes & Study Guide** | World Wide Web, Architecture & HTML Basics

---

## 🌳 Complete Lecture Tree & Detailed Notes

- **Lecture 01: Web Development Fundamentals**[cite: 1]
  │
  ├── **1. Introduction & Importance of the World Wide Web (WWW)**[cite: 1]
  │   ├── **Definition & Invention:** Invented in 1989 by Sir Tim Berners-Lee while working at CERN[cite: 1]. It is an information system where digital documents, media, and resources are identified by URLs, interlinked via hypertext, and accessed over the Internet[cite: 1].
  │   ├── **Internet vs. Web:** 
  │   │   ├── *The Internet:* The global underlying physical infrastructure (computers, routers, data centers, fiber-optic cables, hardware using protocols like TCP/IP)[cite: 1].
  │   │   └── *The World Wide Web:* An application-level service operating on top of the Internet using protocols like HTTP and HTTPS[cite: 1].
  │   ├── **Universal Information Access:** Provides universal, barrier-free access to educational materials, global research, news, and institutional knowledge[cite: 1].
  │   ├── **Economic Driver:** Powers global online marketplaces, financial networks, digital banking, and cloud platforms[cite: 1].
  │   └── **Software Delivery Ecosystem:** Applications that once required local machine installations (SaaS platforms, office suites, design software) now execute natively inside web browsers[cite: 1].
  │
  ├── **2. Static vs. Dynamic Websites**[cite: 1]
  │   ├── **Dimension / Comparison Table:**
  │   │   ├── **Content Delivery:** Static (Pre-built files sent exactly as stored) vs. Dynamic (Generated on the fly per request/session)[cite: 1].
  │   │   ├── **Data Storage:** Static (No active database; flat HTML/CSS/media) vs. Dynamic (Connected to relational/NoSQL databases like MySQL, PostgreSQL, MongoDB)[cite: 1].
  │   │   ├── **Technology Stack:** Static (Pure HTML5, CSS3, JS, or Static Site Generators) vs. Dynamic (Server-side runtimes like Python, Node.js, PHP, Java + Database + Frontend)[cite: 1].
  │   │   ├── **Processing Location:** Static (Parsed/executed solely on client's browser) vs. Dynamic (Business logic runs on server; generated HTML returned to client)[cite: 1].
  │   │   ├── **Performance & Cost:** Static (Extremely fast, cacheable on CDNs, minimal overhead) vs. Dynamic (Requires database queries, compute resources, caching)[cite: 1].
  │   │   └── **Best Use Cases:** Static (Portfolios, product documentation, landing pages, resumes) vs. Dynamic (Social networks, e-commerce stores, web applications, portals)[cite: 1].
  │   │
  │   ├── **Deep Dive into Static Websites:** 
  │   │   * Files do not change unless manually edited and re-uploaded. Extremely secure and fast.
  │   └── **Deep Dive into Dynamic Websites:** 
  │       * Content updates dynamically based on user interaction, database changes, or real-time data fetching.
  │
  ├── **3. Markup Languages vs. Programming Languages**[cite: 1]
  │   ├── **Programming Languages (e.g., Python, C++, Java, JavaScript):**
  │   │   ├── *Computational Logic:* Execute algorithms, calculations, and memory state management[cite: 1].
  │   │   └── *Control Flow:* Contain control flow statements (`if/else`, `switch`), loops (`for`, `while`), functions, and variable storage[cite: 1].
  │   └── **Markup Languages (e.g., HTML, XML, Markdown):**
  │       ├── *Declarative Structure:* Use tags/formatting syntax to describe the structure, hierarchy, and presentation of information[cite: 1].
  │       ├── *No Algorithmic Logic:* Do not contain mathematical operators, conditional branching, or loops[cite: 1].
  │       └── *Document Layout:* Act as an instruction manual for rendering engines (browsers/parsers) indicating what each piece of text represents[cite: 1].
  │
  ├── **4. Hypertext Markup Language (HTML)**[cite: 1]
  │   ├── **Etymology:**
  │   │   ├── *Hypertext:* Text containing clickable hyperlinks allowing instant navigation between documents/sections[cite: 1].
  │   │   └── *Markup:* Standardized system of annotations/tags defining how raw content should be interpreted and displayed[cite: 1].
  │   ├── **Core Concepts (Tags, Elements, Attributes):**
  │   │   ├── *Tags:* Syntax keywords enclosed in angle brackets, mostly in pairs (`<tag>` and `</tag>`)[cite: 1].
  │   │   ├── *Elements:* Complete building block containing opening tag, attributes, inner content, and closing tag[cite: 1].
  │   │   │   ```html
  │   │   │   <!-- Anatomy of an HTML Element -->
  │   │   │   <p class="summary">Welcome to Web Development.</p>
  │   │   │   <!-- |__ Opening Tag __|  |______ Content ______|      |_ Closing Tag _| -->
  │   │   │   ```[cite: 1]
  │   │   ├── *Void / Empty Tags:* Elements containing no content and no closing tag (e.g., `<br>`, `<hr>`, `<img>`, `<meta>`, `<input>`)[cite: 1].
  │   │   └── *Attributes:* Modifiers placed inside opening tags specifying metadata or behavior using `name="value"` syntax[cite: 1].
  │   │       ```html
  │   │       <a href="[https://example.com](https://example.com)" target="_blank" rel="noopener">Visit Resource</a>
  │   │       <!-- "href", "target", and "rel" are attributes with assigned values -->
  │   │       ```[cite: 1]
  │   ├── **HTML5 Enhancements & Evolution:**
  │   │   ├── *Semantic Tags:* Replaced generic `<div>` containers with purposeful tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`[cite: 1].
  │   │   ├── *Built-in Media:* Native `<video>` and `<audio>` elements eliminated dependency on insecure third-party browser plugins (like Adobe Flash)[cite: 1].
  │   │   ├── *Advanced Form Controls:* Built-in client-side validation types (`email`, `number`, `url`, `date`) and constraints (`required`, `min`, `max`, `pattern`)[cite: 1].
  │   │   └── *Vector Graphics & Canvas:* The `<canvas>` API and inline `<svg>` support dynamic 2D/3D graphics and data visualization directly within web pages[cite: 1].
  │   └── **HTML Standards & Governing Bodies:**
  │       ├── *World Wide Web Consortium (W3C):* Founded by Tim Berners-Lee to develop long-term open web standards and protocols[cite: 1].
  │       └── *WHATWG:* Founded in 2004 by Apple, Mozilla, and Opera. Maintains HTML as a continuously evolving 'Living Standard' rather than static snapshot versions (like HTML4, HTML5)[cite: 1].
  │
  ├── **5. Creating an HTML Document & Core File Structure**[cite: 1]
  │   ├── **Standard Document Skeleton:**
  │   │   ```html
  │   │   <!DOCTYPE html>
  │   │   <html lang="en">
  │   │   <head>
  │   │       <meta charset="UTF-8">
  │   │       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  │   │       <title>Lecture 01 - Web Fundamentals</title>
  │   </head>
  │   <body>
  │       <h1>Welcome to Web Development</h1>
  │       <p>This is the visible content area of the document.</p>
  │   </body>
  │   </html>
  │   ```[cite: 1]
  │   └── **Structural Component Breakdown:**
  │       ├── `<!DOCTYPE html>`: Document type declaration instructing modern browsers to render using Standards Mode instead of legacy Quirks Mode[cite: 1].
  │       ├── `<html lang="en">`: Root container encapsulating all HTML. `lang` attribute clarifies language for screen readers and search bots[cite: 1].
  │       ├── `<head>`: Holds metadata, document titles, character sets, and external stylesheet/script linkages (not displayed in viewport)[cite: 1].
  │       ├── `<meta charset="UTF-8">`: Enables Unicode encoding, ensuring correct display of international characters, symbols, and emojis[cite: 1].
  │       ├── `<meta name="viewport" ...>`: Configures viewport width and initial zoom scale for responsive mobile screen rendering[cite: 1].
  │       ├── `<title>`: Sets document title displayed on browser tab bars, bookmarks, and search engine SERP listings[cite: 1].
  │       └── `<body>`: Container for all rendered content visible to end users (headings, paragraphs, media, interactive controls)[cite: 1].
  │
  └── **6. HTML Editors & File Extensions**[cite: 1]
      ├── **HTML Code Editors:**
      │   ├── *Professional IDEs & Code Editors:* Visual Studio Code (industry standard), Sublime Text, JetBrains WebStorm. Offer syntax highlighting, linting, code snippets (Emmet), live reload, and Git integration[cite: 1].
      │   └── *Basic Text Editors:* Notepad (Windows), TextEdit (macOS - Plain Text mode), Nano/Vim (Linux). Functional for basic edits but lack modern developer tooling[cite: 1].
      └── **File Extensions & Server Conventions:**
          ├── *Extensions (.html vs .htm):* Standard file extension is `.html`. The shorter `.htm` extension remains supported[cite: 1].
          └── *The index.html Rule:* Web servers (Apache, Nginx, LiteSpeed, Caddy) automatically serve `index.html` as the default homepage when a directory URL is requested without specifying a filename (e.g., navigating to `https://mysite.com/` resolves directly to `https://mysite.com/index.html`)
