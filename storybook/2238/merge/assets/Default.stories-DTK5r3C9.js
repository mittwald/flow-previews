import{r as h,j as r}from"./iframe-DB4UlQ_F.js";import{P as m}from"./PasswordCreationField-CPRZwrS1.js";import{L as u}from"./Label-D60b9GFw.js";import{B as g}from"./Button-DYIAULzM.js";import{n as C}from"./IconWarning-D6sMwWyV.js";import{C as w}from"./CopyButton-DWm7MltM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CewJ3DJw.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./clsx-B-dksMZM.js";import"./index-BSqJ1-JW.js";import"./Action-D44Jy6S7.js";import"./context-b0VtR6po.js";import"./useStatic-BsW-2tBw.js";import"./browser-CMEWPYW9.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./FieldDescription-DVjEBj0_.js";import"./Text-CvhufvNl.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./utils-B6Q0cVYp.js";import"./Tooltip-BuJGYuYE.js";import"./OverlayArrow-BH8gVRz-.js";import"./useFocus-mLt6Jcka.js";import"./ProgressBar-BtSLHqLj.js";import"./Label-CzwPVXKy.js";import"./Hidden-BofTzQhQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./context-BeH9c2u_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-2lUl0kro.js";import"./useFocusable-BfPamkyW.js";import"./useFocusRing-BToYuWbv.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./ContextualHelpTrigger-1OCknExN.js";import"./Popover-C9bomiWQ.js";import"./useOverlayController-BTqpKE5m.js";import"./OverlayContextProvider-CZHDlMnp.js";import"./Dialog-B4nT46da.js";import"./Button-L-mN_PGj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CDGll4uD.js";import"./RSPContexts-Br1rngEm.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./OverlayTrigger-qoBp8HgP.js";import"./Heading-B71UuISa.js";import"./Heading-BIcTvsYt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Dp69OqtL.js";import"./FieldError-7mdFLW8I.js";import"./FieldError-CegzLELq.js";import"./useControlledHostValueProps-DsyFnxnI.js";import"./TextField-D0kY72jS.js";import"./Form-PeScrtUS.js";import"./Group-DyD1FYug.js";import"./Input-DgHFnA4a.js";import"./useTextField-BlrPE0Ip.js";import"./useFormReset-zmgaZOpR.js";import"./useFormValidation-Bt0uBrAk.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BUzKTNdb.js";import"./remote-DOdcl-CB.js";import"./react-children-utilities-DAHI086P.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
