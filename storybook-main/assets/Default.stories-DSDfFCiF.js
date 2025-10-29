import{r as h,j as r}from"./iframe-BO4how7V.js";import{P as m}from"./PasswordCreationField-c9CAzkb5.js";import{L as u}from"./Label-Dg0lhbqP.js";import{B as g}from"./Button-BRSyykRx.js";import{z as C}from"./IconWarning-riXPckyc.js";import{C as w}from"./CopyButton-mhXxMLbT.js";import"./index-nuYtCEEu.js";import"./dynamic-DPbzu-N4.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./clsx-B-dksMZM.js";import"./index-CzMnHAtb.js";import"./useFieldComponent-CjWlILZl.js";import"./utils-BpiWkIEZ.js";import"./Text-BwppUNzg.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";import"./Group-BtVQV9Eb.js";import"./useFocusRing-cZUm55wA.js";import"./useFocus-CFrGhCIR.js";import"./Input-C8s0JVaR.js";import"./Hidden-cuI6d2d2.js";import"./TextField-LacAyjo3.js";import"./RSPContexts-C8zlTsZJ.js";import"./Form-hZ8SLhDT.js";import"./useLabel-R_XjJcRU.js";import"./Label-HRe2PJ1I.js";import"./useTextField-shmblCKI.js";import"./useFormReset-DKBI04Qj.js";import"./useControlledState-Dy2CU0s2.js";import"./useFocusable-Dm6zCBge.js";import"./useFormValidation-BHRl0fwc.js";import"./Action-BcCpRMgW.js";import"./context-DS1PliZx.js";import"./useStatic-BYOxqZVF.js";import"./browser-9RCZAQdm.js";import"./getActionGroupSlot-DNMgIyad.js";import"./FieldDescription-CJgVFelr.js";import"./Text-k4VuksKp.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./Tooltip-DRh9OIt9.js";import"./ClearPropsContextView-BZw5hC3x.js";import"./OverlayArrow-6T1AUm1N.js";import"./ProgressBar-Cb_Q8Aey.js";import"./context-n99Hur2q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./ReactAriaControlledValueFix-BjDsGSLB.js";import"./ContextualHelpTrigger-D03xwq79.js";import"./Popover-DBKwSEaj.js";import"./OverlayContextProvider-B4IpX5aH.js";import"./Dialog-9TwJqweV.js";import"./Button-T2VJnm-n.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C-n8mYYh.js";import"./Collection-7Jhx6ozR.js";import"./CollectionBuilder-NvmcR0Ec.js";import"./SelectionIndicator-qPgcj5gy.js";import"./Separator-CDyVGVx6.js";import"./SelectionManager-CUJzsbBx.js";import"./useEvent-BsUSX18g.js";import"./useCollator-fJkQzVou.js";import"./FocusScope-BDHPNMgd.js";import"./VisuallyHidden-BldPGQAk.js";import"./OverlayTrigger-CxD_iiL6.js";import"./ControlledNotification-2HQhcMSc.js";import"./Heading-CDkPtIgK.js";import"./Heading-DCJd85qW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-DsAh2tpb.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Bt5VpGJB.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
