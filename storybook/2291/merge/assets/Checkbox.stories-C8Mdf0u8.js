import{j as r,r as x}from"./iframe-BL1IY_6V.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-BRxvWv3x.js";import{B as d}from"./Button-B7zQBVb0.js";import{S as j}from"./Section-B_fcZRhb.js";import{A as b}from"./ActionGroup-CBsQTCAe.js";import{s as u}from"./Action-BftMxRJh.js";import{C as t}from"./Checkbox-C7C-Nc0w.js";import{F as E}from"./FieldError-D0yWaYHs.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dn3YQ50F.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./clsx-B-dksMZM.js";import"./index-Cr6jOlTO.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./useRef-wA2SAyNt.js";import"./utils-GyL2rjZN.js";import"./ButtonView-DNg_Qy4d.js";import"./browser-DogRo3Wh.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./Text-BSlhLkmN.js";import"./EmulatedBoldText-UtdvjbkN.js";import"./Text-B4yGITBG.js";import"./LoadingSpinner-BFVS5fU_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CHtMceZn.js";import"./ProgressBar-DK1MtX49.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyH2amP0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CxRwZ9-L.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useFocusable-CUtc6O_Q.js";import"./ContextMenuSection-JBlJYK6m.js";import"./Dialog-CDLoJFKu.js";import"./RSPContexts-BsiO56QH.js";import"./OverlayArrow-CpLmLaON.js";import"./useControlledState-CA6yhcg7.js";import"./Collection-DjA8G57O.js";import"./CollectionBuilder-DOfwpjF8.js";import"./SelectionIndicator-Dec13xxT.js";import"./Separator-mUQkGyBt.js";import"./SelectionManager-C3JHuUY2.js";import"./useEvent-BBSiUFe7.js";import"./useCollator-DpBUbIyY.js";import"./FocusScope-B7aMt2fO.js";import"./VisuallyHidden-CgqIxBlU.js";import"./getActionGroupSlot-Di2KrfRc.js";import"./useStatic-BujRUGzM.js";import"./context-Cv8xNoZb.js";import"./useFieldComponent-oZ5IqIdY.js";import"./FieldError-CCCCRqJ9.js";import"./Form-Ca3ASx7C.js";import"./useFormValidation-DCrH4OQY.js";import"./useToggleState-CSM3AEzw.js";import"./useFormReset-C4J5P-lS.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
