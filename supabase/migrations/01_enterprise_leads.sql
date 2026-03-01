CREATE TABLE enterprise_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT NOT NULL,
  cargo TEXT NOT NULL,
  segmento TEXT NOT NULL,
  mensagem TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
