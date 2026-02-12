import{j as r}from"./iframe-C_XCETJ4.js";import{I as t}from"./Image-BZV1j-SR.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-3M9C_7aq.js";import{A as s}from"./Avatar-BE3_HRKs.js";import{B as p}from"./Button-BRKehz01.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./clsx-B-dksMZM.js";import"./index-BzhLFU3i.js";import"./Text-l7AxHvJY.js";import"./browser-BQl26QHV.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Text-CpxVEUdG.js";import"./utils-Bso2FrGw.js";import"./AlertIcon-Bo1DHsRX.js";import"./IconWarning-D8ZYq2sU.js";import"./remote-BBIBCAlv.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./context-CpOW4Kl4.js";import"./LoadingSpinner-dY4_o8YP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIlWiE4j.js";import"./ProgressBar-D_N9hIFl.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-xR971w.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useFocusable-CMVXl80p.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
