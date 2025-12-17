import{r as S,j as a}from"./iframe-CzrbZwQa.js";import{I as t}from"./Image-DUFSXfnV.js";import{d as s}from"./dummyText-CX_I_Wpl.js";import{c as k}from"./clsx-B-dksMZM.js";import{P as A}from"./flowComponent-8nLM6u8z.js";import{B as p}from"./Button-BnubCMUU.js";import{A as e}from"./Avatar-cE_01eOS.js";import{W as C}from"./Text-u_8Z_6lo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./IconApp-BPXZ8R19.js";import"./remote-q4LXxmI0.js";import"./IconX-C4Avmif2.js";import"./IconCheck-DAWvHQav.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./Button-Cr67WOIO.js";import"./utils-Ds7wxNIq.js";import"./ProgressBar-CBKtRO3f.js";import"./Label-DMBiwPLT.js";import"./Hidden-CPBzEaGa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./AlertIcon-Bjdc7GvU.js";import"./IconDanger-BVqA44qH.js";import"./IconInfo-DM42HxkB.js";import"./IconCircleCheck-NP3aQsbw.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./Text-Bpo5VkCj.js";const P="flow--avatar-stack",T="flow--avatar-stack--avatar",i={avatarStack:P,avatar:T,"size-m":"flow--avatar-stack--size-m","size-xs":"flow--avatar-stack--size-xs","size-s":"flow--avatar-stack--size-s","size-l":"flow--avatar-stack--size-l"},o=r=>{const{className:x,children:u,totalCount:z=0,size:d="m",onCountPress:v}=r,g=S.Children.count(u),h=z-g,f=k(i.avatarStack,i[`size-${d}`],x),j={Avatar:{className:i.avatar,size:d},Button:{className:i.avatar}};return a.jsx(A,{props:j,children:a.jsxs("div",{className:f,children:[u,h>0&&a.jsx(C,{if:v,children:a.jsx(p,{onPress:v,children:a.jsxs(e,{size:d,children:["+",h]})})})]})})};o.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"AvatarStack",props:{totalCount:{required:!1,tsType:{name:"number"},description:`The total count of items, as avatars should only be displayed for the first
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
