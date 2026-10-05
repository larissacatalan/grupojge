/* ============ Constantes ============ */
const KEY = "grupo-jge-painel-v2";
const STATUS = {
  afazer:    { label: "A fazer" },
  andamento: { label: "Em andamento" },
  aprovacao: { label: "Aguardando aprovação" },
  concluida: { label: "Concluída" }
};
const HORIZONS = {
  anual:      "Anual",
  trimestral: "Trimestral",
  mensal:     "Mensal",
  proximas:   "Próximas tarefas"
};
const FRONTS = {
  institucional: "Institucional",
  relacional:    "Relacional",
  comercial:     "Comercial",
  interno:       "Interno",
  reputacional:  "Reputacional"
};
const HORDER = Object.keys(HORIZONS);
const SHORT = { anual:"Anual", trimestral:"Trimestral", mensal:"Mensal", proximas:"Próxima" };
const FRONT_COLORS = { institucional:"#0F0F10", relacional:"#6D15FF", comercial:"#0E7490", interno:"#9700C9", reputacional:"#C2410C" };
const MONTHS = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const LINK_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
const DOC_ICON  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>`;

/* ============ Dados iniciais ============
   Conteúdo tirado dos "Norteadores Prj Mkt - Grupo JGE" e da reunião de onboarding (24/09/2026). */
/* Cada tarefa: horizon (coluna) + parent (tarefa da coluna anterior) + campos do plano de comunicação. */
const T = (id, horizon, parent, title, front, o={}) => ({ id, horizon, parent, title, front, status:"afazer", owner:"", due:"", notes:"",
  emissor:"Grupo JGE", conteudo:"", linguagem:"", canal:"", frequencia:"", receptor:"", invest:null, kpi:"", ...o });
const ONBOARDING = `# Contexto e Boas-Vindas
  - Reunião de onboarding da Megali Hub com o Grupo JGE
  - Objetivo do projeto: comunicação 360, interna e externa, de longo prazo
  - Expectativa de jornada além dos 6 meses iniciais de contrato
# Metodologia Megali Hub
  - Três etapas do trabalho:
    1. **Sentir:** imersão e conexão com a história e visão da empresa
    2. **Criar:** planejamento estratégico, linhas editoriais, ativações internas e externas
    3. **Adaptar:** processo contínuo de revisão e cocriação do plano
  - Plano de comunicação cobre: redes sociais, endomarketing, marketing de relacionamento, mídia paga e eventos
# Rotina de Trabalho
  - Reuniões quinzenais de alinhamento estratégico por frente (redes sociais, endomarketing, performance)
  - Grupo de WhatsApp para demandas rápidas e aprovações do dia a dia
  - E-mail para aprovações formais e documentos
  - Cronograma de redes sociais entregue com um mês de antecedência
  - Horário de atendimento: segunda a sexta, 9h às 18h
# Prioridades e Dores do Grupo JGE
  - Falta de braço executor: ações de marketing ficavam paradas por falta de dedicação interna
  - Ações pontuais sem planejamento contínuo
  - Necessidade de mapa estratégico visual com frentes, metas, datas e custos
  - Newsletters (Panorama JGE e Conexão JGE) com envios irregulares
  - Redes sociais do Grupo JGE travadas até ter estrutura para manter constância
  - Kit de boas-vindas para colaboradores descontinuado; brinde corporativo ainda em aberto
# Posicionamento Institucional
  - Grupo JGE não é só loteamento: inclui incorporação e outras empresas
  - Marca ainda muito associada à figura do Zé: empoderar lideranças como embaixadores
  - Programa "Embaixadores JGE" no radar
# Imersão Presencial
  - Prioridade máxima dos próximos 30 dias
  - Passado: história da empresa, construção da marca
  - Presente: práticas atuais, dores de relacionamento com cliente, gargalos operacionais
  - Futuro: visão do grupo, expansão, workshop de posicionamento e branding
