import{r as x,j as r}from"./iframe-D8EpHgnQ.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-Bdqeh-7e.js";import{L as t}from"./Label-cX-SxkfN.js";import{B as l}from"./Button-v3XDTDQm.js";import{S as b}from"./Section-B4kWzSE_.js";import{A as E}from"./ActionGroup-C8Sp28d_.js";import{s as c}from"./Action-Bqe5nSI1.js";import{L as S}from"./DateInput-CmaEtHKu.js";import{T as o}from"./TimeField-BbQtxw3q.js";import{F as T}from"./FieldError-WVs7H0vD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBeHUKte.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./clsx-B-dksMZM.js";import"./index-CTAMatFU.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./context-XjBPUYFu.js";import"./useRef-gITyoAnd.js";import"./utils-DUD9ssEU.js";import"./ButtonView-CR_WR_Xo.js";import"./browser-CYlhW0g_.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./IconWarning-lLcAh7ID.js";import"./remote-DkgoZmNz.js";import"./Text-Dkvkf5JK.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./Text-BH6HQaIi.js";import"./LoadingSpinner-BgyqdyMI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Kox0tnC0.js";import"./ProgressBar-CUBLGiqw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CilZkf8w.js";import"./useFocus-BoCERcfz.js";import"./useFocusRing-DyG-PWur.js";import"./useFocusable-BTi6De5a.js";import"./ContextMenuSection-Bk-U6hYN.js";import"./Dialog-CkEWxlO6.js";import"./RSPContexts-D9_YYEmh.js";import"./OverlayArrow-Dy1GJrBM.js";import"./useControlledState-XjABDLiW.js";import"./Collection-tHQuiu82.js";import"./CollectionBuilder-DEptz4hs.js";import"./SelectionIndicator-DYxlXw3H.js";import"./Separator-HrrYEwzP.js";import"./SelectionManager-DHCb6qwA.js";import"./useEvent-BJb2xoQw.js";import"./useCollator-BLLhI1Uc.js";import"./FocusScope-2M3u1eHn.js";import"./VisuallyHidden-maxPxeqi.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./useStatic-BaYU_ZGV.js";import"./context-CfNS10y1.js";import"./FieldError-EP30ks0X.js";import"./Form-C9f2RCk6.js";import"./Group-DDKIXJlU.js";import"./Input-DK3Av_oy.js";import"./useFormReset-DtPxpP1_.js";import"./useFormValidation-CthS1N1f.js";import"./useSpinButton-CucwEhHc.js";import"./useFilter-DBw1EUt-.js";import"./useFieldComponent-gPWDO_C1.js";import"./AlertText-CV2tVP-G.js";import"./AlertIcon-Dtjl7KDj.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
