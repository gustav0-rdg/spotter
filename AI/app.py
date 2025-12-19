import random

def analisar_disponibilidade(dias):
    if dias < 0 or dias > 7:
        raise ValueError("Valor inválido. Selecione um número inteiro")
    if not isinstance(dias, (int)):
        raise TypeError("Apenas valores inteiros são aceitos.")
    match(dias):
        case d if d <= 2:
            return "full_body"
        case d if d == 3:
            return "ppl"
        case d if d == 4:
            return "upper_lower"
        case _:
            return "abcde"
        
def analisar_experiencia(anos):
    if anos < 0:
        raise ValueError("Valor inválido. Selecione um número inteiro")
    if not isinstance(anos, (int)):
        raise TypeError("Apenas valores inteiros são aceitos.")
    match(anos):
        case a if a <= 2:
            return "iniciante"
        case a if a > 2 and a < 5:
            return "intermediario"
        case _:
            return "experiente"
        
exercicios = [
  {
    "grupo": "peito",
    "grupos_secundarios": ["deltoides", "triceps"],
    "exercicio": "Supino Reto",
    "tipo": "composto",
    "nivel": "intermediario"
  },
  {
    "grupo": "peito",
    "grupos_secundarios": [],
    "exercicio": "Crucifixo",
    "tipo": "individual",
    "nivel": "iniciante"
  },
  {
    "grupo": "peito",
    "grupos_secundarios": ["deltoides", "triceps"],
    "exercicio": "Supino Inclinado com Halteres",
    "tipo": "composto",
    "nivel": "intermediario"
  },
  {
    "grupo": "peito",
    "grupos_secundarios": [],
    "exercicio": "Crossover no Cabo",
    "tipo": "individual",
    "nivel": "iniciante"
  },

  {
    "grupo": "costas",
    "grupos_secundarios": ["biceps", "deltoides"],
    "exercicio": "Puxada Frontal",
    "tipo": "composto",
    "nivel": "iniciante"
  },
  {
    "grupo": "costas",
    "grupos_secundarios": ["biceps"],
    "exercicio": "Remada Curvada",
    "tipo": "composto",
    "nivel": "experiente"
  },
  {
    "grupo": "costas",
    "grupos_secundarios": [],
    "exercicio": "Remada Baixa",
    "tipo": "composto",
    "nivel": "iniciante"
  },
  {
    "grupo": "costas",
    "grupos_secundarios": ["lombar"],
    "exercicio": "Levantamento Terra",
    "tipo": "composto",
    "nivel": "experiente"
  },

  {
    "grupo": "pernas",
    "grupos_secundarios": ["gluteos", "core"],
    "exercicio": "Agachamento Livre",
    "tipo": "composto",
    "nivel": "experiente"
  },
  {
    "grupo": "pernas",
    "grupos_secundarios": [],
    "exercicio": "Cadeira Extensora",
    "tipo": "individual",
    "nivel": "iniciante"
  },
  {
    "grupo": "pernas",
    "grupos_secundarios": ["gluteos"],
    "exercicio": "Leg Press",
    "tipo": "composto",
    "nivel": "iniciante"
  },
  {
    "grupo": "pernas",
    "grupos_secundarios": ["gluteos", "posterior"],
    "exercicio": "Stiff",
    "tipo": "composto",
    "nivel": "intermediario"
  },

  {
    "grupo": "ombro",
    "grupos_secundarios": ["triceps"],
    "exercicio": "Desenvolvimento com Halteres",
    "tipo": "composto",
    "nivel": "intermediario"
  },
  {
    "grupo": "ombro",
    "grupos_secundarios": [],
    "exercicio": "Elevação Lateral",
    "tipo": "individual",
    "nivel": "iniciante"
  },
  {
    "grupo": "ombro",
    "grupos_secundarios": ["triceps"],
    "exercicio": "Desenvolvimento Militar",
    "tipo": "composto",
    "nivel": "experiente"
  },
  {
    "grupo": "ombro",
    "grupos_secundarios": [],
    "exercicio": "Elevação Frontal",
    "tipo": "individual",
    "nivel": "iniciante"
  },

  {
    "grupo": "biceps",
    "grupos_secundarios": [],
    "exercicio": "Rosca Direta",
    "tipo": "individual",
    "nivel": "iniciante"
  },
  {
    "grupo": "biceps",
    "grupos_secundarios": [],
    "exercicio": "Rosca Alternada",
    "tipo": "individual",
    "nivel": "iniciante"
  },
  {
    "grupo": "biceps",
    "grupos_secundarios": [],
    "exercicio": "Rosca Scott",
    "tipo": "individual",
    "nivel": "intermediario"
  },
  {
    "grupo": "biceps",
    "grupos_secundarios": ["antebraco"],
    "exercicio": "Rosca Martelo",
    "tipo": "individual",
    "nivel": "iniciante"
  },

  {
    "grupo": "triceps",
    "grupos_secundarios": [],
    "exercicio": "Tríceps Pulley",
    "tipo": "individual",
    "nivel": "iniciante"
  },
  {
    "grupo": "triceps",
    "grupos_secundarios": ["ombro"],
    "exercicio": "Tríceps Testa",
    "tipo": "individual",
    "nivel": "intermediario"
  },
  {
    "grupo": "triceps",
    "grupos_secundarios": ["peito", "ombro"],
    "exercicio": "Paralelas",
    "tipo": "composto",
    "nivel": "experiente"
  },
  {
    "grupo": "triceps",
    "grupos_secundarios": [],
    "exercicio": "Tríceps Coice",
    "tipo": "individual",
    "nivel": "iniciante"
  },

  {
    "grupo": "abdomen",
    "grupos_secundarios": ["core"],
    "exercicio": "Abdominal Crunch",
    "tipo": "individual",
    "nivel": "iniciante"
  },
  {
    "grupo": "abdomen",
    "grupos_secundarios": ["core", "lombar"],
    "exercicio": "Prancha Isométrica",
    "tipo": "isometrico",
    "nivel": "iniciante"
  },
  {
    "grupo": "abdomen",
    "grupos_secundarios": ["core"],
    "exercicio": "Elevação de Pernas",
    "tipo": "individual",
    "nivel": "intermediario"
  },
  {
    "grupo": "abdomen",
    "grupos_secundarios": ["core", "flexores_quadril"],
    "exercicio": "Abdominal Infra na Barra",
    "tipo": "individual",
    "nivel": "experiente"
  }
]

