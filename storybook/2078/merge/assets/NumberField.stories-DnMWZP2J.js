import{j as r,r as x}from"./iframe-BoA7YzYm.js";import{b as a,u as l,F as d,t as j}from"./Form-DLwGH580.js";import{L as o}from"./Label-Cjbbehtk.js";import{R as c,S as f}from"./ResetButton-BTdRGMm7.js";import{B as p}from"./Button-BKFimoLG.js";import{S as b}from"./Section-MYLyhPiL.js";import{A as g}from"./ActionGroup-CAgPe75f.js";import{s as u}from"./Action-DzFCrVY1.js";import{N as t}from"./NumberField-BIwxb0zy.js";import{F as E}from"./FieldDescription-Ct19ob0x.js";import{F as S}from"./FieldError-CkVfHT3s.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYpyzP7H.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./clsx-B-dksMZM.js";import"./index-C8IfwtBf.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./context-Bl3IUlM5.js";import"./browser--2iaZute.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CIY5uMr1.js";import"./utils-CbCfmbCJ.js";import"./Hidden-COFYe48C.js";import"./useRef-DG5Ef12W.js";import"./IconWarning-Cm4x5FHH.js";import"./remote-W2BsjsJq.js";import"./Text-Dcujjsgx.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./Text-DzES3Axw.js";import"./LoadingSpinner-CJmPD5N7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BSweg4_1.js";import"./ProgressBar-0Lez36-3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BJjmJvn4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VWzB255U.js";import"./useFocus-0w8IxMP9.js";import"./useFocusRing-QIpAUb-m.js";import"./useFocusable-03sk398M.js";import"./ContextMenuSection-CVwpYLx9.js";import"./Dialog-BDOoN61w.js";import"./RSPContexts-D0KJsdCX.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useControlledState-Bptfp7LK.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./useCollator-DeMqSZ32.js";import"./FocusScope-ewaHP7Wk.js";import"./VisuallyHidden-ulLndJxN.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./useStatic-BAyQxveA.js";import"./context-Cs30ZfjP.js";import"./useFieldComponent-DkEUVrE8.js";import"./useControlledHostValueProps-varpk8I2.js";import"./FieldError-DIrg2qiC.js";import"./Form-DOX3bg_5.js";import"./Group-CR0xPesX.js";import"./Input-BsUxPOGC.js";import"./useFormValidation-D99W395Z.js";import"./useSpinButton-DPYPZCCv.js";import"./useFormReset-Lf5kfq5Z.js";import"./useTextField-Bdu5byVa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Tr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Tr as default};
