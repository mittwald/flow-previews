import{r as h,j as r}from"./iframe-DnYi-t8H.js";import{L as u}from"./Label-DliS2X1j.js";import{B as g}from"./Button-CGm1W1qT.js";import"./IconApp-C4H0Rmt2.js";import{I as C}from"./IconDanger-CDad_7H2.js";import{C as w}from"./CopyButton-DK7hdBsT.js";import{P as m}from"./PasswordCreationField-BX68Gykh.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BiRXm_7W.js";import"./index-6rd6RhLs.js";import"./index-B9w1U9jw.js";import"./useLocalizedStringFormatter-D1M6ycSH.js";import"./context-BormPWP-.js";import"./Label-DpP4Z3U4.js";import"./utils-DErHybyt.js";import"./Hidden-D2dwjMI8.js";import"./IconX-BXvP19pi.js";import"./IconCheck-Z-_98HG6.js";import"./Text-Bl1v2nei.js";import"./browser-Cx51Q07l.js";import"./EmulatedBoldText-C_7kGQpM.js";import"./Text-CnHQzzWa.js";import"./LoadingSpinner-COLacOyQ.js";import"./ariaLive-Cwd837L3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BR657ewb.js";import"./Button-DvsL5VIA.js";import"./ProgressBar-C0arnLiQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CvNtERHu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BSFKAxA8.js";import"./useFocus-Cp5_bDzt.js";import"./useFocusRing-DBOpxQ6c.js";import"./useFocusable-CJcfCTZ3.js";import"./IconCopy-BgsB_JZ2.js";import"./Tooltip-DWtw_cTG.js";import"./OverlayArrow-Cdm9aZ0d.js";import"./useControlledState-CUB7XdW4.js";import"./react-children-utilities-Tn9kzMOg.js";import"./Action-BbwnmsIN.js";import"./useStatic-nPTr3XXM.js";import"./getActionGroupSlot-D0nHzOJX.js";import"./context-EfU6UTnF.js";import"./dynamic-Bt-cD_bv.js";import"./FieldDescription-Dv0mKlK_.js";import"./TranslationProvider-yInY7Dxd.js";import"./IconCircleCheck-Ed2AkDNC.js";import"./ContextualHelpTrigger-jwppJyOX.js";import"./Popover-BLsbaJHt.js";import"./OverlayContextProvider-B_Yv-het.js";import"./Dialog-_g0NQG0c.js";import"./RSPContexts-fnRhq3x5.js";import"./Collection-Dl9RCK9z.js";import"./CollectionBuilder-Dz2l6Qz0.js";import"./SelectionIndicator-B3bHR6It.js";import"./Separator-DF_Ka3NA.js";import"./SelectionManager-D2Yq1xXP.js";import"./useEvent-BzaRCHg1.js";import"./useCollator-b7BSiHgL.js";import"./FocusScope-CymXO5HE.js";import"./VisuallyHidden-BnpIJKhq.js";import"./useOverlayController-C4BihEJv.js";import"./OverlayTrigger-CMvzQfjH.js";import"./IconInfo-_QICPALr.js";import"./Heading-Bl0D9Fk9.js";import"./Heading-3QLXl-8j.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BC1W_qCr.js";import"./FieldError-9-oFldGv.js";import"./FieldError-DFN_xfpl.js";import"./useControlledHostValueProps-CY46Idh6.js";import"./TextField-DjS4j9il.js";import"./Form-BNVSNvMr.js";import"./Group-trRaFn9q.js";import"./Input-Ci5DOXXh.js";import"./useTextField-DyhgGonc.js";import"./useFormReset-CY2BFsrw.js";import"./useFormValidation-D4Tsj5aM.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
