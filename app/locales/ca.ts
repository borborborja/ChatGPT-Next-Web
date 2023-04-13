import { SubmitKey } from "../store/app";
import type { LocaleType } from "./index";

const ca: LocaleType = {
  WIP: "En construcció...",
  Error: {
    Unauthorized:
      "Accés no autoritzat, si us plau introdueix el codi d'accés a la pàgina de configuració.",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} missatges`,
  },
  Chat: {
    SubTitle: (count: number) => `${count} missatges amb ChatGPT`,
    Actions: {
      ChatList: "Anar a la llista de xats",
      CompressedHistory: "Historial de memòria comprimit",
      Export: "Exportar tots els missatges com a Markdown",
      Copy: "Copiar",
      Stop: "Parar",
      Retry: "Reintentar",
    },
    Rename: "Renombrar xat",
    Typing: "Escribint...",
    Input: (submitKey: string) => {
      var inputHints = `Escriu alguna cosa i prem ${submitKey} per enviar`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += ", prem Shift + Enter per una nova línia";
      }
      return inputHints;
    },
    Send: "Enviar",
  },
  Export: {
    Title: "Tots els missatges",
    Copy: "Copiar tot",
    Download: "Descarregar",
    MessageFromYou: "Missatge teu",
    MessageFromChatGPT: "Missatge de ChatGPT",
  },
  Memory: {
    Title: "Historial de memòria",
    EmptyContent: "Encara no hi ha res.",
    Copy: "Copiar tot",
    Send: "Enviar memòria",
    Reset: "Resetejar sessió",
    ResetConfirm:
      "Resetejar eliminarà l'historial de la conversa actual i l'historial en memòria. Estàs segur que vols resetejar?",
  },
  Home: {
    NewChat: "Nou xat",
    DeleteChat: "Confirmar l'eliminació de la conversa seleccionada?",
    DeleteToast: "Xat esborrat",
    Revert: "Revertir",
  },
  Settings: {
    Title: "Configuració",
    SubTitle: "Totes les configuracions",
    Actions: {
      ClearAll: "Borrar totes les dades",
      ResetAll: "Restableix totes les configuracions",
      Close: "Tancar",
      ConfirmResetAll: {
        Confirm: "Està segur que vols restablir totes les configuracions?",
      },
      ConfirmClearAll: {
        Confirm: "Estàs segur que vols restablir tots els xats?",
      },
    },
    Lang: {
      Name: "Language",
      Options: {
        cn: "Xinès",
        en: "Anglès",
        tw: "Taiwanès",
        es: "Castellà",
        it: "Italià",
        tr: "Turc",
        jp: "Japonès",
      },
    },
    Avatar: "Avatar",
    FontSize: {
      Title: "Mida de la font",
      SubTitle: "Ajusta la mida de la font del contingut del xat",
    },
    Update: {
      Version: (x: string) => `Versió: ${x}`,
      IsLatest: "Darrera versió",
      CheckUpdate: "Cerca actualitzacions",
      IsChecking: "Cercant actualitzacions...",
      FoundUpdate: (x: string) => `S'ha trobat una nova versió: ${x}`,
      GoToUpdate: "Actualitzar",
    },
    SendKey: "Tecla d'enviament",
    Theme: "Tema",
    TightBorder: "Vora ajusta",
    SendPreviewBubble: "Enviar bombolla de vista prèvia",
    Prompt: {
      Disable: {
        Title: "Desactivar autoemplenament",
        SubTitle: "Escriu / per activar l'autoemplenament",
      },
      List: "Llista d'autoemplenament",
      ListCount: (builtin: number, custom: number) =>
        `${builtin} incorporat, ${custom} definit per l'usuari`,
      Edit: "Editar",
    },
    HistoryCount: {
      Title: "Quantitat de missatges adjunts",
      SubTitle: "Nombre de missatges enviats adjunts a cada sol·licitud",
    },
    CompressThreshold: {
      Title: "Llindar de compressió de l'historial",
      SubTitle:
        "Es comprimiràn els missatges si la longitud dels missatges no comprimits supera el valor",
    },
    Token: {
      Title: "Clau de l'API",
      SubTitle: "Utilitza la teva clau per ignorar el límit de codis d'accés",
      Placeholder: "Clau de l'API d'OpenAI",
    },
    Usage: {
      Title: "Saldo del compte",
      SubTitle(used: any, total: any) {
        return `Utilitzat $${used}, subscripció $${total}`;
      },
      IsChecking: "Comprovant...",
      Check: "Comprovar de nou",
      NoAccess: "Introdueix la clau de l'API per comprovar el saldo",
    },
    AccessCode: {
      Title: "Codi d'accés",
      SubTitle: "Control d'accés habilitat",
      Placeholder: "Necessita un codi d'accés",
    },
    Model: "Model",
    Temperature: {
      Title: "Temperatura",
      SubTitle: "Un valor més alt genera una sortida més aleatòria",
    },
    MaxTokens: {
      Title: "Màxim de tokens",
      SubTitle: "Longitud màxima de tokens d'entrada i tokens generats",
    },
    PresencePenlty: {
      Title: "Penalització de presència",
      SubTitle:
        "Un valor més alt augmenta la probabilitat de parlar sobre nous temes",
    },
  },
  Store: {
    DefaultTopic: "Nova conversa",
    BotHello: "Hola! Com et puc ajudar avui?",
    Error: "Alguna cosa ha sortit malament, si us plau intenta-ho més tard.",
    Prompt: {
      History: (content: string) =>
        "Això és un resum de l'historial del xat entre la IA i l'usuari, com a recapitulació: " +
        content,
      Topic:
        "Si us plau, genera un títol de quatre o cinc paraules que resumeixi la nostra conversa sense cap inici, puntuació, cometes, punts, símbols o text addicional. Elimina les cometes que l'envolten.",
      Summarize:
        "Resumeix la nostra discusió breument en 200 caràcters o menys, per utilitzar-lo com a recordatori per a futurs contextos.",
    },
    ConfirmClearAll:
      "Confirmar per esborrar totes les dades del xat i la configuració?",
  },
  Copy: {
    Success: "Copiant al portapapers",
    Failed:
      "La còpia ha fallat, si us plau concedeix permís per accedir al portapapers",
  },
  Context: {
    Toast: (x: any) => `Ample ${x} prompts contextuals`,
    Edit: "Contexte i prompts en memòria",
    Add: "Afegir-ne un",
  },
};

export default ca;
