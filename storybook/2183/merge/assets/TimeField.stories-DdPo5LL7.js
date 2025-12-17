import{j as r,r as x}from"./iframe-Be6XOKZ5.js";import{u as p,F as a}from"./Form-eVrc1KBF.js";import{L as o}from"./Label-BV6L8qwz.js";import{F as d,t as j}from"./Field-C1mAmvlm.js";import{B as l}from"./Button-BryZpx7e.js";import{S as b}from"./Section-BTWBVwqS.js";import{A as E}from"./ActionGroup-w2LdjwBp.js";import{s as c}from"./Action-DlMDZkrW.js";import{K as S}from"./DateInput-C-HmDGEa.js";import{T as t}from"./TimeField-Cvaimmli.js";import{F as T}from"./FieldError-nKJnRYyC.js";import{R as u}from"./ResetButton-CIg3CQL7.js";import{S as F}from"./SubmitButton-RdvYhqV5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DsJM6Avf.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-6mfYofmL.js";import"./index-BVQeIHXT.js";import"./index-Dwi0F_ix.js";import"./useLocalizedStringFormatter-D98CS6hT.js";import"./context-Y40TL0Hk.js";import"./Label-Da4d84kD.js";import"./utils-DTrZMB6V.js";import"./Hidden-B9nXAMyK.js";import"./dynamic-CbSjc9zn.js";import"./IconApp-BnAy9RaD.js";import"./remote-D-Pq4nVM.js";import"./IconX-IgnkgWW1.js";import"./IconCheck-BAgPnW-l.js";import"./Text-BB90vNXB.js";import"./EmulatedBoldText-BA4PJkye.js";import"./Text-BTmMxR_a.js";import"./LoadingSpinner-CCyY2N1z.js";import"./ariaLive-BV9_iZAk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CnLdg8UY.js";import"./ProgressBar-rm9lHQqR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMWHK1ZY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CK7mbUzy.js";import"./useFocus-DYvnwNR4.js";import"./useFocusRing-B31Et6wQ.js";import"./useFocusable-DlKb8H3E.js";import"./ContextMenuSection-Dcu1peX7.js";import"./lib-90ocxLs-.js";import"./Dialog-D_uiNSw9.js";import"./RSPContexts-ukpjCqjI.js";import"./OverlayArrow-C8LdGvT4.js";import"./useControlledState-D8v_kqVI.js";import"./Collection-9Rz1Z382.js";import"./CollectionBuilder-TiwdMYff.js";import"./SelectionIndicator-CQaSWhBM.js";import"./Separator-B8NszCgW.js";import"./SelectionManager-BUAbzA69.js";import"./useEvent-B2MQOoAh.js";import"./useCollator-daqLYSV2.js";import"./FocusScope-BGhm_0o7.js";import"./VisuallyHidden-G45Y0eAf.js";import"./getActionGroupSlot-C22isMYd.js";import"./useStatic-ChLd1gy1.js";import"./context-DNuic7EB.js";import"./FieldError-eVRm8xCS.js";import"./Form-C9wSRzl5.js";import"./Group-CkZTiy9Q.js";import"./Input-B17NRXjc.js";import"./useFormValidation-DMz_tWT4.js";import"./useFormReset-Bo-wy8NL.js";import"./useSpinButton-OmBJ43SO.js";import"./useFilter-C6-YXzn2.js";import"./useFieldComponent-DyzWtSt-.js";import"./IconDanger-CuHxVEgS.js";import"./useRef-CvcNQxUy.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:d,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Ur as __namedExportsOrder,Nr as default};
