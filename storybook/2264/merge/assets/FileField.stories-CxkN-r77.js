import{j as r,r as x}from"./iframe-HHIIuBER.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-2sRpn4iN.js";import{L as s}from"./Label-CBXKH6Tn.js";import{B as t}from"./Button-D9uXd6kS.js";import{S}from"./Section-DSfs8S5C.js";import{A as b}from"./ActionGroup-CAmp-FAx.js";import{s as u}from"./Action-_oJPJyM7.js";import{F as m}from"./FileField-OvJ85xrE.js";import{F as B}from"./FieldError-Fy3l3DO0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-UvYry7O0.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./clsx-B-dksMZM.js";import"./index-CXDCOpiF.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./context-BwOS-W-N.js";import"./useRef-UyhpXirX.js";import"./utils-Cg0Q0SJj.js";import"./ButtonView-QAfAhpRw.js";import"./browser-BiwdkBmz.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./IconWarning-CPuUEZGY.js";import"./remote-MyOm1NIW.js";import"./Text-1gTdtZLR.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./LoadingSpinner-DsMp8zOw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B3mdCDJz.js";import"./ProgressBar-2UTBzJPE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5SH0-wGx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DR7SsbUT.js";import"./useFocus--KWf2FGc.js";import"./useFocusRing-4HIuR3kq.js";import"./useFocusable-CK9MQKQ0.js";import"./ContextMenuSection-CTAuboSL.js";import"./Dialog-17xgL67A.js";import"./RSPContexts-DTcyqJ2O.js";import"./OverlayArrow-BDTM6fDd.js";import"./useControlledState-DbjjrDzt.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./VisuallyHidden-W06uk0vU.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./useStatic-CHenPBZg.js";import"./context-D550pjOP.js";import"./useFormValidation-CzNeWdfJ.js";import"./FieldError-DxbTuNm9.js";import"./Input-BPv4G1er.js";import"./useFieldComponent-DUw61_cc.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
