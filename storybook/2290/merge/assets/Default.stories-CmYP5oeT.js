import{r as h,j as r}from"./iframe-pec-daIN.js";import{P as m}from"./PasswordCreationField-D60QxTb2.js";import{L as u}from"./Label-CElVOifK.js";import{B as g}from"./Button-TbsWowXg.js";import{m as C}from"./IconWarning-BNWGnhvf.js";import{C as w}from"./CopyButton-DgGOxBJp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-KYdmGlVp.js";import"./flowComponent-Dhs06173.js";import"./index-DJTXzqQk.js";import"./clsx-B-dksMZM.js";import"./index-CHD_W7k-.js";import"./Action-8dbKhHvU.js";import"./context-CSF0VmIA.js";import"./useStatic-DtKIUYIw.js";import"./browser-CB013lxp.js";import"./getActionGroupSlot-BTwNrt7T.js";import"./FieldDescription-C3yB_B9f.js";import"./Text-KadZ5_Og.js";import"./EmulatedBoldText-CH8TmYXX.js";import"./Text-ChVSp7Zj.js";import"./utils-DgvXfbTX.js";import"./Tooltip-BSOgEO0j.js";import"./OverlayArrow-DWFODRfO.js";import"./useFocus-8lECnDuB.js";import"./ProgressBar-BMgVEN8s.js";import"./Label-BgXd0ScX.js";import"./Hidden-BHo1_O4t.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-EN4dlqGk.js";import"./context-6wXKo3vr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D1bapTtD.js";import"./useControlledState-C8wEjdVb.js";import"./useFocusable-DHeceSRU.js";import"./useLocalizedStringFormatter-DQtSZIdS.js";import"./ContextualHelpTrigger-C8o2AL-5.js";import"./Popover-DLd5G0Ef.js";import"./useOverlayController-BZ8CrQho.js";import"./OverlayContextProvider-DRuVjJJZ.js";import"./Dialog-CHeMFU-y.js";import"./Button-BVdTMk7w.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXePSkUY.js";import"./RSPContexts-CXn4NsJp.js";import"./Collection-CMUMsBwk.js";import"./CollectionBuilder-UpU1wmgz.js";import"./SelectionIndicator-Cx4KKVM-.js";import"./Separator-ChvruPVC.js";import"./SelectionManager-DC-DY4jN.js";import"./useEvent-TrAkXyi-.js";import"./useCollator-Bc_1nfh_.js";import"./FocusScope-D8KAWd4v.js";import"./VisuallyHidden-CRkS1ULJ.js";import"./OverlayTrigger-LLvsqu3e.js";import"./Heading-XncZngQX.js";import"./Heading-Dfi1y-Mg.js";import"./useFieldComponent-BVaTpDhT.js";import"./FieldError-r6Iz548x.js";import"./FieldError-DRdVsyAa.js";import"./AlertText-XXHjf97y.js";import"./AlertIcon-Df2ALci7.js";import"./useControlledHostValueProps-DES1YIm6.js";import"./TextField-DAVi84by.js";import"./Form-D9urj6j4.js";import"./Group-DrdjXHuf.js";import"./Input-nceBJ8Dt.js";import"./useTextField-DMccosFc.js";import"./useFormReset-DlmAX50c.js";import"./useFormValidation-Cw4fPepy.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DJdNJN2d.js";import"./remote-CL_x9DF5.js";import"./react-children-utilities-CPC8CfAD.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
