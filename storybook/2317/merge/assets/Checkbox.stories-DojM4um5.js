import{r as x,j as r}from"./iframe-Czt-X4mt.js";import{a as c,u as p,F as a,R as l,S as f,t as F}from"./ResetButton-Cqw_oC7V.js";import{B as d}from"./Button-CD6msFpC.js";import{S as j}from"./Section-D-QcuIGE.js";import{A as b}from"./ActionGroup-DjlBFa1z.js";import{s as u}from"./Action-BQrZ3ZgM.js";import{C as t}from"./Checkbox-BDdr2the.js";import{F as E}from"./FieldError-BFQHJf6J.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXoid3qz.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./clsx-B-dksMZM.js";import"./index-Dtw36EGp.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./context-BsnVI305.js";import"./useRef-CYQbuMBQ.js";import"./utils-CU6JriEK.js";import"./ButtonView-COtP3lz8.js";import"./browser-CPd8oh-y.js";import"./IconWarning-CEtgECHE.js";import"./remote-hRcAmPck.js";import"./Text-8ynHQhOY.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./LoadingSpinner-B3-O-X86.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YmddG4Dp.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DEVH16Jn.js";import"./useFocus-En_BVabG.js";import"./useFocusRing-DDb3Exp8.js";import"./useFocusable-DFLTBTxr.js";import"./ContextMenuSection-CUYBU0Kr.js";import"./Dialog-CYkX7YiI.js";import"./RSPContexts-BGSIbyEV.js";import"./OverlayArrow-DFsPHtjC.js";import"./useControlledState-DhgMObTD.js";import"./Collection-BiWiEach.js";import"./CollectionBuilder-DHVWwXoR.js";import"./SelectionIndicator-8fZBRAhq.js";import"./Separator-T09-1zVq.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./useCollator-SMtHYG8Q.js";import"./FocusScope-DGuUwoy_.js";import"./VisuallyHidden-jSb2CZNn.js";import"./getActionGroupSlot-5QVk2C33.js";import"./useStatic-C0a0tu6G.js";import"./context-CNfFuvDb.js";import"./useFieldComponent-CjTkiSgD.js";import"./FieldError-8b6ruGQE.js";import"./Form-BeS1FfjY.js";import"./useFormValidation-DyL1ZPxG.js";import"./useToggleState-BLpJhXEB.js";import"./useFormReset-5KG7Gyo5.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
