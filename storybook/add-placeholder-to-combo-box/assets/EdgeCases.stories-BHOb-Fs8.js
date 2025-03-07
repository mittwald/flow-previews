import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{H as i}from"./Heading-3cOpnTm8.js";import B from"./Default.stories-5cV_riJ9.js";import"./IconApp-BlCDOz7i.js";import{g as H}from"./IconWarning-Cksp_dQT.js";import"./index-BZISi7jw.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-B8y4Jm20.js";import{C as j,a as h}from"./ContextualHelpTrigger-CST1UPdv.js";import{B as f}from"./Button-DhoxjOB0.js";import{T as C}from"./Text-D9M1FVhy.js";import{B as A}from"./Badge-ByWxhCz7.js";import"./flowComponent-BYduNA4_.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./clsx-B-dksMZM.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-CzVyYWZn.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-DLYv3pC-.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Popover-DkodbBpX.js";import"./MenuTrigger-CHUqx2dT.js";import"./context-T6wCf2v9.js";import"./useStatic-79kqjvSG.js";import"./Dialog-BV8uMRwe.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./Text-PTaPc_Ci.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./DialogTriggerView-BBOWZO_U.js";import"./LoadingSpinner-BNlvu0xK.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";const Wr={...B,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(H,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(H,{}),p.long,r.jsx(T,{children:"Alert"}),r.jsx(A,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(j,{children:[r.jsx(f,{}),r.jsx(h,{...e,children:r.jsx(C,{children:p.medium})})]})]})};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.medium}
    </Heading>
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.long}
      <AlertBadge>Alert</AlertBadge>
      <Badge>Badge</Badge>
    </Heading>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,x,u;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      {dummyText.long}
      <ContextualHelpTrigger>
        <Button />
        <ContextualHelp {...props}>
          <Text>{dummyText.medium}</Text>
        </ContextualHelp>
      </ContextualHelpTrigger>
    </Heading>
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const br=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,br as __namedExportsOrder,Wr as default};
