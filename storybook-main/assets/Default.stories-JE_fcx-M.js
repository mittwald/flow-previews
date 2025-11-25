import{j as r}from"./iframe-jfiAx13E.js";import{I as a}from"./Image-47p4BbHq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-gXbUfOK9.js";import{A as s}from"./Avatar-BPXSWiS2.js";import{B as p}from"./Button-0JA4DlHg.js";import"./index-nuYtCEEu.js";import"./flowComponent-CGAmEMtP.js";import"./index-DveU93s7.js";import"./clsx-B-dksMZM.js";import"./index-nYZuwJQK.js";import"./Text-DMCt93av.js";import"./browser-Cf72YD6u.js";import"./utils-CFoUdj0t.js";import"./EmulatedBoldText-FBIs6RkZ.js";import"./AlertIcon-jVfRkC0n.js";import"./IconWarning-CLlhNyNw.js";import"./useLocalizedStringFormatter-11Mex28w.js";import"./context-Dt1an7Oo.js";import"./LoadingSpinner-CJ4P62eK.js";import"./Button-DYW2V96T.js";import"./ProgressBar-DTac6yq1.js";import"./Hidden-BolQ_iVE.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DSWloUds.js";import"./useFocusable-C36BBZPx.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,W={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const K=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,K as __namedExportsOrder,W as default};
