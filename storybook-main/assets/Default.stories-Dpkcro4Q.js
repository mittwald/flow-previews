import{r as h,j as r}from"./iframe-CZIIjdGx.js";import{P as m}from"./PasswordCreationField-BEErR4nT.js";import{L as u}from"./Label-BCeZc6nh.js";import{B as g}from"./Button-ECMB5KMY.js";import{m as C}from"./IconWarning-CoTQUaDh.js";import{C as w}from"./CopyButton-CeGCaa0i.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-gRVBa7iD.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./clsx-B-dksMZM.js";import"./index-7Gan3Sd3.js";import"./Action-Bw6l21lc.js";import"./context-D5Js5cga.js";import"./useStatic-BkmFYiV8.js";import"./browser-Cl51s5Ql.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./FieldDescription-Boi3M1zl.js";import"./Text-B-NqQsb3.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Text-B_tooMjG.js";import"./utils-CzlwFdSi.js";import"./Tooltip-57mD-1cw.js";import"./OverlayArrow-PNzJR_LP.js";import"./useFocus-BLv7u4S3.js";import"./ProgressBar-DT5pCrN6.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CmRl_D3U.js";import"./context-B5Owy1-_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CqWo6_om.js";import"./useControlledState-DqlM9bHJ.js";import"./useFocusable-deUO30SV.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./ContextualHelpTrigger-CZp-5RO9.js";import"./Popover-B4mVvqXX.js";import"./useOverlayController-BPxzacO6.js";import"./OverlayContextProvider-Dc5mpEmz.js";import"./Dialog-Cut31Nqj.js";import"./Button-NmLihlhr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFDeIEOr.js";import"./RSPContexts-BcZ6F9IB.js";import"./Collection-Bj-AJMsc.js";import"./CollectionBuilder-Bvr2YvjZ.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./Separator-BolqqnXN.js";import"./SelectionManager-BubBwhwk.js";import"./useEvent-Q3wTfOgv.js";import"./useCollator-Bwo3lAGD.js";import"./FocusScope-Biunv2Bw.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./OverlayTrigger-By5gsgrK.js";import"./Heading-4cAYx9fy.js";import"./Heading-CVLd5xWO.js";import"./useFieldComponent-DWG920Yi.js";import"./FieldError-BwbB6Ytj.js";import"./FieldError-Cm712Nbp.js";import"./AlertText-C2y0FN89.js";import"./AlertIcon-WrrDZg35.js";import"./useControlledHostValueProps-BaRrMsvJ.js";import"./TextField-DmMPP23W.js";import"./Form-Dyc6bd1B.js";import"./Group-hqq--aRk.js";import"./Input-_8yUIV9x.js";import"./useTextField-BEkzEPOj.js";import"./useFormReset-DwvZDjIx.js";import"./useFormValidation-Bw0zMO4k.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-pfinSAIk.js";import"./remote-BLk-VuSO.js";import"./react-children-utilities-BQJEDfAz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
