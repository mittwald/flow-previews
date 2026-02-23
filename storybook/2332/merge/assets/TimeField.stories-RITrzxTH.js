import{r as x,j as r}from"./iframe-DunzINT4.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-74oeQDLV.js";import{L as t}from"./Label-CAkB50pb.js";import{B as l}from"./Button-D4ye7DRq.js";import{S as b}from"./Section-M7f3R8gL.js";import{A as E}from"./ActionGroup-CU6CeMc_.js";import{s as c}from"./ActionBatch-CdGiFur7.js";import{L as S}from"./DateInput-Da4My28f.js";import{T as o}from"./TimeField-Dcp0IdQj.js";import{F as T}from"./FieldError-CxTapnNI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic--RH-hhxe.js";import"./flowComponent-CeuyEBcJ.js";import"./index-eVQn7fN1.js";import"./clsx-B-dksMZM.js";import"./index-Wl0ZfLjP.js";import"./useLocalizedStringFormatter-DXa2M0xs.js";import"./context-XFBu4tuG.js";import"./ActionGroupView-xmbZNfvW.js";import"./Content-C85uPduS.js";import"./Heading-ClXpNfz0.js";import"./Heading-B3Dcho9D.js";import"./RSPContexts-DYG4soUM.js";import"./utils-B66WPIWK.js";import"./Text-DTHO_DRR.js";import"./browser-CUqULdV9.js";import"./EmulatedBoldText-Bdm-2WSs.js";import"./Text-CMXpTIb-.js";import"./Modal-BoYgkIb6.js";import"./useOverlayController-CeSeYZW0.js";import"./useStatic-CPAaCdO2.js";import"./Overlay-DI6L0QBM.js";import"./OverlayContextProvider-CLfsrj3T.js";import"./LoadingSpinner-CzZyxAnt.js";import"./IconWarning-kFcnfyhN.js";import"./remote-BHsosJBg.js";import"./Dialog-Da1bNoxP.js";import"./Button-C6WdG1X1.js";import"./ProgressBar-BpvfS7s7.js";import"./Label-BZPwsdxQ.js";import"./Hidden-B50LlJsW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClizNTl4.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VDpDAbVy.js";import"./useFocus-CLsD99Jd.js";import"./useFocusRing-BpLynkPU.js";import"./useFocusable-BqXitQDl.js";import"./OverlayArrow-DJczCQVT.js";import"./useControlledState-BzLfbFoS.js";import"./Collection-DamVlN_y.js";import"./CollectionBuilder-px4k6lS7.js";import"./SelectionIndicator-BB6AU3Ia.js";import"./Separator-kz0LFyO1.js";import"./SelectionManager-DVODTGrP.js";import"./useEvent-ygxdZpKO.js";import"./useCollator-D3GFS6us.js";import"./FocusScope-9vf2uR4m.js";import"./VisuallyHidden-C85ONzQn.js";import"./ButtonView-Db2YbPTU.js";import"./Flex-D0W34hyw.js";import"./useRef-GWWqzfEo.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BBATHhHi.js";import"./getActionGroupSlot-CDL5t1gM.js";import"./FieldError-MxPTKBhw.js";import"./Form-Dp-IAcVR.js";import"./Group-Cb2TDoEs.js";import"./Input-CibPE8Js.js";import"./useFormReset-BCoUHfvE.js";import"./useFormValidation-CAKGNU-r.js";import"./useSpinButton-keUOKT7_.js";import"./useFilter-DaT-KPmH.js";import"./useFieldComponent-mGz2JkQm.js";import"./AlertText-CXIp0I6q.js";import"./AlertIcon-Bju3yLvF.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
