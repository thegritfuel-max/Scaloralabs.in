import { Card, CardContent, CardHeader } from '@/src/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import { Logo } from '@/src/components/ui/Logo'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-12">
                    <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tight leading-[0.9]">
                        BUILT BY MARKETERS, <span className="gradient-text">TRUSTED BY LEADERS</span>
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
                                    "Scalora Labs completely transformed our Meta ad performance. We hit an average 4.2x ROAS within the first 60 days of scaling our D2C apparel brand."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-14 border-2 border-growth-green">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                            alt="Arnav Sharma"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-base font-bold text-white">Arnav Sharma</cite>
                                        <span className="text-muted-text block text-sm uppercase tracking-widest font-bold">Founder, Trim & Fit Co.</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="glass-card md:col-span-2 border-white/10 p-8">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-8">
                                <p className="text-xl font-heading font-medium text-white/80 italic leading-relaxed">
                                    "Their automation systems eliminated hours of manual CRM syncs for our regional retail outlets. Predictable growth, absolute data integrity."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-4 pt-6 border-t border-white/5">
                                    <Avatar className="size-12 hover:scale-110 transition-all">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                            alt="Priyanjali Das"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>PD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-bold text-white">Priyanjali Das</cite>
                                        <span className="text-muted-text block text-xs uppercase tracking-widest font-bold">Chief Marketing Officer</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="glass-card md:col-span-2 border-white/10 p-8">
                        <CardContent className="h-full p-0">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-heading font-medium text-white/80 italic leading-relaxed">
                                    "The best performance marketing workflow we've integrated yet. Transparent tracking and real-time ROI reports that actually make sense."
                                </p>

                                <div className="grid grid-cols-[auto_1fr] gap-4 pt-6 border-t border-white/5">
                                    <Avatar className="size-12 hover:scale-110 transition-all">
                                        <AvatarImage
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                                            alt="Vikram Malhotra"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>VM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-bold text-white">Vikram Malhotra</cite>
                                        <span className="text-muted-text block text-xs uppercase tracking-widest font-bold">Director of Growth</span>
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
