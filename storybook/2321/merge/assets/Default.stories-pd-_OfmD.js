import{j as r}from"./iframe-BYq2oLvG.js";import{N as o}from"./NumberField-BoUITk8A.js";import{L as t}from"./Label-xDxAxXdC.js";import{F as c}from"./FieldDescription-rCK7g6Ew.js";import{F as g}from"./FieldError-Cq2wz6X1.js";import{C as x,a as b}from"./ContextualHelpTrigger-uEGFVHVG.js";import{B as h}from"./Button-DnTJdD84.js";import{T as F}from"./Text-Df3o0vPg.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-C42pk4aC.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./clsx-B-dksMZM.js";import"./index-BCX3_YU5.js";import"./IconWarning-l8NPf1u4.js";import"./remote-SGC31yDV.js";import"./useControlledHostValueProps-Bfvj7P7T.js";import"./Button-Bk2CF5qa.js";import"./utils-Da-bhZeG.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./context-WfyLsYOo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CABccGP2.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useFocusable-eOfLyRoH.js";import"./FieldError-3pauqY5q.js";import"./Text-BsD4qVoX.js";import"./Form-BjhhXbaP.js";import"./Group-D2o0YYLE.js";import"./Input-2WqTMUAU.js";import"./useControlledState-B-JkoIYX.js";import"./useFormValidation-DIPf7gSr.js";import"./useSpinButton-jhuJ5oTz.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./useFormReset-COvJ3vzl.js";import"./useEvent-BYfYEsDL.js";import"./useTextField-DkyrAVou.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BLnni9j6.js";import"./AlertIcon-DHHmiMC7.js";import"./Popover-BI0oaFz7.js";import"./useOverlayController-CI4A0ba3.js";import"./context-BgaPAiG2.js";import"./useStatic-CVBRAdvz.js";import"./OverlayContextProvider-BMISrNul.js";import"./Dialog-DIAje18X.js";import"./RSPContexts-DDzq82Ri.js";import"./OverlayArrow-CfRyqpgH.js";import"./Collection-DGuLDpP3.js";import"./CollectionBuilder-D5hV5BBU.js";import"./SelectionIndicator-DxCQPmpp.js";import"./Separator-D5y-ao9w.js";import"./SelectionManager-DNg-4UKk.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./VisuallyHidden-4k4K_3kv.js";import"./OverlayTrigger-Cf1aQvVs.js";import"./LoadingSpinner-DIcYbI07.js";import"./browser-CRRI-wfh.js";import"./EmulatedBoldText-2hwPnQKV.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
