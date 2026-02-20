import{j as r}from"./iframe-B-dt22EB.js";import{N as o}from"./NumberField-CKtlYhdw.js";import{L as t}from"./Label-DPQ9pprY.js";import{F as c}from"./FieldDescription-DkcWcefH.js";import{F as g}from"./FieldError-B26pZzZe.js";import{C as x,a as b}from"./ContextualHelpTrigger-C-hCqxiL.js";import{B as h}from"./Button-Cfktl1nd.js";import{T as F}from"./Text-BCqKdXYs.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-D2j3Q6-m.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./clsx-B-dksMZM.js";import"./index-D5JlC3xK.js";import"./IconWarning-BbozUbXF.js";import"./remote-D6Q14pEz.js";import"./useControlledHostValueProps-AfSNk-Xd.js";import"./Button-CjYcjBnT.js";import"./utils-DoxtMd58.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKpYilGg.js";import"./context--H9enp2q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgYKrzfD.js";import"./useFocus-9GLlZYuH.js";import"./useFocusRing-6FfHDt87.js";import"./useFocusable-C0Z9ZNeY.js";import"./FieldError-BkuObk6W.js";import"./Text-vBmBwiIT.js";import"./Form-DTBJD-53.js";import"./Group-Cgb--nht.js";import"./Input-1avyZMmc.js";import"./useControlledState-jk51FjyI.js";import"./useFormValidation-Ds3P2hMN.js";import"./useSpinButton-CynE-8lh.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./useFormReset-BwldCtpD.js";import"./useEvent-BnoPZq-r.js";import"./useTextField-Dar2ncjY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DjlqIQ0W.js";import"./AlertIcon-B1kQf0Ru.js";import"./Popover-52nhHqtt.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./OverlayContextProvider-COc2hxmN.js";import"./Dialog-C7TrFuKD.js";import"./RSPContexts-pIsu_52Z.js";import"./OverlayArrow-Drn8uqTb.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./SelectionManager-11E2v_vu.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./OverlayTrigger-MgjR2AzX.js";import"./LoadingSpinner-ISzATTs8.js";import"./browser-CJi_ki0i.js";import"./EmulatedBoldText-fVR6kGZs.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Rr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
