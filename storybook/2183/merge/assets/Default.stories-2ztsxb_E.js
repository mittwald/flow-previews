import{r as S,j as a}from"./iframe-pNOm8Wja.js";import{I as t}from"./Image-BXlLpvLc.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{c as k}from"./clsx-B-dksMZM.js";import{P as A}from"./PropsContextProvider-BWF9EjWJ.js";import{B as p}from"./Button-CgV_q1F1.js";import{A as r}from"./Avatar-DCdLE__u.js";import{W as C}from"./Text-_46BQ-Z5.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./IconApp-BiE0s1PO.js";import"./remote-DYOOxdg2.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./utils-BknOSkFt.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMdVhRJ1.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./AlertIcon-DhrYOJcg.js";import"./IconDanger-DCkcPuhV.js";import"./IconInfo-CPi1obw3.js";import"./IconCircleCheck-B-uJhcRx.js";import"./browser-CBsMsG9c.js";import"./EmulatedBoldText-C8Hc8u3o.js";const P="flow--avatar-stack",T="flow--avatar-stack--avatar",i={avatarStack:P,avatar:T,"size-m":"flow--avatar-stack--size-m","size-xs":"flow--avatar-stack--size-xs","size-s":"flow--avatar-stack--size-s","size-l":"flow--avatar-stack--size-l"},o=e=>{const{className:x,children:u,totalCount:z=0,size:d="m",onCountPress:v}=e,g=S.Children.count(u),h=z-g,f=k(i.avatarStack,i[`size-${d}`],x),j={Avatar:{className:i.avatar,size:d},Button:{className:i.avatar}};return a.jsx(A,{props:j,children:a.jsxs("div",{className:f,children:[u,h>0&&a.jsx(C,{if:v,children:a.jsx(p,{onPress:v,children:a.jsxs(r,{size:d,children:["+",h]})})})]})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"AvatarStack",props:{totalCount:{required:!1,tsType:{name:"number"},description:`The total count of items, as avatars should only be displayed for the first
view`},onCountPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The onPress action of the additional items count element"},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:'The size of the avatars inside the stack. @default "m"'}},composes:["PropsWithClassName","PropsWithChildren"]};const{action:n}=__STORYBOOK_MODULE_ACTIONS__,oa={title:"Content/AvatarStack",component:o,args:{totalCount:20},render:e=>a.jsxs(o,{...e,children:[a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})]})},c={},m={render:e=>a.jsxs(o,{...e,onCountPress:n("count clicked"),children:[a.jsx(p,{onPress:n("avatar clicked"),children:a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})," ",a.jsx(p,{onPress:n("avatar clicked"),children:a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})," ",a.jsx(p,{onPress:n("avatar clicked"),children:a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})]})},l={args:{totalCount:void 0},render:e=>a.jsxs(o,{...e,children:[a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(r,{size:e.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <AvatarStack {...props} onCountPress={action("count clicked")}>
      <Button onPress={action("avatar clicked")}>
        <Avatar size={props.size}>
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
      </Button>{" "}
      <Button onPress={action("avatar clicked")}>
        <Avatar size={props.size}>
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
      </Button>{" "}
      <Button onPress={action("avatar clicked")}>
        <Avatar size={props.size}>
          <Image alt="Gopher" src={dummyText.imageSrc} />
        </Avatar>
      </Button>
    </AvatarStack>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    totalCount: undefined
  },
  render: props => <AvatarStack {...props}>
      <Avatar size={props.size}>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </Avatar>
      <Avatar size={props.size}>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </Avatar>
      <Avatar size={props.size}>
        <Image alt="Gopher" src={dummyText.imageSrc} />
      </Avatar>
    </AvatarStack>
}`,...l.parameters?.docs?.source}}};const ia=["Default","ClickableAvatars","WithoutTotalCount"];export{m as ClickableAvatars,c as Default,l as WithoutTotalCount,ia as __namedExportsOrder,oa as default};