base_treinos = [
  {
    "foco": "forca",
    "series": "4 a 6",
    "reps": "1 a 5",
    "carga": "85% a 95% do peso máximo suportado",
    "limitacao": "sem exercícios isolados",
    "descanso": "3 a 5 minutos",
    "obs": "Priorizar exercícios compostos e progressão de carga"
  },
  {
    "foco": "emagrecimento",
    "series": "3 a 4",
    "reps": "10 a 15",
    "carga": "moderada",
    "limitacao": "descanso curto",
    "descanso": "30 a 60 segundos",
    "obs": "Uso de bi-sets, tri-sets ou circuitos para aumentar gasto calórico"
  },
  {
    "foco": "hipertrofia",
    "series": "3 a 5",
    "reps": "6 a 12",
    "carga": "65% a 80% do peso máximo suportado",
    "limitacao": "equilíbrio entre exercícios compostos e isolados",
    "descanso": "60 a 90 segundos",
    "obs": "Foco em tensão mecânica e controle do tempo sob tensão"
  },
  {
    "foco": "resistencia",
    "series": "2 a 4",
    "reps": "15 a 25",
    "carga": "leve a moderada",
    "limitacao": "evitar cargas máximas",
    "descanso": "30 a 45 segundos",
    "obs": "Objetivo é manter desempenho por longos períodos"
  },
  {
    "foco": "mobilidade",
    "series": "2 a 3",
    "reps": "10 a 15",
    "carga": "peso corporal ou elásticos",
    "limitacao": "movimentos controlados",
    "descanso": "30 a 60 segundos",
    "obs": "Amplitude máxima sem dor, foco em controle motor"
  },
  {
    "foco": "reabilitacao",
    "series": "2 a 3",
    "reps": "12 a 20",
    "carga": "leve",
    "limitacao": "exercícios isolados e guiados",
    "descanso": "60 a 90 segundos",
    "obs": "Executar apenas com liberação profissional e foco em segurança"
  }
]

