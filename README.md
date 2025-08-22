# 🎓 Plataforma Interativa de Apoio à Educação Infantil

## 📌 Visão Geral
A **Plataforma Interativa de Apoio à Educação Infantil** tem como objetivo proporcionar um aprendizado **lúdico, interativo e inclusivo** para crianças de 7 a 12 anos.
O sistema permitirá que **pais, professores e especialistas** acompanhem o progresso da criança, enquanto atividades educativas e jogos interativos estimulam o desenvolvimento cognitivo e socioemocional.

## 🚀 Funcionalidades Principais
- 👤 Cadastro de usuários (pais, responsáveis, professores, especialistas).
- 👶 Cadastro de crianças vinculadas a perfis de aprendizado.
- 🎮 Atividades pedagógicas interativas segmentadas por faixa etária.
- 📊 Relatórios e gráficos de desempenho das crianças.
- 💬 Comentários e recomendações por especialistas.
- 🔔 Notificações automáticas para pais e responsáveis.
- 🔐 Segurança e privacidade conforme a LGPD.

## 🛠️ Tecnologias Utilizadas
- **Backend:** Python 3 + Django + Django REST Framework  
- **Banco de Dados:** MySQL  
- **Frontend:** React + Bootstrap  
- **Estilo:** HTML5 + CSS3  
- **Metodologia:** Scrum (desenvolvimento ágil)  

## 📂 Estrutura do Projeto
```
plataforma-educacao-infantil/
│── backend/                # Aplicação Django (API REST)
│   ├── manage.py
│   ├── core/               # Configurações principais do Django
│   ├── users/              # App para cadastro/login de usuários
│   └── children/           # App para cadastro e acompanhamento das crianças
│
│── frontend/               # Aplicação React (Vite)
│   ├── index.html
│   └── src/
│       ├── components/     # Componentes React
│       ├── pages/          # Páginas (Login, Dashboard, etc.)
│       └── services/       # Comunicação com API Django
│
│── docs/                   # Documentação do projeto
│── README.md
```

## ⚙️ Configuração Rápida

### 1) Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env` (na pasta `backend/`) e ajuste as credenciais do MySQL:
```
cp backend/.env.example backend/.env
```

### 2) Backend (Django + MySQL)
```bash
cd backend
python -m venv venv
# Linux/Mac
source venv/bin/activate
# Windows
# venv\Scripts\activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 3) Frontend (React + Bootstrap via Vite)
```bash
cd frontend
npm install
npm run dev
```

## 🔌 Integração Frontend/Backend
- O frontend usa a variável `VITE_API_BASE_URL` (ver `frontend/.env.example`).  
- No desenvolvimento local, a API padrão é `http://127.0.0.1:8000`.

## 👥 Equipe
- **Scrum Master:** Beatris Antunes Silva  
- **Product Owner:** Francisco José Marcon Médicci  
- **Desenvolvedores:** Matheus Nicolau Buriti, Bruna Rodrigues Albuquerque, Camila Barbosa Andrade  

## 📜 Licença
Projeto acadêmico — uso livre para fins educacionais.
