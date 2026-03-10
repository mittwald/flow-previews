import{j as r}from"./iframe-Bge_iwzq.js";import{N as t}from"./NumberField-CBLxRNHO.js";import{L as o}from"./Label-DsCIDP_n.js";import{F as l}from"./FieldDescription-CKLwRnm1.js";import{F as d}from"./FieldError-D2SilRMV.js";import{C as u,a as c}from"./ContextualHelpTrigger-nPLXV9Jr.js";import{B as x}from"./Button-DYq5oiR6.js";import{T as g}from"./Text-Bo3CKbUr.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DrAtnMqi.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./useControlledHostValueProps-5VhQyC8e.js";import"./Button-0WCxpm2-.js";import"./utils-rhPAe061.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./context-gG1Mi2B7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./FieldError-Cv0VAgMN.js";import"./Text-70WXc8nw.js";import"./Form-YPyJtwoF.js";import"./Group-Bwp5mwlQ.js";import"./Input-BXTXjJEE.js";import"./useControlledState-CyAGSHwZ.js";import"./useFormValidation-SyV8SqLU.js";import"./useSpinButton-enwZH7VM.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./useFormReset-CAOi_S_S.js";import"./useCollator-BqBbPKoz.js";import"./useTextField-4W-EXSfF.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./Popover-DH8uNurD.js";import"./useOverlayController-wivVBOVc.js";import"./useStatic-CNeEScnJ.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./Dialog-BA7SIyML.js";import"./RSPContexts-DPd6iTOd.js";import"./OverlayArrow-CPd1sFKC.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./FocusScope-DsvOCLtc.js";import"./VisuallyHidden-BL5eqrat.js";import"./OverlayTrigger-Dvl7K4Qg.js";import"./LoadingSpinner-BWNPdeXh.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Sr={title:"Form Controls/NumberField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsx(t,{onChange:h("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(l,{children:"Enter your age"})]})},s={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},p={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(d,{children:"Age is required"})]})},m={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},n={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(u,{children:[r.jsx(x,{ariaSlot:null}),r.jsx(c,{children:r.jsx(g,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Dr=["Default","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,n as WithContextualHelp,s as WithDefaultValue,a as WithFieldDescription,p as WithFieldError,m as WithUnit,Dr as __namedExportsOrder,Sr as default};
