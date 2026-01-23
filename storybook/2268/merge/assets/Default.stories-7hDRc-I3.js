import{j as r}from"./iframe-iY_Mn_oy.js";import{I as t}from"./Image-CEmJ2Aqa.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-BnqCbRE_.js";import{A as s}from"./Avatar-VEmfUtB1.js";import{B as p}from"./Button-BXdn408E.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./clsx-B-dksMZM.js";import"./index-IKthRYIx.js";import"./Text-C2ZCo6gl.js";import"./browser-DK9hE6UN.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./Text-CktBEW1F.js";import"./utils-C-pMCGM-.js";import"./AlertIcon-Dw605mNU.js";import"./IconWarning-B803z1sh.js";import"./remote-CIrN4__o.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./context-DIbVk5_z.js";import"./LoadingSpinner-C14k5CPB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BELa7hv8.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8EVB-03H.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B5dXj1sU.js";import"./useFocus-Nxno6ZgW.js";import"./useFocusRing-BNNZSKMh.js";import"./useFocusable-Bi19l3La.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
