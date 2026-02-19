import{r as x,j as r}from"./iframe-CXQlTNqj.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-CuQl0VZE.js";import{L as t}from"./Label-Dp8rzwUw.js";import{B as l}from"./Button-BlafpMbq.js";import{S as b}from"./Section-D3kMglmp.js";import{A as E}from"./ActionGroup-DpfWBi-0.js";import{s as c}from"./ActionBatch-CqBtrpsE.js";import{L as S}from"./DateInput-RezCpZlE.js";import{T as o}from"./TimeField-f40hKf3T.js";import{F as T}from"./FieldError-BB5Q0mgv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-UE7lg7x0.js";import"./flowComponent-C6ZYuDSe.js";import"./index-BSs4nRRG.js";import"./clsx-B-dksMZM.js";import"./index-AYGk-Z4X.js";import"./useLocalizedStringFormatter-B9SYg2k8.js";import"./context-CCBj18N5.js";import"./ActionGroupView-DaaNBgYo.js";import"./Content-DYKIsFxH.js";import"./Heading-NHDwQUXa.js";import"./Heading-D8oa06Vc.js";import"./RSPContexts-CaXq0cAk.js";import"./utils-DV_byzth.js";import"./Text-B3somVi7.js";import"./browser-C0g7jXxm.js";import"./EmulatedBoldText-DjcO8VHN.js";import"./Text-QCBVP_aW.js";import"./Modal-yrBxLTE3.js";import"./useOverlayController-E6hXP07l.js";import"./useStatic-D-kx8TMY.js";import"./Overlay-DpNQvUDC.js";import"./OverlayContextProvider-97FigBld.js";import"./LoadingSpinner-Wa1FVRzC.js";import"./IconWarning-qWu7I_Pu.js";import"./remote-aElBUAr6.js";import"./Dialog-D3U2a9zn.js";import"./Button-BcwVzCcr.js";import"./ProgressBar-DkaBE4Rp.js";import"./Label-DrfdLf3_.js";import"./Hidden-CKkXVPeJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DrjDs4EL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C3E8Ss2p.js";import"./useFocus-DfPsdBQQ.js";import"./useFocusRing-D1AlgOvW.js";import"./useFocusable-D7YkDf-E.js";import"./OverlayArrow-sIEanX_d.js";import"./useControlledState-CC0ueLns.js";import"./Collection-TmQT-68Q.js";import"./CollectionBuilder-9Nd9UEc1.js";import"./SelectionIndicator-DQZUhYCh.js";import"./Separator-Bs-03xzt.js";import"./SelectionManager-CqkX1Rni.js";import"./useEvent-AkpP6oW4.js";import"./useCollator-BFpQRgzB.js";import"./FocusScope-Dqueyleg.js";import"./VisuallyHidden-bRUw4X6B.js";import"./ButtonView-CW0bd9Hv.js";import"./Flex-BrEPexUM.js";import"./useRef-PDOIY6yC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-nZf_hQYT.js";import"./getActionGroupSlot-D2yWy39Q.js";import"./FieldError-CtbrQfSs.js";import"./Form-CN1ucAgL.js";import"./Group-COTR0fAc.js";import"./Input-CLvZry-y.js";import"./useFormReset-BDdgSN6q.js";import"./useFormValidation-CRz2e402.js";import"./useSpinButton-DCkVKfGo.js";import"./useFilter-lE8H688E.js";import"./useFieldComponent-Cn71_kOc.js";import"./AlertText-GJJuhpY7.js";import"./AlertIcon-B77GTCGL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