# Próximos Passos
  - **Finalizar e assinar o contrato** — pequeno ajuste solicitado por Felipe
  - **Confirmar data da imersão presencial (Felipe)** — base do setup
  - **Criar grupo de WhatsApp do projeto (Felipe)**
  - **Compartilhar materiais de planejamento e identidade de marca (João e Felipe)**
  - **Enviar checklist de acessos necessários (Larissa)** — Meta, CRM e demais plataformas
  - **Compartilhar ações e campanhas já planejadas (Natália)**`;

const SEED = {
  config: {
    driveEndpoint: "",
    objetivo: "Apesar do longo histórico de sucesso das empresas do grupo em separado, o Grupo JGE ainda não estava posicionado no mercado de forma consolidada. A estratégia é divulgar os negócios como grupo para ampliar a visibilidade além do mercado local e atrair investidores e parceiros numa esfera maior e mais profissionalizada — sem depender do nome do sócio.",
    nextMeeting: { title: "Imersão presencial", date: "", notes: "Data a confirmar com o Felipe — prioridade máxima dos próximos 30 dias." },
    horizonSubs: { anual: "2027", trimestral: "4º tri · out–dez 2026", mensal: "Outubro 2026", proximas: "Próximos 15 dias" }
  },
  tasks: [
    // ---- Institucional
    T("a1","anual","","Posicionar o Grupo JGE como grupo consolidado","institucional",{ owner:"Megali", notes:"Projetar a percepção de solidez para a esfera estadual (e nacional nos nichos em que atua).",
      conteudo:"Trajetória, cases e lideranças do Grupo", linguagem:"Institucional, madura", canal:"Redes do Grupo, LinkedIn, imprensa e eventos", frequencia:"Contínua", receptor:"Acionistas, parceiros, comunidade e instituições públicas", kpi:"Percepção de marca e alcance qualificado" }),
    T("t1","trimestral","a1","Imersão e diagnóstico de marca","institucional",{ owner:"Adriane", conteudo:"Passado, presente e futuro do Grupo", linguagem:"Escuta e cocriação", canal:"Imersão presencial + entrevistas", frequencia:"Pontual", receptor:"Lideranças", kpi:"Diagnóstico e posicionamento aprovados" }),
    T("m1","mensal","t1","Imersão presencial com lideranças","institucional",{ owner:"Megali + JGE", notes:"Passado · Presente · Futuro + workshop de posicionamento e branding.", linguagem:"Escuta e cocriação", canal:"Encontro presencial", frequencia:"Pontual", receptor:"Lideranças de cada empresa", kpi:"Imersão realizada" }),
    T("p1","proximas","m1","Confirmar data da imersão presencial","institucional",{ status:"aprovacao", owner:"Felipe", due:"2026-10-08", notes:"Larissa já enviou opções de datas. A imersão é a base do setup.", canal:"WhatsApp do projeto", receptor:"Lideranças" }),
    T("p5","proximas","m1","Roteiro da imersão: passado, presente e futuro","institucional",{ status:"andamento", owner:"Adriane", due:"2026-10-12", notes:"Inclui lideranças de cada empresa e possível pesquisa com colaboradores.", receptor:"Lideranças" }),
    T("m2","mensal","t1","Diagnóstico de marca: JG x Santos x JGE","reputacional",{ owner:"Adriane", notes:"Base para a narrativa do Grupo para colaboradores (JG como instrumento do institucional, não marketing pessoal).", canal:"Relatório", receptor:"Lideranças", kpi:"Diagnóstico entregue" }),
    T("p2","proximas","m2","Compartilhar manual de marca e materiais de planejamento","institucional",{ owner:"João e Felipe", due:"2026-10-09", notes:"Manual de marca, apresentações e desdobramentos de identidade visual." }),
    T("p4","proximas","m2","Liberar acessos (Meta, CRM e plataformas)","institucional",{ status:"andamento", owner:"Felipe", due:"2026-10-10" }),
    T("p6","proximas","m2","Enviar checklist de acessos","institucional",{ status:"concluida", owner:"Larissa", due:"2026-09-26" }),
    T("t2","trimestral","a1","Estruturar as redes sociais do Grupo JGE","institucional",{ owner:"Mariana", notes:"Redes do Grupo travadas até ter estrutura para manter constância.",
      conteudo:"Linha editorial institucional do Grupo", linguagem:"Profissional e próxima", canal:"Instagram + LinkedIn do Grupo", frequencia:"A definir", receptor:"Parceiros, acionistas e comunidade", kpi:"Seguidores qualificados e engajamento" }),
    T("m3","mensal","t2","Revisão das redes sociais existentes","institucional",{ owner:"Mariana", notes:"O perfil da JG Urbanismo acumulou a função de perfil do grupo.", canal:"Instagram", receptor:"Clientes e parceiros", kpi:"Relatório de revisão" }),
    T("p3","proximas","m3","Compartilhar ações e campanhas já planejadas","institucional",{ owner:"Natália", due:"2026-10-09", notes:"Para a Megali absorver e adaptar ao planejamento." }),
    // ---- Relacional
    T("a2","anual","","Relacionamento contínuo com clientes e parceiros","relacional",{ owner:"Megali + JGE", notes:"Preservar a conexão depois das entregas e abrir novas oportunidades.",
      conteudo:"Novidades, entregas e bastidores do Grupo", linguagem:"Próxima e profissional", canal:"Newsletter, WhatsApp e brindes", frequencia:"Mensal", receptor:"Clientes e parceiros", kpi:"Abertura, respostas e indicações" }),
    T("t3","trimestral","a2","Newsletters do Grupo com calendário regular","relacional",{ owner:"Ana", conteudo:"Panorama das empresas e entregas", linguagem:"Próxima e profissional", canal:"Newsletter (e-mail)", frequencia:"Mensal", receptor:"Clientes e parceiros", invest:0, kpi:"Taxa de abertura e cliques" }),
    T("m4","mensal","t3","Retomar o envio das newsletters","relacional",{ owner:"Ana", notes:"Terceira edição parada por problema no sistema de envio.", canal:"Newsletter (e-mail)", frequencia:"Mensal", receptor:"Clientes e parceiros", invest:0 }),
    T("t4","trimestral","a2","Brinde externo de fim de ano","relacional",{ owner:"Natália", notes:"Cachaça do Zé como opção com storytelling — calibrar na imersão.",
      conteudo:"Brinde com storytelling", linguagem:"Calorosa, com toque mineiro", canal:"Brinde físico", frequencia:"Anual (fim de ano)", receptor:"Clientes e parceiros estratégicos", kpi:"Retorno e menções" }),
    // ---- Interno (endomarketing)
    T("a3","anual","","Endomarketing: pertencimento e engajamento entre as empresas","interno",{ owner:"Megali + JGE", notes:"Valorizar conquistas, boas práticas e reconhecimentos.",
      conteudo:"Conquistas, bastidores e rumo do Grupo", linguagem:"Engajadora", canal:"Newsletter interna, encontros e brindes", frequencia:"Mensal", receptor:"Colaboradores", kpi:"Clima e engajamento" }),
    T("t5","trimestral","a3","Endomarketing do projeto de marketing","interno",{ owner:"Ana", conteudo:"O que é o projeto, o que muda e próximos passos", linguagem:"Engajadora", canal:"Newsletter interna", frequencia:"Lançamento + mensal", receptor:"Colaboradores", invest:0, kpi:"Clima / engajamento" }),
    T("m5","mensal","t5","Comunicado de início do projeto de marketing","interno",{ owner:"Mariana", conteudo:"Início do projeto de marketing", linguagem:"Engajadora", canal:"Newsletter", frequencia:"Postagem única", receptor:"Colaboradores", invest:0, kpi:"Clima / engajamento" }),
    T("m6","mensal","t5","Pesquisa com colaboradores","interno",{ owner:"Adriane", notes:"Muito do que importa não acontece na sede — buscar outras fontes.", canal:"Formulário + conversas na imersão", frequencia:"Pontual", receptor:"Colaboradores de todas as empresas", kpi:"Taxa de resposta" }),
    T("t6","trimestral","a3","Kit de boas-vindas para novos colaboradores","interno",{ owner:"Natália", notes:"Retomar o kit que foi descontinuado.", conteudo:"Boas-vindas e DNA do Grupo", linguagem:"Acolhedora", canal:"Brinde físico", frequencia:"A cada contratação", receptor:"Novos colaboradores", kpi:"Integração dos novos colaboradores" }),
    T("t7","trimestral","a3","Narrativa do Grupo para colaboradores","interno",{ owner:"Adriane", notes:"Construída a partir do diagnóstico JG x Santos x JGE.", linguagem:"Engajadora", receptor:"Colaboradores" }),
    T("t8","trimestral","a3","Ação de fim de ano","interno",{ canal:"Evento / brinde", frequencia:"Anual", receptor:"Colaboradores", kpi:"Participação e clima" }),
    T("a4","anual","","Programa Embaixadores JGE","interno",{ owner:"Megali + JGE", notes:"Lideranças (ex.: Felipe) representando o Grupo em eventos e conteúdos — a marca deixa de depender só da figura do Zé.", canal:"Eventos e conteúdos com lideranças", receptor:"Lideranças" }),
    // ---- Reputacional
    T("a5","anual","","Reputação: credibilidade, responsabilidade e ética","reputacional",{ owner:"Megali", receptor:"Comunidade e instituições públicas", kpi:"Menções e percepção pública" })
  ],
  diretrizes: [
    { id:"d1", front:"institucional", text:"Fortalecer a percepção de solidez, profissionalismo e sucesso consolidado do Grupo nos mercados em que atua, projetando-a também em uma esfera estadual (e nacional nos nichos em que atua)." },
    { id:"d2", front:"relacional", text:"Manter e fortalecer relações próximas e relevantes com clientes e parceiros, preservando a conexão após as entregas e criando condições para novas oportunidades de relacionamento e negócios." },
    { id:"d3", front:"comercial", text:"Se abordada no projeto, será apenas de forma indireta, pois as ações dessa natureza ficarão sob responsabilidade de cada negócio/nas pontas." },
    { id:"d4", front:"interno", text:"Fortalecer o alinhamento e a integração entre as empresas e as pessoas do Grupo, valorizando conquistas, boas práticas e reconhecimentos e contribuindo para um ambiente interno de pertencimento e engajamento." },
    { id:"d5", front:"reputacional", text:"Fortalecer a reputação do Grupo perante seus públicos de interesse, ampliando a percepção de credibilidade, responsabilidade e ética, consolidando sua posição como um grupo respeitado nos mercados e comunidades em que atua." }
  ],
  atributos: [
    { id:"at1", title:"Credibilidade", text:"Transmitir confiança e um caminho de sucesso trilhado, reconhecido publicamente." },
    { id:"at2", title:"Relacionamento", text:"Alianças estratégicas com parceiros alinhados aos nossos valores." },
    { id:"at3", title:"Profissionalismo", text:"Atuação madura, com gestão e experiência no que nos propomos a fazer." },
    { id:"at4", title:"Sustentabilidade", text:"Escolhas e condutas que criam uma realidade melhor para todos — não só meio ambiente." },
    { id:"at5", title:"Prosperidade", text:"Potencializar a rentabilidade dos recursos de investidores e parceiros." },
    { id:"at6", title:"Experiência / know-how", text:"Domínio técnico, operacional, jurídico e administrativo como diferencial." }
  ],
  stakeholders: [
    { id:"s1", name:"Colaboradores", fronts:"Interno", desc:"Pessoas de todas as empresas do Grupo, dentro e fora da sede.", goal:"Pertencimento, engajamento e orgulho de fazer parte do Grupo." },
    { id:"s2", name:"Clientes", fronts:"Relacional · Reputacional", desc:"Clientes dos negócios do Grupo (loteamentos, incorporação e demais empresas).", goal:"Manter a conexão depois da entrega e gerar novas oportunidades." },
    { id:"s3", name:"Acionistas e investidores", fronts:"Institucional · Reputacional", desc:"Investidores atuais e potenciais, em uma esfera além do mercado local.", goal:"Confiança na solidez do Grupo e na rentabilidade dos negócios." },
    { id:"s4", name:"Parceiros", fronts:"Relacional · Institucional", desc:"Alianças estratégicas alinhadas aos valores do Grupo.", goal:"Mostrar que o Grupo soma e amplia as possibilidades de sucesso." },
    { id:"s5", name:"Fornecedores", fronts:"Relacional", desc:"Rede de fornecedores das empresas do Grupo.", goal:"Relação profissional, ética e de longo prazo." },
    { id:"s6", name:"Comunidade", fronts:"Reputacional", desc:"Cidades e comunidades onde o Grupo atua.", goal:"Ser reconhecido como um grupo responsável e respeitado." },
    { id:"s7", name:"Instituições públicas", fronts:"Institucional · Reputacional", desc:"Órgãos e instituições com que o Grupo se relaciona.", goal:"Credibilidade, transparência e profissionalismo." }
  ],
  personas: [
    { id:"pe1", name:"Investidor parceiro", role:"Empresário · capital e região metropolitana", age:"45–60 anos", quote:"Quero investir com quem tem histórico e gestão — não só um bom terreno.", goals:["Rentabilidade com segurança","Parceiros com governança e know-how"], pains:["Negócios regionais com cara de amadores","Dependência de uma única pessoa"], channels:["LinkedIn","Newsletter Panorama JGE","Eventos do setor"], draft:true },
    { id:"pe2", name:"Cliente do Grupo", role:"Comprador de lote ou imóvel", age:"30–55 anos", quote:"Comprei e quero continuar sabendo como meu investimento está evoluindo.", goals:["Valorização do patrimônio","Atendimento próximo depois da compra"], pains:["Sumir de contato após a venda","Informação desencontrada entre as empresas"], channels:["Instagram","WhatsApp","Newsletter"], draft:true },
    { id:"pe3", name:"Colaborador JGE", role:"Equipes das empresas do Grupo", age:"Todas as idades", quote:"Quero saber o que o Grupo está construindo e onde eu me encaixo.", goals:["Reconhecimento","Clareza sobre o rumo do Grupo"], pains:["Conquistas que não chegam a todos","Pouca integração entre as empresas"], channels:["Newsletter Conexão JGE","Grupos internos","Encontros"], draft:true }
  ],
  meetings: [
    { id:"mt1", title:"Reunião de Onboarding Grupo JGE", date:"2026-09-24", url:"https://docs.google.com/document/d/1zU89ySkZ09qNkArdcfMKCsgAWf6hjycIYIWwqt0EQek/edit", content: ONBOARDING }
  ],
  links: [
    { id:"l1", title:"Pasta do Grupo JGE no Drive", url:"https://drive.google.com/drive/folders/1GbuaF-rAs413uYO5E7DQ---27RZ0OliE", category:"Pastas" },
    { id:"l2", title:"Norteadores do projeto de marketing", url:"https://drive.google.com/file/d/1yzSqtAMF9AZbx1CNltbLwg4A_6Rsmqgd/view", category:"Planejamento" },
    { id:"l3", title:"Apresentação de onboarding", url:"https://drive.google.com/file/d/1g3rHhLcLfKu1G4-_QEQy7L0rwWGEDxsx/view", category:"Planejamento" },
    { id:"l4", title:"Briefing · Reunião de onboarding (24/09)", url:"https://docs.google.com/document/d/1zU89ySkZ09qNkArdcfMKCsgAWf6hjycIYIWwqt0EQek/edit", category:"Reuniões" }
  ],
  updatedAt: null
};

/* ============ Formulários (um esquema por coleção) ============ */
const opts = o => Object.entries(o);
const SCHEMAS = {
  tasks: { name:"tarefa", fields:[
    { k:"title", label:"Tarefa", req:true, ph:"Ex.: Lançar a newsletter interna" },
    { k:"horizon", label:"Coluna", type:"select", options:opts(HORIZONS), half:true, hint:"Anual → Trimestral → Mensal → Próximas." },
    { k:"parent", label:"Faz parte de", type:"parent", half:true, hint:"A tarefa da coluna anterior que esta ajuda a cumprir." },
    { k:"front", label:"Natureza (objetivo)", type:"select", options:opts(FRONTS), half:true },
    { k:"status", label:"Status", type:"select", options:Object.entries(STATUS).map(([k,s])=>[k,s.label]), half:true },
    { k:"owner", label:"Responsável", list:"owners", half:true },
    { k:"due", label:"Prazo", type:"date", half:true },
    { label:"Plano de comunicação", type:"section" },
    { k:"emissor", label:"Emissor", list:"emissores", half:true, hint:"Quem comunica: o Grupo ou uma das empresas." },
    { k:"receptor", label:"Receptor (público)", list:"publicos", half:true, hint:"Para quem: colaboradores, clientes, parceiros…" },
    { k:"conteudo", label:"Conteúdo", hint:"O que será comunicado." },
    { k:"linguagem", label:"Linguagem", list:"linguagens", half:true },
    { k:"canal", label:"Canal", list:"canais", half:true },
    { k:"frequencia", label:"Frequência", list:"freqs", half:true },
    { k:"invest", label:"Investimento (R$)", type:"number", half:true, hint:"Deixe vazio se ainda não houver valor. Use 0 para “sem custo”." },
    { k:"kpi", label:"Resultado esperado (KPI)", hint:"Como vamos medir se deu certo." },
    { k:"notes", label:"Observações", type:"textarea" } ]},
  diretrizes: { name:"diretriz", fields:[
    { k:"front", label:"Natureza", type:"select", options:opts(FRONTS) },
    { k:"text", label:"Diretriz / objetivo", type:"textarea", req:true } ]},
  atributos: { name:"atributo", fields:[
    { k:"title", label:"Atributo", req:true },
    { k:"text", label:"Objetivo", type:"textarea" } ]},
  stakeholders: { name:"público", fields:[
    { k:"name", label:"Público", req:true, half:true },
    { k:"fronts", label:"Naturezas", half:true, hint:"Ex.: Relacional · Reputacional" },
    { k:"desc", label:"Quem são", type:"textarea" },
    { k:"goal", label:"O que queremos com eles", type:"textarea" } ]},
  personas: { name:"persona", fields:[
    { k:"name", label:"Nome da persona", req:true, half:true },
    { k:"age", label:"Faixa etária", half:true },
    { k:"role", label:"Perfil" },
    { k:"quote", label:"Frase que a representa", type:"textarea" },
    { k:"goals", label:"Objetivos", type:"lines", hint:"Escreva um objetivo por linha." },
    { k:"pains", label:"Dores", type:"lines", hint:"Uma dor por linha." },
    { k:"channels", label:"Onde encontrar (canais)", type:"lines", hint:"Um canal por linha." },
    { k:"draft", label:"Rascunho — validar na imersão", type:"check" } ]},
  meetings: { name:"pauta", fields:[
    { k:"title", label:"Título da reunião", req:true },
    { k:"date", label:"Data", type:"date", half:true },
    { k:"url", label:"Link do documento", half:true },
    { k:"content", label:"Pauta", type:"textarea", rows:12, hint:"Comece a linha com # para criar um título de seção e com - para um item da lista." } ]},
  links: { name:"link", fields:[
    { k:"title", label:"Título", req:true },
    { k:"url", label:"URL", req:true },
    { k:"category", label:"Categoria", list:"cats" } ]}
};

/* ============ Estado ============ */
let data = load();
let tab = "inicio", strat = "diretrizes";
let fFront = "all", fStatus = "all", planView = "quadro", planLevel = "anual", focusId = null;
let driveMeetings = null, sync = { state:"idle", at:null, msg:"" }, selMeet = null;
const today = new Date(); today.setHours(0,0,0,0);

/* ============ ARMAZENAMENTO ============
   Hoje salva no navegador (localStorage).
   Para compartilhar entre equipe e cliente, troque SÓ estas duas funções
   por leitura/gravação no banco (todo o estado cabe em um único JSON). */
function load(){
  try { const s = localStorage.getItem(KEY); if (s) return withDefaults(JSON.parse(s)); } catch(e){}
  return structuredClone(SEED);
}
function save(msg){
  data.updatedAt = new Date().toISOString();
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch(e){}
  render(); if(msg) toast(msg);
}
function withDefaults(d){
  const s = structuredClone(SEED);
  const out = { ...s, ...d, config: { ...s.config, ...(d.config||{}) } };
  out.config.horizonSubs = { ...s.config.horizonSubs, ...(d.config?.horizonSubs||{}) };
  return out;
}

/* ============ Utilidades ============ */
function parseDate(s){ const [y,m,d]=s.split("-").map(Number); return new Date(y,(m||1)-1,d||1); }
function iso(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function esc(s){ return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function safeUrl(u){ u=(u||"").trim(); if(!u) return ""; if(!/^https?:\/\//i.test(u)) u="https://"+u; return u; }
function uid(){ return Math.random().toString(36).slice(2,9); }
function cap(s){ return s ? s[0].toUpperCase()+s.slice(1) : s; }
function fmtShort(s){ return parseDate(s).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"}); }
function fmtLong(s){ return cap(parseDate(s).toLocaleDateString("pt-BR",{weekday:"long",day:"numeric",month:"long",year:"numeric"})); }
function fmtMonth(s){ const d=parseDate(s+"-01"); return cap(MONTHS[d.getMonth()])+" "+d.getFullYear(); }
function money(n){ return n==null || n==="" ? "A definir" : Number(n)===0 ? "Sem custo" : Number(n).toLocaleString("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}); }
function initials(s){ return (s||"?").split(/\s+/).filter(w=>w.length>2||/^[A-Z]/.test(w)).slice(0,2).map(w=>w[0].toUpperCase()).join("") || "?"; }
const editing = ()=> document.body.classList.contains("editing");
const daysTo = s => Math.round((parseDate(s)-today)/864e5);
const byDue = (a,b)=> (a.due||"9999").localeCompare(b.due||"9999");
const coll = name => data[name];
const docId = u => (String(u||"").match(/\/d\/([\w-]{20,})/)||[])[1] || u;

const prevH = h => HORDER[HORDER.indexOf(h)-1];
const nextH = h => HORDER[HORDER.indexOf(h)+1];
const taskById = id => id ? data.tasks.find(t=>t.id===id) : null;
const kidsOf = id => data.tasks.filter(t=>t.parent===id);
function descendants(id, seen=new Set()){ const out=[]; kidsOf(id).forEach(k=>{ if(seen.has(k.id)) return; seen.add(k.id); out.push(k, ...descendants(k.id, seen)); }); return out; }
function ancestors(t){ const out=[], seen=new Set([t.id]); let p=taskById(t.parent); while(p && !seen.has(p.id)){ seen.add(p.id); out.unshift(p); p=taskById(p.parent); } return out; }
function family(id){ const t=taskById(id); return t ? new Set([id, ...ancestors(t).map(x=>x.id), ...descendants(id).map(x=>x.id)]) : null; }
const isLinked = t => t.horizon==="anual" || (taskById(t.parent)?.horizon===prevH(t.horizon));
const sortTasks = l => [...l].sort((a,b)=>(a.status==="concluida")-(b.status==="concluida") || byDue(a,b));
function kidsHTML(t){
  const k = descendants(t.id); if(!k.length) return t.horizon==="proximas" ? "" : `<div class="kids"><small>${editing() ? `Ainda sem desdobramentos — use “+ Desdobrar” para criar as tarefas ${HORIZONS[nextH(t.horizon)].toLowerCase()}` : "Ainda sem desdobramentos"}</small></div>`;
  const d = k.filter(x=>x.status==="concluida").length;
  return `<div class="kids"><div class="progress"><i style="width:${Math.round(d/k.length*100)}%"></i></div><small>${d}/${k.length} desdobramentos concluídos</small></div>`;
}
function planLine(t){
  const parts = [t.canal, t.frequencia, t.invest!=null && t.invest!=="" ? money(t.invest) : ""].filter(Boolean);
  return parts.length ? `<div class="plan-mini">${parts.map(esc).join(" · ")}</div>` : "";
}

function dueHTML(t){
  if(!t.due) return `<span class="due">Sem prazo</span>`;
  if(t.status==="concluida") return `<span class="due">${fmtShort(t.due)}</span>`;
  const n = daysTo(t.due);
  if(n<0)  return `<span class="due late">Atrasada · ${fmtShort(t.due)}</span>`;
  if(n===0) return `<span class="due soon">Hoje</span>`;
  if(n===1) return `<span class="due soon">Amanhã</span>`;
  if(n<=7) return `<span class="due soon">Em ${n} dias · ${fmtShort(t.due)}</span>`;
  return `<span class="due">${fmtShort(t.due)}</span>`;
}
const pill = s => `<span class="pill ${s}"><i class="dot ${s}"></i>${STATUS[s].label}</span>`;
const frontTag = f => f ? `<span class="type" style="display:inline-flex;align-items:center;gap:6px"><i class="nat-dot" style="background:${FRONT_COLORS[f]||"var(--ink)"}"></i>${FRONTS[f]||esc(f)}</span>` : "";
const who = o => o ? `<span class="who"><i>${esc(initials(o))}</i>${esc(o)}</span>` : "";

/* ============ Render ============ */
function render(){
  renderStats(); renderHome(); renderBoard(); renderEndo(); renderStrat(); renderMeetings(); renderLinks();
  const u = data.updatedAt ? new Date(data.updatedAt) : null;
  document.getElementById("updated").textContent = u ? "Atualizado em " + u.toLocaleDateString("pt-BR") + " às " + u.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}) : "";
}

function renderStats(){
  const t = data.tasks;
  const open = t.filter(x=>x.horizon==="proximas" && x.status!=="concluida").length;
  const c = s => t.filter(x=>x.status===s).length;
  const pct = t.length ? Math.round(c("concluida")/t.length*100) : 0;
  document.getElementById("stats").innerHTML = `
    <button class="stat" data-goto="inicio"><div class="n">${open}</div><div class="l"><i class="dot" style="background:var(--purple)"></i>Próximas tarefas</div></button>
    <button class="stat" data-stat="andamento"><div class="n">${c("andamento")}</div><div class="l"><i class="dot andamento"></i>Em andamento</div></button>
    <button class="stat" data-stat="aprovacao"><div class="n">${c("aprovacao")}</div><div class="l"><i class="dot aprovacao"></i>Aguardando aprovação</div></button>
    <button class="stat" data-stat="concluida"><div class="n">${c("concluida")}<small>/ ${t.length}</small></div><div class="l"><i class="dot concluida"></i>Concluídas · ${pct}%</div><div class="progress"><i style="width:${pct}%"></i></div></button>`;
}

/* ---- Início ---- */
function renderHome(){
  const lim = 15;
  const list = data.tasks.filter(t=>t.status!=="concluida" && (t.horizon==="proximas" || (t.due && daysTo(t.due)<=lim))).sort(byDue);
  document.getElementById("homeTasks").innerHTML = list.length ? list.map(t=>`
    <button class="trow" data-open-task="${t.id}">
      <i class="bar ${t.status}"></i>
      <span class="main"><b>${esc(t.title)}</b><span>${who(t.owner)}${frontTag(t.front)}<span class="m-due">${dueHTML(t)}</span></span></span>
      <span class="end">${dueHTML(t)}${pill(t.status)}</span>
    </button>`).join("") : `<div class="empty">Nenhuma tarefa encaminhada no momento.</div>`;

  const m = allMeetings()[0];
  const steps = m ? nextSteps(m.content) : [];
  document.getElementById("homeMeeting").innerHTML = m ? `
    <div class="h-sec"><span>Última reunião</span><small>${m.date?fmtShort(m.date):""}</small></div>
    <div class="meet-mini"><span class="kicker">${m.source==="drive"?"Pauta do Drive":"Pauta"}</span><h4>${esc(m.title)}</h4>
    ${steps.length?`<p class="hint" style="margin-top:8px">Encaminhamentos</p><ul>${steps.slice(0,6).map(s=>`<li>${esc(s)}</li>`).join("")}</ul>`:""}
    <button class="btn sm" style="margin-top:12px" data-open-meet="${m.id}">Ver pauta completa →</button></div>`
    : `<div class="h-sec"><span>Última reunião</span></div><div class="empty">Nenhuma pauta ainda.</div>`;

  const nm = data.config.nextMeeting || {};
  const d = nm.date ? parseDate(nm.date) : null;
  document.getElementById("homeNext").innerHTML = `
    <div class="h-sec"><span>Próxima reunião</span><button class="btn sm ghost edit-only" id="editNext">Editar</button></div>
    <div class="next-meet">
      <div class="cal-ic"><span>${d?MONTHS[d.getMonth()].slice(0,3):"data"}</span><b>${d?d.getDate():"?"}</b></div>
      <div><b>${esc(nm.title||"A definir")}</b><div class="hint">${d?fmtLong(nm.date):"Data a confirmar"}</div>${nm.notes?`<div class="hint" style="margin-top:4px">${esc(nm.notes)}</div>`:""}</div>
    </div>`;

  document.getElementById("homeLinks").innerHTML = data.links.length ? data.links.slice(0,5).map(l=>`
    <a href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener"><span class="link-ic">${LINK_ICON}</span><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(l.title)}</span><span style="color:var(--muted)">↗</span></a>`).join("")
    + (data.links.length>5?`<button class="btn sm ghost" data-goto="links">Ver todos os links →</button>`:"")
    : `<span class="hint">Nenhum link ainda.</span>`;
}

