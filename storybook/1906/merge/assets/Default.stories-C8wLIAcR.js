import{r as h,j as r}from"./iframe-B9oS1eAm.js";import{P as m}from"./PasswordCreationField-D5jKFLKO.js";import{L as u}from"./Label-IJFVFDuP.js";import{B as g}from"./Button-DYAI_N0q.js";import{m as C}from"./IconWarning-CbErselp.js";import{C as w}from"./CopyButton-zc6av-YD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D5cDPq7G.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./clsx-B-dksMZM.js";import"./index-CYuWkd4j.js";import"./Action-uBGtkJG1.js";import"./context-CJJiwCXZ.js";import"./useStatic-D0W9io-P.js";import"./browser-DuZ3LDHb.js";import"./getActionGroupSlot-DVOrLfdJ.js";import"./FieldDescription-OkIQBqxg.js";import"./Text-D9DZPtYx.js";import"./EmulatedBoldText-BYYx2Dxb.js";import"./Text-DSVxOKBO.js";import"./utils-CkbQ6lDO.js";import"./Tooltip-C3NwG1ML.js";import"./OverlayArrow-D190ErXx.js";import"./useFocus-BUMqhqrN.js";import"./ProgressBar-DmEGRNOl.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CLQlKL9C.js";import"./context-CSGUwiAp.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CD4YKl48.js";import"./useControlledState-BhPlyXsf.js";import"./useFocusable-DLbArD3q.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./ContextualHelpTrigger-TFo053PZ.js";import"./Popover-YwALvm8D.js";import"./useOverlayController-kt2fLXEJ.js";import"./OverlayContextProvider-B6Y-y8F0.js";import"./Dialog-DQxs1UCg.js";import"./Button-BCaEF3RH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CvAqmGGe.js";import"./RSPContexts-BiSXvS4y.js";import"./Collection-BQ9glRT8.js";import"./CollectionBuilder-Aei3o-DO.js";import"./SelectionIndicator-CiC6xaeC.js";import"./Separator-DWgkhh6N.js";import"./SelectionManager-PMRgnxaW.js";import"./useEvent-DvZ6slzf.js";import"./useCollator-09eSufO1.js";import"./FocusScope-BifOUh1d.js";import"./VisuallyHidden-D5FMvG_d.js";import"./OverlayTrigger-BbXRNnL7.js";import"./Heading-DxBk4dsC.js";import"./Heading-DFJD7l83.js";import"./useFieldComponent-BBgwgWHq.js";import"./FieldError-BkKW3wP7.js";import"./FieldError-Dfuql1HI.js";import"./AlertText-D9s0hTSb.js";import"./AlertIcon-CyL6LR1b.js";import"./useControlledHostValueProps-DrCLF4RV.js";import"./TextField-CgbI6ZAs.js";import"./Form-DFtxLsB8.js";import"./Group-DvDunJNi.js";import"./Input-eUUGTdC3.js";import"./useTextField-CpCpLcdr.js";import"./useFormReset-CfNbS0Tm.js";import"./useFormValidation-pe71fieX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BCe3g54S.js";import"./remote-B89JZTQ6.js";import"./react-children-utilities-DDgP_Wf1.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
