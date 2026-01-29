import{j as r,r as C}from"./iframe-DBKYLzDC.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-ssRCuNTw.js";import{B as l}from"./Button-BFOZVdd1.js";import{S as B}from"./Section-D0mpF1xZ.js";import{A as b}from"./ActionGroup-C49teGDs.js";import{s as u}from"./Action-CPy4r2qq.js";import{T as i}from"./Text-gSr4j5A3.js";import{C as m}from"./CheckboxButton-CpnDAbYf.js";import{C as d}from"./Content-CZgnPo62.js";import{F as E}from"./FieldError-BpFJPqyd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C4GhTGlQ.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./useRef-CtdmBt-J.js";import"./utils-BUG9eo0Q.js";import"./ButtonView-CEeOUgiW.js";import"./browser-DhKn1UU2.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cx-eUYHB.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BZ5qqTtf.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useFocusable-C-cRLAom.js";import"./ContextMenuSection-DLB9FUAU.js";import"./Dialog-DCNro2wm.js";import"./RSPContexts-Dx0AtfwO.js";import"./OverlayArrow-DgtaOzAt.js";import"./useControlledState-CAANpQPW.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./Text-D7rD6BG6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";import"./getActionGroupSlot-BnE40Egr.js";import"./useStatic-DlOT-tNl.js";import"./context-Duo0MdiJ.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Checkbox-0fpXgy7m.js";import"./useFieldComponent-DRt8IUS_.js";import"./FieldError-DtV1i0Hc.js";import"./Form-CPSCXeOA.js";import"./useFormValidation-DNSyvwAg.js";import"./useToggleState-D4OQfVOW.js";import"./useFormReset-BczjDhHV.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
