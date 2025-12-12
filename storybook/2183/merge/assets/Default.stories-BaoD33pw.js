import{j as r,r as C}from"./iframe-DNac-Rqf.js";import{T as t,v as h,g as R}from"./TimeField-DpY9PVqh.js";import{L as o}from"./Label-CblnI0HW.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-C_xkOl2m.js";import"./mergeRefs-CMWgjpmK.js";import"./index--GDWo6c1.js";import"./clsx-B-dksMZM.js";import"./Accordion-BpjGjdfu.js";import"./dynamic-DYsIbK1A.js";import"./Button-CUSLqQMc.js";import"./IconWarning-Cg768Zjl.js";import"./remote-DNzJzz_i.js";import"./Text-D0ZE_3Re.js";import"./browser-nJ4CE5Oc.js";import"./utils-BduO7XRu.js";import"./EmulatedBoldText-Dq-fgG2H.js";import"./LoadingSpinner-lobDwtPy.js";import"./Button-jJfhABmc.js";import"./ProgressBar-Cg_AUX6O.js";import"./Hidden-DGwLcp0N.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-g2-sYTkT.js";import"./useFocusRing-Dh9thb9f.js";import"./useFocusable-rb0lSnzN.js";import"./useLocalizedStringFormatter-BLbNTQNm.js";import"./Section-DvtlFJN0.js";import"./context-CZdohShl.js";import"./RSPContexts-Cd6lFFaf.js";import"./Collection-igBrAvIn.js";import"./CollectionBuilder-qxwNBjxK.js";import"./SelectionIndicator-C4Ae8ohN.js";import"./Separator-DHka8Fv6.js";import"./useStatic-ihim0ckM.js";import"./ActionGroup-HKL5W0AJ.js";import"./Alert-C4SmUy15.js";import"./AlertIcon-BCoAEyQh.js";import"./AlertBadge-B4Gw2oem.js";import"./Align-BYSxjVaI.js";import"./Popover-Cv71dRgv.js";import"./OverlayTrigger-BBjUB5WE.js";import"./TableFooterRow-TOZfCvNN.js";import"./SkeletonText-Dtz0dWFM.js";import"./Avatar-C3ls42ZT.js";import"./AvatarStack-CB7huUjR.js";import"./Badge-BTPi5GTz.js";import"./BigNumber-C6J1IAVW.js";import"./Breadcrumb-CusU5TRR.js";import"./Link-Ddteou-D.js";import"./Heading-B9C-Q8d_.js";import"./Legend-C843Nwot.js";import"./FileCardList-C3A0Rc32.js";import"./Image-D-F7EiiO.js";import"./Color-DOa8qdv1.js";import"./Content-ze7-zRt3.js";import"./ContextualHelpTrigger-BMAda_hh.js";import"./CounterBadge-BP5WHUxC.js";import"./DonutChart-ChhISA-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B3WFXRVC.js";import"./Header-D32huwY0.js";import"./Initials-By4hdRc1.js";import"./InlineCode-BSZYsfjr.js";import"./PopoverTrigger-CtfZ1cKH.js";import"./Separator-T5QLy1gm.js";import"./Message-B9f-cPpE.js";import"./MessageSeparator-C2jALfgb.js";import"./NavigationGroup-D3e0XJsj.js";import"./Notification-BzWIEsEu.js";import"./NotificationProvider-BnmgoZU5.js";import"./ProgressBar-DEEkwCFH.js";import"./Rating-C_CSOchR.js";import"./Skeleton-CSWR-u_J.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Br={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},m={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},l={render:e=>{const[g,F]=C.useState("");return r.jsx(t,{...e,value:g,onChange:L=>F(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...u.parameters?.docs?.source}}};const Kr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,l as WithControlledValue,m as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,Kr as __namedExportsOrder,Br as default};
