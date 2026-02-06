import{r as h,j as r}from"./iframe-DITN2CQJ.js";import{P as m}from"./PasswordCreationField-wGpkPb6L.js";import{L as u}from"./Label-DJUexJHI.js";import{B as g}from"./Button-CLzuKoaU.js";import{m as C}from"./IconWarning-CkCNWluG.js";import{C as w}from"./CopyButton-PxcG5-Al.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTg8la0V.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./clsx-B-dksMZM.js";import"./index-CwMYtruy.js";import"./Action-2qaAsuOc.js";import"./context-DvDSM24h.js";import"./useStatic-CpFYvUzY.js";import"./browser-BAwbicjx.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./FieldDescription-juZacfyE.js";import"./Text-CADg3_Hr.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Text-C3mpKQD6.js";import"./utils-BKdkt1x6.js";import"./Tooltip-YbkdaJzg.js";import"./OverlayArrow-IBPtGci-.js";import"./useFocus-jV9bksDI.js";import"./ProgressBar-DwMRU30B.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DxgBaz-V.js";import"./context-DSmvJi-9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DGbEI6JP.js";import"./useControlledState-CEL2ngQO.js";import"./useFocusable-DLFLzCMb.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./ContextualHelpTrigger-9zWbxzYE.js";import"./Popover-FA_JZE95.js";import"./useOverlayController-T6amjECI.js";import"./OverlayContextProvider-Dgir1kFJ.js";import"./Dialog-74mAI6R3.js";import"./Button-9nZEjgFJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bo3aLfgI.js";import"./RSPContexts-1XCmuogP.js";import"./Collection-tRMlz9kZ.js";import"./CollectionBuilder-B14_oKNG.js";import"./SelectionIndicator-tBe1rngb.js";import"./Separator-DJanDtF2.js";import"./SelectionManager-C1JHyJxB.js";import"./useEvent-ByNOcoAW.js";import"./useCollator-CnUW-4Ed.js";import"./FocusScope-1T1zyEBb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./OverlayTrigger-Bs0oRsy1.js";import"./Heading-DKeH_-ca.js";import"./Heading-DwqLUz9F.js";import"./useFieldComponent-CFjzq3ou.js";import"./FieldError-B_BzuzIl.js";import"./FieldError-DyUcL9VR.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";import"./useControlledHostValueProps-BVETPqVy.js";import"./TextField-CKwnoYrb.js";import"./Form-CKWsALrB.js";import"./Group-pLm-fq-m.js";import"./Input-Ct_cW2oz.js";import"./useTextField-DLL3Z67c.js";import"./useFormReset-DRsSvhwB.js";import"./useFormValidation-PWdhcFqO.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BNTqIab3.js";import"./remote-C6sL0hfk.js";import"./react-children-utilities-AE2xNMh9.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
