import{r as h,j as r}from"./iframe-B0qqkRSc.js";import{P as m}from"./PasswordCreationField-oqWHEgGX.js";import{L as u}from"./Label-Bathhgam.js";import{B as g}from"./Button-DJYlHg31.js";import{l as C}from"./IconWarning-BPZvpYf1.js";import{C as w}from"./CopyButton-EXfeH7BC.js";import"./index-nuYtCEEu.js";import"./dynamic-nZoDMFyL.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./clsx-B-dksMZM.js";import"./index-ByDaWYpT.js";import"./useFieldComponent-BdE163vq.js";import"./utils-fD_u--Rs.js";import"./Text-Dr_aqSbj.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-BymZuw_a.js";import"./ClearPropsContext-HA28kjj1.js";import"./Group-n_vUHkH-.js";import"./useFocusRing-6YYb42D4.js";import"./useFocus-D6s77d5g.js";import"./Input-C6zpuO0N.js";import"./Hidden-B-z-l7Br.js";import"./TextField-OdvHxJmp.js";import"./RSPContexts-JwdHw2w4.js";import"./Form-Dg4UU0-2.js";import"./useLabel-sSRBc7PO.js";import"./Label-CSbZp_Tl.js";import"./useTextField-23Ik_eMK.js";import"./useFormReset-CSVsou9A.js";import"./useControlledState-CB1SzgEG.js";import"./useFocusable-BBZGyB5D.js";import"./useFormValidation-Vh8OxI1q.js";import"./Action-CH6Q1TZa.js";import"./context-CL6SRMFP.js";import"./useStatic-CDvxHEcU.js";import"./browser-B1sj-_-y.js";import"./getActionGroupSlot-C0ojBLEj.js";import"./FieldDescription-CX2AXiNE.js";import"./Text-BrTaOrXE.js";import"./EmulatedBoldText-YngYColk.js";import"./Tooltip-DhknQABK.js";import"./ClearPropsContextView-D258LB2U.js";import"./OverlayArrow-B0r4AZS0.js";import"./ProgressBar-COiaV-p2.js";import"./context-D99v7Uqm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./ReactAriaControlledValueFix-DRAhRQZp.js";import"./ContextualHelpTrigger-ze_ZporY.js";import"./Popover-Ckp0SCPP.js";import"./useOverlayController-C7cC56ob.js";import"./OverlayContextProvider-DBk643TH.js";import"./Dialog-Cf8VWc4Y.js";import"./Button-CBrpY8Iv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CRF7-NYn.js";import"./Collection-BezXrWUC.js";import"./CollectionBuilder-CyiVnh3g.js";import"./SelectionIndicator-BJvhD4qq.js";import"./Separator-AYUu4xVa.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./useCollator-D-k20A4-.js";import"./FocusScope-8IhL3Eed.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./OverlayTrigger-CFxq5mHG.js";import"./ControlledNotification-WPO1qXkk.js";import"./Heading-n9cps3Jv.js";import"./Heading-Db08qSfp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-pMeCXi1s.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BhtZJAGg.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
