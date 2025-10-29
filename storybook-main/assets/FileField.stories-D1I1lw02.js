import{j as r,r as F}from"./iframe-BO4how7V.js";import{a as l,u as a,F as c,t as h}from"./Form-5BACG0Xr.js";import{L as s}from"./Label-Dg0lhbqP.js";import{B as t}from"./Button-BRSyykRx.js";import{S as x}from"./Section-L1VuE5li.js";import{A as j}from"./ActionGroup-1g_0PgZz.js";import{s as u}from"./Action-BcCpRMgW.js";import{F as m}from"./FileField-B_csUIsX.js";import{F as S}from"./useFieldComponent-CjWlILZl.js";import"./index-nuYtCEEu.js";import"./flowComponent-_BWaP51b.js";import"./index-B3PYSYUw.js";import"./clsx-B-dksMZM.js";import"./index-CzMnHAtb.js";import"./useLocalizedStringFormatter-Byhh4L4X.js";import"./context-n99Hur2q.js";import"./browser-9RCZAQdm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-HRe2PJ1I.js";import"./utils-BpiWkIEZ.js";import"./Hidden-cuI6d2d2.js";import"./IconWarning-riXPckyc.js";import"./Text-k4VuksKp.js";import"./EmulatedBoldText-B4e_rnhx.js";import"./Text-BwppUNzg.js";import"./LoadingSpinner-Bt5VpGJB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-T2VJnm-n.js";import"./ProgressBar-Cb_Q8Aey.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R_XjJcRU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-n8mYYh.js";import"./useFocus-CFrGhCIR.js";import"./useFocusRing-cZUm55wA.js";import"./useFocusable-Dm6zCBge.js";import"./ContextMenuSection-D98yvfja.js";import"./Dialog-9TwJqweV.js";import"./RSPContexts-C8zlTsZJ.js";import"./OverlayArrow-6T1AUm1N.js";import"./useControlledState-Dy2CU0s2.js";import"./Collection-7Jhx6ozR.js";import"./CollectionBuilder-NvmcR0Ec.js";import"./SelectionIndicator-qPgcj5gy.js";import"./Separator-CDyVGVx6.js";import"./SelectionManager-CUJzsbBx.js";import"./useEvent-BsUSX18g.js";import"./useCollator-fJkQzVou.js";import"./FocusScope-BDHPNMgd.js";import"./VisuallyHidden-BldPGQAk.js";import"./dynamic-DPbzu-N4.js";import"./getActionGroupSlot-DNMgIyad.js";import"./useStatic-BYOxqZVF.js";import"./context-DS1PliZx.js";import"./useFormValidation-BHRl0fwc.js";import"./Input-C8s0JVaR.js";import"./useMakeFocusable-D5dCcyqU.js";import"./react-children-utilities-aRBIKRzv.js";import"./ClearPropsContext-Cr48Xe01.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Cr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async f=>{await u(5e3),b(f)},d=a({defaultValues:{user:""}}),p=h();return r.jsx(c,{form:d,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(p,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(j,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,_r as __namedExportsOrder,Cr as default};
