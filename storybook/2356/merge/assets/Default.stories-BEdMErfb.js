import{r as h,j as r}from"./iframe-CCG9iH9q.js";import{P as m}from"./PasswordCreationField-Bv5s-pxE.js";import{L as u}from"./Label-ZsZ9_LuX.js";import{B as g}from"./Button-DszeRQWk.js";import{m as C}from"./IconWarning-CKuAFgzi.js";import{C as w}from"./CopyButton-otI5Rga2.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DVtvH1qO.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./clsx-B-dksMZM.js";import"./index-DO8RY2JU.js";import"./ActionBatch-BwDlid4r.js";import"./useOverlayController-B8ExGaeg.js";import"./useStatic-DZaf9Eli.js";import"./browser-DlPLk6Tx.js";import"./getActionGroupSlot-ZV4GNxDq.js";import"./FieldDescription-CUhsst8_.js";import"./Text-CqiRKP9V.js";import"./EmulatedBoldText-DGQ67tbz.js";import"./Text-CsZp0s5y.js";import"./utils-BqjYSsY0.js";import"./Tooltip-DcbpHxFv.js";import"./OverlayArrow-O5F9zlGE.js";import"./useFocus-DQtiJNjW.js";import"./ProgressBar-NeUI6tVT.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWkbOtE9.js";import"./context-BOE3Zx9s.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DEew3vp8.js";import"./useControlledState-DQCduMNG.js";import"./useFocusable-C9iBP5e4.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./ContextualHelpTrigger-CvbljZX9.js";import"./Popover-B7zmrX8_.js";import"./OverlayContextProvider-CJwB4ZlW.js";import"./Dialog-Bvzkt_Dq.js";import"./Button-BmDLEeLi.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C9nCYq1D.js";import"./RSPContexts-Cj7-Wn-7.js";import"./Collection-BppDt4cQ.js";import"./CollectionBuilder--dOyJv1i.js";import"./SelectionIndicator-CG-R7p16.js";import"./Separator-IezdCtOl.js";import"./SelectionManager-BQan4uct.js";import"./useEvent-CqAdQvXR.js";import"./useCollator-C1I9ImG_.js";import"./FocusScope-CGp51FRM.js";import"./VisuallyHidden-B8BDvwZm.js";import"./OverlayTrigger-BffquD90.js";import"./Heading-DiIAAbeS.js";import"./Heading-DVHr5WNM.js";import"./useFieldComponent-BO1aRG8J.js";import"./FieldError-C6WCZxmP.js";import"./FieldError-IbwLA4qq.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";import"./useControlledHostValueProps-C1I4WMgS.js";import"./TextField-CvZXl8ia.js";import"./Form-CaeCkx3f.js";import"./Group-BkubaCeK.js";import"./Input-mPx5hz5Z.js";import"./useTextField-CqMkN_4n.js";import"./useFormReset-DOloisqU.js";import"./useFormValidation-Jbp24I-0.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-GybBfiLr.js";import"./remote-BNVNDlip.js";import"./react-children-utilities-0W3aq1f7.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
