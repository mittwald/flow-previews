import{j as r}from"./iframe-CIhdjqSz.js";import{I as t}from"./Image-BDWGEQ5x.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-CDIkEwb-.js";import{A as s}from"./Avatar-dxv8AFxx.js";import{B as p}from"./Button--NFWCTgK.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./clsx-B-dksMZM.js";import"./index-D2Zvq_HV.js";import"./Text-DgrqnOua.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./Text-BWZGL9q7.js";import"./utils-3Ll5mTsj.js";import"./AlertIcon-DlNCugjU.js";import"./IconWarning-NrGPSND5.js";import"./remote-C6ukCFNy.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./context-C9Id__Ro.js";import"./LoadingSpinner-CnQRgWlh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DTpgNeLS.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAXbDaCF.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
