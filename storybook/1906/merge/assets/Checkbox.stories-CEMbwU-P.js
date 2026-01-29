import{j as r,r as x}from"./iframe-DBKYLzDC.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-ssRCuNTw.js";import{B as d}from"./Button-BFOZVdd1.js";import{S as j}from"./Section-D0mpF1xZ.js";import{A as b}from"./ActionGroup-C49teGDs.js";import{s as u}from"./Action-CPy4r2qq.js";import{C as t}from"./Checkbox-0fpXgy7m.js";import{F as E}from"./FieldError-BpFJPqyd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C4GhTGlQ.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./useRef-CtdmBt-J.js";import"./utils-BUG9eo0Q.js";import"./ButtonView-CEeOUgiW.js";import"./browser-DhKn1UU2.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZ5qqTtf.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./ContextMenuSection-DLB9FUAU.js";import"./Dialog-DCNro2wm.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./useControlledState-CAANpQPW.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";import"./getActionGroupSlot-BnE40Egr.js";import"./useStatic-DlOT-tNl.js";import"./context-Duo0MdiJ.js";import"./useFieldComponent-DRt8IUS_.js";import"./FieldError-DtV1i0Hc.js";import"./Form-CPSCXeOA.js";import"./useFormValidation-DNSyvwAg.js";import"./useToggleState-D4OQfVOW.js";import"./useFormReset-BczjDhHV.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
