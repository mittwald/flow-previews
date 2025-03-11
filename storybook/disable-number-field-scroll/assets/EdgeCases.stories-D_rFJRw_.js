import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{H as i}from"./Heading-DvV74Kd2.js";import B from"./Default.stories-ipFfOR7h.js";import"./IconApp-CsW6VVPl.js";import{o as H}from"./IconWarning-DAj50GX8.js";import"./index-BZISi7jw.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./AlertBadge-C-dfz6bo.js";import{C as j,a as h}from"./ContextualHelpTrigger-q6vNBsf3.js";import{B as f}from"./Button-Cx852dC8.js";import{T as C}from"./Text-CEm0ouz8.js";import{B as A}from"./Badge-DRvGPTje.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DH4ScC2R.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./Heading-BCoG4c8D.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-CzVyYWZn.js";import"./storyBackgrounds-GFSAi-dI.js";import"./AlertIcon-B9qBaVyd.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./Popover-Bfm97Yqk.js";import"./MenuTrigger-dSDRANfB.js";import"./context-BHXZuMVa.js";import"./useStatic-Dg6j0jAA.js";import"./Dialog-BV8uMRwe.js";import"./Button-BBWo3kGM.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./OverlayArrow-CByfAkhe.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-DxADqCjP.js";import"./CollectionBuilder-D73R-Ru4.js";import"./Separator-DNY_h6GP.js";import"./Text-PTaPc_Ci.js";import"./SelectionManager-D_sMwGle.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./DialogTriggerView-DkRoBzAI.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Dhg1Wy_7.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";const br={...B,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(H,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(H,{}),p.long,r.jsx(T,{children:"Alert"}),r.jsx(A,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(j,{children:[r.jsx(f,{}),r.jsx(h,{...e,children:r.jsx(C,{children:p.medium})})]})]})};var n,a,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Er=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,Er as __namedExportsOrder,br as default};
