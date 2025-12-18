import{j as r}from"./iframe-CywxDTj6.js";import{I as t}from"./Image-CcukxnlB.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-BIPBPX7s.js";import{A as s}from"./Avatar-BSXYKNkw.js";import{B as p}from"./Button-Dt6rqZC2.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DIqRYGZg.js";import"./index-BVyD66xE.js";import"./clsx-B-dksMZM.js";import"./index-CFicy-UB.js";import"./Text-vlJOJK2L.js";import"./browser-CaezisB_.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./Text-Dc57gZlo.js";import"./utils-JmAwA3ix.js";import"./AlertIcon-B_eZBptx.js";import"./IconWarning-BQFONsdl.js";import"./remote-DxJecAWu.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./context-Wz-N3Tdz.js";import"./LoadingSpinner-Byj--1Pk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DzvzizsP.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CStV9ujD.js";import"./useFocus-DDJfJTZx.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocusable-D7CLIfGa.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
