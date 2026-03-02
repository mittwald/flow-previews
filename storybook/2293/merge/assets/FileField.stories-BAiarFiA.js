import{j as r,r as x}from"./iframe-bYrN4iqU.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-DRmRwOi9.js";import{L as s}from"./Label-CPmhF0es.js";import{B as t}from"./Button-BXFpqU-p.js";import{S}from"./Section-K4GUZgJE.js";import{A as b}from"./ActionGroup-Cgs-Q9B3.js";import{s as u}from"./Action-BReqqCkr.js";import{F as m}from"./FileField-0iNqFltb.js";import{F as B}from"./FieldError-DELvRCSS.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CHbvz_qx.js";import"./flowComponent-DKWMiQh4.js";import"./index-BecUo0Hm.js";import"./clsx-B-dksMZM.js";import"./index-ByZhX1CH.js";import"./useLocalizedStringFormatter-gsFqTt9C.js";import"./context-Hrlbzros.js";import"./useRef-2-y0_1ka.js";import"./utils-B3voqzat.js";import"./ButtonView-Dq6BfzVS.js";import"./browser-CHbB-bBA.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BHh_gacH.js";import"./Hidden-kCI5Fish.js";import"./IconWarning-m_DFVeXI.js";import"./remote-zHy9wvpL.js";import"./Text-Ggj8lIEk.js";import"./EmulatedBoldText-Dg0kR_8L.js";import"./Text-Dj7c1Gq2.js";import"./LoadingSpinner-jOE_2qaU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BmdWdjlP.js";import"./ProgressBar-Df7WbfFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-xelku7uN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHP3pRkH.js";import"./useFocus-DIDqk3LI.js";import"./useFocusRing-D4lo4_Zr.js";import"./useFocusable-fXM7Y9pN.js";import"./ContextMenuSection-BqvB1DY5.js";import"./Dialog-CxLv1-pk.js";import"./RSPContexts-CblVL1A7.js";import"./OverlayArrow-CBzM-Xoe.js";import"./useControlledState-hBcxnaS2.js";import"./Collection-k_p8jiFF.js";import"./CollectionBuilder-B7QPPD_O.js";import"./SelectionIndicator-MjQ5C6Rd.js";import"./Separator-CVohJStV.js";import"./SelectionManager-CkqK1ezZ.js";import"./useEvent-BnAk5cqF.js";import"./useCollator-CUuaB6UV.js";import"./FocusScope-DaLeJatZ.js";import"./VisuallyHidden-DAWjrZx-.js";import"./getActionGroupSlot-9Vl-KgEl.js";import"./useStatic-ByHvTm37.js";import"./context-CIgtX0DK.js";import"./useFormValidation-CAwH-_ip.js";import"./FieldError-BBcT2nDa.js";import"./Input-DaDcKDBm.js";import"./useFieldComponent-CM1iSrAB.js";import"./AlertText-BULPfvI7.js";import"./AlertIcon-fl_R2PKX.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
