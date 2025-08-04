const allAgents = [
    // Core Business Operations (Workflow & Integration)
    {
        "name": "Workflow Automation Agent",
        "category": "Business Operations",
        "icon": "settings",
        "description": "A no-code agent that orchestrates multi-step workflows, connecting various systems to automate end-to-end business processes.",
        "useCases": [
            "Build custom automated workflows without code",
            "Integrate disparate systems and data sources",
            "Automate tasks and processes based on triggers"
        ],
        "relatedSystems": "Engini platform, ERP, HRIS, CRM, SaaS apps"
    },
    {
        "name": "Data Synchronization Agent",
        "category": "Business Operations",
        "icon": "database",
        "description": "Ensures real-time data consistency across all connected applications and databases, eliminating manual data entry and errors.",
        "useCases": [
            "Synchronize customer data between CRM and ERP",
            "Update inventory levels across e-commerce and a warehouse system",
            "Maintain a single source of truth for all business data"
        ],
        "relatedSystems": "Engini platform, ERP, CRM, Databases, SaaS apps"
    },
    {
        "name": "Business Rule Enforcement Agent",
        "category": "Business Operations",
        "icon": "gavel",
        "description": "Automates the application of company-wide policies and business rules to ensure processes are compliant and standardized.",
        "useCases": [
            "Validate data entries against business policies",
            "Ensure expense reports adhere to company guidelines",
            "Automate approval flows based on predefined criteria"
        ],
        "relatedSystems": "Engini platform, CRM, ERP, HRIS, internal policy documents"
    },
    {
        "name": "Custom Application Agent",
        "category": "Business Operations",
        "icon": "app-window",
        "description": "Creates and manages custom, internal-facing applications to streamline departmental processes, all built using a no-code interface.",
        "useCases": [
            "Build an internal project management tool",
            "Create a custom form for new hire requests",
            "Develop a dashboard to track key metrics"
        ],
        "relatedSystems": "Engini platform, dynamic tables, custom UI"
    },
    {
        "name": "Webhooks & API Integrator",
        "category": "Business Operations",
        "icon": "code",
        "description": "A technical agent that handles custom API calls and webhooks, enabling integration with any external system or service.",
        "useCases": [
            "Connect to a non-standard third-party application",
            "Receive real-time data from a custom sensor or device",
            "Automate actions triggered by events in external systems"
        ],
        "relatedSystems": "REST APIs, GraphQL, Webhooks, custom services"
    },
    // Finance Automation
    {
        "name": "Financial Data Extraction Agent",
        "category": "Finance Automation",
        "icon": "dollar-sign",
        "description": "Extracts key financial data from invoices and receipts, and accurately transfers it to accounting systems, reducing manual data entry errors.",
        "useCases": [
            "Automate data entry for invoices and receipts",
            "Streamline the accounts payable process",
            "Ensure accuracy in financial record-keeping"
        ],
        "relatedSystems": "SAP, Oracle, QuickBooks, OCR tools, Engini platform"
    },
    {
        "name": "Expense Management Agent",
        "category": "Finance Automation",
        "icon": "banknote-arrow-down",
        "description": "Automates the expense reporting and approval process, checking reports against company policy and routing them for approval.",
        "useCases": [
            "Streamline expense reporting for employees",
            "Automate policy compliance checks",
            "Route expense reports for automatic approval"
        ],
        "relatedSystems": "Concur, Expensify, ERP systems, Engini platform"
    },
    {
        "name": "Payroll Automation Agent",
        "category": "Finance Automation",
        "icon": "dollar-sign",
        "description": "Manages payroll processes by integrating with HRIS and payroll systems, ensuring accurate and timely payments.",
        "useCases": [
            "Automate salary and benefit calculations",
            "Generate and distribute payslips",
            "Handle payroll tax compliance"
        ],
        "relatedSystems": "SAP HR, Oracle HCM, Workday, payroll systems, Engini platform"
    },
    {
        "name": "Billing & Invoicing Agent",
        "category": "Finance Automation",
        "icon": "receipt",
        "description": "Automates the generation and delivery of invoices to customers, tracks payment statuses, and sends automated reminders for overdue payments.",
        "useCases": [
            "Generate invoices from sales orders",
            "Automate payment tracking and reconciliation",
            "Send automated payment reminders"
        ],
        "relatedSystems": "CRM, ERP, QuickBooks, invoicing software, Engini platform"
    },
    {
        "name": "Fraud Detection Agent (Financial)",
        "category": "Finance Automation",
        "icon": "credit-card",
        "description": "Monitors financial transactions to detect suspicious patterns that may indicate fraud and alerts the finance team for review.",
        "useCases": [
            "Flag unusual transactions",
            "Identify fraudulent activity in real-time",
            "Reduce financial losses due to fraud"
        ],
        "relatedSystems": "Core Banking systems, CRM, transaction monitoring software, Engini platform"
    },
    // HR & People Ops
    {
        "name": "Employee Onboarding Agent",
        "category": "HR & IT Automation",
        "icon": "user-plus",
        "description": "Manages the end-to-end process of onboarding new employees, from creating accounts to scheduling meetings and preparing equipment.",
        "useCases": [
            "Coordinate onboarding tasks across departments",
            "Ensure all new hire tasks are completed consistently",
            "Reduce manual administrative work for HR and IT"
        ],
        "relatedSystems": "Workday, SAP SuccessFactors, IT provisioning tools, Engini platform"
    },
    {
        "name": "Employee Offboarding Agent",
        "category": "HR & IT Automation",
        "icon": "user-minus",
        "description": "Automates the complex process of offboarding, ensuring all tasks like account deactivation and asset retrieval are completed in a timely, secure, and compliant manner.",
        "useCases": [
            "Deactivate user accounts and system access",
            "Notify relevant departments of offboarding",
            "Initiate asset retrieval workflows"
        ],
        "relatedSystems": "Workday, Okta, Active Directory, IT provisioning tools, Engini platform"
    },
    {
        "name": "Leave Management Agent",
        "category": "HR & People Ops",
        "icon": "users",
        "description": "Serves as a central service point for managing employee leave requests, checking leave balances, and updating company calendars.",
        "useCases": [
            "Check employee leave balances on-demand",
            "Handle leave requests and approvals",
            "Update company calendars automatically"
        ],
        "relatedSystems": "Workday, BambooHR, Outlook/Google Calendar, Engini platform"
    },
    {
        "name": "HR Policy Q&A Agent",
        "category": "HR & People Ops",
        "icon": "users",
        "description": "Provides employees with immediate and consistent answers to questions about company policies and benefits, based on official documents.",
        "useCases": [
            "Answer questions about company policies and benefits",
            "Retrieve personalized employee benefit details",
            "Ensure consistent interpretation of company rules"
        ],
        "relatedSystems": "HR Portals, internal knowledge bases, SharePoint, Engini platform"
    },
    {
        "name": "Performance Review Agent",
        "category": "HR & People Ops",
        "icon": "users",
        "description": "Automates the performance review process by sending reminders, collecting feedback from multiple sources, and generating reports for managers.",
        "useCases": [
            "Automate performance review reminders",
            "Collect 360-degree feedback from colleagues",
            "Generate performance reports and summaries"
        ],
        "relatedSystems": "HRIS, performance management software, Engini platform"
    },
    // IT Support & Operations
    {
        "name": "IT Helpdesk Agent",
        "category": "IT Support",
        "icon": "message-circle-question-mark",
        "description": "Serves as a first-line support system for employees, providing immediate answers to common IT, HR, and procedural questions based on internal knowledge bases.",
        "useCases": [
            "Instant answers for IT and HR questions",
            "Reduce ticket volume for support teams",
            "Maintain a consistent source of truth for company information"
        ],
        "relatedSystems": "SharePoint, Confluence, Microsoft Teams, Slack, Engini platform"
    },
    {
        "name": "Password Reset Agent",
        "category": "IT Support",
        "icon": "key",
        "description": "Handles password reset requests for various systems and applications autonomously, without the need for human intervention.",
        "useCases": [
            "Automated password resets for employees",
            "Reduce routine support tickets",
            "Ensure compliance with security policies"
        ],
        "relatedSystems": "Active Directory, Azure AD, Okta, Service Desk systems, Engini platform"
    },
    {
        "name": "Access Provisioning Agent",
        "category": "IT Support",
        "icon": "user-check",
        "description": "Streamlines and automates the process of managing user accounts and access permissions across the organization's systems.",
        "useCases": [
            "Automate user account creation and management",
            "Grant or revoke access for new/leaving employees",
            "Ensure security compliance for all users"
        ],
        "relatedSystems": "Azure AD, Okta, Salesforce, GitHub, Office 365, Engini platform"
    },
    {
        "name": "Ticket Triage & Routing Agent",
        "category": "IT Support",
        "icon": "ticket",
        "description": "Automatically classifies incoming support requests, identifies their topic and urgency, and routes them to the appropriate team.",
        "useCases": [
            "Automatically categorize and prioritize tickets",
            "Route requests to the right specialist or department",
            "Provide automated responses for common issues"
        ],
        "relatedSystems": "ServiceNow, Zendesk, Salesforce, NLP tools, Engini platform"
    },
    {
        "name": "IT Asset Management Agent",
        "category": "IT Operations",
        "icon": "cpu",
        "description": "Tracks the lifecycle of IT assets (hardware and software), monitors their status, and alerts stakeholders about upcoming renewals or maintenance.",
        "useCases": [
            "Monitor hardware and software assets",
            "Track warranty and license expiration dates",
            "Manage proactive inventory alerts"
        ],
        "relatedSystems": "ServiceNow CMDB, Microsoft Intune, Kandji, Engini platform"
    },
    // Sales & Marketing
    {
        "name": "Lead Nurturing Agent",
        "category": "Sales & Marketing",
        "icon": "megaphone",
        "description": "Automates the process of nurturing leads by sending personalized content, follow-up emails, and reminders based on their engagement level.",
        "useCases": [
            "Send automated drip campaigns to leads",
            "Score leads based on their activity and engagement",
            "Notify sales reps when a lead is ready to be contacted"
        ],
        "relatedSystems": "Salesforce, HubSpot, Mailchimp, marketing automation platforms, Engini platform"
    },
    {
        "name": "Sales Call Scheduling Agent",
        "category": "Sales & Marketing",
        "icon": "phone",
        "description": "Automates the scheduling of meetings with clients and prospects by finding mutual availability and sending calendar invitations.",
        "useCases": [
            "Coordinate meetings with prospects automatically",
            "Send automated calendar invites and reminders",
            "Handle reschedules and cancellations without manual effort"
        ],
        "relatedSystems": "Outlook, Google Calendar, Salesforce, HubSpot, Engini platform"
    },
    {
        "name": "CRM Update Agent",
        "category": "Sales & Marketing",
        "icon": "phone-forwarded",
        "description": "Enables sales reps to update CRM records through natural language conversations, reducing administrative work and improving data quality.",
        "useCases": [
            "Update CRM records via chat or voice",
            "Add notes and activity logs automatically",
            "Send reminders to update pipeline information"
        ],
        "relatedSystems": "Salesforce, Zoho, HubSpot, Slack/Teams, Engini platform"
    },
    {
        "name": "Marketing Content Generation Agent",
        "category": "Sales & Marketing",
        "icon": "pencil",
        "description": "Generates a wide range of marketing content, from blog articles and social media posts to ad copy, while maintaining brand voice and tone.",
        "useCases": [
            "Draft blog articles and social media posts",
            "Create ad copy and email newsletters",
            "Ensure brand tone and consistency across all content"
        ],
        "relatedSystems": "Content Management Systems, Social media APIs, Engini platform"
    },
    {
        "name": "Sales Forecasting Agent",
        "category": "BI/Analytics",
        "icon": "chart-line",
        "description": "Analyzes historical sales data, current pipeline status, and market trends to provide accurate sales forecasts and identify potential risks.",
        "useCases": [
            "Generate accurate sales forecasts",
            "Highlight high-risk deals in the pipeline",
            "Provide real-time pipeline insights for management"
        ],
        "relatedSystems": "CRM (Salesforce), BI tools (Tableau, Power BI), Engini platform"
    },
    // Logistics & Supply Chain
    {
        "name": "Inventory Management Agent",
        "category": "Logistics",
        "icon": "truck",
        "description": "Predicts inventory needs, automates reordering, and optimizes stock levels to reduce carrying costs and prevent stockouts.",
        "useCases": [
            "Forecast product demand accurately",
            "Automate reordering processes based on stock levels",
            "Minimize stockouts and overstocking"
        ],
        "relatedSystems": "WMS (Warehouse Management System), ERP systems, Engini platform"
    },
    {
        "name": "Delivery Route Optimization Agent",
        "category": "Logistics",
        "icon": "map",
        "description": "Calculates the most efficient routes for delivery vehicles, taking into account traffic, distance, and delivery windows to reduce costs.",
        "useCases": [
            "Optimize delivery routes in real-time",
            "Reduce fuel costs and delivery times",
            "Improve logistics and fleet efficiency"
        ],
        "relatedSystems": "Fleet Management Systems, GPS, WMS, Engini platform"
    },
    {
        "name": "Supply Chain Risk Assessment Agent",
        "category": "Logistics",
        "icon": "alert-triangle",
        "description": "Monitors global news, weather, and market data to proactively identify and assess risks in the supply chain, providing alerts to stakeholders.",
        "useCases": [
            "Monitor global supply chain risks in real-time",
            "Forecast potential disruptions and delays",
            "Provide proactive alerts to relevant teams"
        ],
        "relatedSystems": "ERP (SAP, Oracle), SCM software, Engini platform"
    },
    {
        "name": "Shipment Tracking Agent",
        "category": "Logistics",
        "icon": "box",
        "description": "Provides real-time tracking of shipments and automates customer communication regarding delivery status, reducing support inquiries.",
        "useCases": [
            "Track shipments and provide real-time updates",
            "Automate customer notifications about delivery status",
            "Reduce manual customer support queries"
        ],
        "relatedSystems": "FedEx/UPS/DHL APIs, Shopify, Salesforce Commerce Cloud, Engini platform"
    },
    {
        "name": "Warehouse Management Agent",
        "category": "Logistics",
        "icon": "warehouse",
        "description": "Manages warehouse operations, from inbound receiving to outbound shipping, and optimizes the picking, packing, and fulfillment process.",
        "useCases": [
            "Automate picking and packing tasks",
            "Optimize warehouse layout and stock location",
            "Ensure accurate and efficient order fulfillment"
        ],
        "relatedSystems": "WMS, ERP, barcode scanners, Engini platform"
    },
    // E-commerce
    {
        "name": "Customer Onboarding Agent (E-commerce)",
        "category": "eCommerce",
        "icon": "shopping-cart",
        "description": "Guides new customers through product setup, feature discovery, and initial use via a conversational interface, ensuring a smooth and successful start.",
        "useCases": [
            "Guide new customers through product setup",
            "Answer common product and service questions",
            "Provide proactive tips and tutorials"
        ],
        "relatedSystems": "CRM, knowledge bases, Shopify, Engini platform"
    },
    {
        "name": "Returns Processing Agent",
        "category": "eCommerce",
        "icon": "shopping-cart",
        "description": "Automates the processing of product returns, from generating return labels to updating inventory and initiating refunds.",
        "useCases": [
            "Automate return label generation and tracking",
            "Update inventory upon return arrival",
            "Initiate refunds automatically"
        ],
        "relatedSystems": "Shopify, Salesforce Commerce Cloud, ERP systems, Engini platform"
    },
    {
        "name": "Order Status & Tracking Agent",
        "category": "eCommerce",
        "icon": "shopping-cart",
        "description": "Provides customers with real-time updates on their order status and tracking information, reducing support inquiries.",
        "useCases": [
            "Provide real-time order status updates",
            "Automate shipment tracking and notifications",
            "Reduce manual customer support queries"
        ],
        "relatedSystems": "Shopify, FedEx/UPS/DHL APIs, Engini platform"
    },
    {
        "name": "E-Commerce SEO Agent",
        "category": "eCommerce",
        "icon": "shopping-cart",
        "description": "Optimizes product listings and website content for search engines, improving visibility and driving organic traffic to the store.",
        "useCases": [
            "Optimize product descriptions and tags",
            "Identify high-ranking keywords",
            "Generate SEO performance reports"
        ],
        "relatedSystems": "Shopify, Salesforce Commerce Cloud, SEO tools, Engini platform"
    },
    {
        "name": "Abandoned Cart Recovery Agent",
        "category": "eCommerce",
        "icon": "shopping-cart",
        "description": "Automatically sends personalized reminders and offers to customers who have abandoned their shopping carts, encouraging them to complete their purchase.",
        "useCases": [
            "Send automated email or SMS reminders",
            "Provide personalized discounts to complete a purchase",
            "Increase conversion rates from abandoned carts"
        ],
        "relatedSystems": "Shopify, WooCommerce, Mailchimp, Engini platform"
    },
    // Healthcare
    {
        "name": "Clinical AI Assistant",
        "category": "Healthcare",
        "icon": "heart-pulse",
        "description": "Assists healthcare professionals with administrative tasks, such as summarizing patient records, scheduling appointments, and generating clinical documentation.",
        "useCases": [
            "Summarize patient health records for quick review",
            "Automate appointment scheduling and reminders",
            "Draft clinical notes and reports"
        ],
        "relatedSystems": "EHR (Electronic Health Records), practice management software, Engini platform"
    },
    {
        "name": "Healthcare Billing Agent",
        "category": "Healthcare",
        "icon": "heart-pulse",
        "description": "Automates the complex process of medical billing by coding procedures, verifying insurance information, and submitting claims.",
        "useCases": [
            "Automate medical coding for procedures",
            "Verify patient insurance eligibility",
            "Submit claims to payers automatically"
        ],
        "relatedSystems": "EHR, medical billing software, Engini platform"
    },
    {
        "name": "Patient Monitoring Agent",
        "category": "Healthcare",
        "icon": "heart-pulse",
        "description": "Analyzes data from wearable devices and remote sensors to monitor patient vitals, predict health issues, and alert care providers.",
        "useCases": [
            "Monitor patient vitals remotely",
            "Predict potential health complications",
            "Send alerts to care providers in real-time"
        ],
        "relatedSystems": "IoT health sensors, EHR, Engini platform"
    },
    {
        "name": "Pharmacy Automation Agent",
        "category": "Healthcare",
        "icon": "heart-pulse",
        "description": "Manages and automates pharmacy tasks, including prescription verification, inventory management, and patient communication.",
        "useCases": [
            "Verify prescriptions for accuracy",
            "Automate pharmacy inventory management",
            "Send patient refill reminders"
        ],
        "relatedSystems": "Pharmacy Management Systems, Engini platform"
    },
    {
        "name": "Patient Triage Agent",
        "category": "Healthcare",
        "icon": "heart-pulse",
        "description": "A conversational agent that conducts initial patient triage based on symptoms, schedules appointments, and provides health information.",
        "useCases": [
            "Conduct initial symptom checks and triage",
            "Schedule patient appointments",
            "Provide basic health information and advice"
        ],
        "relatedSystems": "EHR, appointment scheduling systems, Engini platform"
    },
    // Industrial Operations
    {
        "name": "Predictive Maintenance Agent",
        "category": "Industrial Operations",
        "icon": "factory",
        "description": "Analyzes sensor data from equipment to predict potential failures, allowing for proactive maintenance and reducing unplanned downtime.",
        "useCases": [
            "Predict equipment failures before they occur",
            "Schedule proactive maintenance tasks",
            "Reduce unplanned downtime and maintenance costs"
        ],
        "relatedSystems": "IoT platforms, SCADA systems, EAM software, Engini platform"
    },
    {
        "name": "Quality Inspection Agent",
        "category": "Industrial Operations",
        "icon": "factory",
        "description": "Uses computer vision to perform automated quality checks on the production line, identifying defects and inconsistencies with high accuracy.",
        "useCases": [
            "Automate quality control on the production line",
            "Identify product defects with high accuracy",
            "Ensure consistent product quality"
        ],
        "relatedSystems": "Computer Vision cameras, Manufacturing Execution Systems (MES), Engini platform"
    },
    {
        "name": "Repair Diagnostics Agent",
        "category": "Industrial Operations",
        "icon": "factory",
        "description": "Assists technicians with complex equipment repairs by providing diagnostic guidance, schematics, and step-by-step instructions.",
        "useCases": [
            "Guide technicians through complex repairs",
            "Provide access to equipment schematics and manuals",
            "Reduce repair time and errors"
        ],
        "relatedSystems": "CMMS (Computerized Maintenance Management System), Engini platform"
    },
    {
        "name": "Digital Twin Agent",
        "category": "Industrial Operations",
        "icon": "factory",
        "description": "Creates and manages a virtual replica of a physical asset or system, allowing for simulations and predictive analysis to optimize performance.",
        "useCases": [
            "Simulate performance of physical assets",
            "Analyze data from virtual replicas to optimize processes",
            "Predict the impact of changes before implementing them"
        ],
        "relatedSystems": "IoT platforms, simulation software, Engini platform"
    },
    {
        "name": "Shop Floor Automation Agent",
        "category": "Industrial Operations",
        "icon": "factory",
        "description": "Connects and automates various processes on the shop floor, from machine operation to data logging and inventory management.",
        "useCases": [
            "Automate machine scheduling and operation",
            "Log production data in real-time",
            "Manage material and component inventory on the shop floor"
        ],
        "relatedSystems": "MES, SCADA, ERP systems, IoT devices, Engini platform"
    },
    // Security & Compliance
    {
        "name": "Automated Compliance Auditing Agent",
        "category": "Security",
        "icon": "shield-alert",
        "description": "Conducts automated audits of systems and processes to ensure they adhere to internal policies and external regulations.",
        "useCases": [
            "Automate compliance checks and audits",
            "Flag non-compliant systems or processes",
            "Generate audit-ready reports"
        ],
        "relatedSystems": "GRC platforms, SIEM tools, Engini platform"
    },
    {
        "name": "AI Threat Detection Agent",
        "category": "Security",
        "icon": "shield-alert",
        "description": "Monitors network traffic, system logs, and user behavior to detect and neutralize cyber threats in real-time.",
        "useCases": [
            "Detect malware and phishing attacks",
            "Identify suspicious user behavior",
            "Automate incident containment"
        ],
        "relatedSystems": "SIEM tools, Endpoint Protection Platforms, Engini platform"
    },
    {
        "name": "Automated Incident Response Agent",
        "category": "Security",
        "icon": "shield-alert",
        "description": "Responds to security incidents automatically by isolating affected systems, collecting forensic data, and initiating remediation workflows.",
        "useCases": [
            "Isolate infected machines or accounts",
            "Collect forensic data for analysis automatically",
            "Initiate remediation steps to resolve an incident"
        ],
        "relatedSystems": "SOAR platforms, Endpoint Protection Platforms, Engini platform"
    },
    {
        "name": "Cyber Security Reporting Agent",
        "category": "Security",
        "icon": "shield-alert",
        "description": "Gathers data from various security systems to automatically generate comprehensive and compliant security reports for management and auditors.",
        "useCases": [
            "Generate security compliance and posture reports",
            "Provide insights into security vulnerabilities",
            "Automate audit preparations"
        ],
        "relatedSystems": "SIEM tools, GRC platforms, Engini platform"
    },
    {
        "name": "KYC Compliance Agent",
        "category": "Financial Services",
        "icon": "credit-card",
        "description": "Automates Know Your Customer (KYC) processes by collecting and verifying identification documents, calculating risk scores, and flagging suspicious activities.",
        "useCases": [
            "Automate KYC document verification",
            "Calculate initial risk scores for new clients",
            "Ensure compliance with banking regulations"
        ],
        "relatedSystems": "Core Banking systems, AML systems, OCR services, Engini platform"
    },
    // Legal Automation
    {
        "name": "Contract Analysis Agent",
        "category": "Legal Automation",
        "icon": "file-text",
        "description": "Analyzes legal documents and contracts to extract key clauses, identify risks, and ensure compliance with regulatory requirements.",
        "useCases": [
            "Extract key terms and conditions from contracts",
            "Highlight risky or inconsistent language",
            "Ensure regulatory compliance in legal documents"
        ],
        "relatedSystems": "Document Management Systems, Contract Lifecycle Management (CLM), Engini platform"
    },
    {
        "name": "Regulatory Compliance Agent",
        "category": "Legal Automation",
        "icon": "gavel",
        "description": "Monitors changes in regulations and policies relevant to the organization's industry and flags documents or processes that need to be updated.",
        "useCases": [
            "Monitor regulatory changes in real-time",
            "Flag internal documents for compliance updates",
            "Generate compliance reports for regulators"
        ],
        "relatedSystems": "GRC platforms, legal databases, Engini platform"
    },
    {
        "name": "Patent Analysis Agent",
        "category": "Legal Automation",
        "icon": "file-search",
        "description": "Assists legal and R&D teams by analyzing patent databases to identify potential infringement risks and opportunities for new patents.",
        "useCases": [
            "Analyze patent databases for infringement risks",
            "Support new patent applications with research",
            "Identify opportunities for innovation"
        ],
        "relatedSystems": "Patent search databases, legal research tools, Engini platform"
    },
    {
        "name": "Document Classification Agent",
        "category": "Legal Automation",
        "icon": "folder",
        "description": "Automatically classifies and organizes legal documents, contracts, and case files based on their content, saving time and improving searchability.",
        "useCases": [
            "Automatically categorize legal documents",
            "Organize case files and contracts",
            "Improve document search and retrieval"
        ],
        "relatedSystems": "Document Management Systems, file storage, Engini platform"
    },
    {
        "name": "Legal Research Assistant",
        "category": "Legal Automation",
        "icon": "book",
        "description": "Aids legal professionals by summarizing case law, statutes, and legal articles, and retrieving relevant precedents for their cases.",
        "useCases": [
            "Summarize legal documents and case law",
            "Retrieve relevant legal precedents",
            "Draft legal memos and research reports"
        ],
        "relatedSystems": "Legal databases, document management systems, Engini platform"
    },
    // BI & Analytics
    {
        "name": "Support Analytics Agent",
        "category": "BI/Analytics",
        "icon": "bar-chart-2",
        "description": "Gathers and analyzes support data to generate reports on performance trends, SLA compliance, and recurring issues, recommending operational improvements.",
        "useCases": [
            "Analyze support performance trends and metrics",
            "Identify recurring issues and bottlenecks",
            "Recommend actions for improving support efficiency"
        ],
        "relatedSystems": "Power BI, Tableau, Service Desk systems, Engini platform"
    },
    {
        "name": "Data Analysis & BI Agent",
        "category": "BI/Analytics",
        "icon": "bar-chart-2",
        "description": "Provides a conversational interface for business users to ask questions about their data, generating charts and insights on demand.",
        "useCases": [
            "Answer natural language queries about data",
            "Generate charts and visualizations on demand",
            "Provide on-demand business insights"
        ],
        "relatedSystems": "Power BI, Tableau, SQL Databases, Engini platform"
    },
    {
        "name": "Report Generation Agent",
        "category": "BI/Analytics",
        "icon": "message-circle-warning",
        "description": "Compiles data from multiple sources and automatically generates a variety of reports, from weekly summaries to detailed dashboards.",
        "useCases": [
            "Compile data from disparate sources into a single report",
            "Generate scheduled reports automatically",
            "Create customizable dashboards for different teams"
        ],
        "relatedSystems": "Power BI, Tableau, SQL Databases, Excel, Engini platform"
    },
    {
        "name": "Market Research Agent",
        "category": "BI/Analytics",
        "icon": "chart-pie",
        "description": "Conducts market research by analyzing industry reports, competitor websites, and social media to provide insights on trends and opportunities.",
        "useCases": [
            "Analyze market trends and competitor data",
            "Generate market research reports",
            "Identify new business opportunities"
        ],
        "relatedSystems": "Data aggregators, BI tools, social listening platforms, Engini platform"
    },
    {
        "name": "Customer Feedback Analysis Agent",
        "category": "BI/Analytics",
        "icon": "chart-area",
        "description": "Analyzes customer feedback from surveys, reviews, and support tickets to identify key themes, sentiment, and areas for improvement.",
        "useCases": [
            "Analyze customer sentiment and satisfaction",
            "Identify trends in customer feedback",
            "Generate reports on customer satisfaction metrics"
        ],
        "relatedSystems": "SurveyMonkey, Qualtrics, NPS tools, Engini platform"
    },
    // Software Development
    {
        "name": "Autonomous Coding Agent",
        "category": "Software Development",
        "icon": "code",
        "description": "Automatically writes, tests, and refactors code based on high-level instructions, assisting developers and accelerating software delivery.",
        "useCases": [
            "Generate boilerplate code for new projects",
            "Automate unit test creation and execution",
            "Assist with code refactoring and optimization"
        ],
        "relatedSystems": "GitHub, GitLab, IDEs (VS Code), CI/CD tools, Engini platform"
    },
    {
        "name": "DevOps Automation Agent",
        "category": "Software Development",
        "icon": "cloud-upload",
        "description": "Automates routine DevOps tasks such as environment provisioning, deployment pipelines, and monitoring alerts.",
        "useCases": [
            "Automate environment setup and configuration",
            "Manage CI/CD pipelines",
            "Monitor system performance and send alerts"
        ],
        "relatedSystems": "Jenkins, GitLab CI, Kubernetes, Docker, AWS/Azure/GCP, Engini platform"
    },
    {
        "name": "Code Review & QA Agent",
        "category": "Software Development",
        "icon": "code",
        "description": "Conducts automated code reviews to identify bugs, security vulnerabilities, and adherence to coding standards, providing feedback to developers.",
        "useCases": [
            "Identify bugs and security flaws in code",
            "Ensure code quality and adherence to standards",
            "Automate QA and testing tasks"
        ],
        "relatedSystems": "GitHub, SonarQube, Jira, Engini platform"
    },
    {
        "name": "AI Test Automation Agent",
        "category": "Software Development",
        "icon": "code",
        "description": "Automatically generates and executes software tests to ensure code quality and stability, reducing the need for manual QA.",
        "useCases": [
            "Generate test cases automatically",
            "Execute automated test suites and report results",
            "Provide detailed test reports for developers"
        ],
        "relatedSystems": "Selenium, Jira, CI/CD pipelines, Engini platform"
    },
    {
        "name": "Project Management Agent",
        "category": "Software Development",
        "icon": "folder-dot",
        "description": "Assists with project management tasks by creating to-do lists, setting deadlines, and assigning tasks based on team discussions.",
        "useCases": [
            "Create project tasks and to-do lists from meeting notes",
            "Set deadlines and reminders for project milestones",
            "Assign tasks to team members automatically"
        ],
        "relatedSystems": "Jira, Asana, Trello, Microsoft Project, Engini platform"
    },
    // Internal Productivity
    {
        "name": "Email Management Agent",
        "category": "Internal Productivity",
        "icon": "briefcase",
        "description": "Organizes and prioritizes email, drafting responses, summarizing long threads, and automatically scheduling tasks based on email content.",
        "useCases": [
            "Prioritize and categorize incoming emails",
            "Draft email responses and follow-ups",
            "Summarize long email threads"
        ],
        "relatedSystems": "Gmail, Outlook, Slack/Teams, Engini platform"
    },
    {
        "name": "Meeting Scheduling Agent",
        "category": "Internal Productivity",
        "icon": "calendar-check-2",
        "description": "Automates the process of finding a time to meet, sending invitations, and adding meeting notes to the calendar.",
        "useCases": [
            "Find optimal meeting times for all participants",
            "Send calendar invitations and reminders",
            "Automatically add meeting notes to the calendar event"
        ],
        "relatedSystems": "Google Calendar, Outlook Calendar, Zoom, Google Meet, Engini platform"
    },
    {
        "name": "Meeting Minute Generator",
        "category": "Internal Productivity",
        "icon": "briefcase",
        "description": "Listens to meetings and automatically generates summaries, action items, and key decisions, saving time and ensuring no details are missed.",
        "useCases": [
            "Summarize meeting discussions and key points",
            "Extract action items and assign owners",
            "Record key decisions and next steps"
        ],
        "relatedSystems": "Zoom, Google Meet, Microsoft Teams, Engini platform"
    },
    {
        "name": "Document Generation Agent",
        "category": "Internal Productivity",
        "icon": "file",
        "description": "Automatically generates standard business documents, such as proposals, reports, or contracts, by pulling data from various sources and using predefined templates.",
        "useCases": [
            "Generate proposals and reports with up-to-date data",
            "Fill standard templates with information from CRM",
            "Ensure consistency across all company documents"
        ],
        "relatedSystems": "Microsoft Office, Google Workspace, CRM, ERP, Engini platform"
    },
    {
        "name": "Resource Booking Agent",
        "category": "Internal Productivity",
        "icon": "calendar-check",
        "description": "Manages the booking of company resources such as meeting rooms, equipment, and company cars, preventing double bookings and ensuring availability.",
        "useCases": [
            "Book meeting rooms and company assets",
            "Prevent scheduling conflicts and double bookings",
            "Send automated reminders for resource usage"
        ],
        "relatedSystems": "Outlook Calendar, Google Calendar, internal booking systems, Engini platform"
    },
    // Customer Experience (CX) & Support
    {
        "name": "Customer Support Triage Agent",
        "category": "CX/Support",
        "icon": "headset",
        "description": "Categorizes and prioritizes incoming customer support tickets, providing automated responses for common issues and routing complex requests to human agents.",
        "useCases": [
            "Categorize incoming tickets by urgency and topic",
            "Automate responses for simple customer requests",
            "Route complex tickets to the appropriate support team"
        ],
        "relatedSystems": "Zendesk, Freshdesk, Salesforce Service Cloud, Engini platform"
    },
    {
        "name": "Agent Assist (Live Agent Support)",
        "category": "CX/Support",
        "icon": "headset",
        "description": "Provides real-time support to human agents by summarizing conversations, suggesting relevant knowledge base articles, and recommending the next best action.",
        "useCases": [
            "Summarize customer conversations for live agents",
            "Suggest recommended solutions and articles",
            "Offer drafted responses to customers"
        ],
        "relatedSystems": "Zendesk, ServiceNow, Salesforce, Knowledge Base, Engini platform"
    },
    {
        "name": "Technical Troubleshooting Agent (External)",
        "category": "CX/Support",
        "icon": "headset",
        "description": "Guides customers through troubleshooting steps for products or services, resolving issues before a human agent is needed.",
        "useCases": [
            "Troubleshoot product issues with customers via a chatbot",
            "Provide self-service resolution for technical problems",
            "Reduce the number of support tickets for the IT team"
        ],
        "relatedSystems": "Zendesk, Freshdesk, knowledge bases, Engini platform"
    },
    {
        "name": "Customer Feedback Analysis Agent",
        "category": "CX/Support",
        "icon": "chart-area",
        "description": "Analyzes customer feedback from surveys, reviews, and support tickets to identify key themes, sentiment, and areas for improvement.",
        "useCases": [
            "Analyze customer sentiment and feedback trends",
            "Identify areas for product and service improvement",
            "Generate reports on customer satisfaction"
        ],
        "relatedSystems": "SurveyMonkey, Qualtrics, NPS tools, Engini platform"
    },
    {
        "name": "Voice of the Customer Agent",
        "category": "CX/Support",
        "icon": "audio-lines",
        "description": "Transcribes and analyzes customer calls, identifying key topics, sentiment, and action items to improve customer service and product development.",
        "useCases": [
            "Transcribe and analyze customer support calls",
            "Identify recurring customer issues and pain points",
            "Generate summaries of customer conversations"
        ],
        "relatedSystems": "Call center software, CRM, Engini platform"
    },
    // Marketing Automation
    {
        "name": "Social Listening & Sentiment Agent",
        "category": "Marketing Automation",
        "icon": "megaphone",
        "description": "Monitors social media, forums, and news to track brand mentions, analyze public sentiment, and alert marketing teams to emerging trends or PR crises.",
        "useCases": [
            "Monitor brand mentions and keywords online",
            "Analyze sentiment of online conversations",
            "Alert on potential PR crises or negative trends"
        ],
        "relatedSystems": "Social media APIs, listening platforms, Engini platform"
    },
    {
        "name": "Personalized Recommendation Agent",
        "category": "Marketing Automation",
        "icon": "star",
        "description": "Analyzes customer behavior and preferences to deliver highly personalized product recommendations, content, and offers across various channels.",
        "useCases": [
            "Suggest personalized products and content to customers",
            "Increase customer engagement and conversion rates",
            "Automate email and website personalization"
        ],
        "relatedSystems": "eCommerce Platforms (Shopify), CRM, CDP, Engini platform"
    },
    {
        "name": "Advertising Optimization Agent",
        "category": "Marketing Automation",
        "icon": "megaphone",
        "description": "Manages and optimizes digital ad campaigns in real-time, adjusting bids, targeting, and creative assets to maximize ROI.",
        "useCases": [
            "Optimize bids and targeting for digital ads",
            "Automate budget allocation across campaigns",
            "Generate performance reports for ad campaigns"
        ],
        "relatedSystems": "Google Ads, Facebook Ads, DSPs, Engini platform"
    },
    {
        "name": "Marketing Campaign Manager",
        "category": "Marketing Automation",
        "icon": "megaphone",
        "description": "Automates the planning and execution of marketing campaigns, from segmenting audiences to scheduling content and analyzing results.",
        "useCases": [
            "Automate audience segmentation and targeting",
            "Schedule social media posts and email campaigns",
            "Track and analyze campaign performance"
        ],
        "relatedSystems": "Mailchimp, HubSpot, Salesforce Marketing Cloud, Engini platform"
    },
    {
        "name": "Creative Design AI Agent",
        "category": "Marketing Automation",
        "icon": "component",
        "description": "Assists marketing teams by generating new creative assets like social media images, ad banners, and visual mockups based on a text prompt.",
        "useCases": [
            "Generate visual marketing assets from text prompts",
            "Create ad banners and social media graphics",
            "Assist with design ideation and mockups"
        ],
        "relatedSystems": "Adobe Creative Cloud, Canva, Content Management Systems, Engini platform"
    },
    // Financial Services
    {
        "name": "Automated Trading Agent",
        "category": "Financial Services",
        "icon": "chart-area",
        "description": "Analyzes vast amounts of market data and news to execute autonomous trading strategies based on predefined rules and risk parameters.",
        "useCases": [
            "Analyze real-time financial market data",
            "Execute trades based on a predefined strategy",
            "Manage risk with automated stop-loss orders"
        ],
        "relatedSystems": "Bloomberg, Reuters, algorithmic trading APIs, Engini platform"
    },
    {
        "name": "Credit Underwriting Agent",
        "category": "Financial Services",
        "icon": "credit-card",
        "description": "Assesses loan and credit applications by pulling and analyzing data from various sources to provide an underwriting recommendation.",
        "useCases": [
            "Analyze loan applicant data and credit scores",
            "Calculate key financial ratios for risk assessment",
            "Draft underwriting reports for review"
        ],
        "relatedSystems": "Credit bureaus, CRM, BI tools, Engini platform"
    },
    {
        "name": "Customer Service Agent (Financial)",
        "category": "Financial Services",
        "icon": "headset",
        "description": "A conversational agent that handles common customer inquiries about account balances, transaction history, and service requests.",
        "useCases": [
            "Answer questions about account balances and transactions",
            "Handle customer service requests like address changes",
            "Provide secure, personalized customer support"
        ],
        "relatedSystems": "Core Banking systems, CRM, Engini platform"
    },
    {
        "name": "Investment Portfolio Agent",
        "category": "Financial Services",
        "icon": "chart-pie",
        "description": "Analyzes a client's investment portfolio, providing personalized recommendations, performance reports, and market insights.",
        "useCases": [
            "Analyze and optimize investment portfolios",
            "Generate personalized performance reports",
            "Provide real-time market insights and alerts"
        ],
        "relatedSystems": "Investment platforms, financial data APIs, Engini platform"
    },
    {
        "name": "Loan Origination Agent",
        "category": "Financial Services",
        "icon": "handshake",
        "description": "Automates the initial stages of the loan process, from collecting applications and documents to performing initial eligibility checks and routing to a human underwriter.",
        "useCases": [
            "Collect and verify loan applications",
            "Perform initial eligibility checks automatically",
            "Route qualified applications to loan officers"
        ],
        "relatedSystems": "CRM, document management systems, Engini platform"
    },
    // Education
    {
        "name": "Education Course Creation Agent",
        "category": "Education",
        "icon": "book-open",
        "description": "Generates personalized course materials, quizzes, and lesson plans for educators based on learning objectives and subject matter.",
        "useCases": [
            "Generate course content and quizzes automatically",
            "Create personalized lesson plans",
            "Automate content updates and revisions"
        ],
        "relatedSystems": "LMS (Learning Management Systems), educational platforms, Engini platform"
    },
    {
        "name": "Student Support Agent",
        "category": "Education",
        "icon": "notebook-pen",
        "description": "A chatbot that answers student questions about course content, administrative procedures, and campus resources.",
        "useCases": [
            "Answer student academic and administrative questions",
            "Provide information on campus resources",
            "Manage administrative queries and requests"
        ],
        "relatedSystems": "LMS, student information systems, Engini platform"
    },
    {
        "name": "Academic Research Assistant",
        "category": "Education",
        "icon": "microscope",
        "description": "Helps researchers by summarizing academic papers, identifying key findings, and suggesting relevant citations and sources.",
        "useCases": [
            "Summarize academic papers and research documents",
            "Find relevant citations and sources",
            "Assist in drafting research reports and abstracts"
        ],
        "relatedSystems": "Academic databases, reference management software, Engini platform"
    },
    {
        "name": "Student Enrollment Agent",
        "category": "Education",
        "icon": "id-card",
        "description": "Automates the student enrollment process by handling application submissions, verifying documents, and providing status updates to applicants.",
        "useCases": [
            "Automate application collection and verification",
            "Provide real-time status updates to applicants",
            "Manage document submissions and processing"
        ],
        "relatedSystems": "Student information systems, document management systems, Engini platform"
    },
    {
        "name": "Grades & Feedback Agent",
        "category": "Education",
        "icon": "check",
        "description": "Automates the process of grading assignments and providing structured feedback to students based on predefined rubrics and criteria.",
        "useCases": [
            "Automate grading of assignments and quizzes",
            "Provide structured and personalized feedback to students",
            "Track student progress and performance"
        ],
        "relatedSystems": "LMS, grading software, Engini platform"
    },
    // Internal Communications & Collaboration
    {
        "name": "Team Standup Agent",
        "category": "Internal Productivity",
        "icon": "users",
        "description": "Manages and automates daily team standup meetings by collecting updates, summarizing progress, and flagging blockers in a structured format.",
        "useCases": [
            "Collect daily standup updates from team members",
            "Summarize team progress and identify blockers",
            "Integrate with project management tools to update task status"
        ],
        "relatedSystems": "Slack, Microsoft Teams, Jira, Asana, Engini platform"
    },
    {
        "name": "Internal Newsletter Agent",
        "category": "Internal Productivity",
        "icon": "newspaper",
        "description": "Gathers company updates, news, and announcements from various sources to automatically draft and distribute an internal newsletter.",
        "useCases": [
            "Collect company news and announcements from internal sources",
            "Automatically draft and format an internal newsletter",
            "Distribute the newsletter via email or internal chat channels"
        ],
        "relatedSystems": "SharePoint, Confluence, Slack, Microsoft Teams, Engini platform"
    },
    {
        "name": "Poll & Survey Agent",
        "category": "Internal Productivity",
        "icon": "vote",
        "description": "Creates and manages internal polls and surveys to gather feedback from employees on various topics, from company culture to meeting effectiveness.",
        "useCases": [
            "Create and distribute internal polls and surveys",
            "Gather and analyze employee feedback",
            "Generate reports on survey results"
        ],
        "relatedSystems": "Microsoft Teams, Slack, SurveyMonkey, Engini platform"
    },
    {
        "name": "Topic Monitoring Agent",
        "category": "Internal Productivity",
        "icon": "eye",
        "description": "Monitors internal chat channels and documents for specific keywords or topics, and alerts relevant teams or creates a task when a topic is mentioned.",
        "useCases": [
            "Monitor internal channels for project keywords",
            "Alert a team when a critical issue is discussed",
            "Create tasks in a project management tool based on conversations"
        ],
        "relatedSystems": "Slack, Microsoft Teams, Jira, Asana, Engini platform"
    },
    {
        "name": "Automated Announcements Agent",
        "category": "Internal Productivity",
        "icon": "workflow",
        "description": "Automates the delivery of important announcements and reminders to specific teams or the entire organization based on predefined events or schedules.",
        "useCases": [
            "Announce new company policies or updates",
            "Send reminders for upcoming deadlines or events",
            "Celebrate employee milestones like work anniversaries or birthdays"
        ],
        "relatedSystems": "Slack, Microsoft Teams, HRIS, Engini platform"
    },
    // Manufacturing & Production
    {
        "name": "Production Scheduling Agent",
        "category": "Industrial Operations",
        "icon": "calendar-check-2",
        "description": "Optimizes production schedules by considering factors like material availability, machine capacity, and order deadlines to maximize efficiency.",
        "useCases": [
            "Optimize production schedules in real-time",
            "Account for machine downtime and maintenance",
            "Ensure on-time order fulfillment"
        ],
        "relatedSystems": "MES, ERP, production planning software, Engini platform"
    },
    {
        "name": "Material Requirements Planning Agent",
        "category": "Industrial Operations",
        "icon": "wrench",
        "description": "Automates the planning and ordering of raw materials and components based on production schedules and inventory levels.",
        "useCases": [
            "Automate material reordering",
            "Ensure sufficient raw materials are available",
            "Reduce material carrying costs"
        ],
        "relatedSystems": "ERP, WMS, procurement software, Engini platform"
    },
    {
        "name": "Waste Reduction Agent",
        "category": "Industrial Operations",
        "icon": "recycle",
        "description": "Analyzes production data to identify sources of waste and inefficiencies, and recommends adjustments to reduce material usage and costs.",
        "useCases": [
            "Identify sources of material waste",
            "Recommend process adjustments for efficiency",
            "Reduce production costs and environmental impact"
        ],
        "relatedSystems": "MES, IoT sensors, BI tools, Engini platform"
    },
    {
        "name": "Maintenance Request Agent",
        "category": "Industrial Operations",
        "icon": "clipboard-list",
        "description": "Automates the process of submitting and tracking maintenance requests from the shop floor, routing them to the maintenance team and providing status updates.",
        "useCases": [
            "Automate maintenance request submission",
            "Route requests to the correct maintenance team",
            "Provide real-time status updates on repairs"
        ],
        "relatedSystems": "CMMS, MES, Engini platform"
    },
    {
        "name": "Quality Control Reporting Agent",
        "category": "Industrial Operations",
        "icon": "clipboard-check",
        "description": "Gathers data from quality inspection agents and other sources to automatically generate comprehensive quality control reports for management.",
        "useCases": [
            "Generate daily or weekly quality control reports",
            "Identify quality trends and issues",
            "Provide data for continuous improvement"
        ],
        "relatedSystems": "MES, quality control software, BI tools, Engini platform"
    },
    // Cross-functional
    {
        "name": "Asset Tracking Agent",
        "category": "Business Operations",
        "icon": "clipboard-clock",
        "description": "Tracks the location and status of physical assets, such as equipment and vehicles, using GPS or IoT data to improve management and security.",
        "useCases": [
            "Track the location of company vehicles or assets",
            "Monitor asset usage and performance",
            "Send alerts if an asset leaves a designated area"
        ],
        "relatedSystems": "GPS trackers, IoT platforms, ERP systems, Engini platform"
    },
    {
        "name": "Supplier Management Agent",
        "category": "Business Operations",
        "icon": "truck",
        "description": "Automates the management of supplier relationships, including performance tracking, contract renewal reminders, and communication.",
        "useCases": [
            "Track supplier performance metrics",
            "Send automated contract renewal reminders",
            "Manage communication with suppliers"
        ],
        "relatedSystems": "ERP, procurement software, CRM, Engini platform"
    },
    {
        "name": "Vendor Invoice Processing Agent",
        "category": "Finance Automation",
        "icon": "receipt",
        "description": "Automates the end-to-end processing of vendor invoices, from receipt and data extraction to approval and payment.",
        "useCases": [
            "Automate the receipt and data extraction of vendor invoices",
            "Route invoices for approval based on rules",
            "Initiate payments to vendors automatically"
        ],
        "relatedSystems": "ERP, accounting software, OCR tools, Engini platform"
    },
    {
        "name": "Client Reporting Agent",
        "category": "BI/Analytics",
        "icon": "clipboard-plus",
        "description": "Automates the generation and delivery of personalized reports for clients, providing them with insights and updates on their services or projects.",
        "useCases": [
            "Generate personalized client reports",
            "Automate report delivery on a set schedule",
            "Provide clients with real-time access to their data"
        ],
        "relatedSystems": "CRM, BI tools, document management systems, Engini platform"
    },
    {
        "name": "Employee Survey Agent",
        "category": "HR & People Ops",
        "icon": "user-check",
        "description": "Automates the creation, distribution, and analysis of employee surveys to gather feedback on satisfaction, engagement, and company culture.",
        "useCases": [
            "Create and distribute employee satisfaction surveys",
            "Analyze survey results and identify key trends",
            "Provide insights for improving employee experience"
        ],
        "relatedSystems": "HRIS, survey tools, BI tools, Engini platform"
    },
    // Development & IT
    {
        "name": "Network Monitoring Agent",
        "category": "IT Operations",
        "icon": "monitor",
        "description": "Monitors network performance and traffic patterns, identifying bottlenecks and security risks and providing real-time alerts.",
        "useCases": [
            "Monitor network health and performance",
            "Detect and alert on network anomalies",
            "Provide network traffic insights"
        ],
        "relatedSystems": "Network Management Systems, Splunk, Datadog, Engini platform"
    },
    {
        "name": "Software Deployment Agent",
        "category": "IT Operations",
        "icon": "folder-code",
        "description": "Manages requests for software installation and updates, handles approval workflows, and deploys software remotely to end-user devices.",
        "useCases": [
            "Automate software installation and updates",
            "Manage software licensing and compliance",
            "Send proactive update notifications"
        ],
        "relatedSystems": "Microsoft Intune, SCCM, Kandji, Slack/Teams, Engini platform"
    },
    {
        "name": "Cloud Cost Management Agent",
        "category": "IT Operations",
        "icon": "cloud",
        "description": "Monitors cloud service usage and costs, identifying opportunities for optimization and providing automated reports to reduce spending.",
        "useCases": [
            "Monitor and analyze cloud service costs",
            "Identify opportunities for cost optimization",
            "Generate automated reports on cloud spending"
        ],
        "relatedSystems": "AWS, Azure, Google Cloud, FinOps tools, Engini platform"
    },
    {
        "name": "Knowledge Maintenance Agent",
        "category": "IT Operations",
        "icon": "book",
        "description": "Analyzes knowledge bases and support tickets to identify information gaps, suggest new articles, and recommend updates to outdated content.",
        "useCases": [
            "Identify knowledge gaps from support data",
            "Draft new knowledge base articles automatically",
            "Recommend updates for outdated content"
        ],
        "relatedSystems": "Confluence, SharePoint, ServiceNow, Zendesk, Engini platform"
    },
    {
        "name": "Security Patching Agent",
        "category": "IT Operations",
        "icon": "lock",
        "description": "Automates the process of identifying and deploying security patches to systems and applications, ensuring the organization's infrastructure is secure.",
        "useCases": [
            "Identify systems with missing security patches",
            "Automate the deployment of security patches",
            "Ensure a secure and compliant IT environment"
        ],
        "relatedSystems": "Patch management software, security platforms, Engini platform"
    },
    // Additional Agents
    {
        "name": "Project Task Creation Agent",
        "category": "Internal Productivity",
        "icon": "folder-git-2",
        "description": "Creates and assigns project tasks in a project management tool based on commands in a conversational interface or email.",
        "useCases": [
            "Create tasks from an email or chat message",
            "Assign tasks to team members automatically",
            "Integrate with project management tools to streamline task creation"
        ],
        "relatedSystems": "Jira, Asana, Trello, Slack, Microsoft Teams, Engini platform"
    },
    {
        "name": "Sales Document Generator",
        "category": "Sales & Marketing",
        "icon": "file-check",
        "description": "Automatically generates sales quotes, proposals, and contracts by pulling data from the CRM, ensuring accuracy and consistency.",
        "useCases": [
            "Generate sales quotes and proposals automatically",
            "Create contracts from CRM data",
            "Ensure accuracy and consistency in sales documents"
        ],
        "relatedSystems": "Salesforce, HubSpot, CPQ software, Engini platform"
    },
    {
        "name": "Customer Segmentation Agent",
        "category": "Marketing Automation",
        "icon": "users",
        "description": "Analyzes customer data to automatically segment audiences for targeted marketing campaigns, improving personalization and effectiveness.",
        "useCases": [
            "Segment customers based on behavior and demographics",
            "Create targeted audience lists for marketing campaigns",
            "Improve personalization and engagement"
        ],
        "relatedSystems": "CRM, CDP, marketing automation platforms, Engini platform"
    },
    {
        "name": "Contract Renewal Agent",
        "category": "Business Operations",
        "icon": "file-signature",
        "description": "Monitors contract expiration dates and automates the renewal process by sending alerts, generating new contracts, and routing them for approval.",
        "useCases": [
            "Monitor contract expiration dates",
            "Send automated alerts for upcoming renewals",
            "Automate the generation of new contracts"
        ],
        "relatedSystems": "CLM (Contract Lifecycle Management), ERP, CRM, Engini platform"
    },
    {
        "name": "Customer Feedback Follow-Up Agent",
        "category": "CX/Support",
        "icon": "message-circle-question-mark",
        "description": "Automatically sends a follow-up message or survey to customers after a support ticket is closed or a transaction is completed to gather feedback.",
        "useCases": [
            "Send automated customer satisfaction surveys",
            "Follow up with customers after a support interaction",
            "Collect feedback to improve service quality"
        ],
        "relatedSystems": "Zendesk, Freshdesk, SurveyMonkey, Engini platform"
    },
    {
        "name": "Data Validation Agent",
        "category": "Business Operations",
        "icon": "check-circle",
        "description": "Automatically checks data across systems for accuracy, consistency, and compliance with business rules, flagging any inconsistencies for review.",
        "useCases": [
            "Validate data in forms and databases",
            "Check for inconsistencies between systems",
            "Ensure data accuracy and integrity"
        ],
        "relatedSystems": "Databases, ERP, CRM, Engini platform"
    },
    {
        "name": "New Hire Equipment Agent",
        "category": "HR & IT Automation",
        "icon": "id-card-lanyard",
        "description": "Automates the process of ordering, preparing, and tracking new hire equipment based on their role and department, ensuring it's ready on their start date.",
        "useCases": [
            "Automate equipment ordering for new hires",
            "Track equipment delivery and preparation",
            "Ensure equipment is ready on the first day of work"
        ],
        "relatedSystems": "IT asset management systems, procurement software, HRIS, Engini platform"
    },
    {
        "name": "Travel Expense Agent",
        "category": "Finance Automation",
        "icon": "plane",
        "description": "Manages travel expenses by integrating with booking systems, automatically generating reports, and routing them for approval upon trip completion.",
        "useCases": [
            "Automate travel expense report creation",
            "Track and manage travel budgets",
            "Route expense reports for approval automatically"
        ],
        "relatedSystems": "Travel booking platforms, Concur, Expensify, Engini platform"
    },
    {
        "name": "Talent Sourcing Agent",
        "category": "Recruitment",
        "icon": "search",
        "description": "Searches and screens a wide range of online platforms for potential candidates that match the requirements of a job opening.",
        "useCases": [
            "Source candidates from LinkedIn and other platforms",
            "Screen resumes and filter for relevant skills",
            "Generate a list of qualified candidates for review"
        ],
        "relatedSystems": "LinkedIn, Greenhouse, Taleo (ATS), Engini platform"
    },
    {
        "name": "Product Information Agent",
        "category": "eCommerce",
        "icon": "package-search",
        "description": "A conversational agent that provides detailed product information, specifications, and availability to customers, enhancing their shopping experience.",
        "useCases": [
            "Answer product-related questions in real-time",
            "Provide product specifications and availability",
            "Guide customers to the right product based on their needs"
        ],
        "relatedSystems": "Shopify, Salesforce Commerce Cloud, product catalogs, Engini platform"
    },
    {
        "name": "Maintenance Scheduling Agent",
        "category": "Industrial Operations",
        "icon": "calendar-check-2",
        "description": "Automates the scheduling of routine maintenance tasks for equipment and vehicles, ensuring they are serviced on time and minimizing downtime.",
        "useCases": [
            "Automate the scheduling of routine maintenance",
            "Send reminders for upcoming service dates",
            "Minimize unplanned downtime"
        ],
        "relatedSystems": "CMMS, EAM software, Engini platform"
    },
    {
        "name": "Loan Payment Agent",
        "category": "Financial Services",
        "icon": "dollar-sign",
        "description": "Automates the collection and processing of loan payments, sending reminders for upcoming payments and flagging any missed payments for review.",
        "useCases": [
            "Automate loan payment collection",
            "Send reminders for upcoming payments",
            "Flag missed payments for follow-up"
        ],
        "relatedSystems": "Core Banking systems, payment gateways, Engini platform"
    },
    {
        "name": "Contract Management Agent",
        "category": "Legal Automation",
        "icon": "pen",
        "description": "Automates the end-to-end management of contracts, from creation and execution to storage and compliance, ensuring all steps are tracked and completed.",
        "useCases": [
            "Automate contract creation and sending",
            "Track contract statuses and deadlines",
            "Ensure compliance with contract terms"
        ],
        "relatedSystems": "CLM, document management systems, ERP, Engini platform"
    },
    {
        "name": "Customer Support Analytics Agent",
        "category": "CX/Support",
        "icon": "chart-bar",
        "description": "Analyzes support ticket data to identify trends, performance metrics, and customer satisfaction levels, providing insights for service improvement.",
        "useCases": [
            "Analyze support ticket trends and topics",
            "Track agent performance and response times",
            "Measure customer satisfaction and service quality"
        ],
        "relatedSystems": "Zendesk, Freshdesk, Salesforce Service Cloud, Engini platform"
    },
    {
        "name": "Social Media Marketing Agent",
        "category": "Marketing Automation",
        "icon": "thumbs-up",
        "description": "Automates the scheduling and posting of social media content across multiple platforms, and analyzes engagement metrics to optimize strategy.",
        "useCases": [
            "Schedule and post content on social media",
            "Analyze engagement metrics and follower growth",
            "Optimize social media strategy based on data"
        ],
        "relatedSystems": "Hootsuite, Buffer, social media platforms, Engini platform"
    },
    {
        "name": "IT System Monitoring Agent",
        "category": "IT Operations",
        "icon": "monitor",
        "description": "Monitors the health and performance of IT systems and applications, providing real-time alerts on downtime, errors, and performance issues.",
        "useCases": [
            "Monitor system uptime and performance",
            "Send real-time alerts on errors and issues",
            "Provide performance reports for IT teams"
        ],
        "relatedSystems": "Splunk, Datadog, Nagios, Engini platform"
    },
    {
        "name": "Recruitment Pipeline Agent",
        "category": "Recruitment",
        "icon": "briefcase",
        "description": "Automates the management of the recruitment pipeline, from moving candidates between stages to sending automated communications and reminders.",
        "useCases": [
            "Automate candidate status updates",
            "Send automated communications to candidates",
            "Manage the recruitment pipeline efficiently"
        ],
        "relatedSystems": "Greenhouse, Taleo (ATS), CRM, Engini platform"
    },
    {
        "name": "Lead Scoring Agent",
        "category": "Sales & Marketing",
        "icon": "badge-dollar-sign",
        "description": "Automatically scores leads based on their engagement, demographics, and behavior, helping sales teams prioritize the most promising prospects.",
        "useCases": [
            "Score leads based on their activity and data",
            "Prioritize the most qualified leads for sales",
            "Improve lead conversion rates"
        ],
        "relatedSystems": "Salesforce, HubSpot, Pardot, Engini platform"
    },
    {
        "name": "Budget Tracking Agent",
        "category": "Finance Automation",
        "icon": "coins",
        "description": "Monitors departmental and project budgets, sending alerts when spending approaches predefined limits and providing real-time reports on financial status.",
        "useCases": [
            "Monitor spending against budgets",
            "Send alerts when budget limits are reached",
            "Provide real-time reports on financial status"
        ],
        "relatedSystems": "QuickBooks, SAP, ERP systems, Engini platform"
    },
    {
        "name": "Employee Recognition Agent",
        "category": "HR & People Ops",
        "icon": "award",
        "description": "Automates the process of recognizing employee achievements, milestones, and contributions, fostering a positive company culture.",
        "useCases": [
            "Automate the recognition of employee achievements",
            "Celebrate work anniversaries and birthdays",
            "Fos.te.r a positive and engaging company culture"
        ],
        "relatedSystems": "HRIS, Slack, Microsoft Teams, Engini platform"
    },
    {
        "name": "Order Fulfillment Agent",
        "category": "eCommerce",
        "icon": "truck",
        "description": "Manages the end-to-end order fulfillment process, from receiving orders to coordinating with the warehouse and shipping partners.",
        "useCases": [
            "Automate order processing and fulfillment",
            "Coordinate with warehouse and shipping partners",
            "Ensure timely delivery of products"
        ],
        "relatedSystems": "Shopify, Salesforce Commerce Cloud, WMS, Engini platform"
    },
    {
        "name": "Customer Support Escalation Agent",
        "category": "CX/Support",
        "icon": "hand-helping",
        "description": "Monitors support tickets and automatically escalates them to a manager or specialist if they are not resolved within a certain timeframe or if customer sentiment is negative.",
        "useCases": [
            "Automatically escalate unresolved support tickets",
            "Monitor ticket sentiment for negative keywords",
            "Ensure critical issues are addressed quickly"
        ],
        "relatedSystems": "Zendesk, Freshdesk, Salesforce Service Cloud, Engini platform"
    },
    {
        "name": "IT Change Management Agent",
        "category": "IT Operations",
        "icon": "folder-kanban",
        "description": "Automates the change management process by collecting change requests, routing them for approval, and scheduling the implementation of changes.",
        "useCases": [
            "Automate the collection of change requests",
            "Route change requests for approval",
            "Schedule the implementation of approved changes"
        ],
        "relatedSystems": "ServiceNow, Jira, ITIL platforms, Engini platform"
    },
    {
        "name": "Product Development Agent",
        "category": "Software Development",
        "icon": "bot",
        "description": "Assists with the product development lifecycle by automating tasks like creating user stories, prioritizing the backlog, and generating product documentation.",
        "useCases": [
            "Create user stories from customer feedback",
            "Prioritize the product backlog automatically",
            "Generate product documentation and release notes"
        ],
        "relatedSystems": "Jira, Confluence, product management tools, Engini platform"
    },
    {
        "name": "Supply Chain Analytics Agent",
        "category": "BI/Analytics",
        "icon": "chart-area",
        "description": "Analyzes supply chain data to identify bottlenecks, optimize logistics, and forecast future demand and supply fluctuations.",
        "useCases": [
            "Analyze supply chain data for bottlenecks",
            "Optimize logistics and transportation routes",
            "Forecast future demand and supply"
        ],
        "relatedSystems": "ERP, SCM software, BI tools, Engini platform"
    },
    {
        "name": "Employee Wellness Agent",
        "category": "HR & People Ops",
        "icon": "heart",
        "description": "A private agent that provides employees with resources and tools for mental and physical wellness, and helps them track their progress.",
        "useCases": [
            "Provide wellness resources and tools",
            "Track employee health goals and progress",
            "Offer personalized wellness tips and reminders"
        ],
        "relatedSystems": "Wellness platforms, HRIS, Engini platform"
    },
    {
        "name": "Credit Card Reconciliation Agent",
        "category": "Finance Automation",
        "icon": "credit-card",
        "description": "Automates the process of reconciling company credit card statements with expense reports and accounting records, ensuring accuracy and compliance.",
        "useCases": [
            "Automate credit card statement reconciliation",
            "Match expenses to card transactions",
            "Flag any discrepancies for review"
        ],
        "relatedSystems": "QuickBooks, SAP, expense management software, Engini platform"
    },
    {
        "name": "Recruitment Interview Agent",
        "category": "Recruitment",
        "icon": "user-check",
        "description": "Conducts initial screening interviews with candidates via a conversational interface, and provides a summary and recommendation to the hiring manager.",
        "useCases": [
            "Conduct initial screening interviews with candidates",
            "Assess candidate skills and qualifications",
            "Provide a summary and recommendation to hiring managers"
        ],
        "relatedSystems": "Greenhouse, Taleo (ATS), Engini platform"
    },
    {
        "name": "Website Chatbot Agent",
        "category": "CX/Support",
        "icon": "bot-message-square",
        "description": "A conversational chatbot that provides real-time support to website visitors, answers common questions, and routes complex inquiries to a human agent.",
        "useCases": [
            "Provide real-time support to website visitors",
            "Answer common questions and FAQs",
            "Route complex inquiries to a human agent"
        ],
        "relatedSystems": "Zendesk, Freshdesk, website platforms, Engini platform"
    },
    {
        "name": "Sales Follow-Up Agent",
        "category": "Sales & Marketing",
        "icon": "headset",
        "description": "Automatically sends personalized follow-up emails to prospects after sales calls or meetings, using key points from the conversation to create a professional message.",
        "useCases": [
            "Draft post-call follow-up emails automatically",
            "Customize content based on conversation highlights",
            "Log emails and activities in the CRM"
        ],
        "relatedSystems": "Outlook, Gmail, Salesforce, HubSpot, Engini platform"
    },
    {
        "name": "Creative Asset Management Agent",
        "category": "Marketing Automation",
        "icon": "images",
        "description": "Manages the lifecycle of creative assets, from organizing and tagging files to ensuring brand compliance and tracking usage across different campaigns.",
        "useCases": [
            "Organize and tag creative assets automatically",
            "Ensure brand compliance in all assets",
            "Track asset usage across campaigns"
        ],
        "relatedSystems": "Adobe Creative Cloud, Canva, Digital Asset Management (DAM), Engini platform"
    },
    {
        "name": "Customer Segmentation & Personalization Agent",
        "category": "eCommerce",
        "icon": "user-star",
        "description": "Dynamically segments customers based on their purchase history and behavior, delivering personalized product recommendations and offers to increase sales.",
        "useCases": [
            "Segment customers for personalized offers",
            "Deliver personalized product recommendations",
            "Increase customer lifetime value"
        ],
        "relatedSystems": "Shopify, Salesforce Commerce Cloud, CRM, Engini platform"
    },
    {
        "name": "Contract Review Copilot",
        "category": "Legal Automation",
        "icon": "gavel",
        "description": "Assists legal professionals in the review of contracts by identifying potential risks, inconsistencies, and key clauses in real-time.",
        "useCases": [
            "Flag risky or inconsistent clauses in contracts",
            "Extract key terms and conditions",
            "Automate contract summarization"
        ],
        "relatedSystems": "Contract Management Systems, Microsoft Word, Engini platform"
    },
    {
        "name": "API Monitoring Agent",
        "category": "Software Development",
        "icon": "chart-line",
        "description": "Monitors the performance and uptime of APIs and web services, providing real-time alerts and detailed reports on their health and status.",
        "useCases": [
            "Monitor API performance and uptime",
            "Send real-time alerts on API errors",
            "Provide detailed reports on API health"
        ],
        "relatedSystems": "Postman, API management platforms, Engini platform"
    },
    {
        "name": "Recruitment Candidate Communication Agent",
        "category": "Recruitment",
        "icon": "phone",
        "description": "Automates communication with candidates throughout the recruitment process, sending updates, reminders, and personalized messages to improve the candidate experience.",
        "useCases": [
            "Automate communication with candidates",
            "Send reminders for interviews and assessments",
            "Provide personalized updates on their application status"
        ],
        "relatedSystems": "Greenhouse, Taleo (ATS), email platforms, Engini platform"
    },
    {
        "name": "Task Automation Agent",
        "category": "Internal Productivity",
        "icon": "clipboard-check",
        "description": "Performs simple, repetitive tasks automatically, such as sending emails, moving files, or updating spreadsheets based on predefined triggers.",
        "useCases": [
            "Send an email when a new row is added to a spreadsheet",
            "Move files to a new folder based on a trigger",
            "Automate simple data entry tasks"
        ],
        "relatedSystems": "Google Sheets, Microsoft Excel, Google Drive, Dropbox, Engini platform"
    },
    {
        "name": "IT Troubleshooting Agent (Internal)",
        "category": "IT Support",
        "icon": "wrench",
        "description": "Assists employees with common technical issues by providing clear, step-by-step guidance for problem resolution.",
        "useCases": [
            "Diagnose common IT problems (e.g., VPN, software issues)",
            "Guide users through troubleshooting steps",
            "Gather context through clarifying questions"
        ],
        "relatedSystems": "Remote support tools, knowledge bases, Engini platform"
    },
    {
        "name": "Supplier Invoice Matching Agent",
        "category": "Finance Automation",
        "icon": "receipt",
        "description": "Automatically matches supplier invoices with purchase orders and goods receipts, flagging any discrepancies for human review and approval.",
        "useCases": [
            "Match invoices to purchase orders",
            "Identify and flag discrepancies",
            "Automate the three-way matching process"
        ],
        "relatedSystems": "ERP, procurement software, Engini platform"
    },
    {
        "name": "Performance Analytics Agent",
        "category": "BI/Analytics",
        "icon": "chart-line",
        "description": "Analyzes employee performance data to identify high performers, training needs, and potential retention risks, providing insights for HR and management.",
        "useCases": [
            "Analyze employee performance metrics",
            "Identify skill gaps and training needs",
            "Predict employee turnover and retention risks"
        ],
        "relatedSystems": "HRIS, performance management software, BI tools, Engini platform"
    },
    {
        "name": "Employee Helpdesk Agent",
        "category": "HR & People Ops",
        "icon": "life-buoy",
        "description": "A conversational agent that serves as a single point of contact for employees to get answers to HR and IT questions, submit requests, and access resources.",
        "useCases": [
            "Provide answers to HR and IT questions",
            "Manage employee requests for leave or information",
            "Provide a single point of contact for all employee queries"
        ],
        "relatedSystems": "HRIS, ITSM, internal knowledge bases, Engini platform"
    },
    {
        "name": "Dynamic Reporting Agent",
        "category": "BI/Analytics",
        "icon": "chart-bar",
        "description": "Allows business users to build and customize their own reports and dashboards on demand using a simple, no-code interface.",
        "useCases": [
            "Enable business users to build their own reports",
            "Customize reports and dashboards without IT help",
            "Provide on-demand access to business data"
        ],
        "relatedSystems": "Power BI, Tableau, SQL Databases, Engini platform"
    },
    {
        "name": "Supplier Invoice Approval Agent",
        "category": "Finance Automation",
        "icon": "receipt",
        "description": "Automates the approval process for supplier invoices, routing them to the correct managers based on the invoice amount and department.",
        "useCases": [
            "Route invoices for approval based on business rules",
            "Send automated reminders to managers for approval",
            "Track the status of all invoice approvals"
        ],
        "relatedSystems": "ERP, accounting software, email platforms, Engini platform"
    },
    {
        "name": "Internal Talent Matching Agent",
        "category": "HR & People Ops",
        "icon": "message-square-heart",
        "description": "Helps the organization find the most suitable employee for a project or task based on skills, experience, and availability.",
        "useCases": [
            "Match internal talent to project needs",
            "Build and maintain employee skills profiles",
            "Promote internal mobility and career development"
        ],
        "relatedSystems": "HRIS, LMS (Learning Management System), Engini platform"
    },
    {
        "name": "Market Trend Analysis Agent",
        "category": "Marketing Automation",
        "icon": "chart-line",
        "description": "Analyzes market data, news, and competitor activity to identify emerging trends and opportunities for new products, services, or marketing campaigns.",
        "useCases": [
            "Identify emerging market trends",
            "Analyze competitor activity and strategy",
            "Provide insights for new product development"
        ],
        "relatedSystems": "Data aggregators, BI tools, social listening platforms, Engini platform"
    },
    {
        "name": "IT System Provisioning Agent",
        "category": "IT Operations",
        "icon": "monitor-cog",
        "description": "Automates the provisioning of new IT systems, servers, and cloud resources based on predefined templates and requests, ensuring consistent and secure setup.",
        "useCases": [
            "Automate the provisioning of new servers",
            "Ensure consistent and secure system setup",
            "Reduce the time and effort required for IT provisioning"
        ],
        "relatedSystems": "AWS, Azure, Google Cloud, configuration management tools, Engini platform"
    },
    {
        "name": "Sales Lead Qualification Agent",
        "category": "Sales & Marketing",
        "icon": "badge-dollar-sign",
        "description": "Qualifies new sales leads by gathering information from various sources, scoring them based on predefined criteria, and routing them to the right sales rep.",
        "useCases": [
            "Qualify new sales leads automatically",
            "Gather information from external sources",
            "Route leads to the right sales rep"
        ],
        "relatedSystems": "Salesforce, HubSpot, lead enrichment tools, Engini platform"
    },
    {
        "name": "Customer Data Platform Agent",
        "category": "eCommerce",
        "icon": "database",
        "description": "Gathers and unifies customer data from various sources into a single, comprehensive profile, enabling highly personalized marketing and service.",
        "useCases": [
            "Unify customer data from multiple sources",
            "Create comprehensive customer profiles",
            "Enable personalized marketing and service"
        ],
        "relatedSystems": "Shopify, Salesforce Commerce Cloud, CRM, Engini platform"
    },
    {
        "name": "Employee Feedback Agent",
        "category": "HR & People Ops",
        "icon": "id-card-lanyard",
        "description": "Provides a confidential channel for employees to submit feedback and suggestions, and a dashboard for HR to analyze trends and respond to concerns.",
        "useCases": [
            "Provide a confidential channel for employee feedback",
            "Analyze feedback and identify key trends",
            "Improve employee engagement and satisfaction"
        ],
        "relatedSystems": "Employee survey tools, HRIS, Engini platform"
    },
    {
        "name": "Fraud Detection Agent (E-commerce)",
        "category": "eCommerce",
        "icon": "cctv",
        "description": "Analyzes customer transactions and behavior to detect fraudulent activity, flagging suspicious orders and alerting the e-commerce team.",
        "useCases": [
            "Detect fraudulent transactions in real-time",
            "Flag suspicious orders for review",
            "Reduce financial losses due to fraud"
        ],
        "relatedSystems": "Shopify, WooCommerce, payment gateways, Engini platform"
    },
    {
        "name": "Training & Development Agent",
        "category": "HR & People Ops",
        "icon": "graduation-cap",
        "description": "Automates the management of employee training and development, from assigning courses and tracking progress to sending reminders and generating completion certificates.",
        "useCases": [
            "Automate course assignment and enrollment",
            "Track employee progress in training",
            "Generate completion certificates and reports"
        ],
        "relatedSystems": "LMS, HRIS, Engini platform"
    },
    {
        "name": "Data Governance Agent",
        "category": "Business Operations",
        "icon": "database",
        "description": "Enforces data governance policies by monitoring data quality, access, and usage across all systems, ensuring compliance with internal and external regulations.",
        "useCases": [
            "Monitor data quality and consistency",
            "Enforce data access and usage policies",
            "Ensure compliance with data regulations"
        ],
        "relatedSystems": "Data management platforms, GRC platforms, Engini platform"
    },
    {
        "name": "Digital Asset Distribution Agent",
        "category": "Marketing Automation",
        "icon": "card-sim",
        "description": "Automates the distribution of digital assets to various platforms and partners, ensuring the right files are sent to the right places at the right time.",
        "useCases": [
            "Automate the distribution of creative assets",
            "Send marketing materials to partners",
            "Ensure timely delivery of digital files"
        ],
        "relatedSystems": "DAM, content management systems, email platforms, Engini platform"
    },
    {
        "name": "Customer Journey Mapping Agent",
        "category": "CX/Support",
        "icon": "route",
        "description": "Analyzes customer interactions across various touchpoints to create a comprehensive map of the customer journey, identifying pain points and opportunities for improvement.",
        "useCases": [
            "Map the customer journey across all touchpoints",
            "Identify pain points and opportunities for improvement",
            "Visualize the customer experience"
        ],
        "relatedSystems": "CRM, CDP, marketing automation platforms, Engini platform"
    },
    {
        "name": "IT Service Catalog Agent",
        "category": "IT Support",
        "icon": "book-open",
        "description": "A conversational agent that provides a self-service IT catalog for employees to request software, hardware, and services, and tracks the status of their requests.",
        "useCases": [
            "Provide a self-service IT catalog",
            "Track the status of IT service requests",
            "Automate the fulfillment of IT requests"
        ],
        "relatedSystems": "ServiceNow, Zendesk, IT provisioning tools, Engini platform"
    },
    {
        "name": "Sales Performance Agent",
        "category": "BI/Analytics",
        "icon": "chart-bar",
        "description": "Analyzes sales data to track sales team performance, identify top performers, and provide insights for coaching and strategy adjustments.",
        "useCases": [
            "Track sales team performance metrics",
            "Identify top performers and sales trends",
            "Provide insights for sales coaching"
        ],
        "relatedSystems": "Salesforce, HubSpot, BI tools, Engini platform"
    },
    {
        "name": "Tax Filing Agent",
        "category": "Finance Automation",
        "icon": "receipt",
        "description": "Assists employees and the finance department with tax-related processes, providing guidance on forms and ensuring compliance.",
        "useCases": [
            "Guide on tax forms and procedures",
            "Help find and pre-fill tax documents",
            "Reduce errors in tax filing"
        ],
        "relatedSystems": "Payroll systems, HR portals, tax software, Engini platform"
    },
    {
        "name": "Employee Engagement Agent",
        "category": "HR & People Ops",
        "icon": "smile",
        "description": "Monitors employee sentiment, provides resources for professional development, and automates recognition to improve morale and retention.",
        "useCases": [
            "Monitor employee sentiment and morale",
            "Provide professional development resources",
            "Automate employee recognition"
        ],
        "relatedSystems": "HRIS, internal communication tools, Engini platform"
    },
    {
        "name": "AI-Powered Search Agent",
        "category": "Internal Productivity",
        "icon": "search",
        "description": "A powerful search agent that uses AI to provide accurate and relevant results from all internal documents and systems, saving employees time.",
        "useCases": [
            "Provide accurate search results from internal documents",
            "Find relevant information from different systems",
            "Save employees time by reducing search effort"
        ],
        "relatedSystems": "SharePoint, Confluence, ERP, CRM, Engini platform"
    },
    {
        "name": "Compliance & Policy Agent",
        "category": "Legal Automation",
        "icon": "gavel",
        "description": "Monitors changes in company policies and regulatory requirements, flagging relevant documents and processes for updates to ensure compliance.",
        "useCases": [
            "Monitor policy and regulatory changes",
            "Flag internal documents for compliance updates",
            "Generate compliance reports for audits"
        ],
        "relatedSystems": "GRC platforms, document management systems, Engini platform"
    },
    {
        "name": "Invoice Discrepancy Agent",
        "category": "Finance Automation",
        "icon": "receipt",
        "description": "Automates the identification and flagging of discrepancies in invoices, such as incorrect amounts or missing information, for human review.",
        "useCases": [
            "Identify discrepancies in invoices automatically",
            "Flag invoices with incorrect amounts or missing data",
            "Reduce errors in the accounts payable process"
        ],
        "relatedSystems": "ERP, accounting software, OCR tools, Engini platform"
    },
    {
        "name": "Social Media Content Approval Agent",
        "category": "Marketing Automation",
        "icon": "check-square",
        "description": "Manages the approval workflow for social media content, routing posts to relevant stakeholders for review and approval before they are published.",
        "useCases": [
            "Route social media posts for approval",
            "Ensure brand compliance in social content",
            "Track the status of all content approvals"
        ],
        "relatedSystems": "Hootsuite, Buffer, social media platforms, Engini platform"
    },
    {
        "name": "Customer Churn Prediction Agent",
        "category": "BI/Analytics",
        "icon": "trending-up-down",
        "description": "Analyzes customer data to predict which customers are at risk of leaving, and provides proactive recommendations to improve retention.",
        "useCases": [
            "Predict which customers are likely to churn",
            "Provide proactive recommendations for retention",
            "Improve customer loyalty and satisfaction"
        ],
        "relatedSystems": "CRM, CDP, BI tools, Engini platform"
    },
    {
        "name": "API Documentation Agent",
        "category": "Software Development",
        "icon": "file-code-2",
        "description": "Automatically generates and updates API documentation based on code changes, ensuring documentation is always accurate and up-to-date.",
        "useCases": [
            "Generate API documentation from code",
            "Update documentation with every code change",
            "Ensure developers have accurate documentation"
        ],
        "relatedSystems": "GitHub, GitLab, Swagger, Engini platform"
    },
    {
        "name": "IT Service Level Agent",
        "category": "IT Support",
        "icon": "chart-line",
        "description": "Monitors service level agreements (SLAs) for IT support tickets, sending alerts when tickets are at risk of breaching their SLA and providing performance reports.",
        "useCases": [
            "Monitor SLA compliance for support tickets",
            "Send alerts when tickets are at risk of breaching SLA",
            "Generate performance reports on SLA adherence"
        ],
        "relatedSystems": "ServiceNow, Zendesk, ITSM tools, Engini platform"
    },
    {
        "name": "Digital Marketing Analytics Agent",
        "category": "Marketing Automation",
        "icon": "chart-pie",
        "description": "Gathers and analyzes data from digital marketing campaigns to provide insights on performance, ROI, and opportunities for optimization.",
        "useCases": [
            "Analyze performance of digital marketing campaigns",
            "Track ROI and conversion rates",
            "Provide insights for campaign optimization"
        ],
        "relatedSystems": "Google Analytics, Google Ads, Facebook Ads, Engini platform"
    },
    {
        "name": "Employee Travel Booking Agent",
        "category": "Internal Productivity",
        "icon": "plane",
        "description": "A conversational agent that handles employee travel requests, finding flights and hotels, and submitting them for approval.",
        "useCases": [
            "Handle employee travel requests",
            "Find flights and hotels based on preferences",
            "Submit travel requests for approval"
        ],
        "relatedSystems": "Travel booking platforms, expense management software, Engini platform"
    },
    {
        "name": "Logistics Dispatch Agent",
        "category": "Logistics",
        "icon": "truck",
        "description": "Automates the dispatch of delivery vehicles, assigning shipments to drivers based on their route, availability, and delivery windows.",
        "useCases": [
            "Automate the dispatch of delivery vehicles",
            "Assign shipments to drivers efficiently",
            "Optimize driver routes and schedules"
        ],
        "relatedSystems": "Fleet management systems, WMS, Engini platform"
    },
    {
        "name": "Credit Underwriting Agent",
        "category": "Financial Services",
        "icon": "credit-card",
        "description": "Assesses loan and credit applications by pulling and analyzing data from various sources to calculate financial ratios and provide an underwriting recommendation.",
        "useCases": [
            "Analyze loan applicant data",
            "Calculate key financial ratios",
            "Draft underwriting reports"
        ],
        "relatedSystems": "Credit bureaus, CRM, BI tools, Engini platform"
    }
];
const allCategories = [...new Set(allAgents.map(agent => agent.category))];

