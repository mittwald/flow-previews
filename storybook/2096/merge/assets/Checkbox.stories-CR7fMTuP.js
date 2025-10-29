import{j as r,r as f}from"./iframe-Tz0J7D4Y.js";import{a as c,u as a,F as u,t as h}from"./Form-BgW8CYzp.js";import{B as n}from"./Button-DpdNCW8h.js";import{S as x}from"./Section-weR_orzI.js";import{A as F}from"./ActionGroup-B5YBX1jR.js";import{s as d}from"./Action-DDvM_T4v.js";import{C as o}from"./Checkbox-CeZQU0GK.js";import{F as j}from"./useFieldComponent-C0OSANtm.js";import"./index-nuYtCEEu.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./clsx-B-dksMZM.js";import"./index-DcQDRvJj.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./context-B1lt5Uf-.js";import"./browser-D-jX3MAX.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-GPTcuJJ8.js";import"./Text-C3A_eB8w.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Text-c129sBMT.js";import"./utils-ja91N2Nx.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BC9SKpFI.js";import"./ProgressBar-netLLnC9.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dhdcn6rN.js";import"./useFocus-rnV-N6wP.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./ContextMenuSection-8rmu86AD.js";import"./Dialog-BCA3xQKB.js";import"./RSPContexts-DMflUE_X.js";import"./OverlayArrow-Dm3PErwP.js";import"./useControlledState-JfMoTEl5.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";import"./dynamic-CoftMrEe.js";import"./getActionGroupSlot-DlZypVxI.js";import"./useStatic-BDAMVNvv.js";import"./context-CCjUHDCq.js";import"./useMakeFocusable-DcsG0xi9.js";import"./Form-CgZM-WfL.js";import"./useFormValidation-BhAnQ22o.js";import"./useToggleState-DB05T5zF.js";import"./useFormReset-Dr7kbm5c.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Or as __namedExportsOrder,kr as default};
