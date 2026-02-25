import{j as r}from"./iframe-CFTqgbub.js";import{N as o}from"./NumberField-C7wQW_Wh.js";import{L as t}from"./Label-GwGXhrLq.js";import{F as c}from"./FieldDescription-WAwKPsRK.js";import{F as g}from"./FieldError-CYjuAiBI.js";import{C as x,a as b}from"./ContextualHelpTrigger-D3bXfaql.js";import{B as h}from"./Button-DYo4uywI.js";import{T as F}from"./Text-DGb4Yj-N.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CbaMz5aY.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./clsx-B-dksMZM.js";import"./index-B_-FfeBA.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./useControlledHostValueProps-BuQGKxFM.js";import"./Button-BKBgz7xZ.js";import"./utils-B4tY5r2S.js";import"./ProgressBar-Du8sUV-4.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BdtjZifw.js";import"./context-DrUKb0cF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIXZ9Ppe.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useFocusable-Dm8xzBfk.js";import"./FieldError-DNv3qA2U.js";import"./Text-Djzy7Vo0.js";import"./Form-XRNm8_rd.js";import"./Group-DV5U8v9N.js";import"./Input-7Pv0YxOe.js";import"./useControlledState-SUsbXgrM.js";import"./useFormValidation-BPzjnfej.js";import"./useSpinButton-DMO0bZ90.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./useFormReset-BbhAN2Ls.js";import"./useEvent-Bix3gDIS.js";import"./useTextField-CcrA4Fls.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";import"./Popover-CFUr0FGw.js";import"./useOverlayController-DR05g40f.js";import"./useStatic-BFPJMVns.js";import"./OverlayContextProvider-G6K1v8D7.js";import"./Dialog-BnZ8dnOj.js";import"./RSPContexts-CFURB7yy.js";import"./OverlayArrow-5aYILyU8.js";import"./Collection-XFdgj0zz.js";import"./CollectionBuilder-B8mkHCYD.js";import"./SelectionIndicator-ex17VsHG.js";import"./Separator-BbFY4QIS.js";import"./SelectionManager-BQIYg6Kc.js";import"./useCollator-BwS2zx0_.js";import"./FocusScope-BtEv7ihW.js";import"./VisuallyHidden-CB7azLHp.js";import"./OverlayTrigger-C_Zwa0aQ.js";import"./LoadingSpinner-kIQpS8IZ.js";import"./browser-DzYF9AGw.js";import"./EmulatedBoldText-Dyut30RV.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const Wr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Wr as __namedExportsOrder,Rr as default};
