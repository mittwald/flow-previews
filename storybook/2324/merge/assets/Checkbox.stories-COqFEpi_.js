import{r as x,j as r}from"./iframe-CdHyQgwh.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-DIOtYJtW.js";import{B as d}from"./Button-B83uT_W5.js";import{S as j}from"./Section-ZayZowyU.js";import{A as b}from"./ActionGroup-CFPYc31d.js";import{s as u}from"./ActionBatch-DZLzYfk2.js";import{C as t}from"./Checkbox-DpQo2Dpa.js";import{F as E}from"./FieldError-BmlEdUcT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CJo41kua.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./clsx-B-dksMZM.js";import"./index--KyPRnlY.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./context--lHaHpmz.js";import"./ActionGroupView-CSh8Io46.js";import"./Content-CeVPKDmn.js";import"./Heading-ChBOMWT5.js";import"./Heading-CxNojwif.js";import"./RSPContexts-DthjkPm0.js";import"./utils-B0AChKxF.js";import"./Text-CG9Jqgcw.js";import"./browser-CBJMDWdB.js";import"./EmulatedBoldText-C0e2olgf.js";import"./Text-CFtcNM5e.js";import"./Modal-DZut7RYA.js";import"./Overlay-BZoP2uMy.js";import"./useOverlayController-Cw4NEVT3.js";import"./useStatic-BBvdmwt_.js";import"./OverlayContextProvider-CjArtki4.js";import"./LoadingSpinner-DJPu7RL-.js";import"./IconWarning-DGc3SgEa.js";import"./remote-BRyh19SP.js";import"./Dialog-DGMm3KA5.js";import"./Button-C8XSc9bU.js";import"./ProgressBar-DEPx6SkE.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DXx1BftH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIa0iaS-.js";import"./useFocus-D4xdQDkq.js";import"./useFocusRing-Ba3uGuMn.js";import"./useFocusable-CIZyv2_u.js";import"./OverlayArrow-Lhpnfcsg.js";import"./useControlledState-D2jLiTCX.js";import"./Collection-kJPXxCPQ.js";import"./CollectionBuilder-7T-5iTGH.js";import"./SelectionIndicator-DV4fwApE.js";import"./Separator-DJ7zA3-I.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./useCollator-DHN-qUKB.js";import"./FocusScope-OuWnR4TG.js";import"./VisuallyHidden-U7btBlyO.js";import"./ButtonView-D4pWD16C.js";import"./Flex-B7-1TfDw.js";import"./useRef-BBhsdY2o.js";import"./ContextMenuSection-1USXN4JB.js";import"./getActionGroupSlot-Bv8pOp0w.js";import"./useFieldComponent-t62DY9AA.js";import"./FieldError-BTLVyZmC.js";import"./Form-BHZ6w-7V.js";import"./useFormValidation-8M-A-L7s.js";import"./useToggleState-De476LQE.js";import"./useFormReset-D88R_CF2.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
