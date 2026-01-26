import{j as r}from"./iframe-Bc-jwLWq.js";import{I as t}from"./Image-CqUE2Y_L.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-CgLGM8DG.js";import{A as s}from"./Avatar-V3eohZA0.js";import{B as p}from"./Button-DRfNiyCG.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./clsx-B-dksMZM.js";import"./index-Ct8kadYq.js";import"./Text-Bs06tnQB.js";import"./browser-Cfl6H5sa.js";import"./EmulatedBoldText-CZY7LDuf.js";import"./Text-DgSTzWgU.js";import"./utils-BIv87FRG.js";import"./AlertIcon-DCb6GQr1.js";import"./IconWarning-BPpigV-o.js";import"./remote-CficONz5.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./context-BDmep644.js";import"./LoadingSpinner-D9DMVpgJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-HPdphaJl.js";import"./ProgressBar-CdyMER2G.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BfZDlGh7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NBjG5NMF.js";import"./useFocus-C6ldElRQ.js";import"./useFocusRing-B0jLa-Vk.js";import"./useFocusable-DIXmUg59.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
