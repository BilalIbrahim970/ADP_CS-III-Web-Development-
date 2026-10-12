# 📚 Lecture 01: Web Development Fundamentals
> **Course:** Web Development  
> **Topic:** World Wide Web, Architecture & HTML Basics  
> **Format:** Detailed Study Notes & Reference Guide

---

## 🌳 Quick Lecture Mind-Map / Navigation Tree

- 📁 **Lecture 01: Web Fundamentals**[cite: 1]
  - 📌 **1. World Wide Web (WWW)**[cite: 1]
    - 💡 *Invention & History*[cite: 1]
    - ⚖️ *Internet vs. Web*[cite: 1]
    - 🌐 *Importance & Impact*[cite: 1]
  - 📌 **2. Website Architectures**[cite: 1]
    - 📄 *Static Websites*[cite: 1]
    - ⚙️ *Dynamic Websites*[cite: 1]
    - 📊 *Comprehensive Comparison Table*[cite: 1]
  - 📌 **3. Language Classifications**[cite: 1]
    - 💻 *Programming Languages*[cite: 1]
    - 🏷️ *Markup Languages*[cite: 1]
  - 📌 **4. Hypertext Markup Language (HTML)**[cite: 1]
    - 🧱 *Anatomy: Tags, Elements, Attributes & Void Tags*[cite: 1]
    - 🚀 *HTML5 Modern Features*[cite: 1]
    - 🏛️ *Standards & Bodies (W3C vs WHATWG)*[cite: 1]
  - 📌 **5. Document Structure & Skeleton**[cite: 1]
    - 📝 *Standard Boilerplate Code*[cite: 1]
    - 🔍 *Deep Dive into Structural Tags*[cite: 1]
  - 📌 **6. Tooling & Server Conventions**[cite: 1]
    - 🛠️ *Code Editors (IDEs)*[cite: 1]
    - 📂 *Extensions & `index.html` Default Rule*[cite: 1]

---

## 📖 Detailed Lecture Notes

### 1. Introduction & Importance of the World Wide Web (WWW)

#### 🔹 Key Definitions
> 📌 **World Wide Web (WWW):** An information system invented in **1989** by **Sir Tim Berners-Lee** at **CERN**[cite: 1]. It allows digital documents, media, and resources to be identified by **URLs**, interlinked via **hypertext links**, and accessed globally over the Internet[cite: 1].

> 📌 **The Internet:** The global **underlying physical infrastructure** comprising hardware such as computers, routers, data centers, fiber-optic cables, and networking equipment interconnected via protocols like **TCP/IP**[cite: 1].

#### ⚖️ Critical Distinction: Internet vs. Web
| Feature | 🌐 The Internet | 🕸️ World Wide Web (WWW) |
| :--- | :--- | :--- |
| **Nature** | Hardware & Physical Infrastructure[cite: 1] | Software Application & Service Layer[cite: 1] |
| **Protocols** | TCP/IP, UDP, IP[cite: 1] | HTTP, HTTPS[cite: 1] |
| **Function** | Connects millions of computers together[cite: 1] | Connects pages/documents using Hypertext[cite: 1] |

#### 🚀 Importance of the WWW
* 🎓 **Universal Information Access:** Provides barrier-free access to global educational material, research papers, and institutional knowledge[cite: 1].
* 💼 **Economic Driver:** Powers global online marketplaces, financial systems, digital banking, and cloud platforms[cite: 1].
* 💻 **Software Delivery Ecosystem:** Modern applications now execute natively inside browsers as **SaaS (Software as a Service)** without needing local installation[cite: 1].

---

### 2. Static vs. Dynamic Websites

#### 📑 1. Static Websites
* **Definition:** Content is delivered to the user's browser **exactly as stored** on the server disk[cite: 1].
* **Data Storage:** Uses flat files (`.html`, `.css`, `.js`, images) without an active database[cite: 1].
* **Processing:** Parsed and rendered **solely on the client's browser**[cite: 1].
* **Best Uses:** Portfolios, resumes, landing pages, documentation[cite: 1].

#### ⚡ 2. Dynamic Websites
* **Definition:** Content is **generated on the fly** per user request based on user state, database queries, or user session[cite: 1].
* **Data Storage:** Connected to Relational or NoSQL databases (**MySQL, PostgreSQL, MongoDB**)[cite: 1].
* **Processing:** Business logic runs on the **server side** (Node.js, Python, PHP, Java) before returning clean HTML to the browser[cite: 1].
* **Best Uses:** Social networks, e-commerce stores, web portals, SaaS apps[cite: 1].

#### 📊 Summary Comparison Table
| Dimension | 📄 Static Websites | ⚡ Dynamic Websites |
| :--- | :--- | :--- |
| **Content Delivery** | Pre-built fixed files[cite: 1] | Generated dynamically per request[cite: 1] |
| **Database** | No database layer[cite: 1] | Connected to active databases[cite: 1] |
| **Tech Stack** | HTML5, CSS3, Client JS[cite: 1] | Server Runtimes (Node/Python/PHP) + DB + Frontend[cite: 1] |
| **Performance** | Extremely fast, cacheable on CDNs[cite: 1] | Requires server computing & DB queries[cite: 1] |

