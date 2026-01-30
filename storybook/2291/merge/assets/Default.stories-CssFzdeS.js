import{r as h,j as r}from"./iframe-CGL3Ztd8.js";import{P as m}from"./PasswordCreationField-CwQ6thmj.js";import{L as u}from"./Label-BdVzzMHl.js";import{B as g}from"./Button-CdFi_Gvp.js";import{m as C}from"./IconWarning-CMBZCdTm.js";import{C as w}from"./CopyButton-vr5wLNVD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8bvHICk.js";import"./flowComponent-WiCTTjdG.js";import"./index-P9tp8qCw.js";import"./clsx-B-dksMZM.js";import"./index-eHspQkB2.js";import"./Action-D7FDWjoF.js";import"./context-B-HkcFzY.js";import"./useStatic-aF_CYkuk.js";import"./browser-Dk-cIrUN.js";import"./getActionGroupSlot-D2X8q845.js";import"./FieldDescription-DTkn5Gpa.js";import"./Text-_sa0OuU0.js";import"./EmulatedBoldText-CAg0SlO2.js";import"./Text-BKxs7Hdx.js";import"./utils-BPLHaINM.js";import"./Tooltip-D5v70f9s.js";import"./OverlayArrow-BX1C_Ifh.js";import"./useFocus-XDda6gbt.js";import"./ProgressBar-C4R_ruZv.js";import"./Label-BHYpf9e5.js";import"./Hidden-CROh8dKk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dh-HsBYa.js";import"./context-BN4qQIb1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BtxSiiWP.js";import"./useControlledState-DjoZo3jd.js";import"./useFocusable-MZ2jhLFm.js";import"./useLocalizedStringFormatter-BjebV3sn.js";import"./ContextualHelpTrigger-CVvugzMH.js";import"./Popover-xu2ddB-n.js";import"./useOverlayController-C-uD8HEe.js";import"./OverlayContextProvider-vRTj2eZJ.js";import"./Dialog-D5rIpj4K.js";import"./Button-CySqxiup.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BpWTOkQr.js";import"./RSPContexts-Dbu6eLkb.js";import"./Collection-De-gN1c8.js";import"./CollectionBuilder-DX9xRdaS.js";import"./SelectionIndicator-CKCmLDiO.js";import"./Separator-CQ2yo0aI.js";import"./SelectionManager-BkQuw4FT.js";import"./useEvent-C3Ld1mH0.js";import"./useCollator-COOm3BGU.js";import"./FocusScope-CzHXyZUV.js";import"./VisuallyHidden-DvGmoJqV.js";import"./OverlayTrigger-BmiisdnS.js";import"./Heading-DBE0Oj6w.js";import"./Heading-CeHJVvL3.js";import"./useFieldComponent-CHIggLRE.js";import"./FieldError-Bg6s6kv2.js";import"./FieldError-CZz7QnF8.js";import"./AlertText-AGSpHO8N.js";import"./AlertIcon-DM1knw9_.js";import"./useControlledHostValueProps-DHO1n_5T.js";import"./TextField-Cye5nWIo.js";import"./Form-Ba7VKjcY.js";import"./Group-DH03d5g8.js";import"./Input-CtqQGuCR.js";import"./useTextField-CwFUpzxX.js";import"./useFormReset-C_UBUwcF.js";import"./useFormValidation-DhAeSygX.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-ChXboWO2.js";import"./remote-DEzwzibY.js";import"./react-children-utilities-CVehgo2M.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
