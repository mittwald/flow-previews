import{r as h,j as r}from"./iframe-BXRQqxRF.js";import{P as m}from"./PasswordCreationField-CYVVyxxL.js";import{L as u}from"./Label-Dw-KVlkl.js";import{B as g}from"./Button-C0lHC6Ss.js";import"./IconChevronDown-CrvlnwL_.js";import{I as C}from"./IconDanger-B1opIkZE.js";import{C as w}from"./CopyButton-Bn2GGt-Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLAkwN-B.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./clsx-B-dksMZM.js";import"./index-L-QBIyGf.js";import"./FieldDescription-ClR02c0z.js";import"./Text-KdIVkcjD.js";import"./browser-JidmR7ov.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./Text-gjZ6zRux.js";import"./utils-W_wb_I6t.js";import"./Tooltip-D1qfBi4_.js";import"./OverlayArrow-Bw8tO6jb.js";import"./useFocus-BYFFuSzP.js";import"./ProgressBar-Bu0Rvbqr.js";import"./Label-x3iOqkWL.js";import"./Hidden-CXQdbF07.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwfjYi-F.js";import"./context-Cfx64TkI.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DF5Prxi4.js";import"./useFocusable-Bn1h_ZhV.js";import"./useFocusRing-mlfcq67k.js";import"./Action-Co1N5x-Q.js";import"./useStatic-CDs84s8f.js";import"./getActionGroupSlot-BkAF4Kgk.js";import"./context-BJK7zy3l.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./TranslationProvider-DsOkn-XP.js";import"./IconCircleCheck-BBs_PA-3.js";import"./ContextualHelpTrigger-3c08BWr7.js";import"./Popover-GxzCjI8T.js";import"./OverlayContextProvider-yBtgBbFr.js";import"./Dialog-CBkTvNeJ.js";import"./Button-DlzDIGUo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DljSeqhE.js";import"./RSPContexts-DBwrNRvT.js";import"./Collection-XN92eLRe.js";import"./CollectionBuilder-BhdaTyDp.js";import"./SelectionIndicator-CTy77egS.js";import"./Separator-D8Gi_H7t.js";import"./SelectionManager-Bic6iT0p.js";import"./useEvent-D_VKrqjP.js";import"./useCollator-CBeXlDOU.js";import"./FocusScope-CDou2-z6.js";import"./VisuallyHidden-DvIs4LpA.js";import"./useOverlayController-dv6jX9Vt.js";import"./OverlayTrigger-BscE9StD.js";import"./IconInfo-Hjc9qcXr.js";import"./Heading-DhvPWVC0.js";import"./Heading-DOlSIdLx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-y0XT-9Ew.js";import"./FieldError-B377POAw.js";import"./FieldError-Cw_rtSeq.js";import"./useControlledHostValueProps-PQJrtPeA.js";import"./TextField-BXAqxEj9.js";import"./Form-k8rVjsdW.js";import"./Group-C8fsqvgi.js";import"./Input-COh9rz8g.js";import"./useTextField-Dm9Ssc5y.js";import"./useFormReset-BZsjU1hv.js";import"./useFormValidation-tPOMEO92.js";import"./Label.module-CUYTf9Jc.js";import"./IconX-DvHkgbt1.js";import"./IconCheck-BZ_7T0kt.js";import"./LoadingSpinner-Qtcd5nhZ.js";import"./ariaLive-BBnf0-S_.js";import"./remote-B9tgrHbM.js";import"./IconCopy-NIpmL1Nk.js";import"./react-children-utilities-DNQDIRWR.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
