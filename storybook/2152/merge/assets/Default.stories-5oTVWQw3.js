import{j as r,r as C}from"./iframe-CgbY7LhW.js";import{T as t,x as h,F as R}from"./Modal-BfYIexr4.js";import{L as o}from"./Label-VGhN0jRZ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-BL-wVa7i.js";import"./flowComponent-CIzRpviz.js";import"./index-DzXy7NVI.js";import"./index-BGPntLpu.js";import"./context-BZ4nmd66.js";import"./Button-B3Gd0dhU.js";import"./utils-CrtKH5yx.js";import"./ProgressBar-DkKo9kM8.js";import"./Hidden-C39TrB4S.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CFrKoiSq.js";import"./useFocusRing-BLRAUViD.js";import"./useFocusable-CK20RdZz.js";import"./RSPContexts-a1gWmxyS.js";import"./Collection-AJHavNni.js";import"./CollectionBuilder-vSLB7roW.js";import"./SelectionIndicator-DAnIk2iR.js";import"./Separator-Dbfv1-4R.js";import"./browser-B9s1Wzc0.js";import"./useLocalizedStringFormatter-n70-9iPv.js";import"./useStatic-DAnqOhq-.js";import"./FileCardList-C6bH-qYK.js";import"./IconWarning-B_M4h9wv.js";import"./Avatar-WA_Rs_vA.js";import"./AlertIcon-DNdzJj2o.js";import"./Image-DDNMfo4c.js";import"./Text-DYTEpYR_.js";import"./EmulatedBoldText-B0grik2o.js";import"./Link-CnlhKMXm.js";import"./Button-SVEMHQlh.js";import"./LoadingSpinner-D5GUeRWw.js";import"./ControlledNotification-DRgvriDq.js";import"./Flex-CENJLpDN.js";import"./Accordion-z-ohBE1U.js";import"./Section-vgTzgtmS.js";import"./ActionGroup-CmB_jI0r.js";import"./Alert-B_kIhVrI.js";import"./AlertBadge-DNjrKNd8.js";import"./Align-CtVPE4QN.js";import"./AvatarStack-BlJN3mG4.js";import"./BigNumber-CoK4x3f1.js";import"./Breadcrumb-CzsKgwxv.js";import"./Heading-B5jO-5Wf.js";import"./Legend-ChYFXknj.js";import"./Color-DuOfyeUm.js";import"./TableFooterRow-DAgU7sHY.js";import"./SkeletonText-CnZTtgwR.js";import"./Content-CEEnoGhP.js";import"./CounterBadge-BedfIzch.js";import"./DonutChart-BPWlwlOc.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8u-hiHg.js";import"./Header-CShmbRTO.js";import"./Initials-YnzuiPfJ.js";import"./InlineCode-CW1svUV-.js";import"./LayoutCard-vyJIg7vB.js";import"./Separator-DWsNhIeQ.js";import"./MessageSeparator-DR2YivYW.js";import"./NavigationGroup-DcTqlZP5.js";import"./Notification-SBEJzfTe.js";import"./NotificationProvider-DzYeqYbn.js";import"./ProgressBar-BVXsq-Dv.js";import"./Rating-DW5q1Ced.js";import"./Skeleton-DRKewfj9.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},l={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>{const[F,g]=C.useState("");return r.jsx(t,{...e,value:F,onChange:L=>g(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