/* ---- Planejamento (quadro tipo Trello) ---- */
function renderBoard(){
  const fc = [["all","Todas"],...opts(FRONTS)];
  document.getElementById("frontChips").innerHTML = `<span class="lbl">Natureza</span>` + fc.map(([k,l])=>`<button class="chip ${fFront===k?'on':''}" data-ffront="${k}">${l}</button>`).join("");
  const sc = [["all","Todos"],...Object.entries(STATUS).map(([k,s])=>[k,s.label])];
  document.getElementById("statusChips").innerHTML = `<span class="lbl">Status</span>` + sc.map(([k,l])=>`<button class="chip ${fStatus===k?'on':''}" data-fstatus="${k}">${k!=='all'?`<i class="dot ${k}"></i>`:''}${l}</button>`).join("");
  document.querySelectorAll("#planSeg button").forEach(b=>b.classList.toggle("on", b.dataset.planview===planView));
  const ft = focusId && taskById(focusId);
  document.getElementById("focusBar").innerHTML = ft ? `<div class="focus-bar"><span>Destacando o desdobramento de <b>“${esc(ft.title)}”</b></span><button class="btn sm" data-focus="">Mostrar tudo</button></div>` : "";
  const board = document.getElementById("board"), tree = document.getElementById("tree");
  board.hidden = planView!=="quadro"; tree.hidden = planView!=="arvore";
  const match = t => (fFront==="all"||t.front===fFront) && (fStatus==="all"||t.status===fStatus);
  if(planView==="arvore"){ tree.innerHTML = treeHTML(match); return; }
  const fam = ft ? family(focusId) : null;
  const subs = data.config.horizonSubs || {};
  board.innerHTML = HORDER.map(h=>{
    const all = data.tasks.filter(t=>t.horizon===h);
    const items = sortTasks(all.filter(match));
    const done = all.filter(t=>t.status==="concluida").length;
    return `<div class="col" data-drop="${h}">
      <div class="col-h"><div><b>${HORIZONS[h]}</b><small>${esc(subs[h]||"")}${editing()?` <button class="mini" data-edit-sub="${h}">✎ editar período</button>`:""}</small></div><span class="count">${done}/${all.length}</span></div>
      ${items.map(t=>cardHTML(t, fam)).join("") || `<p class="hint" style="padding:6px">${fFront!=="all"||fStatus!=="all" ? "Nenhuma tarefa com esses filtros." : editing() && h!=="anual" ? `Nenhuma tarefa ${HORIZONS[h].toLowerCase()} ainda. Use “+ Desdobrar” num card da coluna ${HORIZONS[prevH(h)]} ou o botão abaixo.` : "Nada por aqui ainda."}</p>`}
      <button class="add-card edit-only" data-add="tasks" data-preset="${h}">+ Adicionar tarefa</button>
    </div>`;
  }).join("");
}
function cardHTML(t, fam){
  const p = taskById(t.parent);
  const crumb = p && isLinked(t) ? `<span class="crumb">↳ ${esc(p.title)}</span>` : (t.horizon!=="anual" && editing() ? `<span class="crumb orphan">Sem vínculo — escolha a tarefa-mãe</span>` : "");
  return `<article class="tcard ${t.status} ${fam && !fam.has(t.id)?"dim":""} ${focusId===t.id?"focused":""}" data-open-task="${t.id}" draggable="${editing()}" data-drag="${t.id}">
    ${crumb}
    <h4>${esc(t.title)}</h4>
    ${planLine(t)}
    <div style="display:flex;gap:6px;flex-wrap:wrap">${pill(t.status)}${frontTag(t.front)}</div>
    ${t.receptor?`<span class="hint">→ ${esc(t.receptor)}</span>`:""}
    ${kidsHTML(t)}
    <div class="foot">${who(t.owner)||"<span></span>"}${dueHTML(t)}</div>
    <div class="card-actions">
      <button class="mini" data-focus="${t.id}">⌖ Ver desdobramento</button>
      ${t.horizon!=="proximas"?`<button class="mini edit-only" data-split="${t.id}">+ Desdobrar</button>`:""}
    </div>
  </article>`;
}

