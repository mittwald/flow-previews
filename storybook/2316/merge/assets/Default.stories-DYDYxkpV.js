import{r as h,j as r}from"./iframe-BBLgQM8W.js";import{P as m}from"./PasswordCreationField-DwczOf6R.js";import{L as u}from"./Label-BQdcxq0o.js";import{B as g}from"./Button-B_d3OkSN.js";import{m as C}from"./IconWarning-CmmOPW6y.js";import{C as w}from"./CopyButton-C4oW-SDd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-De16JUVi.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./clsx-B-dksMZM.js";import"./index-CC4aSS2B.js";import"./Action-vczYGY_C.js";import"./context-On8QMk-S.js";import"./useStatic-DeJLZZ0I.js";import"./browser-DI7yhJk5.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./FieldDescription-DUGpusEG.js";import"./Text-DyzGue3k.js";import"./EmulatedBoldText-BZaUBYn6.js";import"./Text-C-vmddAy.js";import"./utils-Bzwl2RbX.js";import"./Tooltip-DizUVCpC.js";import"./OverlayArrow-DOWztXxW.js";import"./useFocus-atMo-T8H.js";import"./ProgressBar-C8xfeLyO.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-65Ti_lew.js";import"./context-CbfWsJFN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-XNEcT-2-.js";import"./useControlledState-Cx-WZngS.js";import"./useFocusable-BlOp3ek5.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./ContextualHelpTrigger-Bb_NreeB.js";import"./Popover-B9sG1hlB.js";import"./useOverlayController-DLo4JLQx.js";import"./OverlayContextProvider-U24Exh3e.js";import"./Dialog-ErohAvYc.js";import"./Button-M7FHgNE8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DXblhpXj.js";import"./RSPContexts-CYvfEZEC.js";import"./Collection-D0FsBWET.js";import"./CollectionBuilder-B0O9WQSu.js";import"./SelectionIndicator-CxHxHFYG.js";import"./Separator-Du5IBTyX.js";import"./SelectionManager-Qclabrtm.js";import"./useEvent-xi19_WIE.js";import"./useCollator--gNzNCc1.js";import"./FocusScope-BuBo0u5V.js";import"./VisuallyHidden-DReBsRIr.js";import"./OverlayTrigger-Qn4J4GR_.js";import"./Heading-Ckzm0pET.js";import"./Heading-xvL5txOz.js";import"./useFieldComponent-BfDJ4pJf.js";import"./FieldError-DAXPSsyp.js";import"./FieldError-CxkPyMXc.js";import"./AlertText-B4ActtEe.js";import"./AlertIcon-CiXM2S_P.js";import"./useControlledHostValueProps-B2sB3Iit.js";import"./TextField-Q9Ty2K7p.js";import"./Form-WOMIl9aS.js";import"./Group-CsgCBTlF.js";import"./Input-BnTyB-6W.js";import"./useTextField-BP4XIi7T.js";import"./useFormReset-4n7xFzn-.js";import"./useFormValidation-DAic1NnU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CfkxbS8M.js";import"./remote-Vne7hGXH.js";import"./react-children-utilities-XJXSs9aO.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