const filterContainer = document.getElementById("filterContainer");
const agentCatalog = document.getElementById("agentCatalog");
const agentDetailsView = document.getElementById("agentDetailsView");
const searchInput = document.getElementById("searchInput");
const backBtn = document.getElementById("backToCatalogBtn");

const agentDetailsLogo = document.getElementById("agentDetailsLogo");
const useCasesTitle = document.getElementById("useCasesTitle");
const agentDescription = document.getElementById("agentDescription");
const useCasesList = document.getElementById("useCasesList");
const relatedSystemsList = document.getElementById("relatedSystemsList");

function renderCategories() {
    filterContainer.innerHTML = "";

    const allBtn = document.createElement("a");
    allBtn.href = "#";
    allBtn.textContent = "All Categories";
    allBtn.className = "filter-item active";
    allBtn.addEventListener("click", (e) => {
        e.preventDefault();
        filterAgents("All Categories");
        document.querySelectorAll(".filter-item").forEach(item => item.classList.remove("active"));
        allBtn.classList.add("active");
    });
    filterContainer.appendChild(allBtn);

    allCategories.forEach(category => {
        const categoryBtn = document.createElement("a");
        categoryBtn.href = "#";
        categoryBtn.textContent = category;
        categoryBtn.className = "filter-item";
        categoryBtn.addEventListener("click", (e) => {
            e.preventDefault();
            filterAgents(category);
            document.querySelectorAll(".filter-item").forEach(item => item.classList.remove("active"));
            categoryBtn.classList.add("active");
        });
        filterContainer.appendChild(categoryBtn);
    });
}

