import random
import json
from enum import Enum
from typing import List, Dict, Union, Optional
from dataclasses import dataclass

# Criando classes pra validar os tipos enviados pelos usuários
# EXP Do user
class Nivel(Enum):
    INICIANTE = 1
    INTERMEDIARIO = 2
    EXPERIENTE = 3

# Objetivo do usuário
class Objetivo(Enum):
    FORCA = "forca"
    HIPERTROFIA = "hipertrofia"
    RESISTENCIA = "resistencia"
    EMAGRECIMENTO = "emagrecimento"
    MOBILIDADE = "mobilidade"
    REABILITACAO = "reabilitacao"

@dataclass 
class Exercicios:
    nome: str
    grupo: str
    grupos_secundarios: List[str]
    tipo: str
    nivel: Nivel

DB_EXERCICIOS = [
    # PEITO
    {"grupo": "peito", "grupos_secundarios": ["deltoides", "triceps"], "exercicio": "Supino Reto", "tipo": "composto", "nivel": "intermediario"},
    {"grupo": "peito", "grupos_secundarios": [], "exercicio": "Crucifixo", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "peito", "grupos_secundarios": ["deltoides", "triceps"], "exercicio": "Supino Inclinado", "tipo": "composto", "nivel": "intermediario"},
    {"grupo": "peito", "grupos_secundarios": [], "exercicio": "Crossover", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "peito", "grupos_secundarios": ["triceps"], "exercicio": "Flexão de Braço", "tipo": "composto", "nivel": "iniciante"},
    
    # COSTAS
    {"grupo": "costas", "grupos_secundarios": ["biceps"], "exercicio": "Puxada Frontal", "tipo": "composto", "nivel": "iniciante"},
    {"grupo": "costas", "grupos_secundarios": ["biceps"], "exercicio": "Remada Curvada", "tipo": "composto", "nivel": "experiente"},
    {"grupo": "costas", "grupos_secundarios": [], "exercicio": "Remada Baixa", "tipo": "composto", "nivel": "iniciante"},
    {"grupo": "costas", "grupos_secundarios": ["lombar"], "exercicio": "Levantamento Terra", "tipo": "composto", "nivel": "experiente"},
    {"grupo": "costas", "grupos_secundarios": ["biceps"], "exercicio": "Barra Fixa", "tipo": "composto", "nivel": "intermediario"},

    # PERNAS
    {"grupo": "pernas", "grupos_secundarios": ["gluteos"], "exercicio": "Agachamento Livre", "tipo": "composto", "nivel": "experiente"},
    {"grupo": "pernas", "grupos_secundarios": [], "exercicio": "Cadeira Extensora", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "pernas", "grupos_secundarios": ["gluteos"], "exercicio": "Leg Press 45", "tipo": "composto", "nivel": "iniciante"},
    {"grupo": "pernas", "grupos_secundarios": ["posterior"], "exercicio": "Stiff", "tipo": "composto", "nivel": "intermediario"},
    {"grupo": "pernas", "grupos_secundarios": ["gluteos"], "exercicio": "Afundo com Halteres", "tipo": "composto", "nivel": "intermediario"},

    # OMBRO
    {"grupo": "ombro", "grupos_secundarios": ["triceps"], "exercicio": "Desenvolvimento Halteres", "tipo": "composto", "nivel": "intermediario"},
    {"grupo": "ombro", "grupos_secundarios": [], "exercicio": "Elevação Lateral", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "ombro", "grupos_secundarios": ["triceps"], "exercicio": "Desenvolvimento Militar", "tipo": "composto", "nivel": "experiente"},
    {"grupo": "ombro", "grupos_secundarios": [], "exercicio": "Elevação Frontal", "tipo": "individual", "nivel": "iniciante"},

    # BICEPS & TRICEPS & ANTEBRAÇO
    {"grupo": "biceps", "grupos_secundarios": [], "exercicio": "Rosca Direta", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "biceps", "grupos_secundarios": [], "exercicio": "Rosca Scott", "tipo": "individual", "nivel": "intermediario"},
    {"grupo": "triceps", "grupos_secundarios": [], "exercicio": "Tríceps Pulley", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "triceps", "grupos_secundarios": ["ombro"], "exercicio": "Tríceps Testa", "tipo": "individual", "nivel": "intermediario"},
    {"grupo": "triceps", "grupos_secundarios": ["peito"], "exercicio": "Paralelas", "tipo": "composto", "nivel": "experiente"},
    {"grupo": "antebraco", "grupos_secundarios": [], "exercicio": "Rosca Inversa", "tipo": "individual", "nivel": "iniciante"},

    # ABDOMEN & OUTROS
    {"grupo": "abdomen", "grupos_secundarios": ["core"], "exercicio": "Abdominal Crunch", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "abdomen", "grupos_secundarios": ["core"], "exercicio": "Prancha", "tipo": "isometrico", "nivel": "iniciante"},
    {"grupo": "panturrilha", "grupos_secundarios": [], "exercicio": "Gêmeos Sentado", "tipo": "individual", "nivel": "iniciante"},
    {"grupo": "gluteos", "grupos_secundarios": [], "exercicio": "Elevação Pélvica", "tipo": "individual", "nivel": "intermediario"}
]

