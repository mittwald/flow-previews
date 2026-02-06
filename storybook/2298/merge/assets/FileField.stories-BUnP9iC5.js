import{j as r,r as x}from"./iframe-DITN2CQJ.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-DxGsaWiK.js";import{L as s}from"./Label-DJUexJHI.js";import{B as t}from"./Button-CLzuKoaU.js";import{S}from"./Section-cnEthzmo.js";import{A as b}from"./ActionGroup-eIIxfA96.js";import{s as u}from"./Action-2qaAsuOc.js";import{F as m}from"./FileField-xJhp80TK.js";import{F as B}from"./FieldError-B_BzuzIl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTg8la0V.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./clsx-B-dksMZM.js";import"./index-CwMYtruy.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./useRef-DMCflsxx.js";import"./utils-BKdkt1x6.js";import"./ButtonView-Cvj-tSsY.js";import"./browser-BAwbicjx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./IconWarning-CkCNWluG.js";import"./remote-C6sL0hfk.js";import"./Text-CADg3_Hr.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Text-C3mpKQD6.js";import"./LoadingSpinner-BNTqIab3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DxgBaz-V.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo3aLfgI.js";import"./useFocus-jV9bksDI.js";import"./useFocusRing-DGbEI6JP.js";import"./useFocusable-DLFLzCMb.js";import"./ContextMenuSection-CqDMtRiW.js";import"./Dialog-74mAI6R3.js";import"./RSPContexts-1XCmuogP.js";import"./OverlayArrow-IBPtGci-.js";import"./useControlledState-CEL2ngQO.js";import"./Collection-tRMlz9kZ.js";import"./CollectionBuilder-B14_oKNG.js";import"./SelectionIndicator-tBe1rngb.js";import"./Separator-DJanDtF2.js";import"./SelectionManager-C1JHyJxB.js";import"./useEvent-ByNOcoAW.js";import"./useCollator-CnUW-4Ed.js";import"./FocusScope-1T1zyEBb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./useStatic-CpFYvUzY.js";import"./context-DvDSM24h.js";import"./useFormValidation-PWdhcFqO.js";import"./FieldError-DyUcL9VR.js";import"./Input-Ct_cW2oz.js";import"./useFieldComponent-CFjzq3ou.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
