import{j as r}from"./iframe-BF3zk0it.js";import{N as o}from"./NumberField-CpODQ8LC.js";import{L as t}from"./Label-DcRc8bay.js";import{F as c}from"./FieldDescription-CYCZIfgJ.js";import{F as g}from"./FieldError-C2kAtlyK.js";import{C as x,a as b}from"./ContextualHelpTrigger-BsLN_BVx.js";import{B as h}from"./Button-ZNdemegp.js";import{T as F}from"./Text-C9_U4GIb.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-Z2yLJYUo.js";import"./flowComponent-CmGrxW8D.js";import"./index-CYSNwget.js";import"./clsx-B-dksMZM.js";import"./index-S59XLRls.js";import"./IconWarning-BmoaMC54.js";import"./remote-CJL-gtYq.js";import"./useControlledHostValueProps-C-DklFre.js";import"./Button-CioOZKSP.js";import"./utils-Ds629Okb.js";import"./ProgressBar-wD5S60Ia.js";import"./Label-Df1ayrWx.js";import"./Hidden-DHsUmrVt.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnUcYl5P.js";import"./context-B_W42rBs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DqnzUH3I.js";import"./useFocus-BGqYFkhn.js";import"./useFocusRing-C8HzCuNM.js";import"./useFocusable-BWie7cw6.js";import"./FieldError-WTvIa9hl.js";import"./Text-CwwNB0nU.js";import"./Form-r-oZJvOh.js";import"./Group-Bhaa4wBz.js";import"./Input-Q6yM49Eu.js";import"./useControlledState-ChKdFYY_.js";import"./useFormValidation-Clvn3NKc.js";import"./useSpinButton-CQoFGok7.js";import"./useLocalizedStringFormatter-DvXTg0S-.js";import"./useFormReset-Dd7cUUSK.js";import"./useEvent-CjKJuTgN.js";import"./useTextField-CQuzVOOK.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BB1yiwFt.js";import"./AlertIcon-CwrMzrhG.js";import"./Popover-CIOQTdzG.js";import"./useOverlayController-CjUKcEGt.js";import"./useStatic-B_2dxxhv.js";import"./OverlayContextProvider-CRBaZ6q7.js";import"./Dialog-IYHamviF.js";import"./RSPContexts-ssfE85JL.js";import"./OverlayArrow-CX6asWYb.js";import"./Collection-CNU7K9tk.js";import"./CollectionBuilder-CzJEx5bH.js";import"./SelectionIndicator-DPkZaIrz.js";import"./Separator-CfMbQNki.js";import"./SelectionManager-C8OuUWxs.js";import"./useCollator-zZACkIog.js";import"./FocusScope-YXqkLzes.js";import"./VisuallyHidden-P8G91P8h.js";import"./OverlayTrigger-C5NrL7-k.js";import"./LoadingSpinner-BryS_W8u.js";import"./browser-Cxel5Cqf.js";import"./EmulatedBoldText-tEygNJi1.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
