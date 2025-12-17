import{j as r,r as x}from"./iframe-BsZhBXal.js";import{u as l,F as a}from"./Form-B7ghN0ur.js";import{L as s}from"./Label-XwOnxXzc.js";import{F as c,t as j}from"./Field-DLAz7mqq.js";import{B as t}from"./Button-Cxmuw7nD.js";import{S}from"./Section-4lXA4afp.js";import{A as b}from"./ActionGroup-Nx7KWa-a.js";import{s as u}from"./Action-CL1C_viL.js";import{F as m}from"./FileField-DzgH_H0Q.js";import{F as B}from"./FieldError-CMRDgIJA.js";import{R as d}from"./ResetButton-ClO0pQ_P.js";import{S as p}from"./SubmitButton-yYHmVNB1.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B5Kx9HDY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Label-Bdtu_aaV.js";import"./utils-D7f3lHNi.js";import"./Hidden-B-7zzc6R.js";import"./dynamic-V9DMyUPi.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./ContextMenuSection-C2eJTG_x.js";import"./lib-90ocxLs-.js";import"./Dialog-D9Y5GrYo.js";import"./RSPContexts-CGJG9_Ew.js";import"./OverlayArrow-CT9B4GiY.js";import"./useControlledState-Bxg7VuAu.js";import"./Collection-DAkGHX-3.js";import"./CollectionBuilder-D8uuaET0.js";import"./SelectionIndicator-BYUqX36x.js";import"./Separator-Bm5TH6F1.js";import"./SelectionManager-BYlJdR-V.js";import"./useEvent-BIGXqu2E.js";import"./useCollator-CmHstSkI.js";import"./FocusScope-qpEeXdaL.js";import"./VisuallyHidden-W4tQCM8c.js";import"./getActionGroupSlot-BjVvI7Fw.js";import"./useStatic-CKUwua6_.js";import"./context-DVwGhZ9t.js";import"./useFormValidation-WNRR-_5g.js";import"./FieldError-Dpf9fLlc.js";import"./Input-Bo9ofHsZ.js";import"./useFieldComponent-DadDOWX3.js";import"./IconDanger-D44A5Pyv.js";import"./useRef-BLO8ZTUr.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Tr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const e=async h=>{await u(5e3),y(h)},f=l({defaultValues:{user:""}}),F=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,kr as __namedExportsOrder,Tr as default};
