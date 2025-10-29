import{j as r}from"./iframe-BQyHcTNh.js";import{N as o}from"./NumberField-CkWv-SfU.js";import{L as t}from"./Label-JK740Dk1.js";import{F as c}from"./FieldDescription-mxWByT_L.js";import{F as g}from"./FieldError-AQx_Co0q.js";import{C as x,a as b}from"./ContextualHelpTrigger-bjuY7Tuo.js";import{B as h}from"./Button-ieCP1ArV.js";import{T as F}from"./Text-_hc15B6K.js";import"./index-nuYtCEEu.js";import"./useFieldComponent-Cyrlnow6.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./utils-CdCPWCHO.js";import"./Text-C9BF5CjQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-CD4xLCoc.js";import"./IconWarning-D8COeLpG.js";import"./ReactAriaControlledValueFix-CUbxH7dl.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./useLabel-DeM_oEx1.js";import"./context-BymCJUNL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./Form-CjlO_WmK.js";import"./Group-D0yjr4EW.js";import"./Input-POMMqA2k.js";import"./useControlledState-TEYDAVm8.js";import"./useFormValidation-Dr6xiKJA.js";import"./useSpinButton-DWKBDY9w.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./useFormReset-DB-Y7LtK.js";import"./useEvent-BWXlYds5.js";import"./useTextField-0T4qffof.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-DSb6ue0f.js";import"./context-B5Yt5ZbD.js";import"./useStatic-CIMbf_kn.js";import"./OverlayContextProvider-Cx4xwIBd.js";import"./Dialog-CTkyeFiO.js";import"./RSPContexts-BtdGc8q9.js";import"./OverlayArrow-Dp6PlRHE.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./SelectionManager-DeoXhPYy.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./VisuallyHidden-rd1eTAwo.js";import"./ClearPropsContextView-BeRr4MLk.js";import"./OverlayTrigger-CTujVhSf.js";import"./ControlledNotification-CL-0TnDq.js";import"./LoadingSpinner-CEYsHom-.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Rr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Rr as __namedExportsOrder,Or as default};
