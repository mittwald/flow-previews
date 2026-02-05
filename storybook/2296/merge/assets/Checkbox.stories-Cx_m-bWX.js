import{j as r,r as x}from"./iframe-DdPUg3l1.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-Bs1fiSSt.js";import{B as d}from"./Button-BArDp6jY.js";import{S as j}from"./Section-B-inExSs.js";import{A as b}from"./ActionGroup-DKw0Osps.js";import{s as u}from"./Action-C8Qj_gPz.js";import{C as t}from"./Checkbox-CN5DnwSt.js";import{F as E}from"./FieldError-Brd6jVZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-nfXH0DAB.js";import"./flowComponent-B28SqkEE.js";import"./index-DRxXhfH_.js";import"./clsx-B-dksMZM.js";import"./index-DfF1Hh-7.js";import"./useLocalizedStringFormatter-uZq7iOxf.js";import"./context-eo9HPzgD.js";import"./useRef-eASsJvtI.js";import"./utils-CZc2hRnH.js";import"./ButtonView-BofU8H8L.js";import"./browser-CdIpgqNn.js";import"./IconWarning-CBjvo3Bl.js";import"./remote-C_Lvi_2k.js";import"./Text-DjGrgiDc.js";import"./EmulatedBoldText-DdQb5yyc.js";import"./Text-JRLUlLnO.js";import"./LoadingSpinner-CrAIHNN2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CezSw_uu.js";import"./ProgressBar-CbaeLh44.js";import"./Label-DhA6S4Mt.js";import"./Hidden-9XxNu-Hn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DfTMKk9x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4aurJT7.js";import"./useFocus-DOBDf5za.js";import"./useFocusRing-B1QHji0w.js";import"./useFocusable-Dd42TuHo.js";import"./ContextMenuSection-CdzHr0DY.js";import"./Dialog-B4itYT93.js";import"./RSPContexts-DWbGf7NE.js";import"./OverlayArrow-CejAifjZ.js";import"./useControlledState-vD92hbDx.js";import"./Collection-C0yC48YX.js";import"./CollectionBuilder-dja0_mRS.js";import"./SelectionIndicator-DB3-93Os.js";import"./Separator-DPd0--zN.js";import"./SelectionManager-CZbTqcCP.js";import"./useEvent-ZVXwlSCj.js";import"./useCollator-C9Olqd5e.js";import"./FocusScope-DY6t_O03.js";import"./VisuallyHidden-DYHUXKrU.js";import"./getActionGroupSlot-WBqMZ1Fi.js";import"./useStatic-BSymBvZm.js";import"./context-Dvh-zisW.js";import"./useFieldComponent-CO5pYfeq.js";import"./FieldError-DDOFx421.js";import"./Form-0LpxOP9r.js";import"./useFormValidation-ChceI0Vn.js";import"./useToggleState-ByPOsgAA.js";import"./useFormReset-B7Z_bYQn.js";import"./AlertText-Ds6Oj97F.js";import"./AlertIcon-PzDvVuZo.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
