import{j as r}from"./iframe-BE2KIrNP.js";import{I as t}from"./Image-DRB1qpyA.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-h6cw7arT.js";import{A as s}from"./Avatar-St5qIscv.js";import{B as p}from"./Button-DTG6_onu.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./clsx-B-dksMZM.js";import"./index-BeVui2PP.js";import"./Text-99qeYwSw.js";import"./browser-B5VZQlUE.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./Text-D-kvbByn.js";import"./utils-CetDBScY.js";import"./AlertIcon-BSS6Y7Aa.js";import"./IconWarning-pheKtU5F.js";import"./remote-BDPI1xTN.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./context-Cl9Jg8XT.js";import"./LoadingSpinner-CpXmc85g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DX-gXX1k.js";import"./ProgressBar-Cdh6Q7W9.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DlCzrbVx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wlnUrUkL.js";import"./useFocus-D19rPtJ7.js";import"./useFocusRing-CXSA7vN6.js";import"./useFocusable-PS7GdwKW.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const F=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,F as __namedExportsOrder,w as default};
