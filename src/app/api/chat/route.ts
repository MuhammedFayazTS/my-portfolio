import { contactInfo, projectsData, skills } from "@/content/data";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: [{ text: string }] | undefined;
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// Create a context string from your data
const createContextFromData = () => {
  const projects = projectsData
    .map((p) => `- ${p.name}: ${p.descritpion}`)
    .join("\n");

  const skill = skills.map((s) => s.name).join(", ");

  return `
      About Muhammed Fayaz T S:
      - Full Stack Developer specializing in React and Node JS
      - With 1 year of experience in web development and strong programming knowledge.
      - Email: ${contactInfo.email}
      
      Core Expertise:
      - Next.js & React Development: Building high-performance, scalable applications
      - Transforming Business Needs: Translating business requirements into efficient technical solutions
      - Full Stack Development: ${skill}
      
      Full Stack Developer Capabilities:
      1. Full Stack Development:
         - Proficient in MongoDB, Express, React, and Node.js for building scalable web applications.
         - Experience in developing RESTful APIs and integrating third-party services.
      
      2. Database Management:
         - Skilled in working with MongoDB for data storage, retrieval, and optimization.
         - Basic understanding of data modeling, indexing, and query optimization.
      
      3. UI/UX Development:
         - Experience in building responsive user interfaces.
         - Knowledge of creating intuitive designs that enhance user experience.
      
      4. Authentication & Security:
         - Implemented secure user authentication using JWT and OAuth.
         - Familiar with basic authorization techniques and role-based access control.
            
      Notable Projects:
      ${projects}
            
      Services:
      - Custom Web Application Development
      - Full Stack Development 
      - API Development & Integration
      - User Authentication & Security
      - Performance Optimization & Scalability Planning
    
    `;
};

const MESSAGE_HISTORY_LIMIT = 5;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
    });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI assistant for Muhammed Fayaz T S. Use the following information to help answer questions:
                    ${createContextFromData()}
    
                    Guidelines:
                    - Be enthusiastic and professional
                    - Provide specific, detailed examples from the context
                    - Highlight relevant projects and technical capabilities
                    - Be confident about AI integration abilities
                    - Emphasize practical, real-world applications
                    - Keep responses well-structured with clear sections
                    - Use bullet points or numbered lists for better readability
                    - Always mention relevant experience and past projects
                    - For specific project inquiries, guide users to the contact form
                    - Focus on Fayaz's expertise in Next.js, React, and Full Stack capabilities`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "I understand. I'll act as Fayaz's AI assistant, providing detailed, confident responses about his experience in Next.js development, and full-stack capabilities. I'll emphasize his practical approach and successful project implementations while maintaining professionalism and enthusiasm.",
            },
          ],
        },
        ...messages.slice(-MESSAGE_HISTORY_LIMIT).map((msg: Message) => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        })),
      ],
    });

    const result = await chat.sendMessage(
      messages[messages.length - 1].content
    );
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