---

### 3. Markup Languages vs. Programming Languages

#### 💻 Programming Languages
> **Examples:** `Python`, `C++`, `Java`, `JavaScript`[cite: 1]

* **Computational Logic:** Designed to process algorithms, mathematical calculations, and manage memory state[cite: 1].
* **Control Flow:** Contains branching statements (`if/else`, `switch`), iteration loops (`for`, `while`), functions, and variables[cite: 1].

#### 🏷️ Markup Languages
> **Examples:** `HTML`, `XML`, `Markdown`[cite: 1]

* **Declarative Structure:** Uses tags and annotations to describe document structure, layout, and hierarchy[cite: 1].
* **No Algorithmic Logic:** **Does NOT** contain loops, mathematical operations, or conditional branching[cite: 1].
* **Rendering Rules:** Acts as an instruction manual for rendering engines (browsers) on how to present text/media[cite: 1].

---

### 4. Hypertext Markup Language (HTML)

#### 🔍 Name Breakdown
* **Hypertext:** Text containing clickable hyperlinks that allow instant navigation between documents[cite: 1].
* **Markup:** A standardized set of tags that define how content should be formatted and rendered[cite: 1].

#### 🧱 Anatomy of an HTML Element

```html
<!-- Complete Building Block: Element -->
<p class="summary">Welcome to Web Development.</p>
│  │             │└──────── Content ────────┘│
│  │             └─ Attribute Value          └─ Closing Tag
│  └─ Attribute Name
└─ Opening Tag
```[cite: 1]

#### 🗝️ Core Terminology
1. **Tag:** Syntax keywords inside angle brackets (e.g., `<p>` and `</p>`)[cite: 1].
2. **Element:** The complete structure including the opening tag, attributes, content, and closing tag[cite: 1].
3. **Attributes:** Name-value pairs added to opening tags to provide metadata or customize behavior (e.g., `href="URL"`, `class="box"`)[cite: 1].
4. **Void / Empty Tags:** Tags that do not hold content and do not have a closing tag[cite: 1].
   * **Examples:** `<br>`, `<hr>`, `<img>`, `<meta>`, `<input>`[cite: 1].

#### 🌟 HTML5 Key Improvements
* 🏷️ **Semantic Tags:** Replaced generic `<div>` elements with structural tags: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`[cite: 1].
* 🎬 **Native Media:** Built-in `<video>` and `<audio>` elements eliminated reliance on third-party plugins like Flash[cite: 1].
* 📝 **Form Validation:** Added native input types (`email`, `number`, `url`, `date`) and constraints (`required`, `pattern`)[cite: 1].
* 🎨 **Graphics:** Native support for dynamic graphics via `<canvas>` API and vector drawings using inline `<svg>`[cite: 1].

#### 🏛️ Governing Bodies
* **W3C (World Wide Web Consortium):** Founded by Tim Berners-Lee to establish web protocols and standards[cite: 1].
* **WHATWG:** Founded by Apple, Mozilla, and Opera[cite: 1]. Maintains HTML as an evolving **"Living Standard"**[cite: 1].

---

### 5. Creating an HTML Document & Core Skeleton

#### 📝 Standard HTML Boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lecture 01 - Web Fundamentals</title>
</head>
<body>
    <h1>Welcome to Web Development</h1>
    <p>This is the visible content area of the document.</p>
</body>
</html>
```[cite: 1]

#### 🔍 Structural Component Breakdown
* `<!DOCTYPE html>`: Declares document type; forces browsers to use **Standards Mode** instead of legacy Quirks Mode[cite: 1].
* `<html lang="en">`: Root element wrapping all HTML code[cite: 1]. The `lang` attribute helps search engines and screen readers[cite: 1].
* `<head>`: Container for document metadata, charset declarations, viewport setups, and external linkages (not visible on webpage)[cite: 1].
* `<meta charset="UTF-8">`: Enables **Unicode (UTF-8)** character encoding for international text, symbols, and emojis[cite: 1].
* `<meta name="viewport" ...>`: Configures viewport width and scale for **responsive mobile rendering**[cite: 1].
* `<title>`: Sets title shown on browser tabs and search engine results[cite: 1].
* `<body>`: Contains all user-visible page content (headings, text, images, buttons)[cite: 1].

---

### 6. HTML Editors & Server Conventions

#### 🛠️ Code Editors
* **Professional IDEs:** Visual Studio Code (VS Code - Industry Standard), Sublime Text, JetBrains WebStorm[cite: 1].
* **Features:** Syntax highlighting, Emmet shortcuts, linting, live server preview, and Git integration[cite: 1].

#### 📂 File Extensions & Default Serving Rule
* **Extensions:** Standard file extension is `.html` (legacy `.htm` is also supported)[cite: 1].
* 📌 **The `index.html` Rule:** Web servers (Apache, Nginx, Caddy) automatically serve `index.html` as the default home page whenever a root directory URL is accessed[cite: 1].
  * *Example:* Browsing `https://example.com/` automatically loads `https://example.com/index.html`[cite: 1].

---
