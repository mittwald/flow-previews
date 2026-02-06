import{j as r,r as x}from"./iframe-DITN2CQJ.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-DxGsaWiK.js";import{L as t}from"./Label-DJUexJHI.js";import{B as l}from"./Button-CLzuKoaU.js";import{S as b}from"./Section-cnEthzmo.js";import{A as E}from"./ActionGroup-eIIxfA96.js";import{s as c}from"./Action-2qaAsuOc.js";import{L as S}from"./DateInput-CB8kF9kF.js";import{T as o}from"./TimeField-DSFL8L-W.js";import{F as T}from"./FieldError-B_BzuzIl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTg8la0V.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./clsx-B-dksMZM.js";import"./index-CwMYtruy.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./useRef-DMCflsxx.js";import"./utils-BKdkt1x6.js";import"./ButtonView-Cvj-tSsY.js";import"./browser-BAwbicjx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./IconWarning-CkCNWluG.js";import"./remote-C6sL0hfk.js";import"./Text-CADg3_Hr.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Text-C3mpKQD6.js";import"./LoadingSpinner-BNTqIab3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DxgBaz-V.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo3aLfgI.js";import"./useFocus-jV9bksDI.js";import"./useFocusRing-DGbEI6JP.js";import"./useFocusable-DLFLzCMb.js";import"./ContextMenuSection-CqDMtRiW.js";import"./Dialog-74mAI6R3.js";import"./RSPContexts-1XCmuogP.js";import"./OverlayArrow-IBPtGci-.js";import"./useControlledState-CEL2ngQO.js";import"./Collection-tRMlz9kZ.js";import"./CollectionBuilder-B14_oKNG.js";import"./SelectionIndicator-tBe1rngb.js";import"./Separator-DJanDtF2.js";import"./SelectionManager-C1JHyJxB.js";import"./useEvent-ByNOcoAW.js";import"./useCollator-CnUW-4Ed.js";import"./FocusScope-1T1zyEBb.js";import"./VisuallyHidden-Mqey0SE0.js";import"./getActionGroupSlot-ZZyd_ZT4.js";import"./useStatic-CpFYvUzY.js";import"./context-DvDSM24h.js";import"./FieldError-DyUcL9VR.js";import"./Form-CKWsALrB.js";import"./Group-pLm-fq-m.js";import"./Input-Ct_cW2oz.js";import"./useFormValidation-PWdhcFqO.js";import"./useFormReset-DRsSvhwB.js";import"./useSpinButton-jhcoRUKm.js";import"./useFilter-Dnu8mjJR.js";import"./useFieldComponent-CFjzq3ou.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
