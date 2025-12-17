import{j as r,r as C}from"./iframe-BXRQqxRF.js";import{u as d,F as a}from"./Form-DX4KpEqW.js";import{F as c,t as j}from"./Field-DoKu5q0S.js";import{B as l}from"./Button-C0lHC6Ss.js";import{S as B}from"./Section-o_ikZ1pf.js";import{A as b}from"./ActionGroup-CBAIlTo2.js";import{s as u}from"./Action-Co1N5x-Q.js";import{T as i}from"./Text-KdIVkcjD.js";import{C as m}from"./CheckboxButton-Cz8lBPZW.js";import{C as p}from"./Content-BaHTMk9y.js";import{F as E}from"./FieldError-B377POAw.js";import{R as h}from"./ResetButton-nNJpj6Ef.js";import{S as f}from"./SubmitButton-DOYZAAXH.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-JidmR7ov.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-CLAkwN-B.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./clsx-B-dksMZM.js";import"./index-L-QBIyGf.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./context-Cfx64TkI.js";import"./IconChevronDown-CrvlnwL_.js";import"./remote-B9tgrHbM.js";import"./IconX-DvHkgbt1.js";import"./IconCheck-BZ_7T0kt.js";import"./LoadingSpinner-Qtcd5nhZ.js";import"./ariaLive-BBnf0-S_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DlzDIGUo.js";import"./utils-W_wb_I6t.js";import"./ProgressBar-Bu0Rvbqr.js";import"./Label-x3iOqkWL.js";import"./Hidden-CXQdbF07.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwfjYi-F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DljSeqhE.js";import"./useFocus-BYFFuSzP.js";import"./useFocusRing-mlfcq67k.js";import"./useFocusable-Bn1h_ZhV.js";import"./ContextMenuSection-CcbfbV9b.js";import"./lib-90ocxLs-.js";import"./Dialog-CBkTvNeJ.js";import"./RSPContexts-DBwrNRvT.js";import"./OverlayArrow-Bw8tO6jb.js";import"./useControlledState-DF5Prxi4.js";import"./Collection-XN92eLRe.js";import"./CollectionBuilder-BhdaTyDp.js";import"./SelectionIndicator-CTy77egS.js";import"./Separator-D8Gi_H7t.js";import"./Text-gjZ6zRux.js";import"./SelectionManager-Bic6iT0p.js";import"./useEvent-D_VKrqjP.js";import"./useCollator-CBeXlDOU.js";import"./FocusScope-CDou2-z6.js";import"./VisuallyHidden-DvIs4LpA.js";import"./getActionGroupSlot-BkAF4Kgk.js";import"./useStatic-CDs84s8f.js";import"./context-BJK7zy3l.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./Checkbox-LE2vC_7y.js";import"./IconCheckboxEmpty-D6hHKMkD.js";import"./useFieldComponent-y0XT-9Ew.js";import"./FieldError-Cw_rtSeq.js";import"./Form-k8rVjsdW.js";import"./useFormValidation-tPOMEO92.js";import"./useToggleState-DWED-vnQ.js";import"./useFormReset-BZsjU1hv.js";import"./IconDanger-B1opIkZE.js";import"./useRef-C3fqYXg-.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Mr={title:"Integrations/React Hook Form/CheckboxButton",component:c,render:()=>{const t=async F=>{await u(1500),T(F)},o=d({defaultValues:{acceptTerms:!1}}),x=j();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(x,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=d();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=d();return r.jsxs(a,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
