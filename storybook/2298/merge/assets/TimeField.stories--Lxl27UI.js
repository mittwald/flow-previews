import{j as r,r as x}from"./iframe-C-RKPwSE.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-1zvyZrSD.js";import{L as t}from"./Label-BZ9U-QOK.js";import{B as l}from"./Button-C4QFurWq.js";import{S as b}from"./Section-DGgswCDI.js";import{A as E}from"./ActionGroup-CdZy8cFO.js";import{s as c}from"./Action-fo4y3mrQ.js";import{L as S}from"./DateInput-BvwyOGce.js";import{T as o}from"./TimeField-BJ_kY_D_.js";import{F as T}from"./FieldError-Bk-w_c0r.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4AljtfH.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./clsx-B-dksMZM.js";import"./index-NcfLMdM4.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./context-CG0zmStT.js";import"./useRef-DJxmByEC.js";import"./utils-BNo7v4Co.js";import"./ButtonView-lpEgsJ9B.js";import"./browser-BU-qC_3h.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./IconWarning-B9kpDIcu.js";import"./remote-Dp4k7gKv.js";import"./Text-DceSOphz.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./LoadingSpinner-B5fSKp-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BUrsQ2n2.js";import"./ProgressBar-CT-OPPKM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8JiKPWZ.js";import"./useFocus-EK5CVku_.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocusable-BqhdVXbn.js";import"./ContextMenuSection-D3zQaczq.js";import"./Dialog-5IYWsYFe.js";import"./RSPContexts-7oABi43d.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./VisuallyHidden-lhIVNasT.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./useStatic-CxBkvBNE.js";import"./context-C3Gge9in.js";import"./FieldError-BbtVOi4H.js";import"./Form-BmIWUPX1.js";import"./Group-Dxij56r3.js";import"./Input-Dl0Z7qPf.js";import"./useFormValidation-BVV7LE3u.js";import"./useFormReset-Bo6mTD_0.js";import"./useSpinButton-CBrG7cMI.js";import"./useFilter-g-frVTbT.js";import"./useFieldComponent-ILpXs27H.js";import"./AlertText-F-sJ7jVx.js";import"./AlertIcon-EwQ99KQC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
