import{j as r,r as f}from"./iframe-9LT5pwxo.js";import{a as p,u as d,F as c,t as h}from"./Form-CeOANQlL.js";import{L as o}from"./Label-Cy0HO6mF.js";import{B as n}from"./Button-DgX4Ha9j.js";import{S as x}from"./Section-BblLzrvZ.js";import{A as j}from"./ActionGroup-DkE81dC5.js";import{s as l}from"./Action-CxBB9EbS.js";import{M as b}from"./DateField-jeCX-hpV.js";import{T as t}from"./TimeField-DT-nj83f.js";import{F as E}from"./useFieldComponent-FBKhS2uw.js";import"./index-nuYtCEEu.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./clsx-B-dksMZM.js";import"./index-B4OxUaac.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./context-CZZdPtMN.js";import"./browser-Be7wxfSs.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B9A8CQ6N.js";import"./utils-C12iYS2x.js";import"./Hidden-Dc5yMvqI.js";import"./IconWarning-BGmK8I3p.js";import"./Text-FZjxGLxv.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./LoadingSpinner-7jpPXpdG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BRQOtLOr.js";import"./ProgressBar-DUkmnmeC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CYkWbbQS.js";import"./useFocus-CGIGFm0L.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocusable-6Pd0pdJi.js";import"./ContextMenuSection-BA7OrQRH.js";import"./Dialog-CLeuoHpB.js";import"./RSPContexts-D4jozd1E.js";import"./OverlayArrow-CBGQsLGC.js";import"./useControlledState-B0dx1ah2.js";import"./Collection-e6qlJrU1.js";import"./CollectionBuilder-Bz8h8tJk.js";import"./SelectionIndicator-CcfS7mad.js";import"./Separator-DiqHC5hw.js";import"./SelectionManager-B4R1-nwv.js";import"./useEvent-CmmFmHFu.js";import"./useCollator-D0xJkZLY.js";import"./FocusScope-ahtwD87J.js";import"./VisuallyHidden-kbtTP9xl.js";import"./dynamic-Dp02ioFc.js";import"./getActionGroupSlot-BSebOatG.js";import"./useStatic-C20s3RtG.js";import"./context-CNHQEL1v.js";import"./Form-PBwv22gS.js";import"./Group-C-8wTSfb.js";import"./Input-CuGFAjVN.js";import"./useFormValidation-gXwoIgM4.js";import"./useFormReset-DsyYy3rG.js";import"./useSpinButton-Dv0VkFOd.js";import"./useFilter-CLa0ihME.js";import"./useMakeFocusable-3ac7XBnQ.js";import"./react-children-utilities-CGBnGU1K.js";import"./ClearPropsContext-BgV1DGsr.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,S=T("submit"),Ir={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async F=>{await l(1500),S(F)},u=d({defaultValues:{timeDefaultValue:new b(16,0)}}),a=h();return r.jsx(c,{form:u,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(a,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(a,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(a,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(j,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},i={},m={render:()=>{const e=d();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=d();return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Rr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Rr as __namedExportsOrder,Ir as default};
