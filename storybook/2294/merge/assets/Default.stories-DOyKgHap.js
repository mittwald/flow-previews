import{j as r}from"./iframe-Da9Lw8R_.js";import{N as o}from"./NumberField-Dj6ZoyYt.js";import{L as t}from"./Label-D7d2SkgN.js";import{F as c}from"./FieldDescription-C0EOWzJH.js";import{F as g}from"./FieldError-DXoqYbez.js";import{C as x,a as b}from"./ContextualHelpTrigger-BJem8cZf.js";import{B as h}from"./Button-CkcTXATp.js";import{T as F}from"./Text-l_fYsQ08.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-yufHgNqa.js";import"./flowComponent-DSxpIroI.js";import"./index-CM0YhoHL.js";import"./clsx-B-dksMZM.js";import"./index-TT_JC2bB.js";import"./IconWarning-BYkwpstY.js";import"./remote-CsFbcl9r.js";import"./useControlledHostValueProps-rJ1Rukac.js";import"./Button-CzbwBi45.js";import"./utils-Cwd4tFKX.js";import"./ProgressBar-Chvpo8FD.js";import"./Label-CkI4JdYz.js";import"./Hidden-BIMJR4Fs.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CzV-HlgB.js";import"./context-CsdpTyhd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIogNAwh.js";import"./useFocus-BBVXnzgP.js";import"./useFocusRing-BItT14i_.js";import"./useFocusable-CwPW854N.js";import"./FieldError-DSdSdK3H.js";import"./Text-CpGlsQu3.js";import"./Form-D3ZAWear.js";import"./Group-CWa8s-M0.js";import"./Input-inZV5DIC.js";import"./useControlledState-B4YxKAgg.js";import"./useFormValidation-DjSyrx87.js";import"./useSpinButton-BXSA-aNY.js";import"./useLocalizedStringFormatter-BWd2uPhV.js";import"./useFormReset-4DR8Px1h.js";import"./useEvent-DSYhgwkh.js";import"./useTextField-oegUv-Jp.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-bxsLSC5L.js";import"./AlertIcon-Co0MJDJf.js";import"./Popover-FxFSsQeG.js";import"./useOverlayController-DXJN5Feb.js";import"./context-DT0iENXB.js";import"./useStatic-BOFCRskE.js";import"./OverlayContextProvider-BnH0GpUl.js";import"./Dialog-Cw1z9AtQ.js";import"./RSPContexts-CqxOCNft.js";import"./OverlayArrow-Cf3S1QD1.js";import"./Collection-Gkv_ybXQ.js";import"./CollectionBuilder-uz1z8vZv.js";import"./SelectionIndicator-DjHwUAme.js";import"./Separator-VHKWzJTM.js";import"./SelectionManager-42CnKCgE.js";import"./useCollator-D6vsHj3W.js";import"./FocusScope-BpnzFkst.js";import"./VisuallyHidden-gkajg-fe.js";import"./OverlayTrigger-BJ63rVtT.js";import"./LoadingSpinner-DXGsR4uF.js";import"./browser-DDWH8I0V.js";import"./EmulatedBoldText-CVyVzJMR.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Tr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Tr as __namedExportsOrder,Wr as default};
