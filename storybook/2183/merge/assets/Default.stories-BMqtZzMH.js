import{j as e}from"./iframe-CH_aTfEL.js";import{T as a}from"./TextArea-OA0ixn0s.js";import{L as s}from"./Label-BqL_a1sm.js";import{F as x}from"./TranslationProvider-CWofhASx.js";import{F as z}from"./FieldError-DGABQFH-.js";import"./preload-helper-PPVm8Dsz.js";import"./TextFieldBase-DhI98Y4Z.js";import"./useFieldComponent-JY3HqOd-.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./clsx-B-dksMZM.js";import"./Activity-DkWdwXP6.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./TextField-D7FK5Y0z.js";import"./utils-C8srcrY8.js";import"./FieldError-CHaTpVnh.js";import"./browser-CjAUGP0i.js";import"./filterDOMProps-i7L6S0l1.js";import"./RSPContexts-BB0WSv2m.js";import"./Form-BfyCREyn.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./Group-DrfJRaGf.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./Input-B62kev5I.js";import"./useTextField-CGjCcs3_.js";import"./useFormReset-P8yugG2W.js";import"./SelectionIndicator-CMFVzQc5.js";import"./useFormValidation-qjJTrH9J.js";import"./useControlledHostValueProps-CI7mWjRd.js";import"./Label.module-lamhxTiw.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./context-DeId9iUj.js";import"./Button-B1aqxMhV.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./Separator-IFFI1hok.js";import"./useStatic-DNN3uXbB.js";import"./ariaLive-Cw13p-6Q.js";import"./Text-BRh_x9bF.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DRvJdcN_.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,xe={title:"Form Controls/TextArea",component:a,render:r=>e.jsx(a,{onChange:f("onChange"),...r,children:e.jsx(s,{children:"Message"})})},o={},t={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},n={args:{isRequired:!0}},c={render:r=>e.jsxs(a,{...r,children:[e.jsx(s,{children:"Public Key"}),e.jsx(x,{children:"Starts with ssh-rsa"})]})},l={render:r=>e.jsx(a,{...r,defaultValue:"ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf",children:e.jsx(s,{children:"Public Key"})})},p={render:r=>e.jsx(a,{...r,placeholder:"ssh-rsa...",children:e.jsx(s,{children:"Public Key"})})},m={render:r=>e.jsxs(a,{...r,isInvalid:!0,defaultValue:"hello",children:[e.jsx(s,{children:"Public Key"}),e.jsx(z,{children:"Invalid Key"})]})},d={args:{showCharacterCount:!0,maxLength:100}},u={args:{rows:1,autoResizeMaxRows:5}},h={args:{allowResize:!0}},g={args:{allowResize:"horizontal"}},R={args:{allowResize:"vertical"}},b={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props}>
      <Label>Public Key</Label>
      <FieldDescription>Starts with ssh-rsa</FieldDescription>
    </TextArea>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} defaultValue="ssh-rsa asdfkehbahrgvszuagfdashdfgsaghdfiuadsf">
      <Label>Public Key</Label>
    </TextArea>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} placeholder="ssh-rsa...">
      <Label>Public Key</Label>
    </TextArea>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TextArea {...props} isInvalid defaultValue="hello">
      <Label>Public Key</Label>
      <FieldError>Invalid Key</FieldError>
    </TextArea>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...R.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...b.parameters?.docs?.source}}};const ze=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithPlaceholder","WithFieldError","ShowCharacterCount","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable"];export{u as AutoResizeable,o as Default,t as Disabled,g as HorizontallyResizeable,i as ReadOnly,n as Required,h as Resizeable,d as ShowCharacterCount,b as VerticallyAndAutoResizeable,R as VerticallyResizeable,l as WithDefaultValue,c as WithFieldDescription,m as WithFieldError,p as WithPlaceholder,ze as __namedExportsOrder,xe as default};