class GeradorDeTreino:
    def __init__(self):
        self.banco_exercicios = self._carregar_exercicios()
        self.bases_treino = self._carregar_bases()
        self.cronogramas = self._carregar_cronogramas()

    def _carregar_exercicios(self) -> List[Exercicios]:
        lista_formatada = []
        # Mapeando os níveis de exericios possíveis
        mapa_nivel = {
            'iniciante':Nivel.INICIANTE, 
            'intermediario': Nivel.INTERMEDIARIO,
            'experiente':Nivel.EXPERIENTE
        }

        for item in DB_EXERCICIOS:
            # Formatando a lísta de exercicios possíveis
            lista_formatada.append(Exercicios(
                nome=item["exercicio"],
                grupo=item["grupo"],
                grupos_secundarios=item.get("grupos_secundarios",[]),
                tipo=item["tipo"],
                nivel=mapa_nivel[item["nivel"]]
            ))
        return lista_formatada

    def _carregar_cronogramas(self) -> Dict:
        # Cronogramas pra cada tipo de disponibilidade
        return {
            "full_body": {
                "dia_1": {"qtd": 6, "grupos": ["peito", "costas", "pernas", "ombro", "biceps", "triceps"]},
                "dia_2": {"qtd": 6, "grupos": ["pernas", "gluteos", "costas", "peito", "abdomen", "panturrilha"]}
            },
            "ppl": {
                "push": {"qtd": 6, "grupos": ["peito", "ombro", "triceps"]},
                "pull": {"qtd": 6, "grupos": ["costas", "biceps", "antebraco", "abdomen"]},
                "legs": {"qtd": 6, "grupos": ["pernas", "gluteos", "panturrilha"]}
            },
            "upper_lower": {
                "upper_1": {"qtd": 6, "grupos": ["peito", "costas", "ombro", "biceps", "triceps"]},
                "lower_1": {"qtd": 6, "grupos": ["pernas", "gluteos", "panturrilha", "abdomen"]},
                "upper_2": {"qtd": 6, "grupos": ["costas", "peito", "ombro", "triceps", "biceps"]},
                "lower_2": {"qtd": 6, "grupos": ["pernas", "gluteos", "panturrilha", "abdomen"]}
            },
            "abcde": {
                "dia_a": {"qtd": 5, "grupos": ["peito", "abdomen"]},
                "dia_b": {"qtd": 5, "grupos": ["costas", "antebraco"]},
                "dia_c": {"qtd": 6, "grupos": ["pernas", "panturrilha"]},
                "dia_d": {"qtd": 5, "grupos": ["ombro", "triceps"]},
                "dia_e": {"qtd": 5, "grupos": ["biceps", "abdomen"]}
            }
        }

    def _carregar_bases(self) -> List[Dict]:
        # Lista de definições para cada tipo de objetivo
        return [
            {"foco": Objetivo.HIPERTROFIA, "series": "3-4", "reps": "8-12", "descanso": "60-90s"},
            {"foco": Objetivo.FORCA, "series": "4-6", "reps": "3-6", "descanso": "3-5min"},
            {"foco": Objetivo.EMAGRECIMENTO, "series": "3-4", "reps": "12-15", "descanso": "30-45s"},
            {"foco": Objetivo.RESISTENCIA, "series": "2-3", "reps": "15-20", "descanso": "30s"}
        ]
    
    def _determinar_estrutura(self, dias: int) -> str: 
        if not isinstance(dias, int): raise TypeError("Apenas números inteiros são aceitos para dias.")
           
        if dias <= 2: return "full_body"
        if dias == 3: return "ppl"
        if dias == 4: return "upper_lower"

        return "abcde"
    
    def _calcular_score(self, exercicio: Exercicios, objetivo: Objetivo) -> float:
        pontos = 0
        if objetivo == Objetivo.FORCA and exercicio.tipo == "composto": pontos +=5
        if objetivo == Objetivo.HIPERTROFIA and exercicio.tipo == "composto": pontos += 3

        # Variando os treinos gerados
        pontos += random.uniform(0,0.5)
        return pontos
    
    def _selecionar_exercicios(self, grupos: List[str], qtd_total: int, nivel:Nivel, objetivo: Objetivo) -> List[dict]:
        candidatos = []
        for ex in self.banco_exercicios:
            # Validando se o grupo muscular do exercicio é correto
            # E se o nível do usuário suporta o tipo de treino
            if ex.grupo in grupos and ex.nivel.value <= nivel.value:
                candidatos.append(ex)
        candidatos.sort(key=lambda x: self._calcular_score(x, objetivo), reverse=True)
        selecionados = []
        grupos_atendidos = set()
        # tenta garantir pelo 1 ex do grupo solicitado
        for grupo in grupos:
            for ex in candidatos:
                if ex.grupo == grupo and ex not in selecionados:
                    selecionados.append(ex)
                    grupos_atendidos.add(grupo)
                    break

        # List comprehension pra atingir a quantidade necessaria de exericicios
        # Removendo os já selecionados
        restantes = [ex for ex in candidatos if ex not in selecionados]
        random.shuffle(restantes)

        while len(selecionados) < qtd_total and restantes:
            selecionados.append(restantes.pop(0))
        
        # Fallback
        # Caso os exercicios selecionados não sejam suficientes, repetir algum.
        if len(selecionados) < qtd_total:
            compostos_do_dia = [ex for ex in selecionados if ex.tipo == "composto"]
            while len(selecionados) < qtd_total and compostos_do_dia:
                selecionados.append(random.choice(compostos_do_dia))

        return [{"nome": ex.nome, "series": "X", "reps": "Y"} for ex in selecionados[:qtd_total]]
    
    def criar_plano(self, dias_disponiveis: int, anos_exp: int, objetivo_str: str):
        # Validações
        try:
            objetivo = Objetivo(objetivo_str.lower())
        except ValueError:
            raise ValueError(f"Objetivo inválido. Use: {[o.value for o in Objetivo]}")

        nivel = Nivel.INICIANTE if anos_exp <= 2 else (Nivel.INTERMEDIARIO if anos_exp < 5 else Nivel.EXPERIENTE)
        tipo_treino = self._determinar_estrutura(dias_disponiveis)
        
        # Busca parâmetros base (reps, series)
        base_params = next((b for b in self.bases_treino if b["foco"] == objetivo), None)
        
        estrutura = self.cronogramas.get(tipo_treino)
        plano_final = {"resumo": {"tipo": tipo_treino, "nivel": nivel.name, "objetivo": objetivo.value}, "rotina": {}}
        print(estrutura)
        for dia_nome, config in estrutura.items():
            exercicios_dia = self._selecionar_exercicios(
                grupos=config["grupos"],
                qtd_total=config["qtd"],
                nivel=nivel,
                objetivo=objetivo
            )
            
            # Aplica series/reps nos exercícios
            for ex in exercicios_dia:
                ex["series"] = base_params["series"]
                ex["reps"] = base_params["reps"]

            plano_final["rotina"][dia_nome] = {
                "foco_muscular": config["grupos"],
                "exercicios": exercicios_dia,
                "descanso_entre_series": base_params["descanso"]
            }

        return plano_final
    
    # fiz so pra visualizar tudo ta
    # isso nem usa
    def salvar_json(self, plano: Dict, nome_arquivo: str):
        try:
            with open(nome_arquivo, "w", encoding="utf-8") as f:
                json.dump(plano, f, indent=4, ensure_ascii=False)
            print(f"Arquivo salvo: {nome_arquivo}")
        except Exception as e:
            print(f"Erro ao salvar: {e}")

try:
    generator = GeradorDeTreino()
    
    # Gerando o treino
    meu_plano = generator.criar_plano(
        dias_disponiveis=4, 
        anos_exp=3, 
        objetivo_str="hipertrofia"
    )
    generator.salvar_json(meu_plano, "meu_treino_pro.json")

except ValueError as ve:
    print(f"Erro de Validação: {ve}")
except Exception as e:
    print(f"Erro Inesperado: {e}")