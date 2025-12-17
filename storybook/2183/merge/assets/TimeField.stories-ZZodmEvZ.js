import{j as r,r as x}from"./iframe-D2Ryv2XM.js";import{u as p,F as a}from"./Form-D-bCb0z0.js";import{L as o}from"./Label-Dm7SPIiB.js";import{B as l}from"./Button-0ymElbGx.js";import{S as j}from"./Section-B5eWJ7cO.js";import{A as b}from"./ActionGroup-DNKY23T8.js";import{s as d}from"./Action-P2r8aGEo.js";import{K as E}from"./DateInput-D8IJ5HKq.js";import{T as t}from"./TimeField-BYPDUwF-.js";import{F as S}from"./FieldError-Df9KKLMS.js";import{F as c,t as T}from"./Field-rJhDd3xD.js";import{R as u}from"./ResetButton-BsZgDZaX.js";import{S as F}from"./SubmitButton-CH__5W-V.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-k7JOs1GI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./Label-BRB94mKh.js";import"./utils-BqLZYyR8.js";import"./Hidden-BS4L5nhJ.js";import"./IconApp-D72ec8J0.js";import"./remote-c0PQzJc6.js";import"./IconX-DZdRXBmP.js";import"./IconCheck-Bb3WY8_H.js";import"./Text-BztGJEd5.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./Text-D7v3tGEm.js";import"./LoadingSpinner-BrbkAsB7.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocus-CHBEY2MC.js";import"./useFocusRing-Bonkbq1h.js";import"./useFocusable-DzubWnzm.js";import"./ContextMenuSection-jWpLoqR_.js";import"./lib-90ocxLs-.js";import"./Dialog-Dv3Dn_KI.js";import"./RSPContexts-B-8XijCb.js";import"./OverlayArrow-DTmL_qI5.js";import"./useControlledState-B1ZkKesc.js";import"./Collection-jKLygJGW.js";import"./CollectionBuilder-Da9Ni7nz.js";import"./SelectionIndicator-B0cJwLAx.js";import"./Separator-BR_z4vVr.js";import"./SelectionManager-vwj_R8g4.js";import"./useEvent-OdyTuNWc.js";import"./useCollator-ZYyR423s.js";import"./FocusScope-1u2Sr5XR.js";import"./VisuallyHidden-CLaEN95T.js";import"./dynamic-CYMBERZG.js";import"./getActionGroupSlot-W54WmM0W.js";import"./useStatic-Dp5ohCc9.js";import"./context-FPyrczIP.js";import"./FieldError-CWHVrlnl.js";import"./Form-HDxy_CB-.js";import"./Group-ONole-Nc.js";import"./Input-B6UkKbKT.js";import"./useFormValidation-DGXgC3JE.js";import"./useFormReset-BscIah2r.js";import"./useSpinButton-ZYEpJQc4.js";import"./useFilter-DwLU2xMC.js";import"./useFieldComponent-w9ZrCArw.js";import"./IconDanger-DUFERqG9.js";import"./useRef-CNxeDH63.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:c,render:()=>{const e=async h=>{await d(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new E(16,0)}}),n=T();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