function renderAgents(agents) {
    agentCatalog.innerHTML = "";
    agents.forEach(agent => {
        const card = document.createElement("div");
        card.className = "agent-card";

        const iconOrImage = agent.icon
            ? `<i data-lucide="${agent.icon}" class="lucide-icon"></i>`
            : `<img src="${agent.logo}" alt="${agent.name} logo" />`;

        card.innerHTML = `
            ${iconOrImage}
            <strong>${agent.name}</strong>
            <p class="agent-category">${agent.category}</p>
        `;
        card.onclick = () => showAgentDetails(agent);
        agentCatalog.appendChild(card);
    });

    if (window.createIcons) window.createIcons();
}
function getRandomRating() {
  return Math.floor(Math.random() * 2) + 4;
}

function getCompanyUsage() {
  return Math.floor(Math.random() * 50) + 5;
}

function renderStars(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function getRandomRating() {
  return Math.floor(Math.random() * 2) + 4;
}

function renderStars(count) {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
}

function getPersistedCompanyUsage(agentName) {
  const key = `agent_usage_${agentName}`;
  let usage = localStorage.getItem(key);
  if (!usage) {
    usage = Math.floor(Math.random() * 50) + 5; 
    localStorage.setItem(key, usage);
  }
  return usage;
}

function getPersistedCompanyUsage(agentName) {
  const key = `agent_usage_${agentName}`;
  let usage = localStorage.getItem(key);
  if (!usage) {
    usage = Math.floor(Math.random() * 50) + 5; 
    localStorage.setItem(key, usage);
  }
  return usage;
}

function getPersistedRating(agentName) {
  const key = `agent_rating_${agentName}`;
  let rating = localStorage.getItem(key);
  if (!rating) {

    const raw = Math.random() * 2.5 + 2.5; 
    rating = (Math.round(raw * 2) / 2).toFixed(1); 
    localStorage.setItem(key, rating);
  }
  return parseFloat(rating);
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'; 
  }
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'; 
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'; 
  }

  return starsHTML;
}