/* Árvore Anual → Trimestral → Mensal → Próximas.
   match(t) decide quem aparece; um item também aparece se algum desdobramento dele combinar. */
function treeHTML(match, emptyMsg="Nenhuma tarefa com esses filtros."){
  const visible = t => match(t) || descendants(t.id).some(match);
  const node = t => {
    const kids = t.horizon==="proximas" ? [] : sortTasks(kidsOf(t.id).filter(k=>isLinked(k) && visible(k)));
    const showKids = kids.length || (editing() && t.horizon!=="proximas");
    return `<div class="tnode">
      <div class="tnode-row ${t.status} ${match(t)?"":"muted"}" data-open-task="${t.id}">
        <span class="lvl lvl-${t.horizon}">${SHORT[t.horizon]}</span>
        <div class="tnode-main"><b>${esc(t.title)}</b>
          <span class="tnode-meta">${frontTag(t.front)}${t.receptor?`<span class="hint">→ ${esc(t.receptor)}</span>`:""}</span>
          ${planLine(t)}
        </div>
        <div class="tnode-end">${pill(t.status)}<span class="tnode-who">${who(t.owner)}${t.due?dueHTML(t):""}</span></div>
      </div>
      ${showKids?`<div class="tnode-kids">${kids.map(node).join("")}${editing()?`<button class="add-card" data-split="${t.id}">+ Desdobrar em ${HORIZONS[nextH(t.horizon)]}</button>`:""}</div>`:""}
    </div>`;
  };
  const roots = sortTasks(data.tasks.filter(t=>t.horizon==="anual" && visible(t)));
  const loose = sortTasks(data.tasks.filter(t=>!isLinked(t) && match(t)));
  return (roots.map(node).join("") || `<div class="empty">${emptyMsg}</div>`)
    + (loose.length ? `<div class="group-title">Sem vínculo com o planejamento anual <small>${loose.length}</small></div>${loose.map(node).join("")}` : "");
}

