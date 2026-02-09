import{r as h,j as r}from"./iframe-CJFOFCad.js";import{P as m}from"./PasswordCreationField-cq5rJ1xL.js";import{L as u}from"./Label-DpG9gbVN.js";import{B as g}from"./Button-D5kumnA4.js";import{m as C}from"./IconWarning-1TKJLzWG.js";import{C as w}from"./CopyButton-Bq_oY7Qb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfulQ7wG.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./clsx-B-dksMZM.js";import"./index-Cu9s0VFH.js";import"./Action-Vq-tbHvg.js";import"./context-DTASnmZz.js";import"./useStatic-C0hf5llT.js";import"./browser-C8kWAWSZ.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./FieldDescription-8OICn3TI.js";import"./Text-CI7VZqhd.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./Text-8vym_gVd.js";import"./utils-CsQ8IQtm.js";import"./Tooltip-B0L7BzP_.js";import"./OverlayArrow-DEHMSq9h.js";import"./useFocus-Cgy8euA9.js";import"./ProgressBar-D1JMQZ2r.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./context-CMyux8LD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-wbIo7ugc.js";import"./useControlledState-DvHOpAD3.js";import"./useFocusable-13L7602I.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./ContextualHelpTrigger-DPZeT7jF.js";import"./Popover-Bd7FtJNb.js";import"./useOverlayController-BwJW5xew.js";import"./OverlayContextProvider-DL2zELSv.js";import"./Dialog-YkcYiA7q.js";import"./Button-BaNQUerH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NyliDXf7.js";import"./RSPContexts-CNS2UWja.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./VisuallyHidden-CZLhXAB_.js";import"./OverlayTrigger-ByPpL00z.js";import"./Heading-BkdVO0Fc.js";import"./Heading-DOJDeA1a.js";import"./useFieldComponent-CVIwC-Yy.js";import"./FieldError-Dc2Z54jn.js";import"./FieldError-B3-rgjm7.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";import"./useControlledHostValueProps-B-yVA_IL.js";import"./TextField-CtInFNLD.js";import"./Form-B3lCmY-S.js";import"./Group-DiioWKhA.js";import"./Input-BgsLbNjC.js";import"./useTextField-DDOj-p7O.js";import"./useFormReset-DXleDB5s.js";import"./useFormValidation-DcThlYcg.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CM8bIOhN.js";import"./remote-BxHvJS68.js";import"./react-children-utilities-BbmE_Gbv.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
