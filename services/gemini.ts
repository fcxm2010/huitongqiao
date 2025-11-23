import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const MODEL_NAME = "gemini-2.5-flash";

const SYSTEM_INSTRUCTION = `
你是一位专门研究中国抗日战争历史，特别是滇缅公路（Burma Road）和惠通桥（Huitong Bridge）的历史学家。
你的名字叫“守桥人”。
请用中文回答用户的问题。你的语气应当庄重、博学且富有情感。
当用户询问关于惠通桥的历史、地理位置、战略意义或相关战役（如松山战役）时，请提供准确、详尽的信息。

关键历史档案：
1. **建造始末 (1935)**：由爱国华侨领袖梁金山先生（Liang Jinshan）捐资修建，聘请美国工程师设计。是当时滇缅公路上横跨怒江的关键通道。
2. **惊天一炸 (1942.05.05)**：
   - 背景：日军攻陷龙陵，直逼怒江。
   - 事件：日军便衣队混入难民试图夺桥，守桥宪兵识破并鸣枪。工兵营长张祖武在千钧一发之际按下起爆器。
   - 意义：这一炸将日军阻隔于怒江西岸，形成了长达两年的隔江对峙，保卫了昆明和大后方。
3. **战略地位**：怒江大峡谷垂直落差大，水流湍急，惠通桥是唯一的咽喉通道。“一桥锁怒江，天堑变通途”。
4. **英雄群体**：除了张祖武，还有无数南洋机工（Nanyang Mechanics）驾驶卡车往返于此运输抗战物资。

如果用户询问与之无关的话题，请礼貌地将话题引回到惠通桥或滇缅抗战历史上。
`;

let chatSession: Chat | null = null;
let ai: GoogleGenAI | null = null;

const getAiClient = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("未找到 API 密钥。请检查您的环境变量设置。");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const getChatSession = (): Chat => {
  if (!chatSession) {
    const client = getAiClient();
    chatSession = client.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return result.text || "抱歉，我暂时无法回答这个问题，请稍后再试。";
  } catch (error) {
    console.error("Gemini API 错误:", error);
    if (error instanceof Error && (error.message.includes("API Key not found") || error.message.includes("未找到 API 密钥"))) {
      return "系统配置错误：未找到 API 密钥。请联系管理员配置 GEMINI_API_KEY。";
    }
    return "连接历史数据库时出现错误，请检查您的网络或API密钥设置。";
  }
};