import{j as r,r as f}from"./iframe-Tz0J7D4Y.js";import{a,u as c,F as u,t as F}from"./Form-BgW8CYzp.js";import{B as i}from"./Button-DpdNCW8h.js";import{S as C}from"./Section-weR_orzI.js";import{A as j}from"./ActionGroup-B5YBX1jR.js";import{s as l}from"./Action-DDvM_T4v.js";import{T as m}from"./Text-C3A_eB8w.js";import{C as d}from"./CheckboxButton-Dij3om92.js";import{C as p}from"./Content-ChPaHqfU.js";import{F as b}from"./useFieldComponent-C0OSANtm.js";import"./index-nuYtCEEu.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./clsx-B-dksMZM.js";import"./index-DcQDRvJj.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./context-B1lt5Uf-.js";import"./browser-D-jX3MAX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-GPTcuJJ8.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BC9SKpFI.js";import"./utils-ja91N2Nx.js";import"./ProgressBar-netLLnC9.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dhdcn6rN.js";import"./useFocus-rnV-N6wP.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./ContextMenuSection-8rmu86AD.js";import"./Dialog-BCA3xQKB.js";import"./RSPContexts-DMflUE_X.js";import"./OverlayArrow-Dm3PErwP.js";import"./useControlledState-JfMoTEl5.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./Text-c129sBMT.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";import"./dynamic-CoftMrEe.js";import"./getActionGroupSlot-DlZypVxI.js";import"./useStatic-BDAMVNvv.js";import"./context-CCjUHDCq.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Checkbox-CeZQU0GK.js";import"./useMakeFocusable-DcsG0xi9.js";import"./Form-CgZM-WfL.js";import"./useFormValidation-BhAnQ22o.js";import"./useToggleState-DB05T5zF.js";import"./useFormReset-Dr7kbm5c.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,B=E("submit"),qr={title:"Integrations/React Hook Form/CheckboxButton",component:a,render:()=>{const t=async x=>{await l(1500),B(x)},o=c({defaultValues:{acceptTerms:!1}}),h=F();return r.jsx(u,{form:o,onSubmit:t,children:r.jsxs(C,{children:[r.jsx(h,{name:"acceptTerms",children:r.jsxs(d,{children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx(j,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},e={},n={render:t=>{const o=c();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(d,{...t,isInvalid:!0,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=c();return r.jsxs(u,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(a,{name:"field",children:r.jsxs(d,{...t,children:[r.jsx(m,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
