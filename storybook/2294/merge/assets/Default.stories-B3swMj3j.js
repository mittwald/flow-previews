import{r as h,j as r}from"./iframe-CvJspzLv.js";import{P as m}from"./PasswordCreationField-C2kkM-HB.js";import{L as u}from"./Label-DfZOYrgY.js";import{B as g}from"./Button-DPWvzJXv.js";import{m as C}from"./IconWarning-BERZaob7.js";import{C as w}from"./CopyButton-Ck5HMsJx.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7-1UCAS5.js";import"./flowComponent-BI37IbCZ.js";import"./index-FNnc6AUb.js";import"./clsx-B-dksMZM.js";import"./index-Df150GVy.js";import"./Action-CzgX1dLD.js";import"./context-KW9IbNQ1.js";import"./useStatic-B0ICfBk6.js";import"./browser-CBUTrPGa.js";import"./getActionGroupSlot-DdQssjpq.js";import"./FieldDescription-DYsoHdVt.js";import"./Text-QUQe3Lsq.js";import"./EmulatedBoldText-DGmAuSbD.js";import"./Text-DHLl2ajF.js";import"./utils-BL4G7l_u.js";import"./Tooltip-JGx6YcQ5.js";import"./OverlayArrow-kevdZy7A.js";import"./useFocus-DbFf9Ktc.js";import"./ProgressBar-CM3jPvpy.js";import"./Label-BqmnG06H.js";import"./Hidden-Cc0JeUT8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfL38sGR.js";import"./context-CQ77Qkvg.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-L-b3Tn9K.js";import"./useControlledState-DsktkqC9.js";import"./useFocusable-C5zGZvV-.js";import"./useLocalizedStringFormatter-Clgc-XTf.js";import"./ContextualHelpTrigger-DJhtob0N.js";import"./Popover-62VnHh_D.js";import"./useOverlayController-BI0XpmO3.js";import"./OverlayContextProvider-BI-9o36W.js";import"./Dialog-CNj22GpD.js";import"./Button-DpFh2ewL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DO5nHrqL.js";import"./RSPContexts-fR-6qryz.js";import"./Collection-D9feXgUJ.js";import"./CollectionBuilder-1cHqqndV.js";import"./SelectionIndicator-DujQOkfZ.js";import"./Separator-CwyBo3YQ.js";import"./SelectionManager-S2-bZThJ.js";import"./useEvent-B-O27hsR.js";import"./useCollator-BPc2CQoh.js";import"./FocusScope-BaZaaiNh.js";import"./VisuallyHidden-ksBWJgrQ.js";import"./OverlayTrigger-08hVypIJ.js";import"./Heading-Ex-YKDBU.js";import"./Heading-BRBpvBMz.js";import"./useFieldComponent-43Bszd6x.js";import"./FieldError-DQmh2MYp.js";import"./FieldError-DlX11YEn.js";import"./AlertText-DgMbxot0.js";import"./AlertIcon-C15Ckg1B.js";import"./useControlledHostValueProps-Cd6juLCH.js";import"./TextField-DPOg2TtI.js";import"./Form-5NfLIR8x.js";import"./Group-C7yLTez3.js";import"./Input-qFXimabr.js";import"./useTextField-Bm9nr_bd.js";import"./useFormReset-ukaISav3.js";import"./useFormValidation-CwZe5cTQ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-xAaU4yCn.js";import"./remote-BqqZGE8h.js";import"./react-children-utilities-C2vxi9Ro.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
