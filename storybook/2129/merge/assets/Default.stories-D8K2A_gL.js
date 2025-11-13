import{j as r}from"./iframe-DBT7gULD.js";import{I as a}from"./Image-DK0DVEvL.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-5oER6YSZ.js";import{A as s}from"./Avatar-D4XiVYbq.js";import{B as p}from"./Button-CCcVMCFh.js";import"./index-nuYtCEEu.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./clsx-B-dksMZM.js";import"./index-pYm4_kYT.js";import"./Text-BcenBV84.js";import"./browser-DvkhEBxs.js";import"./utils-D0uB-Zwx.js";import"./EmulatedBoldText-Cn-N7_G4.js";import"./AlertIcon-B2G5YJ_h.js";import"./IconWarning-BUJnRJXc.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./context-DTlkSZ0Y.js";import"./LoadingSpinner-UyNbbNkS.js";import"./Button-C-UpDsRO.js";import"./ProgressBar-DcCMsBu5.js";import"./Hidden-BMktz6gh.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,W={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(a,{alt:"Gopher",src:t.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
