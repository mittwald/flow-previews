import{r as h,j as r}from"./iframe-CzrbZwQa.js";import{L as u}from"./Label-Dk8Ae2gf.js";import{B as g}from"./Button-BnubCMUU.js";import"./IconApp-BPXZ8R19.js";import{I as C}from"./IconDanger-BVqA44qH.js";import{C as w}from"./CopyButton-Bc7KSFj5.js";import{P as m}from"./PasswordCreationField-BK3m69rl.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./Label-DMBiwPLT.js";import"./utils-Ds7wxNIq.js";import"./Hidden-CPBzEaGa.js";import"./IconX-C4Avmif2.js";import"./IconCheck-DAWvHQav.js";import"./Text-u_8Z_6lo.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./Text-Bpo5VkCj.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-q4LXxmI0.js";import"./Button-Cr67WOIO.js";import"./ProgressBar-CBKtRO3f.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./IconCopy-DOlEXgnR.js";import"./Tooltip-BygoOrTd.js";import"./OverlayArrow-QhJyKZol.js";import"./useControlledState-D-hIONgW.js";import"./react-children-utilities-8UVNEPoa.js";import"./Action-8VFfq5fK.js";import"./useStatic-CooBsGRu.js";import"./getActionGroupSlot-GuEuCuz_.js";import"./context-CO2P6JA_.js";import"./dynamic-BsERbuwe.js";import"./FieldDescription-D7L367Z_.js";import"./TranslationProvider-Dt4fK_tv.js";import"./IconCircleCheck-NP3aQsbw.js";import"./ContextualHelpTrigger-9zm2bsOQ.js";import"./Popover-D8fbPWDK.js";import"./OverlayContextProvider-BRgyWi9O.js";import"./Dialog-2hzA1Zyr.js";import"./RSPContexts-BXOP7wdA.js";import"./Collection-DJOD4Ed7.js";import"./CollectionBuilder-D4t-xJzw.js";import"./SelectionIndicator-BDndb0Ze.js";import"./Separator-C-FZVUdq.js";import"./SelectionManager-N2u60-Z6.js";import"./useEvent-q-bdr1zW.js";import"./useCollator-TfVuzSHy.js";import"./FocusScope-Ct7XodZT.js";import"./VisuallyHidden-CUes-LKT.js";import"./useOverlayController-vG2MUPAG.js";import"./OverlayTrigger-B315LgK0.js";import"./IconInfo-DM42HxkB.js";import"./Heading-C4XKs7d2.js";import"./Heading-CeI5rPkS.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DOxHkWVS.js";import"./FieldError-D0s122Ty.js";import"./FieldError-DojfZoQ1.js";import"./useControlledHostValueProps-tzbGhsFA.js";import"./TextField-Byqv2kqA.js";import"./Form-AHU_2zi7.js";import"./Group-9f1OsIqJ.js";import"./Input-xD3cu1Ed.js";import"./useTextField-4-P93D0M.js";import"./useFormReset-DxatWkQF.js";import"./useFormValidation-DWC0bBci.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
