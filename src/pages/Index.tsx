import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const lineup = {
    gk: { number: 1, name: "Вратарь" },
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
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-12 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="text-right">
              <h1 className="text-5xl font-bold text-primary mb-2">Локомотив</h1>
            </div>
            <div className="text-6xl font-black text-muted-foreground">VS</div>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-secondary mb-2">ЦСКА</h1>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
            <Badge variant="destructive" className="text-lg px-4 py-2">
              <Icon name="Calendar" size={18} className="mr-2" />
              День матча
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2 border-accent text-accent">
              <Icon name="Clock" size={18} className="mr-2" />
              19:45
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Icon name="MapPin" size={18} className="mr-2" />
              РЖД Арена
            </Badge>
          </div>

          <p className="text-muted-foreground text-lg">
            Российская Премьер-Лига • Сезон 2024/25
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card hover-scale transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="Users" size={28} className="text-primary" />
              О матче
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-muted-foreground">Турнир</span>
                <span className="font-semibold">РПЛ</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-muted-foreground">Стадион</span>
                <span className="font-semibold">РЖД Арена</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-3">
                <span className="text-muted-foreground">Время</span>
                <span className="font-semibold">19:45</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Дата</span>
                <span className="font-semibold">18 октября 2024</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card hover-scale transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon name="TrendingUp" size={28} className="text-secondary" />
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

        <Card className="p-8 bg-gradient-to-b from-accent/10 to-accent/5 border-accent/30">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Icon name="Clipboard" size={32} className="text-primary" />
              Состав Локомотива
            </h2>
            <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
              Схема 4-2-3-1
            </Badge>
          </div>

          <div className="relative bg-accent/20 rounded-xl p-8 min-h-[600px] border-2 border-accent/40"
            style={{
              backgroundImage: 'linear-gradient(0deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}>
            
            <div className="absolute top-8 left-1/2 -translate-x-1/2">
              <PlayerCard player={lineup.striker} />
            </div>

            <div className="absolute top-[140px] left-1/2 -translate-x-1/2 flex gap-8">
              {lineup.cam.map((player, idx) => (
                <PlayerCard key={idx} player={player} />
              ))}
            </div>

            <div className="absolute top-[280px] left-1/2 -translate-x-1/2 flex gap-16">
              {lineup.cdm.map((player, idx) => (
                <PlayerCard key={idx} player={player} />
              ))}
            </div>

            <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 flex gap-6">
              {lineup.defenders.map((player, idx) => (
                <PlayerCard key={idx} player={player} />
              ))}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <PlayerCard player={lineup.gk} />
            </div>

            <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Нападение</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Защитники</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-1">2</div>
              <div className="text-sm text-muted-foreground">Опорники</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Атака</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
              <div className="text-3xl font-bold text-primary mb-1">1</div>
              <div className="text-sm text-muted-foreground">Форвард</div>
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
      <div className="bg-primary text-primary-foreground rounded-lg px-4 py-3 shadow-lg border-2 border-primary-foreground/20 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-black">{player.number}</div>
          <div className="text-sm font-semibold">{player.name}</div>
          {player.captain && (
            <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
          )}
        </div>
      </div>
      {player.captain && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-background rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
          C
        </div>
      )}
    </div>
  );
};

export default Index;
