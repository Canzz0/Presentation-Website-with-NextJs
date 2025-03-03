import { BlurFade } from "@/components/magicui/blur-fade";
import ListCard from "@/components/ui/list-card";
import Title from "@/components/ui/Title";

function Products() {

   const products = [
      {
         title: "Kart Başlığı",
         description: "Bu kartın açıklaması burada yer alıyor. İstediğiniz kadar metin ekleyebilirsiniz.",
      },
      {
         title: "Kart Başlığı",
         description: "Bu kartın açıklaması burada yer alıyor. İstediğiniz kadar metin ekleyebilirsiniz.",
      },
      {
         title: "Kart Başlığı",
         description: "Bu kartın açıklaması burada yer alıyor. İstediğiniz kadar metin ekleyebilirsiniz.",
      },
      {
         title: "Kart Başlığı",
         description: "Bu kartın açıklaması burada yer alıyor. İstediğiniz kadar metin ekleyebilirsiniz.",
      },
   ];
   return (
      <>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl py-16 md:py-24">
            <Title>Ürünlerimiz</Title>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

               {products.map((product, index) => (
                  <BlurFade key={index} delay={0.25 + index * 0.1} inView>
                     <ListCard
                        title={product.title}
                     >
                        {product.description}
                     </ListCard>
                  </BlurFade>
               ))}

            </div>
         </div>
      </>
   )
}

export default Products;

