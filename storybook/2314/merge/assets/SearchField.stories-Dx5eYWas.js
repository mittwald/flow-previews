import{r as S,j as r}from"./iframe-DM7qDJWN.js";import{a as n,u as a,F as p,R as u,S as l,t as x}from"./ResetButton-p-4WPZNu.js";import{L as s}from"./Label-BIhRdzJz.js";import{B as d}from"./Button-Dc6TEAeS.js";import{S as j}from"./Section-BzWNMXV2.js";import{A as b}from"./ActionGroup-CbGFfnRR.js";import{s as c}from"./Action-SkKzNvM1.js";import{S as m}from"./SearchField-B8C9zVYy.js";import{F as E}from"./FieldError-yptSAddh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bo6M-mWb.js";import"./flowComponent-3uYRoF3i.js";import"./index-BG9aTyNN.js";import"./clsx-B-dksMZM.js";import"./index-Zik4_3jH.js";import"./useLocalizedStringFormatter-aG_pngn7.js";import"./context-Bdkwq7qF.js";import"./useRef-DOoXSahq.js";import"./utils-DCh3KcEQ.js";import"./ButtonView-7nAQL8-V.js";import"./browser-GV4Evxlh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bc5uyP9T.js";import"./Hidden-DVoaY9_q.js";import"./IconWarning-Ck-PBl-h.js";import"./remote-CkIQ4maL.js";import"./Text-DFbMev3D.js";import"./EmulatedBoldText-DY5AV1Fo.js";import"./Text-CqLEY5m0.js";import"./LoadingSpinner-BB2_lVH8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cle7Q0jH.js";import"./ProgressBar-XdjtveJ3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d_6Xjsvm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DcE1V40F.js";import"./useFocus-V4g9fXxO.js";import"./useFocusRing-DKHg-pYg.js";import"./useFocusable-jnMsXBmm.js";import"./ContextMenuSection-gnaL4P7y.js";import"./Dialog-CtXs4QP0.js";import"./RSPContexts-DtHHiQqe.js";import"./OverlayArrow--T1zjZBI.js";import"./useControlledState-CGBhCpgz.js";import"./Collection-B3op_wkO.js";import"./CollectionBuilder-CUYn1Myb.js";import"./SelectionIndicator-DhuP4hb9.js";import"./Separator-duSL34B8.js";import"./SelectionManager-B15RSxH7.js";import"./useEvent-h15Gin5m.js";import"./useCollator-BSJypaQj.js";import"./FocusScope-DcmRl2I0.js";import"./VisuallyHidden-Djcrj7d_.js";import"./getActionGroupSlot-ChSghX-d.js";import"./useStatic-Dwurevey.js";import"./context-CLl5kDsk.js";import"./useFieldComponent-DWfL7CEw.js";import"./useControlledHostValueProps-CKa29mBp.js";import"./FieldError-CDF7zCEW.js";import"./Form-DD0plB0K.js";import"./Group-V_zeLWI4.js";import"./Input-SfHIWI_P.js";import"./useTextField-BQE_0n2Q.js";import"./useFormReset-DEHhMcAF.js";import"./useFormValidation-BjtvC6sH.js";import"./AlertText-DuUjVJKd.js";import"./AlertIcon-B0QkWIB4.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};
