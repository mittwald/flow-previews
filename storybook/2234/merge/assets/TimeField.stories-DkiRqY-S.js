import{j as r,r as x}from"./iframe-ByN7k_Da.js";import{b as a,u as p,F as d,t as j}from"./Form-A9NbCi2n.js";import{L as t}from"./Label-BBHPfwM0.js";import{R as u,S as F}from"./ResetButton-DsCSi1o1.js";import{B as l}from"./Button-DLduC619.js";import{S as b}from"./Section-DskLKzhN.js";import{A as E}from"./ActionGroup-CeHX0BIO.js";import{s as c}from"./Action-BmGz2Z1M.js";import{L as S}from"./DateInput-iNc4DTnk.js";import{T as o}from"./TimeField-UJ35wWrk.js";import{F as T}from"./FieldError-Dqic_FOg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CwJG9Kct.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./clsx-B-dksMZM.js";import"./index-bUl7c0HC.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./context-rGL7bC8_.js";import"./browser-Co1wUnJx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BgjwP7On.js";import"./utils-D8xEYOuW.js";import"./Hidden-LyHOqGkt.js";import"./useRef-BvFrDEXj.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./Text-Cb-8LAS5.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./Text-j0nufsIB.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAFU8pmb.js";import"./ProgressBar-BhTwnbUK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-x0Vjylpp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BphJYqm5.js";import"./useFocus-CetkVqMR.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocusable-D-qYSNYm.js";import"./ContextMenuSection-Cx4PBQo5.js";import"./Dialog-Cvkq5YiV.js";import"./RSPContexts-BhXs16ev.js";import"./OverlayArrow-DDuz5amj.js";import"./useControlledState-kSDz6lD9.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./VisuallyHidden-CV3OLvgc.js";import"./getActionGroupSlot-QyQMFXwP.js";import"./useStatic-BKQ_69l_.js";import"./context-D7USXnL-.js";import"./FieldError-JBJ_RfAm.js";import"./Form-Ccgq6KTF.js";import"./Group-DdqPhRGU.js";import"./Input-BhhO42Bj.js";import"./useFormValidation-C6EqEf55.js";import"./useFormReset-Bc5cKrWY.js";import"./useSpinButton-CQyF4G42.js";import"./useFilter-DJtcmODR.js";import"./useFieldComponent-DAKvP2zf.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Gr as __namedExportsOrder,Cr as default};
