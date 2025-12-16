import{r as S,j as a}from"./iframe-ChZoSAk9.js";import{I as t}from"./Image-Dj6-j_G_.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{c as k}from"./clsx-B-dksMZM.js";import{P as A}from"./flowComponent-CTDVwaga.js";import{B as p}from"./Button-igkSssls.js";import{A as e}from"./Avatar-CduWPjk6.js";import{W as C}from"./Text-DeId_uwd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Button-BAWw_35t.js";import"./utils-3orXHcy8.js";import"./ProgressBar-Bd4jHgjB.js";import"./Label-8-s2XGsR.js";import"./Hidden-BToicrtl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./AlertIcon-DeYsfQR_.js";import"./IconDanger-bNuP_yaN.js";import"./IconInfo-DHgWbHqo.js";import"./IconCircleCheck-DyvU8reI.js";import"./browser-B8p5n3S3.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";const P="flow--avatar-stack",T="flow--avatar-stack--avatar",i={avatarStack:P,avatar:T,"size-m":"flow--avatar-stack--size-m","size-xs":"flow--avatar-stack--size-xs","size-s":"flow--avatar-stack--size-s","size-l":"flow--avatar-stack--size-l"},o=r=>{const{className:x,children:u,totalCount:z=0,size:d="m",onCountPress:v}=r,g=S.Children.count(u),h=z-g,f=k(i.avatarStack,i[`size-${d}`],x),j={Avatar:{className:i.avatar,size:d},Button:{className:i.avatar}};return a.jsx(A,{props:j,children:a.jsxs("div",{className:f,children:[u,h>0&&a.jsx(C,{if:v,children:a.jsx(p,{onPress:v,children:a.jsxs(e,{size:d,children:["+",h]})})})]})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"AvatarStack",props:{totalCount:{required:!1,tsType:{name:"number"},description:`The total count of items, as avatars should only be displayed for the first
view`},onCountPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The onPress action of the additional items count element"},size:{required:!1,tsType:{name:"union",raw:'"xs" | "s" | "m" | "l"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'},{name:"literal",value:'"m"'},{name:"literal",value:'"l"'}]},description:'The size of the avatars inside the stack. @default "m"'}},composes:["PropsWithClassName","PropsWithChildren"]};const{action:n}=__STORYBOOK_MODULE_ACTIONS__,da={title:"Content/AvatarStack",component:o,args:{totalCount:20},render:r=>a.jsxs(o,{...r,children:[a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})]})},c={},m={render:r=>a.jsxs(o,{...r,onCountPress:n("count clicked"),children:[a.jsx(p,{onPress:n("avatar clicked"),children:a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})," ",a.jsx(p,{onPress:n("avatar clicked"),children:a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})," ",a.jsx(p,{onPress:n("avatar clicked"),children:a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})})]})},l={args:{totalCount:void 0},render:r=>a.jsxs(o,{...r,children:[a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})}),a.jsx(e,{size:r.size,children:a.jsx(t,{alt:"Gopher",src:s.imageSrc})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const ua=["Default","ClickableAvatars","WithoutTotalCount"];export{m as ClickableAvatars,c as Default,l as WithoutTotalCount,ua as __namedExportsOrder,da as default};
