import{r as h,j as r}from"./iframe-bJ_6fidF.js";import{P as m}from"./PasswordCreationField-Cj88vOA1.js";import{L as u}from"./Label-jHNg7W3d.js";import{B as g}from"./Button-BnsDuM8z.js";import{n as C}from"./IconWarning-BRVy1IKm.js";import{C as w}from"./CopyButton-Bfg0R5ht.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B98QrFwh.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./clsx-B-dksMZM.js";import"./index-DZS8fxXA.js";import"./Action-BNfya_PE.js";import"./context-CiNdmr3l.js";import"./useStatic-BZPvcAPs.js";import"./browser-CDYbiXXK.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./FieldDescription-CvkvDToJ.js";import"./Text-38_GgC7q.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./Text-BK6SVPNL.js";import"./utils-2JACcOpK.js";import"./Tooltip-Dgd1avx8.js";import"./OverlayArrow-BzF-2SH6.js";import"./useFocus-DCEJi5pX.js";import"./ProgressBar-B339qPNf.js";import"./Label-ITTSHdKZ.js";import"./Hidden-D-D3cT6t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./context-BRobVGip.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DiZTTo94.js";import"./useFocusable-s9iArTw-.js";import"./useFocusRing-BfXNN7l5.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./ContextualHelpTrigger-DTgIt-Nu.js";import"./Popover-SIfmV_cN.js";import"./useOverlayController-ChRaAOaJ.js";import"./OverlayContextProvider-CnhKGutL.js";import"./Dialog-DXm38-Rd.js";import"./Button-CFn0JrTH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DUWDHSym.js";import"./RSPContexts-Du7Xg6Jz.js";import"./Collection-BtgF6RLC.js";import"./CollectionBuilder-CsK04tEC.js";import"./SelectionIndicator-smcarjhT.js";import"./Separator-DIVM-WQV.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./VisuallyHidden-BLAg7qtf.js";import"./OverlayTrigger-DxVxjcsU.js";import"./Heading-DKGadcRU.js";import"./Heading-Bbyv6ScP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-uPh6Au6A.js";import"./FieldError-D9NzXF8I.js";import"./FieldError-BXkLcNaX.js";import"./useControlledHostValueProps-TNG0Fwfb.js";import"./TextField-D6yUSkG5.js";import"./Form-u1KpLyfA.js";import"./Group-DIFUJtkh.js";import"./Input-Cc8ouKNt.js";import"./useTextField-BE6Uy-6e.js";import"./useFormReset-nMFTazsC.js";import"./useFormValidation-CfG5OslG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Da58qKyF.js";import"./remote-BGnMaeOw.js";import"./react-children-utilities-pHPFqe5c.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
