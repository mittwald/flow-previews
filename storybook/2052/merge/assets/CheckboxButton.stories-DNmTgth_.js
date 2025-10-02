import{j as r,r as y}from"./iframe-hiH37hms.js";import{a,u as c,F as u,t as g}from"./Form-Dyo8yiYK.js";import{B as i}from"./Button-BrzTi3gr.js";import{S as k}from"./Section-B8yRiADO.js";import{A as O}from"./ActionGroup-CmCahmkF.js";import{s as l}from"./Action-BsGu1LRs.js";import{T as m}from"./Text-CsOmTVyE.js";import{C as d}from"./CheckboxButton-BO81VWNM.js";import{C as p}from"./Content-1NKId6yP.js";import{F as _}from"./FieldError-BChewV0h.js";import"./index-Cun1SEai.js";import"./dynamic-BmCJXizF.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./clsx-B-dksMZM.js";import"./index-BJu77HCL.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./context-DRH00eGt.js";import"./browser-BuBe5AKm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-Cse0Xf0Q.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSe0nnji.js";import"./utils-JHWv327y.js";import"./ProgressBar-CDjSE3x2.js";import"./Label-C0jnYKOc.js";import"./Hidden-XcASwwlw.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhsWghka.js";import"./useFocus-B9-o-MIg.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./ContextMenuSection-Co8KQTmA.js";import"./Dialog-i0N_hzHI.js";import"./RSPContexts-DTJHlpNa.js";import"./OverlayArrow-CEJUr9iX.js";import"./useControlledState-BFPCb-Qt.js";import"./Collection-BgRsBBN2.js";import"./CollectionBuilder-DEp0jGGn.js";import"./context-BuwG6neX.js";import"./Separator-DghpaL2h.js";import"./Text-UKwjxOKq.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./useCollator-5PyA7SnE.js";import"./FocusScope-C5smDGs3.js";import"./VisuallyHidden-C5VBpvXq.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./useStatic-8hqO5zoY.js";import"./context-riC63IcS.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Checkbox-DB6ADShv.js";import"./useFieldComponent-CPFfLOL8.js";import"./FormField.module-CapR5K3V.js";import"./Form-stGXRgys.js";import"./useFormValidation-DybUzXH7.js";import"./useToggleState-DyCeZkV5.js";import"./useFormReset-BDeOlo8n.js";import"./react-children-utilities-CYBZOoJV.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,q=w("submit"),Gr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async S=>{await l(1500),q(S)},o=c({defaultValues:{acceptTerms:!1}}),T=g();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(k,{children:[r.jsx(T,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(O,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return y.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var h,x,f;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(x=e.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var F,C,j;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(j=(C=n.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var b,E,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(B=(E=s.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
