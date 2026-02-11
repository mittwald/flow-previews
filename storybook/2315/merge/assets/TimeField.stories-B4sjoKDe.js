import{r as x,j as r}from"./iframe-DiUxw81Q.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-DLc-3RhS.js";import{L as t}from"./Label-DpHnEhHE.js";import{B as l}from"./Button-gnRq8NvL.js";import{S as b}from"./Section-DUwGPO-R.js";import{A as E}from"./ActionGroup-CgTxc8cR.js";import{s as c}from"./Action-D_TEMwel.js";import{L as S}from"./DateInput-Bp4FGDuq.js";import{T as o}from"./TimeField-Cpdk78pY.js";import{F as T}from"./FieldError-DH3i7Cba.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bvqmautb.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./clsx-B-dksMZM.js";import"./index-2ROVwQvu.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./context-si8TSn1j.js";import"./useRef-C5iQicBg.js";import"./utils-BhADjK-H.js";import"./ButtonView-DRbY-aON.js";import"./browser-DhblGL2Q.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./IconWarning-DJftz4M-.js";import"./remote-dRe2-fx5.js";import"./Text-CMit6jNZ.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./Text-CUd3ZjBr.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JQtyulyF.js";import"./ProgressBar-HXLQU2Vm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-yn1VwYEU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-I-WC2YFt.js";import"./useFocus-DSwjHrh5.js";import"./useFocusRing-BpbrWv_K.js";import"./useFocusable-bbwyacvB.js";import"./ContextMenuSection-CCmic__u.js";import"./Dialog-CJTGGTvx.js";import"./RSPContexts-D4TaMXlQ.js";import"./OverlayArrow-BBITTnz5.js";import"./useControlledState-DDLUXLOw.js";import"./Collection-BtPubrtW.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./SelectionIndicator-BsyJ81fY.js";import"./Separator-CQ3T4lOo.js";import"./SelectionManager-BOTG9Axa.js";import"./useEvent-D_adZsOG.js";import"./useCollator-uFjTzBPf.js";import"./FocusScope-moHWWkwF.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./useStatic-BoyD6q7D.js";import"./context-C7B1j1st.js";import"./FieldError-BKME6Hw5.js";import"./Form-kW4DkkVS.js";import"./Group-DEqw8J9L.js";import"./Input-lzxTVruz.js";import"./useFormReset-Cz-LaBzR.js";import"./useFormValidation-CsqhaN7Y.js";import"./useSpinButton-Dh_2DzSL.js";import"./useFilter-DXRQN3H4.js";import"./useFieldComponent-BFiXxBQU.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
