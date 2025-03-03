import { BlurFade } from "@/components/magicui/blur-fade";
import Title from "@/components/ui/Title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
   return (
      <div className="container mt-12 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-16 md:py-24">
         <Title>İletişim</Title>
         <BlurFade>
            <div className="grid shadow-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 mt-8 grid-cols-1 md:grid-cols-2 gap-8">

               {/* İletişim Bilgileri */}
               <Card>
                  <CardHeader>
                     <CardTitle className="text-2xl font-semibold">Bize Ulaşın</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                     <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-primary shrink-0" />
                        <div>
                           <h3 className="font-medium">Adres</h3>
                           <p className="text-muted-foreground">Örnek Mahallesi, Örnek Caddesi No:123</p>
                           <p className="text-muted-foreground">İstanbul, Türkiye</p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                        <div>
                           <h3 className="font-medium">Telefon</h3>
                           <p className="text-muted-foreground">+90 212 123 45 67</p>
                        </div>
                     </div>

                     <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                        <div>
                           <h3 className="font-medium">E-posta</h3>
                           <p className="text-muted-foreground">info@ornek.com</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Google Maps */}
               <Card className="overflow-hidden">
                  <CardContent className="p-0 h-[500px]">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.6596245466!2d28.8720964971335!3d41.00546337913858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1623252073595!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Google Maps"
                        className="rounded-b-lg"
                     ></iframe>
                  </CardContent>
               </Card>
            </div>
         </BlurFade>

      </div>
   )
}