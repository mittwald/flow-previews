import{r as h,j as r}from"./iframe-JHVlk64D.js";import{P as m}from"./PasswordCreationField-C29oYCJq.js";import{L as u}from"./Label-BVSjd_Ef.js";import{B as g}from"./Button-BViHWx5D.js";import{m as C}from"./IconWarning-D57fWT31.js";import{C as w}from"./CopyButton-BkKudB93.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B8NPXIjt.js";import"./flowComponent-Ck8MmBsO.js";import"./index-w2uwoc3h.js";import"./clsx-B-dksMZM.js";import"./index-BF-KrcKY.js";import"./ActionBatch-1qW2-LTl.js";import"./useOverlayController-B_kJVQUM.js";import"./useStatic-BkeDEY_1.js";import"./browser-CH4iE_n_.js";import"./getActionGroupSlot-DipsrrNF.js";import"./FieldDescription-CHp3BkQc.js";import"./Text-D35H-2yr.js";import"./EmulatedBoldText-DwNSiPCb.js";import"./Text-BPDMqDL5.js";import"./utils-D9FbIhNL.js";import"./Tooltip-pS04iZoH.js";import"./OverlayArrow-DI9sbb4v.js";import"./platform-Dz8CwCz0.js";import"./ProgressBar-RoFvxVlz.js";import"./Label-Bh1yg0KP.js";import"./Hidden-ChMS2Dui.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-9l7svqw5.js";import"./context-ArJ603f0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CHLeDkTy.js";import"./useFocus-Cks5m45E.js";import"./useControlledState-BK0dEcU9.js";import"./useFocusable-vxzxlCI8.js";import"./useLocalizedStringFormatter-DDPtpUw9.js";import"./ContextualHelpTrigger-B7cBolBP.js";import"./Popover-KhMzeTk6.js";import"./OverlayContextProvider-ClUum8Ul.js";import"./Dialog-DIqACfnD.js";import"./Button-CV338ZHI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dt-0MkOU.js";import"./RSPContexts-BaSES6Qq.js";import"./Collection-CRq1qG1J.js";import"./CollectionBuilder-Dx0vl2tB.js";import"./SelectionIndicator-D6El124b.js";import"./Separator-8crMrP-e.js";import"./SelectionManager-DJjQCPb0.js";import"./useEvent-CalNBU8C.js";import"./useCollator-YDjG1_LZ.js";import"./FocusScope-D4b0Moap.js";import"./VisuallyHidden-CJBb4HxH.js";import"./OverlayTrigger-CMrYL6HW.js";import"./Heading-B5Pon5qA.js";import"./Heading-DWwskDgI.js";import"./useFieldComponent-Dm_EHwx7.js";import"./FieldError-DkKHEf-8.js";import"./FieldError-CB6gvg8S.js";import"./AlertText-4rUPj4ZK.js";import"./AlertIcon-B-el1D17.js";import"./useControlledHostValueProps-C11BGBW9.js";import"./TextField-D8OVS6JU.js";import"./Form-C3MOdK6R.js";import"./Group-BpUbtBKw.js";import"./Input-D75LvDxG.js";import"./useTextField-D6sOxTHB.js";import"./useFormReset-CuVjUJoL.js";import"./useFormValidation-BHVZgCg5.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bl1fRewj.js";import"./remote-CdnDmctD.js";import"./react-children-utilities-oHo-vVa3.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
