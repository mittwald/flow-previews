import{j as r}from"./iframe-DsvUdpXw.js";import{I as t}from"./Image-DQlocxX8.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-0kziwEfA.js";import{A as s}from"./Avatar-v2xSlmd1.js";import{B as p}from"./Button-Bh17vETd.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./clsx-B-dksMZM.js";import"./index-BOZmgZtE.js";import"./Text-DX5v3ksG.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./utils-elFy1-Tx.js";import"./AlertIcon-C2Vz7YO6.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
