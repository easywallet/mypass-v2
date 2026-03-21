-- Migration: Add administrative fields to developer_signups
-- Approved by user on 2026-03-21
-- Formato: mp_uuid para sandbox_token

ALTER TABLE developer_signups
  ADD COLUMN IF NOT EXISTS aprovado BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS sandbox_token TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS approved_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS approved_by TEXT;

-- Comentários de auditoria:
-- aprovado: Status de aprovação (FALSE=pendente)
-- sandbox_token: Token MPX único gerado na aprovação
-- approved_at: Data/hora da aprovação
-- approved_by: Identificação do admin responsável
