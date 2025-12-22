import{j as r,r as x}from"./iframe-D3NxpU8u.js";import{b as a,u as p,F as d,t as j}from"./Form-BS1fmLWP.js";import{L as t}from"./Label-DxphAsDG.js";import{R as u,S as F}from"./ResetButton-BwZ7v_gB.js";import{B as l}from"./Button-edx4tjlA.js";import{S as b}from"./Section-DtUAatzw.js";import{A as E}from"./ActionGroup-BiPDUCFA.js";import{s as c}from"./Action-CgjRBsSL.js";import{L as S}from"./DateInput-BteoExce.js";import{T as o}from"./TimeField-BA9TNRrW.js";import{F as T}from"./FieldError-CpaS6eds.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cp5s9Mjb.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./clsx-B-dksMZM.js";import"./index-A0HM7_1k.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./context-CgVi_M53.js";import"./browser-_fqBbauj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dn1Y_s7S.js";import"./utils-C5WN15Gt.js";import"./Hidden-CJU5gFpe.js";import"./useRef-DzPq8Aca.js";import"./IconWarning-CbcK8G8M.js";import"./remote-Cz3kT78_.js";import"./Text-D1hVvtRE.js";import"./EmulatedBoldText-BTtwXUtX.js";import"./Text-ChwArYoy.js";import"./LoadingSpinner-D_HEbJEf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BOXTMksI.js";import"./ProgressBar-COGAiyei.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DrWOXoHd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Byc6DAfn.js";import"./useFocus-C0SaCLF4.js";import"./useFocusRing-EPMGJgfm.js";import"./useFocusable-C5GnurYQ.js";import"./ContextMenuSection-BZ_yBJ42.js";import"./Dialog-CvwxtaFW.js";import"./RSPContexts-ClgHsKPZ.js";import"./OverlayArrow-B3oUpodu.js";import"./useControlledState-CQ4qwdX_.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./SelectionManager-x8dLLgK6.js";import"./useEvent-C375hDTh.js";import"./useCollator-CIF19XO1.js";import"./FocusScope-0a8lKbDZ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./getActionGroupSlot-BO1T8GeY.js";import"./useStatic-Cxgn0lDK.js";import"./context-BviD8e-k.js";import"./FieldError-C5ECIufL.js";import"./Form-CjVHpqWM.js";import"./Group-Bt94AlX-.js";import"./Input-DsjyUW1i.js";import"./useFormValidation-sS7ClLRw.js";import"./useFormReset-LpCZRAmu.js";import"./useSpinButton-Ci7AbaTl.js";import"./useFilter-CEIajFed.js";import"./useFieldComponent-BWjf97vE.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,kr as __namedExportsOrder,$r as default};
