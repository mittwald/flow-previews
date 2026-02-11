import{r as x,j as r}from"./iframe-BfVXcSwu.js";import{a as c,u as p,F as a,R as l,S as f,t as F}from"./ResetButton-CMcHrOvU.js";import{B as d}from"./Button-BWaSf0b-.js";import{S as j}from"./Section-D8BWSJOo.js";import{A as b}from"./ActionGroup-BhAYVJgP.js";import{s as u}from"./ActionBatch-CJiux6Y0.js";import{C as t}from"./Checkbox-CcwNOL0t.js";import{F as E}from"./FieldError-DHMqnFf9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BmLDKJfM.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./clsx-B-dksMZM.js";import"./index-CeMFBQ52.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./context-BIORzbvt.js";import"./useRef-sZPdMa_K.js";import"./utils-fXq1spu5.js";import"./ButtonView-ZDfm5U5H.js";import"./browser-6PMbihrp.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./Text-DuT5OHtj.js";import"./EmulatedBoldText-D7Dqf59X.js";import"./Text-DLMHe2l_.js";import"./LoadingSpinner-uBvx8mS0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmoQnqed.js";import"./ProgressBar-CsSv4sp0.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_iuRLI1y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CZJvw_K-.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useFocusable-Ct-dNppG.js";import"./ContextMenuSection-CkxzJqxG.js";import"./Dialog-DclKvE_W.js";import"./RSPContexts-BvooXi_W.js";import"./OverlayArrow-DmRhraF5.js";import"./useControlledState-DrmC-rK0.js";import"./Collection-BIYmOT8q.js";import"./CollectionBuilder-B88Jj6se.js";import"./SelectionIndicator-DdESkGsw.js";import"./Separator-C-w1woXG.js";import"./SelectionManager-DDxW4Xvy.js";import"./useEvent-N7DHQy5M.js";import"./useCollator-BH_ZCLE4.js";import"./FocusScope-DYj4AULV.js";import"./VisuallyHidden-CW_0epyS.js";import"./getActionGroupSlot-DFXtDzme.js";import"./useStatic-DbJ3Jck6.js";import"./context-C_1OFCCp.js";import"./useFieldComponent-CiLN9FTD.js";import"./FieldError-DwfvyaXU.js";import"./Form-BvL7gPGk.js";import"./useFormValidation-BRgTVkeU.js";import"./useToggleState-BlNanmhk.js";import"./useFormReset-bqmCiwf6.js";import"./AlertText-DCHQhIzQ.js";import"./AlertIcon-DMbcP_TF.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,wr as __namedExportsOrder,qr as default};
