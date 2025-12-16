import{j as r,r as x}from"./iframe-VGYf9uSR.js";import{u as l,F as a}from"./Form-CqpM73eC.js";import{L as s}from"./Label--ix077tG.js";import{F as c,t as j}from"./Field-FVf6FHyZ.js";import{B as t}from"./Button-C33JxfbF.js";import{S}from"./Section-DooU3tnD.js";import{A as b}from"./ActionGroup-BlzYnYWF.js";import{s as u}from"./Action-BU572vpz.js";import{F as m}from"./FileField-BLkx8Al2.js";import{F as B}from"./FieldError-CLzXjLUN.js";import{R as d}from"./ResetButton-CH8u8jqD.js";import{S as p}from"./SubmitButton-Q6E9h_vz.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BY7YAvyX.js";import"./utils-BB4afhje.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-BJkjz94f.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./context-CKMs_ua8.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BXsOFxWd.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./Text-CGbJaU4z.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./ContextMenuSection-BlQWtT47.js";import"./lib-90ocxLs-.js";import"./context-DPoGZDoo.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./useStatic-DRLyxIeE.js";import"./getActionGroupSlot-BnsqQCvq.js";import"./useFormValidation-DNcRsa8m.js";import"./FieldError-AWx0XaHn.js";import"./Input-DAGTqZv7.js";import"./useFieldComponent-DiUYLu0s.js";import"./Activity-CX_biUm5.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-B5Kx1O1H.js";import"./useRef-CXvi-_o4.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),_r={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const e=async h=>{await u(5e3),y(h)},f=l({defaultValues:{user:""}}),F=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,wr as __namedExportsOrder,_r as default};
