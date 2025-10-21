import{r as h,j as r}from"./iframe-CPZmCQj-.js";import{P as m}from"./PasswordCreationField-CEn8dIOm.js";import{L as u}from"./Label-Cl3ovliO.js";import{B as g}from"./Button-CO0ZKbGC.js";import{l as C}from"./IconWarning-BHYwQlMQ.js";import{C as w}from"./CopyButton-BFCDEAnb.js";import"./index-nuYtCEEu.js";import"./dynamic-C0WBJwRj.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./clsx-B-dksMZM.js";import"./index-Dx50g0n6.js";import"./useFieldComponent-ZdrCImE8.js";import"./utils-DbTuSxgD.js";import"./Text-ev6zCoFy.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BpPrmtLj.js";import"./ClearPropsContext-DZV6h8aR.js";import"./Group-Csdn_P-J.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocus-DSlim6kP.js";import"./Input-CQkI7-zw.js";import"./Hidden-klXcLh_8.js";import"./TextField-BQ8NGeCA.js";import"./RSPContexts-gqgXzzK-.js";import"./Form-KkxpJ3qz.js";import"./useLabel-DeJHfKxc.js";import"./Label-DhGaeBi-.js";import"./useTextField-eZki_XjH.js";import"./useFormReset-BZ0LqTvh.js";import"./useControlledState-BjliE2JI.js";import"./useFocusable-1MtRKrlE.js";import"./useFormValidation-D952ndYN.js";import"./Action-C3sEJruT.js";import"./context-7pI23nLQ.js";import"./useStatic-BEtxpUKF.js";import"./browser-Vbuqg8Bp.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./FieldDescription-BFKEApQk.js";import"./Text-cGw-MBFK.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Tooltip-DXpY6bxY.js";import"./ClearPropsContextView-C8p-nSKM.js";import"./OverlayArrow-K4lD0v3r.js";import"./ProgressBar-CVs_D_-w.js";import"./context-vwBy6rn7.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./ReactAriaControlledValueFix-wp7kzKG1.js";import"./ContextualHelpTrigger-C2oqJ7QZ.js";import"./Popover-B5_3Py3v.js";import"./useOverlayController-DCVLgcvS.js";import"./OverlayContextProvider-Bz_eXqqG.js";import"./Dialog-DJw1jmu7.js";import"./Button-BLjAzLtk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-6Qpgo4V0.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./VisuallyHidden-m06vE6aQ.js";import"./OverlayTrigger-Cze0ok7i.js";import"./ControlledNotification-EmmTuegF.js";import"./Heading-CTnOUdED.js";import"./Heading-3nGV8T5A.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DfAGrzYU.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cx2qWY44.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
