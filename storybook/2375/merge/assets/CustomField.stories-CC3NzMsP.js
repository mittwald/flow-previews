import{r as O,j as r}from"./iframe-C0EFV5oe.js";import{a as d,u as l,F as u,R as F,S as h,b as L,t as _}from"./FormRootError-B3JIvYww.js";import{B as f}from"./Button-BqN-Pb_Z.js";import{S as v}from"./Section-DIrXzFYU.js";import{A as w}from"./ActionGroup-EFGw0Sw-.js";import{s as c}from"./ActionBatch-BKp4oeCQ.js";import{F as q}from"./FieldError-Dy7dJdZa.js";import{P as A}from"./flowComponent-DYluwTXq.js";import{L as s}from"./Label-Ca7Q5rd0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DNPsW2Gv.js";import"./useFieldComponent-Becw-9Qv.js";import"./clsx-B-dksMZM.js";import"./useControlledHostValueProps-CU5liUX5.js";import"./index-a1BVMwGa.js";import"./index-CT8mMXvE.js";import"./useLocalizedStringFormatter-COxbXONP.js";import"./context-8WtOcV7b.js";import"./ActionGroupView-JE6xIUi7.js";import"./Content-DuuHxM4g.js";import"./Heading-CZ1StJHC.js";import"./Heading-B3GE8mEs.js";import"./RSPContexts-DN9Cbb61.js";import"./utils-BH6nMpvt.js";import"./Text-DOyzWtc3.js";import"./browser-yoNZwNd3.js";import"./EmulatedBoldText-12IhiA7q.js";import"./Text-BncBp0aM.js";import"./Modal-C71hUzD9.js";import"./useOverlayController-DSjMGOL2.js";import"./useStatic-BaJc0e4A.js";import"./Overlay-Z2wG9VEn.js";import"./OverlayContextProvider-CfXne1yD.js";import"./LoadingSpinner-AXwRYWdI.js";import"./IconWarning-Xp-mdAXG.js";import"./remote-CJHR20lz.js";import"./Dialog-DJ2-3VRx.js";import"./Button-DHla6nGC.js";import"./ProgressBar-BJi6WIHx.js";import"./Label-CdL3Pj-c.js";import"./Hidden-BTRmRI8a.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C2wPJC8Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-KZK5hlL_.js";import"./useFocus-Kf_jHJpa.js";import"./useFocusRing-DMB6fTXa.js";import"./useFocusable-DZVtVQHs.js";import"./OverlayArrow-DU6ABYYb.js";import"./useControlledState-BnTyVv5N.js";import"./Collection-CeBXcKv1.js";import"./CollectionBuilder-NEfM2aTk.js";import"./SelectionIndicator-CiCpZhmm.js";import"./Separator-Cd1GHDKW.js";import"./SelectionManager-0ETMkcPZ.js";import"./useEvent-BSnLayA0.js";import"./useCollator-Dw-CzaIq.js";import"./FocusScope-BRWQwIZz.js";import"./VisuallyHidden-BtDJhMaH.js";import"./ButtonView-BsJw5G4L.js";import"./Flex-CRYKgtbH.js";import"./useRef-U_kF6P4I.js";import"./ContextMenuSection-CeWW7BcO.js";import"./getActionGroupSlot-9D_vBtIQ.js";import"./FieldError-nKMDp4j0.js";import"./AlertText-dPEDb1m8.js";import"./AlertIcon-C23FUlLu.js";import"./Label.module-CUYTf9Jc.js";const{action:I}=__STORYBOOK_MODULE_ACTIONS__,W=I("submit"),m=o=>{const{ref:n,children:p,value:a,defaultValue:x,onChange:j,onBlur:C,form:b,name:E,disabled:S,isReadOnly:B,fieldComponentProps:{FieldErrorView:g,FieldErrorCaptureContext:y,fieldPropsContext:P,fieldProps:R}}=L(o);return r.jsxs("div",{...R,children:[r.jsx(y,{children:r.jsx(A,{props:P,children:p})}),r.jsx("input",{readOnly:B,disabled:S,form:b,name:E,ref:n,style:{order:2},value:a,defaultValue:x,onChange:j,onBlur:C}),r.jsx(g,{})]})},Zr={title:"Integrations/React Hook Form/CustomField",component:d,render:()=>{const o=async a=>{await c(1500),W(a)},n=l({defaultValues:{name:"helloCustomField"}}),p=_();return r.jsx(u,{form:n,onSubmit:o,children:r.jsxs(v,{children:[r.jsx(p,{name:"name",children:r.jsx(m,{children:r.jsx(s,{children:"Custom"})})}),r.jsxs(w,{children:[r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=l();return O.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Custom"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Custom"}),r.jsx(q,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=l();return r.jsxs(u,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Custom"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <CustomFieldComponent>
            <Label>Custom</Label>
          </CustomFieldComponent>
        </Field>
        <CustomFieldComponent isInvalid={true}>
          <Label>Custom</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CustomFieldComponent>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CustomFieldComponent>
            <Label>Custom</Label>
          </CustomFieldComponent>
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
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};
