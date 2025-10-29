import{j as r}from"./iframe-M-00ByYr.js";import{I as t}from"./Image-DMpZfFd1.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-Izlnn3li.js";import{A as s}from"./Avatar-C-6JTwVm.js";import{B as p}from"./Button-Dye8aZJo.js";import"./index-nuYtCEEu.js";import"./flowComponent-BSbRS4dW.js";import"./index-XTNpKnK3.js";import"./clsx-B-dksMZM.js";import"./index-DpE53F72.js";import"./Text-Bt5YA1vc.js";import"./browser-DuQo-X1z.js";import"./EmulatedBoldText-DX0gJz_T.js";import"./Text-C64HrAr0.js";import"./utils-CzeOq9Jp.js";import"./AlertIcon-CtiPArRr.js";import"./IconWarning-BKX4jvdo.js";import"./useLocalizedStringFormatter-DHEdj6fH.js";import"./context-rdrdo5ux.js";import"./LoadingSpinner-C8vasHPM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bzi92yWx.js";import"./ProgressBar-DVuQf1Yw.js";import"./Label-2I2h4DuH.js";import"./Hidden-CcUUSr-p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BqXrfkQs.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ZYaxT06h.js";import"./useFocus-kTKNfC8f.js";import"./useFocusRing-BCZu56W_.js";import"./useFocusable-Ck0hOZfS.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,q={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
