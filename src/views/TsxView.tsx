import { ref } from "vue";

const v = ref<string>("leolee");

const flag = false;
const arr = [1, 2, 3, 4, 5];
type Props = {
  title: string;
};

const renderDom = (props: Props, ctx: any) => {
  return (
    <div>
      <div>{props.title}</div>
      <input v-model={v.value} type="text" />
      <div>{v.value}</div>
      <div v-show={flag}>show</div>
      <div v-show={!flag}>not show</div>
      {/* v if */}
      {flag ? <div>flag==true</div> : <div>flag==false</div>}
      {/* v for */}
      {/* v bind 使用属性直接绑定 data-index={v}*/}
      {/* v on 直接写点击事件 onclick={clickTap}*/}
      <div>
        {arr.map((v) => {
          return (
            <div onclick={clickTap.bind(this, ctx, v)} data-index={v}>
              {v}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const clickTap = (ctx: any, v: number | string) => {
  console.log("wobeidianjile", v);
  ctx.emit("on-click", 123);
};

export default renderDom;
