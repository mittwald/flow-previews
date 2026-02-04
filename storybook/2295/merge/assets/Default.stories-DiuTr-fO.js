import{j as r}from"./iframe-DJlgDtsR.js";import{I as t}from"./Image-CNyN-n8g.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-B6jfVgsd.js";import{A as s}from"./Avatar-Cml40zwQ.js";import{B as p}from"./Button-B5mEMvcP.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./clsx-B-dksMZM.js";import"./index-Ds6_MS6L.js";import"./Text-B6SLv6do.js";import"./browser-C6YBs1UC.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./utils-xFKhKznh.js";import"./AlertIcon-nCFQHvgi.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./context-XFPr5nuV.js";import"./LoadingSpinner-DvQzlWjD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjTNcQDc.js";import"./ProgressBar-Cf6O9vZh.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CWKDBuw6.js";import"./useFocus-oMd_AJz-.js";import"./useFocusRing-BhR5IplG.js";import"./useFocusable-CsEyjS4C.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
