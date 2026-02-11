import{r as x,j as r}from"./iframe-DM7qDJWN.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-p-4WPZNu.js";import{L as o}from"./Label-BIhRdzJz.js";import{B as p}from"./Button-Dc6TEAeS.js";import{S as g}from"./Section-BzWNMXV2.js";import{A as b}from"./ActionGroup-CbGFfnRR.js";import{s as u}from"./Action-SkKzNvM1.js";import{N as t}from"./NumberField-CT_pEs_a.js";import{F as E}from"./FieldDescription-BnJyB75w.js";import{F as S}from"./FieldError-yptSAddh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bo6M-mWb.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./clsx-B-dksMZM.js";import"./index-Zik4_3jH.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./context-Bdkwq7qF.js";import"./useRef-DOoXSahq.js";import"./utils-DCh3KcEQ.js";import"./ButtonView-7nAQL8-V.js";import"./browser-GV4Evxlh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./IconWarning-Ck-PBl-h.js";import"./remote-CkIQ4maL.js";import"./Text-DFbMev3D.js";import"./EmulatedBoldText-DY5AV1Fo.js";import"./Text-CqLEY5m0.js";import"./LoadingSpinner-BB2_lVH8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cle7Q0jH.js";import"./ProgressBar-XdjtveJ3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d_6Xjsvm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DcE1V40F.js";import"./useFocus-V4g9fXxO.js";import"./useFocusRing-DKHg-pYg.js";import"./useFocusable-jnMsXBmm.js";import"./ContextMenuSection-gnaL4P7y.js";import"./Dialog-CtXs4QP0.js";import"./RSPContexts-DtHHiQqe.js";import"./OverlayArrow--T1zjZBI.js";import"./useControlledState-CGBhCpgz.js";import"./Collection-B3op_wkO.js";import"./CollectionBuilder-CUYn1Myb.js";import"./SelectionIndicator-DhuP4hb9.js";import"./Separator-duSL34B8.js";import"./SelectionManager-B15RSxH7.js";import"./useEvent-h15Gin5m.js";import"./useCollator-BSJypaQj.js";import"./FocusScope-DcmRl2I0.js";import"./VisuallyHidden-Djcrj7d_.js";import"./getActionGroupSlot-ChSghX-d.js";import"./useStatic-Dwurevey.js";import"./context-CLl5kDsk.js";import"./useFieldComponent-DWfL7CEw.js";import"./useControlledHostValueProps-CKa29mBp.js";import"./FieldError-CDF7zCEW.js";import"./Form-DD0plB0K.js";import"./Group-V_zeLWI4.js";import"./Input-SfHIWI_P.js";import"./useFormValidation-BjtvC6sH.js";import"./useSpinButton-6B8j-AZ3.js";import"./useFormReset-DEHhMcAF.js";import"./useTextField-BQE_0n2Q.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
