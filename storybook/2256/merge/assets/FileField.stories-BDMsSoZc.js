import{j as r,r as x}from"./iframe-CIXg2wml.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-C1eP4EZB.js";import{L as s}from"./Label-qxc1gCGy.js";import{B as t}from"./Button-BNUMHVa-.js";import{S}from"./Section-BHH0DwO5.js";import{A as b}from"./ActionGroup-D8b5vxgA.js";import{s as u}from"./Action-BuQCX6jm.js";import{F as m}from"./FileField-DnLhkXsu.js";import{F as B}from"./FieldError-BH2vnwI0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DkFDoLPd.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./clsx-B-dksMZM.js";import"./index-CUACQQJf.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./context-TKY6ae7T.js";import"./useRef-BLTU0nYb.js";import"./utils-E3QCR4Ei.js";import"./ButtonView-BpZiG3F4.js";import"./browser-CYeJE0Iy.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./IconWarning-CiSujg9K.js";import"./remote-8tD3tcl0.js";import"./Text-ClE4EaJv.js";import"./EmulatedBoldText--LsvyM20.js";import"./Text-BTcAnKOQ.js";import"./LoadingSpinner-DwfvHd6g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BbDeItRQ.js";import"./ProgressBar-CFDr9Wxg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pvILaDrT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C_LDf41x.js";import"./useFocus-Xgz2P1v-.js";import"./useFocusRing-CJfArHTm.js";import"./useFocusable-LSbGRyyR.js";import"./ContextMenuSection-C_CrFgfB.js";import"./Dialog-f9GqGINB.js";import"./RSPContexts-CMEo-sGH.js";import"./OverlayArrow-Bgb8SBf8.js";import"./useControlledState-euBd3hty.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./useStatic-CosBs7oI.js";import"./context-CXkwD4h5.js";import"./useFormValidation-B5rYBS3I.js";import"./FieldError-B2EiL9vq.js";import"./Input-DGQ1K2ts.js";import"./useFieldComponent-D7V8J4vf.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ar as __namedExportsOrder,qr as default};
