import{j as r,r as f}from"./iframe-QQgxjfU-.js";import{a,u as c,F as u,t as F}from"./Form-Bc9x2LYG.js";import{B as i}from"./Button-BWu_s2A1.js";import{S as C}from"./Section-DXb3tH7e.js";import{A as j}from"./ActionGroup-CwMcSxbk.js";import{s as l}from"./Action-DetrUASE.js";import{T as m}from"./Text-CRs-OO-e.js";import{C as d}from"./CheckboxButton-CE-yYrzW.js";import{C as p}from"./Content-DjIa1yoA.js";import{F as b}from"./useFieldComponent-B5mMljfV.js";import"./index-nuYtCEEu.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./clsx-B-dksMZM.js";import"./index-3NdHptBj.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./context-CRx6Bs8B.js";import"./browser-CvCNE6Dh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CSQYjrC1.js";import"./LoadingSpinner-DsHmX75T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D9YKuqRT.js";import"./utils-DhA81qjX.js";import"./ProgressBar-DarvvV7I.js";import"./Label-0zOMPJ7B.js";import"./Hidden-4F2-2j_N.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BVJbXyTi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIrX7kgo.js";import"./useFocus-0cMRA2DE.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocusable-ClkP-4lm.js";import"./ContextMenuSection-BZb_tlaR.js";import"./Dialog-D5kgP22k.js";import"./RSPContexts-CsH1Ib1c.js";import"./OverlayArrow-8rZ2ifiK.js";import"./useControlledState-CkoNAxF1.js";import"./Collection-BHgWnzFo.js";import"./CollectionBuilder-8HmDsnbK.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./Separator-BjOsH73i.js";import"./Text-D_WC5Uss.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./useCollator-Dex40a3g.js";import"./FocusScope-Bg9evWjP.js";import"./VisuallyHidden-B95C2FUL.js";import"./dynamic-BjF6TIyL.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./useStatic-B5jRDwsJ.js";import"./context-C73KBwIX.js";import"./EmulatedBoldText-DL56_OWd.js";import"./Checkbox-CZKIfkK5.js";import"./useMakeFocusable-DfOzNy-a.js";import"./Form-w-Aai7lh.js";import"./useFormValidation-CrlfASAQ.js";import"./useToggleState-waVL2aEM.js";import"./useFormReset-C3QpCCH-.js";import"./react-children-utilities-2-HBtGkG.js";import"./ClearPropsContext-C1xOcMSE.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,B=E("submit"),qr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async x=>{await l(1500),B(x)},o=c({defaultValues:{acceptTerms:!1}}),h=F();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(C,{children:[r.jsx(h,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(j,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const vr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,vr as __namedExportsOrder,qr as default};
