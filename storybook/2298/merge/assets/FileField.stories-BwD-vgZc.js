import{j as r,r as x}from"./iframe-C-RKPwSE.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-1zvyZrSD.js";import{L as s}from"./Label-BZ9U-QOK.js";import{B as t}from"./Button-C4QFurWq.js";import{S}from"./Section-DGgswCDI.js";import{A as b}from"./ActionGroup-CdZy8cFO.js";import{s as u}from"./Action-fo4y3mrQ.js";import{F as m}from"./FileField-B9qmAiHW.js";import{F as B}from"./FieldError-Bk-w_c0r.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4AljtfH.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./clsx-B-dksMZM.js";import"./index-NcfLMdM4.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./context-CG0zmStT.js";import"./useRef-DJxmByEC.js";import"./utils-BNo7v4Co.js";import"./ButtonView-lpEgsJ9B.js";import"./browser-BU-qC_3h.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./IconWarning-B9kpDIcu.js";import"./remote-Dp4k7gKv.js";import"./Text-DceSOphz.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./LoadingSpinner-B5fSKp-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BUrsQ2n2.js";import"./ProgressBar-CT-OPPKM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8JiKPWZ.js";import"./useFocus-EK5CVku_.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocusable-BqhdVXbn.js";import"./ContextMenuSection-D3zQaczq.js";import"./Dialog-5IYWsYFe.js";import"./RSPContexts-7oABi43d.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./VisuallyHidden-lhIVNasT.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./useStatic-CxBkvBNE.js";import"./context-C3Gge9in.js";import"./useFormValidation-BVV7LE3u.js";import"./FieldError-BbtVOi4H.js";import"./Input-Dl0Z7qPf.js";import"./useFieldComponent-ILpXs27H.js";import"./AlertText-F-sJ7jVx.js";import"./AlertIcon-EwQ99KQC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
