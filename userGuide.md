# Chapter One Portfolio Website - User Guide

**Website URL:** Available after deployment via the Publish button  
**Purpose:** Professional portfolio website showcasing web development services, case studies, and interactive demos  
**Access:** Public website with admin database access for managing submissions

---

## Powered by Manus

Your Chapter One portfolio website is built with cutting-edge web technologies designed for performance, scalability, and user experience. The frontend leverages **React 19** with **TypeScript** for type-safe component development, styled with **Tailwind CSS 4** for a modern, responsive design system. The backend runs on **Express 4** with **tRPC 11** for end-to-end type safety, connected to a **MySQL/TiDB** database via **Drizzle ORM**. Interactive features utilize **React Day Picker** for calendar functionality and **Recharts** for data visualization. User authentication is handled through **Manus OAuth**, providing secure access control. **Deployment** is managed through auto-scaling infrastructure with global CDN for optimal performance worldwide.

---

## Using Your Website

Your portfolio website features seven main sections accessible through the top navigation. The **Homepage** welcomes visitors with a compelling hero section, services overview, and featured projects. Click "Start Your Project" to navigate directly to the contact form, or "View Live Demos" to explore interactive demonstrations. The **Services** page details twelve comprehensive service offerings from custom web development to deployment and DevOps. Each service card expands on hover to highlight key features and benefits. The **Portfolio** page showcases real client success stories with measurable results. Featured case studies display challenge-solution-results format with technology stack details. The **Live Demos** page is your most powerful sales tool, featuring two fully functional demonstrations. Click the "Booking System" tab to interact with a calendar-based appointment scheduler complete with service selection, time slot booking, and confirmation workflow. Switch to the "Analytics Dashboard" tab to explore interactive charts, KPI cards, and customer data tables that update based on time range selection. The **Contact** page includes a submission form that stores inquiries in your database for follow-up. The **About** and **Blog** pages provide additional context about your agency and industry insights.

---

## Managing Your Website

Access the **Management UI** by clicking the panel icon in the top-right corner of the chatbox interface. The **Preview** panel displays your live development server with persistent login states for testing authenticated features. Use the **Code** panel to browse the complete file structure and download all project files when needed. The **Database** panel provides a full CRUD interface for managing data. View and manage contact form submissions in the "contact_submissions" table and booking demo entries in the "booking_demos" table. Connection details appear in the bottom-left settings menu—remember to enable SSL when connecting external database clients. The **Dashboard** panel becomes available after publishing and shows website analytics including unique visitors and page views. The **Settings** panel contains multiple sub-sections. In "General," update your website name and logo by modifying VITE_APP_TITLE and VITE_APP_LOGO environment variables. The "Domains" section allows you to customize your auto-generated manus.space subdomain or bind a custom domain. Use the "Secrets" section to view, edit, or delete existing environment variables securely. When you're ready to deploy, click the **Publish** button in the Management UI header after creating a checkpoint.

---

## Next Steps

Talk to Manus AI anytime to request changes or add features. You can customize the portfolio case studies with your actual client work, update service descriptions to match your specific offerings, or add new pages for testimonials or pricing. The interactive demos are fully functional and can be extended with additional features like payment integration, email notifications, or calendar syncing. Consider adding a blog content management system to regularly publish industry insights and improve SEO performance.

