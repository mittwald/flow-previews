import{j as r,r as C}from"./iframe-D9rlzAqJ.js";import{T as t,x as h,F as R}from"./Modal-BynqOLm-.js";import{L as o}from"./Label-De2mPddt.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-C5PGxhSs.js";import"./flowComponent-DpPOKAlU.js";import"./index-Cnuf1N7w.js";import"./index-BRV6ez6J.js";import"./context-BuH1yLqf.js";import"./Button-Dk6vUitJ.js";import"./utils-7I1ZD9XH.js";import"./ProgressBar-D7ktSTLg.js";import"./Hidden-BT89mVsv.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-SsG6f9B0.js";import"./useFocusRing-Bm-SRwoH.js";import"./useFocusable-DWITSf8K.js";import"./RSPContexts-BuIr8cKO.js";import"./Collection-CHEizjOQ.js";import"./CollectionBuilder-CmYRnc-a.js";import"./SelectionIndicator-5tAJZLYr.js";import"./Separator-DXKCcY-q.js";import"./browser-Dst4DIkE.js";import"./useLocalizedStringFormatter-sycgthOl.js";import"./useStatic-gEenggmF.js";import"./FileCardList-sswsurGC.js";import"./IconWarning-DYHE_-m1.js";import"./Avatar-CVZJY-yw.js";import"./AlertIcon-D9lVAGtj.js";import"./Image-znh9VsXc.js";import"./Text-CDUW2Lw5.js";import"./EmulatedBoldText-UlD0huTW.js";import"./Link-CiWldIOq.js";import"./Button-DfeJaIav.js";import"./LoadingSpinner-CyD3G-ZV.js";import"./ControlledNotification-DJsf1UrJ.js";import"./LayoutCard-C1B5QMHw.js";import"./Accordion-B9hs9Qn2.js";import"./Section-DdtLQD5i.js";import"./getActionGroupSlot-DGGwKmzg.js";import"./ActionGroup-nl-J_ZaJ.js";import"./Alert-DuJJ4rT_.js";import"./AlertBadge-BnXdFh9T.js";import"./Align-BypOuxnt.js";import"./AvatarStack-QD_yWmaq.js";import"./BigNumber-BlstSBAi.js";import"./Breadcrumb-0HuKzEPm.js";import"./Heading-BREdtYuh.js";import"./Legend-DCoV0FhZ.js";import"./Color-D6GZqEuQ.js";import"./TableFooterRow-L5PvmNuU.js";import"./SkeletonText-eP7sv0oh.js";import"./Content-CAVs97j9.js";import"./CounterBadge-B5IrCd5x.js";import"./DonutChart-BT3iuNO2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BSBIprut.js";import"./Header-DM8xn8Xs.js";import"./Initials-CqcjGuhB.js";import"./InlineCode-C8MLWFOe.js";import"./Separator-BzNwvCBD.js";import"./MessageSeparator-BPR6MdX0.js";import"./NavigationGroup-DduFAEdE.js";import"./Notification-JhI0KVRU.js";import"./NotificationProvider-DWcmSa_I.js";import"./ProgressBar-CyT1sEwu.js";import"./Rating-DrSUgOZP.js";import"./Skeleton-CleqlSca.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},l={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>{const[F,g]=C.useState("");return r.jsx(t,{...e,value:F,onChange:L=>g(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const yr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,m as WithControlledValue,l as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,yr as __namedExportsOrder,qr as default};
