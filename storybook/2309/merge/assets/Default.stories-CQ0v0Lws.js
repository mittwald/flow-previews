import{j as r}from"./iframe--WfF81Kk.js";import{I as t}from"./Image-7jDKvzoq.js";import{d as a}from"./dummyText-CX_I_Wpl.js";import{A as m}from"./AvatarStack-DJFddg7G.js";import{A as s}from"./Avatar-BehruE7U.js";import{B as p}from"./Button-Csb2zbZD.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./clsx-B-dksMZM.js";import"./index-C06vQZsJ.js";import"./Text-BQUBTPZI.js";import"./browser-DaXQhhrD.js";import"./EmulatedBoldText-Bc2SrKM1.js";import"./Text-2H1diUJp.js";import"./utils-DjCd38Rb.js";import"./AlertIcon-Bc0kQsAW.js";import"./IconWarning-BCj0akvL.js";import"./remote-BYVMC2eP.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./context-BGH-DtkU.js";import"./LoadingSpinner-BoJLilDa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cdObnXIw.js";import"./ProgressBar-CcHuDHhg.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C-b3rJJe.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuA8A2Wl.js";import"./useFocus-BstfIGzX.js";import"./useFocusRing-xiCVrDfg.js";import"./useFocusable-CYWdX1lX.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,w={title:"Content/AvatarStack",component:m,args:{totalCount:20},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})},i={},c={render:e=>r.jsxs(m,{...e,onCountPress:o("count clicked"),children:[r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})," ",r.jsx(p,{onPress:o("avatar clicked"),children:r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})})]})},n={args:{totalCount:void 0},render:e=>r.jsxs(m,{...e,children:[r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})}),r.jsx(s,{size:e.size,children:r.jsx(t,{alt:"Gopher",src:a.imageSrc})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
