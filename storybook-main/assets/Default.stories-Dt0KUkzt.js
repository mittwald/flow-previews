import{j as r}from"./iframe-BFuSR0CY.js";import{I as t}from"./Image-CdRmy-FM.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-DrVkMUeR.js";import{A as s}from"./Avatar-B3Eda89A.js";import{B as p}from"./Button-B8_RMB4T.js";import"./index-nuYtCEEu.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./clsx-B-dksMZM.js";import"./index-D8dET2XL.js";import"./Text-BXhKPUqX.js";import"./browser-h3r-jBf1.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";import"./utils-CEuw8CkJ.js";import"./AlertIcon-DfJo_e7v.js";import"./IconWarning-BDLPxpKm.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./context-6pf_efel.js";import"./LoadingSpinner-CF0vj0R_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV2egPhG.js";import"./ProgressBar-D1Sp6uIf.js";import"./Label-Dl8lfN0K.js";import"./Hidden-BoaT9a_j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYMimxLy.js";import"./useFocus-Dfi_0tQM.js";import"./useFocusRing-CdpePOyD.js";import"./useFocusable-Or0L-1Mb.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,q={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const w=["Default","ClickableAvatars","WithoutTotalCount"];export{c as ClickableAvatars,i as Default,n as WithoutTotalCount,w as __namedExportsOrder,q as default};
