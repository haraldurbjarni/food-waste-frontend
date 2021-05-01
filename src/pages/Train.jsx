import { NextPage } from "../components/nextPage/NextPage";
import { Prediction } from "../components/prediction/Prediction";
import AnimatedPage from "../components/animatedPage";

export function Train() {
  return (
    <AnimatedPage>
      <h3>Model training and forecasting</h3>
      <p>
        Now that the files have been uploaded and the data has been stored we
        can begin training the model 🎉 🎉. You will need to declare a profit
        margin (default 0.1), for now we will assume that all of the products
        have the same profit margin. If the profit margin is 0.1, the profit for
        a product that costs 100 kr. is 10 kr.
      </p>
      <p>
        The variables mentioned earlier will now be explained. For each product
        we have three variables, and they are: Sales profit, Capital wasted and
        Capital missed out on. For each product prediction we then have two
        scenarios:
      </p>
      <hr></hr>
      <p style={{fontFamily: "consolas"}}>if Predictied value &gt; Actual value, then:</p>
      <blockquote style={{fontFamily: "consolas"}}>Sales Profit = Actual*(Price*Profit Margin) </blockquote>
      <blockquote style={{fontFamily: "consolas"}}>
        {" "}
        Capital wasted = (Predicted-Actual)*(Price*(1-Profit Margin))
      </blockquote>
      <blockquote style={{fontFamily: "consolas"}}> Capital missed out on = 0 </blockquote>
      <p style={{fontFamily: "consolas"}}> if  Predictied value &lt; Actual value, then:</p>
      <blockquote style={{fontFamily: "consolas"}}>Sales Profit = Predicted*(Price*Profit Margin)</blockquote>
      <blockquote style={{fontFamily: "consolas"}}>Capital wasted = 0</blockquote>
      <blockquote style={{fontFamily: "consolas"}}>
        Capital missed out on = (Actual-Predicted)*(Price*Profit Margin)
      </blockquote>
      <p>
        and if the values are the same we miss out on nothing, waste nothing and
        profit exactly what we bought for stock and what we sold. 
      </p>
      <hr></hr>
      <p>
        So in this scenario we assume that we made this prediction a week
        earlier and bought exactly the amount a of each product the model
        predicted. If the actual value is higher we will just assume that the
        materials for that product were finished and the customers that were
        going to buy the product left. If the predicted value is higher we
        asssume that we have to throw out all of the remaining products at the
        end of the week. We can thus measure the "effectiveness" of the model in
        terms of profitability and waste.
      </p>
      <Prediction />
    </AnimatedPage>
  );
}
