import{j as r,r as x}from"./iframe-V6WnBfM7.js";import{u as p,F as a}from"./Form-BFN9X6JW.js";import{L as o}from"./Label-DEwwG9Jt.js";import{F as d,t as j}from"./Field-DySAKZE6.js";import{B as l}from"./Button-RYsAGsBp.js";import{S as b}from"./Section-C3IzM_e_.js";import{A as E}from"./ActionGroup-PdVGvWFz.js";import{s as c}from"./Action-B-oQDmqe.js";import{K as S}from"./DateInput-abqVFY5r.js";import{T as t}from"./TimeField-Be5H-jw3.js";import{F as T}from"./FieldError-CMIqd9eM.js";import{R as u}from"./ResetButton-DyXJSvX6.js";import{S as F}from"./SubmitButton-CHHAinLt.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DYYNnrYB.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFUX8R2_.js";import"./index-BKCF-LL0.js";import"./index-WvfsijJu.js";import"./useLocalizedStringFormatter-DNkPXAX_.js";import"./context-LYg4mQF7.js";import"./Label-CXxg3a67.js";import"./utils-XXCohoWw.js";import"./Hidden-CdYZU9wP.js";import"./dynamic-DY2czHtX.js";import"./IconApp-Dy8CvIso.js";import"./remote-BEdoHpvj.js";import"./IconX-DudELXV7.js";import"./IconCheck-C4i47zDQ.js";import"./Text-BOvroeJC.js";import"./EmulatedBoldText-C80B2tZx.js";import"./Text-D3RRQUEj.js";import"./LoadingSpinner-B8i510y1.js";import"./ariaLive-IMmTuqYB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-X5JzQY6M.js";import"./ProgressBar-DGuSqhT6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-EvuRJYDK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8kRQmXV.js";import"./useFocus-CBAz-6m6.js";import"./useFocusRing-ffR2xJu-.js";import"./useFocusable-Cu8jcZF4.js";import"./ContextMenuSection-BCiBPO23.js";import"./lib-90ocxLs-.js";import"./Dialog-C89akVID.js";import"./RSPContexts-Bt_iJ6go.js";import"./OverlayArrow-Cit__A6Y.js";import"./useControlledState-CthGvIJy.js";import"./Collection-z9VX5kUn.js";import"./CollectionBuilder-DFDOtDir.js";import"./SelectionIndicator-D4v-q-K9.js";import"./Separator-BqbnfN10.js";import"./SelectionManager-BQeEKp2X.js";import"./useEvent-DIPTDlyA.js";import"./useCollator-Dg7pOOpD.js";import"./FocusScope-CBJcWxYD.js";import"./VisuallyHidden-Cv44kzCG.js";import"./getActionGroupSlot-BOc6vLFR.js";import"./useStatic-BS6-BQsW.js";import"./context-D5s5gcMw.js";import"./FieldError-D586kEZH.js";import"./Form-hCONeUH-.js";import"./Group-Lwbt_jXO.js";import"./Input-CgTEN6Lm.js";import"./useFormValidation-sHnlqGhj.js";import"./useFormReset-C3fVW2xK.js";import"./useSpinButton-FpKTGdt2.js";import"./useFilter-B9rb7xIl.js";import"./useFieldComponent-0Fzy9Tw8.js";import"./IconDanger-XFGdJtLf.js";import"./useRef-dMG_y6og.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Nr={title:"Integrations/React Hook Form/TimeField",component:d,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(d,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
