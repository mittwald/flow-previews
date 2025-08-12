import{j as r}from"./iframe-BpEavT04.js";import{N as o}from"./NumberField-DYpQZAGy.js";import{L as t}from"./Label-CiJybHgW.js";import{F as u}from"./FieldDescription-Vq0coIIu.js";import{F as c}from"./FieldError-DY8OUBEl.js";import{C as g,a as x}from"./ContextualHelpTrigger-CPHel92k.js";import{B as b}from"./Button-CCZgVc0N.js";import{T as h}from"./Text-CcXeyI30.js";import"./index-k6QiPQ3a.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./IconWarning-vA6HsYJq.js";import"./ReactAriaControlledValueFix-BKN3vDTM.js";import"./utils-CpHgE-S6.js";import"./Button-CEEqH0ki.js";import"./ProgressBar-Bg2NAwr4.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6-vYiz3X.js";import"./context-1jMNVxHt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./useFocus-BaJLfW1J.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";import"./FieldError-BmEWAGf_.js";import"./Text-DWLjOUr2.js";import"./Form-DJ2svD4f.js";import"./Group-DG2VW6yX.js";import"./useControlledState-Cjeeyz03.js";import"./useSpinButton-Cv_tNHun.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./useFormReset-CovQJR7M.js";import"./useEvent--O7DxxGG.js";import"./useTextField-DUt04o8w.js";import"./Popover-Db5mAq-N.js";import"./DialogTriggerView-DpWn2yoK.js";import"./context-DfZyAinb.js";import"./useStatic-BZhl3rWC.js";import"./Dialog-DAXkTNx8.js";import"./RSPContexts-z3euxKCR.js";import"./OverlayArrow-CMORky_-.js";import"./Collection-ScrsRFZc.js";import"./CollectionBuilder-DQGAitfS.js";import"./Separator-VTYWgg2d.js";import"./SearchField-DiZ_IivY.js";import"./TextField-CoVUwaSO.js";import"./SelectionManager-BpD0kl0T.js";import"./useCollator-bTe8AndB.js";import"./FocusScope-CJ6Nm8ct.js";import"./VisuallyHidden-DD5pbayJ.js";import"./LoadingSpinner-CRDc6voB.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:F("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(u,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(g,{children:[r.jsx(b,{ariaSlot:null}),r.jsx(x,{children:r.jsx(h,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Cr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Cr as __namedExportsOrder,Vr as default};
