import{j as r}from"./iframe-BvCo0Jms.js";import{I as t}from"./Image-CoUOWaBx.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-CMCmb_PZ.js";import{A as s}from"./Avatar-C4lRC1nq.js";import{B as p}from"./Button-BdRFLyHU.js";import"./index-nuYtCEEu.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./clsx-B-dksMZM.js";import"./index-DV2r3peR.js";import"./Text-CM7-JVVa.js";import"./browser-DOebU0pA.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Text-BvqGhHlZ.js";import"./utils-Cw2xzcbV.js";import"./AlertIcon-DogTvW9h.js";import"./IconWarning-DF-Lhcnu.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./context-EIbK-86q.js";import"./LoadingSpinner-6N6Rbt89.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pJkeE9x7.js";import"./ProgressBar-Upnvx2FX.js";import"./Label-DMgJ6fuj.js";import"./Hidden-Bxmlm1r5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DLhdFYyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZrRujBy.js";import"./useFocus-C5EW73ar.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocusable-BxQ2X-GC.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,q={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
