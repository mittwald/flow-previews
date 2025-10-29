import{r as h,j as r}from"./iframe-Tz0J7D4Y.js";import{P as m}from"./PasswordCreationField-BL7_k8HV.js";import{L as u}from"./Label-B5yMZfoe.js";import{B as g}from"./Button-DpdNCW8h.js";import{z as C}from"./IconWarning-GPTcuJJ8.js";import{C as w}from"./CopyButton-BvW8QhKS.js";import"./index-nuYtCEEu.js";import"./dynamic-CoftMrEe.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./clsx-B-dksMZM.js";import"./index-DcQDRvJj.js";import"./useFieldComponent-C0OSANtm.js";import"./utils-ja91N2Nx.js";import"./Text-c129sBMT.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";import"./Group-BWtr-S31.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocus-rnV-N6wP.js";import"./Input-fTg0rFoa.js";import"./Hidden-DjVegiGf.js";import"./TextField-CpTqvAvM.js";import"./RSPContexts-DMflUE_X.js";import"./Form-CgZM-WfL.js";import"./useLabel-Uehxuchb.js";import"./Label-CPyZQCy0.js";import"./useTextField-BJgUARR-.js";import"./useFormReset-Dr7kbm5c.js";import"./useControlledState-JfMoTEl5.js";import"./useFocusable-CEtDZmZ1.js";import"./useFormValidation-BhAnQ22o.js";import"./Action-DDvM_T4v.js";import"./context-CCjUHDCq.js";import"./useStatic-BDAMVNvv.js";import"./browser-D-jX3MAX.js";import"./getActionGroupSlot-DlZypVxI.js";import"./FieldDescription-DfQkIZob.js";import"./Text-C3A_eB8w.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Tooltip-DTgTRMpz.js";import"./ClearPropsContextView-CQKiSpfA.js";import"./OverlayArrow-Dm3PErwP.js";import"./ProgressBar-netLLnC9.js";import"./context-B1lt5Uf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./ReactAriaControlledValueFix-rP8sVaUU.js";import"./ContextualHelpTrigger-Bq_GJ0ZO.js";import"./Popover-Js2RBZWb.js";import"./OverlayContextProvider-0YowFgKZ.js";import"./Dialog-BCA3xQKB.js";import"./Button-BC9SKpFI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dhdcn6rN.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";import"./OverlayTrigger-CPl48xIm.js";import"./ControlledNotification-36h8tVEY.js";import"./Heading-BX6R3J-D.js";import"./Heading-BOPXGrjC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-BVVk2jvr.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BMsTEO2Y.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
