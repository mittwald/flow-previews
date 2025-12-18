import{r as h,j as r}from"./iframe-C9fRvTrj.js";import{L as u}from"./Label-BRzY6dIy.js";import{B as g}from"./Button-BYUXEkA_.js";import"./IconChevronDown-D_WjmewV.js";import{I as C}from"./IconDanger-Cax3VcTl.js";import{C as w}from"./CopyButton-IMmCu_BS.js";import{P as m}from"./PasswordCreationField-BZHyVuUN.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./index-CLvMUAwA.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./context-Bv4btMDO.js";import"./Label-DetJ9FyC.js";import"./utils-CPkfOZj3.js";import"./Hidden-D46P9k-k.js";import"./IconX-BNOWC-zb.js";import"./IconCheck-DKwGf3uB.js";import"./Text-D323xmXD.js";import"./browser-CUSAF5aW.js";import"./EmulatedBoldText-CPA2fMYQ.js";import"./Text-BRNikD3K.js";import"./LoadingSpinner-CwlmKrOH.js";import"./ariaLive-ZUjptcOn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-BH-MD2MY.js";import"./Button-CwWpYEN0.js";import"./ProgressBar-DI2IDnVu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-KJitgciI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_4yw8jQQ.js";import"./useFocus-bSaDUtch.js";import"./useFocusRing-cRMmIaF9.js";import"./useFocusable-BSBdu-8d.js";import"./IconCopy-BkvIccIO.js";import"./Tooltip-ssf35lN1.js";import"./OverlayArrow-iEWyRd5r.js";import"./useControlledState-BGzazcEz.js";import"./react-children-utilities-CN1hNj7O.js";import"./Action-DsOzwT3Y.js";import"./useStatic-0FUtvL5U.js";import"./getActionGroupSlot-Dhkl0Gym.js";import"./context-CrKYMuPA.js";import"./dynamic-C1VXiIMv.js";import"./FieldDescription-D93KtgO4.js";import"./TranslationProvider-DQ3lfXrb.js";import"./IconCircleCheck-Bi756DUt.js";import"./ContextualHelpTrigger-71Am93L7.js";import"./Popover-DDuwRsLL.js";import"./OverlayContextProvider-CHFdaBg3.js";import"./Dialog-CyDp-GbU.js";import"./RSPContexts-CUBdls5w.js";import"./Collection-b6pGDgVm.js";import"./CollectionBuilder-BloNGw2M.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./Separator-OMU_Us2E.js";import"./SelectionManager-CtYNKPbJ.js";import"./useEvent-CG8oG6I6.js";import"./useCollator-RZF5ztqV.js";import"./FocusScope-CuzzTLeS.js";import"./VisuallyHidden-FzUX7Nba.js";import"./useOverlayController-MVFXohJh.js";import"./OverlayTrigger-DYVHY-Wc.js";import"./IconInfo-DW6nA0fy.js";import"./Heading-t9VUyPqr.js";import"./Heading-Ujz6i7vC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-jGlg5Icl.js";import"./FieldError-Bd58Epno.js";import"./FieldError-BSiYpFWr.js";import"./useControlledHostValueProps-DvGioMkI.js";import"./TextField-CHn7zTiT.js";import"./Form-FOSkHwoF.js";import"./Group-DtY3YVtI.js";import"./Input-Cvlim89t.js";import"./useTextField-BpilKR79.js";import"./useFormReset-CS_NLM25.js";import"./useFormValidation-BLFhZbJU.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
