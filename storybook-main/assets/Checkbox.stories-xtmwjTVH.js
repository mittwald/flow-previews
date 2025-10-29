import{j as r,r as f}from"./iframe-BO4how7V.js";import{a as c,u as a,F as u,t as h}from"./Form-5BACG0Xr.js";import{B as n}from"./Button-BRSyykRx.js";import{S as x}from"./Section-L1VuE5li.js";import{A as F}from"./ActionGroup-1g_0PgZz.js";import{s as d}from"./Action-BcCpRMgW.js";import{C as o}from"./Checkbox-pLLO5jEq.js";import{F as j}from"./useFieldComponent-CjWlILZl.js";import"./index-nuYtCEEu.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./clsx-B-dksMZM.js";import"./index-CzMnHAtb.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./context-n99Hur2q.js";import"./browser-9RCZAQdm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-riXPckyc.js";import"./Text-k4VuksKp.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./Text-BwppUNzg.js";import"./utils-BpiWkIEZ.js";import"./LoadingSpinner-Bt5VpGJB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-T2VJnm-n.js";import"./ProgressBar-Cb_Q8Aey.js";import"./Label-HRe2PJ1I.js";import"./Hidden-cuI6d2d2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R_XjJcRU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-n8mYYh.js";import"./useFocus-CFrGhCIR.js";import"./useFocusRing-cZUm55wA.js";import"./useFocusable-Dm6zCBge.js";import"./ContextMenuSection-D98yvfja.js";import"./Dialog-9TwJqweV.js";import"./RSPContexts-C8zlTsZJ.js";import"./OverlayArrow-6T1AUm1N.js";import"./useControlledState-Dy2CU0s2.js";import"./Collection-7Jhx6ozR.js";import"./CollectionBuilder-NvmcR0Ec.js";import"./SelectionIndicator-qPgcj5gy.js";import"./Separator-CDyVGVx6.js";import"./SelectionManager-CUJzsbBx.js";import"./useEvent-BsUSX18g.js";import"./useCollator-fJkQzVou.js";import"./FocusScope-BDHPNMgd.js";import"./VisuallyHidden-BldPGQAk.js";import"./dynamic-DPbzu-N4.js";import"./getActionGroupSlot-DNMgIyad.js";import"./useStatic-BYOxqZVF.js";import"./context-DS1PliZx.js";import"./useMakeFocusable-D5dCcyqU.js";import"./Form-hZ8SLhDT.js";import"./useFormValidation-BHRl0fwc.js";import"./useToggleState-BXREG8IS.js";import"./useFormReset-DKBI04Qj.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
