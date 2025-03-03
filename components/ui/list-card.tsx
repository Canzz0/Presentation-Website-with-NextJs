import { Skeleton } from "./skeleton";

interface ListCardProps {
   image?: string;
   title?: string;
   children: React.ReactNode;
   className?: string;
}

function ListCard({ children, image, title }: ListCardProps) {
   return (
      <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 md:p-8 shadow-xl text-lg  flex mt-3 flex-col sm:flex-row gap-4 p-4  rounded-md shadow-md hover:shadow-lg transition-shadow">

         <div className="flex-shrink-0">
            {image ? (
               <img
                  src={image}
                  alt={title || "Card image"}
                  className="w-full sm:w-24 h-auto sm:h-24 object-cover rounded-md"
               />
            ) : (
               <Skeleton className="w-full sm:w-24 h-auto sm:h-24 object-cover rounded-md" />
            )}
         </div>


         <div className="flex flex-col gap-2">
            {title && <h3 className="font-medium text-lg">{title}</h3>}
            <div className="text-gray-600">{children}</div>
         </div>
      </div>
   )
}

export default ListCard;
