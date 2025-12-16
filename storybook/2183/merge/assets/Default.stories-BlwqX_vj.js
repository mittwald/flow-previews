import{r as h,j as r}from"./iframe-BFixO3jI.js";import{L as u}from"./Label-DDQhNyeb.js";import{B as g}from"./Button-yJ8r8LHg.js";import"./IconApp-DCuSf9pl.js";import{I as C}from"./IconDanger--IOlURNT.js";import{C as w}from"./CopyButton-DRUlWWBy.js";import{P as m}from"./PasswordCreationField-Bvh2R4BP.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./Label-dlScXtXx.js";import"./utils-DlL1jtSe.js";import"./Hidden-eVS00tin.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./Text-ZinnvgDr.js";import"./browser-CbH1E9WO.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-DXDa28-R.js";import"./Button-BpPmVpYb.js";import"./ProgressBar-Dekjp8mr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";import"./IconCopy-DOGehKal.js";import"./Tooltip-D3km2HF1.js";import"./OverlayArrow-DpRQz6k4.js";import"./useControlledState-DTavY4xM.js";import"./react-children-utilities-Crbfgxvb.js";import"./Action-oG95m3o9.js";import"./useStatic-CTmMZwD4.js";import"./getActionGroupSlot--aYDVJlg.js";import"./context-tjjAcI-d.js";import"./dynamic-hYW7P0NC.js";import"./FieldDescription-2Pf141Y1.js";import"./TranslationProvider-C9ZZSSwq.js";import"./IconCircleCheck-BVQ8E_cV.js";import"./ContextualHelpTrigger-2T9cz4sa.js";import"./Popover-8G6V34Cx.js";import"./OverlayContextProvider-CauyJkX9.js";import"./Dialog-BmhfU4NV.js";import"./RSPContexts-Due0r2TQ.js";import"./Collection-Bj9WVIl1.js";import"./CollectionBuilder-DtEqK8JD.js";import"./SelectionIndicator-CPYDzpXH.js";import"./Separator-ClPm6wme.js";import"./SelectionManager-BbesEsUN.js";import"./useEvent-BtXn_qPN.js";import"./useCollator-YeysG0II.js";import"./FocusScope-jWcc3e5S.js";import"./VisuallyHidden-DWlHhef6.js";import"./useOverlayController-BbOo94IO.js";import"./OverlayTrigger-D7zIM2h9.js";import"./IconInfo-CaC3B8PP.js";import"./Heading-BawFPlTW.js";import"./Heading-DrjY6ZHA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-mJg7O_gG.js";import"./FieldError-DNu2tCaK.js";import"./FieldError-CjKulGDW.js";import"./useControlledHostValueProps-CqOtxoaB.js";import"./TextField-ssxgaXWt.js";import"./Form-PAQ4bQ0C.js";import"./Group-CzFM72Xs.js";import"./Input-_A_Ox9j0.js";import"./useTextField-B20xVaBF.js";import"./useFormReset-De7QdeR1.js";import"./useFormValidation-B69zYJzr.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