cronograma = {
    "full_body": { 
        "dia_1": { "quantidade_exs": 6, "grupos": ["peito", "deltoides", "biceps", "triceps", "costas"] },
        "dia_2": { "quantidade_exs": 5, "grupos": ["gluteos", "pernas", "posterior", "abdomen"] } 
    },
    "upper_lower": { 
        "upper_1": { "quantidade_exs": 6, "grupos": ["peito", "costas", "deltoides", "biceps", "triceps"] },
        "lower_1": { "quantidade_exs": 6, "grupos": ["pernas", "gluteos", "posterior", "abdomen"] },
        "upper_2": { "quantidade_exs": 6, "grupos": ["peito", "costas", "deltoides", "biceps", "triceps"] },
        "lower_2": { "quantidade_exs": 6, "grupos": ["pernas", "gluteos", "posterior", "abdomen"] }
    },
    "ppl": { 
        "push": { "quantidade_exs": 6, "grupos": ["peito", "deltoides", "triceps"] },
        "pull": { "quantidade_exs": 6, "grupos": ["costas", "biceps", "antebraco"] },
        "legs": { "quantidade_exs": 7, "grupos": ["pernas", "gluteos", "posterior", "abdomen"] }
    },
    "abcde": { 
        "dia_a": { "quantidade_exs": 5, "grupos": ["peito"] },
        "dia_b": { "quantidade_exs": 5, "grupos": ["costas"] },
        "dia_c": { "quantidade_exs": 5, "grupos": ["pernas", "gluteos", "posterior"] },
        "dia_d": { "quantidade_exs": 4, "grupos": ["deltoides"] },
        "dia_e": { "quantidade_exs": 4, "grupos": ["biceps", "triceps", "abdomen"] }
    }
}

NIVEL_ORDEM = {
    "iniciante": 1,
    "intermediario": 2,
    "experiente": 3
}

def obter_base_treino(foco):
    if not isinstance(foco, (str)):
        raise TypeError("Valor inválido enviado. Apenas textos são aceitos.")
    for base in base_treinos:
        if base["foco"] == foco:
            return base
    return None

def filtrar_exercicios(grupo, nivel_usuario):
    nivel_max = NIVEL_ORDEM[nivel_usuario]

    candidatos = []
    for ex in exercicios:
        if ex["grupo"] == grupo:
            nivel_ex = NIVEL_ORDEM[ex["nivel"]]
            if nivel_ex <= nivel_max:
                candidatos.append(ex)

    return candidatos

def ordenar_por_prioridade(lista, objetivo):
    def score(ex):
        pontos = 0

        if objetivo == "forca" and ex["tipo"] == "composto":
            pontos += 3
        if objetivo == "hipertrofia":
            pontos += 2 if ex["tipo"] == "composto" else 1
        if objetivo == "emagrecimento":
            pontos += 1

        pontos += random.uniform(0, 0.5)  # evita padrão fixo
        return pontos

    return sorted(lista, key=score, reverse=True)

def montar_treino_dia(grupos, qtd_exs, nivel_usuario, objetivo):
    selecionados = []

    for grupo in grupos:
        candidatos = filtrar_exercicios(grupo, nivel_usuario)
        candidatos = ordenar_por_prioridade(candidatos, objetivo)

        for ex in candidatos:
            if len(selecionados) < qtd_exs and ex not in selecionados:
                selecionados.append(ex)

    # fallback se não bater quantidade
    if len(selecionados) < qtd_exs:
        restantes = [
            ex for ex in exercicios
            if NIVEL_ORDEM[ex["nivel"]] <= NIVEL_ORDEM[nivel_usuario]
            and ex not in selecionados
        ]
        random.shuffle(restantes)
        selecionados.extend(restantes[:qtd_exs - len(selecionados)])

    return selecionados[:qtd_exs]

def gerar_treino(dias_disponiveis, anos_exp, objetivo):
    tipo_cronograma = analisar_disponibilidade(dias_disponiveis)
    nivel_usuario = analisar_experiencia(anos_exp)
    base = obter_base_treino(objetivo)
    if tipo_cronograma not in cronograma:
        return f"Erro: Cronograma '{tipo_cronograma}' não encontrado."

    estrutura_selecionada = cronograma[tipo_cronograma] 
    
    plano = {}
    for dia_nome, dados_dia in estrutura_selecionada.items():
        
        treino = montar_treino_dia(
            grupos=dados_dia["grupos"],
            qtd_exs=dados_dia["quantidade_exs"],
            nivel_usuario=nivel_usuario,
            objetivo=objetivo
        )

        plano[dia_nome] = {
            "exercicios": treino,
            "parametros": base,
            "tipo_treino": tipo_cronograma
        }

    return plano

treino = gerar_treino(
    dias_disponiveis=4,
    anos_exp=3,
    objetivo="hipertrofia"
)
