import{r as h,j as r}from"./iframe-BTx5vfX7.js";import{L as u}from"./Label-D_U9lVoj.js";import{B as g}from"./Button-D0j5fRAE.js";import"./IconChevronDown-Bn-1yhHQ.js";import{I as C}from"./IconDanger-C580gt5j.js";import{C as w}from"./CopyButton-CQm8f443.js";import{P as m}from"./PasswordCreationField-D5Sl1PsH.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQbG36RI.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./context-B8-2fWdM.js";import"./Label-nt-Mf4T_.js";import"./utils-Rd_MYUg3.js";import"./Hidden-B6Npv2sL.js";import"./IconX-DrrrdYIY.js";import"./IconCheck-C5Vwpnc3.js";import"./Text-DtYTBG7c.js";import"./browser-D9-bvGMx.js";import"./EmulatedBoldText-B89XKop2.js";import"./Text-LwG1QgpY.js";import"./LoadingSpinner-Dr6BVqO2.js";import"./ariaLive-BGIgGOOV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-CDkUNGK4.js";import"./Button-D8R90X95.js";import"./ProgressBar-DnkhtDlt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CAHdnPVW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g9jBnoDE.js";import"./useFocus-DM7IXQDx.js";import"./useFocusRing-DjSlkPuN.js";import"./useFocusable-_zqulMQl.js";import"./IconCopy-D5yuTptk.js";import"./Tooltip-C04zhZoP.js";import"./OverlayArrow-eT6vjoGK.js";import"./useControlledState-DNSedTkS.js";import"./react-children-utilities-DFsjoMJS.js";import"./Action-CSkp_lnv.js";import"./useStatic-BtxQ9m_K.js";import"./getActionGroupSlot-D_UK-737.js";import"./context-q9yNmKLz.js";import"./dynamic-D8ImZldj.js";import"./FieldDescription-ylXyloZw.js";import"./TranslationProvider-BlPJCsJC.js";import"./IconCircleCheck-gBu7lCqJ.js";import"./ContextualHelpTrigger-CZDxKxrE.js";import"./Popover-DDEbweSb.js";import"./OverlayContextProvider-Zofpalb2.js";import"./Dialog-CQOoDKQ_.js";import"./RSPContexts-BtkGYzrU.js";import"./Collection-Bq23K6rA.js";import"./CollectionBuilder-BJtlCmWC.js";import"./SelectionIndicator-BGe0ubEQ.js";import"./Separator-hpMdbhNe.js";import"./SelectionManager-ix7t88Nr.js";import"./useEvent-B9LXMUdK.js";import"./useCollator-BFlHC0Dr.js";import"./FocusScope-ConnSCr6.js";import"./VisuallyHidden-xosq-5v9.js";import"./useOverlayController-DsxweEKs.js";import"./OverlayTrigger-_D40Ch-f.js";import"./IconInfo-C0q9t7Z6.js";import"./Heading-_rP_UYQu.js";import"./Heading-BDRq_a2q.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-a0kyTMto.js";import"./FieldError-z-ClA5kd.js";import"./FieldError-I1Bua9KH.js";import"./useControlledHostValueProps-DL2SxzgW.js";import"./TextField-C8z_e7UZ.js";import"./Form-BpaxdIp-.js";import"./Group-C7X32I-5.js";import"./Input-DfioYz8I.js";import"./useTextField-ClY4yZY-.js";import"./useFormReset-C2fqGBKA.js";import"./useFormValidation-CWpL65wq.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
