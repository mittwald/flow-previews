import{j as r,r as x}from"./iframe-W1iyoXhf.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-VIcfaLD7.js";import{L as o}from"./Label-h36KWMeP.js";import{B as p}from"./Button-IzhK2U-6.js";import{S as g}from"./Section-CeOL9WXO.js";import{A as b}from"./ActionGroup-C1jzAEQv.js";import{s as u}from"./Action-BaKsvCHV.js";import{N as t}from"./NumberField-BpV1Q6zT.js";import{F as E}from"./FieldDescription-sYQgLYFM.js";import{F as S}from"./FieldError-V9E4UopR.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-X2nPVSXv.js";import"./flowComponent-DadfXi8i.js";import"./index-BH3DQIUR.js";import"./clsx-B-dksMZM.js";import"./index-BUhRJiS3.js";import"./useLocalizedStringFormatter-Be5s6ZhG.js";import"./context-Dx3ASvxi.js";import"./useRef-HGB3QOF9.js";import"./utils-Co92dFN-.js";import"./browser-D1HYvIQy.js";import"./ButtonView-DeVNGu_o.js";import"./Label.module-CUYTf9Jc.js";import"./Label-16XGOc-L.js";import"./Hidden-C0j9T0K5.js";import"./IconWarning-Cnnsa5dA.js";import"./remote-CbMcOagV.js";import"./Text-DcDEk3cp.js";import"./EmulatedBoldText-BfE11w5D.js";import"./Text-DMuz8jzh.js";import"./LoadingSpinner-BMAt0-EL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DSUkPhZw.js";import"./ProgressBar-o5FIdMg8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C8GMPbyu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DwtcUURT.js";import"./useFocus-BF1azJZZ.js";import"./useFocusRing-D7D1hXRw.js";import"./useFocusable-CYBapKrT.js";import"./ContextMenuSection-DWjrG_wk.js";import"./Dialog-Dwmqa2yo.js";import"./RSPContexts-CkYyS58h.js";import"./OverlayArrow-DhCjeFi1.js";import"./useControlledState-BeXX8b-c.js";import"./Collection-H-B8rljE.js";import"./CollectionBuilder-BFDcIzLe.js";import"./SelectionIndicator--NYjhiR7.js";import"./Separator-BxaFcvwN.js";import"./SelectionManager-CBsBpJX-.js";import"./useEvent-D9hyQfDj.js";import"./useCollator-CZzcr_Mi.js";import"./FocusScope-mUzTN5zH.js";import"./VisuallyHidden-9GsfRhh1.js";import"./getActionGroupSlot-nARO-zR5.js";import"./useStatic-DFE9WV1t.js";import"./context-Cx4Tf49f.js";import"./useFieldComponent-CeQ6dqWY.js";import"./useControlledHostValueProps-CGhWZ5l6.js";import"./FieldError-CaERYIVC.js";import"./Form-BBVMks-l.js";import"./Group-BXkBt_dH.js";import"./Input-lNMUeypu.js";import"./useFormValidation-aWhqwd0R.js";import"./useSpinButton-BGC6K0Zf.js";import"./useFormReset-DYb2_5Lx.js";import"./useTextField-afbLRwDD.js";import"./AlertText-x_xx3UIw.js";import"./AlertIcon-Cyqu-_3z.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
