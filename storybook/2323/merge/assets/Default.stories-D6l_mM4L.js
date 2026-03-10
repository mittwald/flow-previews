import{j as r}from"./iframe-EfPcFfHz.js";import{I as t}from"./Image-BEOfsa7S.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-BVqx5aIx.js";import{A as s}from"./Avatar-Dfn-Q8FW.js";import{B as p}from"./Button-wFzIQtGi.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CIh5pHt4.js";import"./index-BiW-O58f.js";import"./clsx-B-dksMZM.js";import"./index-BhGEUnhH.js";import"./Text-CRFCcT-P.js";import"./browser-hyQhTs1N.js";import"./EmulatedBoldText-DO_ezaQd.js";import"./Text-B4oHPq8R.js";import"./utils-Cnkpfm_P.js";import"./AlertIcon-CtDfui7q.js";import"./IconWarning-73LpV07E.js";import"./remote-D3-8ROh8.js";import"./useLocalizedStringFormatter-CSMkY09C.js";import"./context-kn7lEdrW.js";import"./LoadingSpinner-5WRu_N9f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlxZZJFh.js";import"./ProgressBar-vuTPs7Pi.js";import"./Label-BDpZ1WTb.js";import"./Hidden-B6ugZRtA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DunHH7R3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CzmE2CoS.js";import"./useFocus-7edk4FfO.js";import"./useFocusRing-8P8y2KFJ.js";import"./useFocusable-CT_qKlvn.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