function renderAgents(agents) {
  const agentCatalog = document.getElementById('agentCatalog');
  agentCatalog.innerHTML = "";

  agents.forEach(agent => {
    const companies = getPersistedCompanyUsage(agent.name);
    const rating = getPersistedRating(agent.name);

    const card = document.createElement("div");
    card.className = "agent-card";

    const iconOrImage = agent.icon
      ? `<i data-lucide="${agent.icon}" class="lucide-icon"></i>`
      : `<img src="${agent.logo || '/placeholder-agent.png'}" alt="${agent.name} logo" />`;

    card.innerHTML = `
      ${iconOrImage}
      <strong>${agent.name}</strong>
      <p class="agent-category">${agent.category}</p>
      <div class="star-rating">${renderStars(rating)} <span style="font-size: 14px;">(${rating})</span></div>
      <div class="rating-source">Used by ${companies} companies</div>
    `;

    card.onclick = () => showAgentDetails(agent);
    agentCatalog.appendChild(card);
  });

  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

function filterAgents(category) {
    if (category === "All Categories") {
        renderAgents(allAgents);
    } else {
        const filtered = allAgents.filter(agent => agent.category === category);
        renderAgents(filtered);
    }
}

backBtn.addEventListener("click", () => {
    agentDetailsView.classList.remove("view-active");
    agentDetailsView.classList.add("view-inactive");
    document.getElementById("mainCatalogView").classList.add("view-active");
    document.getElementById("mainCatalogView").classList.remove("view-inactive");
});

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allAgents.filter(agent =>
        agent.name.toLowerCase().includes(query) ||
        agent.category.toLowerCase().includes(query)
    );
    renderAgents(filtered);
});
function showAgentDetails(agent) {
    const container = document.querySelector(".agent-details-header");
    const logo = agentDetailsLogo;

[...container.children].forEach(child => {
  if (child !== useCasesTitle) child.remove();
});

    logo.style.display = "none";

    if (agent.icon) {
        const lucideEl = document.createElement("i");
        lucideEl.setAttribute("data-lucide", agent.icon);
        lucideEl.classList.add("lucide-icon");

        container.insertBefore(lucideEl, useCasesTitle);
        if (window.createIcons) window.createIcons();
    } else if (agent.logo) {
        logo.src = agent.logo;
        logo.alt = agent.name + " logo";
        logo.style.display = "block";
    }

    useCasesTitle.textContent = agent.name;
    agentDescription.textContent = agent.description;
    relatedSystemsList.textContent = agent.relatedSystems;

    useCasesList.innerHTML = "";
    agent.useCases.forEach(uc => {
        const li = document.createElement("li");
        li.textContent = uc;
        useCasesList.appendChild(li);
    });

    document.getElementById("mainCatalogView").classList.remove("view-active");
    document.getElementById("mainCatalogView").classList.add("view-inactive");
    agentDetailsView.classList.add("view-active");
    agentDetailsView.classList.remove("view-inactive");
}
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
    });
});


renderCategories();
renderAgents(allAgents);