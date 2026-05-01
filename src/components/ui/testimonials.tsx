import { Card, CardContent, CardHeader } from '@/src/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { Logo } from '@/src/components/ui/Logo'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-12">
                    <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight leading-[0.9]">
                        BUILT BY MARKERS, <span className="gradient-text">TRUSTED BY LEADERS</span>
                    </h2>
                    <p className="text-muted-text text-lg">Scalora Labs is evolving how Indian businesses leverage digital systems to dominate their markets globally.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
                    <Card className="glass-card grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 pt-10 px-8 pb-10 lg:row-span-2 border-white/10">
                        <CardHeader className="p-0">
                            <Logo showText={false} className="w-12 h-12" />
                        </CardHeader>
                        <CardContent className="p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-8">
                                <p className="text-2xl font-heading font-bold text-white/90 leading-tight italic">
                                    "Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-14 border-2 border-growth-green">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                            alt="Shekinah Tshiokufila"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>ST</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-base font-bold text-white">Shekinah Tshiokufila</cite>
                                        <span className="text-muted-text block text-sm uppercase tracking-widest font-bold">Software Engineer</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="glass-card md:col-span-2 border-white/10 p-8">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-8">
                                <p className="text-xl font-heading font-medium text-white/80 italic leading-relaxed">
                                    "Scalora is really extraordinary and very practical, no need to break your head. A real gold mine for businesses seeking predictable ROI."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-4 pt-6 border-t border-white/5">
                                    <Avatar className="size-12 grayscale hover:grayscale-0 transition-all">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                            alt="Jonathan Yombo"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>JY</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-bold text-white">Jonathan Yombo</cite>
                                        <span className="text-muted-text block text-xs uppercase tracking-widest font-bold">Growth Partner</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="glass-card border-white/10 p-8">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-white/80">Great work on our scaling template. This is one of the best agency workflows I have seen so far!</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-10">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                            alt="Yucel Faruksahan"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-xs font-bold text-white">Yucel Faruksahan</cite>
                                        <span className="text-muted-text block text-[10px] uppercase tracking-widest font-bold">Director, Tailkits</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="glass-card border-white/10 p-8">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-white/80">Premium visuals combined with absolute data integrity. Scalora is the future of Indian agencies.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-10">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                            alt="Rodrigo Aguilar"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>RA</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-xs font-bold text-white">Rodrigo Aguilar</p>
                                        <span className="text-muted-text block text-[10px] uppercase tracking-widest font-bold">Creator, TailwindAwesome</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
