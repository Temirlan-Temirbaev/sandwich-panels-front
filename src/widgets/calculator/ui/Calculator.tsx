import { UIButton } from "@/shared/ui/UI-Button";
import { useState } from "react"
import { getPrice } from "../model";
import { IProduct, PRODUCTS } from "@/entities/product";

export const Calculator = () => {
  const [price, setPrice] = useState(0);
  const [square, setSquare] = useState(0);
  const [productId, setProductId] = useState<null | number>(null);

  const handleClick = () => {
    if (!productId) return;
    const product = PRODUCTS.find(product => product.id === productId)
    if (!product) return;
    setPrice(getPrice(product, square))
  }

  return <div className="w-full h-[400px] bg-black">
    <div className="w-full max-w-[1200px] h-full mx-auto py-5 flex flex-col items-center">
      <h1 className="text-white100 font-bold text-[50px] mb-20">Получить рассчет</h1>
      <div className="flex gap-x-[30px] items-center mb-10">
        <div className="-mt-7">
          <p className="text-lg opacity-80 text-white100 font-light">Площадь м^2</p>
          <input
            className="pl-2 w-[270px] h-[50px] bg-white100 rounded-lg"
            placeholder={String(square)}
            type="number" 
            value={square} 
            onChange={e => setSquare(Number(e.target.value))}/>
        </div>
        <div className="-mt-7">
          <p className="text-lg opacity-80 text-white100 font-light">Вид панели</p>
          <select 
          className="w-[300px] h-[50px] rounded-lg"
          onChange={e => setProductId(Number(e.target.value))}
          value={productId ? productId : PRODUCTS[0].id}>
            {PRODUCTS.map(product => {
              return <option 
              value={product.id}
              key={`product-option-${product.id}`}>
                {product.name} (толщина {product.thickness}мм)
              </option>
            })}
          </select>
        </div>
        <UIButton.Secondary 
          className="w-[250px] rounded-lg"
          onClick={handleClick}>
          <p className="text-white100 font-normal text-lg">
            Рассчитать
          </p>
        </UIButton.Secondary>
      </div>
      <div className="w-[300px] min-h-[50px] rounded-lg bg-primary flex items-center justify-center mb-2">
        <p className="font-normal text-white100 text-xl">
          {price}₸
        </p>
      </div>
      <p className="text-white100 opacity-70 font-normal text-xs">
        Все цены приблизительные, все индивидуально
      </p>
    </div>
  </div>
}