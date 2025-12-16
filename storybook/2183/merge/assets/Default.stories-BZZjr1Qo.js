import{r as S,j as a}from"./iframe-VGYf9uSR.js";import{I as t}from"./Image-83io7lO3.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{c as k}from"./clsx-B-dksMZM.js";import{P as A}from"./PropsContextProvider-BJkjz94f.js";import{B as p}from"./Button-C33JxfbF.js";import{A as r}from"./Avatar-CER8Xbuw.js";import{W as C}from"./Text-CGbJaU4z.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./utils-BB4afhje.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CKMs_ua8.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./AlertIcon-BmC6g05h.js";import"./IconDanger-B5Kx1O1H.js";import"./IconInfo-poMXff9G.js";import"./IconCircleCheck--RtJ5U3q.js";import"./browser-BY7YAvyX.js";import"./EmulatedBoldText-BBr3yRY7.js";const P="flow--avatar-stack",T="flow--avatar-stack--avatar",i={avatarStack:P,avatar:T,"size-m":"flow--avatar-stack--size-m","size-xs":"flow--avatar-stack--size-xs","size-s":"flow--avatar-stack--size-s","size-l":"flow--avatar-stack--size-l"},o=e=>{const{className:x,children:u,totalCount:z=0,size:d="m",onCountPress:v}=e,g=S.Children.count(u),h=z-g,f=k(i.avatarStack,i[`size-${d}`],x),j={Avatar:{className:i.avatar,size:d},Button:{className:i.avatar}};return a.jsx(A,{props:j,children:a.jsxs("div",{className:f,children:[u,h>0&&a.jsx(C,{if:v,children:a.jsx(p,{onPress:v,children:a.jsxs(r,{size:d,children:["+",h]})})})]})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"AvatarStack",props:{totalCount:{required:!1,tsType:{name:"number"},description:`The total count of items, as avatars should only be displayed for the first
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