/* ---- Endomarketing = tarefas de natureza Interno ---- */
function renderEndo(){
  const list = data.tasks.filter(t=>t.front==="interno");
  const c = s => list.filter(t=>t.status===s).length;
  document.getElementById("endoStats").innerHTML = `<span><b>${list.length}</b> ações</span><span><i class="dot andamento"></i>${c("andamento")} em andamento</span><span><i class="dot aprovacao"></i>${c("aprovacao")} aguardando aprovação</span><span><i class="dot concluida"></i>${c("concluida")} concluídas</span>`;
  document.getElementById("endoWrap").innerHTML = treeHTML(t=>t.front==="interno", "Nenhuma ação de endomarketing ainda.");
}

/* ---- Estratégia: diretrizes, público, personas, mídia ---- */
function renderStrat(){
  document.querySelectorAll("#stratSeg button").forEach(b=>b.classList.toggle("on", b.dataset.strat===strat));
  const addMap = { diretrizes:["atributos","+ Novo atributo"], publico:["stakeholders","+ Novo público"], personas:["personas","+ Nova persona"], midia:["tasks","+ Nova ação anual"] };
  const [ac, al] = addMap[strat];
  document.getElementById("stratAdd").innerHTML = `<button class="btn primary edit-only" data-add="${ac}" ${ac==="tasks"?'data-preset="anual"':""}>${al}</button>`;
  const el = document.getElementById("stratWrap");
  const ed = (c,id)=> editing() ? `data-edit="${c}" data-id="${id}"` : "";

  if(strat==="diretrizes"){
    const nat = Object.entries(FRONTS).map(([k,l])=>`<span class="nat" style="background:${FRONT_COLORS[k]}">${l}</span>`).join("");
    const cnt = f => data.tasks.filter(t=>t.front===f).length;
    el.innerHTML = `
      <div class="north-hero">
        <span class="kicker">Estruturação e planejamento do marketing do Grupo</span>
        <h2>Posicionar o Grupo JGE de forma consolidada, além do mercado local.</h2>
        <p>${esc(data.config.objetivo||"")}</p>
      </div>

      <div class="group-title">Atributos da marca</div>
      <div class="attr">${data.atributos.map((a,i)=>`<div ${ed("atributos",a.id)} ${editing()?'style="cursor:pointer"':""}><span class="kicker">0${i+1}</span><b>${esc(a.title)}</b><p>${esc(a.text)}</p></div>`).join("")}</div>

      <div class="group-title">Fluxo de comunicação</div>
      <div class="flow">
        <div class="node"><span class="kicker">1</span><b>Objetivo</b><small>Natureza que define o foco e a intenção</small></div>
        <span class="arrow">→</span>
        <div class="node"><span class="kicker">2</span><b>Emissor</b><small>Grupo JGE ou uma das empresas</small></div>
        <span class="arrow">→</span>
        <div class="node dark"><span class="kicker" style="color:#C9A8FF">3</span><b>Comunicação</b><small>Como a mensagem é construída e operacionalizada</small>
          <div class="parts"><span>Conteúdo</span><span>Linguagem</span><span>Canal</span><span>Frequência</span><span>Investimento</span></div></div>
        <span class="arrow">→</span>
        <div class="node"><span class="kicker">4</span><b>Receptor</b><ul>${data.stakeholders.map(x=>`<li>${esc(x.name)}</li>`).join("")}</ul></div>
        <span class="arrow">→</span>
        <div class="node"><span class="kicker">5</span><b>Resultado</b><small>KPI de cada ação</small></div>
      </div>
      <div class="natures">${nat}</div>

      <div class="group-title">Diretrizes de marketing <small>por natureza do objetivo</small></div>
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">${data.diretrizes.map((d,i)=>`
        <article class="card ${editing()?"click":""}" ${ed("diretrizes",d.id)} style="border-top:3px solid ${FRONT_COLORS[d.front]||"var(--ink)"}">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:10px"><div style="display:flex;align-items:center;gap:10px"><span class="num-badge" style="background:${FRONT_COLORS[d.front]||"var(--ink)"}">${i+1}</span><h3>${FRONTS[d.front]||esc(d.front)}</h3></div><button class="btn sm ghost" data-front-go="${d.front}">${cnt(d.front)} tarefas →</button></div>
          <p class="note">${esc(d.text)}</p>
        </article>`).join("")}</div>

      <div class="group-title">Componentes do plano de comunicação</div>
      <p class="hint" style="margin-bottom:10px">Toda ação do planejamento segue esta estrutura. Exemplo:</p>
      <div class="comp">${[["Emissor","Grupo JGE"],["Objetivo","Interno"],["Conteúdo","Início prj. Mkt"],["Linguagem","Engajadora"],["Canal","Newsletter"],["Frequência","Postagem única"],["Receptor","Colaboradores"],["Investimento","Sem custo"],["Resultado (KPI)","Clima / engajamento"]].map(([a,b])=>`<div><b>${a}</b><span>${b}</span></div>`).join("")}</div>
      <button class="btn sm" data-strat="midia" style="margin-top:12px">Ver plano de comunicação completo →</button>`;
  }

  if(strat==="publico"){
    el.innerHTML = `
      <p class="lead">Públicos de interesse (stakeholders) do Grupo JGE e o que a comunicação busca com cada um.</p>
      <div class="grid" style="margin-top:16px">${data.stakeholders.map(s=>`
        <article class="card ${editing()?"click":""}" ${ed("stakeholders",s.id)}>
          <span class="kicker">${esc(s.fronts)}</span>
          <h3>${esc(s.name)}</h3>
          ${s.desc?`<p class="note">${esc(s.desc)}</p>`:""}
          ${s.goal?`<div class="plist"><b>O que queremos</b><p class="note">${esc(s.goal)}</p></div>`:""}
        </article>`).join("") || `<div class="empty">Nenhum público cadastrado.</div>`}</div>`;
  }

  if(strat==="personas"){
    const lst = (t,a)=> a?.length ? `<div class="plist"><b>${t}</b><ul>${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>` : "";
    el.innerHTML = `
      <p class="lead">Personas que orientam linguagem, canais e conteúdo. As marcadas como rascunho serão validadas na imersão.</p>
      <div class="grid" style="margin-top:16px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">${data.personas.map(p=>`
        <article class="card ${editing()?"click":""}" ${ed("personas",p.id)}>
          <div class="persona-h"><span class="avatar">${esc(initials(p.name))}</span><div><h3>${esc(p.name)}</h3><small>${esc([p.role,p.age].filter(Boolean).join(" · "))}</small></div></div>
          ${p.draft?`<span><span class="draft">Rascunho</span></span>`:""}
          ${p.quote?`<p class="quote">“${esc(p.quote)}”</p>`:""}
          ${lst("Objetivos",p.goals)}${lst("Dores",p.pains)}${lst("Onde encontrar",p.channels)}
        </article>`).join("") || `<div class="empty">Nenhuma persona cadastrada.</div>`}</div>`;
  }

  if(strat==="midia"){
    const fo = Object.keys(FRONTS);
    const rows = data.tasks.filter(t=>planLevel==="all"||t.horizon===planLevel)
      .sort((a,b)=>fo.indexOf(a.front)-fo.indexOf(b.front) || HORDER.indexOf(a.horizon)-HORDER.indexOf(b.horizon));
    const total = rows.reduce((s,r)=>s+(Number(r.invest)||0),0);
    const byFront = {};
    rows.forEach(r=>{ if(Number(r.invest)>0) byFront[r.front]=(byFront[r.front]||0)+Number(r.invest); });
    const tbd = rows.filter(r=>r.invest==null||r.invest==="").length;
    const lv = [["anual","Anual"],["trimestral","Trimestral"],["mensal","Mensal"],["proximas","Próximas"],["all","Todos os níveis"]];
    el.innerHTML = `
      <p class="lead">O plano é montado a partir das próprias tarefas do planejamento: cada ação tem emissor, objetivo, conteúdo, linguagem, canal, frequência, receptor, investimento e resultado esperado.</p>
      <div class="toolbar" style="margin-top:14px"><div class="seg" id="levelSeg">${lv.map(([k,l])=>`<button data-level="${k}" class="${planLevel===k?"on":""}">${l}</button>`).join("")}</div></div>
      <div class="panel" style="margin-bottom:14px">
        <div class="h-sec"><span>Investimento previsto · ${planLevel==="all"?"todos os níveis":HORIZONS[planLevel].toLowerCase()}</span><small>${tbd?`${tbd} ${tbd>1?"ações":"ação"} com valor a definir`:""}</small></div>
        <div style="font-family:'Expletus Sans',sans-serif;font-size:28px;font-weight:600">${money(total).replace("Sem custo","R$ 0")}</div>
        ${total?`<div class="mix">${Object.entries(byFront).map(([f,v])=>`<i style="width:${v/total*100}%;background:${FRONT_COLORS[f]}" title="${FRONTS[f]}"></i>`).join("")}</div>
        <div class="mix-leg">${Object.entries(byFront).map(([f,v])=>`<span><i class="dot" style="background:${FRONT_COLORS[f]}"></i>${FRONTS[f]} · ${money(v)}</span>`).join("")}</div>`:`<p class="hint">Valores serão definidos após a imersão.</p>`}
        ${planLevel==="all"?`<p class="hint" style="margin-top:6px">Somando todos os níveis, o investimento de uma tarefa anual e o dos desdobramentos dela podem se sobrepor.</p>`:""}
      </div>
      <div class="table-wrap"><table class="media">
        <thead><tr><th>Nível</th><th>Emissor</th><th>Objetivo</th><th>Ação · Conteúdo</th><th>Linguagem</th><th>Canal</th><th>Frequência</th><th>Receptor</th><th>Investimento</th><th>KPI</th><th>Status</th></tr></thead>
        <tbody>${rows.map(r=>`<tr data-open-task="${r.id}">
          <td><span class="lvl lvl-${r.horizon}">${SHORT[r.horizon]}</span></td><td>${esc(r.emissor)}</td><td>${frontTag(r.front)}</td>
          <td><b>${esc(r.title)}</b>${r.conteudo?`<div class="hint">${esc(r.conteudo)}</div>`:""}</td><td>${esc(r.linguagem)}</td><td>${esc(r.canal)}</td>
          <td>${esc(r.frequencia)}</td><td>${esc(r.receptor)}</td><td class="money">${money(r.invest)}</td><td>${esc(r.kpi)}</td><td>${pill(r.status||"afazer")}</td></tr>`).join("")
          || `<tr><td colspan="11" class="hint">Nenhuma ação neste nível ainda.</td></tr>`}</tbody>
        ${rows.length?`<tfoot><tr><td colspan="8">Total</td><td class="money">${money(total).replace("Sem custo","R$ 0")}</td><td colspan="2"></td></tr></tfoot>`:""}
      </table></div>`;
  }
}

