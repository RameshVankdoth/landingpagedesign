const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://vankyrs:rukHnjdLGabqQGnA@problestatement.ztrbltk.mongodb.net/?retryWrites=true&w=majority&appName=ProbleStatement';
const dbName = 'FrontendContent';  
const collectionName = 'Panes'; 


const data =[
    {
        "ContentId": 1,
        "ContentType": "Article",
        "TitleTile": "Introduction to Data Science",
        "Description": "A brief overview of data science concepts and methodologies.",
        "DetailedDescription": "This article provides an in-depth look into data science, including its applications, tools, and techniques used in the field. It covers fundamental concepts and offers practical insights for beginners and professionals alike.",
        "TileNum": 1,
        "PaneNum": 1,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-17T14:30:00Z"),
        "ExpirationDate": new Date("2025-09-17T00:00:00Z"),
        "Duration": 12,
        "Priority": 1,
        "Imgpath": "/images/data-science.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 2,
        "ContentType": "Tutorial",
        "TitleTile": "Getting Started with Node.js",
        "Description": "Step-by-step guide to setting up and using Node.js.",
        "DetailedDescription": "This tutorial covers the essentials of Node.js, including installation, setup, and writing your first Node.js application. It is aimed at developers new to the platform and provides practical examples to get started quickly.",
        "TileNum": 2,
        "PaneNum": 1,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-16T10:15:00Z"),
        "ExpirationDate": null,
        "Duration": 8,
        "Priority": 2,
        "Imgpath": "/images/nodejs-tutorial.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 3,
        "ContentType": "Webinar",
        "TitleTile": "Mastering JavaScript ES6",
        "Description": "Learn the latest features of JavaScript ES6 in this webinar.",
        "DetailedDescription": "Join us for a comprehensive webinar on JavaScript ES6 features. This session will cover new syntax, modules, promises, and other advancements in JavaScript. Perfect for developers looking to upgrade their skills.",
        "TileNum": 3,
        "PaneNum": 2,
        "Status": "Upcoming",
        "CreatedAt": new Date("2024-09-15T09:00:00Z"),
        "ExpirationDate": new Date("2024-10-15T00:00:00Z"),
        "Duration": 2,
        "Priority": 3,
        "Imgpath": "/images/js-es6-webinar.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 4,
        "ContentType": "Ebook",
        "TitleTile": "Advanced Python Programming",
        "Description": "An ebook covering advanced Python techniques and practices.",
        "DetailedDescription": "This ebook delves into advanced Python programming topics, including decorators, context managers, and metaclasses. Ideal for experienced Python developers looking to deepen their knowledge and skills.",
        "TileNum": 4,
        "PaneNum": 2,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-14T16:00:00Z"),
        "ExpirationDate": null,
        "Duration": 30,
        "Priority": 1,
        "Imgpath": "/images/advanced-python.jpg",
        "Clickable": "No"
    },
    {
        "ContentId": 5,
        "ContentType": "Podcast",
        "TitleTile": "Tech Talks: The Future of AI",
        "Description": "A podcast discussing the future trends in AI technology.",
        "DetailedDescription": "Tune into our podcast as experts discuss the future of artificial intelligence. Topics include machine learning, ethical considerations, and emerging technologies in AI.",
        "TileNum": 5,
        "PaneNum": 3,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-13T11:30:00Z"),
        "ExpirationDate": null,
        "Duration": 45,
        "Priority": 2,
        "Imgpath": "/images/ai-podcast.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 6,
        "ContentType": "Article",
        "TitleTile": "Understanding Quantum Computing",
        "Description": "An introduction to the principles of quantum computing and its potential impact on technology.",
        "DetailedDescription": "Explore the fascinating world of quantum computing. This article explains quantum bits, quantum entanglement, and the potential of quantum computers to revolutionize various fields.",
        "TileNum": 6,
        "PaneNum": 1,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-15T09:00:00Z"),
        "ExpirationDate": null,
        "Duration": 30,
        "Priority": 1,
        "Imgpath": "/images/quantum-computing.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 7,
        "ContentType": "Tutorial",
        "TitleTile": "Building REST APIs with Express.js",
        "Description": "A comprehensive guide on creating RESTful APIs using Express.js.",
        "DetailedDescription": "Learn how to build robust and scalable RESTful APIs with Express.js. This tutorial covers routing, middleware, and best practices for API development.",
        "TileNum": 7,
        "PaneNum": 2,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-16T10:00:00Z"),
        "ExpirationDate": null,
        "Duration": 60,
        "Priority": 3,
        "Imgpath": "/images/expressjs-tutorial.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 8,
        "ContentType": "Webinar",
        "TitleTile": "Future of Blockchain Technology",
        "Description": "Join us for a webinar discussing the future trends and applications of blockchain technology.",
        "DetailedDescription": "In this webinar, experts will delve into the future of blockchain technology, covering emerging trends, practical applications, and its potential to disrupt various industries.",
        "TileNum": 8,
        "PaneNum": 4,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-17T11:00:00Z"),
        "ExpirationDate": null,
        "Duration": 90,
        "Priority": 4,
        "Imgpath": "/images/blockchain-webinar.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 9,
        "ContentType": "Ebook",
        "TitleTile": "Mastering Data Science",
        "Description": "An ebook that provides an in-depth understanding of data science and its applications.",
        "DetailedDescription": "This ebook covers the essential aspects of data science, including data analysis, machine learning, and statistical modeling. It is designed for both beginners and experienced professionals.",
        "TileNum": 9,
        "PaneNum": 5,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-18T12:00:00Z"),
        "ExpirationDate": null,
        "Duration": 120,
        "Priority": 2,
        "Imgpath": "/images/data-science-ebook.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 10,
        "ContentType": "Podcast",
        "TitleTile": "Tech Innovations of 2024",
        "Description": "A podcast exploring the most exciting technological innovations of 2024.",
        "DetailedDescription": "Tune in to hear about the latest tech innovations of 2024. Our podcast covers breakthroughs in AI, robotics, and other cutting-edge technologies.",
        "TileNum": 10,
        "PaneNum": 6,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-19T13:00:00Z"),
        "ExpirationDate": null,
        "Duration": 50,
        "Priority": 5,
        "Imgpath": "/images/tech-innovations-podcast.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 11,
        "ContentType": "Article",
        "TitleTile": "Advancements in AI Ethics",
        "Description": "A deep dive into the ethical considerations and advancements in artificial intelligence.",
        "DetailedDescription": "This article explores the latest advancements in AI ethics, focusing on fairness, transparency, and accountability in AI systems. Learn about the challenges and solutions being discussed in the field.",
        "TileNum": 11,
        "PaneNum": 7,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-20T14:00:00Z"),
        "ExpirationDate": null,
        "Duration": 35,
        "Priority": 2,
        "Imgpath": "/images/ai-ethics.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 12,
        "ContentType": "Tutorial",
        "TitleTile": "Getting Started with React Native",
        "Description": "A step-by-step tutorial on how to start building mobile applications with React Native.",
        "DetailedDescription": "Learn how to get started with React Native in this comprehensive tutorial. It covers setting up your development environment, building your first app, and understanding the core concepts.",
        "TileNum": 12,
        "PaneNum": 8,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-21T15:00:00Z"),
        "ExpirationDate": null,
        "Duration": 70,
        "Priority": 3,
        "Imgpath": "/images/react-native-tutorial.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 13,
        "ContentType": "Webinar",
        "TitleTile": "The Evolution of Cybersecurity",
        "Description": "A webinar discussing the evolution of cybersecurity practices and threats.",
        "DetailedDescription": "Join our webinar to explore how cybersecurity has evolved over the years. Experts will discuss the changing landscape of threats, advancements in security technology, and best practices for safeguarding your digital assets.",
        "TileNum": 13,
        "PaneNum": 9,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-22T16:00:00Z"),
        "ExpirationDate": null,
        "Duration": 80,
        "Priority": 4,
        "Imgpath": "/images/cybersecurity-webinar.jpg",
        "Clickable": "Yes"
    },
    {
        "ContentId": 14,
        "ContentType": "Ebook",
        "TitleTile": "Introduction to Cloud Computing",
        "Description": "An introductory ebook on cloud computing concepts and technologies.",
        "DetailedDescription": "This ebook provides an introduction to cloud computing, including the various types of cloud services, deployment models, and benefits of cloud computing for businesses and individuals.",
        "TileNum": 14,
        "PaneNum": 10,
        "Status": "Active",
        "CreatedAt": new Date("2024-09-23T17:00:00Z"),
        "ExpirationDate": null,
        "Duration": 100,
        "Priority": 5,
        "Imgpath": "/images/cloud-computing-ebook.jpg",
        "Clickable": "Yes"
    }
]
async function main() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertMany(data);
        console.log("Data inserted:", result.insertedCount);
    } catch (err) {
        console.error("Error inserting data:", err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
