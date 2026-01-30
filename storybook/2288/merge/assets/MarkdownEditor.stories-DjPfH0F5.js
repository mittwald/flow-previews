import{j as r,r as x}from"./iframe-CZIIjdGx.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton-DxytxUCJ.js";import{L as s}from"./Label-BCeZc6nh.js";import{B as l}from"./Button-ECMB5KMY.js";import{S as j}from"./Section-B_Dc3QaP.js";import{A as b}from"./ActionGroup-CZoVtz00.js";import{s as d}from"./Action-Bw6l21lc.js";import{M as m}from"./MarkdownEditor-Dhzwco7T.js";import{F as g}from"./FieldError-BwbB6Ytj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-gRVBa7iD.js";import"./flowComponent-fB-3SEHh.js";import"./index-BsTtmOW1.js";import"./clsx-B-dksMZM.js";import"./index-7Gan3Sd3.js";import"./useLocalizedStringFormatter-KKcnPxqh.js";import"./context-B5Owy1-_.js";import"./useRef-DQnLGkfA.js";import"./utils-CzlwFdSi.js";import"./ButtonView-H4guPIkA.js";import"./browser-Cl51s5Ql.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DuyHno6H.js";import"./Hidden-BdFAzqYk.js";import"./IconWarning-CoTQUaDh.js";import"./remote-BLk-VuSO.js";import"./Text-B-NqQsb3.js";import"./EmulatedBoldText-BBfJQ4d1.js";import"./Text-B_tooMjG.js";import"./LoadingSpinner-pfinSAIk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-NmLihlhr.js";import"./ProgressBar-DT5pCrN6.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CmRl_D3U.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DFDeIEOr.js";import"./useFocus-BLv7u4S3.js";import"./useFocusRing-CqWo6_om.js";import"./useFocusable-deUO30SV.js";import"./ContextMenuSection-BEfLxAcM.js";import"./Dialog-Cut31Nqj.js";import"./RSPContexts-BcZ6F9IB.js";import"./OverlayArrow-PNzJR_LP.js";import"./useControlledState-DqlM9bHJ.js";import"./Collection-Bj-AJMsc.js";import"./CollectionBuilder-Bvr2YvjZ.js";import"./SelectionIndicator-Ct_3iIN2.js";import"./Separator-BolqqnXN.js";import"./SelectionManager-BubBwhwk.js";import"./useEvent-Q3wTfOgv.js";import"./useCollator-Bwo3lAGD.js";import"./FocusScope-Biunv2Bw.js";import"./VisuallyHidden-CZJGc0hQ.js";import"./getActionGroupSlot-DTbiEWtg.js";import"./useStatic-BkmFYiV8.js";import"./context-D5Js5cga.js";import"./Markdown-CT4Qn970.js";import"./CodeBlock-DH9oEhtD.js";import"./CopyButton-CeGCaa0i.js";import"./Tooltip-57mD-1cw.js";import"./react-children-utilities-BQJEDfAz.js";import"./Heading-4cAYx9fy.js";import"./Heading-CVLd5xWO.js";import"./InlineCode-ChCUsTgO.js";import"./Link-BEFP1Tne.js";import"./Separator-Bc1I_v-P.js";import"./TextArea-AzS2KUOI.js";import"./TextFieldBase-BOjTSWlp.js";import"./FieldDescription-Boi3M1zl.js";import"./useFieldComponent-DWG920Yi.js";import"./TextField-DmMPP23W.js";import"./FieldError-Cm712Nbp.js";import"./Form-Dyc6bd1B.js";import"./Group-hqq--aRk.js";import"./Input-_8yUIV9x.js";import"./useTextField-BEkzEPOj.js";import"./useFormReset-DwvZDjIx.js";import"./useFormValidation-Bw0zMO4k.js";import"./useControlledHostValueProps-BaRrMsvJ.js";import"./AlertText-C2y0FN89.js";import"./AlertIcon-WrrDZg35.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};
