import{j as r,r as x}from"./iframe-xTeLnFvu.js";import{u as a,F as l}from"./Form-CzGdw75V.js";import{L as o}from"./Label-CVltlbUu.js";import{F as d,t as j}from"./Field-CAkbrvl3.js";import{B as p}from"./Button-BA5_aaZE.js";import{S as g}from"./Section-o_jduYUp.js";import{A as b}from"./ActionGroup-TgHXsP3h.js";import{s as u}from"./Action-GyTbi50D.js";import{N as t}from"./NumberField-BZyaEuhg.js";import{F as E}from"./TranslationProvider-Y_3SKiEv.js";import{F as S}from"./FieldError-oOsFR_NQ.js";import{R as c}from"./ResetButton-DEvz3aTX.js";import{S as f}from"./SubmitButton-DWFkkN3I.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-RW8IAkpU.js";import"./utils-DAXmWa5w.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-B-9yYF9r.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./context-7tIPXbfR.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-ndn1boAo.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./Text-CX0dnSU4.js";import"./EmulatedBoldText-st1IlPV2.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";import"./context-B3gmiBCA.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./useStatic-DiiqycDM.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./useFieldComponent-Brjsz3RP.js";import"./Activity-D0VzS_Xj.js";import"./IconChevronDown-CJpdgLSM.js";import"./IconChevronUp-Cq8tLTp9.js";import"./IconMinus-BFUcuDWR.js";import"./IconPlus-CIWM42cg.js";import"./useControlledHostValueProps-BM5fLdcu.js";import"./FieldError-Cxb9ZjML.js";import"./Form-CFtpyLOk.js";import"./Group-DSWHaMOX.js";import"./Input-CXlOt9Gr.js";import"./useFormValidation-CD-qIFlG.js";import"./useSpinButton-9mQA_vpd.js";import"./useFormReset-Co6bkbVB.js";import"./useTextField-CSw7_eNz.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-DpVgPae0.js";import"./useRef-D_8ZkygH.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await u(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
