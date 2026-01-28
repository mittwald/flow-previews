import{r as h,j as r}from"./iframe-DcJYxA4H.js";import{P as m}from"./PasswordCreationField-DdiO5GJ8.js";import{L as u}from"./Label-DYsIDPwe.js";import{B as g}from"./Button-ByRmZgOS.js";import{m as C}from"./IconWarning-C1b-rglK.js";import{C as w}from"./CopyButton-DfEcdqmO.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BeRAROrj.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./clsx-B-dksMZM.js";import"./index-BLaZpk-P.js";import"./Action-Dlz18l4c.js";import"./context-D2f0m16x.js";import"./useStatic-CtzGIMZo.js";import"./browser-DuGwj8Dx.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./FieldDescription-DgkERfUc.js";import"./Text-DtgxB8-I.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./Text-CtAF_MdJ.js";import"./utils-DilzIpMR.js";import"./Tooltip-Bke-m85x.js";import"./OverlayArrow-wMKeeSQ0.js";import"./useFocus-CBKKPZUx.js";import"./ProgressBar-NBTy9B_U.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpAfaget.js";import"./context-qV6jeEP3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-KHZvHeNt.js";import"./useControlledState-BqUYry3y.js";import"./useFocusable-CBOZtalu.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./ContextualHelpTrigger-DApyF8Qb.js";import"./Popover-B9Nlr10i.js";import"./useOverlayController-B1TTUHMS.js";import"./OverlayContextProvider-77-UrxPo.js";import"./Dialog-Dz1EswEt.js";import"./Button-igLlXErA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoiuKGvm.js";import"./RSPContexts-B2T9ptP_.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./VisuallyHidden-5QTr2j1N.js";import"./OverlayTrigger-bsYBPnMH.js";import"./Heading-CIr8mTXG.js";import"./Heading-BwYTefZe.js";import"./useFieldComponent-rnjT2dRC.js";import"./FieldError-B2Tu46Cr.js";import"./FieldError-BmNSHu0e.js";import"./AlertText-DzwHJxKU.js";import"./AlertIcon-5jttAq4b.js";import"./useControlledHostValueProps-B3OONvK6.js";import"./TextField-D_iglgqs.js";import"./Form-C2ZrGthD.js";import"./Group--doBvykr.js";import"./Input-Cz4fvs1s.js";import"./useTextField-DpGaW4Tx.js";import"./useFormReset-BxLymg31.js";import"./useFormValidation-CxhT4ib7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./remote-Bz3vE1W1.js";import"./react-children-utilities-BoW112D4.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
