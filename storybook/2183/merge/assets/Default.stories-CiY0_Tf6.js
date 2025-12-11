import{j as r}from"./iframe-Bo-CC4om.js";import{I as a}from"./Image-DWyBIzwU.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-CK7V-CZy.js";import{A as s}from"./Avatar-DZgOazPv.js";import{B as p}from"./Button-DsbAYxy6.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./clsx-B-dksMZM.js";import"./Text-FWtYFqa_.js";import"./browser-CQUdwXOL.js";import"./utils-BE4vzmGc.js";import"./EmulatedBoldText-DaZX5sg6.js";import"./AlertIcon-mGxxCUjy.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Button-DEzwtm5X.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,K={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const L=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,L as __namedExportsOrder,K as default};
