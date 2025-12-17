import{j as e}from"./iframe-BXRQqxRF.js";import{S as o}from"./SearchField-BpJ6n3eW.js";import{L as n}from"./Label-Dw-KVlkl.js";import{F as c}from"./FieldDescription-ClR02c0z.js";import{F as d}from"./FieldError-B377POAw.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-y0XT-9Ew.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./clsx-B-dksMZM.js";import"./index-L-QBIyGf.js";import"./Button-C0lHC6Ss.js";import"./IconChevronDown-CrvlnwL_.js";import"./remote-B9tgrHbM.js";import"./IconX-DvHkgbt1.js";import"./IconCheck-BZ_7T0kt.js";import"./Text-KdIVkcjD.js";import"./browser-JidmR7ov.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./Text-gjZ6zRux.js";import"./utils-W_wb_I6t.js";import"./LoadingSpinner-Qtcd5nhZ.js";import"./ariaLive-BBnf0-S_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./context-Cfx64TkI.js";import"./Button-DlzDIGUo.js";import"./ProgressBar-Bu0Rvbqr.js";import"./Label-x3iOqkWL.js";import"./Hidden-CXQdbF07.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwfjYi-F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DljSeqhE.js";import"./useFocus-BYFFuSzP.js";import"./useFocusRing-mlfcq67k.js";import"./useFocusable-Bn1h_ZhV.js";import"./IconClose-BUhhZBm5.js";import"./IconSearch-Ds96boib.js";import"./useControlledHostValueProps-PQJrtPeA.js";import"./FieldError-Cw_rtSeq.js";import"./RSPContexts-DBwrNRvT.js";import"./Form-k8rVjsdW.js";import"./Group-C8fsqvgi.js";import"./Input-COh9rz8g.js";import"./useControlledState-DF5Prxi4.js";import"./useTextField-Dm9Ssc5y.js";import"./useFormReset-BZsjU1hv.js";import"./useFormValidation-tPOMEO92.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-B1opIkZE.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <FieldDescription>Press enter to search</FieldDescription>
    </SearchField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <Label>Suche</Label>
    </SearchField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props} defaultValue="test" isInvalid>
      <FieldError>Invalid search value</FieldError>
    </SearchField>
}`,...m.parameters?.docs?.source}}};const dr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,dr as __namedExportsOrder,cr as default};