/* ---- Reuniões (pautas puxadas da pasta do Drive) ---- */
function allMeetings(){
  const drive = (driveMeetings||[]).map(m=>({ ...m, source:"drive" }));
  const ids = new Set(drive.map(m=>docId(m.url)));
  const manual = data.meetings.filter(m=>!ids.has(docId(m.url))).map(m=>({ ...m, source:"manual" }));
  return [...drive, ...manual].sort((a,b)=>(b.date||"").localeCompare(a.date||""));
}
function nextSteps(md){
  const out = []; let on = false;
  for(const line of String(md||"").split("\n")){
    if(/^#{1,6}\s/.test(line)){ on = /pr[óo]ximos passos|encaminhamentos|a[çc][õo]es|tarefas/i.test(line); continue; }
    const m = on && line.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)/);
    if(m){ const b = m[1].match(/\*\*(.+?)\*\*/); out.push((b?b[1]:m[1]).replace(/\*\*/g,"").trim()); }
  }
  return out;
}
function md(src, skipTitle){
  let out = "", stack = [];
  const inline = s => esc(s.replace(/\\([~*_\\-])/g,"$1")).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>");
  const closeTo = ind => { while(stack.length && stack.at(-1).ind > ind) out += `</li></${stack.pop().tag}>`; };
  for(const raw of String(src||"").split("\n")){
    if(!raw.trim() || /^<!--.*-->$/.test(raw.trim())) continue;
    const h = raw.match(/^(#{1,6})\s+(.*)/);
    const li = raw.match(/^(\s*)([-*•]|\d+\.)\s+(.*)/);
    if(h){ closeTo(-1); if(skipTitle && h[2].trim().toLowerCase().startsWith(skipTitle.toLowerCase())) continue; out += h[1].length===1 ? `<h3>${inline(h[2])}</h3>` : `<h4>${inline(h[2])}</h4>`; continue; }
    if(li){
      const ind = li[1].replace(/\t/g,"    ").length, tag = /\d/.test(li[2]) ? "ol" : "ul";
      closeTo(ind);
      const top = stack.at(-1);
      if(top && top.ind===ind){
        if(top.tag===tag) out += "</li><li>";
        else { out += `</li></${top.tag}><${tag}><li>`; stack[stack.length-1] = { ind, tag }; }
      } else { out += `<${tag}><li>`; stack.push({ ind, tag }); }
      out += inline(li[3]); continue;
    }
    closeTo(-1); out += `<p>${inline(raw.trim())}</p>`;
  }
  closeTo(-1);
  return out;
}
function renderMeetings(){
  const ms = allMeetings();
  if(!ms.find(m=>m.id===selMeet)) selMeet = ms[0]?.id || null;
  const st = document.getElementById("syncState");
  st.className = "sync " + (sync.state==="ok"?"ok":sync.state==="err"?"err":"");
  st.querySelector("span").textContent =
    !data.config.driveEndpoint ? "Pasta do Drive não conectada — exibindo pautas cadastradas manualmente" :
    sync.state==="loading" ? "Buscando pautas na pasta do Drive…" :
    sync.state==="ok" ? `Sincronizado com a pasta do Drive${sync.folder?` “${sync.folder}”`:""} · ${new Date(sync.at).toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})}` :
    sync.state==="err" ? "Não foi possível ler a pasta do Drive agora — exibindo as últimas pautas salvas" : "";
  document.getElementById("meetList").innerHTML = ms.length ? ms.map(m=>`
    <button class="meet-item ${m.id===selMeet?"on":""}" data-sel-meet="${m.id}"><b>${esc(m.title)}</b><small>${m.date?fmtShort(m.date)+"/"+m.date.slice(0,4):"Sem data"} · ${m.source==="drive"?"Drive":"Manual"}</small></button>`).join("")
    : `<div class="empty">Nenhuma pauta ainda.</div>`;
  const m = ms.find(x=>x.id===selMeet);
  document.getElementById("meetDoc").innerHTML = m ? `
    <div class="doc-meta">${m.source==="drive"?`<span class="type">Google Drive</span>`:`<span class="type">Manual</span>`}${m.date?`<span class="hint">${fmtLong(m.date)}</span>`:""}</div>
    <h2>${esc(m.title)}</h2>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 4px">
      ${m.url?`<a class="btn sm" href="${esc(safeUrl(m.url))}" target="_blank" rel="noopener">${DOC_ICON.replace("<svg",'<svg width="14" height="14"')} Abrir documento ↗</a>`:""}
      ${m.source==="manual"?`<button class="btn sm edit-only" data-edit="meetings" data-id="${m.id}">Editar pauta</button>`:""}
    </div>
    ${md(m.content, m.title.split(" — ")[0].split(" - ")[0]) || `<p class="hint">Documento sem conteúdo de texto.</p>`}`
    : `<p class="hint">Selecione uma reunião.</p>`;
}
async function syncDrive(force){
  const url = (data.config.driveEndpoint||"").trim();
  if(!url){ driveMeetings = null; sync = { state:"idle" }; renderMeetings(); renderHome(); return; }
  sync = { ...sync, state:"loading" }; renderMeetings();
  try{
    const r = await fetch(url + (force ? (url.includes("?")?"&":"?") + "nocache=1" : ""));
    const j = await r.json();
    if(!Array.isArray(j.meetings)) throw new Error(j.error || "Resposta inválida");
    driveMeetings = j.meetings;
    sync = { state:"ok", at: j.syncedAt || new Date().toISOString(), folder: j.folder };
    try{ localStorage.setItem(KEY+"-drive", JSON.stringify({ meetings:j.meetings, folder:j.folder })); }catch(e){}
  }catch(e){
    sync = { state:"err" };
    try{ const c = JSON.parse(localStorage.getItem(KEY+"-drive")); if(c) driveMeetings = c.meetings; }catch(_){}
  }
  renderMeetings(); renderHome();
}

/* ---- Links ---- */
function renderLinks(){
  const wrap = document.getElementById("linksWrap");
  if(!data.links.length){ wrap.innerHTML = `<div class="empty">Ainda não há links.</div>`; return; }
  const cats = {};
  data.links.forEach(l=>(cats[l.category||"Geral"] ||= []).push(l));
  wrap.innerHTML = Object.entries(cats).map(([c,ls])=>`
    <div class="links-cat"><div class="group-title">${esc(c)}</div>
    ${ls.map(l=>`<a class="link-row" href="${esc(safeUrl(l.url))}" target="_blank" rel="noopener">
      <span class="link-ic">${LINK_ICON}</span>
      <span class="link-main"><b>${esc(l.title)}</b><small>${esc(l.url)}</small></span>
      <button class="btn icon-btn ghost edit-only" data-edit="links" data-id="${l.id}" aria-label="Editar">✎</button>
      <span style="color:var(--muted)">↗</span>
    </a>`).join("")}</div>`).join("");
}

/* ============ Modais ============ */
const overlay = document.getElementById("overlay"), modal = document.getElementById("modal");
function openModal(html, wide){ modal.className = "modal" + (wide?" wide":""); modal.innerHTML = html; overlay.classList.add("open"); overlay.setAttribute("aria-hidden","false"); }
function closeModal(){ overlay.classList.remove("open"); overlay.setAttribute("aria-hidden","true"); }
overlay.addEventListener("click", e=>{ if(e.target===overlay || e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeModal(); });
const closeBtn = `<button class="btn icon-btn ghost" data-close aria-label="Fechar">✕</button>`;

function showTask(id){
  const t = taskById(id); if(!t) return;
  const anc = ancestors(t).filter(()=>isLinked(t));
  const kids = sortTasks(kidsOf(t.id).filter(isLinked));
  const row = (k,v)=> v!=null && v!=="" ? `<dt>${k}</dt><dd>${esc(v)}</dd>` : "";
  openModal(`
    <div class="modal-h"><div>
      ${anc.length?`<div class="crumbs">${anc.map(a=>`<button data-open-task="${a.id}"><span class="lvl lvl-${a.horizon}">${SHORT[a.horizon]}</span>${esc(a.title)}</button>`).join("")}</div>`:""}
      <span style="display:flex;gap:6px;flex-wrap:wrap"><span class="lvl lvl-${t.horizon}">${SHORT[t.horizon]}</span>${pill(t.status)}${frontTag(t.front)}</span>
      <h3>${esc(t.title)}</h3></div>${closeBtn}</div>
    <div class="modal-b">
      <dl class="kv">
        ${row("Responsável", t.owner)}
        <dt>Prazo</dt><dd>${t.due?fmtLong(t.due):"Sem prazo"}</dd>
        ${t.notes?`<dt>Observações</dt><dd style="font-weight:500">${esc(t.notes)}</dd>`:""}
      </dl>
      <div class="form-sec">Plano de comunicação</div>
      <dl class="kv">
        ${row("Emissor", t.emissor)}<dt>Objetivo</dt><dd>${FRONTS[t.front]||"—"}</dd>
        ${row("Conteúdo", t.conteudo)}${row("Linguagem", t.linguagem)}${row("Canal", t.canal)}${row("Frequência", t.frequencia)}${row("Receptor", t.receptor)}
        <dt>Investimento</dt><dd>${money(t.invest)}</dd>${row("Resultado (KPI)", t.kpi)}
      </dl>
      ${t.horizon!=="proximas"?`<div class="form-sec">Desdobramentos em ${HORIZONS[nextH(t.horizon)]}</div>
      ${kids.length?`<div class="tlist">${kids.map(k=>`<button class="trow" data-open-task="${k.id}"><i class="bar ${k.status}"></i><span class="main"><b>${esc(k.title)}</b><span>${who(k.owner)}${planLine(k)}</span></span><span class="end" style="display:flex">${pill(k.status)}</span></button>`).join("")}</div>`:`<p class="hint">Ainda sem desdobramentos.${editing()?" Use “+ Desdobrar” abaixo para criar.":""}</p>`}`:""}
    </div>
    <div class="modal-f" style="justify-content:space-between;flex-wrap:wrap">
      <button class="btn" data-focus="${t.id}">⌖ Ver no quadro</button>
      <span style="display:flex;gap:8px;flex-wrap:wrap">
        ${editing() && t.horizon!=="proximas"?`<button class="btn" data-split="${t.id}">+ Desdobrar</button>`:""}
        ${editing()?`<button class="btn primary" data-edit="tasks" data-id="${t.id}">Editar</button>`:""}
      </span>
    </div>`);
}

function fieldHTML(f, v){
  const val = v ?? "";
  const hint = f.hint ? `<span class="hint">${f.hint}</span>` : "";
  if(f.type==="section") return `<div class="form-sec">${f.label}</div>`;
  if(f.type==="parent") return `<label class="f">${f.label}<select name="${f.k}" id="parentSel"></select>${hint}</label>`;
  if(f.type==="select") return `<label class="f">${f.label}<select name="${f.k}">${f.options.map(([k,l])=>`<option value="${k}" ${val===k?"selected":""}>${esc(l)}</option>`).join("")}</select>${hint}</label>`;
  if(f.type==="textarea") return `<label class="f">${f.label}<textarea name="${f.k}" rows="${f.rows||3}">${esc(val)}</textarea>${hint}</label>`;
  if(f.type==="lines") return `<label class="f">${f.label}<textarea name="${f.k}" rows="3">${esc((val||[]).join("\n"))}</textarea>${hint}</label>`;
  if(f.type==="check") return `<label class="f" style="flex-direction:row;align-items:center;gap:8px"><input type="checkbox" name="${f.k}" ${val?"checked":""} style="width:auto"> ${f.label}</label>`;
  return `<label class="f">${f.label}<input name="${f.k}" type="${f.type||"text"}" ${f.type==="number"?'step="any" min="0"':""} value="${esc(val)}" ${f.req?"required":""} ${f.list?`list="${f.list}"`:""} ${f.ph?`placeholder="${esc(f.ph)}"`:""}>${hint}</label>`;
}
function editItem(c, id, preset={}){
  const sc = SCHEMAS[c], list = coll(c);
  const item = id ? list.find(x=>x.id===id) : { status:"afazer", front:"institucional", ...(c==="tasks"?{ emissor:"Grupo JGE", parent:"" }:{}), ...preset };
  if(!item) return;
  let body = "", buf = [];
  const flush = ()=>{ if(buf.length){ body += buf.length===2 ? `<div class="row2">${buf.join("")}</div>` : buf.join(""); buf=[]; } };
  sc.fields.forEach(f=>{ const h = fieldHTML(f, item[f.k]); if(f.half){ buf.push(h); if(buf.length===2) flush(); } else { flush(); body += h; } });
  flush();
  const owners = [...new Set(data.tasks.map(t=>t.owner).filter(Boolean))];
  const publicos = data.stakeholders.map(x=>x.name);
  const uniq = (k, extra) => [...new Set(data.tasks.map(t=>t[k]).filter(Boolean).concat(extra))];
  const lists = { emissores: uniq("emissor",["Grupo JGE"]), linguagens: uniq("linguagem",["Institucional, madura","Engajadora","Próxima e profissional"]),
    canais: uniq("canal",["Newsletter","Instagram","LinkedIn","WhatsApp","E-mail","Evento","Brinde físico","Site"]), freqs: uniq("frequencia",["Postagem única","Semanal","Quinzenal","Mensal","Trimestral","Anual"]) };
  const cats = [...new Set(data.links.map(l=>l.category).filter(Boolean).concat(["Pastas","Planejamento","Reuniões","Acessos","Referências"]))];
  openModal(`
    <div class="modal-h"><h3>${id?"Editar":"Nova"} ${sc.name}</h3>${closeBtn}</div>
    <form class="modal-b" id="itemForm">${body}
      <datalist id="owners">${owners.map(o=>`<option value="${esc(o)}">`).join("")}</datalist>
      ${Object.entries(lists).map(([id,l])=>`<datalist id="${id}">${l.map(o=>`<option value="${esc(o)}">`).join("")}</datalist>`).join("")}
      <datalist id="publicos">${publicos.map(o=>`<option value="${esc(o)}">`).join("")}</datalist>
      <datalist id="cats">${cats.map(o=>`<option value="${esc(o)}">`).join("")}</datalist>
      <div class="form-foot">
        ${id?`<button type="button" class="btn danger" data-del="${c}" data-id="${id}">Excluir</button>`:"<span></span>"}
        <span style="display:flex;gap:8px"><button type="button" class="btn" data-close>Cancelar</button><button class="btn primary">Salvar</button></span>
      </div>
    </form>`, c==="meetings");
  const form = document.getElementById("itemForm");
  if(c==="tasks"){
    const fillParents = ()=>{
      const sel = form.elements.parent, ph = prevH(form.elements.horizon.value);
      if(!ph){ sel.innerHTML = `<option value="">— Topo do planejamento</option>`; sel.disabled = true; return; }
      sel.disabled = false;
      const cur = sel.dataset.touched ? sel.value : item.parent;
      const opts = data.tasks.filter(x=>x.horizon===ph && x.id!==item.id);
      sel.innerHTML = `<option value="">— Sem vínculo</option>` + opts.map(x=>`<option value="${x.id}" ${x.id===cur?"selected":""}>${esc(x.title)}</option>`).join("");
    };
    fillParents();
    form.elements.horizon.addEventListener("change", fillParents);
    form.elements.parent.addEventListener("change", e=>{ e.target.dataset.touched = 1; });
  }
  form.addEventListener("submit", e=>{
    e.preventDefault();
    const fm = e.target.elements, out = {};
    sc.fields.filter(f=>f.k).forEach(f=>{
      const el = fm[f.k];
      if(f.type==="check") out[f.k] = el.checked;
      else if(f.type==="lines") out[f.k] = el.value.split("\n").map(s=>s.trim()).filter(Boolean);
      else if(f.type==="number") out[f.k] = el.value==="" ? null : Number(el.value);
      else if(f.type==="parent") out[f.k] = el.disabled ? "" : el.value;
      else out[f.k] = el.value.trim();
    });
    if(id) Object.assign(item, out); else list.push({ ...out, id: uid() });
    if(c==="tasks" && id) data.tasks.forEach(k=>{ if(k.parent===id && k.horizon!==nextH(item.horizon)) k.parent = ""; });
    closeModal(); save(cap(sc.name)+" salva");
  });
}

function editNextMeeting(){
  const nm = data.config.nextMeeting || {};
  openModal(`
    <div class="modal-h"><h3>Próxima reunião</h3>${closeBtn}</div>
    <form class="modal-b" id="nmForm">
      <label class="f">Título<input name="title" value="${esc(nm.title)}" placeholder="Ex.: Alinhamento quinzenal"></label>
      <label class="f">Data<input type="date" name="date" value="${esc(nm.date)}"></label>
      <label class="f">Observação<textarea name="notes" rows="2">${esc(nm.notes)}</textarea></label>
      <div class="form-foot"><span></span><span style="display:flex;gap:8px"><button type="button" class="btn" data-close>Cancelar</button><button class="btn primary">Salvar</button></span></div>
    </form>`);
  document.getElementById("nmForm").addEventListener("submit", e=>{
    e.preventDefault(); data.config.nextMeeting = Object.fromEntries(new FormData(e.target)); closeModal(); save("Próxima reunião salva");
  });
}
function editDriveConfig(){
  openModal(`
    <div class="modal-h"><h3>Pasta de pautas no Drive</h3>${closeBtn}</div>
    <form class="modal-b" id="drvForm">
      <p class="hint" style="font-size:13.5px">Cole o endereço do Web App do Google Apps Script (arquivo <b>pautas-drive.gs</b>). O painel lê automaticamente os documentos da pasta configurada e mostra a reunião mais recente na página inicial.</p>
      <label class="f">URL do Web App<input name="url" value="${esc(data.config.driveEndpoint)}" placeholder="https://script.google.com/macros/s/…/exec"></label>
      <div class="form-foot"><span></span><span style="display:flex;gap:8px"><button type="button" class="btn" data-close>Cancelar</button><button class="btn primary">Salvar e sincronizar</button></span></div>
    </form>`);
  document.getElementById("drvForm").addEventListener("submit", e=>{
    e.preventDefault(); data.config.driveEndpoint = e.target.elements.url.value.trim(); closeModal(); save("Pasta configurada"); syncDrive(true);
  });
}

/* ============ Arrastar e soltar (modo equipe) ============ */
let dragId = null;
document.addEventListener("dragstart", e=>{
  const el = e.target.closest?.("[data-drag]");
  if(!el || !editing()) return;
  dragId = el.dataset.drag; e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", dragId);
});
document.addEventListener("dragover", e=>{
  if(!dragId) return;
  const z = e.target.closest("[data-drop]"); if(!z) return;
  e.preventDefault();
  document.querySelectorAll(".drop").forEach(x=>x!==z && x.classList.remove("drop"));
  z.classList.add("drop");
});
document.addEventListener("dragleave", e=>{ const z = e.target.closest?.("[data-drop]"); if(z && !z.contains(e.relatedTarget)) z.classList.remove("drop"); });
document.addEventListener("drop", e=>{
  const z = e.target.closest("[data-drop]"); if(!z || !dragId) return;
  e.preventDefault();
  const t = data.tasks.find(x=>x.id===dragId); dragId = null;
  if(!t || t.horizon===z.dataset.drop) return render();
  t.horizon = z.dataset.drop;
  let lost = false;
  if(t.parent && taskById(t.parent)?.horizon!==prevH(t.horizon)){ t.parent = ""; lost = true; }
  data.tasks.forEach(k=>{ if(k.parent===t.id && k.horizon!==nextH(t.horizon)){ k.parent = ""; lost = true; } });
  save(`“${t.title}” movida para ${HORIZONS[t.horizon]}${lost?" — revise o vínculo com a tarefa-mãe":""}`);
});
document.addEventListener("dragend", ()=>{ dragId=null; document.querySelectorAll(".drop").forEach(x=>x.classList.remove("drop")); });

/* ============ Eventos ============ */
document.addEventListener("click", e=>{
  const t = e.target;
  const del = t.closest("[data-del]");
  if(del){ if(confirm("Excluir este item?")){ data[del.dataset.del] = coll(del.dataset.del).filter(x=>x.id!==del.dataset.id); closeModal(); save("Item excluído"); } return; }
  const ed = t.closest("[data-edit]");
  if(ed && editing()){ e.preventDefault(); return editItem(ed.dataset.edit, ed.dataset.id); }
  const add = t.closest("[data-add]");
  if(add){ const c = add.dataset.add; return editItem(c, null, c==="tasks" ? { horizon: add.dataset.preset || "proximas", ...(add.dataset.front?{ front:add.dataset.front }:{}) } : c==="meetings" ? { date: iso(today) } : {}); }
  const sp = t.closest("[data-split]");
  if(sp){ const p = taskById(sp.dataset.split); if(!p) return;
    return editItem("tasks", null, { horizon: nextH(p.horizon), parent: p.id, front: p.front, owner: p.owner, emissor: p.emissor, receptor: p.receptor,
      conteudo: p.conteudo, linguagem: p.linguagem, canal: p.canal, frequencia: p.frequencia, kpi: p.kpi, invest: null }); }
  const fc = t.closest("[data-focus]");
  if(fc){ focusId = fc.dataset.focus || null; if(focusId){ planView = "quadro"; fFront = "all"; fStatus = "all"; closeModal(); switchTab("planejamento"); } renderBoard(); return; }
  const ot = t.closest("[data-open-task]"); if(ot) return showTask(ot.dataset.openTask);
  const pv = t.closest("[data-planview]"); if(pv){ planView = pv.dataset.planview; renderBoard(); return; }
  const lv = t.closest("[data-level]"); if(lv){ planLevel = lv.dataset.level; renderStrat(); return; }
  const om = t.closest("[data-open-meet]"); if(om){ selMeet = om.dataset.openMeet; switchTab("reunioes"); renderMeetings(); return; }
  const sm = t.closest("[data-sel-meet]"); if(sm){ selMeet = sm.dataset.selMeet; renderMeetings(); if(matchMedia("(max-width:960px)").matches) document.getElementById("meetDoc").scrollIntoView({behavior:"smooth"}); return; }
  const sub = t.closest("[data-edit-sub]");
  if(sub){ const h = sub.dataset.editSub; const v = prompt(`Subtítulo da coluna “${HORIZONS[h]}”`, data.config.horizonSubs[h]||""); if(v!==null){ data.config.horizonSubs[h] = v.trim(); save(); } return; }
  const go = t.closest("[data-goto]"); if(go){ switchTab(go.dataset.goto); return; }
  const st = t.closest("[data-stat]"); if(st){ fStatus = st.dataset.stat; fFront = "all"; switchTab("planejamento"); renderBoard(); return; }
  const fg = t.closest("[data-front-go]"); if(fg){ fFront = fg.dataset.frontGo; fStatus = "all"; switchTab("planejamento"); renderBoard(); return; }
  const ff = t.closest("[data-ffront]"); if(ff){ fFront = ff.dataset.ffront; renderBoard(); return; }
  const fs = t.closest("[data-fstatus]"); if(fs){ fStatus = fs.dataset.fstatus; renderBoard(); return; }
  const sg = t.closest("[data-strat]"); if(sg){ strat = sg.dataset.strat; renderStrat(); return; }
  if(t.closest("#editNext")) return editNextMeeting();
});
document.querySelectorAll("nav.tabs button").forEach(b=>b.addEventListener("click",()=>switchTab(b.dataset.tab)));
function switchTab(name){
  tab = name;
  document.querySelectorAll("nav.tabs button").forEach(b=>b.classList.toggle("on", b.dataset.tab===name));
  document.querySelectorAll("[data-panel]").forEach(p=>p.hidden = p.dataset.panel!==name);
}
document.getElementById("refreshDrive").onclick = ()=> data.config.driveEndpoint ? syncDrive(true) : toast("Conecte a pasta do Drive no modo equipe");
document.getElementById("driveConfig").onclick = editDriveConfig;
function setEditing(on){
  document.body.classList.toggle("editing", on);
  document.querySelectorAll("[data-toggle-edit]").forEach(b=>b.innerHTML = on ? "✓ Sair do modo equipe" : "✎ Modo equipe");
  render();
  if(on){ let seen = false; try{ seen = localStorage.getItem(KEY+"-guia"); localStorage.setItem(KEY+"-guia","1"); }catch(e){} if(!seen) showGuide(); }
}
document.querySelectorAll("[data-toggle-edit]").forEach(b=>b.onclick = ()=>setEditing(!editing()));
document.querySelectorAll("[data-guide]").forEach(b=>b.onclick = ()=>showGuide());
function showGuide(){
  const step = (n,t,d)=>`<div class="guide-step"><span class="num-badge">${n}</span><div><b>${t}</b><p>${d}</p></div></div>`;
  openModal(`
    <div class="modal-h"><div><span class="kicker">Como usar o painel</span><h3>Planejamento em cascata</h3></div>${closeBtn}</div>
    <div class="modal-b">
      <p class="hint" style="font-size:13.5px">Cada tarefa grande do ano se desdobra em tarefas menores, até chegar no que precisa ser feito nos próximos dias.</p>
      <div class="cascade"><span class="lvl lvl-anual">Anual</span>→<span class="lvl lvl-trimestral">Trimestral</span>→<span class="lvl lvl-mensal">Mensal</span>→<span class="lvl lvl-proximas">Próxima</span></div>
      ${step(1,"Crie a tarefa anual","No Planejamento, clique em “+ Adicionar tarefa” na coluna Anual. Escolha a natureza (Institucional, Relacional, Comercial, Interno ou Reputacional) e preencha o plano de comunicação.")}
      ${step(2,"Desdobre","No card, clique em “+ Desdobrar”. A tarefa nova nasce na coluna seguinte, já ligada à de cima e com o plano preenchido — só ajuste o que muda.")}
      ${step(3,"Repita até as próximas tarefas","Trimestral → Mensal → Próximas. As próximas tarefas (com responsável e prazo) aparecem na página inicial.")}
      ${step(4,"Acompanhe","Mude o status conforme avança. A barra de cada card mostra quantos desdobramentos já foram concluídos; “Ver desdobramento” destaca o caminho inteiro.")}
      <div class="form-sec">No modo equipe também dá para</div>
      <ul class="guide-list">
        <li><b>Editar ou excluir:</b> clique em qualquer item marcado com ✎.</li>
        <li><b>Endomarketing:</b> são as tarefas de natureza Interno — crie em “+ Ação anual interna”.</li>
        <li><b>Personas, públicos e atributos:</b> aba Estratégia, botões “+ Nova …”.</li>
        <li><b>Reuniões:</b> as pautas vêm da pasta do Drive; também dá para criar uma pauta manual.</li>
        <li><b>Mover um card de coluna:</b> arraste. Se ele mudar de nível, escolha de novo a tarefa-mãe.</li>
      </ul>
    </div>
    <div class="modal-f"><button class="btn primary" data-close>Entendi</button></div>`);
}
document.getElementById("exportBtn").onclick = ()=>{
  const blob = new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
  Object.assign(document.createElement("a"),{href:URL.createObjectURL(blob),download:"grupo-jge-painel.json"}).click();
};
document.getElementById("importBtn").onclick = ()=>document.getElementById("importFile").click();
document.getElementById("importFile").onchange = async e=>{
  try{ const j = JSON.parse(await e.target.files[0].text()); if(!Array.isArray(j.tasks)) throw 0; data = withDefaults(j); save("Dados importados"); syncDrive(); }
  catch{ toast("Arquivo inválido"); }
  e.target.value="";
};
let tt; function toast(m){ const el=document.getElementById("toast"); el.textContent=m; el.classList.add("show"); clearTimeout(tt); tt=setTimeout(()=>el.classList.remove("show"),2200); }

render();
syncDrive();
setInterval(()=>{ if(data.config.driveEndpoint && !document.hidden) syncDrive(); }, 10*60*1000);
