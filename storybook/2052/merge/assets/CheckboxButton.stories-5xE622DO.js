import{j as r,r as y}from"./iframe-CuPb25cv.js";import{a,u as c,F as u,t as g}from"./Form-D3dPEjiA.js";import{B as i}from"./Button-Cy_FSVpl.js";import{S as k}from"./Section-B55_57D7.js";import{A as O}from"./ActionGroup-BCzfYI9o.js";import{s as l}from"./Action-CE7P3CGA.js";import{T as m}from"./Text-2_ekHeae.js";import{C as d}from"./CheckboxButton-DOJKvy_7.js";import{C as p}from"./Content-ABC0bcLa.js";import{F as _}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./browser-1QXSrBs6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CLSl9yKt.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./utils-rjde634_.js";import"./ProgressBar-CiugOVQS.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./Text-DqFBqxgU.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./dynamic-CGQ0FoZ_.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./context-B692btnM.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Checkbox-CCOr9rzS.js";import"./Form-BCVzxl1k.js";import"./useFormValidation-DUD5vlRz.js";import"./useToggleState-B9BoubUu.js";import"./useFormReset-Cj0hiSlt.js";import"./react-children-utilities-OY5o0O78.js";import"./ClearPropsContext-1rzIpp4D.js";const{action:w}=__STORYBOOK_MODULE_ACTIONS__,q=w("submit"),Rr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async S=>{await l(1500),q(S)},o=c({defaultValues:{acceptTerms:!1}}),T=g();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(k,{children:[r.jsx(T,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(O,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return y.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(_,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var h,x,f;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(x=e.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var F,C,j;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(B=(E=s.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Gr as __namedExportsOrder,Rr as default};
