import { useState } from 'react';
import { ChevronDown, Magnet, Calculator, Zap, Target, FileText, Box as BoxIcon } from 'lucide-react';
import MagneticLevitationScene from './components/MagneticLevitationScene';

function App() {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl">
              <Magnet className="w-16 h-16" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Sistema de Levitação Magnética
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Baseado em Interação com o Campo Magnético Terrestre
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Uma abordagem inovadora explorando a sinergia entre força magnética terrestre e sistemas artificiais de alta indução
          </p>

          <button
            onClick={() => scrollToSection('intro')}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            Explorar o Projeto
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Magnet className="w-6 h-6 text-cyan-400" />
              <span className="font-semibold">Levitação Magnética</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'intro', label: 'Introdução' },
                { id: 'parameters', label: 'Parâmetros' },
                { id: 'modeling', label: 'Modelagem' },
                { id: 'configuration', label: 'Configuração' },
                { id: 'energy', label: 'Energia' },
                { id: 'objectives', label: 'Objetivos' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm hover:text-cyan-400 transition-colors ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Introduction Section */}
      <section id="intro" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Introdução e Fundamentação Científica</h2>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 leading-relaxed space-y-4 text-slate-300">
            <p className="text-lg">
              O presente projeto propõe o desenvolvimento de um <span className="text-cyan-400 font-semibold">sistema de levitação magnética automotiva</span> que se baseia na interação direta entre campos magnéticos artificiais — gerados por ímãs permanentes de alta densidade (Neodímio NdFeB) — e o campo magnético natural do planeta Terra, cuja intensidade média é de aproximadamente <span className="text-cyan-400 font-semibold">0,5 Gauss (5 × 10⁻⁵ Tesla)</span>.
            </p>

            <p className="text-lg">
              A ideia central consiste em criar uma <span className="text-cyan-400 font-semibold">força de repulsão controlada</span>, capaz de contrabalançar a força gravitacional (F<sub>g</sub> = m·g) agindo sobre um veículo de 900 kg, de modo que o mesmo mantenha sustentação a uma distância pré-definida do solo, projetada inicialmente em <span className="text-cyan-400 font-semibold">2 centímetros</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section id="parameters" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Parâmetros Técnicos de Referência</h2>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800/50">
                    <th className="text-left py-4 px-6 font-semibold text-cyan-400">Parâmetro</th>
                    <th className="text-left py-4 px-6 font-semibold text-cyan-400">Valor de Referência</th>
                    <th className="text-left py-4 px-6 font-semibold text-cyan-400">Unidade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {[
                    { param: 'Massa do veículo (m)', value: '900', unit: 'kg' },
                    { param: 'Distância entre ímãs e solo (d)', value: '0,02', unit: 'm' },
                    { param: 'Campo magnético da Terra (Bₜ)', value: '0,5', unit: 'Gauss' },
                    { param: 'Permeabilidade do vácuo (μ₀)', value: '4π × 10⁻⁷', unit: 'N/A²' },
                    { param: 'Tipo de ímã', value: 'NdFeB (Neodímio)', unit: '—' },
                    { param: 'Densidade de fluxo magnético dos ímãs', value: '1,4', unit: 'Tesla' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-6 text-slate-300">{row.param}</td>
                      <td className="py-4 px-6 font-mono text-cyan-300">{row.value}</td>
                      <td className="py-4 px-6 text-slate-400">{row.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Interactive Demo Section */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BoxIcon className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Demonstração Interativa 3D</h2>
          </div>

          <p className="text-slate-300 mb-8 text-lg">
            Explore o sistema de levitação magnética em tempo real. Ajuste a altura, visualize as forças e observe as linhas de campo magnético.
          </p>

          <MagneticLevitationScene />
        </div>
      </section>

      {/* Modeling Section */}
      <section id="modeling" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Modelagem Matemática da Levitação</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Força Magnética de Repulsão</h3>
              <div className="bg-slate-950/50 p-6 rounded-xl font-mono text-lg overflow-x-auto">
                F<sub>m</sub> = (μ₀ · m₁ · m₂) / (4π · d²)
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Força Gravitacional</h3>
              <div className="bg-slate-950/50 p-6 rounded-xl font-mono text-lg overflow-x-auto">
                F<sub>g</sub> = m₁ · g
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur border border-cyan-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Condição de Equilíbrio</h3>
              <div className="bg-slate-950/50 p-6 rounded-xl font-mono text-lg mb-4 overflow-x-auto">
                F<sub>m</sub> = F<sub>g</sub>
              </div>
              <div className="bg-slate-950/50 p-6 rounded-xl font-mono text-lg mb-4 overflow-x-auto">
                d = √[(μ₀ · m₂) / (4π · g)]
              </div>
              <div className="bg-slate-950/50 p-6 rounded-xl font-mono text-lg overflow-x-auto">
                d ≈ 0,016 m <span className="text-cyan-400">(1,6 cm)</span>
              </div>
              <p className="mt-4 text-slate-300">
                Portanto, a distância teórica mínima de equilíbrio é de aproximadamente <span className="text-cyan-400 font-semibold">1,6 cm</span>, demonstrando a <span className="text-cyan-400 font-semibold">plausibilidade física</span> de sustentação magnética sob parâmetros ideais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section id="configuration" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Proposta de Configuração Experimental</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-700/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Anel Magnético Duplo</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Dois anéis concêntricos de ímãs NdFeB</li>
                <li>• Diâmetro: <span className="text-cyan-400">20 cm</span></li>
                <li>• Espessura: <span className="text-cyan-400">5 cm</span></li>
                <li>• Campo central direcionado ao eixo longitudinal</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-700/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Configuração de Halbach</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Disposição vetorial alternada de ímãs</li>
                <li>• Otimiza fluxo magnético direcional</li>
                <li>• Anula fluxo na direção oposta</li>
                <li>• Aumenta força sem acréscimo proporcional de massa</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-cyan-700/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">Distribuição no Chassi</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <span className="text-cyan-400">10 anéis</span> dispostos simetricamente</li>
                <li>• Distância entre anéis: <span className="text-cyan-400">10 cm</span></li>
                <li>• Campo total estimado: <span className="text-cyan-400 font-semibold">10.000 Gauss</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Section */}
      <section id="energy" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Estimativa Energética e Consumo</h2>
          </div>

          <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Fórmula de Energia</h3>
              <div className="bg-slate-950/50 p-6 rounded-xl font-mono text-lg overflow-x-auto">
                E = F · d · v
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Parâmetros de Cálculo</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-950/50 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-1">Força</div>
                  <div className="font-mono text-xl text-cyan-300">F = 9000 N</div>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-1">Distância</div>
                  <div className="font-mono text-xl text-cyan-300">d = 0,1 m</div>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-1">Velocidade</div>
                  <div className="font-mono text-xl text-cyan-300">v = 10 m/s</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-cyan-700/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-cyan-300">Resultado</h3>
              <div className="bg-slate-950/50 p-6 rounded-xl font-mono text-2xl mb-4 overflow-x-auto">
                E = 9000 × 0,1 × 10 = <span className="text-cyan-400 font-bold">9000 W</span>
              </div>
              <p className="text-slate-300 text-lg">
                O sistema consumiria aproximadamente <span className="text-cyan-400 font-semibold">9 kW</span> para manter a sustentação e deslocamento horizontal em velocidade média de 10 m/s, valor <span className="text-cyan-400 font-semibold">compatível com baterias automotivas</span> de alta densidade energética.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl font-bold">Objetivos do Projeto</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Desenvolver um protótipo de plataforma magnética capaz de sustentar massa superior a 900 kg',
              'Estudar a interação do campo magnético terrestre com ímãs de alta densidade',
              'Modelar o consumo energético e a estabilidade da flutuação',
              'Avaliar a viabilidade de aplicação em transporte sustentável e silencioso'
            ].map((objective, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-700/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur border border-cyan-700/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Conclusão</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              O projeto propõe um <span className="text-cyan-400 font-semibold">modelo experimental realista</span>, fundamentado em leis clássicas do eletromagnetismo (Ampère, Faraday e Lenz), com parâmetros técnicos definidos e base matemática verificável. Trata-se de uma abordagem inovadora, explorando a sinergia entre a força magnética terrestre e sistemas artificiais de alta indução, capaz de <span className="text-cyan-400 font-semibold">redefinir paradigmas de transporte</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-slate-500">
          <p>Sistema de Levitação Magnética © 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
