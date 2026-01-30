import{j as r,r as x}from"./iframe-BipmDVic.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-C87-O7lX.js";import{L as o}from"./Label-D7pFsU69.js";import{B as p}from"./Button-BuQAY4x2.js";import{S as g}from"./Section-BSyGStrt.js";import{A as b}from"./ActionGroup-CHTlX6Wu.js";import{s as u}from"./Action-B2seXdE0.js";import{N as t}from"./NumberField-DC_K7d9u.js";import{F as E}from"./FieldDescription-BEUHW4qH.js";import{F as S}from"./FieldError-CHo9rwLP.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-5Me7t2_P.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./clsx-B-dksMZM.js";import"./index-DhRV0L_D.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./context-Br1o_Gsv.js";import"./useRef-DY72xU_4.js";import"./utils-BmvAbY6y.js";import"./ButtonView-B8lRgn0T.js";import"./browser-CR-oUB3P.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./IconWarning-CGnZi41_.js";import"./remote-Bx5-otuG.js";import"./Text-D0LSWbFT.js";import"./EmulatedBoldText-B1_mjQ_l.js";import"./Text-Bx_sJIF1.js";import"./LoadingSpinner-4_K5lSJw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JOtZZNa7.js";import"./ProgressBar-WDsF0b96.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DZFs0BX7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BGUPUAq5.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./useFocusable-CoJ_GBdx.js";import"./ContextMenuSection-CO4DhhVm.js";import"./Dialog-BXIha8hU.js";import"./RSPContexts-EgPs8m3a.js";import"./OverlayArrow-Crdn15eZ.js";import"./useControlledState-CTBxctZq.js";import"./Collection-DZXXzgBW.js";import"./CollectionBuilder-BRXbMuqB.js";import"./SelectionIndicator-DQakRxMT.js";import"./Separator-DJ26kkKw.js";import"./SelectionManager-Bp4YXEPt.js";import"./useEvent-B4avBJ26.js";import"./useCollator-BmSf6CmH.js";import"./FocusScope-BUuvBHJx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./getActionGroupSlot-OnPTJ5ul.js";import"./useStatic-DNvp4EKT.js";import"./context-DDKbSZpU.js";import"./useFieldComponent-VycST_vs.js";import"./useControlledHostValueProps-CGQBpUAS.js";import"./FieldError-BYM5jSaa.js";import"./Form-BQ1NzRsL.js";import"./Group-C_4RVHie.js";import"./Input-CWeCnXba.js";import"./useFormValidation-DUx2L2VN.js";import"./useSpinButton-Ctp6ajaW.js";import"./useFormReset-Bn-cpXjq.js";import"./useTextField-D6dFMuMP.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
