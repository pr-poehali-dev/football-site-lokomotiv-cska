import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const lineup = {
    gk: { number: 1, name: "Митрюшкин" },
    defenders: [
      { number: 24, name: "Ненахов" },
      { number: 45, name: "Сильянов" },
      { number: 23, name: "Монтес" },
      { number: 5, name: "Ньямси" }
    ],
    cdm: [
      { number: 6, name: "Баринов", captain: true },
      { number: 93, name: "Карпукас" }
    ],
    cam: [
      { number: 25, name: "Пруцев" },
      { number: 83, name: "Батраков" },
      { number: 19, name: "Руденко" }
    ],
    striker: { number: 10, name: "Воробьёв" }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-3 py-4 md:px-4 md:py-8 max-w-7xl">
        <header className="mb-6 md:mb-12 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 md:gap-8 mb-4 md:mb-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-red-600 to-green-600 flex items-center justify-center shadow-lg">
                <div className="text-white font-black text-lg md:text-3xl">L</div>
              </div>
              <h1 className="text-2xl md:text-5xl font-bold text-primary">Локомотив</h1>
            </div>
            <div className="text-3xl md:text-6xl font-black text-muted-foreground">VS</div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-center shadow-lg">
                <div className="text-white font-black text-lg md:text-3xl">C</div>
              </div>
              <h1 className="text-2xl md:text-5xl font-bold text-secondary">ЦСКА</h1>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-3 md:mb-4">
            <Badge variant="destructive" className="text-xs md:text-lg px-2 py-1 md:px-4 md:py-2">
              <Icon name="Calendar" size={14} className="mr-1 md:mr-2" />
              <span className="hidden sm:inline">День матча</span>
              <span className="sm:hidden">Сегодня</span>
            </Badge>
            <Badge variant="outline" className="text-xs md:text-lg px-2 py-1 md:px-4 md:py-2 border-accent text-accent">
              <Icon name="Clock" size={14} className="mr-1 md:mr-2" />
              19:45
            </Badge>
            <Badge variant="secondary" className="text-xs md:text-lg px-2 py-1 md:px-4 md:py-2">
              <Icon name="MapPin" size={14} className="mr-1 md:mr-2" />
              <span className="hidden sm:inline">РЖД Арена</span>
              <span className="sm:hidden">РЖД</span>
            </Badge>
          </div>

          <p className="text-muted-foreground text-xs md:text-lg">
            РПЛ • 2025/26
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
          <Card className="p-4 md:p-8 bg-card hover-scale transition-all duration-300">
            <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Icon name="Users" size={20} className="text-primary md:w-7 md:h-7" />
              О матче
            </h2>
            <div className="space-y-2 md:space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-2 md:pb-3">
                <span className="text-muted-foreground text-sm md:text-base">Турнир</span>
                <span className="font-semibold text-sm md:text-base">РПЛ</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2 md:pb-3">
                <span className="text-muted-foreground text-sm md:text-base">Стадион</span>
                <span className="font-semibold text-sm md:text-base">РЖД Арена</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2 md:pb-3">
                <span className="text-muted-foreground text-sm md:text-base">Время</span>
                <span className="font-semibold text-sm md:text-base">19:45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm md:text-base">Дата</span>
                <span className="font-semibold text-sm md:text-base">18 октября 2025</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-8 bg-card hover-scale transition-all duration-300">
            <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Icon name="TrendingUp" size={20} className="text-secondary md:w-7 md:h-7" />
              Статистика
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Победы Локомотива</span>
                  <span className="text-sm font-semibold">38%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Ничьи</span>
                  <span className="text-sm font-semibold">24%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Победы ЦСКА</span>
                  <span className="text-sm font-semibold">38%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-4 md:p-8 bg-gradient-to-b from-accent/10 to-accent/5 border-accent/30">
          <div className="mb-3 md:mb-4">
            <Badge variant="secondary" className="text-xs md:text-sm px-2 py-1 md:px-3 md:py-1.5">
              <Icon name="Info" size={14} className="mr-1 md:mr-2" />
              Предположительный состав
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-0 mb-4 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold flex items-center gap-2">
              <Icon name="Clipboard" size={24} className="text-primary md:w-8 md:h-8" />
              Состав Локомотива
            </h2>
            <Badge variant="outline" className="text-xs md:text-lg px-2 py-1 md:px-4 md:py-2 border-primary text-primary">
              4-2-3-1
            </Badge>
          </div>

          <div className="relative bg-accent/20 rounded-xl p-3 md:p-8 min-h-[480px] md:min-h-[600px] border-2 border-accent/40"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}>
            
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <PlayerCard player={lineup.striker} />
            </div>

            <div className="absolute top-[100px] md:top-[140px] left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-8">
              {lineup.cam.map((player, idx) => (
                <PlayerCard key={idx} player={player} />
              ))}
            </div>

            <div className="absolute top-[180px] md:top-[280px] left-1/2 -translate-x-1/2 flex gap-3 md:gap-16">
              {lineup.cdm.map((player, idx) => (
                <PlayerCard key={idx} player={player} />
              ))}
            </div>

            <div className="absolute bottom-[100px] md:bottom-[140px] left-1/2 -translate-x-1/2 flex gap-0.5 md:gap-6">
              {lineup.defenders.map((player, idx) => (
                <PlayerCard key={idx} player={player} />
              ))}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <PlayerCard player={lineup.gk} />
            </div>

            <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-background/80 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg border border-border">
              <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground hidden sm:inline">Нападение</span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="text-center p-2 md:p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-xs md:text-sm text-muted-foreground">Защитники</div>
            </div>
            <div className="text-center p-2 md:p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-xs md:text-sm text-muted-foreground">Опорники</div>
            </div>
            <div className="text-center p-2 md:p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">3</div>
              <div className="text-xs md:text-sm text-muted-foreground">Атака</div>
            </div>
            <div className="text-center p-2 md:p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">1</div>
              <div className="text-xs md:text-sm text-muted-foreground">Форвард</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const PlayerCard = ({ player }: { player: { number: number; name: string; captain?: boolean } }) => {
  return (
    <div className="group relative hover-scale cursor-pointer">
      <div className="bg-primary text-primary-foreground rounded-md md:rounded-lg px-1.5 py-1 md:px-4 md:py-3 shadow-lg border-2 border-primary-foreground/20 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
        <div className="flex items-center gap-1 md:gap-3">
          <div className="text-xs md:text-2xl font-black leading-none">{player.number}</div>
          <div className="text-[9px] md:text-sm font-semibold whitespace-nowrap leading-tight">{player.name}</div>
          {player.captain && (
            <Icon name="Star" size={12} className="text-yellow-400 fill-yellow-400 md:w-4 md:h-4" />
          )}
        </div>
      </div>
      {player.captain && (
        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-yellow-400 text-background rounded-full w-4 h-4 md:w-6 md:h-6 flex items-center justify-center text-[10px] md:text-xs font-bold">
          C
        </div>
      )}
    </div>
  );
};

export default Index;